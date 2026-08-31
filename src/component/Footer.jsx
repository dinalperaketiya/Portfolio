import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <div className="logo-icon-wrap">
                <img src={logoImg} alt="Logo" className="footer-logo-img" />
              </div>
              <span className="logo-text">Dinal<span className="text-gradient">Peraketiya</span></span>
            </a>
            <p className="brand-tagline">
              Designing and developing modern digital products with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials-col">
            <h4 className="links-title">Socials</h4>
            <div className="footer-social-icons">
              <motion.a href="https://github.com/dinalperaketiya" target="_blank" rel="noreferrer" title="GitHub" whileHover={{ y: -3 }}><GithubIcon size={18} /></motion.a>
              <motion.a href="https://www.linkedin.com/in/dinal-peraketiya?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" title="LinkedIn" whileHover={{ y: -3 }}><LinkedinIcon size={18} /></motion.a>
              <motion.a href="mailto:dinalthathsaraperaketiya@gmail.com" title="Email" whileHover={{ y: -3 }}><Mail size={18} /></motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Designed & Developed by Dinal Peraketiya | Full Stack Developer
          </p>

          <motion.button
            className="back-to-top-btn glass-card"
            onClick={scrollToTop}
            title="Back to Top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
