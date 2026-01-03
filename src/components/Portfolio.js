import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'KAIAverse (website)',
      image: 'assets/img/portfolio/portfolio-4.jpg',
      link: 'https://kaia-verse.vercel.app/',
      tags: ['html', 'css', 'js']
    },
    {
      title: 'Clock App',
      image: 'assets/img/portfolio/portfolio-6.jpg',
      link: 'https://clock-app-gold-beta.vercel.app/',
      tags: ['angular']
    },
    {
      title: 'Birthday Symbol App',
      image: 'assets/img/portfolio/portfolio-1.jpg',
      link: './applications/birthday-symbol-app/index.html',
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
    }
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="portfolio-grid" data-aos="fade-up">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <div className="portfolio-links">
                  <a href={project.image} target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div className="portfolio-tags">
                <span className="tag label">{project.title}</span>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`tag ${tag}`}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;