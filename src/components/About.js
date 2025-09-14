import React from 'react';

const About = () => {
  return (
    <section className="section">
      <h2 className="section-title">
        <i data-lucide="user"></i>
        About Me
      </h2>
      
      <div className="about-text">
        <p>
          I'm a passionate front-end developer with 5+ years of experience creating engaging web experiences. 
          Currently transitioning to full-stack development, expanding my expertise to include backend 
          technologies like Node.js, PHP, and AWS.
        </p>
        <p>
          I specialize in React, Angular, and modern JavaScript, delivering clean, scalable solutions 
          through Agile methodologies and best practices. Let's collaborate to build innovative web 
          solutions that make a difference!
        </p>
      </div>
      
      <div className="tech-stack-section">
        <h3>Tech Stack</h3>
        <div className="tech-stack-grid">
          <div className="tech-box" data-aos="fade-up">
            <h4>Frontend</h4>
            <div className="tech-items">
              <div className="tech-item">HTML5</div>
              <div className="tech-item">CSS3</div>
              <div className="tech-item">JavaScript</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">React</div>
              <div className="tech-item">Angular</div>
              <div className="tech-item">Tailwind CSS</div>
              <div className="tech-item">jQuery</div>
            </div>
          </div>
          
          <div className="tech-box" data-aos="fade-up" data-aos-delay="100">
            <h4>Backend & Tools</h4>
            <div className="tech-items">
              <div className="tech-item">Java</div>
              <div className="tech-item">Java Spring</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">PHP</div>
              <div className="tech-item">Git</div>
              <div className="tech-item">AWS</div>
              <div className="tech-item">MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;