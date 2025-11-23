import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Authenticity Validator for Academia - SIH2025",
      //category: "Python | SQLite | OCR",
      description: "Built a secure certificate verification system that detects tampered content, forged seals, duplicate records and invalid IDs using OCR and database cross-checking. Implemented bulk verification, real-time dashboards and blockchain-based validation to enhance accuracy, transparency and institutional trust.",
      features: [
        "Cross-checking with institutional databases",
        "Tampered marks detection",
        "Blockchain-based validation",
        "Real-time monitoring and forgery detection",
        "Secure data management"
      ],
      technologies: ["Python", "SQLite", "OCR", "Blockchain","Tesseract"],
      githubLink: "https://github.com/madhumitha27V/CERTIFICATE-VALIDATOR.git",
      liveLink: "https://certificate-validator-94pp.onrender.com",
      image: "🎓"
    },
    {
      id: 2,
      title: "Smart Drainage and Monitoring System",
      //category: "IoT | Web Interface | Real-time",
      description: "Designed a smart drainage system that prevents overflow and gas issues by using automatic action with steady monitoring and early warning to handle problems before they increase.Built the solution to work with stable readings and timely response and delivered a reliable setup that improves safety and keeps drainage conditions under control in day-to-day use.",

      features: [
        "Automatic drainage management",
        "Real-time monitoring and predictive analysis",
        "Weather data integration",
        "Remote control features",
        "Flood prevention optimization"
      ],
      technologies: ["IoT", "Sensors", "Web Interface", "MERN", "Weather API"],
      githubLink: "https://github.com/madhumitha27V/SMART-DRAINAGE-SYSTEM-AND-MONITORING-WITH-WEB-INTERFACE.git",
      //liveLink: "#",
      image: "🌊"
    },
    {
      id: 3,
      title: "Real-time Traffic Management System - SIH2024",
      //category: "AI | Cloud | Dynamic Signal Control",
      description: "To create a system that continuously compares vehicle counts on each lane and handles unpredictable traffic patterns and emergency vehicle detection without delays.AI-based solution that opens the lane with the highest traffic load and instantly prioritizes emergency vehicles by giving them a clear green path, improving overall flow and reducing congestion.",
      features: [
        "Real-time traffic prediction",
        "Dynamic signal control",
        "Emergency vehicle prioritization",
        "Centralized React-based dashboard",
        "Cloud-hosted ML models on AWS"
      ],
      technologies: ["AI", "TensorFlow", "YOLOv8", "Computer Vision", "Image Processing"],
      githubLink: "https://github.com/madhumitha27V/REAL-TIME-TRAFFIC-MANAGEMENT-SYSTEM-FOR-DYNAMIC-SIGNAL-CONTROL-AND-EMERGENCY-VEHICLE-PRIORITIZATION.git",
      //liveLink: "#",
      image: "🚦"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Let's take a look at my work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag more-tech">+{project.technologies.length - 5} more</span>
                  )}
                </div>

                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-header">
                <span className="modal-emoji">{selectedProject.image}</span>
                <div>
                  <h3>{selectedProject.title}</h3>
                  <p className="modal-category">{selectedProject.category}</p>
                </div>
              </div>

              <div className="modal-body">
                <p>{selectedProject.description}</p>
                
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a href={selectedProject.githubLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;