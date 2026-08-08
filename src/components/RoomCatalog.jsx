import React, { useState } from 'react';
import { roomsData } from '../data/roomsData';

export default function RoomCatalog({ onSelectRoom, selectedFilter = 'all' }) {
  const [filter, setFilter] = useState(selectedFilter);
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  const filteredRooms = filter === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === filter);

  return (
    <section className="container-xxl py-5 min-vh-100 d-flex align-items-center bg-light" id="rooms">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Nos hébergements
          </h6>
          <h1 className="mb-4 text-dark font-weight-bold">
            Découvrez nos <span className="text-chrysalide-green">Chambres &</span> <span className="text-chrysalide-gold">Suites</span>
          </h1>
          
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
            <button 
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-dark'} px-4 py-2 text-uppercase font-weight-bold`}
              onClick={() => setFilter('all')}
            >
              Toutes les offres
            </button>
            <button 
              className={`btn btn-sm ${filter === 'ventilee' ? 'btn-primary' : 'btn-outline-dark'} px-4 py-2 text-uppercase font-weight-bold`}
              onClick={() => setFilter('ventilee')}
            >
              Chambre Ventilée
            </button>
            <button 
              className={`btn btn-sm ${filter === 'climatisee' ? 'btn-primary' : 'btn-outline-dark'} px-4 py-2 text-uppercase font-weight-bold`}
              onClick={() => setFilter('climatisee')}
            >
              Chambre Climatisée
            </button>
            <button 
              className={`btn btn-sm ${filter === 'suite' ? 'btn-primary' : 'btn-outline-dark'} px-4 py-2 text-uppercase font-weight-bold`}
              onClick={() => setFilter('suite')}
            >
              Suite VIP
            </button>
            <button 
              className={`btn btn-sm ${filter === 'appartement' ? 'btn-primary' : 'btn-outline-dark'} px-4 py-2 text-uppercase font-weight-bold`}
              onClick={() => setFilter('appartement')}
            >
              Appartement
            </button>
          </div>
        </div>

        <div className="row g-4">
          {filteredRooms.map((room) => (
            <div className="col-lg-4 col-md-6" key={room.id}>
              <div className="room-item bg-white shadow rounded overflow-hidden h-100 d-flex flex-column border-top border-3" style={{ borderColor: '#25854C' }}>
                <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                  <img 
                    className="img-fluid w-100 h-100" 
                    src={room.image} 
                    alt={room.name} 
                    style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-chrysalide-gold text-white font-weight-bold rounded py-1 px-3 ms-4 shadow">
                    {room.price.toLocaleString('fr-FR')} {room.currency} / {room.period}
                  </small>
                </div>

                <div className="p-4 mt-2 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 text-dark font-weight-bold">{room.name}</h5>
                    <div className="ps-2 text-chrysalide-gold" style={{ fontSize: '0.85rem' }}>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2 text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                    <span className="border-end pe-2"><i className="fa fa-bed text-chrysalide-green me-1"></i>{room.bedType}</span>
                    <span className="border-end pe-2"><i className="fa fa-users text-chrysalide-purple me-1"></i>{room.capacity} pers</span>
                    <span><i className="fa fa-ruler-combined text-chrysalide-gold me-1"></i>{room.size}</span>
                  </div>

                  <p className="text-secondary small mb-4 flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {room.description}
                  </p>

                  <div className="d-flex justify-content-between pt-2 border-top">
                    <button 
                      className="btn btn-sm btn-outline-dark rounded py-2 px-3 text-uppercase font-weight-bold"
                      onClick={() => setActiveModalRoom(room)}
                    >
                      Voir détails
                    </button>
                    <button 
                      className="btn btn-sm btn-primary rounded py-2 px-3 text-uppercase font-weight-bold shadow-sm"
                      onClick={() => onSelectRoom(room)}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Détails Chambre */}
      {activeModalRoom && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 10000 }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-3 overflow-hidden border-0 shadow-lg">
              <div className="modal-header bg-dark text-white p-4">
                <h5 className="modal-title font-weight-bold text-uppercase">
                  <span className="text-chrysalide-green">{activeModalRoom.name}</span>
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModalRoom(null)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-3 mb-4">
                  {activeModalRoom.gallery.map((imgUrl, i) => (
                    <div className="col-4" key={i}>
                      <img src={imgUrl} alt={`${activeModalRoom.name} ${i}`} className="img-fluid rounded shadow-sm" style={{ height: '140px', width: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-chrysalide-gold font-weight-bold m-0">
                    {activeModalRoom.price.toLocaleString('fr-FR')} {activeModalRoom.currency} / {activeModalRoom.period}
                  </h4>
                  <span className="badge bg-chrysalide-green py-2 px-3 text-uppercase">{activeModalRoom.categoryLabel}</span>
                </div>

                <p className="text-dark leading-relaxed mb-3">{activeModalRoom.description}</p>

                <h6 className="font-weight-bold text-uppercase mb-2 text-dark">Équipements inclus :</h6>
                <div className="row g-2 mb-4">
                  {activeModalRoom.amenities.map((item, idx) => (
                    <div className="col-md-6" key={idx}>
                      <i className="fa fa-check-circle text-chrysalide-green me-2"></i>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer bg-light p-3">
                <button type="button" className="btn btn-secondary text-uppercase" onClick={() => setActiveModalRoom(null)}>Fermer</button>
                <button 
                  type="button" 
                  className="btn btn-primary text-uppercase font-weight-bold px-4 shadow"
                  onClick={() => {
                    const r = activeModalRoom;
                    setActiveModalRoom(null);
                    onSelectRoom(r);
                  }}
                >
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
