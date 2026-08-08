import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Keroll FANOUKOUA',
      role: 'Gérant & Direction',
      image: '/img/team-1.jpeg'
    },
    {
      name: 'Omar KOUAWEMA',
      role: 'Gérant & Exploitation',
      image: '/img/team-2.jpeg'
    }
  ];

  return (
    <section className="container-xxl py-5 min-vh-100 d-flex align-items-center bg-light" id="team">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Notre équipe
          </h6>
          <h1 className="mb-4 text-dark font-weight-bold">
            Rencontrez notre <span className="text-chrysalide-green">Direction</span>
          </h1>
          <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Une équipe passionnée et dévouée à rendre votre séjour agréable et mémorable à <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong>.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="team-item rounded shadow bg-white overflow-hidden text-center h-100 border-top border-3" style={{ borderColor: '#25854C' }}>
                <div className="position-relative" style={{ height: '260px' }}>
                  <img 
                    className="img-fluid w-100 h-100" 
                    src={member.image} 
                    alt={member.name}
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1 shadow-sm" href="tel:+2290159188023">
                      <i className="fa fa-phone-alt"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1 shadow-sm" href="https://wa.me/2290159188023" target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4 mt-3">
                  <h5 className="font-weight-bold mb-1 text-dark">{member.name}</h5>
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
