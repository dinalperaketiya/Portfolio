import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'dinalthathsaraperaketiya@gmail.com',
    link: 'mailto:dinalthathsaraperaketiya@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    value: '+94 776854597',
    link: 'tel:+94776854597',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kandy, Sri Lanka / Remote',
    link: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dinalthathsaraperaketiya@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work <span className="text-gradient">Together</span></h2>
        </motion.div>

        <div className="contact-grid">
          {/* Left Contact Info */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-text-box">
              <h3 className="contact-heading">Got a project in mind?</h3>
              <p className="contact-subtext">
                Feel free to reach out if you want to collaborate on a new app, discuss freelance opportunities, or simply say hello!
              </p>

              <motion.button
                className="copy-email-btn glass-card"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} className="btn-icon" />
                <span>dinalthathsaraperaketiya@gmail.com</span>
                {copiedEmail ? <Check size={16} className="copied" /> : <Copy size={16} />}
              </motion.button>
            </div>

            <div className="contact-cards-list">
              {contactCards.map((item) => {
                const IconComp = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    className="contact-card glass-card"
                    whileHover={{ x: 6 }}
                  >
                    <div className="card-icon">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <div className="card-label">{item.title}</div>
                      <div className="card-val">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            className="contact-form-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">
                  <Check size={32} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll respond to your message as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
