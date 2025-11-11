import { useState } from "react";
import { Eye, RotateCcw } from "lucide-react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Projects.css";
import Certificates from "./Certificates.jsx";

export default function Projects() {
  const [allFlipped, setAllFlipped] = useState(false);

  const hasAnyPreview = projects.some((p) => !!p.image);

  return (
    <section id="projects" style={{ paddingTop: 0, marginTop: "-8px", position: "relative" }}>
      {hasAnyPreview && (
        <div style={{ display: "flex", justifyContent: "flex-end",marginBottom: 8,}}>
          <button className="btn ghost sm" style={{cursor: "pointer", padding: "6px 10px", display: "flex", alignItems: "center", gap: "6px",}}
                  onClick={() => setAllFlipped((v) => !v)}
                  aria-pressed={allFlipped}
                  title={allFlipped ? "Ocultar previews" : "Mostrar previews"}
          >
            {allFlipped ? <RotateCcw size={16} /> : <Eye size={16} />}
          </button>
        </div>
      )}

      <div className="grid" style={{ marginTop: 10 }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} forceFlip={allFlipped} />
        ))}
      </div>

      <div className="section-divider"></div>
      <Certificates />
    </section>
  );
}
