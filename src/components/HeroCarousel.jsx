import React, { useState, useEffect } from 'react';

export default function HeroCarousel({ onOpenBooking }) {
  const slides = [
    {
      id: 1,
      image: '/img/hero/1.jpeg',
      subtitle: 'Hôtel • Bar Lounge • Cave à Vin • Quartier Nima, Parakou',
      titleGreen: 'La Chrysalide',
      titleGold: 'Suite',
      description: 'Un cadre d’exception alliant élégance, confort absolu et sérénité au cœur de Parakou.',
      btnText1: 'Nos Chambres',
      btnText2: 'Réserver Séjour'
    },
    {
      id: 2,
      image: '/img/hero/2.jpeg',
      subtitle: 'Ambiance Conviviale & Cocktails Raffinés',
      titleGreen: 'Bar Lounge &',
      titleGold: 'Cave à Vin',
      description: 'Dégustez notre sélection de vins d’exception, cocktails signature et espace Chicha dans une atmosphère VIP.',
      btnText1: 'Découvrir le Bar',
      btnText2: 'Réserver une Table'
    },
    {
      id: 3,
      image: '/img/hero/3.jpeg',
      subtitle: 'Gastronomie & Spécialités Gourmandes',
      titleGreen: 'Restaurant &',
      titleGold: 'Restauration',
      description: 'Savourez une cuisine délicieuse avec nos plats préparés sur place pour vos repas d’affaires ou de famille.',
      btnText1: 'Notre Carte',
      btnText2: 'Commander'
    },
    {
      id: 4,
      image: '/img/hero/4.jpeg',
      subtitle: 'Chambres Ventilées & Climatisées, Suites VIP',
      titleGreen: 'Confort &',
      titleGold: 'Sécurité 24h/24',
      description: 'Hébergements de standing totalement équipés et surveillés pour votre tranquillité d’esprit.',
      btnText1: 'Voir nos Offres',
      btnText2: 'Réserver en Ligne'
    },
    {
      id: 5,
      image: '/img/hero/5.jpeg',
      subtitle: 'Résidences Meublées & Longs Séjours',
      titleGreen: 'Bienvenue à',
      titleGold: 'Parakou',
      description: 'Profitez d’un séjour mémorable à La Chrysalide Suite avec un service personnalisé à votre écoute.',
      btnText1: 'En savoir plus',
      btnText2: 'Nous Contacter'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container-fluid p-0 position-relative" id="hero" style={{ minHeight: '100vh', height: '100vh', overflow: 'hidden' }}>
      <div className="carousel slide h-100 position-relative">
        <div className="carousel-inner h-100" style={{ backgroundColor: '#0F172B' }}>
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`carousel-item h-100 ${index === activeIndex ? 'active' : ''}`}
              style={{
                display: index === activeIndex ? 'block' : 'none',
                transition: 'opacity 0.8s ease-in-out',
                position: 'relative'
              }}
            >
              <img 
                className="w-100 h-100" 
                src={slide.image} 
                alt={slide.titleGreen} 
                style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100" style={{ top: 0, bottom: 0, background: 'rgba(15, 23, 43, 0.45)' }}>
                <div className="p-3 text-center" style={{ maxWidth: '950px' }}>
                  <h6 className="section-title text-chrysalide-gold text-uppercase mb-3 animated slideInDown font-weight-bold" style={{ letterSpacing: '3px' }}>
                    {slide.subtitle}
                  </h6>
                  <h1 className="display-2 text-white mb-3 animated slideInDown font-weight-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.85)', lineHeight: '1.2' }}>
                    <span className="text-chrysalide-green">{slide.titleGreen}</span>{' '}
                    <span className="text-chrysalide-gold">{slide.titleGold}</span>
                  </h1>
                  <p className="text-white-50 fs-5 mb-4 px-md-5 font-weight-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                    {slide.description}
                  </p>
                  <div className="d-flex justify-content-center gap-3 pt-2">
                    <a href="#rooms" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft me-2 text-uppercase font-weight-bold shadow-lg">
                      {slide.btnText1}
                    </a>
                    <button 
                      onClick={onOpenBooking} 
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight text-uppercase font-weight-bold shadow-lg"
                    >
                      {slide.btnText2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={handlePrev}
          style={{ zIndex: 10, background: 'none', border: 'none', width: '8%' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '3.5rem', height: '3.5rem' }}></span>
          <span className="visually-hidden">Précédent</span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={handleNext}
          style={{ zIndex: 10, background: 'none', border: 'none', width: '8%' }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '3.5rem', height: '3.5rem' }}></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}
