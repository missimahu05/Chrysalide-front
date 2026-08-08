import React, { useState } from 'react';

export default function BookingBar({ onSearchAvailability }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [category, setCategory] = useState('all');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchAvailability({ checkIn, checkOut, category, guests });
  };

  return (
    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s" style={{ position: 'relative', zIndex: 10, marginTop: '-50px' }}>
      <div className="container">
        <div className="bg-white shadow-lg rounded p-4 border-2" style={{ borderLeft: '5px solid #25854C', borderTop: '2px solid #CFA34C' }}>
          <form onSubmit={handleSubmit} className="row g-3 align-items-end">
            <div className="col-md-3">
              <label className="form-label text-uppercase text-dark font-weight-bold" style={{ fontSize: '0.8rem' }}>
                <i className="fa fa-calendar-alt me-2 text-chrysalide-green"></i>Date d’arrivée
              </label>
              <input 
                type="date" 
                className="form-control" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required 
              />
            </div>

            <div className="col-md-3">
              <label className="form-label text-uppercase text-dark font-weight-bold" style={{ fontSize: '0.8rem' }}>
                <i className="fa fa-calendar-check me-2 text-chrysalide-gold"></i>Date de départ
              </label>
              <input 
                type="date" 
                className="form-control" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required 
              />
            </div>

            <div className="col-md-2">
              <label className="form-label text-uppercase text-dark font-weight-bold" style={{ fontSize: '0.8rem' }}>
                <i className="fa fa-bed me-2 text-chrysalide-purple"></i>Hébergement
              </label>
              <select 
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">Tous types</option>
                <option value="ventilee">Ventilée</option>
                <option value="climatisee">Climatisée</option>
                <option value="suite">Suite VIP</option>
                <option value="appartement">Appartement</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label text-uppercase text-dark font-weight-bold" style={{ fontSize: '0.8rem' }}>
                <i className="fa fa-users me-2 text-chrysalide-green"></i>Personnes
              </label>
              <select 
                className="form-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 Personne</option>
                <option value="2">2 Personnes</option>
                <option value="3">3 Personnes</option>
                <option value="4">4+ Personnes</option>
              </select>
            </div>

            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100 py-2 text-uppercase font-weight-bold shadow">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
