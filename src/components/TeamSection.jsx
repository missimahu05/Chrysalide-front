import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Keroll FANOUKOUA',
      role: 'Gérant & Direction',
      image: '/img/team-1.jpeg'
    },
    {
      name: 'Jolidon HOUNGUE',
      role: 'Gérant & Exploitation',
      image: '/img/team-2.jpeg'
    }
  ];

  return (
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5 bg-light" id="team">
      <div className="container py-3">
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Notre équipe
          </h6>
          <h2 className="mb-3 text-dark font-weight-bold fs-3 fs-md-2">
            Rencontrez notre <span className="text-chrysalide-green">Direction</span>
          </h2>
          <p className="text-muted small fs-6" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Une équipe passionnée et dévouée à rendre votre séjour agréable et mémorable à <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong>.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <div className="col-lg-4 col-md-6 col-12" key={idx}>
              <div className="team-item rounded shadow-sm bg-white overflow-hidden text-center h-100 border-top border-3" style={{ borderColor: '#25854C' }}>
                <div className="position-relative" style={{ height: '280px' }}>
                  <img 
                    className="img-fluid w-100 h-100" 
                    src={member.image} 
                    alt={member.name}
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1 shadow-sm" href="tel:+2290159188023" aria-label="Téléphone">
                      <i className="fa fa-phone-alt"></i>
                    </a>
                    <a className="btn btn-square btn-success mx-1 shadow-sm" href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}>
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4 mt-3">
                  <h5 className="font-weight-bold mb-1 text-dark fs-5">{member.name}</h5>
                  <small className="text-chrysalide-gold text-uppercase font-weight-bold">{member.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
