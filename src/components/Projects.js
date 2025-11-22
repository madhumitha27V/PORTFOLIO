import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Authenticity Validator for Academia - SIH2025",
      //category: "Python | SQLite | OCR",
      description: "The system verifies both physical and digital academic certificates by cross-checking uploaded records with institutional databases, detecting tampered marks, forged seals, duplicate entries, and invalid IDs.",
      features: [
        "Cross-checking with institutional databases",
        "Tampered marks detection",
        "Blockchain-based validation",
        "Real-time monitoring and forgery detection",
        "Secure data management"
      ],
      technologies: ["Python", "SQLite", "OCR", "Blockchain","Tesseract"],
      githubLink: "https://github.com/madhumitha27V/CERTIFICATE-VALIDATOR.git",
      liveLink: "#",
      image: "🎓"
    },
    {
      id: 2,
      title: "Smart Drainage and Monitoring System",
      //category: "IoT | Web Interface | Real-time",
      description: "The system automatically manages drainage and ventilation, ensuring safety by responding to changing water levels and environmental conditions.",
      features: [
        "Automatic drainage management",
        "Real-time monitoring and predictive analysis",
        "Weather data integration",
        "Remote control features",
        "Flood prevention optimization"
      ],
      technologies: ["IoT", "Sensors", "Web Interface", "MERN", "Weather API"],
      githubLink: "https://github.com/madhumitha27V/SMART-DRAINAGE-SYSTEM-AND-MONITORING-WITH-WEB-INTERFACE.git",
      liveLink: "#",
      image: "🌊"
    },
    {
      id: 3,
      title: "Real-time Traffic Management System - SIH2024",
      //category: "AI | Cloud | Dynamic Signal Control",
      description: "Built an AI-powered, cloud-based solution that predicts traffic congestion, controls signals dynamically, and prioritizes emergency vehicles using real-time video and GPS data.",
      features: [
        "Real-time traffic prediction",
        "Dynamic signal control",
        "Emergency vehicle prioritization",
        "Centralized React-based dashboard",
        "Cloud-hosted ML models on AWS"
      ],
      technologies: ["AI", "TensorFlow", "YOLOv8", "Computer Vision", "Image Processing"],
      githubLink: "https://github.com/madhumitha27V/REAL-TIME-TRAFFIC-MANAGEMENT-SYSTEM-FOR-DYNAMIC-SIGNAL-CONTROL-AND-EMERGENCY-VEHICLE-PRIORITIZATION.git",
      liveLink: "#",
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
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Link
                  </a>
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
                  <a href={selectedProject.githubLink} className="btn btn-outline">
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  <a href={selectedProject.liveLink} className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
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