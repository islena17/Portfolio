import { motion } from 'framer-motion';
import { skills } from '../data/projects';

export const Skills = () => (
  <section id="skills" className="section-padding bg-soft-purple">
    <div className="container">
      <div className="section-heading mb-5">
        <span className="eyebrow">Stack técnico</span>
        <h2 className="text-white fw-bold">Tecnologías con las que construyo</h2>
      </div>
      <div className="row g-4">
        {skills.map((group, index) => (
          <motion.div className="col-lg-4" key={group.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <div className="glass-card skill-card h-100">
              <h3 className="h5 text-white mb-3">{group.title}</h3>
              <div className="d-flex flex-wrap gap-2">
                {group.skills.map((skill) => <span className="tech-pill" key={skill}>{skill}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
