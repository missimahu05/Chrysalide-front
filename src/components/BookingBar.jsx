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
    <div className="container-fluid booking pb-4 pb-md-5 position-relative booking-bar-container">
      <div className="container">
        <div className="bg-white shadow-lg rounded-4 p-3 p-md-4 border-2" style={{ borderLeft: '5px solid #25854C', borderTop: '2px solid #CFA34C' }}>
          <form onSubmit={handleSubmit} className="row g-2 g-md-3 align-items-end">
            <div className="col-12 col-sm-6 col-md-3">
              <label className="form-label text-uppercase text-dark font-weight-bold mb-1" style={{ fontSize: '0.78rem' }}>
                <i className="fa fa-calendar-alt me-2 text-chrysalide-green"></i>Date d’arrivée
              </label>
              <input 
                type="date" 
                className="form-control form-control-sm form-control-md" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required 
              />
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <label className="form-label text-uppercase text-dark font-weight-bold mb-1" style={{ fontSize: '0.78rem' }}>
                <i className="fa fa-calendar-check me-2 text-chrysalide-gold"></i>Date de départ
              </label>
              <input 
                type="date" 
                className="form-control form-control-sm form-control-md" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required 
              />
            </div>

            <div className="col-6 col-md-2">
              <label className="form-label text-uppercase text-dark font-weight-bold mb-1" style={{ fontSize: '0.78rem' }}>
                <i className="fa fa-bed me-2 text-chrysalide-purple"></i>Hébergement
              </label>
              <select 
                className="form-select form-select-sm form-select-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">Tous types</option>
                <option value="ventilee">Chambre Ventilée</option>
                <option value="climatisee">Chambre Climatisée</option>
              </select>
            </div>

            <div className="col-6 col-md-2">
              <label className="form-label text-uppercase text-dark font-weight-bold mb-1" style={{ fontSize: '0.78rem' }}>
                <i className="fa fa-users me-2 text-chrysalide-green"></i>Personnes
              </label>
              <select 
                className="form-select form-select-sm form-select-md"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 Personne</option>
                <option value="2">2 Personnes</option>
                <option value="3">3 Personnes</option>
                <option value="4">4+ Personnes</option>
              </select>
            </div>

            <div className="col-12 col-md-2 mt-3 mt-md-0">
              <button type="submit" className="btn btn-primary w-100 py-2 text-uppercase font-weight-bold shadow rounded-3">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
