import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Microsoft Applied Skills",
      issuer: "Microsoft",
      description: "Azure AI Language Processing",
      date: "2025",
      icon: "fab fa-microsoft",
      color: "#00bcf2"
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      description: "AI Foundations Associate",
      date: "2025",
      icon: "fas fa-cloud",
      color: "#f80000"
    },
    {
      id: 3,
      title: "ARM Embedded Development",
      issuer: "ARM",
      description: "ARM Processor Application Development",
      date: "2025",
      icon: "fas fa-microchip",
      color: "#0091bd"
    },
    {
      id: 4,
      title: "ECAD Certification",
      issuer: "ECAD",
      description: "Electronic Computer Aided Design",
      date: "2025",
      icon: "fas fa-drafting-compass",
      color: "#28a745"
    }
  ];

  return (
    <section className="certifications" id="certifications" style={{padding: '100px 0', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'}}>
      <div className="container">
        <div className="section-header">
          <h2 style={{color: 'white', textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700'}}>Certifications</h2>
          <p style={{color: '#cbd5e0', textAlign: 'center', marginBottom: '3rem'}}>Global certifications</p>
        </div>

        <div className="cert-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: `1px solid rgba(168, 85, 247, 0.2)`,
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                color: cert.color
              }}>
                <i className={cert.icon}></i>
              </div>
              <h4 style={{
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                {cert.title}
              </h4>
              <p style={{
                color: '#cbd5e0',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {cert.issuer}
              </p>
              <p style={{
                color: '#cbd5e0',
                marginBottom: '1rem'
              }}>
                {cert.description}
              </p>
              <div style={{
                color: '#a855f7',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-calendar" style={{marginRight: '0.5rem', fontSize: '0.8rem'}}></i>
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