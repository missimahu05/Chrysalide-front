import React from 'react';

export default function CTAFinalSection({ onOpenBooking }) {
  return (
    <section 
      className="container-fluid min-vh-lg-100 d-flex align-items-center py-5 text-white position-relative overflow-hidden" 
      id="cta-final"
      style={{ 
        background: 'linear-gradient(135deg, #0F2D1A 0%, #25082D 100%)',
        borderTop: '3px solid #CFA34C',
        borderBottom: '3px solid #CFA34C'
      }}
    >
      {/* Decorative Halo Blobs */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, #CFA34C 0%, transparent 40%), radial-gradient(circle at 80% 70%, #25854C 0%, transparent 40%)'
        }}
      ></div>

      <div className="container py-3 py-md-4 text-center position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <span className="badge px-3 py-2 text-uppercase font-weight-bold mb-3 shadow-sm" style={{ backgroundColor: '#CFA34C', color: '#000', letterSpacing: '1px', fontSize: '0.75rem' }}>
              Offre Spéciale & Réservation Directe
            </span>

            <h2 className="fs-2 fs-md-1 display-4-lg font-weight-bold text-white mb-3 mb-md-4 leading-tight">
              Prêt à vivre une expérience d'exception à <br className="d-none d-md-inline" />
              <span style={{ color: '#34D399' }}>La Chrysalide</span> <span style={{ color: '#FBBF24' }}>Suite</span> ?
            </h2>

            <p className="fs-6 fs-md-5 mb-4 mb-md-5 leading-relaxed" style={{ maxWidth: '820px', margin: '0 auto', color: '#E2E8F0' }}>
              Que ce soit pour une nuit, un week-end romantique, une mission d'affaires ou un séjour prolongé à Parakou (Quartier Nima), profitez de nos chambres et appartements de haut standing au meilleur tarif.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-3 mb-4 mb-md-5">
              <button 
                onClick={onOpenBooking} 
                className="btn btn-warning text-dark font-weight-bold text-uppercase px-4 px-md-5 py-3 shadow-lg rounded-pill w-100 w-sm-auto fs-6"
                style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C' }}
              >
                <i className="fa fa-calendar-check me-2"></i>Réserver mon Séjour
              </button>

              <a 
                href="https://wa.me/2290159188023" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline-light font-weight-bold text-uppercase px-4 px-md-5 py-3 shadow-sm rounded-pill w-100 w-sm-auto fs-6"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                <i className="fab fa-whatsapp me-2" style={{ color: '#34D399' }}></i>WhatsApp Direct
              </a>
            </div>

            {/* Feature Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3" style={{ fontSize: '0.82rem' }}>
              <span className="px-3 py-2 rounded-pill shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
                <i className="fa fa-shield-alt me-2" style={{ color: '#FBBF24' }}></i>Sécurité 24h/24
              </span>
              <span className="px-3 py-2 rounded-pill shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
                <i className="fa fa-wifi me-2" style={{ color: '#34D399' }}></i>Wi-Fi Haut Débit Gratuit
              </span>
              <span className="px-3 py-2 rounded-pill shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
                <i className="fa fa-parking me-2" style={{ color: '#FBBF24' }}></i>Parking Privé Sécurisé
              </span>
              <span className="px-3 py-2 rounded-pill shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
                <i className="fa fa-cocktail me-2" style={{ color: '#E879F9' }}></i>Bar Lounge & Restauration
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
