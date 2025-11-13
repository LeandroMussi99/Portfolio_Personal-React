import { useEffect, useState } from 'react';
import './ProjectCard.css';

export default function ProjectCard({
  title = '',
  stack = [],
  description = '',
  repo = '#',
  live = null,
  image = null,
  forceFlip = false
}) {
  const [flipped, setFlipped] = useState(false);

  // Estado visual final: respeta el toggle global si hay imagen
  const isFlipped = (image && forceFlip) || flipped;

  // Si se apaga el toggle global, cerramos flips manuales
  useEffect(() => {
    if (!forceFlip) setFlipped(false);
  }, [forceFlip]);

  // Esc cierra cuando está volteada manualmente (y no está el toggle global)
  useEffect(() => {
    if (!(image && flipped) || forceFlip) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setFlipped(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [image, flipped, forceFlip]);

  // Handlers de interacción
  const canInteract = image && !forceFlip;
  const toggleFlip = () => {
    if (!canInteract) return;
    setFlipped(v => !v);
  };

  const onKeyDown = (e) => {
    if (!canInteract) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    } else if (e.key === 'Escape' && flipped) {
      setFlipped(false);
    }
  };

  return (
    <article
      className={`project-card ${isFlipped ? 'is-flipped' : ''}`}
      onDoubleClick={canInteract ? toggleFlip : undefined}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="group"
      aria-label={`Proyecto ${title}`}
      aria-expanded={isFlipped}
    >
      {/* FRONT */}
      <div className="pc-face pc-front">
        <h3 style={{ margin: '0 0 6px' }}>{title}</h3>
        <p className="desc" style={{ margin: '0 0 10px', color: 'var(--muted)' }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          {(stack ?? []).map(tag => <span key={tag} className="chip">{tag}</span>)}
        </div>

        <div className="actions">
          <a className="btn sm" href={repo} target="_blank" rel="noreferrer">Código</a>
          {live && <a className="btn ghost sm" href={live} target="_blank" rel="noreferrer">Demo</a>}
          {canInteract && (
            <button
              type="button"
              className="btn ghost sm"
              style={{ cursor: 'pointer' }}
              onClick={() => setFlipped(true)}
              aria-pressed={isFlipped}
              aria-label="Abrir vista previa del proyecto"
            >
              Preview
            </button>
          )}
        </div>
      </div>

      {/* BACK */}
      <div className="pc-face pc-back">
        {image && <img className="thumb-large" src={image} alt={`${title} preview`} />}
        <div className="actions">
          {canInteract && (
            <button
              type="button"
              className="btn sm"
              style={{ cursor: 'pointer' }}
              onClick={() => setFlipped(false)}
            >
              Volver
            </button>
          )}
          <a className="btn ghost sm" href={repo} target="_blank" rel="noreferrer">Código</a>
          {live && <a className="btn ghost sm" href={live} target="_blank" rel="noreferrer">Demo</a>}
        </div>
      </div>
    </article>
  );
}
