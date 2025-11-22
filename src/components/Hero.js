import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="hero-greeting">Hi, I am</h3>
            <h1 className="hero-name">Madhumitha V</h1>
            <div className="hero-roles">
              
            </div>
            <p className="hero-description">
              A passionate Electrical Engineering student specializing in frontend development 
              and IoT solutions. I create innovative digital experiences with modern web technologies 
              and bring creative ideas to life through code.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-outline"
              >
                <i className="fas fa-download"></i>
                Check Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/madhhv/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:27madhumitha.v@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Madhumitha V" 
                className="hero-profile-image"
              />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Explore</span>
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;