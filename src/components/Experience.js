import React, { useState } from 'react';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const positions = [
    {
      title: 'Software Engineer',
      company: 'Infor PSSC Inc.',
      period: '2019 - Present',
      current: true,
      responsibilities: [
        'Develop and maintain robust web applications using Angular JavaScript',
        'Collaborate with cross-functional teams to gather requirements and design solutions',
        'Apply best practices including code reviews, unit testing, and continuous integration',
        'Troubleshoot technical issues and optimize application performance',
        'Engage in Agile development processes and sprint planning',
        'Perform codelock activities ensuring stable deployments'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Infor PSSC Inc.',
      period: 'January 2021 - October 2022',
      responsibilities: [
        'Feature development and maintenance using Backbone Marionette Javascript',
        'Conducted code reviews to ensure high-quality code and foster collaboration'
      ]
    },
    {
      title: 'Learning and Knowledge Intern',
      company: 'IBM Philippines',
      period: 'Apr 2019 - Jun 2019',
      responsibilities: [
        'Contributed to knowledge management and learning initiatives',
        'Provided IT tech support for department operations',
        'Developed repositories and conducted research',
        'Enhanced skills in knowledge management and IT support'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'CSI',
      period: 'May 2018 - Jul 2018',
      responsibilities: [
        'Gained practical experience in PHP development',
        'Collaborated on design and implementation of web applications',
        'Leveraged PHP frameworks and integrated databases',
        'Optimized application performance'
      ]
    },
    {
      title: 'BS Computer Engineering',
      company: 'Polytechnic University of the Philippines',
      period: '2015 - 2020',
      responsibilities: [
        'Association of Concerned Computer Engineering Students for Service (ACCESS): Vice President for Research & Development (2018-2019), Business Manager (2017-2018), 2nd Year Governor (2016-2017), 1st Year Governor (2015-2016)',
        'Computer Engineering Department 5th Year Batch: Secretary (2019-2020)',
        'ASPIREN Charity Organization: Member (2016-2020)',
        'Institute of Computer Engineers of the Philippines - Student Edition: Member (2015-2020)',
        'PUP College of Engineering Honors Society: Honorary Member (2016-2020)',
        'PUP College of Engineering Managers for IT: Member (2015-2020)',
        'KATAGA Honors Society: Member (2015-2016)'
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i data-lucide="briefcase"></i>
        Experience & Education
      </h2>
      
      <div className="experience-list">
        {positions.map((pos, index) => {
          const key = `pos-${index}`;
          const isExpanded = expandedItems[key];
          const hasResponsibilities = pos.responsibilities.length > 0;
          
          return (
            <div key={index} className={`position-item ${pos.current ? 'current-job' : ''}`} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="timeline-dot"></div>
              <div className="position-header" onClick={() => hasResponsibilities && toggleExpand(key)}>
                <div className="position-main">
                  <h3 className="position-title">
                    {pos.title}
                    {pos.current && <span className="current-badge">Current</span>}
                  </h3>
                  <div className="position-company">{pos.company}</div>
                  <div className="position-period">{pos.period}</div>
                </div>
                {hasResponsibilities && (
                  <button className="expand-btn">
                    <i data-lucide={isExpanded ? 'chevron-up' : 'chevron-down'}></i>
                  </button>
                )}
              </div>
              
              {hasResponsibilities && isExpanded && (
                <ul className="responsibilities">
                  {pos.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;