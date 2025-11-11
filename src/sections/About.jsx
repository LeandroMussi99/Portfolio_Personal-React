import './About.css';
import Skills from './Skills.jsx';


export default function About() {
  return (
    <section id="about" className="about-section">

      {/* Texto de presentación */}
      <p className="about-text">
        Soy estudiante de la <strong>Licenciatura en Sistemas</strong> en la <strong>Universidad Nacional de Lanús (UNLa)</strong>.
        Me apasiona el desarrollo de software y disfruto aprender nuevas tecnologías tanto en backend (Java, Spring Boot, C#) como en 
        frontend (React, Angular, HTML, CSS, JavaScript).
        Actualmente estoy construyendo proyectos personales y académicos para fortalecer mis conocimientos.
      </p>

      <div className="section-divider"></div>

      {/* ===== Educación ===== */}
      <div className="timeline-block">
        <div className="timeline-header">
          <span className="icon-box small">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m22 10-10-5L2 10l10 5 10-5z" />
              <path d="M2 10v6a2 2 0 0 0 1 1.73L12 22l9-4.27A2 2 0 0 0 22 16v-6" />
            </svg>
          </span>
          <h3>Educación</h3>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Licenciatura en Sistemas</h4>
              <span className="place">Universidad Nacional de Lanús (UNLa) — 2022 • Presente</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Licenciatura en Tecnologías Ferroviarias</h4>
              <span className="place">Universidad Nacional de Lanús (UNLa) — 2019 • 2022</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Bachiller en Administración de Empresas</h4>
              <span className="place">Colegio Palabras, Ezeiza — 2017</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Experiencia ===== */}
      <div className="timeline-block">
        <div className="timeline-header">
          <span className="icon-box small orange">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 3h-8v4h8V3z" />
            </svg>
          </span>
          <h3>Experiencia</h3>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Soporte Técnico</h4>
              <span className="place">Wireless Provider</span>
              <p>Mesa de ayuda, diagnóstico y configuración básica de equipos. Atención a usuarios.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Soporte Técnico</h4>
              <span className="place">Indicom / Contacom (para Telecentro)</span>
              <p>Atención técnica, resolución de incidencias y coordinación con cuadrillas.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h4>Proyectos freelance</h4>
              <span className="place">Desarrollo web / páginas informativas</span>
              <p>Diseño y desarrollo de sitios web. Enfoque en código claro, simple y moderno.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <h3 className="section-title">Mis Habilidades</h3>
      <div className="skills-wrapper">
        <Skills />
      </div>
      
    </section>
  );
}
