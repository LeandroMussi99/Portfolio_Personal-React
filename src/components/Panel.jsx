// src/components/Panel.jsx
import './Panel.css';

export default function Panel({ active, onChange, children }) {
  const TABS = [
    { id: 'about', label: 'Sobre Mi' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'service', label: 'Servicio' },
  ];

  const TITLES = {
    about: 'Sobre Mi',
    projects: 'Portfolio',
    service: 'Servicio',
  };

  return (
    <div className="panel">
      {/* Header */}
      <header className="panel-header">
        {/* Título principal */}
        <h1 className="title-inline">{TITLES[active]}</h1>

        {/* Navbar / Tabs */}
        <nav className="tabs-rail" aria-label="Navegación principal">
          <div className="tabs-group">
            {TABS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`tab ${active === t.id ? "is-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  onChange(t.id);
                }}
              >
                {t.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Contenido */}
      <div className="panel-body">{children}</div>
    </div>
  );
}
