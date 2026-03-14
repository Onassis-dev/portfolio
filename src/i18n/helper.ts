const ui = {
  code: {
    es: "Código",
    en: "Code",
  },
  title: {
    es: "Hola, Soy",
    en: "Hi, I'm",
  },
  titlePopup: {
    es: "Es un nombre griego",
    en: "It's a Greek name",
  },
  description: {
    es: "Soy un desarrollador web con más de 3 años de experiencia. Me gusta crear software que tenga un impacto social y disfruto participar en todo el proceso, desde la arquitectura hasta la experiencia de usuario.",
    en: "I'm a web developer with over 3 years of experience. I enjoy creating software that has a social impact and I like being involved in the entire process, from architecture to user experience.",
  },
  contact: {
    es: "Contáctame",
    en: "Contact me",
  },
  projects: {
    es: "Mis proyectos",
    en: "My projects",
  },
  projectsPopup: {
    es: "Bonitos, ¿no? 🤩",
    en: "Nice, right? 🤩",
  },
  experience: {
    es: "Experiencia",
    en: "Experience",
  },
  experiencePopup: {
    es: "Solo es el comienzo 🚀",
    en: "This is just the beginning 🚀",
  },
  skillsPopup: {
    es: "Solo las principales 👻",
    en: "Only the main ones 👻",
  },
  collaborate: {
    es: "Colaboremos",
    en: "Let's collaborate",
  },
  collaboratePopup: {
    es: "Será divertido 😁",
    en: "It'll be fun 😁",
  },
  bcpetRole: {
    es: "Programador y sistemas en CSTGRP",
    en: "Developer and Systems Administrator at CSTGRP",
  },
  bcpetDescription: {
    es: "Me dedico a desarrollar un sistema ERP para ayudar a la organización de la empresa. Logramos centralizar muchos de los procesos y crear una plataforma útil para todos los empleados. Al mismo tiempo, me encargo de dar soporte técnico, administrar servidores, entre otras actividades.",
    en: "I'm dedicated to developing an ERP system to help with company organization. We managed to centralize many processes and create a useful platform for all employees. Additionally, I'm responsible for technical support, server administration, among other activities.",
  },
  freelanceRole: {
    es: "Desarrollador Independiente",
    en: "Solo developer",
  },
  freelanceDescription: {
    es: "Me dedico a desarrollar productos digitales de calidad a precios accesibles. Buscando lograr un impacto social.",
    en: "I'm dedicated to developing quality digital products at affordable prices. Seeking to make a social impact.",
  },
  email: {
    es: "Correo:",
    en: "Email:",
  },
  location: {
    es: "Ubicación:",
    en: "Location:",
  },
  locationText: {
    es: "🇲🇽 Tijuana, frontera de 🇺🇸",
    en: "🇲🇽 Tijuana, border with 🇺🇸",
  },
  linkedin: {
    es: "LinkedIn:",
    en: "LinkedIn:",
  },
  github: {
    es: "GitHub:",
    en: "GitHub:",
  },
  visit: {
    es: "Visitar",
    en: "Visit",
  },
  nav_home: {
    es: "Inicio",
    en: "Home",
  },
  nav_projects: {
    es: "Proyectos",
    en: "Projects",
  },
  nav_experience: {
    es: "Experiencia",
    en: "Experience",
  },
  nav_skills: {
    es: "Stack",
    en: "Skills",
  },
  nav_contact: {
    es: "Contacto",
    en: "Contact",
  },
  nav_blog: {
    es: "Blog",
    en: "Blog",
  },
  description_churchpaq: {
    es: "SaaS todo en uno para iglesias. Permite gestionar miembros, eventos, sitio web, blog, finanzas e inventario. Facilita la administración colaborativa entre varios usuarios desde una sola plataforma.",
    en: "An all-in-one SaaS for churches. It manages members, events, website, blog, finances and inventory. Supports collaborative administration in a unified platform.",
  },
  title_internal_system: {
    es: "ERP personalizado",
    en: "Custom ERP",
  },
  description_internal_system: {
    es: "Sistema hecho a medida para unificar todos los procesos administrativos de la empresa, desde almacen y producción hasta generacion de documents y reportes. Cuenta con 14 modulos diferentes para cubrir todas las necesidades de la empresa.",
    en: "Custom system to unify all administrative processes of the company, from inventory and production to document and report generation. It has 14 different modules to cover all the needs of the company.",
  },
  description_capupet: {
    es: "Herramienta de administracion completa para refugios de animales, completamente gratuita. Los refugios pueden administrar y publicar mascotas, registrar prospectos, tareas y mucho más.",
    en: "A full featured tool for animal shelters, completely free. Shelters can manage and publish pets, register prospects, tasks and more.",
  },
  meta_description: {
    es: "Descubre mi portafolio de proyectos y experiencia como desarrollador web.",
    en: "Discover my portfolio of projects and experience as a web developer",
  },
  headTitle: {
    es: "Portafolio - Onassis Salinas",
    en: "Portfolio - Onassis Salinas",
  },
};

export const t = (locale: string, text: keyof typeof ui) => {
  return ui[text][locale];
};
