import { FaEnvelope, FaGithub } from 'react-icons/fa';

export const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container">
      <div className="glass-card contact-card text-center">
        <span className="eyebrow">Contacto</span>
        <h2 className="text-white fw-bold mb-3">¿Creamos algo juntas?</h2>
        <p className="text-soft mx-auto mb-4">Estoy abierta a oportunidades como desarrolladora web junior/full stack, especialmente en equipos donde pueda seguir creciendo con Laravel, React y TypeScript.</p>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a className="btn btn-purple btn-lg" href="mailto:islenapolo17@gmail.com"><FaEnvelope /> islenapolo17@gmail.com</a>
          <a className="btn btn-outline-light btn-lg" href="https://github.com/islena17" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>
    </div>
  </section>
);
