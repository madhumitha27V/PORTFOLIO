import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/madhhv/',
      color: '#0077B5'
    },
    {
      platform: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/madhumitha',
      color: '#333'
    },
    {
      platform: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:27madhumitha.v@gmail.com',
      color: '#EA4335'
    },
    {
      platform: 'Phone',
      icon: 'fas fa-phone',
      url: 'tel:+916381228388',
      color: '#25D366'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Madhumitha V</h3>
            <p>Passionate about using electrical engineering and software development to create innovative and user-friendly products and solutions</p>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="social-link"
                  title={link.platform}
                  style={{ '--social-color': link.color }}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-envelope"></i>
                madhumitha.v@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +91 63812 28388
              </p>
              <p>
                <i className="fas fa-graduation-cap"></i>
                Kongu Engineering College
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="footer-tech">
              <span>React.js</span>
              <span>Python</span>
              <span>Java</span>
              <span>IoT</span>
              <span>Machine Learning</span>
              <span>MERN Stack</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Madhumitha V. All rights reserved.</p>
            <p>Designed & Developed by <strong>Madhumitha V</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;