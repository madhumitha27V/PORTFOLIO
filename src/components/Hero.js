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
              Passionate about creating innovative solutions that bridge hardware and software. 
              Focused on AI-powered systems, web development, and IoT applications that make a real-world impact.
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
              <div className="profile-info">
                <h3>Madhumitha V</h3>
                <p>EEE Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;