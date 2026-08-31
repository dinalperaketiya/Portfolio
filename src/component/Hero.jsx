import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, UserCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Hero.css';

import defaultAvatar from '../assets/dp.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [hasCustomImg, setHasCustomImg] = useState(true);

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') {
      setImgSrc(defaultAvatar);
    } else {
      setHasCustomImg(false);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <Sparkles size={15} className="badge-icon" />
            <span>Open for Internships & Entry-Level Roles</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm Dinal Peraketiya <br />
            <span className="text-gradient">Undergraduate &<br /> Full-Stack Developer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            I'm a Computer Information Systems undergraduate at the <strong>Faculty of Computing, Sabaragamuwa University of Sri Lanka</strong>, passionate about Web Development, UI/UX Exploration, and building modern digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download="Dinal_Peraketiya_CV.pdf"
              className="btn btn-cv"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Download CV</span>
              <Download size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Contact Me</span>
              <Mail size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <span className="socials-label">Connect:</span>
            <motion.a
              href="https://github.com/dinalperaketiya"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="GitHub"
              whileHover={{ y: -2 }}
            >
              <GithubIcon size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dinal-peraketiya?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="LinkedIn"
              whileHover={{ y: -2 }}
            >
              <LinkedinIcon size={18} />
            </motion.a>
            <motion.a
              href="mailto:dinalthathsaraperaketiya@gmail.com"
              className="social-link"
              title="Email"
              whileHover={{ y: -2 }}
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Photo / Avatar Section */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="avatar-frame-wrapper">
            <motion.div
              className="avatar-card glass-card"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {hasCustomImg ? (
                <img
                  src={imgSrc}
                  alt="Developer Profile"
                  className="avatar-img"
                  onError={handleImgError}
                />
              ) : (
                <div className="avatar-placeholder">
                  <UserCheck size={56} className="placeholder-icon" />
                  <span>Upload your photo</span>
                  <small>Save to <code>public/profile.jpg</code></small>
                </div>
              )}

              {/* Status Badge */}
              <div className="status-badge glass-card">
                <span className="pulse-dot" />
                <span>Open for work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
