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
          <h1>Sesha satya sai Puvvala</h1>
          <p><strong>Career Objective:</strong>Proficient in application development, encompassing 
both front-end and back-end technologies. Interested in 
Back-end. Skilled in database management and 
maintaining databases for optimal performance. 
Enthusiastic about cybersecurity and networking, 
continuously seeking opportunities to expand knowledge 
and contribute to secure digital environments.</p>
          <p><strong>Educational Information:</strong> Your educational background details go here.</p>
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

      <section id="contact" className="section">
        <h2>Contact</h2>
        {/* Add contact details */}
      </section>
    </div>
  );
};

export default Portfolio;
