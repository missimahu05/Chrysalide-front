import React from 'react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section className="container-xxl py-5" id="about">
      <div className="container py-2 py-md-4">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
              À propos de nous
            </h6>
            <h2 className="mb-3 text-dark font-weight-bold fs-3 fs-md-2">
              Bienvenue à <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
            </h2>
            <p className="mb-3 text-secondary leading-relaxed small fs-6">
              Situé au <strong>Quartier Nima à Parakou</strong>, <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong> est un complexe hôtelier et résidentiel d'exception combinant confort moderne, sécurité 24h/24 et prestations variées.
            </p>
            <p className="mb-4 text-secondary leading-relaxed small fs-6">
              Découvrez nos chambres ventilées et climatisées, nos suites VIP, notre <strong>Bar Lounge</strong>, notre <strong>Cave à Vin</strong>, notre service de <strong>Restauration</strong> et notre espace <strong>Chicha</strong> spécialement pensés pour répondre à tous vos besoins.
            </p>
            
            <div className="row g-2 g-md-3 pb-4">
              <div className="col-4">
                <div className="border rounded-3 p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#25854C' }}>
                  <div className="border rounded-3 text-center p-2 p-md-3 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-hotel fa-lg text-chrysalide-green mb-1 mb-md-2"></i>
                    <h3 className="mb-0 text-dark font-weight-bold fs-5 fs-md-4">15+</h3>
                    <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Chambres & Suites</p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="border rounded-3 p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#CFA34C' }}>
                  <div className="border rounded-3 text-center p-2 p-md-3 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-cocktail fa-lg text-chrysalide-gold mb-1 mb-md-2"></i>
                    <h3 className="mb-0 text-dark font-weight-bold fs-5 fs-md-4">VIP</h3>
                    <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Lounge & Cave</p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="border rounded-3 p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#7A288A' }}>
                  <div className="border rounded-3 text-center p-2 p-md-3 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-shield-alt fa-lg text-chrysalide-purple mb-1 mb-md-2"></i>
                    <h3 className="mb-0 text-dark font-weight-bold fs-5 fs-md-4">24/7</h3>
                    <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Sécurité & Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
              <button onClick={onOpenBooking} className="btn btn-primary py-3 px-4 text-uppercase font-weight-bold shadow rounded-3">
                Réserver votre séjour
              </button>
              <a href="#rooms" className="btn btn-outline-dark py-3 px-4 text-uppercase font-weight-bold rounded-3 text-center">
                Nos Tarifs
              </a>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="row g-2 g-md-3">
              <div className="col-6 text-end">
                <img 
                  className="img-fluid rounded-3 w-100 shadow" 
                  src="/img/gallery/chrysalide-real-1.jpeg" 
                  alt="La Chrysalide Suite Parakou"
                  style={{ objectFit: 'cover', height: '160px' }}
                />
              </div>
              <div className="col-6 text-start">
                <img 
                  className="img-fluid rounded-3 w-100 shadow" 
                  src="/img/gallery/chrysalide-real-2.jpeg" 
                  alt="Chambres & Suites Parakou Nima"
                  style={{ objectFit: 'cover', height: '160px' }}
                />
              </div>
              <div className="col-6 text-end">
                <img 
                  className="img-fluid rounded-3 w-100 shadow" 
                  src="/img/gallery/chrysalide-real-3.jpeg" 
                  alt="Bar Lounge & Restauration"
                  style={{ objectFit: 'cover', height: '140px' }}
                />
              </div>
              <div className="col-6 text-start">
                <img 
                  className="img-fluid rounded-3 w-100 shadow" 
                  src="/img/gallery/chrysalide-real-4.jpeg" 
                  alt="Cave à Vin & Détente"
                  style={{ objectFit: 'cover', height: '140px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
