import React from 'react';

export default function ProcessSection({ onOpenBooking }) {
  const steps = [
    {
      step: '01',
      title: 'Choix de votre Hébergement',
      desc: 'Parcourez notre catalogue et choisissez la chambre, suite VIP ou appartement qui correspond à vos besoins.',
      icon: 'fa-bed',
      color: '#25854C'
    },
    {
      step: '02',
      title: 'Confirmation Immédiate',
      desc: 'Cliquez sur réserver pour échanger directement avec notre équipe via WhatsApp ou appel téléphonique 24h/24.',
      icon: 'fa-whatsapp',
      isBrandIcon: true,
      color: '#CFA34C'
    },
    {
      step: '03',
      title: 'Séjour & Service Privilégié',
      desc: 'Installez-vous sereinement et profitez de notre bar lounge, cave à vin, restauration et sécurité optimale.',
      icon: 'fa-glass-cheers',
      color: '#7A288A'
    }
  ];

  return (
    <section className="container-fluid py-5 border-top border-bottom border-light" id="process" style={{ backgroundColor: '#F0F7F2' }}>
      <div className="container py-2 py-md-4">
        
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Simplicité & Rapidité
          </h6>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2 mb-2">
            Comment réserver chez <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span> ?
          </h2>
          <p className="text-muted leading-relaxed small fs-6" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Un processus de réservation ultra fluide en 3 étapes simples sans démarches compliquées.
          </p>
        </div>

        <div className="row g-3 g-md-4 justify-content-center">
          {steps.map((s, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12">
              <div className="bg-white rounded-4 p-4 shadow-sm h-100 position-relative border-top border-4" style={{ borderColor: s.color }}>
                <div 
                  className="position-absolute top-0 end-0 me-3 me-md-4 mt-2 font-weight-bold opacity-15"
                  style={{ fontSize: '2.5rem', color: s.color }}
                >
                  {s.step}
                </div>
                
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white mb-3 shadow-sm"
                  style={{ width: '54px', height: '54px', backgroundColor: s.color }}
                >
                  <i className={`${s.isBrandIcon ? 'fab' : 'fa'} ${s.icon} fa-lg`}></i>
                </div>

                <h5 className="font-weight-bold text-dark mb-2 fs-5">{s.title}</h5>
                <p className="text-muted leading-relaxed mb-4 small">
                  {s.desc}
                </p>

                <button 
                  onClick={onOpenBooking} 
                  className="btn btn-sm btn-outline-dark font-weight-bold text-uppercase rounded-3"
                  style={{ fontSize: '0.78rem' }}
                >
                  Commencer ici <i className="fa fa-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mt-md-5">
          <button 
            onClick={onOpenBooking}
            className="btn btn-warning text-dark font-weight-bold text-uppercase px-4 px-md-5 py-3 shadow rounded-pill fs-6"
            style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C' }}
          >
            <i className="fa fa-calendar-check me-2"></i>Réserver Maintenant votre Chambre
          </button>
        </div>

      </div>
    </section>
  );
}
