import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

import elderexpertImg from '../assets/elderexpert.jpg';
import ceyworkImg from '../assets/ceywork.jpg';
import fmdspImg from '../assets/fmdsp.jpg';
import aiFashionImg from '../assets/ai_fashion.jpg';

const categories = ['All', 'Done', 'Ongoing'];

const projectsData = [
  {
    id: 1,
    title: 'ElderExpert',
    subtitle: 'AI-Powered Expert Knowledge Sharing Platform',
    projectType: 'Group Project',
    status: 'Ongoing',
    description: 'An AI-powered platform designed to connect retired professionals with companies and young professionals. The platform enables companies to hire experienced experts for project-based work while allowing students and junior professionals to receive mentorship and knowledge.',
    contribution: 'Worked on system design, backend development, database integration, authentication, and API development. Contributed to developing the overall architecture and implementing communication between system components.',
    image: elderexpertImg,
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Git', 'Firebase'],
    githubUrl: 'https://github.com/dinalperaketiya/ElderExpert',
  },
  {
    id: 2,
    title: 'CeyWork',
    subtitle: 'Human Resource Management System',
    projectType: 'Group Project',
    status: 'Ongoing',
    description: 'A Human Resource Management System designed to manage employee information and streamline HR-related workflows. The platform provides functionalities for managing employee data and supporting day-to-day human resource operations.',
    contribution: 'Developed the backend functionalities and APIs using Laravel and PHP. Designed and managed the MySQL database, including tables, relationships, and CRUD operations. Implemented backend logic for employee-related workflows and supported system integration.',
    image: ceyworkImg,
    tags: ['Laravel', 'PHP', 'MySQL', 'React.js', 'JavaScript'],
    githubUrl: 'https://github.com/ChanindiRanasinghe/CeyWork',
  },
  {
    id: 3,
    title: 'Federated Map Data-Sharing Protocol (FMDSP)',
    subtitle: 'Federated Geospatial Data-Sharing Platform',
    projectType: 'Group Project',
    status: 'Done',
    description: 'A federated protocol that enables independent map servers to discover, communicate, and synchronize geospatial data securely using open interoperability standards.',
    contribution: 'Contributed to system architecture, API development, data synchronization, database design, and geospatial data management.',
    image: fmdspImg,
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'PostGIS', 'OGC API Features', 'ActivityPub', 'REST API', 'Git'],
    githubUrl: 'https://github.com/orgs/fedratlas-org/repositories',
  },
  {
    id: 4,
    title: 'AI Fashion Recommendation System',
    subtitle: 'AI-Powered Clothing Recommendation Platform',
    projectType: 'Personal Project',
    status: 'Ongoing',
    description: 'Developing an AI-powered fashion platform where users can upload a photo and receive clothing recommendations based on their appearance, style, and available products in the system.',
    contribution: 'Designing and developing the full-stack application, including image upload, user authentication, clothing product management, recommendation logic, and integration of AI-based image analysis with available fashion items.',
    image: aiFashionImg,
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript', 'AI/ML'],
    githubUrl: 'https://github.com/dinalperaketiya',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.status.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Featured Work & Case Studies</span>
          <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
        </motion.div>

        {/* Filter Categories */}
        <div className="filter-container">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="project-card glass-card"
                >
                  <div className="project-image-wrapper">
                    <div className="card-badges-row">
                      <span className="project-type-badge">{project.projectType}</span>
                      <span className={`project-status-badge ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <div className="project-actions">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn"
                          title="View Source Code on GitHub"
                          whileHover={{ scale: 1.15 }}
                        >
                          <GithubIcon size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header-info">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-subtitle">{project.subtitle}</span>
                    </div>

                    <p className="project-desc">{project.description}</p>

                    {project.contribution && (
                      <div className="contribution-box">
                        <span className="contribution-title">My Contribution</span>
                        <p className="contribution-text">{project.contribution}</p>
                      </div>
                    )}

                    <div className="project-footer">
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="github-repo-link"
                        title={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={16} />
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-projects-msg">
                No {activeCategory.toLowerCase()} projects to display right now. Check back soon!
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

