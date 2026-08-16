import React, { useState, useEffect } from 'react';

const API = 'http://localhost:5000/api';

const getImgUrl = (url) => {
  if (!url) return '/photos/2026-08-05-09.49.04.jpeg';
  if (url.startsWith('/uploads/')) return `http://localhost:5000${url}`;
  return url;
};

// Fallback statique si l'API est indisponible
const FALLBACK_ROOMS = [
  { id: 'room-ventilee', name: 'Chambres ventilées', category: 'ventilee', categoryLabel: 'Chambre Ventilée', price: 7500, currency: 'FCFA', period: 'nuit', bedType: '1 Lit', bathrooms: '1 salle de bain', image: '/photos/2026-08-05-09.49.04.jpeg', gallery: ['/photos/2026-08-05-09.49.04.jpeg', '/photos/2026-08-05-09.49.04-1.jpeg', '/photos/2026-08-05-09.49.04-2.jpeg'], amenities: ['Ventilateur de plafond puissant', 'TV Canal+', 'Wi-Fi Haut Débit', 'Salle de bain privée', 'Room Service 24/7'], description: 'Un espace élégant et confortable, parfaitement équipé pour un séjour agréable à La Chrysalide Suite.', available: true },
  { id: 'room-climatisee', name: 'Chambres climatisées', category: 'climatisee', categoryLabel: 'Chambre Climatisée', price: 12500, currency: 'FCFA', period: 'nuit', bedType: '1 Lit', bathrooms: '1 salle de bain', image: '/photos/2026-08-05-09.49.05.jpeg', gallery: ['/photos/2026-08-05-09.49.05.jpeg', '/photos/2026-08-05-09.49.05-1.jpeg', '/photos/2026-08-05-09.49.05-2.jpeg'], amenities: ['Climatisation Split silencieuse', 'TV Écran Plat HD', 'Wi-Fi Haut Débit', 'Mini-bar', 'Salle de bain privée moderne', 'Coffre-fort'], description: 'Climatisation dernière génération, décoration élégante et équipements premium pour votre confort absolu.', available: true }
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
    { id: 'ventilee', label: 'Chambres Ventilées (7.500 F)', icon: 'fa-fan' },
    { id: 'climatisee', label: 'Chambres Climatisées (12.500 F)', icon: 'fa-snowflake' },
    { id: 'suite', label: 'Suite VIP', icon: 'fa-star' },
    { id: 'appartement', label: 'Appartement', icon: 'fa-building' },
  ];

  return (
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5 bg-white" id="rooms">
      <div className="container-fluid px-3 px-md-5 py-4">
        
        {/* Title */}
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Hébergement d'Exception
          </h6>
          <h2 className="mb-3 text-dark font-weight-bold fs-3 fs-md-2">
            Explorez nos <span className="text-chrysalide-green">Chambres & Suites</span>
          </h2>
          <p className="text-muted small fs-6" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Des chambres ventilées à <strong>7 500 FCFA</strong> et climatisées à <strong>12 500 FCFA</strong>, aménagées avec soin à Parakou.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 mb-md-5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`btn btn-sm px-3 py-2 rounded-pill font-weight-bold transition-all border ${
                filter === cat.id
                  ? 'btn-success text-white shadow-sm'
                  : 'btn-outline-secondary text-dark bg-light'
              }`}
              style={filter === cat.id ? { backgroundColor: '#25854C', borderColor: '#25854C' } : {}}
            >
              {cat.icon && <i className={`fa ${cat.icon} me-1.5`}></i>}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="row g-4">
          {loading ? (
            <>
              <RoomSkeleton />
              <RoomSkeleton />
            </>
          ) : filteredRooms.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="fa fa-bed fa-3x text-muted mb-3 opacity-50"></i>
              <h5 className="text-muted">Aucune chambre trouvée pour cette catégorie.</h5>
            </div>
          ) : (
            filteredRooms.map(room => (
              <div key={room.id || room._id} className="col-lg-6 col-12">
                <div className="card h-100 rounded-4 border-0 shadow-sm overflow-hidden bg-white hover-shadow transition-all position-relative">
                  
                  {/* Category & Status Badges */}
                  <div className="position-absolute top-0 start-0 m-3 d-flex gap-2" style={{ zIndex: 10 }}>
                    <span className="badge rounded-pill bg-dark text-white px-3 py-2 shadow-sm font-weight-bold uppercase" style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                      {room.categoryLabel || room.category}
                    </span>
                    {room.available ? (
                      <span className="badge rounded-pill bg-success text-white px-3 py-2 shadow-sm font-weight-bold" style={{ fontSize: '0.72rem', backgroundColor: '#25854C' }}>
                        <i className="fa fa-check-circle me-1"></i>Disponible
                      </span>
                    ) : (
                      <span className="badge rounded-pill bg-danger text-white px-3 py-2 shadow-sm font-weight-bold" style={{ fontSize: '0.72rem' }}>
                        Sur réservation
                      </span>
                    )}
                  </div>

                  {/* Room Image */}
                  <div className="position-relative overflow-hidden" style={{ height: '260px' }}>
                    <img 
                      src={getImgUrl(room.image)} 
                      alt={room.name}
                      className="w-100 h-100 transition-all hover-scale"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/photos/2026-08-05-09.49.04.jpeg'; }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                      <div className="d-flex align-items-end justify-content-between text-white">
                        <div>
                          <h4 className="fw-bold m-0 text-white fs-5">{room.name}</h4>
                          <small className="text-white-50">{room.bedType} • {room.bathrooms}</small>
                        </div>
                        <div className="text-end">
                          <span className="fs-4 fw-bold" style={{ color: '#FBBF24' }}>
                            {Number(room.price).toLocaleString('fr-FR')} {room.currency || 'FCFA'}
                          </span>
                          <small className="d-block text-white-50" style={{ fontSize: '0.7rem' }}>/{room.period || 'nuit'}</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body & Amenities */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <p className="text-muted small mb-3 leading-relaxed" style={{ fontSize: '0.88rem' }}>
                      {room.description}
                    </p>

                    {/* Amenities Badges */}
                    {room.amenities && room.amenities.length > 0 && (
                      <div className="d-flex flex-wrap gap-1.5 mb-4">
                        {room.amenities.slice(0, 4).map((am, i) => (
                          <span key={i} className="badge bg-light text-secondary border px-2.5 py-1.5 font-weight-normal small">
                            <i className="fa fa-check me-1 text-chrysalide-green"></i>{am}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="d-flex gap-2 pt-2 border-top">
                      <button
                        onClick={() => setActiveModalRoom(room)}
                        className="btn btn-outline-dark btn-sm flex-grow-1 font-weight-bold py-2 rounded-3"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <i className="fa fa-eye me-1 text-chrysalide-gold"></i>Détails
                      </button>

                      <button
                        onClick={() => onSelectRoom(room)}
                        className="btn btn-success btn-sm flex-grow-1 font-weight-bold text-uppercase py-2 rounded-3 text-white"
                        style={{ backgroundColor: '#25854C', borderColor: '#25854C', fontSize: '0.82rem' }}
                      >
                        <i className="fa fa-calendar-check me-1.5"></i>Réserver
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Details Modal */}
      {activeModalRoom && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10000 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
              <div className="modal-header bg-dark text-white p-3">
                <h5 className="modal-title fw-bold text-white fs-6">
                  <i className="fa fa-bed me-2 text-warning"></i>{activeModalRoom.name}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModalRoom(null)}></button>
              </div>
              <div className="modal-body p-4">
                <img src={getImgUrl(activeModalRoom.image)} alt={activeModalRoom.name} className="w-100 rounded-3 mb-3" style={{ height: '250px', objectFit: 'cover' }} />
                <h4 className="fw-bold text-success mb-2" style={{ color: '#25854C' }}>
                  {Number(activeModalRoom.price).toLocaleString('fr-FR')} FCFA / {activeModalRoom.period || 'nuit'}
                </h4>
                <p className="text-muted leading-relaxed">{activeModalRoom.description}</p>
                <h6 className="fw-bold text-dark mt-3 mb-2">Équipements inclus :</h6>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {activeModalRoom.amenities?.map((am, idx) => (
                    <span key={idx} className="badge bg-light text-dark border p-2"><i className="fa fa-check text-success me-1"></i>{am}</span>
                  ))}
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-secondary btn-sm" onClick={() => setActiveModalRoom(null)}>Fermer</button>
                  <button 
                    className="btn btn-success btn-sm text-uppercase fw-bold px-4" 
                    style={{ backgroundColor: '#25854C' }}
                    onClick={() => {
                      const roomToBook = activeModalRoom;
                      setActiveModalRoom(null);
                      onSelectRoom(roomToBook);
                    }}
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
