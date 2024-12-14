import React, { useEffect } from 'react';
import AOS from 'aos';            // Ensure AOS is imported correctly
import 'aos/dist/aos.css';        // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init();                   // Initialize AOS when component mounts
  }, []);

  return (
    <section id="hero" className="hero sticked-header-offset">
      <div id="particles-js">
        <canvas
          className="particles-js-canvas-el"
          width="1173"
          height="875"
          style={{ width: '100%', height: '100%' }}
        ></canvas>
      </div>
      <div id="repulse-circle-div"></div>
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="col-lg-7 offset-lg-5 dark-bg order-lg-1 d-flex flex-column justify-content-start text-left caption">
            <h2 data-aos="fade-up">
              Delivering Superior Services <span>IT Solutions</span>
              <span
                className="circle"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                .
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="400">
              You can easily change any design to your own. It is also a highly customizable SEO-friendly template.
            </p>
            <div className="social" data-aos="fade-up" data-aos-delay="600">
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
            </div>
            <div className="d-flex justify-content-start">
              <a
                href="#contact"
                className="btn-get-started mr-20"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Get Quotes
              </a>
              <a
                href="#services"
                className="btn-get-started"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
