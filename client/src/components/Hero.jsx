import React, { useState } from 'react';
import { Calendar, Users, Home, Search, Star, Award, CheckCircle } from 'lucide-react';

export default function Hero({ onSearchAvailability }) {
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
      <div className="hero-bg-overlay"></div>

      <div className="container hero-content">
        <div className="hero-badge-tag">
          <Star size={14} className="star-icon" /> RÉSIDENCE HÔTELIÈRE DE LUXE
        </div>

        <h1 className="hero-heading">
          Un Cadre de Vie D’Exception <br />
          <span>À La Chrysalide Suites</span>
        </h1>

        <p className="hero-subtext">
          Découvrez nos suites de haut standing, chambres climatisées, ventilées et appartements modernes entièrement équipés pour des séjours inoubliables.
        </p>

        {/* Floating Search Availability Bar */}
        <form className="booking-search-bar" onSubmit={handleSubmit}>
          <div className="search-field">
            <label><Calendar size={16} /> Arrivée</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label><Calendar size={16} /> Départ</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label><Home size={16} /> Type de Logement</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Tous les types</option>
              <option value="ventilee">Chambres Ventilées</option>
              <option value="climatisee">Chambres Climatisées</option>
              <option value="suite">Suites Exécutives VIP</option>
              <option value="appartement">Appartements Meublés</option>
            </select>
          </div>

          <div className="search-field">
            <label><Users size={16} /> Personnes</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="1">1 Personne</option>
              <option value="2">2 Personnes</option>
              <option value="3">3 Personnes</option>
              <option value="4">4+ Personnes</option>
            </select>
          </div>

          <button type="submit" className="search-submit-btn">
            <Search size={18} /> Rechercher
          </button>
        </form>

        {/* Feature Highlights */}
        <div className="hero-features-strip">
          <div className="feature-pill"><CheckCircle size={15} /> Wi-Fi Haut Débit Gratuit</div>
          <div className="feature-pill"><CheckCircle size={15} /> Canal+ & Netflix HD</div>
          <div className="feature-pill"><CheckCircle size={15} /> Petit Déjeuner & Room Service</div>
          <div className="feature-pill"><CheckCircle size={15} /> Parking Sécurisé 24h/7j</div>
        </div>
      </div>
    </section>
  );
}
