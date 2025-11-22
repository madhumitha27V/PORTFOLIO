import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Published Patent",
      description: "Real-Time Traffic Management System for Dynamic Signal Control and Emergency Vehicle Prioritization",
      category: "Intellectual Property",
      date: "2024",
      icon: "fas fa-award",
      color: "gold"
    },
    {
      id: 2,
      title: "Class Representative",
      description: "Served as Class Representative for one semester in 2nd year, facilitated communication between students and faculty, and coordinated academic initiatives.",
      category: "Leadership",
      date: "2023-2024",
      icon: "fas fa-users",
      color: "blue"
    },
    {
      id: 3,
      title: "Zenith (2025-2026)",
      description: "Secured third prize in the Project Presentation event at Zenith, an intra-department event.",
      category: "Achievement",
      date: "2025",
      icon: "fas fa-trophy",
      color: "gold"
    },
    {
      id: 4,
      title: "SSN Inter-College Event (2025)",
      description: "Secured third prize in the Project Presentation competition at SSN College, Chennai",
      category: "Achievement",
      date: "2025",
      icon: "fas fa-medal",
      color: "blue",
      reward: "₹1000"
    },
    {
      id: 5,
      title: "Techno Fest Department Level",
      description: "Secured fifth place in the Techno Fest event at the department level.",
      category: "Achievement",
      date: "2025",
      icon: "fas fa-star",
      color: "green"
    }
  ];

  const education = {
    college: "Kongu Engineering College",
    degree: "B.E. Electrical and Electronics Engineering",
    cgpa: "8.04 (till 4th semester)",
    school: "S.S.M. Lakshmi Ammal Matriculation Higher Secondary School",
    hsc: "HSC and SSLC",
    percentage: "80.8%"
  };

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2>Achievements & Leadership</h2>
          <p>Let's explore some of my key milestones.</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`achievement-card ${achievement.color}`}>
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-footer">
                  <span className="achievement-date">
                    <i className="fas fa-calendar"></i>
                    {achievement.date}
                  </span>
                  {achievement.reward && (
                    <span className="achievement-reward">
                      Reward: {achievement.reward}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section" id="education">
          <h3>Education</h3>
          <div className="education-cards">
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h4>{education.college}</h4>
                <p className="education-degree">{education.degree}</p>
                <p className="education-grade">CGPA: {education.cgpa}</p>
              </div>
            </div>
            
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-school"></i>
              </div>
              <div className="education-content">
                <h4>{education.school}</h4>
                <p className="education-degree">{education.hsc}</p>
                <p className="education-grade">HSC Percentage: {education.percentage}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications-highlight">
          <h3>Key Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card microsoft">
              <i className="fab fa-microsoft"></i>
              <h4>Microsoft Applied Skills</h4>
              <p>Azure AI Language Processing</p>
            </div>
            <div className="cert-card oracle">
              <i className="fas fa-cloud"></i>
              <h4>Oracle Cloud Infrastructure</h4>
              <p>AI Foundations Associate</p>
            </div>
            <div className="cert-card arm">
              <i className="fas fa-microchip"></i>
              <h4>ARM Embedded Development</h4>
              <p>ARM Processor Application Development</p>
            </div>
            <div className="cert-card ecad">
              <i className="fas fa-drafting-compass"></i>
              <h4>ECAD Certification</h4>
              <p>Electronic Computer Aided Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
