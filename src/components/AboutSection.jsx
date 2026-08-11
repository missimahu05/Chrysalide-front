import React, { useState } from 'react';
import { 
  Utensils, Wine, BedDouble, ShieldCheck, Award, Smile, 
  ChevronRight, CalendarCheck, ZoomIn, X 
} from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      img: '/img/gallery/chrysalide-real-1.jpeg',
      title: 'Restauration & Grillades',
      sub: 'Poulet sauté & Spécialités locales',
      tag: 'Gastronomie',
      icon: Utensils,
      height: '260px'
    },
    {
      id: 2,
      img: '/img/gallery/chrysalide-real-2.jpeg',
      title: 'Cuisine Raffinée',
      sub: 'Plats cuisinés avec soin par nos chefs',
      tag: 'Saveurs',
      icon: Utensils,
      height: '260px'
    },
    {
      id: 3,
      img: '/img/gallery/chrysalide-real-3.jpeg',
      title: 'Bar Lounge & VIP',
      sub: 'Ambiance feutrée, vins & cocktails',
      tag: 'Détente 24/7',
      icon: Wine,
      height: '240px'
    },
    {
      id: 4,
      img: '/img/gallery/chrysalide-real-4.jpeg',
      title: 'Chambres & Suites',
      sub: 'Ventilées et Climatisées haut de gamme',
      tag: 'Confort',
      icon: BedDouble,
      height: '240px'
    }
  ];

  return (
    <section className="w-100 min-vh-lg-100 d-flex align-items-center py-5 position-relative" id="about" style={{ backgroundColor: '#FAF8F5' }}>
      
      <div className="container-fluid px-3 px-md-5 px-xl-5 position-relative z-index-1">
        
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* Left Column: Airy Text & Features */}
          <div className="col-lg-6 pe-lg-4">
            
            <div className="d-inline-flex align-items-center gap-2 px-3.5 py-2 rounded-pill mb-3 border shadow-sm" style={{ backgroundColor: '#FFFFFF', borderColor: '#CFA34C' }}>
              <Award size={18} style={{ color: '#CFA34C' }} />
              <span className="text-uppercase font-weight-bold" style={{ fontSize: '0.78rem', color: '#25854C', letterSpacing: '1.2px' }}>
                Complexe Hôtelier d'Exception à Parakou
              </span>
            </div>

            <h2 className="mb-4 font-weight-bold display-5 text-dark" style={{ lineHeight: '1.2' }}>
              Bienvenue à <span style={{ color: '#25854C' }}>La Chrysalide</span> <span style={{ color: '#CFA34C' }}>Suite</span>
            </h2>

            <p className="mb-3 text-secondary leading-relaxed fs-5">
              Idéalement situé au <strong>Quartier Nima à Parakou</strong>, <strong>La Chrysalide Suite</strong> associe élégance, tranquillité et confort moderne pour offrir un séjour d'exception à chaque visiteur.
            </p>

            <p className="mb-4 text-secondary leading-relaxed fs-5">
              Profitez de nos <strong>chambres ventilées et climatisées</strong>, de notre <strong>Bar Lounge VIP</strong>, de notre <strong>Cave à Vin d'exception</strong>, de notre service de <strong>Restauration gourmande</strong> et de nos espaces de détente conçus pour votre bien-être.
            </p>

            {/* 3 Metric Cards */}
            <div className="row g-3 pb-4 my-2">
              <div className="col-4">
                <div className="bg-white rounded-4 p-3.5 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #25854C' }}>
                  <div className="d-inline-flex p-2.5 rounded-circle mb-2" style={{ backgroundColor: 'rgba(37, 133, 76, 0.1)' }}>
                    <BedDouble size={22} style={{ color: '#25854C' }} />
                  </div>
                  <h3 className="mb-0 font-weight-bold text-dark fs-3">2 Types</h3>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.72rem' }}>Ventilée & Climatisée</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-4 p-3.5 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #CFA34C' }}>
                  <div className="d-inline-flex p-2.5 rounded-circle mb-2" style={{ backgroundColor: 'rgba(207, 163, 76, 0.12)' }}>
                    <Wine size={22} style={{ color: '#CFA34C' }} />
                  </div>
                  <h3 className="mb-0 font-weight-bold text-dark fs-3">VIP</h3>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.72rem' }}>Lounge & Resto</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-4 p-3.5 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #7A288A' }}>
                  <div className="d-inline-flex p-2.5 rounded-circle mb-2" style={{ backgroundColor: 'rgba(122, 40, 138, 0.1)' }}>
                    <ShieldCheck size={22} style={{ color: '#7A288A' }} />
                  </div>
                  <h3 className="mb-0 font-weight-bold text-dark fs-3">24h/24</h3>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.72rem' }}>Sécurité & Service</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
              <button 
                onClick={onOpenBooking} 
                className="btn py-3 px-4 text-uppercase font-weight-bold shadow-lg rounded-3 d-inline-flex align-items-center justify-content-center text-white border-0 fs-6"
                style={{ backgroundColor: '#25854C' }}
              >
                <CalendarCheck size={20} className="me-2" />
                Réserver votre séjour
              </button>

              <a 
                href="#rooms" 
                className="btn btn-outline-dark py-3 px-4 text-uppercase font-weight-bold rounded-3 text-center d-inline-flex align-items-center justify-content-center fs-6"
              >
                Découvrir nos offres
                <ChevronRight size={20} className="ms-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Expanded Airy 2x2 Image Grid */}
          <div className="col-lg-6 mt-4 mt-lg-0 ps-lg-4">
            
            <div className="d-flex align-items-center justify-content-between mb-3 px-1">
              <span className="text-uppercase font-weight-bold text-muted" style={{ letterSpacing: '1.2px', fontSize: '0.78rem' }}>
                Galerie de nos espaces
              </span>
              <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1.5 font-weight-bold" style={{ fontSize: '0.75rem' }}>
                Survolez ou cliquez une photo ✨
              </span>
            </div>

            <div className="row g-3 g-md-4">
              {galleryItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="col-6">
                    <div 
                      className="about-card-hover"
                      style={{ height: item.height }}
                      onClick={() => setSelectedImg(item)}
                    >
                      <img 
                        src={item.img} 
                        alt={item.title} 
                      />
                      
                      {/* Hover Overlay with Details */}
                      <div className="about-card-overlay">
                        <div className="about-card-caption">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <div className="rounded-circle p-1.5 bg-white text-dark d-flex align-items-center justify-content-center shadow-sm" style={{ width: '32px', height: '32px' }}>
                              <IconComp size={16} style={{ color: '#25854C' }} />
                            </div>
                            <span className="badge bg-warning text-dark font-weight-bold" style={{ fontSize: '0.7rem' }}>
                              {item.tag}
                            </span>
                          </div>
                          <h5 className="m-0 font-weight-bold text-white fs-5">{item.title}</h5>
                          <small className="text-white-50 d-block mt-1" style={{ fontSize: '0.78rem' }}>
                            {item.sub}
                          </small>
                        </div>
                      </div>

                      {/* Top-Right Quick Zoom Badge */}
                      <div className="position-absolute top-0 end-0 m-3 p-2 rounded-circle bg-dark bg-opacity-50 text-white d-flex align-items-center justify-content-center shadow" style={{ backdropFilter: 'blur(4px)', width: '34px', height: '34px' }}>
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Lightbox Preview Modal */}
      {selectedImg && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 2000, backdropFilter: 'blur(6px)' }}
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="position-relative bg-white rounded-4 overflow-hidden shadow-2xl"
            style={{ maxWidth: '700px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="position-absolute top-0 end-0 m-3 btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: '40px', height: '40px', zIndex: 10 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={22} />
            </button>

            <img 
              src={selectedImg.img} 
              alt={selectedImg.title}
              className="w-100" 
              style={{ maxHeight: '480px', objectFit: 'cover' }} 
            />

            <div className="p-4" style={{ backgroundColor: '#0E2E1D', color: '#FFFFFF' }}>
              <span className="badge bg-warning text-dark mb-2 font-weight-bold">{selectedImg.tag}</span>
              <h3 className="m-0 font-weight-bold text-white mb-1">{selectedImg.title}</h3>
              <p className="text-white-50 m-0 fs-6">{selectedImg.sub}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
