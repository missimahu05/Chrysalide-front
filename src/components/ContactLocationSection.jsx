import React from 'react';

export default function ContactLocationSection() {
  const mapLink = "https://maps.app.goo.gl/yhHdgrsgHU1yNCg98";
  const embedUrl = "https://maps.google.com/maps?q=9.360140,2.652972&z=17&output=embed";

  return (
    <section className="container-fluid py-5 my-5 pb-5 mb-5 bg-light border-top border-bottom border-light" id="contact-location">
      <div className="container">
        
        {/* Title */}
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Localisation & Accès
          </h6>
          <h2 className="text-dark font-weight-bold">
            Où se trouve <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span> ?
          </h2>
          <p className="text-muted leading-relaxed" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Idéalement situé au cœur de Parakou, notre complexe hôtelier vous accueille dans un cadre calme, discret et parfaitement sécurisé.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          
          {/* Left: Contact Info & Address Cards */}
          <div className="col-lg-5">
            <div className="bg-white rounded-4 p-3 p-md-5 shadow-sm border border-light h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="font-weight-bold text-dark mb-4 text-uppercase border-bottom border-2 pb-2 fs-5" style={{ borderColor: '#CFA34C' }}>
                  Coordonnées Officielle
                </h4>

                <div className="d-flex align-items-start mb-3 mb-md-4">
                  <div className="rounded-circle bg-light text-chrysalide-gold p-2.5 me-3 d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>Adresse Physique</h6>
                    <p className="text-muted mb-1 font-weight-medium small">
                      <strong>Quartier Nima</strong>, Parakou, République du Bénin
                    </p>
                    <a 
                      href={mapLink}
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-sm text-chrysalide-green font-weight-bold p-0 text-decoration-underline small"
                    >
                      <i className="fa fa-map-marked-alt me-1"></i>Ouvrir la position exacte dans l'application Google Maps
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3 mb-md-4">
                  <div className="rounded-circle bg-light text-chrysalide-green p-2.5 me-3 d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>Téléphone & Réservations</h6>
                    <a href="tel:+2290159188023" className="text-decoration-none text-dark font-weight-bold small">
                      +229 0159188023
                    </a>
                    <small className="d-block text-muted" style={{ fontSize: '0.75rem' }}>Disponible 24h/24 & 7j/7</small>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3 mb-md-4">
                  <div className="rounded-circle bg-light text-chrysalide-green p-2.5 me-3 d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>WhatsApp Direct</h6>
                    <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="text-decoration-none text-chrysalide-green font-weight-bold small">
                      +229 0159188023 (Envoyer un message)
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3 mb-md-4">
                  <div className="rounded-circle bg-light text-chrysalide-purple p-2.5 me-3 d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.95rem' }}>Email Officiel</h6>
                    <a href="mailto:lachrysalidesuites@gmail.com" className="text-decoration-none text-dark font-weight-bold small">
                      lachrysalidesuites@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 pt-3 border-top border-light">
                <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="btn btn-success flex-grow-1 font-weight-bold text-uppercase py-2.5 shadow-sm" style={{ backgroundColor: '#25854C', borderColor: '#25854C', fontSize: '0.8rem' }}>
                  <i className="fab fa-whatsapp me-2"></i>WhatsApp Direct
                </a>
                <a href="tel:+2290159188023" className="btn btn-outline-dark font-weight-bold text-uppercase py-2.5 px-3">
                  <i className="fa fa-phone-alt"></i>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Interactive Google Maps Frame Centered Exact on La Chrysalide Suite */}
          <div className="col-lg-7">
            <div className="bg-white rounded-4 p-2 shadow-sm border border-light h-100 overflow-hidden position-relative" style={{ minHeight: '380px' }}>
              <iframe
                title="Carte Google Maps - La Chrysalide Suite Parakou Nima"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ minHeight: '380px', border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href={mapLink} 
                target="_blank" 
                rel="noreferrer" 
                className="position-absolute bottom-0 end-0 m-3 btn btn-sm btn-dark text-white font-weight-bold shadow-lg text-uppercase"
                style={{ zIndex: 10, backdropFilter: 'blur(6px)', fontSize: '0.78rem' }}
              >
                <i className="fa fa-map-marked-alt me-1.5 text-warning"></i>Ouvrir l'itinéraire complet
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
