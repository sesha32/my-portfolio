import React from 'react';
import '../styles/Portfolio.css'; // Import the CSS for styling

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="left-section">
          <h1>Sesha Satya Sai Puvvala</h1>
          <h3>Career Objective:</h3>
          <p>Proficient in application development, encompassing both front-end and back-end technologies. Interested in Back-end. Skilled in database management and maintaining databases for optimal performance. Enthusiastic about cybersecurity and networking, continuously seeking opportunities to expand knowledge and contribute to secure digital environments.</p>

          <h3>Educational Information:</h3>
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
        </div>
        <div className="right-section">
          <img src={require('../assets/profile.jpg')} alt="Your Photo" />
        </div>
      </section>

      {/* Other Sections */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        {/* Add project details */}
      </section>

      <section id="work" className="section">
        <h2>Work Experience</h2>
        {/* Add work experience details */}
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        {/* Add skills details */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
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
    </div>
  );
};

export default Portfolio;
