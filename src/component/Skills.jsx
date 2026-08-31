import { motion } from 'framer-motion';
import { Database, Layout, Palette, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: '#2563eb',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js',],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#0284c7',
    skills: ['Node.js', 'Java', 'REST APIs',],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#10b981',
    skills: ['SQL', 'PostgreSQL', 'MongoDB',],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'VS Code',],
  },
  {
    title: 'Design',
    icon: Palette,
    color: '#8b5cf6',
    skills: ['Figma', 'Adobe Photoshop', 'UI/UX'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Technical Expertise</span>
          <h2 className="section-title">Skills & <span className="text-gradient">Technologies</span></h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, catIdx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="card-top-header">
                  <div
                    className="card-icon-wrap"
                    style={{
                      color: cat.color,
                      backgroundColor: `${cat.color}15`,
                      borderColor: `${cat.color}30`,
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 className="card-title" style={{ color: cat.color }}>{cat.title}</h3>
                </div>

                <ul className="skills-bullet-list">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="bullet-item">
                      <span className="bullet-dot" style={{ backgroundColor: cat.color }} />
                      <span className="skill-text">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
