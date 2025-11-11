import sisRh from "../assets/projects/sis-rh.webp";
import sisInv from "../assets/projects/sis-inv.webp";
import sisEst from "../assets/projects/sis-est.webp";
import cookies from "../assets/projects/cookies.webp";
import sisCont from "../assets/projects/sis-cont.webp";
import sisTarea from "../assets/projects/sis-tarea.webp";
import inviteImg from "../assets/projects/invite-img.webp";
import odoo from "../assets/projects/odoo.webp";

export const projects = [
  {
    id: "rh-spring-react",
    title: "Sistema de Recursos Humanos",
    stack: ["Spring Boot", "React", "MySQL"],
    description: "CRUD de empleados con API REST y frontend React.",
    repo: "https://github.com/LeandroMussi99/Sistema_RH-SpringBoot-React",
    live: null,
    image: sisRh
  },
  {
    id: "inventario-angular",
    title: "Sistema de Inventarios",
    stack: ["Spring Boot", "Angular", "MySQL"],
    description: "Gestión de productos con autenticación y ABM.",
    repo: "https://github.com/LeandroMussi99/Sistema-Inventario",
    live: null,
    image: sisInv
  },
  {
    id: "estudiantes-csharp",
    title: "Sistema de Estudiantes",
    stack: ["C#", "Windows Forms", "SQL Server"],
    description:
      "Aplicación de escritorio para gestión de alumnos con ABM y validaciones.",
    repo: "https://github.com/LeandroMussi99/Sistema_Estudiantes-CSharp-y-WindowsForms",
    live: null,
    image: sisEst
  },
  {
    id: "cookies-app",
    title: "Cookies App",
    stack: ["Cloudflare Workers","Neon DB","Hono","HTML","CSS","JavaScript",],
    description:
      "E-commerce para venta de cookies con backend serverless y base de datos en la nube.",
    repo: "https://github.com/LeandroMussi99/Cookies-App",
    live: "https://cookies-frontend.pages.dev/",
    image: cookies
  },
  {
    id: "contactos-thymeleaf-springboot",
    title: "Sistema de Contactos",
    stack: ["Spring Boot", "Thymeleaf", "MySQL"],
    description: "Gestión de contactos con autenticación y ABM.",
    repo: "https://github.com/LeandroMussi99/Sistema_Contactos-Thymeleaf-y-SpringBoot",
    live: null,
    image: sisCont
  },
  {
    id: "tareas-javafx-springboot",
    title: "Sistema de Tareas",
    stack: ["JavaFX", "Spring Boot", "MySQL"],
    description: "Gestión de tareas con interfaz de escritorio y backend REST.",
    repo: "https://github.com/LeandroMussi99/Sistema_Tareas-JavaFX-y-SpringBoot",
    live: null,
    image: sisTarea
  },
  {
    id: "invitacion-casamiento",
    title: "Invitación de Casamiento",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Landing page estática diseñada como invitación interactiva de casamiento.",
    repo: "https://github.com/LeandroMussi99/Invitacion-Casamiento",
    live: null,
    image: inviteImg 
  },
  {
    id: "odoo-real-estate",
    title: "Odoo Real Estate",
    stack: ["Odoo", "Python", "XML", "PostgreSQL"],
    description:
      "Módulo para gestión de propiedades inmobiliarias desarrollado en Odoo 18.",
    repo: "https://github.com/LeandroMussi99/Odoo-Real_Estate",
    live: null,
    image: odoo
  },
];
