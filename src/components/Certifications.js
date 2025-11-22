import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Microsoft Applied Skills",
      issuer: "Microsoft",
      description: "Azure AI Language Processing",
      date: "2024",
      icon: "fab fa-microsoft",
      color: "#00bcf2"
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      description: "AI Foundations Associate",
      date: "2024",
      icon: "fas fa-cloud",
      color: "#f80000"
    },
    {
      id: 3,
      title: "ARM Embedded Development",
      issuer: "ARM",
      description: "ARM Processor Application Development",
      date: "2024",
      icon: "fas fa-microchip",
      color: "#0091bd"
    },
    {
      id: 4,
      title: "ECAD Certification",
      issuer: "ECAD",
      description: "Electronic Computer Aided Design",
      date: "2024",
      icon: "fas fa-drafting-compass",
      color: "#28a745"
    }
  ];

  return (
    <section className="certifications" id="certifications" style={{padding: '100px 0', background: 'white'}}>
      <div className="container">
        <div className="section-header">
          <h2>Certifications</h2>
          <p>Professional certifications and technical achievements</p>
        </div>

        <div className="cert-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card" style={{
              background: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: `3px solid ${cert.color}20`,
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                color: cert.color
              }}>
                <i className={cert.icon}></i>
              </div>
              <h4 style={{
                color: '#333',
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                {cert.title}
              </h4>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {cert.issuer}
              </p>
              <p style={{
                color: '#666',
                marginBottom: '1rem'
              }}>
                {cert.description}
              </p>
              <div style={{
                color: '#3b82f6',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-calendar" style={{marginRight: '0.5rem'}}></i>
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;