import React from 'react';

const TechStack = () => {
  const frontendTech = [
    { name: 'HTML5', icon: 'code' },
    { name: 'CSS3', icon: 'palette' },
    { name: 'JavaScript', icon: 'zap' },
    { name: 'React', icon: 'refresh-cw' },
    { name: 'Angular', icon: 'triangle' }
  ];

  const backendTech = [
    { name: 'Node.js', icon: 'server' },
    { name: 'PHP', icon: 'database' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'AWS', icon: 'cloud' },
    { name: 'MySQL', icon: 'hard-drive' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i data-lucide="code"></i>
        Tech Stack
      </h2>
      
      <div className="tech-stack-grid">
        <div className="tech-box" data-aos="fade-up">
          <h3>Frontend</h3>
          <div className="tech-items">
            {frontendTech.map((tech, index) => (
              <div key={index} className="tech-item">
                <i data-lucide={tech.icon}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tech-box" data-aos="fade-up" data-aos-delay="100">
          <h3>Backend & Tools</h3>
          <div className="tech-items">
            {backendTech.map((tech, index) => (
              <div key={index} className="tech-item">
                <i data-lucide={tech.icon}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;