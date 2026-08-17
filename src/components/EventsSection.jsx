import React, { useState, useEffect } from 'react';
import EventBookingModal from './EventBookingModal';

const API = 'http://localhost:5000/api';

const FALLBACK_EVENTS = [
  { id: 'mariage', title: 'Mariages & Réceptions Privées', badge: 'Célébrations', icon: 'fa-glass-cheers', color: '#CFA34C', image: '/img/gallery/chrysalide-real-7.jpeg', description: 'Offrez-vous une réception inoubliable dans un cadre raffiné et sécurisé à Parakou. Service traiteur, décoration et hébergement des invités sur mesure.' },
  { id: 'seminaire', title: 'Séminaires & Conférences Pro', badge: 'Business', icon: 'fa-briefcase', color: '#25854C', image: '/img/gallery/chrysalide-real-6.jpeg', description: 'Organisez vos réunions de travail, formations ou assemblées d\'affaires avec équipements audiovisuels, Wi-Fi très haut débit et pause-café gourmande.' },
  { id: 'soiree-vip', title: 'Soirées Privées Lounge & Chicha', badge: 'Exclusivité VIP', icon: 'fa-music', color: '#7A288A', image: '/img/gallery/chrysalide-real-8.jpeg', description: 'Privatisez notre Bar Lounge, Espace Chicha ou Cave à Vin pour vos anniversaires, cocktails d\'entreprise ou soirées VIP en toute discrétion.' }
];

const getImgUrl = (url) => {
  if (!url) return '/img/gallery/chrysalide-real-7.jpeg';
  if (url.startsWith('/uploads/')) return `http://localhost:5000${url}`;
  return url;
};

export default function EventsSection({ onOpenBooking, onOpenEventsPage }) {
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${API}/events`)
      .then(r => r.json())
      .then(data => { setEventTypes(Array.isArray(data) && data.length ? data : FALLBACK_EVENTS); })
      .catch(() => setEventTypes(FALLBACK_EVENTS));
  }, []);

  const handleReserveEvent = (evt) => {
    setSelectedEvent(evt);
    setIsEventModalOpen(true);
  };

  return (
    <>
      <section className="container-fluid min-vh-100 d-flex align-items-center py-5 border-top border-bottom border-light" id="events" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-fluid px-3 px-md-5 py-4">

          {/* Section Header */}
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

          {/* Special Banner for Standalone Ticketing Page */}
          <div className="bg-dark text-white p-4 p-md-5 rounded-4 shadow-lg mb-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0E2E1D 0%, #2D0B36 100%)' }}>
            <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
              <div className="col-lg-8">
                <span className="badge bg-warning text-dark font-weight-bold text-uppercase px-3 py-1.5 mb-2 rounded-pill shadow-sm" style={{ fontSize: '0.72rem' }}>
                  <i className="fa fa-ticket-alt me-1.5"></i>Billetterie & Tickets Officiels
                </span>
                <h3 className="font-weight-bold text-white mb-2">Vous souhaitez participer à nos Soirées & Spectacles ?</h3>
                <p className="text-white-50 m-0 small" style={{ maxWidth: '600px' }}>
                  Accédez à notre plateforme de billetterie dédiée pour consulter les prochaines soirées, choisir vos pass VIP ou tables VVIP et recevoir vos tickets validés sur WhatsApp.
                </p>
              </div>

              <div className="col-lg-4 text-start text-lg-end mt-3 mt-lg-0">
                <button 
                  onClick={onOpenEventsPage}
                  className="btn btn-warning btn-lg font-weight-bold text-uppercase px-4 py-3 shadow-md rounded-3 text-dark d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C', fontSize: '0.9rem' }}
                >
                  <i className="fa fa-ticket-alt"></i>
                  <span>Accéder à la Billetterie</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid for Custom Event Privatization */}
          <div className="row g-4 justify-content-center">
            {(eventTypes.length ? eventTypes : FALLBACK_EVENTS).map((evt) => (
              <div className="col-lg-4 col-md-6 col-12" key={evt.id}>
                <div className="bg-white rounded-4 overflow-hidden shadow-sm border h-100 d-flex flex-column transition-all hover-shadow">
                  <div className="position-relative" style={{ height: '220px' }}>
                    <img src={getImgUrl(evt.image)} alt={evt.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white font-weight-bold rounded-pill shadow-sm text-uppercase" style={{ backgroundColor: evt.color || '#25854C', fontSize: '0.72rem' }}>
                      {evt.badge || evt.category || 'Événement'}
                    </div>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h5 className="font-weight-bold text-dark mb-2 fs-5">{evt.title}</h5>
                      <p className="text-muted small leading-relaxed mb-4" style={{ fontSize: '0.86rem' }}>
                        {evt.description}
                      </p>
                    </div>

                    <div className="pt-3 border-top d-flex gap-2">
                      <button 
                        onClick={onOpenEventsPage}
                        className="btn btn-outline-dark btn-sm flex-grow-1 font-weight-bold rounded-3"
                        style={{ fontSize: '0.8rem' }}
                      >
                        <i className="fa fa-ticket-alt me-1 text-warning"></i>Tickets
                      </button>
                      <button 
                        onClick={() => handleReserveEvent(evt)}
                        className="btn btn-success btn-sm flex-grow-1 font-weight-bold text-uppercase rounded-3 text-white" 
                        style={{ backgroundColor: '#25854C', borderColor: '#25854C', fontSize: '0.8rem' }}
                      >
                        Privatiser
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Réservation d'événement sur-mesure */}
      <EventBookingModal 
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        selectedEvent={selectedEvent}
      />
    </>
  );
}
