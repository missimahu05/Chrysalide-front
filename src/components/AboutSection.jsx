import React from 'react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section className="container-xxl py-5 min-vh-100 d-flex align-items-center" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
              À propos de nous
            </h6>
            <h1 className="mb-4 text-dark font-weight-bold">
              Bienvenue à <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
            </h1>
            <p className="mb-3 text-secondary leading-relaxed">
              Situé au <strong>Quartier Nima à Parakou</strong>, <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong> est un complexe hôtelier et résidentiel d'exception combinant confort moderne, sécurité 24h/24 et prestations variées.
            </p>
            <p className="mb-4 text-secondary leading-relaxed">
              Découvrez nos chambres ventilées et climatisées, nos suites VIP, notre <strong>Bar Lounge</strong>, notre <strong>Cave à Vin</strong>, notre service de <strong>Restauration</strong> et notre espace <strong>Chicha</strong> spécialement pensés pour répondre à tous vos besoins.
            </p>
            
            <div className="row g-3 pb-4">
              <div className="col-sm-4">
                <div className="border rounded p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#25854C' }}>
                  <div className="border rounded text-center p-4 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-hotel fa-2x text-chrysalide-green mb-2"></i>
                    <h2 className="mb-1 text-dark font-weight-bold">15+</h2>
                    <p className="mb-0 text-muted font-weight-medium">Chambres & Suites</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="border rounded p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#CFA34C' }}>
                  <div className="border rounded text-center p-4 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-cocktail fa-2x text-chrysalide-gold mb-2"></i>
                    <h2 className="mb-1 text-dark font-weight-bold">VIP</h2>
                    <p className="mb-0 text-muted font-weight-medium">Lounge & Cave</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="border rounded p-1 shadow-sm h-100 border-top border-3" style={{ borderColor: '#7A288A' }}>
                  <div className="border rounded text-center p-4 h-100 d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-shield-alt fa-2x text-chrysalide-purple mb-2"></i>
                    <h2 className="mb-1 text-dark font-weight-bold">24/7</h2>
                    <p className="mb-0 text-muted font-weight-medium">Sécurité & Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <button onClick={onOpenBooking} className="btn btn-primary py-3 px-5 text-uppercase font-weight-bold shadow">
                Réserver votre séjour
              </button>
              <a href="#rooms" className="btn btn-outline-dark py-3 px-4 text-uppercase font-weight-bold">
                Nos Tarifs
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img 
                  className="img-fluid rounded w-75 shadow" 
                  src="/img/gallery/chrysalide-real-1.jpeg" 
                  alt="La Chrysalide Suite Parakou"
                  style={{ marginTop: '25%', objectFit: 'cover', height: '180px' }}
                />
              </div>
              <div className="col-6 text-start">
                <img 
                  className="img-fluid rounded w-100 shadow" 
                  src="/img/gallery/chrysalide-real-2.jpeg" 
                  alt="Chambres & Suites Parakou Nima"
                  style={{ objectFit: 'cover', height: '220px' }}
                />
              </div>
              <div className="col-6 text-end">
                <img 
                  className="img-fluid rounded w-50 shadow" 
                  src="/img/gallery/chrysalide-real-3.jpeg" 
                  alt="Bar Lounge & Restauration"
                  style={{ objectFit: 'cover', height: '130px' }}
                />
              </div>
              <div className="col-6 text-start">
                <img 
                  className="img-fluid rounded w-75 shadow" 
                  src="/img/gallery/chrysalide-real-4.jpeg" 
                  alt="Cave à Vin & Détente"
                  style={{ objectFit: 'cover', height: '160px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
