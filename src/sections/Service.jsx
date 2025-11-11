import { useState } from "react";
import "./Service.css";

const FORM_ENDPOINT = "https://formspree.io/f/meovqger";

export default function Service() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({}); // { name, email, message }
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const clearError = (e) => {
    const key = e.target.name;
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Ingresá tu nombre.";
    if (!form.email.trim()) next.email = "Ingresá tu email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Email inválido.";
    if (form.message.trim().length < 10) next.message = "Contame un poco más (mínimo 10 caracteres).";
    return next;
  };


  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("sending");

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("message", form.message);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
        mode: "cors",
        redirect: "follow",
      });

      if (res.ok || res.type === "opaque" || res.status === 0) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        return;
      }

      const data = await res.json().catch(() => ({}));
      throw new Error(data?.errors?.[0]?.message || "Ocurrió un error. Probá de nuevo.");
    } catch (err) {
      if (navigator.onLine) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        return;
      }
      setErrorMsg(err.message || "No se pudo enviar. Revisá tu conexión e intentá otra vez.");
      setStatus("error");
    }
  }


  return (
    <section className="service-section" id="servicios">
      {/* ====== Cards de Servicios ====== */}
      <div className="service-card">
        <p className="service-muted">
          Ayudo a personas y equipos a construir soluciones web simples, claras y mantenibles.
        </p>

        <ul className="service-grid">
          <li className="service-item">
            <h3>Desarrollo de sitios web estáticos</h3>
            <p>Creación de páginas web personales o institucionales con HTML, CSS y JavaScript.
              Diseño moderno, responsive y optimizado para mostrar tu marca o negocio.</p>
          </li>
          <li className="service-item">
            <h3>Aplicaciones CRUD</h3>
            <p>Implementación de sistemas de gestión con operaciones básicas (crear, leer, actualizar, eliminar) conectados a base de datos.
              Backend con Spring Boot y persistencia con MySQL.</p>
          </li>
          <li className="service-item">
            <h3>Desarrollo Full Stack</h3>
            <p>Construcción de aplicaciones completas con frontend en React y backend en Spring Boot.
              Comunicación vía API REST y enfoque modular.</p>
          </li>
          <li className="service-item">
            <h3>Dashboards y reportes de datos</h3>
            <p>Análisis y visualización de datos con Excel o Power BI.
              Creación de tableros claros para tomar decisiones basadas en información real.</p>
          </li>
        </ul>
      </div>

      {/* ====== Formulario ====== */}
      <div className="service-card">
        <h2 className="service-subtitle">¿Tenés una idea o proyecto?</h2>
        <p className="service-muted">Escribime y te respondo a la brevedad.</p>

        <form className="service-form" noValidate onSubmit={handleSubmit}>
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

          <div className={`service-field ${errors.name ? "has-error" : ""}`}>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError(e); }}
            />
            {errors.name && <p className="service-error" id="name-error">{errors.name}</p>}
          </div>

          <div className={`service-field ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError(e); }}
            />
            {errors.email && <p className="service-error" id="email-error">{errors.email}</p>}
          </div>

          <div className={`service-field ${errors.message ? "has-error" : ""}`}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Contame brevemente tu necesidad"
              value={form.message}
              onChange={(e) => { setForm({ ...form, message: e.target.value }); clearError(e); }}
              autoComplete="off"
            />
            {errors.message && <p className="service-error" id="message-error">{errors.message}</p>}
          </div>

          <button className="service-btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && <div className="service-alert ok">¡Gracias! Tu mensaje fue enviado.</div>}
          {status === "error" && <div className="service-alert error">{errorMsg}</div>}
        </form>
      </div>
    </section>
  );
}
