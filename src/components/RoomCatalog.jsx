import React, { useState, useEffect } from 'react';

const API = 'http://localhost:5000/api';

const getImgUrl = (url) => {
  if (!url) return '/photos/2026-08-05-09.49.04.jpeg';
  if (url.startsWith('/uploads/')) return `http://localhost:5000${url}`;
  return url;
};

// Fallback statique si l'API est indisponible
const FALLBACK_ROOMS = [
  { id: 'room-ventilee', name: 'Chambres ventilées', category: 'ventilee', categoryLabel: 'Chambre Ventilée', price: 15000, currency: 'FCFA', period: 'nuit', bedType: '1 Lit', bathrooms: '1 salle de bain', image: '/photos/2026-08-05-09.49.04.jpeg', gallery: ['/photos/2026-08-05-09.49.04.jpeg', '/photos/2026-08-05-09.49.04-1.jpeg', '/photos/2026-08-05-09.49.04-2.jpeg'], amenities: ['Ventilateur de plafond puissant', 'TV Canal+', 'Wi-Fi Haut Débit', 'Salle de bain privée', 'Room Service 24/7'], description: 'Un espace élégant et confortable, parfaitement équipé pour un séjour agréable à La Chrysalide Suite.', available: true },
  { id: 'room-climatisee', name: 'Chambres climatisées', category: 'climatisee', categoryLabel: 'Chambre Climatisée', price: 25000, currency: 'FCFA', period: 'nuit', bedType: '1 Lit', bathrooms: '1 salle de bain', image: '/photos/2026-08-05-09.49.05.jpeg', gallery: ['/photos/2026-08-05-09.49.05.jpeg', '/photos/2026-08-05-09.49.05-1.jpeg', '/photos/2026-08-05-09.49.05-2.jpeg'], amenities: ['Climatisation Split silencieuse', 'TV Écran Plat HD', 'Wi-Fi Haut Débit', 'Mini-bar', 'Salle de bain privée moderne', 'Coffre-fort'], description: 'Climatisation dernière génération, décoration élégante et équipements premium pour votre confort absolu.', available: true }
];

function RoomSkeleton() {
  return (
    <div className="col-lg-6 col-12">
      <div className="bg-white rounded-4 overflow-hidden shadow-sm border h-100" style={{ minHeight: '320px' }}>
        <div className="bg-secondary" style={{ height: '230px', opacity: 0.15, animation: 'pulse 1.5s infinite' }}></div>
        <div className="p-4">
          <div className="bg-secondary rounded mb-2" style={{ height: '20px', width: '60%', opacity: 0.15 }}></div>
          <div className="bg-secondary rounded mb-3" style={{ height: '14px', width: '40%', opacity: 0.1 }}></div>
          <div className="bg-secondary rounded" style={{ height: '40px', opacity: 0.1 }}></div>
        </div>
      </div>
    </div>
  );
}

export default function RoomCatalog({ onSelectRoom, selectedFilter = 'all' }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(selectedFilter);
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  useEffect(() => {
    fetch(`${API}/rooms`)
      .then(r => r.json())
      .then(data => { setRooms(Array.isArray(data) && data.length ? data : FALLBACK_ROOMS); })
      .catch(() => setRooms(FALLBACK_ROOMS))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { setFilter(selectedFilter); }, [selectedFilter]);

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(r => r.category === filter);

  const categories = [
    { id: 'all', label: 'Toutes les offres', icon: null },
    { id: 'ventilee', label: 'Chambres Ventilées', icon: 'fa-fan' },
    { id: 'climatisee', label: 'Chambres Climatisées', icon: 'fa-snowflake' },
    { id: 'suite', label: 'Suite VIP', icon: 'fa-star' },
    { id: 'appartement', label: 'Appartement', icon: 'fa-building' },
  ];

  return (
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5 bg-white" id="rooms">
      <div className="container-fluid px-3 px-md-5 py-4">
        <div className="text-center mb-4 mb-md-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <span style={{ width: '30px', height: '2px', backgroundColor: '#25854C' }}></span>
            <h6 className="text-uppercase m-0 font-weight-bold" style={{ color: '#25854C', letterSpacing: '1px', fontSize: '0.85rem' }}>NOS CHAMBRES</h6>
            <span style={{ width: '30px', height: '2px', backgroundColor: '#25854C' }}></span>
          </div>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2 text-uppercase mb-0">
            Découvrez nos <span style={{ color: '#25854C' }}>CHAMBRES</span>
          </h2>

          {/* Filter pills */}
          <div className="d-flex flex-nowrap overflow-auto py-3 px-1 gap-2 justify-content-start justify-content-md-center catalog-filter-scroll">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`btn btn-sm text-nowrap px-3 px-md-4 py-2 text-uppercase font-weight-bold rounded-pill border-0 transition-all ${filter === cat.id ? 'text-white' : 'bg-light text-dark'}`}
                style={{ backgroundColor: filter === cat.id ? '#25854C' : '#F4F5F7', fontSize: '0.8rem' }}
                onClick={() => setFilter(cat.id)}
              >
                {cat.icon && <i className={`fa ${cat.icon} me-1`}></i>}{cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {loading ? (
            [1, 2].map(i => <RoomSkeleton key={i} />)
          ) : filteredRooms.length === 0 ? (
            <div className="col-12 text-center py-5 text-muted">
              <i className="fa fa-bed fa-3x mb-3 d-block" style={{ color: '#25854C' }}></i>
              Aucune chambre disponible dans cette catégorie
            </div>
          ) : filteredRooms.map((room) => (
            <div className="col-lg-6 col-12" key={room.id || room._id}>
              <div className="bg-white rounded-4 overflow-hidden shadow-sm border h-100 d-flex flex-column transition-all hover-shadow">
                <div className="position-relative overflow-hidden" style={{ height: '230px' }}>
                  <img className="img-fluid w-100 h-100" src={getImgUrl(room.image)} alt={room.name} style={{ objectFit: 'cover' }} />
                  <div className="position-absolute bottom-0 start-0 m-3 px-3 py-1 text-white font-weight-bold rounded-3 shadow-sm" style={{ backgroundColor: '#25854C', fontSize: '0.82rem', zIndex: 3 }}>
                    {room.price.toLocaleString('fr-FR')} {room.currency} / {room.period}
                  </div>
                  {!room.available && (
                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 text-white font-weight-bold rounded-pill" style={{ backgroundColor: '#dc3545', fontSize: '0.72rem' }}>
                      Indisponible
                    </div>
                  )}
                </div>

                <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2 mb-md-3">
                    <h4 className="mb-0 text-dark font-weight-bold fs-5">{room.name}</h4>
                    <div style={{ color: '#25854C', fontSize: '0.85rem' }}>
                      {[1,2,3,4,5].map(i => <i key={i} className="fa fa-star me-1"></i>)}
                    </div>
                  </div>

                  <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 text-secondary mb-3 small font-weight-medium">
                    <span><i className="fa fa-bed text-chrysalide-green me-1"></i>{room.bedType}</span>
                    <span className="text-muted d-none d-sm-inline">|</span>
                    <span><i className="fa fa-bath text-chrysalide-green me-1"></i>{room.bathrooms}</span>
                    <span className="text-muted d-none d-sm-inline">|</span>
                    <span><i className="fa fa-wifi text-chrysalide-green me-1"></i>Wi-Fi</span>
                    {room.size && <><span className="text-muted d-none d-sm-inline">|</span><span><i className="fa fa-expand-arrows-alt text-chrysalide-green me-1"></i>{room.size}</span></>}
                  </div>

                  <p className="text-secondary small mb-4 flex-grow-1 leading-relaxed">{room.description}</p>

                  <div className="d-flex flex-column flex-sm-row gap-2 pt-3 border-top mt-auto">
                    <button className="btn py-2 px-3 flex-fill text-uppercase font-weight-bold text-white rounded-3 shadow-sm border-0" style={{ backgroundColor: '#25854C', fontSize: '0.8rem' }} onClick={() => setActiveModalRoom(room)}>
                      VOIR DÉTAILS
                    </button>
                    <button className="btn py-2 px-3 flex-fill text-uppercase font-weight-bold text-white rounded-3 shadow-sm border-0" style={{ backgroundColor: room.available ? '#1E293B' : '#6c757d', fontSize: '0.8rem' }} onClick={() => room.available && onSelectRoom(room)} disabled={!room.available}>
                      {room.available ? 'RÉSERVER MAINTENANT' : 'INDISPONIBLE'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Détails */}
      {activeModalRoom && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 10000 }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content rounded-4 overflow-hidden border-0 shadow-lg">
              <div className="modal-header text-white p-3 p-md-4" style={{ backgroundColor: '#1E293B' }}>
                <h5 className="modal-title font-weight-bold text-uppercase fs-5">
                  <span style={{ color: '#25854C' }}>{activeModalRoom.name}</span>
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModalRoom(null)}></button>
              </div>
              <div className="modal-body p-3 p-md-4">
                <div className="row g-2 g-md-3 mb-4">
                  {(activeModalRoom.gallery || [activeModalRoom.image]).map((imgUrl, i) => (
                    <div className="col-4" key={i}>
                      <img src={getImgUrl(imgUrl)} alt={`${activeModalRoom.name} ${i}`} className="img-fluid rounded-3 shadow-sm" style={{ height: '120px', width: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                  <h3 className="font-weight-bold m-0 fs-3" style={{ color: '#25854C' }}>
                    {activeModalRoom.price.toLocaleString('fr-FR')} {activeModalRoom.currency} <span className="fs-6 text-muted font-weight-normal">/ {activeModalRoom.period}</span>
                  </h3>
                  <span className="badge py-2 px-3 text-uppercase fs-6 text-white" style={{ backgroundColor: '#25854C' }}>{activeModalRoom.categoryLabel}</span>
                </div>
                <p className="text-dark leading-relaxed mb-3 fs-6">{activeModalRoom.description}</p>
                <h6 className="font-weight-bold text-uppercase mb-2 text-dark">Équipements inclus :</h6>
                <div className="row g-2 mb-4">
                  {(activeModalRoom.amenities || []).map((item, idx) => (
                    <div className="col-12 col-md-6" key={idx}>
                      <i className="fa fa-check-circle text-chrysalide-green me-2"></i>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer bg-light p-3 d-flex flex-column flex-sm-row justify-content-between gap-2">
                <button type="button" className="btn btn-secondary text-uppercase w-100 w-sm-auto" onClick={() => setActiveModalRoom(null)}>Fermer</button>
                <button type="button" className="btn text-uppercase font-weight-bold px-4 shadow w-100 w-sm-auto text-white border-0" style={{ backgroundColor: '#25854C' }}
                  onClick={() => { const r = activeModalRoom; setActiveModalRoom(null); onSelectRoom(r); }}>
                  Réserver cette chambre
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
