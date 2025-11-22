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
      date: "2024-2025",
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
  college: {
    name: "Kongu Engineering College",
    degree: "B.E. Electrical and Electronics Engineering",
    cgpa: "8.04 (till 4th semester)"
  },
  higherSecondary: {
    school: "S.S.M. Lakshmi Ammal Matriculation Higher Secondary School",
    qualification: "HSC",
    percentage: "80.8%"
  },
  secondary: {
    school: "S.S.M. Lakshmi Ammal Matriculation Higher Secondary School",
    qualification: "SSLC"
  }
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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* College Education */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: '#a855f7',
                  marginTop: '0.2rem'
                }}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <h4 style={{ 
                      color: '#ffffff', 
                      margin: 0, 
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {education.college.name}
                    </h4>
                    <p style={{ 
                      color: '#e2e8f0', 
                      margin: 0,
                      fontSize: '1rem'
                    }}>
                      {education.college.degree}
                    </p>
                    <p style={{ 
                      color: '#a855f7', 
                      margin: 0,
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      CGPA: {education.college.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary Education */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: '#3b82f6',
                  marginTop: '0.2rem'
                }}>
                  <i className="fas fa-school"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <h4 style={{ 
                      color: '#ffffff', 
                      margin: 0, 
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {education.higherSecondary.school}
                    </h4>
                    <p style={{ 
                      color: '#e2e8f0', 
                      margin: 0,
                      fontSize: '1rem'
                    }}>
                      {education.higherSecondary.qualification}
                    </p>
                    <p style={{ 
                      color: '#a855f7', 
                      margin: 0,
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      {education.higherSecondary.percentage}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Education */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: '#3b82f6',
                  marginTop: '0.2rem'
                }}>
                  <i className="fas fa-school"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <h4 style={{ 
                      color: '#ffffff', 
                      margin: 0, 
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {education.secondary.school}
                    </h4>
                    <p style={{ 
                      color: '#e2e8f0', 
                      margin: 0,
                      fontSize: '1rem'
                    }}>
                      {education.secondary.qualification}
                    </p>
                    <p style={{ 
                      color: '#a855f7', 
                      margin: 0,
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      {education.secondary.percentage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
