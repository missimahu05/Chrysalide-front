import React, { useState } from 'react';
import { roomsData } from '../data/roomsData';

export default function RoomCatalog({ onSelectRoom, selectedFilter = 'all' }) {
  const [filter, setFilter] = useState(selectedFilter);
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  const filteredRooms = filter === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === filter);

  return (
    <section className="container-xxl py-5 bg-light" id="rooms">
      <div className="container py-3">
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Nos hébergements
          </h6>
          <h2 className="mb-3 text-dark font-weight-bold fs-3 fs-md-2">
            Découvrez nos <span className="text-chrysalide-green">Chambres &</span> <span className="text-chrysalide-gold">Suites</span>
          </h2>
          
          <div className="d-flex flex-nowrap overflow-auto py-2 px-1 gap-2 justify-content-start justify-content-md-center catalog-filter-scroll" style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <button 
              className={`btn btn-sm text-nowrap ${filter === 'all' ? 'btn-primary' : 'btn-outline-dark'} px-3 py-2 text-uppercase font-weight-bold rounded-pill`}
              onClick={() => setFilter('all')}
            >
              Toutes les offres
            </button>
            <button 
              className={`btn btn-sm text-nowrap ${filter === 'ventilee' ? 'btn-primary' : 'btn-outline-dark'} px-3 py-2 text-uppercase font-weight-bold rounded-pill`}
              onClick={() => setFilter('ventilee')}
            >
              <i className="fa fa-fan me-1"></i>Chambres Ventilées
            </button>
            <button 
              className={`btn btn-sm text-nowrap ${filter === 'climatisee' ? 'btn-primary' : 'btn-outline-dark'} px-3 py-2 text-uppercase font-weight-bold rounded-pill`}
              onClick={() => setFilter('climatisee')}
            >
              <i className="fa fa-snowflake me-1"></i>Chambres Climatisées
            </button>
          </div>
        </div>

        <div className="row g-4">
          {filteredRooms.map((room) => (
            <div className="col-lg-4 col-md-6 col-12" key={room.id}>
              <div className="room-item bg-white shadow-sm rounded-4 overflow-hidden h-100 d-flex flex-column border-top border-4" style={{ borderColor: '#25854C' }}>
                <div className="position-relative overflow-hidden" style={{ height: '230px' }}>
                  <img 
                    className="img-fluid w-100 h-100" 
                    src={room.image} 
                    alt={room.name} 
                    style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3 py-1 px-3 bg-success text-white font-weight-bold rounded-pill shadow text-uppercase" style={{ fontSize: '0.72rem', zIndex: 3, backgroundColor: '#25854C' }}>
                    {room.category === 'ventilee' ? 'Ventilée' : 'Climatisée'}
                  </div>
                  {/* High Contrast Price Badge on Photo */}
                  <div 
                    className="position-absolute top-0 end-0 m-3 py-1 px-3 font-weight-bold rounded-pill shadow-lg text-white" 
                    style={{ fontSize: '0.88rem', zIndex: 3, backgroundColor: '#0E2E1D', border: '1.5px solid #CFA34C' }}
                  >
                    <span style={{ color: '#FBBF24' }}>{room.price.toLocaleString('fr-FR')}</span> FCFA / nuit
                  </div>
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="mb-0 text-dark font-weight-bold fs-5">{room.name}</h5>
                  </div>

                  {/* High Visibility Price Box in Card Body */}
                  <div className="bg-light p-2 px-3 rounded-3 border my-2 d-flex align-items-center justify-content-between">
                    <span className="text-uppercase small font-weight-bold text-muted">Tarif par nuit</span>
                    <span className="font-weight-bold fs-4 text-chrysalide-green">
                      {room.price.toLocaleString('fr-FR')} <small className="fs-6 font-weight-bold text-dark">FCFA</small>
                    </span>
                  </div>

                  <div className="d-flex flex-wrap gap-2 text-muted mb-3 small">
                    <span className="border-end pe-2"><i className="fa fa-bed text-chrysalide-green me-1"></i>{room.bedType}</span>
                    <span className="border-end pe-2"><i className="fa fa-users text-chrysalide-purple me-1"></i>{room.capacity} pers</span>
                    <span><i className="fa fa-ruler-combined text-chrysalide-gold me-1"></i>{room.size}</span>
                  </div>

                  <p className="text-secondary small mb-4 flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {room.description}
                  </p>

                  <div className="d-flex gap-2 pt-3 border-top mt-auto">
                    <button 
                      className="btn btn-sm btn-outline-dark rounded-3 py-2 px-3 flex-fill text-uppercase font-weight-bold"
                      onClick={() => setActiveModalRoom(room)}
                    >
                      Voir détails
                    </button>
                    <button 
                      className="btn btn-sm btn-primary rounded-3 py-2 px-3 flex-fill text-uppercase font-weight-bold shadow-sm"
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
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content rounded-4 overflow-hidden border-0 shadow-lg">
              <div className="modal-header bg-dark text-white p-3 p-md-4">
                <h5 className="modal-title font-weight-bold text-uppercase fs-5">
                  <span className="text-chrysalide-green">{activeModalRoom.name}</span>
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModalRoom(null)}></button>
              </div>
              <div className="modal-body p-3 p-md-4">
                <div className="row g-2 g-md-3 mb-4">
                  {activeModalRoom.gallery.map((imgUrl, i) => (
                    <div className="col-4" key={i}>
                      <img src={imgUrl} alt={`${activeModalRoom.name} ${i}`} className="img-fluid rounded-3 shadow-sm" style={{ height: '120px', width: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                  <h3 className="text-chrysalide-gold font-weight-bold m-0 fs-3">
                    {activeModalRoom.price.toLocaleString('fr-FR')} {activeModalRoom.currency} <span className="fs-6 text-muted font-weight-normal">/ {activeModalRoom.period}</span>
                  </h3>
                  <span className="badge bg-chrysalide-green py-2 px-3 text-uppercase fs-6">{activeModalRoom.categoryLabel}</span>
                </div>

                <p className="text-dark leading-relaxed mb-3 fs-6">{activeModalRoom.description}</p>

                <h6 className="font-weight-bold text-uppercase mb-2 text-dark">Équipements inclus :</h6>
                <div className="row g-2 mb-4">
                  {activeModalRoom.amenities.map((item, idx) => (
                    <div className="col-12 col-md-6" key={idx}>
                      <i className="fa fa-check-circle text-chrysalide-green me-2"></i>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer bg-light p-3 d-flex flex-column flex-sm-row justify-content-between gap-2">
                <button type="button" className="btn btn-secondary text-uppercase w-100 w-sm-auto" onClick={() => setActiveModalRoom(null)}>Fermer</button>
                <button 
                  type="button" 
                  className="btn btn-primary text-uppercase font-weight-bold px-4 shadow w-100 w-sm-auto"
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
