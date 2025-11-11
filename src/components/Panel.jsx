// src/components/Panel.jsx
export default function Panel({ active, onChange, children }) {
  const TABS = [
    { id: 'about',    label: 'Sobre Mi' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'service',  label: 'Servicio' },
  ];
  const TITLES = { about: 'Sobre Mi', projects: 'Portfolio', service: 'Servicio' };

  return (
    <div className="panel">
      <div className="panel-header">
        {/* Título a la izquierda */}
        <h1 className="title-inline">{TITLES[active]}</h1>

        {/* RIEL pegado al borde superior derecho del panel */}
        <div className="tabs-rail">
          <nav className="tabs-group">
            {TABS.map(t => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`tab ${active === t.id ? 'is-active' : ''}`}
                onClick={(e) => { e.preventDefault(); onChange(t.id); }}
              >
                {t.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="panel-body">
        {children}
      </div>
    </div>
  );
}
