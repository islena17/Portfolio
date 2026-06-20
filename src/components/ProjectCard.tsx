import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../types/portfolio';

type Props = { project: Project; index: number };

export const ProjectCard = ({ project, index }: Props) => (
  <motion.article
    className="project-card glass-card h-100"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
  >
    <div className="project-shine"></div>
    <span className="project-category">{project.category}</span>
    <h3 className="h4 fw-bold text-white mt-3">{project.title}</h3>
    <p className="text-soft">{project.description}</p>
    <div className="d-flex flex-wrap gap-2 mb-4">
      {project.stack.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
    </div>
    <ul className="project-list">
      {project.highlights.map((item) => <li key={item}>{item}</li>)}
    </ul>
    <div className="d-flex gap-3 mt-auto pt-3">
      {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-link"><FaGithub /> Código</a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="project-link"><FaExternalLinkAlt /> Web</a>}
    </div>
  </motion.article>
);
