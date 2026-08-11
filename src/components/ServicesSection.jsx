import React from 'react';

export default function ServicesSection({ onSelectCategory }) {
  const services = [
    {
      id: 'rooms',
      icon: 'fa-bed',
      accentColor: '#25854C',
      badge: 'Hébergement',
      title: 'Chambres & Appartements',
      description: 'Des chambres et appartements modernes, climatisés et entièrement équipés, offrant confort, calme et élégance pour un séjour agréable, que ce soit pour affaires ou loisirs.'
    },
    {
      id: 'restaurant',
      icon: 'fa-utensils',
      accentColor: '#CFA34C',
      badge: 'Gastronomie',
      title: 'Restaurant & Restauration',
      description: 'Un service de restauration proposant des plats locaux et internationaux, préparés avec soin pour vous offrir une expérience culinaire savoureuse et raffinée.'
    },
    {
      id: 'events',
      icon: 'fa-glass-cheers',
      accentColor: '#7A288A',
      badge: 'Célébrations',
      title: 'Événements & Réceptions',
      description: "Organisation d'événements privés et professionnels dans un cadre élégant, idéal pour mariages, anniversaires, réunions et célébrations spéciales."
    },
    {
      id: 'loisirs',
      icon: 'fa-cocktail',
      accentColor: '#25854C',
      badge: 'Détente',
      title: 'Loisirs & Détente',
      description: 'Des activités de loisirs et de divertissement adaptées à tous, pour rendre votre séjour plus agréable et animé dans un cadre convivial.'
    },
    {
      id: 'conciergerie',
      icon: 'fa-concierge-bell',
      accentColor: '#CFA34C',
      badge: 'Assistance 24/7',
      title: 'Service de Conciergerie',
      description: 'Notre équipe de conciergerie est disponible 24h/24 pour répondre à tous vos besoins et vous assister durant votre séjour.'
    },
    {
      id: 'parking',
      icon: 'fa-shield-alt',
      accentColor: '#7A288A',
      badge: 'Sécurité',
      title: 'Parking Sécurisé',
      description: 'Un parking sécurisé et surveillé est à votre disposition pour garer votre véhicule en toute tranquillité durant votre séjour.'
    }
  ];

  return (
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5" id="services">
      <div className="container py-2 py-md-4">
        
        {/* Header */}
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Nos Prestations Exclusives
          </h6>
          <h2 className="mb-3 text-dark font-weight-bold fs-3 fs-md-2">
            Un Confort d'Exception à <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
          </h2>
          <p className="text-muted small fs-6" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Découvrez l’éventail complet de nos services haut de gamme conçus pour rendre votre séjour inoubliable à Parakou (Quartier Nima).
          </p>
        </div>

        {/* 3x2 Grid of Luxury Service Cards */}
        <div className="row g-4 justify-content-center">
          {services.map((srv) => (
            <div className="col-lg-4 col-md-6 col-12" key={srv.id}>
              <div 
                className="service-card bg-white rounded-4 p-4 h-100 shadow-sm border position-relative overflow-hidden d-flex flex-column transition-all"
                style={{ 
                  borderTop: `4px solid ${srv.accentColor}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}
              >
                {/* Badge Tag */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span 
                    className="badge px-3 py-2 text-uppercase font-weight-bold rounded-pill"
                    style={{ 
                      backgroundColor: `${srv.accentColor}15`, 
                      color: srv.accentColor,
                      fontSize: '0.72rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {srv.badge}
                  </span>

                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: srv.accentColor,
                      fontSize: '1.2rem'
                    }}
                  >
                    <i className={`fa ${srv.icon}`}></i>
                  </div>
                </div>

                {/* Title */}
                <h5 className="font-weight-bold text-dark mb-2 fs-5">{srv.title}</h5>

                {/* Description */}
                <p className="text-secondary small mb-0 leading-relaxed flex-grow-1" style={{ fontSize: '0.88rem' }}>
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
