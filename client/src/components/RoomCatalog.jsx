import React, { useState } from 'react';
import { roomsData } from '../data/roomsData';
import { Users, Maximize, Check, Calendar, Eye, Sparkles } from 'lucide-react';

export default function RoomCatalog({ onSelectRoomForBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewRoom, setPreviewRoom] = useState(null);

  const filteredRooms = activeFilter === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === activeFilter);

  return (
    <section className="rooms-section" id="rooms">
      <div className="container">
        <div className="section-header-center">
          <div className="section-subtitle-tag">
            <Sparkles size={14} /> NOS LOGEMENTS D'EXCEPTION
          </div>
          <h2 className="section-title-large">
            Découvrez nos <span>Suites & Chambres</span>
          </h2>
          <p className="section-description-center">
            Un large choix d'hébergements aménagés avec goût et offrant tout le confort moderne.
          </p>

          {/* Filter Buttons */}
          <div className="filter-buttons-wrapper">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Tous les Logements
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ventilee' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ventilee')}
            >
              Chambres Ventilées
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'climatisee' ? 'active' : ''}`}
              onClick={() => setActiveFilter('climatisee')}
            >
              Chambres Climatisées
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'suite' ? 'active' : ''}`}
              onClick={() => setActiveFilter('suite')}
            >
              Suites VIP
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'appartement' ? 'active' : ''}`}
              onClick={() => setActiveFilter('appartement')}
            >
              Appartements Meublés
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="rooms-cards-grid">
          {filteredRooms.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-image-box">
                <img src={room.image} alt={room.name} />
                <span className="category-badge">{room.categoryLabel}</span>
                <div className="price-tag">
                  <span className="price-amount">{room.price.toLocaleString('fr-FR')} {room.currency}</span>
                  <span className="price-period">/ {room.period}</span>
                </div>
              </div>

              <div className="room-card-body">
                <h3 className="room-title">{room.name}</h3>
                
                <div className="room-meta-info">
                  <span><Users size={14} /> {room.capacity} Personnes</span>
                  <span><Maximize size={14} /> {room.size}</span>
                </div>

                <p className="room-description">{room.description}</p>

                <div className="amenities-list">
                  {room.amenities.slice(0, 4).map((amenity, idx) => (
                    <span className="amenity-pill" key={idx}>
                      <Check size={12} /> {amenity}
                    </span>
                  ))}
                </div>

                <div className="room-card-actions">
                  <button 
                    className="btn-outline-gold"
                    onClick={() => setPreviewRoom(room)}
                  >
                    <Eye size={15} /> Aperçu
                  </button>
                  <button 
                    className="btn-primary-gold"
                    onClick={() => onSelectRoomForBooking(room)}
                  >
                    <Calendar size={15} /> Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal Preview */}
      {previewRoom && (
        <div className="modal-backdrop" onClick={() => setPreviewRoom(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewRoom(null)}>✕</button>

            <div className="modal-room-grid">
              <div className="modal-gallery">
                <img src={previewRoom.image} alt={previewRoom.name} className="modal-main-img" />
                <div className="modal-thumbs">
                  {previewRoom.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt="" className="thumb-img" />
                  ))}
                </div>
              </div>

              <div className="modal-details">
                <span className="category-badge">{previewRoom.categoryLabel}</span>
                <h2>{previewRoom.name}</h2>
                <div className="modal-price">
                  {previewRoom.price.toLocaleString('fr-FR')} {previewRoom.currency} <span>/ nuit</span>
                </div>

                <p className="modal-desc">{previewRoom.description}</p>

                <h4>Équipements inclus :</h4>
                <ul className="modal-amenities-grid">
                  {previewRoom.amenities.map((item, i) => (
                    <li key={i}><Check size={14} className="icon-gold" /> {item}</li>
                  ))}
                </ul>

                <div className="modal-actions">
                  <button 
                    className="btn-primary-gold full-width"
                    onClick={() => {
                      const roomToBook = previewRoom;
                      setPreviewRoom(null);
                      onSelectRoomForBooking(roomToBook);
                    }}
                  >
                    <Calendar size={16} /> Procéder à la Réservation
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
