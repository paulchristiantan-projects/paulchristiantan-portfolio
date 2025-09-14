import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <footer style={{position: 'fixed', left: 0, bottom: 0, width: '300px', zIndex: 9999, background: '#040b14', padding: '15px', color: '#f4f6fd', fontSize: '14px', textAlign: 'center'}}>
        <div>Portfolio Created by © Paul Christian Tan</div>
      </footer>
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="contact-info" data-aos="fade-in">
          <div className="info-item">
            <i className="bi bi-geo-alt"></i>
            <div>
              <h4>Location:</h4>
              <p>Manila, Philippines</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bi bi-envelope"></i>
            <div>
              <h4>Email:</h4>
              <p>paulchristiantan.projects@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bx bxl-linkedin"></i>
            <div>
              <h4>LinkedIn:</h4>
              <p>https://www.linkedin.com/in/paul-christian-tan/</p>
            </div>
          </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7918123061287!2d120.97997831479618!3d14.599512180898875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce8f1c0669a9%3A0x7c9fe6b6b7f6d62e!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1645729711171!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style={{border:0, marginTop: '20px', borderRadius: '8px'}} 
            allowFullScreen="" 
            loading="lazy"
            title="Manila Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;