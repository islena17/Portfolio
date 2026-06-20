import { motion } from 'framer-motion';

export const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container">
      <div className="section-heading mb-5">
        <span className="eyebrow">Trayectoria</span>
        <h2 className="text-white fw-bold">Experiencia y formación</h2>
      </div>
      <div className="timeline">
        {[
          ['2025 - 2026', 'Desarrolladora Full Stack · WebElx', 'Prácticas desarrollando proyectos web con Laravel, Blade, CMS, SEO, APIs e integraciones externas.'],
          ['2024 - 2026', 'Ciclo Superior DAW · IES Pere Maria Orts Bosch', 'Formación en desarrollo de aplicaciones web, bases de datos, frontend, backend y despliegue.'],
          ['2022 - 2025', 'Recepcionista · Hoteles Ritual Terra', 'Atención al cliente, organización, comunicación y resolución de incidencias en entornos de ritmo alto.'],
        ].map(([date, title, text], index) => (
          <motion.div className="timeline-item" key={title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <span>{date}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
