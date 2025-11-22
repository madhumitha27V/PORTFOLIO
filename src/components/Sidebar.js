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

  // Debug: Add console.log to ensure component is rendering
  console.log('Sidebar component is rendering');

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      
      <div className="sidebar" style={{
        position: 'fixed',
        left: '0',
        top: '0',
        width: '280px',
        height: '100vh',
        background: '#1e293b',
        zIndex: '9999',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
      }}>
        <div className="sidebar-profile">
          <div className="profile-image">
            MV
          </div>
          <h3 className="profile-name">Madhumitha V</h3>
          <p className="profile-title">Electrical & Electronics Engineer</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#home" className="nav-item active" onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>
            🏠 Home
          </a>
          <a href="#skills" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}>
            💻 Skills
          </a>
          <a href="#projects" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}>
            📁 Projects
          </a>
          <a href="#achievements" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('achievements');}}>
            🏆 Achievements
          </a>
          <a href="#contact" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>
            📧 Contact
          </a>
        </nav>

        <div className="sidebar-social">
          <a href="https://linkedin.com/in/madhumitha" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            IN
          </a>
          <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            GH
          </a>
          <a href="mailto:madhumitha.v@gmail.com" className="social-link" title="Email">
            📧
          </a>
          <a href="tel:+916381228388" className="social-link" title="Phone">
            📞
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;