import React, { useState } from 'react';
import { Calendar, Users, Home } from 'lucide-react';

export default function Hero({ onSearchAvailability, onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [category, setCategory] = useState('all');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchAvailability({ checkIn, checkOut, category, guests });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content-inner">
        <div className="hero-badge-logo">
          <img src="/logo.jpg" alt="Logo La Chrysalide Suite" />
        </div>

        <h1 className="hero-title-serif">
          BIENVENUE À LA CHRYSALIDE SUITE
        </h1>

        <p className="hero-subtitle">
          L'ÉLÉGANCE, LE LUXE & LE CONFORT AU CŒUR DE VOTRE SÉJOUR
        </p>

        {/* Floating Search Bar (Hotels.com style) */}
        <form className="floating-search-bar" onSubmit={handleSubmit}>
          <div className="search-block">
            <span className="search-label">Arrivée</span>
            <input 
              type="date" 
              className="search-input"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="search-block">
            <span className="search-label">Départ</span>
            <input 
              type="date" 
              className="search-input"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="search-block">
            <span className="search-label">Logement</span>
            <select 
              className="search-input"
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Tous les types</option>
              <option value="ventilee">Chambre Ventilée</option>
              <option value="climatisee">Chambre Climatisée</option>
              <option value="suite">Suite VIP</option>
              <option value="appartement">Appartement Meublé</option>
            </select>
          </div>

          <div className="search-block">
            <span className="search-label">Personnes</span>
            <select 
              className="search-input"
              value={guests} 
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Personne</option>
              <option value="2">2 Personnes</option>
              <option value="3">3 Personnes</option>
              <option value="4">4+ Personnes</option>
            </select>
          </div>

          <button type="submit" className="btn-mirabeau-rose">
            RÉSERVER
          </button>
        </form>
      </div>
    </section>
  );
}
