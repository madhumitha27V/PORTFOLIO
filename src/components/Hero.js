import React from 'react';

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, This is</p>
            <h1 className="hero-name">Madhumitha V</h1>
            <h2 className="hero-title">Electrical & Electronics Engineer</h2>
            <p className="hero-description">
              Electrical and Electronics Engineering student with a strong foundation in Digital Electronics and a passion for building innovative, end-to-end technology solutions. 
              I specialize in integrating hardware with full-stack web development, particularly in IoT systems and I'm actively working with the MERN stack. 
              I'm seeking opportunities to apply my skills to real-world problems.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleContactClick}>
                Contact Me
              </button>
              <button className="btn btn-outline" onClick={handleProjectsClick}>
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <i className="fas fa-user"></i>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;