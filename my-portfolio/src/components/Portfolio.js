import React, { useState } from 'react';
import '../styles/Portfolio.css';

const links = [
  ['GitHub', 'https://github.com/sesha32'],
  ['LinkedIn', 'https://www.linkedin.com/in/sesha-satya-sai-puvvala-7b4766211/'],
  ['HackerRank', 'https://www.hackerrank.com/profile/seshasatyasai201'],
  ['LeetCode', 'https://leetcode.com/u/Sesha_R_032036/'],
  ['Portfolio', 'https://sesha32.github.io/my-portfolio/'],
];

const projects = [
  { number: '01', title: 'Aura Assist', type: 'AI · Flask · Computer vision', image: null, monogram: 'AA', description: 'An AI powered voice based online examination platform with authentication, facial verification, exam workflows, a Flask backend, and SQLite storage.', stack: ['Python', 'Flask', 'OpenCV', 'SQLite'] },
  { number: '02', title: 'Railway Depot Monitoring', type: 'Internship team project · Real time systems', image: require('../assets/railwayproject.png'), description: 'Worked with a team on coaching depot solutions for South Central Railways, including the design and deployment of a real time monitoring system.', stack: ['Team delivery', 'Monitoring', 'Web development'], href: 'https://github.com/sesha32/Railway_Depoh' },
  { number: '03', title: 'StreamSmart', type: 'Web application · Subscription management', image: require('../assets/streamsmart.png'), description: 'A subscription sharing platform with account authentication, subscription management, reminders, and administrator payment management.', stack: ['PHP', 'HTML/CSS', 'SQL'], href: 'https://github.com/sesha32/StreamSmart' },
  { number: '04', title: 'RecruitHub', type: 'Web application · Recruitment', image: null, monogram: 'RH', description: 'A recruitment platform covering job listings, applications, resume uploads, alerts, messaging, recommendations, and recruiter analytics.', stack: ['PHP', 'HTML/CSS', 'SQL'], href: 'https://github.com/sesha32/RecruitHub' },
  { number: '05', title: 'Keylogger', type: 'Cybersecurity learning project', image: require('../assets/keylogger.png'), description: 'A Python project completed as part of cybersecurity learning. Focused on understanding keystroke capture risks and defensive awareness.', stack: ['Python', 'Cybersecurity'], href: 'https://github.com/sesha32/Keylogger' },
  { number: '06', title: 'Intelligently Fit', type: 'AI · Fitness', image: null, monogram: 'IF', description: 'An AI driven fitness assistant project exploring personalized support for fitness and wellbeing.', stack: ['AI', 'Fitness'], href: 'https://github.com/sesha32/Intelligently_fit' },
  { number: '07', title: 'Digital Wellness Optimizer', type: 'Wellness · Lifestyle', image: null, monogram: 'DW', description: 'A digital wellness and lifestyle optimizer focused on healthier technology habits.', stack: ['Digital wellness', 'Lifestyle'], href: 'https://github.com/sesha32/DigitalWellnessOptimizer' },
  { number: '08', title: 'Live Speech-to-Text', type: 'Python · Speech recognition', image: null, monogram: 'ST', description: 'An offline, low-latency speech-to-text tool that transcribes speech in real time using Vosk and an Indian-English model.', stack: ['Python', 'Vosk', 'Speech recognition'], href: 'https://github.com/sesha32/Live_Speech-Text' },
  { number: '09', title: 'Sparky AI', type: 'Generative AI · Telegram bot', image: null, monogram: 'AI', description: 'A conversational Telegram bot powered by Gemini that can answer questions and help with creative or technical tasks.', stack: ['Python', 'Gemini', 'Telegram'], href: 'https://github.com/sesha32/Sparky_AI' },
  { number: '10', title: 'SpeedX', type: 'Social platform · Automotive', image: null, monogram: 'SX', description: 'A social platform concept created for car enthusiasts.', stack: ['Web application', 'Community'], href: 'https://github.com/sesha32/SpeedX' },
];

const moreProjects = [
  ['Wiki Bot', 'Telegram bot for Wikipedia search and short summaries.', 'https://github.com/sesha32/Wiki_BOT'],
  ['Calculator', 'A small standalone calculator project.', 'https://github.com/sesha32/Calculator'],
  ['Car Quiz App', 'Python and Tkinter quiz with randomized questions and score tracking.', 'https://github.com/sesha32/Quiz_App'],
  ['OTP Generator & Verifier', 'Python authentication demo with hashed OTPs, expiry, resend, and retry limits.', 'https://github.com/sesha32/OTP_gen_n_verify'],
  ['Android Calculator', 'A basic calculator Android application.', 'https://github.com/sesha32/Basic_calculator_Android_application'],
  ['Temperature Converter', 'An Android app for converting temperatures.', 'https://github.com/sesha32/Temperature_converter_Android_application'],
  ['Password Generator', 'A small Python password generator.', 'https://github.com/sesha32/Password_Generator'],
  ['3D Cube Visualizer', 'Java program for navigating and displaying faces of a 3D array.', 'https://github.com/sesha32/3D_cube'],
  ['Skilly Telegram Bot', 'Command based bot built as an exploration of Telegram bot development.', 'https://github.com/sesha32/Telegram_Bot_trial'],
];

const skills = [
  ['Programming', 'Python', 'SQL', 'Java', 'C', 'JavaScript'],
  ['Backend & web', 'Flask', 'Django', 'React', 'PHP', 'Web development', 'Android development', 'DevOps'],
  ['Systems & data', 'Linux', 'Git / GitHub', 'MySQL', 'MongoDB', 'Networking'],
  ['Tools', 'VS Code', 'Android Studio', 'VMware'],
  ['Work strengths', 'Troubleshooting', 'Analytical thinking', 'Communication', 'Team coordination'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sesha Puvvala, home"><span className="brand-mark">SP</span><span>Sesha Puvvala<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          {[['About', '#about'], ['Work', '#projects'], ['Book', '#book'], ['Interests', '#interests'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-cta" href="mailto:seshasatyasai2003@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE · IDEAS · STORYTELLING <span className="eyebrow-divider">/</span> INDIA</p>
            <h1>Curious by nature.<br /><span>Builder</span> by instinct.</h1>
            <p className="hero-lede">I’m <strong>Sesha Satya Sai Puvvala</strong> — a computer science graduate who enjoys building useful software, exploring how technology works, and telling stories.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:seshasatyasai2003@gmail.com">Get in touch <Arrow /></a></div>
            <div className="hero-meta"><span>PYTHON · SQL · FLASK · LINUX</span><span>SOFTWARE DEVELOPMENT · AI · CYBERSECURITY</span></div>
          </div>
          <div className="hero-visual" aria-label="Profile portrait and engineering interests">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="portrait-frame"><img src={require('../assets/profile.jpg')} alt="Sesha Satya Sai Puvvala" /></div>
            <div className="floating-note note-top"><span className="note-symbol">✳</span><span>Build with<br />curiosity</span></div>
            <div className="floating-note note-bottom"><span className="note-number">02</span><span>Internship<br />experiences</span></div>
            <div className="visual-caption">SOFTWARE · SYSTEMS · PEOPLE</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="intro-grid"><h2>Good engineering starts with <em>curiosity.</em></h2><div className="intro-copy"><p>I’m a software developer with hands-on experience building backend and web applications, collaborating on railway operations software, and exploring cybersecurity fundamentals through an IBM internship.</p><p>I like moving between the details of implementation and the bigger question of how a product can make someone’s work easier. My projects span AI-assisted learning, recruitment, subscription management, railway monitoring, and cybersecurity.</p><div className="link-row">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <Arrow /></a>)}</div></div></div>
          <div className="stat-strip"><div><strong>100<span>+</span></strong><small>LeetCode problems solved</small></div><div><strong>5<span>★</span></strong><small>HackerRank C programming</small></div><div><strong>346</strong><small>GATE 2026 CSE/IT score</small></div><div><strong>2025</strong><small>Computer Science graduate</small></div></div>
        </section>

        <section className="book-section section-wrap" id="book">
          <div className="book-art"><img src={require('../assets/book-cover.png')} alt="Front cover of Something Followed Us Back by Sesha" /><span className="book-edition">A PSYCHOLOGICAL THRILLER</span></div>
          <div className="book-copy"><div className="section-kicker"><span>02</span> MY BOOK</div><p className="book-overline">WRITTEN & PUBLISHED BY SESHA</p><h2>Something<br /><em>Followed Us Back</em></h2><p className="book-tagline">“It didn’t come to destroy us.<br />It came to become us.”</p><p className="book-description">My published psychological thriller, set against the secrets and shadows of Nallamala Research Station. Explore the book and choose a store below.</p><div className="book-retailers"><a href="https://www.amazon.in/dp/9359176990" target="_blank" rel="noreferrer">Amazon <Arrow /></a><a href="https://www.flipkart.com/something-followed-back/p/itm28d462055bb7a?pid=9789359176994" target="_blank" rel="noreferrer">Flipkart <Arrow /></a><a href="https://store.pothi.com/book/sesha-satya-sai-puvvala-something-followed-us-back/" target="_blank" rel="noreferrer">Pothi Store <Arrow /></a></div></div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading"><div><div className="section-kicker"><span>03</span> PROJECTS</div><h2>Things I’ve <em>made.</em></h2></div><p>From full-scale applications and AI projects to smaller experiments and learning builds.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
            <div className={`project-art project-art-${project.number}`}>{project.image ? <img src={project.image} alt="" /> : <div className="project-illustration" aria-hidden="true"><span>{project.monogram}</span><i /><b /></div>}<span className="project-number">{project.number}</span>{project.href && <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Arrow /></a>}</div>
            <div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </article>)}</div>
          <div className="more-projects"><div className="more-projects-heading"><span>ALSO BUILT</span><p>Small apps, experiments, and learning projects</p></div><div className="more-projects-grid">{moreProjects.map(([title, description, href]) => <a key={title} href={href} target="_blank" rel="noreferrer" className="more-project"><span>{title}<Arrow /></span><small>{description}</small></a>)}</div></div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading"><div><div className="section-kicker"><span>04</span> EXPERIENCE & EDUCATION</div><h2>Learning through <em>doing.</em></h2></div><p>Professional experience, technical foundations, and continued growth.</p></div>
          <div className="experience-grid"><div className="timeline"><h3 className="subsection-label">EXPERIENCE</h3>
            <article className="timeline-item"><span className="timeline-date">MAY — JUL 2024</span><div><h4>Full-Stack Developer Intern</h4><p className="timeline-place">Lineysha & Thevan Software Technologies · Vijayawada</p><ul><li>Collaborated on coaching depot solutions for South Central Railways.</li><li>Led design and deployment of a real-time monitoring system.</li><li>Coordinated team tasks and communication to meet project milestones.</li></ul></div></article>
            <article className="timeline-item"><span className="timeline-date">MAY — JUL 2023</span><div><h4>Cybersecurity Intern</h4><p className="timeline-place">IBM</p><ul><li>Studied network security, threat analysis, and risk management.</li><li>Built familiarity with firewalls, intrusion detection systems, and encryption concepts.</li></ul></div></article>
          </div><div className="education-panel"><h3 className="subsection-label">EDUCATION</h3>
            <article className="education-entry"><span>2022 — 2025</span><h4>B.Tech, Computer Science & Engineering</h4><p>JNTU-GV, Vizianagaram</p><strong>CGPA 7.08</strong></article>
            <article className="education-entry"><span>2019 — 2022</span><h4>Diploma, Computer Engineering</h4><p>Andhra Polytechnic, Kakinada</p><strong>81%</strong></article>
            <article className="education-entry"><span>2018 — 2019</span><h4>SSC</h4><p>Sri Chaitanya School, Tirupati</p><strong>GPA 9.3</strong></article>
          </div></div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading"><div><div className="section-kicker"><span>05</span> TOOLKIT</div><h2>What I bring <em>to the table.</em></h2></div><p>Practical experience in Python, SQL, Git/GitHub, Flask, backend development, and Linux. More tools from my coursework and projects are below.</p></div>
          <div className="skills-grid">{skills.map(([label, ...items]) => <div className="skill-group" key={label}><h3>{label}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="interests-section section-wrap" id="interests">
          <div className="section-heading"><div><div className="section-kicker"><span>06</span> WHAT I’M INTO</div><h2>Curiosity, in <em>many directions.</em></h2></div><p>The subjects and creative work that keep me exploring beyond the next line of code.</p></div>
          <div className="interest-grid">
            <article><span>01 / BUILD</span><h3>Useful digital products</h3><p>Full-stack applications, thoughtful interfaces, and software that solves real problems.</p></article>
            <article><span>02 / EXPLORE</span><h3>AI & intelligent systems</h3><p>AI-powered experiences, computer vision, and new ways people can interact with software.</p></article>
            <article><span>03 / UNDERSTAND</span><h3>Cybersecurity</h3><p>How systems can be protected, how threats work, and how people can use technology with confidence.</p></article>
            <article><span>04 / CREATE</span><h3>Stories & storytelling</h3><p>I’m also a published author, drawn to psychological thrillers and the craft of building suspense.</p></article>
          </div>
        </section>

        <section className="credentials-section section-wrap">
          <div className="credentials-grid"><div><div className="section-kicker"><span>07</span> CERTIFICATIONS</div><h2>Foundations for <em>what’s next.</em></h2></div><ul className="credential-list"><li>CCNA v7: Switching, Routing, and Wireless Essentials <span>CISCO</span></li><li>CCNA v7: Enterprise Networking, Security, and Automation <span>CISCO</span></li><li>Cybersecurity Essentials <span>CISCO</span></li><li>Career Essentials in Software Development <span>LINKEDIN LEARNING</span></li><li>Python, Java & SQL skill certificates <span>HACKERRANK</span></li></ul></div>
          <div className="honors-row"><div><span>COMMUNITY</span><p>Student Placement Coordinator, JNTU-GV · Technical Coordinator, CreSencE 2K24</p></div><div><span>OUTSIDE CODE</span><p>Published author of the psychological thriller <em>Something Followed Us Back</em>.</p></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-kicker"><span>08</span> SAY HELLO</div><h2>Have an idea? <em>Let’s talk.</em></h2><p>For project conversations, collaborations, or just to connect, I’d be happy to hear from you.</p><a className="button button-light" href="mailto:seshasatyasai2003@gmail.com">Email Sesha <Arrow /></a><div className="contact-details"><a href="mailto:seshasatyasai2003@gmail.com">seshasatyasai2003@gmail.com</a><a href="tel:+917989690618">+91 79896 90618</a></div></div></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">SP</span><span>Sesha Puvvala<span className="brand-dot">.</span></span></a><p>Designed with care · © {new Date().getFullYear()} Sesha Satya Sai Puvvala</p><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
