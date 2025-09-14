import React, { useState } from 'react';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  
  const allCertifications = [
    { title: 'Advanced Software Testing', provider: 'Study Section', date: 'Dec 2020', url: 'https://www.studysection.com/Badges/shareBadge/MjY3MzMy/YXV0bw==/MTIzMjg4/' },
    { title: 'Agile Fundamentals: Including Scrum & Kanban', provider: 'Udemy', date: 'Sep 2024', url: 'https://www.udemy.com/certificate/UC-b5bb404d-9037-49d8-a8b3-3d71470a8393/' },
    { title: 'Angular', provider: 'Udemy', date: 'Jan 2024', url: 'https://www.udemy.com/certificate/UC-0e801ffd-c0a8-44a0-97fc-089606df8ad0/' },
    { title: 'Clean Code', provider: 'Udemy', date: 'Jun 2024', url: 'https://www.udemy.com/certificate/UC-4c9be9c8-a442-4232-89cd-5a148dc58cbf/' },
    { title: 'CSS', provider: 'HackerRank', date: 'Jul 2022', url: 'https://www.hackerrank.com/certificates/11297d97ecc3/' },
    { title: 'Git & Github', provider: 'Google', date: 'Nov 2020', url: 'https://www.coursera.org/account/accomplishments/verify/Y5UXJAEVME53' },
    { title: 'Git & Github', provider: 'Udemy', date: 'Jan 2024', url: 'https://www.udemy.com/certificate/UC-583d0184-1b1e-4b64-92fd-bc569cf59a5c/' },
    { title: 'Google Cloud Essentials', provider: 'Google Qwiklabs', date: 'Mar 2020', url: 'https://www.cloudskillsboost.google/public_profiles/09ea3b2a-13f3-416f-9454-3994e1693161/' },
    { title: 'HTML5', provider: 'Study Section', date: 'Dec 2020', url: 'https://www.studysection.com/users/socialMedia/MjY3MzIw/cGF1bGNocmlzdGlhbi50YW4yQGdtYWlsLmNvbQ==/' },
    { title: 'Introduction to Amazon Web Service (AWS)', provider: 'Udemy', date: 'Sep 2024', url: 'https://www.udemy.com/certificate/UC-d92f4524-b71e-4c31-b2f3-091b66f52ec0/' },
    { title: 'Introduction to Networks', provider: 'Cisco Networking Academy', date: 'Jun 2020', url: 'https://drive.google.com/file/d/1wFR-i029FdgOCe6NCFce44-ft8_ry-xz/view' },
    { title: 'JavaScript ES6', provider: 'Udemy', date: 'Aug 2022', url: 'https://www.udemy.com/certificate/UC-39ef3ddf-906f-45f5-aa1c-d9ccf0cd947c/' },
    { title: 'Leadership - Growth Mindset', provider: 'Udemy', date: 'Jan 2024', url: 'https://www.udemy.com/certificate/UC-81bca235-87e5-462c-bfc8-16e8dad95e6a/' },
    { title: 'Lean Six Sigma White Belt', provider: 'Management & Strategy Institute', date: 'Nov 2020', url: 'https://www.studysection.com/users/socialMedia/MjY3MzIw/cGF1bGNocmlzdGlhbi50YW4yQGdtYWlsLmNvbQ==/' },
    { title: 'Lean Six Sigma Yellow Belt', provider: '6Sigma Study', date: 'Nov 2020', url: 'https://drive.google.com/file/d/1SUCjARJnyXATpUupxZckaMu_fcJMZIUR/view' },
    { title: 'LinkedIn Masterclass: Boost Your Career & Personal Brand', provider: 'Udemy', date: 'Jun 2024', url: 'https://www.udemy.com/certificate/UC-06ce1baf-9710-47d0-b111-54d3b2d60770/' },
    { title: 'Notion 101', provider: 'Udemy', date: 'Mar 2024', url: 'https://www.udemy.com/certificate/UC-14a8fe73-82f0-4d62-86f8-8f2f871cc437/' },
    { title: 'OOP in Javascript', provider: 'Udemy', date: 'Jan 2024', url: 'https://www.udemy.com/certificate/UC-b8039ab0-46d3-4b58-9322-906129106bd3/' },
    { title: 'Project Management Essentials', provider: 'Management & Strategy Institute', date: 'Nov 2020', url: 'https://drive.google.com/file/d/1ihXe9Kq497PY0BjbezgDgzjXrMKeqSYV/view' },
    { title: 'React JavaScript', provider: 'Udemy', date: 'Sep 2022', url: 'https://www.udemy.com/certificate/UC-9c6a6429-5314-488b-a942-91e94165437b/' },
    { title: 'Scrum Foundation Certification', provider: 'CertiProf International', date: 'Nov 2020', url: 'https://certificates.easy-lms.com/exam/session/9c3cc129-8592-4e40-be4c-eb29b26046c0/' },
    { title: 'Software Development Life Cycle', provider: 'Udemy', date: 'Jan 2024', url: 'https://www.udemy.com/certificate/UC-3c3f08e2-29dd-4e28-b70a-cec5024b3932/' },
    { title: 'Technical Support Fundamentals', provider: 'Google', date: 'Dec 2020', url: 'https://www.coursera.org/account/accomplishments/verify/NQ54MVQPG2PZ' },
    { title: 'Time Management Mastery', provider: 'Udemy', date: 'Dec 2024', url: 'https://www.udemy.com/certificate/UC-06ce1baf-9710-47d0-b111-54d3b2d60770/' },
    { title: 'TypeScript', provider: 'Udemy', date: 'Oct 2022', url: 'https://www.udemy.com/certificate/UC-18a77a64-3291-4751-9884-5a139ad9e19c/' },
    { title: 'Understanding NPM - Node.js Package Manager', provider: 'Udemy', date: 'Sep 2024', url: 'http://udemy.com/certificate/UC-965a10df-ac03-4305-a0b2-e57b66939ea1/' }
  ];

  const displayedCertifications = showAll ? allCertifications : allCertifications.slice(0, 6);

  if (showAll) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setShowAll(false)} className="back-btn">
              <i data-lucide="arrow-left"></i> Back
            </button>
            <h2 className="section-title">
              <i data-lucide="award"></i>
              All Certifications ({allCertifications.length})
            </h2>
          </div>
          
          <div className="skills-grid">
            {allCertifications.map((cert, index) => (
              <div key={index} className="skill-item" data-aos="fade-up" data-aos-delay={index * 20}>
                <h4>{cert.title}</h4>
                <div className="skill-meta">{cert.provider} • Issued {cert.date}</div>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="skill-link">
                  View Credential →
                </a>
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
        <i data-lucide="award"></i>
        Certifications <span className="count">({allCertifications.length})</span>
      </h2>
      
      <div className="skills-grid">
        {displayedCertifications.map((cert, index) => (
          <div key={index} className="skill-item" data-aos="fade-up" data-aos-delay={index * 50}>
            <h4>{cert.title}</h4>
            <div className="skill-meta">{cert.provider} • Issued {cert.date}</div>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="skill-link">
              View Credential →
            </a>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button onClick={() => setShowAll(true)} className="view-all-btn">
          View All {allCertifications.length} Certifications →
        </button>
      </div>
    </section>
  );
};

export default Skills;