import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Portfolio.css'; // Import the CSS for styling
import AOS from 'aos';
import 'aos/dist/aos.css';



const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
  <div className="navbar-container">
    <div className="hamburger" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#work">Work Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

      {/* Home Section */}
      <section id="home" className="home-section" data-aos="fade-right">
        <div className="left-section">
          <h1>Sesha Satya Sai Puvvala</h1>
          <h3>Career Objective:</h3>
          <p>As a software engineer with expertise in app development, web development, database management, and full-stack development, I aim to leverage my technical skills to drive innovation and build impactful solutions. With a strong interest in business, I am committed to integrating technology and strategic thinking to develop scalable solutions that contribute to organizational growth and deliver enhanced user experiences. My goal is to work in a role that challenges me technically while allowing me to expand my understanding of business operations and value creation.</p>
          
          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://www.linkedin.com/in/sesha-satya-sai-puvvala-7b4766211" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://github.com/sesha32" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="https://www.instagram.com/sesha_satya_sai_032/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} /> X
            </a>
          </div>
        </div>
        <div className="right-section">
          <img src={require('../assets/profile.jpg')} alt="Profile of Sesha Satya Sai Puvvala" />
        </div>
      </section>

      {/* Education Section */}
<section id="education" className="section education-section" data-aos="fade-right">
  <h2>Education</h2>
  <div className="education-info">
    <div className="education-item">
      <p className="course"><strong>B.Tech in Computer Science & Engineering</strong></p>
      <p className="institution">Jawaharlal Nehru Technological University-Gurajada, Vizianagaram</p>
      <p className="date">2022-2025</p>
    </div>
    <div className="education-item">
      <p className="course"><strong>Diploma in Computer Engineering</strong></p>
      <p className="institution">Andhra Polytechnic College</p>
      <p className="date">2019-2022</p>
    </div>
    <div className="education-item">
      <p className="course"><strong>Xth</strong></p>
      <p className="institution">Sri Chaitanya School</p>
      <p className="date">2019</p>
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="section projects-section" data-aos="fade-right">
  <h2 className="section-title">Projects</h2>
  <div className="project-cards">
    {/* Project 1 */}
    <a
      href="https://github.com/sesha32/keylogger"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src={require('../assets/keylogger.png')} alt="keylogger" className="project-image" />
      <div className="project-content">
        <h3 className="project-title">Keylogger</h3>
      </div>
    </a>

    {/* Project 2 */}
    <a
      href="https://github.com/sesha32/StreamSmart"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src={require('../assets/streamsmart.png')} alt="StreamSmart" className="project-image" />
      <div className="project-content">
        <h3 className="project-title">StreamSmart</h3>
      </div>
    </a>

    {/* Project 3 */}
    <a
      href="https://github.com/sesha32/Railway_Depoh"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src={require('../assets/railwayproject.png')} alt="Railway Project" className="project-image" />
      <div className="project-content">
        <h3 className="project-title">Railway Project</h3>
      </div>
    </a>
  </div>
</section>






      {/* Work Experience Section */}
      <section id="work" className="section work-section" data-aos="fade-right">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <div className="work-item">
            <h3>Lineysha & Thevan Software Technologies | Full Stack Developer Intern</h3>
            <p>Vijayawada, India | May 2024 - July 2024</p>
            <ul>
              <li>Collaborated with a team to develop and implement solutions for the coaching depot of South Central Railways.</li>
              <li>Led the team in designing and deploying a real-time monitoring system.</li>
              <li>Coordinated tasks and facilitated communication among team members to ensure project milestones were met on time.</li>
            </ul>
          </div>
          <div className="work-item">
            <h3>IBM | Cyber Security Intern</h3>
            <p>May 2023 - July 2023</p>
            <ul>
              <li>Gained expertise in cybersecurity fundamentals, including network security, threat analysis, and risk management.</li>
              <li>Learned to use cybersecurity tools and technologies, such as firewalls, intrusion detection systems (IDS), and encryption protocols.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section" data-aos="fade-right">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">C Programming</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Android Development</div>
          <div className="skill-card">Web Development</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Linux</div>
          <div className="skill-card">Networking</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Communication</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section" data-aos="fade-right">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      </>
  );
};

export default Portfolio;
