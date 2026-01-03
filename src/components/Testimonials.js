import React, { useState } from 'react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  
  const testimonials = [
    {
      name: 'Angelica',
      text: "I had the chance to work closely with Paul Christian Tan at Infor, and he's a standout Software Engineer who brings both skill and enthusiasm to the table. Paul has a knack for crafting clean, efficient front-end solutions using Angular and React, and he's always up for a challenge—whether it's optimizing UI performance or diving into new Agile workflows. He collaborates effortlessly with teammates, constantly seeks out ways to streamline our processes, and genuinely cares about delivering quality results."
    },
    {
      name: 'Jhopat',
      text: "I've worked with Paul on some of the feature development of our product as their Product Designer. He ensured that the designs were followed and even suggested a better implementation without compromising the user's experience. His knowledge of Angular JS helped him implement the design through Infor Design System, and he was able to share his expertise with other team members outside the team. Aside from that. he is also proactive when it comes to our cluster's event and is always our go-to person whenever we are planning for our Team Building and other Team events."
    },
    {
      name: 'Patricia',
      text: "I have worked alongside Paul as a fellow front-end developer on the Rhythm team at Infor throughout my tenure at the company. Paul consistently demonstrates exceptional technical leadership and initiative, particularly his ability to single-handedly lead and develop entire features while maintaining high code quality and fast delivery. What sets Paul apart is his collaborative approach combined with his extensive research skills and quick learning ability. His knowledge spans multiple front-end frameworks, and he's never afraid to ask thoughtful questions or offer valuable suggestions. His open-mindedness to new ideas and his commitment to finding optimal solutions make him an effective developer who elevates both project outcomes and team collaboration."
    },
    {
      name: 'Joseph',
      text: "Paul has shown capability to adjust and contribute consistently. He has accomplished tasks for Rhythm Commerce using Backbone/Marionette and still was able to shift to Angular to contribute to the services team. Apart from the technical accomplishment, he also spearheaded our March 2023 teambuilding activity showcasing his coordination skills. Also appreciate his very positive energy that really helped the team power through during difficult and stressful times."
    },
    {
      name: 'LR',
      text: "Paul is an amazing leader, he knows how to utilize all the available resources albeit small to achieve certain goals in our school organizations and groupings in class. He is also a talented all-rounder in software development."
    },
    {
      name: 'Mark',
      text: "Paul has great leadership skills. In fact, he served as an officer of a student organization, became an effective class president, and our leader of our thesis group which he handled very well. He is also good in programming as he wrote the code for Android application by himself as part of our thesis project."
    },
    {
      name: 'Melvin',
      text: "When you asked about hardworking people, Paul is one of the person that comes in my mind. Wayback in our college, Paul is one of the few excellent student leaders. He wanted to help other people by leading them on how to settle things. He is also my thesismate who had done many crucial tasks from our title presentation until actual project presentation. He tended to do tasks early and him being a leader, you can really rely on what he was doing."
    },
    {
      name: 'Peter Mark',
      text: "Thank you so much for sharing your knowledge, and generously assisting our team! Principled Entrepreneurship - When you assisted us in the technical interviews, you contributed to the quality of new hires not just for our team, but for the organization. Our new hires have been performing well from day one! Knowledge - We appreciate you taking the time to share valuable tips and insights during our discussion on the initial Angular implementation."
    },
    {
      name: 'Sharelone',
      text: "I had the pleasure of working with Paul for quite a while, and he was always a great teammate. He's approachable, fun to work with, and really knows his stuff when it comes to front-end development. Paul consistently handled fixes quickly and accurately, and he always took ownership of his work. You could always count on him to get things done right and on time.I highly recommend Paul to any team looking for someone who's not just skilled but also great to work with!"
    },
    {
      name: 'Tammy',
      text: "Having worked with Paul on several features, I've seen firsthand how helpful and hardworking he is. Not only does he give 100% of his effort in solving issues, he has also never shied away from a challenge. Outgoing and naturally friendly, collaborating on projects with Paul was a breeze. He knows how to boost team morale and any team is sure to appreciate his presence."
    },
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  if (showAll) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="section-title">
              <i data-lucide="message-circle"></i>
              All Recommendations <span className="count">({testimonials.length})</span>
            </h2>
            <button onClick={() => setShowAll(false)} className="modal-close-btn">
              ×
            </button>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item" data-aos="fade-up" data-aos-delay={index * 20}>
                <div className="testimonial-text">"{testimonial.text}"</div>
                <div className="testimonial-author">— {testimonial.name}</div>
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
        <i data-lucide="message-circle"></i>
        Recommendations <span className="count">({testimonials.length})</span>
      </h2>
      
      <div className="testimonials-grid">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item" data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="testimonial-text">"{testimonial.text}"</div>
            <div className="testimonial-author">— {testimonial.name}</div>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button onClick={() => setShowAll(true)} className="view-all-btn">
          View All {testimonials.length} Recommendations →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;