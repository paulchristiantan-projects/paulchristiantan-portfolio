import React, { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: 'KAIAverse Website',
      image: 'assets/img/portfolio/portfolio-4.jpg',
      link: 'https://kaia-verse.vercel.app/',
      tags: ['html', 'css', 'js']
    },
    {
      title: 'Calculator App',
      image: 'assets/img/portfolio/portfolio-2.jpg',
      link: 'https://paulchristiantan-projects.github.io/calculator-app/',
      tags: ['react']
    },
    {
      title: 'To Do List App',
      image: 'assets/img/portfolio/portfolio-3.jpg',
      link: 'https://paulchristiantan-projects.github.io/to-do-list-app/',
      tags: ['react']
    },
    {
      title: 'SmartDOKS: Self Calculating Printer Machine',
      image: 'assets/img/portfolio/portfolio-5.jpg',
      link: '#',
      tags: ['java', 'android']
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  if (showAll) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setShowAll(false)} className="back-btn">
              <i data-lucide="arrow-left"></i> Back
            </button>
            <h2 className="section-title">
              <i data-lucide="folder"></i>
              All Projects <span className="count">({projects.length})</span>
            </h2>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`tag ${tag}`}>
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">
        <i data-lucide="folder"></i>
        Featured Projects <span className="count">({projects.length})</span>
      </h2>
      
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`tag ${tag}`}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button onClick={() => setShowAll(true)} className="view-all-btn">
          View All {projects.length} Projects →
        </button>
      </div>
    </section>
  );
};

export default Projects;