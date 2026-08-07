import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Shield, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-info">
            <span className="info-item"><Sparkles size={14} className="icon-gold" /> Bienvenue à La Chrysalide Suites — Luxe, Confort & Sérénité</span>
          </div>
          <div className="top-contact">
            <a href="tel:+22901000000" className="top-link"><Phone size={13} /> +229 01 00 00 00 / 01 90 90 90</a>
            <span className="divider">|</span>
            <span className="top-badge"><Shield size={13} /> Service 24h/7j</span>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-container">
          <a href="#" className="brand-logo">
            <div className="logo-badge">C</div>
            <div className="logo-text">
              <span className="brand-name">LA CHRYSALIDE</span>
              <span className="brand-sub">SUITES & RÉSIDENCE</span>
            </div>
          </a>

          <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            <li><a href="#hero" onClick={() => setMobileOpen(false)}>Accueil</a></li>
            <li><a href="#about" onClick={() => setMobileOpen(false)}>À Propos</a></li>
            <li><a href="#rooms" onClick={() => setMobileOpen(false)}>Nos Suites & Chambres</a></li>
            <li><a href="#services" onClick={() => setMobileOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn-primary-gold" onClick={() => onOpenBooking()}>
              <Calendar size={16} /> Réserver une Suite
            </button>

            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
