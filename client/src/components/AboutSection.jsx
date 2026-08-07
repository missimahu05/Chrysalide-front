import React from 'react';
import { Wifi, Shield, CheckCircle } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section className="subhero-section" id="about">
      <div className="container subhero-grid">
        <div className="subhero-img-wrapper">
          <img src="/photos/WhatsApp Image 2026-08-05 at 09.49.04.jpeg" alt="Chambre La Chrysalide Suite" />
        </div>

        <div className="subhero-card-content">
          <h2 className="subhero-title">LA CHRYSALIDE SUITE</h2>
          <p className="subhero-text">
            Découvrez tout le charme et l'élégance de nos hébergements modernes. 
            Nos suites et chambres spacieuses et lumineuses sont aménagées avec soin pour votre confort absolu.
          </p>
          <p className="subhero-text">
            Profitez de notre cadre paisible, de notre service de restauration raffiné et laissez-vous emporter par l'esprit chaleureux de notre établissement où chaque instant est un moment de plaisir.
          </p>

          <div className="subhero-features">
            <div className="subhero-feature-item">
              <span className="icon-badge-p">P</span>
              <span>Stationnement gratuit & sécurisé devant l'hôtel.</span>
            </div>
            <div className="subhero-feature-item">
              <Wifi size={20} style={{ color: 'var(--color-emerald)' }} />
              <span>Connexion Wi-Fi Haut Débit gratuite dans tout l'établissement.</span>
            </div>
            <div className="subhero-feature-item">
              <Shield size={20} style={{ color: 'var(--color-emerald)' }} />
              <span>Gardiennage & Sécurité 24h/24.</span>
            </div>
          </div>

          <button className="btn-mirabeau-rose" onClick={() => onOpenBooking()}>
            RÉSERVER
          </button>
        </div>
      </div>
    </section>
  );
}
