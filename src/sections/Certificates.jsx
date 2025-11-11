import { useState } from 'react';
import { certificates } from '../data/certificates';
import './Certificates.css';

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="certs-section">
      <div className="certs-header">
        <h2 style={{ margin:0 }}>Certificados</h2>
      </div>

      <div className="certs-grid">
        {certificates.map(c => (
          <article key={c.id} className="cert-card">
            <div className="cert-thumb" onClick={() => setActive(c)} role="button" tabIndex={0}
                 onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setActive(c)}>
              <img src={c.img} alt={`${c.title} - ${c.issuer}`} />
            </div>

            <h4 className="cert-title">{c.title}</h4>
            <p className="cert-meta">
              <span>{c.issuer}</span> · <span>{c.date}</span>
            </p>

            <div style={{ display:'flex', gap:10 }}>
              <button className="btn sm ghost" onClick={() => setActive(c)} style={{ cursor:'pointer' }}>
                Ver
              </button>
              {c.verifyUrl && (
                <a className="btn sm" href={c.verifyUrl} target="_blank" rel="noreferrer">
                  Verificar
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="preview-backdrop" onClick={() => setActive(null)}>
          <div className="preview-modal" onClick={e => e.stopPropagation()}>
            <img className="preview-img" src={active.img} alt={active.title} />
            <div style={{ display:'flex', gap:12, marginTop:12, justifyContent:'flex-end' }}>
              <button className="btn sm" onClick={() => setActive(null)}>Cerrar</button>
              {active.verifyUrl && (
                <a className="btn ghost sm" href={active.verifyUrl} target="_blank" rel="noreferrer">
                  Verificar
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
