import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, ChevronRight, Menu, X, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skills = [
    'React.js', 'Node.js', 'Laravel', 'MongoDB', 'PostgreSQL', 
    'Express.js', 'Socket.io', 'Redux.js', 'REST APIs', 'JWT Auth'
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: '360DegreeInfo Pvt Ltd',
      period: 'Feb 2024 - Present',
      details: [
        'Sole developer of Tamil Nadu\'s Employee Promotion Management System handling 50,000+ records.',
        'Architected a state-wide public registration portal serving weavers across Tamil Nadu.',
        'Developed end-to-end cafeteria billing system with real-time balance tracking.'
      ]
    },
    {
      role: 'MERN Stack Developer',
      company: 'Jnana Inventive Pvt Ltd',
      period: 'Jun 2022 - Feb 2024',
      details: [
        'Engineered a live car-bidding platform using React.js, Laravel, and Socket.io.',
        'Built a full-featured CRM with AI audio-to-text call transcription and WebSocket notifications.',
        'Contributed to SaaS product modules including billing, stock management, and expense tracking.'
      ]
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Dart Innovations',
      period: 'Aug 2021 - Jun 2022',
      details: [
        'Developed SPA web applications and business automation tools using the MERN stack.',
        'Owned frontend development, REST API integration, and UI implementation.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Amudham TNCSC',
      desc: 'Distributed POS solution deployed across multiple districts with client-side architecture and zero downtime.',
      link: 'https://amudham.tn.gov.in/'
    },
    {
      title: 'Revenue ePMS',
      desc: 'Employee Promotion Management System handling 50,000+ records with automated multi-tier workflows.',
      link: 'https://epmsrevenue.tn.gov.in/'
    },
    {
      title: 'Powerloom Portal',
      desc: 'State-wide public registration portal with dynamic form modules and JWT-secured auth.',
      link: 'https://tnhandlooms.tn.gov.in/pms/Auth'
    },
    {
      title: 'DMY Jewellers',
      desc: 'Gold monthly scheme buying platform with secure payment gateways and user dashboards.',
      link: 'https://app.dmyjewellers.sg/'
    },
    {
      title: 'Floor Locator Nexus',
      desc: 'Membership-based project assignment platform connecting builders, contractors, and partners.',
      link: 'https://floorlocatornexus.com/'
    },
    {
      title: 'Vazhithunai AI',
      desc: 'Comprehensive temple search and travel expense guide with AI-powered recommendations.',
      link: 'https://vazhithunai.ai/'
    }
  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">Suriya<span>.dev</span></div>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="hero-greeting">Hi, I am Suriya Prakash</motion.span>
            <motion.h1 variants={fadeInUp} className="hero-title">
              Crafting robust <br/><span>digital experiences.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              Full Stack Developer with 5+ years of experience architecting and shipping production-grade applications.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="/resume.pdf" download="Suriya_Prakash_Resume.pdf" className="btn btn-outline">
                Resume <Download size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image-wrapper">
              {/* Fallback image since the original was lost in Vite setup */}
              <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" alt="Suriya Prakash" className="hero-image" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section glass-section container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-grid">
            <div className="about-text glass">
              <div style={{padding: '2rem'}}>
                <p>
                  I am a passionate Full Stack Developer with expertise in the MERN Stack and Laravel. 
                  Over the past 5 years, I have engineered scalable web applications for government sectors, 
                  startups, and enterprises.
                </p>
                <p>
                  I specialize in real-time systems, REST APIs, and microservices architecture. 
                  My focus is on writing clean, efficient code and delivering seamless user experiences 
                  from backend databases to frontend interfaces.
                </p>
              </div>
            </div>
            <div className="about-skills">
              <h3 style={{marginBottom: '1.5rem', fontSize: '1.5rem'}}>Technical Arsenal</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Professional <span>Journey</span></h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <div className="timeline-date">{exp.period}</div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <ul>
                    {exp.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card glass"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="contact-container glass" style={{padding: '3rem'}}>
            <h2 className="section-title" style={{marginBottom: '1rem'}}>Get In <span>Touch</span></h2>
            <p className="contact-text">
              I am currently open for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <a href="mailto:suriyaaasuriya07@gmail.com" className="btn btn-primary" style={{marginBottom: '2rem'}}>
              Say Hello
            </a>
            
            <div className="contact-links">
              <a href="https://github.com/Suriyaprakash0902" target="_blank" rel="noreferrer" className="contact-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/suriyaaa-suriya-4bb73a26a" target="_blank" rel="noreferrer" className="contact-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:suriyaaasuriya07@gmail.com" className="contact-icon">
                <Mail size={24} />
              </a>
              <a href="tel:+918122326558" className="contact-icon">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>Built with React & Framer Motion by Suriya Prakash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
