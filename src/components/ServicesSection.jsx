import React from 'react';

export default function ServicesSection({ onSelectCategory }) {
  const services = [
    {
      id: 'rooms',
      icon: 'fa-hotel',
      colorClass: 'text-chrysalide-green',
      badge: 'Chambres & Suites',
      title: 'Hébergement de Standing',
      description: 'Chambres ventilées, climatisées, suites VIP et appartements meublés pour vos courts et longs séjours à Parakou.'
    },
    {
      id: 'bar',
      icon: 'fa-glass-martini-alt',
      colorClass: 'text-chrysalide-gold',
      badge: 'Cocktails & Lounge',
      title: 'Bar Lounge',
      description: 'Un espace chic et convivial pour déguster des cocktails créatifs et des rafraîchissements dans une ambiance chaleureuse.'
    },
    {
      id: 'wine',
      icon: 'fa-wine-bottle',
      colorClass: 'text-chrysalide-purple',
      badge: 'Grands Crus',
      title: 'Cave à Vin',
      description: 'Une sélection raffinée de vins et spiritueux d’exception pour accompagner vos moments précieux et repas d’affaires.'
    },
    {
      id: 'restaurant',
      icon: 'fa-utensils',
      colorClass: 'text-chrysalide-green',
      badge: 'Plats du Chef',
      title: 'Restaurant & Restauration',
      description: 'Service de restauration proposant des menus variés et savoureux aux saveurs locales et internationales.'
    },
    {
      id: 'chicha',
      icon: 'fa-smoking',
      colorClass: 'text-chrysalide-gold',
      badge: 'Espace VIP',
      title: 'Espace Chicha & Détente',
      description: 'Espace détente aménagé pour vos soirées relaxation entres amis ou partenaires dans le plus grand confort.'
    }
  ];

  return (
    <section className="container-xxl py-5 min-vh-100 d-flex align-items-center" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Nos Prestations Exclusives
          </h6>
          <h1 className="mb-4 text-dark font-weight-bold">
            Découvrez l’univers <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
          </h1>
          <p className="text-muted" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Localisé au quartier Nima à Parakou, notre complexe associe hôtel haut de gamme, restaurant, bar lounge, cave à vin et espace chicha.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((srv) => (
            <div className="col-lg-4 col-md-6" key={srv.id}>
              <div 
                className="service-item rounded h-100 shadow-sm border p-4 text-center d-flex flex-column align-items-center bg-white border-top border-3"
                style={{ borderColor: srv.id === 'rooms' ? '#25854C' : srv.id === 'wine' ? '#7A288A' : '#CFA34C', cursor: 'pointer', transition: 'all 0.3s' }}
                onClick={() => onSelectCategory && onSelectCategory(srv.id)}
              >
                <span className="badge bg-light text-dark mb-3 px-3 py-2 text-uppercase font-weight-bold border">
                  {srv.badge}
                </span>
                <div className="service-icon bg-transparent border rounded p-1 mb-3" style={{ width: '70px', height: '70px' }}>
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center bg-light">
                    <i className={`fa ${srv.icon} fa-2x ${srv.colorClass}`}></i>
                  </div>
                </div>
                <h5 className="mb-3 font-weight-bold text-dark">{srv.title}</h5>
                <p className="text-secondary small mb-0 leading-relaxed">{srv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
