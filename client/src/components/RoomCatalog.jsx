import React, { useState } from 'react';
import { roomsData } from '../data/roomsData';
import { Users, Maximize, Check } from 'lucide-react';

export default function RoomCatalog({ onSelectRoomForBooking, filterCategory }) {
  const [activeFilter, setActiveFilter] = useState(filterCategory || 'all');

  const filteredRooms = activeFilter === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === activeFilter);

  return (
    <section className="catalog-section" id="rooms">
      <div className="container">
        <h2 className="section-title-center">NOS SUITES & CHAMBRES</h2>
        <p className="section-sub-center">Découvrez nos hébergements modernes et réservez votre séjour en toute simplicité.</p>

        <div className="filter-pills-row">
          <button 
            className={`pill-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Tous les logements
          </button>
          <button 
            className={`pill-filter-btn ${activeFilter === 'ventilee' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ventilee')}
          >
            Chambres Ventilées
          </button>
          <button 
            className={`pill-filter-btn ${activeFilter === 'climatisee' ? 'active' : ''}`}
            onClick={() => setActiveFilter('climatisee')}
          >
            Chambres Climatisées
          </button>
          <button 
            className={`pill-filter-btn ${activeFilter === 'suite' ? 'active' : ''}`}
            onClick={() => setActiveFilter('suite')}
          >
            Suites VIP
          </button>
          <button 
            className={`pill-filter-btn ${activeFilter === 'appartement' ? 'active' : ''}`}
            onClick={() => setActiveFilter('appartement')}
          >
            Appartements Meublés
          </button>
        </div>

        <div className="catalog-cards-grid">
          {filteredRooms.map((room) => (
            <div className="light-room-card" key={room.id}>
              <div className="light-room-img-box">
                <img src={room.image} alt={room.name} />
                <span className="badge-cat-emerald">{room.categoryLabel}</span>
              </div>

              <div className="light-room-body">
                <h3 className="light-room-name">{room.name}</h3>
                
                <div className="light-room-price">
                  {room.price.toLocaleString('fr-FR')} {room.currency} <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>/ nuit</span>
                </div>

                <div className="light-room-meta">
                  <span><Users size={14} /> {room.capacity} Personnes</span>
                  <span><Maximize size={14} /> {room.size}</span>
                </div>

                <div className="card-actions-row">
                  <button 
                    className="btn-mirabeau-rose" 
                    style={{ flex: 1 }}
                    onClick={() => onSelectRoomForBooking(room)}
                  >
                    RÉSERVER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
