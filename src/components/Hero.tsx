import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => (
  <section id="home" className="hero-section d-flex align-items-center">
    <div className="container position-relative">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="row align-items-center g-5">
        <div className="col-lg-7">
          <span className="badge rounded-pill glass-badge mb-4">Disponible para oportunidades web</span>
          <h1 className="display-3 fw-bold text-white mb-4">Full Stack Developer <span className="gradient-text">Laravel · React · TypeScript</span></h1>
          <p className="lead text-soft mb-4">Desarrollo aplicaciones web modernas, APIs REST, paneles de administración y experiencias digitales con foco en rendimiento, diseño y usabilidad.</p>
          <div className="d-flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-purple btn-lg">Ver proyectos</a>
            <a href="https://github.com/islena17" className="btn btn-outline-light btn-lg" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="#contact" className="btn btn-ghost btn-lg">Contacto</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="code-card glass-card floating-card">
            <div className="code-dots"><span></span><span></span><span></span></div>
            <pre>{`const developer = {\n  name: 'Islena Polo',\n  stack: ['Laravel', 'React', 'TS'],\n  focus: 'Web apps útiles',\n  status: 'learning & building'\n};`}</pre>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
