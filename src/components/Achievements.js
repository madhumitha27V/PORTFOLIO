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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '1.5rem',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '2px solid #3b82f6'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#3b82f6'
              }}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <h4 style={{ color: '#333', margin: 0, fontSize: '1.1rem' }}>
                    {education.college}
                  </h4>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>•</span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {education.degree}
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>•</span>
                  <span style={{ color: '#3b82f6', fontWeight: '500', fontSize: '0.9rem' }}>
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '1.5rem',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '2px solid #3b82f6'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#3b82f6'
              }}>
                <i className="fas fa-school"></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <h4 style={{ color: '#333', margin: 0, fontSize: '1.1rem' }}>
                    {education.school}
                  </h4>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>•</span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {education.hsc}
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>•</span>
                  <span style={{ color: '#3b82f6', fontWeight: '500', fontSize: '0.9rem' }}>
                    HSC Percentage: {education.percentage}
                  </span>
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
