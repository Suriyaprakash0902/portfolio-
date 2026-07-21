import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { Terminal, Download, Code2, Database, Layout, Server, ExternalLink, Menu, X, FolderGit2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiPostgresql, SiMongodb } from 'react-icons/si';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Console Easter Egg
    console.log(
      "%c🚀 Welcome to Suriya's Portfolio! %c\nIf you're reading this, you must be a developer. Let's build something awesome: suriyaaasuriya07@gmail.com",
      "color: #06b6d4; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #06b6d4;",
      "color: #10b981; font-size: 14px;"
    );

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

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
      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div 
        className="custom-cursor-dot"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Background Grid */}
      <div className="bg-grid"></div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <Terminal size={24} className="project-folder-icon" />
            Suriya<span>.dev</span>
          </div>
          
          <div className="nav-links">
            <a href="#home">_home</a>
            <a href="#about">_about</a>
            <a href="#experience">_experience</a>
            <a href="#projects">_projects</a>
            <a href="#contact">_contact</a>
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
            <motion.div variants={fadeInUp} className="hero-terminal">
              <span>$</span>
              <TypeAnimation
                sequence={[
                  'whoami',
                  1000,
                  'Suriya Prakash',
                  2000,
                  './execute_skills.sh',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-title">
              Architecting the <br/><span>digital future.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="hero-subtitle">
              Full Stack Developer with 5+ years of experience engineering highly scalable, production-grade web applications using the MERN stack and Laravel.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="hero-actions">
              <a href="#projects" className="btn btn-primary">Deploy Work</a>
              <a href="/resume.pdf" download="Suriya_Prakash_Resume.pdf" className="btn btn-outline">
                <Download size={18} /> Resume.pdf
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-image-wrapper">
              <img src="/profile.jpeg" alt="Suriya Prakash" className="hero-image" onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop"}} />
            </div>
            {/* Floating Tech Icons */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: 'absolute', top: '-20px', left: '-20px', fontSize: '3rem', color: '#61DAFB' }}>
              <FaReact />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '3rem', color: '#339933' }}>
              <FaNodeJs />
            </motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity }} style={{ position: 'absolute', top: '50%', right: '-40px', fontSize: '2.5rem', color: '#FF2D20' }}>
              <FaLaravel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - IDE Style */}
      <section id="about" className="section container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title"><span>{'<'}</span> About_Me <span>{'/>'}</span></h2>
          
          <div className="ide-window">
            <div className="ide-header">
              <div className="ide-controls">
                <div className="ide-control red"></div>
                <div className="ide-control yellow"></div>
                <div className="ide-control green"></div>
              </div>
              <div className="ide-title">suriya_profile.json</div>
            </div>
            <div className="ide-body">
              <div className="code-line"><span className="line-num">1</span><span className="code-content">{'{'}</span></div>
              <div className="code-line"><span className="line-num">2</span><span className="code-content">&nbsp;&nbsp;<span className="property">"name"</span>: <span className="string">"Suriya Prakash"</span>,</span></div>
              <div className="code-line"><span className="line-num">3</span><span className="code-content">&nbsp;&nbsp;<span className="property">"role"</span>: <span className="string">"Full Stack Developer"</span>,</span></div>
              <div className="code-line"><span className="line-num">4</span><span className="code-content">&nbsp;&nbsp;<span className="property">"experience_years"</span>: <span className="keyword">5</span>,</span></div>
              <div className="code-line"><span className="line-num">5</span><span className="code-content">&nbsp;&nbsp;<span className="property">"skills"</span>: {'['}</span></div>
              <div className="code-line"><span className="line-num">6</span><span className="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"React.js"</span>, <span className="string">"Node.js"</span>, <span className="string">"Laravel"</span>,</span></div>
              <div className="code-line"><span className="line-num">7</span><span className="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"PostgreSQL"</span>, <span className="string">"MongoDB"</span>, <span className="string">"Socket.io"</span></span></div>
              <div className="code-line"><span className="line-num">8</span><span className="code-content">&nbsp;&nbsp;{']'},</span></div>
              <div className="code-line"><span className="line-num">9</span><span className="code-content">&nbsp;&nbsp;<span className="property">"description"</span>: <span className="string">"I specialize in architecting state-wide government platforms, real-time auction systems, and AI-powered CRMs. I love turning complex logic into seamless API endpoints and beautiful UI components."</span></span></div>
              <div className="code-line"><span className="line-num">10</span><span className="code-content">{'}'}</span></div>
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
          <h2 className="section-title"><span>{'./'}</span>Execution_Log</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
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
          <h2 className="section-title">Deployed_<span>Modules</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <motion.div 
                  className="project-card"
                  variants={fadeInUp}
                >
                  <FolderGit2 size={40} className="project-folder-icon" />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </motion.div>
              </Tilt>
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
          <div className="contact-container">
            <h2 className="section-title" style={{marginBottom: '2rem'}}>initiate_<span>connection</span></h2>
            <p className="contact-text">
              Looking for a robust backend architecture or a pixel-perfect frontend? 
              My inbox is always open. Let's build something extraordinary together.
            </p>
            <a href="mailto:suriyaaasuriya07@gmail.com" className="btn btn-primary" style={{marginBottom: '2rem'}}>
              Send Transmission
            </a>
            
            <div className="contact-links">
              <a href="https://github.com/Suriyaprakash0902" target="_blank" rel="noreferrer" className="contact-icon">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/suriyaaa-suriya-4bb73a26a" target="_blank" rel="noreferrer" className="contact-icon">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>System built by <span>Suriya Prakash</span> using React & Framer Motion.</p>
        <p style={{marginTop: '0.5rem', opacity: 0.5}}>Status: Online // All systems nominal.</p>
      </footer>
    </div>
  );
}

export default App;
