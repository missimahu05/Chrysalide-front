import React from 'react';
import { Utensils, Briefcase, Car, Shield, Wifi, Coffee, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Utensils,
      title: 'Restauration & Bar Lounge',
      desc: 'Savourez une cuisine locale et internationale raffinée préparée par notre chef, ou profitez de nos cocktails au bar.'
    },
    {
      icon: Briefcase,
      title: 'Salles de Réunion & Séminaires',
      desc: 'Espaces modulables équipés de projecteurs HD et sonorisation pour vos réunions d\'affaires et événements privés.'
    },
    {
      icon: Car,
      title: 'Navette & Transfert Aéroport',
      desc: 'Service de transport privé sur réservation pour vos déplacements depuis et vers l\'aéroport et la ville.'
    },
    {
      icon: Shield,
      title: 'Sécurité & Gardiennage 24/7',
      desc: 'Vidéosurveillance permanente et agents de sécurité qualifiés pour garantir une tranquillité absolue.'
    },
    {
      icon: Wifi,
      title: 'Connexion Internet Très Haut Débit',
      desc: 'Fibre optique disponible gratuitement dans l\'ensemble des chambres, suites et espaces communs.'
    },
    {
      icon: Coffee,
      title: 'Petit-Déjeuner & Room Service',
      desc: 'Un petit-déjeuner complet servi au restaurant ou directement dans le confort de votre suite.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <div className="section-subtitle-tag">
            <Sparkles size={14} /> EXPÉRIENCES EXCLUSIVES
          </div>
          <h2 className="section-title-large">
            Nos Services <span>Haut de Standing</span>
          </h2>
          <p className="section-description-center">
            Un ensemble de prestations pensées pour faire de votre séjour un moment inoubliable.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div className="service-card" key={idx}>
                <div className="service-icon-box">
                  <IconComp size={28} className="icon-gold" />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
