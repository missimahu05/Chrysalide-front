import React from 'react';

export default function EventsSection({ onOpenBooking }) {
  const eventTypes = [
    {
      id: 'mariage',
      title: 'Mariages & Réceptions Privées',
      badge: 'Célébrations',
      icon: 'fa-glass-cheers',
      color: '#CFA34C',
      image: '/img/gallery/chrysalide-real-7.jpeg',
      description: 'Offrez-vous une réception inoubliable dans un cadre raffiné et sécurisé à Parakou. Service traiteur, décoration et hébergement des invités sur mesure.'
    },
    {
      id: 'seminaire',
      title: 'Séminaires & Conférences Pro',
      badge: 'Business',
      icon: 'fa-briefcase',
      color: '#25854C',
      image: '/img/gallery/chrysalide-real-6.jpeg',
      description: 'Organisez vos réunions de travail, formations ou assemblées d’affaires avec équipements audiovisuels, Wi-Fi très haut débit et pause-café gourmande.'
    },
    {
      id: 'soiree-vip',
      title: 'Soirées Privées Lounge & Chicha',
      badge: 'Exclusivité VIP',
      icon: 'fa-music',
      color: '#7A288A',
      image: '/img/gallery/chrysalide-real-8.jpeg',
      description: 'Privatisez notre Bar Lounge, Espace Chicha ou Cave à Vin pour vos anniversaires, cocktails d’entreprise ou soirées VIP en toute discrétion.'
    }
  ];

  return (
    <section className="container-fluid min-vh-100 d-flex align-items-center py-5 border-top border-bottom border-light" id="events" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="container-fluid px-3 px-md-5 py-4">
        
        {/* Title */}
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Événements & Privatisation
          </h6>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2 mb-2">
            Organisez vos moments d'exception à <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
          </h2>
          <p className="text-muted leading-relaxed small fs-6" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Des espaces modulables haut de gamme à Nima (Parakou) pour vos événements professionnels et célébrations privées.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 justify-content-center">
          {eventTypes.map((evt) => (
            <div className="col-lg-4 col-md-6 col-12" key={evt.id}>
              <div className="bg-white rounded-4 overflow-hidden shadow-sm border h-100 d-flex flex-column transition-all hover-shadow">
                <div className="position-relative" style={{ height: '220px' }}>
                  <img 
                    src={evt.image} 
                    alt={evt.title} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div 
                    className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white font-weight-bold rounded-pill shadow-sm text-uppercase"
                    style={{ backgroundColor: evt.color, fontSize: '0.72rem' }}
                  >
                    {evt.badge}
                  </div>
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3 flex-shrink-0" 
                      style={{ width: '45px', height: '45px', backgroundColor: evt.color }}
                    >
                      <i className={`fa ${evt.icon} fa-lg`}></i>
                    </div>
                    <h5 className="font-weight-bold text-dark mb-0 fs-5">{evt.title}</h5>
                  </div>

                  <p className="text-secondary small leading-relaxed mb-4 flex-grow-1">
                    {evt.description}
                  </p>

                  <div className="pt-3 border-top mt-auto">
                    <a 
                      href={`https://wa.me/2290159188023?text=${encodeURIComponent(`Bonjour, je souhaite demander un devis pour : ${evt.title} à La Chrysalide Suite.`)}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn w-100 rounded-3 py-2.5 font-weight-bold text-uppercase text-white shadow-sm transition-all"
                      style={{ backgroundColor: '#25854C', fontSize: '0.82rem' }}
                    >
                      <i className="fab fa-whatsapp me-2"></i>Demander un Devis Sur-Mesure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 mt-md-5 p-3 p-md-4 rounded-4 bg-white shadow-sm border border-light text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div>
            <h5 className="fw-bold text-dark mb-1 fs-6 fs-md-5">Besoin d'une formule sur-mesure pour votre groupe ?</h5>
            <p className="text-muted small mb-0">Hébergement + Restauration + Privatisation d'espace. Contactez notre direction événementielle 24h/24.</p>
          </div>
          <a 
            href="tel:+2290159188023"
            className="btn btn-dark font-weight-bold text-uppercase px-4 py-2.5 text-nowrap rounded-3 w-100 w-md-auto"
            style={{ fontSize: '0.85rem' }}
          >
            <i className="fa fa-phone-alt me-2 text-chrysalide-gold"></i>Appeler le +229 0159188023
          </a>
        </div>

      </div>
    </section>
  );
}
