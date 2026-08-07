import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="top-bar-info">
        ✦ La Chrysalide Suite — Résidence Hôtelière & Suites de Grand Standing ✦
      </div>

      <div className="container main-nav-inner">
        <div className="nav-left">
          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="lang-selector">🇫🇷 FR ▾</span>
        </div>

        {/* Center: Official Logo */}
        <a href="#" className="brand-logo-container">
          <img src="/logo.jpg" alt="La Chrysalide Suite Logo" className="official-logo-img" />
          <div className="brand-title-group">
            <span className="brand-title-main">La Chrysalide</span>
            <span className="brand-title-sub">SUITE</span>
          </div>
        </a>

        {/* Right: Phone link & Mirabeau style RÉSERVER button */}
        <div className="nav-right">
          <a href="tel:+22901000000" className="phone-link-btn">
            <Phone size={15} /> +229 01 00 00 00
          </a>
          <button className="btn-mirabeau-rose" onClick={() => onOpenBooking()}>
            RÉSERVER
          </button>
        </div>
      </div>
    </header>
  );
}
