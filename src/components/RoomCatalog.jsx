import React, { useState } from 'react';
import { roomsData } from '../data/roomsData';

export default function RoomCatalog({ onSelectRoom, selectedFilter = 'all' }) {
  const [filter, setFilter] = useState(selectedFilter);
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  const filteredRooms = filter === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === filter);

  return (
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5 bg-white" id="rooms">
      <div className="container-fluid px-3 px-md-5 py-4">
        
        {/* Title Section matching chrysalide-rosy style */}
        <div className="text-center mb-4 mb-md-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <span style={{ width: '30px', height: '2px', backgroundColor: '#25854C' }}></span>
            <h6 className="text-uppercase m-0 font-weight-bold" style={{ color: '#25854C', letterSpacing: '1px', fontSize: '0.85rem' }}>
              NOS CHAMBRES
            </h6>
            <span style={{ width: '30px', height: '2px', backgroundColor: '#25854C' }}></span>
          </div>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2 text-uppercase mb-0">
            Découvrez nos <span style={{ color: '#25854C' }}>CHAMBRES</span>
          </h2>
          
          {/* Category Filter Pills */}
          <div className="d-flex flex-nowrap overflow-auto py-3 px-1 gap-2 justify-content-start justify-content-md-center catalog-filter-scroll">
            <button 
              className={`btn btn-sm text-nowrap px-3 px-md-4 py-2 text-uppercase font-weight-bold rounded-pill border-0 transition-all ${filter === 'all' ? 'text-white' : 'bg-light text-dark'}`}
              style={{ backgroundColor: filter === 'all' ? '#25854C' : '#F4F5F7', fontSize: '0.8rem' }}
              onClick={() => setFilter('all')}
            >
              Toutes les offres
            </button>
            <button 
              className={`btn btn-sm text-nowrap px-3 px-md-4 py-2 text-uppercase font-weight-bold rounded-pill border-0 transition-all ${filter === 'ventilee' ? 'text-white' : 'bg-light text-dark'}`}
              style={{ backgroundColor: filter === 'ventilee' ? '#25854C' : '#F4F5F7', fontSize: '0.8rem' }}
              onClick={() => setFilter('ventilee')}
            >
              <i className="fa fa-fan me-1"></i>Chambres Ventilées
            </button>
            <button 
              className={`btn btn-sm text-nowrap px-3 px-md-4 py-2 text-uppercase font-weight-bold rounded-pill border-0 transition-all ${filter === 'climatisee' ? 'text-white' : 'bg-light text-dark'}`}
              style={{ backgroundColor: filter === 'climatisee' ? '#25854C' : '#F4F5F7', fontSize: '0.8rem' }}
              onClick={() => setFilter('climatisee')}
            >
              <i className="fa fa-snowflake me-1"></i>Chambres Climatisées
            </button>
          </div>
        </div>

        {/* 2-Card Layout matching chrysalide-rosy contour design */}
        <div className="row g-4 justify-content-center">
          {filteredRooms.map((room) => (
            <div className="col-lg-6 col-12" key={room.id}>
              <div className="bg-white rounded-4 overflow-hidden shadow-sm border h-100 d-flex flex-column transition-all hover-shadow">
                
                {/* Photo with Green Price Badge at Bottom Left */}
                <div className="position-relative overflow-hidden" style={{ height: '230px' }}>
                  <img 
                    className="img-fluid w-100 h-100" 
                    src={room.image} 
                    alt={room.name} 
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Price Tag Badge on Photo */}
                  <div 
                    className="position-absolute bottom-0 start-0 m-3 px-3 py-1 text-white font-weight-bold rounded-3 shadow-sm"
                    style={{ backgroundColor: '#25854C', fontSize: '0.82rem', zIndex: 3 }}
                  >
                    {room.price.toLocaleString('fr-FR')} {room.currency} / {room.period}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2 mb-md-3">
                    <h4 className="mb-0 text-dark font-weight-bold fs-5">{room.name}</h4>
                    {/* 5 Green Stars */}
                    <div style={{ color: '#25854C', fontSize: '0.85rem' }}>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star me-1"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>

                  {/* Amenities Row */}
                  <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 text-secondary mb-3 small font-weight-medium">
                    <span className="d-flex align-items-center">
                      <i className="fa fa-bed text-chrysalide-green me-1"></i>{room.bedType}
                    </span>
                    <span className="text-muted d-none d-sm-inline">|</span>
                    <span className="d-flex align-items-center">
                      <i className="fa fa-bath text-chrysalide-green me-1"></i>{room.bathrooms}
                    </span>
                    <span className="text-muted d-none d-sm-inline">|</span>
                    <span className="d-flex align-items-center">
                      <i className="fa fa-wifi text-chrysalide-green me-1"></i>Wi-Fi
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-secondary small mb-4 flex-grow-1 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-2 pt-3 border-top mt-auto">
                    <button 
                      className="btn py-2 px-3 flex-fill text-uppercase font-weight-bold text-white rounded-3 shadow-sm border-0"
                      style={{ backgroundColor: '#25854C', fontSize: '0.8rem' }}
                      onClick={() => setActiveModalRoom(room)}
                    >
                      VOIR DÉTAILS
                    </button>
                    <button 
                      className="btn py-2 px-3 flex-fill text-uppercase font-weight-bold text-white rounded-3 shadow-sm border-0"
                      style={{ backgroundColor: '#1E293B', fontSize: '0.8rem' }}
                      onClick={() => onSelectRoom(room)}
                    >
                      RÉSERVER MAINTENANT
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
              <div className="modal-header text-white p-3 p-md-4" style={{ backgroundColor: '#1E293B' }}>
                <h5 className="modal-title font-weight-bold text-uppercase fs-5">
                  <span style={{ color: '#25854C' }}>{activeModalRoom.name}</span>
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
                  <h3 className="font-weight-bold m-0 fs-3" style={{ color: '#25854C' }}>
                    {activeModalRoom.price.toLocaleString('fr-FR')} {activeModalRoom.currency} <span className="fs-6 text-muted font-weight-normal">/ {activeModalRoom.period}</span>
                  </h3>
                  <span className="badge py-2 px-3 text-uppercase fs-6 text-white" style={{ backgroundColor: '#25854C' }}>{activeModalRoom.categoryLabel}</span>
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
                  className="btn text-uppercase font-weight-bold px-4 shadow w-100 w-sm-auto text-white border-0"
                  style={{ backgroundColor: '#25854C' }}
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
