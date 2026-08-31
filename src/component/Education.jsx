import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, School } from 'lucide-react';
import './Education.css';

const timelineData = [
  {
    id: 1,
    title: 'B.S. in Computer Information Systems',
    institution: 'Sabaragamuwa University of Sri Lanka (Faculty of Computing)',
    location: 'Sri Lanka',
    period: 'Undergraduate',
    description: 'Currently pursuing my undergraduate degree with a focus on software development, databases, web technologies, networking, and information systems.',
    badge: 'University',
    icon: GraduationCap,
  },
  {
    id: 2,
    title: '(G.C.E. A/L-2022),(G.C.E. O/L-2019) ',
    institution: 'Dharmaraja College, Kandy',
    location: 'Kandy, Sri Lanka',
    period: '2009-2023',
    description: 'I completed my G.C.E. A/L (2022) and G.C.E. O/L (2019) at Dharmaraja College, Kandy, where I built a strong foundation in academics, problem-solving, and teamwork.',
    badge: 'School',
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="timeline-icon-badge">
                  <Icon size={18} />
                </div>

                <div className="timeline-card glass-card">
                  <div className="card-top font-sans">
                    <span className="type-badge">{item.badge}</span>
                    <div className="period">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution">{item.institution}</span>
                    <span className="location">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>

                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
