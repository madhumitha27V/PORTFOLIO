import React, { useState } from 'react';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>
      
      <div className={`sidebar ${isMobileOpen ? 'mobile-visible' : 'mobile-hidden'}`}>
        <div className="sidebar-profile">
          <div className="profile-image">
            MV
          </div>
          <h3 className="profile-name">Madhumitha V</h3>
          <p className="profile-title">Electrical & Electronics Engineer</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#home" className="nav-item active" onClick={() => scrollToSection('home')}>
            <i className="fas fa-home"></i>
            Home
          </a>
          <a href="#skills" className="nav-item" onClick={() => scrollToSection('skills')}>
            <i className="fas fa-code"></i>
            Skills
          </a>
          <a href="#projects" className="nav-item" onClick={() => scrollToSection('projects')}>
            <i className="fas fa-project-diagram"></i>
            Projects
          </a>
          <a href="#achievements" className="nav-item" onClick={() => scrollToSection('achievements')}>
            <i className="fas fa-trophy"></i>
            Achievements
          </a>
          <a href="#contact" className="nav-item" onClick={() => scrollToSection('contact')}>
            <i className="fas fa-envelope"></i>
            Contact
          </a>
        </nav>

        <div className="sidebar-social">
          <a href="https://linkedin.com/in/madhumitha" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:madhumitha.v@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+916381228388" className="social-link">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;