import type { Project, SkillGroup } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'EasySpa',
    category: 'Proyecto Final DAW',
    description: 'Plataforma integral para reservas y gestión de spas con sincronización de citas, empleados y horarios.',
    highlights: ['Reservas inteligentes', 'Panel de administración', 'Gestión de personal', 'Inserción de API de Google Calendar'],
    stack: ['Laravel', 'React', 'TypeScript', 'REST API', 'Google Calendar API'],
    github: 'https://github.com/islena17/EasySpa',
    demo: 'https://easyspa.onrender.com',
  },
  {
    title: 'Freeway Car Hire',
    category: 'Proyecto en producción',
    description: 'Aplicación de alquiler de vehículos con motor de reservas, disponibilidad y precios dinámicos por temporada y extras.',
    highlights: ['Motor de reservas', 'Precios dinámicos', 'Disponibilidad automática', 'Inserción de API de Google Reviews'],
    stack: ['Laravel', 'Blade', 'Backend', 'Pricing Engine', 'Google Reviews API'],
    demo: 'https://freewaycarhire.com',
  },
  {
    title: 'Visitar Alicante',
    category: 'Experiencia profesional',
    description: 'Portal turístico desarrollado durante prácticas con CMS propio, optimización SEO y mapas interactivos.',
    highlights: ['CMS propio', 'CRUD de artículos', 'Optimización SEO', 'Mapas con Leaflet y Google Maps'],
    stack: ['Laravel', 'Blade', 'CMS', 'SEO', 'Leaflet', 'Google Maps'],
    github: 'https://github.com/islena17/visitar-alicante',
    demo: 'https://www.visitaralicante.com',
  },
  {
    title: 'Aplicación de Notas',
    category: 'React Project',
    description: 'Aplicación para consolidar React mediante componentes reutilizables, estado local y experiencia de usuario rápida.',
    highlights: ['Componentes reutilizables', 'Hooks personalizados', 'Persistencia local', 'Interfaz limpia y responsive'],
    stack: ['React', 'TypeScript', 'Hooks', 'LocalStorage', 'CSS'],
    github: 'https://github.com/islena17/Aplicacion_de_notas',
  },
];

export const skills: SkillGroup[] = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Backend', skills: ['PHP', 'Laravel', 'Java', 'Node.js', 'REST API', 'MVC'] },
  { title: 'Datos y herramientas', skills: ['MySQL', 'Git', 'Docker', 'SEO', 'APIs externas'] },
];
