import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-brand">
            <div className="logo-badge">C</div>
            <span className="brand-name">LA CHRYSALIDE SUITES</span>
          </div>
          <p className="footer-tagline">
            Votre havre de paix, de confort et de sécurité. Chambres ventilées, climatisées, suites VIP et appartements de grand standing.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation Rapide</h4>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#rooms">Nos Suites & Chambres</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact & Réception</h4>
          <p><MapPin size={14} /> Cotonou / Littoral, Bénin</p>
          <p><Phone size={14} /> +229 01 00 00 00 / 01 90 90 90</p>
          <p><Mail size={14} /> contact@chrysalidesuites.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© 2026 La Chrysalide Suites. Tous droits réservés.</p>
          <p className="designed-by">Conçu avec <Heart size={14} className="heart-icon" /> par JJTECH</p>
        </div>
      </div>
    </footer>
  );
}
