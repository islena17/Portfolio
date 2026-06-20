import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container">
      <div className="section-heading text-center mx-auto mb-5">
        <span className="eyebrow">Proyectos</span>
        <h2 className="text-white fw-bold">Aplicaciones reales, APIs y experiencias web</h2>
        <p className="text-soft">Una selección de proyectos que muestran backend, frontend, integraciones externas y trabajo con productos en producción.</p>
      </div>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={project.title}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
