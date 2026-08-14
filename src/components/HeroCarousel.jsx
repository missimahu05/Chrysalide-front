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
      btnLink1: '#rooms',
      btnText2: 'Réserver Séjour',
      btnAction2: 'booking'
    },
    {
      id: 2,
      image: '/img/hero/2.jpeg',
      subtitle: 'Ambiance Conviviale & Cocktails Raffinés',
      titleGreen: 'Bar Lounge &',
      titleGold: 'Cave à Vin',
      description: 'Dégustez notre sélection de vins d’exception, cocktails signature et espace Chicha dans une atmosphère VIP.',
      btnText1: 'Découvrir le Bar',
      btnLink1: '#events',
      btnText2: 'Réserver une Table',
      btnLink2: 'https://wa.me/2290159188023?text=Bonjour,%20je%20souhaite%20réserver%20une%20table%20au%20Bar%20Lounge%20de%20La%20Chrysalide%20Suite.'
    },
    {
      id: 3,
      image: '/img/hero/3.jpeg',
      subtitle: 'Gastronomie & Spécialités Gourmandes',
      titleGreen: 'Restaurant &',
      titleGold: 'Restauration',
      description: 'Savourez une cuisine délicieuse avec nos plats préparés sur place pour vos repas d’affaires ou de famille.',
      btnText1: 'Voir la Carte',
      btnLink1: '#events',
      btnText2: 'Commander un Repas',
      btnLink2: 'https://wa.me/2290159188023?text=Bonjour,%20je%20souhaite%20passer%20une%20commande%20au%20restaurant%20de%20La%20Chrysalide%20Suite.'
    },
    {
      id: 4,
      image: '/img/hero/4.jpeg',
      subtitle: 'Chambres Ventilées & Climatisées',
      titleGreen: 'Confort &',
      titleGold: 'Sécurité 24h/24',
      description: 'Hébergements de standing totalement équipés et surveillés pour votre tranquillité d’esprit.',
      btnText1: 'Voir nos Offres',
      btnLink1: '#rooms',
      btnText2: 'Réserver en Ligne',
      btnAction2: 'booking'
    },
    {
      id: 5,
      image: '/img/hero/5.jpeg',
      subtitle: 'Résidences Meublées & Longs Séjours',
      titleGreen: 'Bienvenue à',
      titleGold: 'Parakou',
      description: 'Profitez d’un séjour mémorable à La Chrysalide Suite avec un service personnalisé à votre écoute.',
      btnText1: 'En savoir plus',
      btnLink1: '#about',
      btnText2: 'Nous Contacter',
      btnLink2: '#contact-location'
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

  const handleSmoothScroll = (e, target) => {
    if (target && target.startsWith('#')) {
      e.preventDefault();
      const elem = document.querySelector(target);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="container-fluid p-0 position-relative hero-carousel-wrapper" id="hero" style={{ overflow: 'hidden' }}>
      <div className="carousel slide position-relative hero-carousel-inner">
        
        {/* Carousel Indicators (Dots) */}
        <div className="carousel-indicators" style={{ zIndex: 15, marginBottom: '1.2rem' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`rounded-circle mx-1 ${idx === activeIndex ? 'active bg-warning' : 'bg-white opacity-50'}`}
              style={{ width: '12px', height: '12px', border: 'none', transition: 'all 0.3s' }}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Diapositive ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner Slides */}
        <div className="carousel-inner" style={{ backgroundColor: '#0F172B' }}>
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{
                display: index === activeIndex ? 'block' : 'none',
                transition: 'opacity 0.8s ease-in-out',
                position: 'relative'
              }}
            >
              <img 
                className="w-100 hero-slide-img" 
                src={slide.image} 
                alt={slide.titleGreen} 
                style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 p-2 p-sm-3 p-md-4" style={{ top: 0, bottom: 0, background: 'rgba(15, 23, 43, 0.45)' }}>
                <div className="p-1 p-sm-2 p-md-3 text-center" style={{ maxWidth: '950px' }}>
                  <h6 className="section-title text-chrysalide-gold text-uppercase mb-2 mb-md-3 animated slideInDown font-weight-bold" style={{ letterSpacing: '1.2px', fontSize: 'clamp(0.72rem, 2vw, 0.85rem)' }}>
                    {slide.subtitle}
                  </h6>
                  <h1 className="hero-heading text-white mb-2 mb-md-3 animated slideInDown font-weight-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.85)', lineHeight: '1.2' }}>
                    <span className="text-chrysalide-green">{slide.titleGreen}</span>{' '}
                    <span className="text-chrysalide-gold">{slide.titleGold}</span>
                  </h1>
                  <p className="text-white-50 small fs-md-5 mb-3 mb-md-4 px-1 px-md-5 font-weight-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)', fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)' }}>
                    {slide.description}
                  </p>
                  
                  {/* Dynamic Action Buttons for Active Slide */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 pt-2">
                    <a 
                      href={slide.btnLink1 || '#rooms'} 
                      onClick={(e) => handleSmoothScroll(e, slide.btnLink1)}
                      className="btn btn-primary py-2.5 py-md-3 px-3 px-sm-4 px-md-5 animated slideInLeft text-uppercase font-weight-bold shadow-lg" 
                      style={{ fontSize: '0.85rem' }}
                    >
                      {slide.btnText1}
                    </a>
                    
                    {slide.btnAction2 === 'booking' ? (
                      <button 
                        onClick={onOpenBooking} 
                        className="btn btn-light py-2.5 py-md-3 px-3 px-sm-4 px-md-5 animated slideInRight text-uppercase font-weight-bold shadow-lg"
                        style={{ fontSize: '0.85rem' }}
                      >
                        {slide.btnText2}
                      </button>
                    ) : slide.btnLink2?.startsWith('http') ? (
                      <a 
                        href={slide.btnLink2} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-light py-2.5 py-md-3 px-3 px-sm-4 px-md-5 animated slideInRight text-uppercase font-weight-bold shadow-lg"
                        style={{ fontSize: '0.85rem' }}
                      >
                        {slide.btnText2}
                      </a>
                    ) : (
                      <a 
                        href={slide.btnLink2 || '#contact-location'} 
                        onClick={(e) => handleSmoothScroll(e, slide.btnLink2)}
                        className="btn btn-light py-2.5 py-md-3 px-3 px-sm-4 px-md-5 animated slideInRight text-uppercase font-weight-bold shadow-lg"
                        style={{ fontSize: '0.85rem' }}
                      >
                        {slide.btnText2}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Prev/Next Navigation Controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={handlePrev}
          aria-label="Diapositive précédente"
          style={{ zIndex: 10, background: 'none', border: 'none', width: '12%' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '1.8rem', height: '1.8rem' }}></span>
          <span className="visually-hidden">Précédent</span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={handleNext}
          aria-label="Diapositive suivante"
          style={{ zIndex: 10, background: 'none', border: 'none', width: '12%' }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '1.8rem', height: '1.8rem' }}></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}
