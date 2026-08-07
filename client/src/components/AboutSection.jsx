import React from 'react';
import { ShieldCheck, Coffee, Sparkles, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        {/* Left Side: Overlapping Images */}
        <div className="about-images-wrapper">
          <div className="main-image-card">
            <img src="/photos/WhatsApp Image 2026-08-05 at 09.49.04.jpeg" alt="La Chrysalide Suites" />
          </div>
          <div className="sub-image-card">
            <img src="/photos/WhatsApp Image 2026-08-05 at 09.49.05 (1).jpeg" alt="Chambre de luxe" />
          </div>
          
          {/* Overlapping Floating Badge */}
          <div className="floating-stat-badge">
            <Award size={28} className="badge-icon" />
            <div>
              <span className="badge-number">10+</span>
              <span className="badge-label">Années d'Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content">
          <div className="section-subtitle-tag">
            <Sparkles size={14} /> À PROPOS DE NOUS
          </div>
          <h2 className="section-title-large">
            Bienvenue à <span>La Chrysalide Suites</span>
          </h2>

          <p className="about-text-lead">
            Situé dans un environnement paisible, **La Chrysalide Suites** vous offre un cadre raffiné et sécurisé pour l'ensemble de vos séjours professionnels ou privés.
          </p>

          <p className="about-text-body">
            Que vous recherchiez une chambre ventilée économique, une chambre climatisée haut de gamme, une suite d'exception VIP ou un appartement entièrement meublé, notre établissement répond à vos exigences avec un service personnalisé irréprochable.
          </p>

          <div className="about-highlights-grid">
            <div className="highlight-item">
              <ShieldCheck className="item-icon" />
              <div>
                <h4>Sécurité & Discrétion</h4>
                <p>Surveillance 24h/24, gardiennage et accès sécurisé garanti.</p>
              </div>
            </div>

            <div className="highlight-item">
              <Coffee className="item-icon" />
              <div>
                <h4>Restauration & Bar</h4>
                <p>Cuisine raffinée, petit-déjeuner copieux et rafraîchissements sur place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
