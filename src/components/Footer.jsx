import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="container-fluid text-white footer pt-5 pb-3 border-top border-3" id="contact" style={{ backgroundColor: '#2D0B36', borderColor: '#CFA34C' }}>
      <div className="container">
        
        {/* Main 4-Column Grid */}
        <div className="row g-4 g-lg-5 mb-4">
          
          {/* Col 1: Brand & Presentation */}
          <div className="col-lg-3 col-md-6">
            <a href="#hero" className="d-flex align-items-center mb-3 text-white text-decoration-none">
              <img src="/newfav.png" alt="Logo La Chrysalide Suite" style={{ height: '45px', marginRight: '10px' }} />
              <div>
                <h4 className="text-white text-uppercase font-weight-bold m-0" style={{ fontSize: '1.15rem', letterSpacing: '0.5px' }}>
                  <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
                </h4>
                <small className="text-chrysalide-gold text-uppercase font-weight-bold" style={{ fontSize: '0.65rem', letterSpacing: '1.5px' }}>
                  Hôtel & Résidences
                </small>
              </div>
            </a>
            <p className="text-white-50 mb-3 leading-relaxed" style={{ fontSize: '0.88rem' }}>
              Complex hôtelier et résidentiel d'exception à Parakou (Quartier Nima). Chambres ventilées et climatisées, Suites VIP, Bar Lounge, Cave à Vin et Restauration.
            </p>
            <button 
              onClick={onOpenBooking} 
              className="btn btn-warning text-dark font-weight-bold text-uppercase w-100 py-2 shadow-sm"
              style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C', fontSize: '0.85rem' }}
            >
              <i className="fa fa-calendar-check me-2"></i>Réserver un Séjour
            </button>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="col-lg-3 col-md-6">
            <h5 className="font-weight-bold text-chrysalide-gold text-uppercase mb-3 pb-2 border-bottom border-secondary border-opacity-25" style={{ fontSize: '1.05rem' }}>
              Navigation
            </h5>
            <ul className="list-unstyled mb-0" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2"><a href="#hero" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>Accueil</a></li>
              <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>À propos de nous</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>Nos Chambres & Tarifs</a></li>
              <li className="mb-2"><a href="#events" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>Événements & Privatisation</a></li>
              <li className="mb-2"><a href="#services" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>Services & Bar Lounge</a></li>
              <li className="mb-2"><a href="#contact-location" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-chevron-right me-2 text-chrysalide-gold small"></i>Contact & Localisation</a></li>
            </ul>
          </div>

          {/* Col 3: Nos Tarifs & Prestations */}
          <div className="col-lg-3 col-md-6">
            <h5 className="font-weight-bold text-chrysalide-gold text-uppercase mb-3 pb-2 border-bottom border-secondary border-opacity-25" style={{ fontSize: '1.05rem' }}>
              Nos Offres & Tarifs
            </h5>
            <ul className="list-unstyled mb-0" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-star me-2 text-chrysalide-gold small"></i>Ventilée (15.000 FCFA)</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-star me-2 text-chrysalide-gold small"></i>Climatisée (25.000 FCFA)</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-star me-2 text-chrysalide-gold small"></i>Deluxe Climatisée (30.000 FCFA)</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-star me-2 text-chrysalide-gold small"></i>Suite VIP (45.000 FCFA)</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-star me-2 text-chrysalide-gold small"></i>Appartement (60.000 FCFA)</a></li>
              <li className="mb-2"><a href="#events" className="text-white-50 text-decoration-none hover-gold transition-all"><i className="fa fa-glass-cheers me-2 text-chrysalide-gold small"></i>Soirées & Réceptions Privées</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Réseaux Sociaux */}
          <div className="col-lg-3 col-md-6">
            <h5 className="font-weight-bold text-chrysalide-gold text-uppercase mb-3 pb-2 border-bottom border-secondary border-opacity-25" style={{ fontSize: '1.05rem' }}>
              Contact & Accès
            </h5>
            <p className="mb-2 text-white-50" style={{ fontSize: '0.88rem' }}>
              <i className="fa fa-map-marker-alt me-2 text-chrysalide-green"></i>Quartier Nima, Parakou, Bénin
            </p>
            <p className="mb-2" style={{ fontSize: '0.88rem' }}>
              <a href="tel:+2290159188023" className="text-white-50 text-decoration-none hover-gold">
                <i className="fa fa-phone-alt me-2 text-chrysalide-gold"></i>+229 0159188023
              </a>
            </p>
            <p className="mb-2" style={{ fontSize: '0.88rem' }}>
              <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-gold">
                <i className="fab fa-whatsapp me-2 text-chrysalide-green"></i>+229 0159188023 (WhatsApp)
              </a>
            </p>
            <p className="mb-3" style={{ fontSize: '0.88rem' }}>
              <a href="mailto:lachrysalidesuites@gmail.com" className="text-white-50 text-decoration-none hover-gold">
                <i className="fa fa-envelope me-2 text-chrysalide-purple"></i>lachrysalidesuites@gmail.com
              </a>
            </p>

            <h6 className="text-white font-weight-bold mb-2 text-uppercase" style={{ fontSize: '0.8rem' }}>Réseaux Sociaux</h6>
            <div className="d-flex gap-2">
              <a 
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm transition-all" 
                href="tel:+2290159188023"
                style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                title="Appel direct"
              >
                <i className="fa fa-phone-alt"></i>
              </a>
              <a 
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm transition-all" 
                href="https://wa.me/2290159188023" 
                target="_blank" 
                rel="noreferrer"
                style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                title="WhatsApp Direct"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm transition-all" 
                href="mailto:lachrysalidesuites@gmail.com"
                style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                title="Email"
              >
                <i className="fa fa-envelope"></i>
              </a>
              <a 
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm transition-all" 
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3 border-top border-secondary border-opacity-25">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start text-white-50 mb-2 mb-md-0" style={{ fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} <strong className="text-white"><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong>. Tous droits réservés.
            </div>
            <div className="col-md-6 text-center text-md-end text-white-50" style={{ fontSize: '0.85rem' }}>
              Hôtel • Bar Lounge • Cave à Vin • Quartier Nima, Parakou
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
