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
              Im an Electrical and Electronics Engineering student with a strong foundation in Digital Electronics and a passion for building innovative, end-to-end technology solutions I specialize in integrating hardware with full-stack web development to solve real-world problems with strong interest in IoT and also Im actively working with mern stack.I am actively seeking opportunities to apply my skill to create impactful and scalable solutions.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1aubukplWxVxAGYtDplntR5OXDqHnvIW6" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/madhhv/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:madhumithaportfolio0913@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-container">
              
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