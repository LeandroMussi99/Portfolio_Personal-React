import { useRef, useState, useEffect } from "react";
import "./Skills.css";
import { skills } from "../data/skills";
import useScreenSize from "../hooks/useScreenSize";

const CATEGORIES = [
  { title: "Lenguajes de Programación", items: skills.languages },
  { title: "Desarrollo Frontend", items: skills.frontend },
  { title: "Desarrollo Backend", items: skills.backend },
  { title: "Bases de Datos", items: skills.databases },
  { title: "Herramientas", items: skills.tools },
];

export default function Skills() {
  const { isMobile } = useScreenSize(900);
  const LEN = CATEGORIES.length;

  // Índice visible en el track (con clones). Arrancamos en 1 (primer real).
  const [visIndex, setVisIndex] = useState(1);
  // Para cortar transición al teletransportar
  const [noAnim, setNoAnim] = useState(false);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const AUTOPLAY_MS = 4500;
  const isJumpingRef = useRef(false);
  const trackElRef = trackRef;

  // Calcula el índice "real" 0..LEN-1 para dots / título
  const realIndex = (visIndex - 1 + LEN) % LEN;

  // Helpers
  const disableAnimOneTick = (cb) => {
    isJumpingRef.current = true;
    setNoAnim(true);
    cb?.();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoAnim(false);
        setTimeout(() => {
          isJumpingRef.current = false;
        }, 30);
      });
    });
  };

  const go = (dir) => setVisIndex((i) => i + dir);
  const goTo = (i) => setVisIndex(i + 1);

  // TransitionEnd robusto
  const handleTransitionEnd = (e) => {
    // 1) El evento debe ser del track, no de un hijo
    if (e.target !== trackElRef.current) return;

    // 2) Si estamos en un “salto” ya manejado, ignoramos este end
    if (isJumpingRef.current) return;

    // 3) Teletransporte controlado
    if (visIndex === 0) {
      setPaused(true);
      disableAnimOneTick(() => setVisIndex(LEN));
      setTimeout(() => setPaused(false), 60);
    } else if (visIndex === LEN + 1) {
      setPaused(true);
      disableAnimOneTick(() => setVisIndex(1));
      setTimeout(() => setPaused(false), 60);
    }
  };

  // Swipe táctil
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0,
      dx = 0,
      touching = false;

    const down = (e) => {
      touching = true;
      startX = e.touches[0].clientX;
      dx = 0;
      setPaused(true);
    };
    const move = (e) => {
      if (!touching) return;
      dx = e.touches[0].clientX - startX;
    };
    const up = () => {
      if (!touching) return;
      touching = false;
      if (dx > 60) go(-1);
      else if (dx < -60) go(1);
      setPaused(false);
    };

    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", up, { passive: true });
    return () => {
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", up);
    };
  }, []);

  // Hover/focus pausa + pestaña oculta
  useEffect(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);
    cont.addEventListener("mouseenter", onEnter);
    cont.addEventListener("mouseleave", onLeave);
    cont.addEventListener("focusin", onEnter);
    cont.addEventListener("focusout", onLeave);

    const vis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", vis);

    return () => {
      cont.removeEventListener("mouseenter", onEnter);
      cont.removeEventListener("mouseleave", onLeave);
      cont.removeEventListener("focusin", onEnter);
      cont.removeEventListener("focusout", onLeave);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  //Lógica para la barra de progreso manual (SOLO MÓVIL)
  useEffect(() => {
    if (!isMobile) return; // Solo ejecutar si es móvil

    // Necesitamos el viewport real. En móvil, el scroll lo hace el .slides-viewport
    const viewport = containerRef.current?.querySelector(".slides-viewport");
    const progressBar = containerRef.current?.querySelector(".progress-track");

    if (!viewport || !progressBar) return;

    const updateProgress = () => {
      const scrollAmount = viewport.scrollLeft;
      const scrollMax = viewport.scrollWidth - viewport.clientWidth;

      if (scrollMax === 0) return;

      const progressPercentage = (scrollAmount / scrollMax) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    };

    viewport.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => viewport.removeEventListener("scroll", updateProgress);
  }, [isMobile]); // Re-ejecutar cuando cambia el modo

  // Autoplay
  useEffect(() => {
    if (paused || isJumpingRef.current) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, visIndex]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setPaused(true);
      go(1);
    }
    if (e.key === "ArrowLeft") {
      setPaused(true);
      go(-1);
    }
  };

  // Construimos slides con clones
  const slides = [
    CATEGORIES[LEN - 1], // clone del último al principio
    ...CATEGORIES, // reales
    CATEGORIES[0], // clone del primero al final
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="skills-carousel"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Flechas */}
      <button
        className="slide-arrow left"
        aria-label="Anterior"
        onClick={() => {
          setPaused(true);
          go(-1);
        }}
      >
        ‹
      </button>
      <button
        className="slide-arrow right"
        aria-label="Siguiente"
        onClick={() => {
          setPaused(true);
          go(1);
        }}
      >
        ›
      </button>

      <div className="slides-viewport">
        <div
          ref={trackRef}
          className={`slides-track ${noAnim ? "no-anim" : ""}`}
          style={{ transform: `translateX(-${visIndex * 100}%)` }}
          aria-live="polite"
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map(({ title, items }, idx) => (
            <article key={`${title}-${idx}`} className="slide">
              <div className="slide-header">
                <h3 className="skills-title">{title}</h3>
              </div>

              <div className="slide-content">
                {items.map((s) => (
                  <div
                    key={s.name}
                    className="skill-pill"
                    title={s.name}
                    style={{
                      boxShadow: `0 0 10px ${s.color}44`, // glow tenue
                      borderColor: `${s.color}55`, // borde suave
                    }}
                  >
                    <i className={`${s.icon} skill-icon`} aria-hidden="true" />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* INDICADOR CONDICIONAL */}
      {isMobile ? (
        /* BARRA DE PROGRESO (SOLO MÓVIL) */
        <div className="scroll-progress-bar">
          <div className="progress-track" />
        </div>
      ) : (
        /* DOTS ORIGINALES (SOLO DESKTOP) */
        <div className="dots">
          {CATEGORIES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === realIndex ? "active" : ""}`}
              aria-label={`Ir a la categoría ${i + 1}`}
              onClick={() => {
                setPaused(true);
                goTo(i);
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
