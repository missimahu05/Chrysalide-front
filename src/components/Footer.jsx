import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="container-fluid bg-dark text-light footer pt-5" id="contact">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="rounded p-4 h-100 d-flex flex-column justify-content-between text-white" style={{ backgroundColor: '#0B4D33', borderTop: '4px solid #CFA34C' }}>
              <div>
                <a href="#hero" className="d-flex align-items-center mb-3 text-white text-decoration-none">
                  <img src="/logo.png" alt="Logo La Chrysalide Suite" style={{ height: '48px', marginRight: '10px' }} />
                  <h4 className="text-white text-uppercase font-weight-bold m-0" style={{ fontSize: '1.2rem' }}>
                    <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
                  </h4>
                </a>
                <p className="text-white-50 mb-4 leading-relaxed" style={{ fontSize: '0.9rem' }}>
                  <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong> regroupe des hébergements de standing, un Bar Lounge, une Cave à Vin, un Restaurant et un espace Chicha au quartier Nima à Parakou.
                </p>
              </div>
              <button 
                onClick={onOpenBooking} 
                className="btn btn-dark text-white font-weight-bold text-uppercase w-100 py-2 shadow-sm"
              >
                Réserver une chambre
              </button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-4 font-weight-bold">Contact & Accès</h6>
            <p className="mb-3"><i className="fa fa-map-marker-alt me-3 text-chrysalide-green"></i>Quartier Nima, Parakou, Bénin</p>
            <p className="mb-3">
              <a href="tel:+2290159188023" className="text-light text-decoration-none">
                <i className="fa fa-phone-alt me-3 text-chrysalide-gold"></i>+229 0159188023
              </a>
            </p>
            <p className="mb-3">
              <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
                <i className="fab fa-whatsapp me-3 text-chrysalide-green"></i>+229 0159188023 (WhatsApp Direct)
              </a>
            </p>
            <p className="mb-4">
              <a href="mailto:lachrysalidesuites@gmail.com" className="text-light text-decoration-none">
                <i className="fa fa-envelope me-3 text-chrysalide-purple"></i>lachrysalidesuites@gmail.com
              </a>
            </p>
            
            <div className="d-flex pt-2 gap-2">
              <a className="btn btn-outline-light btn-social rounded-circle" href="tel:+2290159188023"><i className="fa fa-phone-alt"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="https://wa.me/2290159188023" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="mailto:lachrysalidesuites@gmail.com"><i className="fa fa-envelope"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="row g-4">
              <div className="col-6">
                <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-4 font-weight-bold">Services</h6>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#services">Bar Lounge & Cocktails</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#services">Cave à Vin & Spiritueux</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#services">Restaurant & Plats</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#services">Espace Chicha VIP</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#rooms">Chambres & Suites</a>
              </div>

              <div className="col-6">
                <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-4 font-weight-bold">Nos Tarifs</h6>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#rooms">Ventilée (15.000 FCFA)</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#rooms">Climatisée (25.000 FCFA)</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#rooms">Suite VIP (45.000 FCFA)</a>
                <a className="btn btn-link text-white-50 p-0 mb-2 d-block text-decoration-none" href="#rooms">Appartement (60.000 FCFA)</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-top border-secondary py-3">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start text-muted" style={{ fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} <strong className="text-white"><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong>. Tous droits réservés.
          </div>
          <div className="col-md-6 text-center text-md-end text-muted" style={{ fontSize: '0.85rem' }}>
            Hôtel • Bar Lounge • Cave à Vin • Quartier Nima, Parakou
          </div>
        </div>
      </div>
    </footer>
  );
}
