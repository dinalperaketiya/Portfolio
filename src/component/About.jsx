import { motion } from 'framer-motion';
import { BookOpen, Code, GitCommit, GitPullRequest, GraduationCap, Zap } from 'lucide-react';
import GithubActivity from './GithubActivity';
import './About.css';

const stats = [
  { icon: GraduationCap, count: 'Student', label: 'CIS Undergraduate' },
  { icon: GitCommit, count: '10', label: 'Public Repositories' },
  { icon: GitPullRequest, count: 'Active', label: 'Open Source Contributor' },
  { icon: Zap, count: '94%', label: 'GitHub Commits' },
];

const highlights = [
  {
    icon: GitPullRequest,
    title: 'Open Source Contributor',
    description: 'Active contributor to open-source organizations and public codebases.',
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'Building with React, Next.js, JavaScript, Node.js, and SQL / PostgreSQL.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learner',
    description: 'Constantly exploring new web technologies, APIs, and modern development tools.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>

        <div className="about-grid">
          {/* Left bio card */}
          <motion.div
            className="about-bio-card glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="bio-heading">Undergraduate & Future Full-Stack Developer</h3>
            <p className="bio-text">
              I’m a Computer Information Systems undergraduate at the <strong>Faculty of Computing, Sabaragamuwa University of Sri Lanka</strong>. I’m passionate about modern web development, UI/UX exploration, networking, and building practical digital solutions.
            </p>
            <p className="bio-text">
              My core learning focus spans React, JavaScript, Java, Node.js, SQL, PostgreSQL, and project planning. I actively author code commits, pull requests, and open-source contributions across public repositories on GitHub.
            </p>

            <div className="bio-info-list">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-val">Dinal Peraketiya</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role:</span>
                <span className="info-val">Future Developer • UI/UX Explorer</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-val">Sri Lanka (UTC +05:30)</span>
              </div>
              <div className="info-item">
                <span className="info-label">University:</span>
                <span className="info-val">Sabaragamuwa University of Sri Lanka</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-val highlight">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights & Stats */}
          <div className="about-highlights-wrapper">
            <div className="stats-grid">
              {stats.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="stat-card glass-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                  >
                    <div className="stat-icon">
                      <IconComp size={24} />
                    </div>
                    <div className="stat-num text-gradient">{item.count}</div>
                    <div className="stat-label">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="highlights-list">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="highlight-card glass-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="highlight-icon">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* GitHub Contribution Activity & Commit Breakdown */}
        <GithubActivity />
      </div>
    </section>
  );
}
