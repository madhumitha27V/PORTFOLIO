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
          
          {/* Profile Social Links */}
          <div className="profile-social" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer" 
               className="social-link" title="GitHub" style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: '40px',
                 height: '40px',
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 color: '#3b82f6',
                 borderRadius: '50%',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 fontSize: '1.1rem'
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#3b82f6';
                 e.target.style.color = 'white';
                 e.target.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                 e.target.style.color = '#3b82f6';
                 e.target.style.transform = 'translateY(0)';
               }}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/madhhv/" target="_blank" rel="noopener noreferrer" 
               className="social-link" title="LinkedIn" style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: '40px',
                 height: '40px',
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 color: '#3b82f6',
                 borderRadius: '50%',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 fontSize: '1.1rem'
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#3b82f6';
                 e.target.style.color = 'white';
                 e.target.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                 e.target.style.color = '#3b82f6';
                 e.target.style.transform = 'translateY(0)';
               }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:27madhumitha.v@gmail.com" 
               className="social-link" title="Email" style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: '40px',
                 height: '40px',
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 color: '#3b82f6',
                 borderRadius: '50%',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 fontSize: '1.1rem'
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#3b82f6';
                 e.target.style.color = 'white';
                 e.target.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                 e.target.style.color = '#3b82f6';
                 e.target.style.transform = 'translateY(0)';
               }}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
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
          <a href="#education" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('education');}}>
            🎓 Education
          </a>
          <a href="#certifications" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('certifications');}}>
            📜 Certifications
          </a>
          <a href="#contact" className="nav-item" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>
            📧 Contact
          </a>
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/madhumitha27V" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/madhhv/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:27madhumitha.v@gmail.com" className="social-link" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;