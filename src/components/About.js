import React, { useState } from 'react';

const About = () => {
  const [showAllTech, setShowAllTech] = useState(false);

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
            <h4>Front-End</h4>
            <div className="tech-items">
              <div className="tech-item">Angular</div>
              <div className="tech-item">CSS3</div>
              <div className="tech-item">ESLint</div>
              <div className="tech-item">HTML5</div>
              <div className="tech-item">JavaScript</div>
              <div className="tech-item">Prettier</div>
              <div className="tech-item">React</div>
              <div className="tech-item">SCSS</div>
              <div className="tech-item">TypeScript</div>
            </div>
          </div>
          
          <div className="tech-box" data-aos="fade-up" data-aos-delay="100">
            <h4>Back-End</h4>
            <div className="tech-items">
              <div className="tech-item">DynamoDB</div>
              <div className="tech-item">Java</div>
              <div className="tech-item">MongoDB</div>
              <div className="tech-item">Node.JS</div>
              <div className="tech-item">OAuth</div>
              <div className="tech-item">PHP</div>
              <div className="tech-item">PostgreSQL</div>
              <div className="tech-item">REST</div>
            </div>
          </div>

          <div className="tech-box" data-aos="fade-up" data-aos-delay="200">
            <h4>DevOps & Cloud</h4>
            <div className="tech-items">
              <div className="tech-item">AWS</div>
              <div className="tech-item">Jenkins</div>
              <div className="tech-item">Windsor</div>
            </div>
          </div>
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn" onClick={() => setShowAllTech(true)}>
            View All Tech Stack
          </button>
        </div>
      </div>

      {showAllTech && (
        <div className="modal-overlay" onClick={() => setShowAllTech(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Tech Stack</h2>
              <button className="modal-close-btn" onClick={() => setShowAllTech(false)}>
                ×
              </button>
            </div>
            
            <div className="tech-stack-grid">
              <div className="tech-box">
                <h4>Front-End</h4>
                <div className="tech-items">
                  <div className="tech-item">Angular</div>
                  <div className="tech-item">CSS3</div>
                  <div className="tech-item">ESLint</div>
                  <div className="tech-item">HTML5</div>
                  <div className="tech-item">JavaScript</div>
                  <div className="tech-item">Prettier</div>
                  <div className="tech-item">React</div>
                  <div className="tech-item">SCSS</div>
                  <div className="tech-item">TypeScript</div>
                </div>
              </div>
              
              <div className="tech-box">
                <h4>Back-End</h4>
                <div className="tech-items">
                  <div className="tech-item">DynamoDB</div>
                  <div className="tech-item">Java</div>
                  <div className="tech-item">MongoDB</div>
                  <div className="tech-item">Node.JS</div>
                  <div className="tech-item">OAuth</div>
                  <div className="tech-item">PHP</div>
                  <div className="tech-item">PostgreSQL</div>
                  <div className="tech-item">REST</div>
                </div>
              </div>

              <div className="tech-box">
                <h4>DevOps & Cloud</h4>
                <div className="tech-items">
                  <div className="tech-item">AWS</div>
                  <div className="tech-item">Jenkins</div>
                  <div className="tech-item">Windsor</div>
                </div>
              </div>

              <div className="tech-box">
                <h4>AI & Machine Learning</h4>
                <div className="tech-items">
                  <div className="tech-item">Amazon Q</div>
                  <div className="tech-item">Open AI</div>
                </div>
              </div>

              <div className="tech-box">
                <h4>Security</h4>
                <div className="tech-items">
                  <div className="tech-item">Cobalt</div>
                  <div className="tech-item">Veracode</div>
                </div>
              </div>

              <div className="tech-box">
                <h4>CMS & No-Code</h4>
                <div className="tech-items">
                  <div className="tech-item">Notion</div>
                </div>
              </div>

              <div className="tech-box">
                <h4>Developer Tools</h4>
                <div className="tech-items">
                  <div className="tech-item">Git</div>
                  <div className="tech-item">GitHub</div>
                  <div className="tech-item">Gitlab</div>
                  <div className="tech-item">JIRA</div>
                  <div className="tech-item">VS Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;