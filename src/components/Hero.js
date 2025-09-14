import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Computer Engineer', 'Software Engineer', 'Front-End Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content" data-aos="fade-in">
        <h1>Paul Christian Tan</h1>
        <p><span className="typed" ref={typedRef}></span></p>
      </div>
    </section>
  );
};

export default Hero;