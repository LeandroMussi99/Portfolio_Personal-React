// src/components/SidebarMobile.jsx (Modificado)
import avatar from "../assets/avatar.webp";
import './SidebarMobile.css';

export default function SidebarMobile() {
    return (
        <details className="sidecollapsible sidecollapsible--mobile">

            {/* HEADER COMPACTO (Siempre visible: foto pequeña, nombre, subtítulo) */}
            <summary className="sidecollapsible-trigger" role="button" aria-controls="side-content-mobile">
                <div className="trigger-left">
                    <img src={avatar} className="avatar-mini" alt="Leandro Mussi" />
                    <div>
                        <div className="name-mini">Leandro Mussi</div>
                        <div className="subtitle-mini">Full Stack Developer</div>
                    </div>
                </div>
                <svg className="chevron" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </summary>

            {/* CONTENIDO DESPLEGABLE (SOLO INFO Y SOCIALS) */}
            <div id="side-content-mobile" className="sidecard-content--mobile-expanded">

                {/* ========== CONTENIDO QUE SÍ QUEREMOS (Info de Contacto) ========== */}
                <ul className="info-list">
                    <li className="info-row">
                        <span className="icon-box">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                                <path d="m22 8-10 6L2 8" />
                            </svg>
                        </span>
                        <div>
                            <div className="row-label">Email</div>
                            <a href="mailto:leandromussi99@gmail.com">Leandromussi99@gmail.com</a>
                        </div>
                    </li>
                    {/* ... Resto de info-row (Ubicación, Disponibilidad, Idiomas) ... */}
                    <li className="info-row">
                        <span className="icon-box">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 21s7-5.686 7-12A7 7 0 0 0 5 9c0 6.314 7 12 7 12z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                        </span>
                        <div>
                            <div className="row-label">Ubicación</div>
                            <div>Buenos Aires, Argentina</div>
                        </div>
                    </li>
                    <li className="info-row">
                        <span className="icon-box">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M20 7v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7" />
                                <path d="M16 3v4M8 3v4" />
                                <rect x="4" y="7" width="16" height="2" />
                                <path d="m9 14 2 2 4-4" />
                            </svg>
                        </span>
                        <div>
                            <div className="row-label">Disponibilidad</div>
                            <div>Abierto a oportunidades freelance / trainee</div>
                        </div>
                    </li>
                    <li className="info-row">
                        <span className="icon-box">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                            </svg>
                        </span>
                        <div>
                            <div className="row-label">Idiomas</div>
                            <div>Español (nativo)</div>
                            <div>Inglés (básico)</div>
                        </div>
                    </li>
                </ul>

                <hr className="divider" />

                <div className="socials">
                    <a className="icon-btn" href="https://www.linkedin.com/in/leandro-mussi-077144272/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C21.9 7.74 24 9.6 24 13.26V23H19v-8.38c0-2-0.04-4.58-2.79-4.58-2.79 0-3.22 2.18-3.22 4.42V23H8V8z" />
                        </svg>
                    </a>
                    <a className="icon-btn" href="https://github.com/LeandroMussi99" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.76.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </details>
    );
}