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
      height: '180px'
    },
    {
      id: 2,
      img: '/img/gallery/chrysalide-real-2.jpeg',
      title: 'Cuisine Raffinée',
      sub: 'Plats cuisinés avec soin par nos chefs',
      tag: 'Saveurs',
      icon: Utensils,
      height: '180px'
    },
    {
      id: 3,
      img: '/img/gallery/chrysalide-real-3.jpeg',
      title: 'Bar Lounge & VIP',
      sub: 'Ambiance feutrée, vins & cocktails',
      tag: 'Détente 24/7',
      icon: Wine,
      height: '160px'
    },
    {
      id: 4,
      img: '/img/gallery/chrysalide-real-4.jpeg',
      title: 'Chambres & Suites',
      sub: 'Ventilées et Climatisées haut de gamme',
      tag: 'Confort',
      icon: BedDouble,
      height: '160px'
    }
  ];

  return (
    <section className="container-xxl min-vh-lg-100 d-flex align-items-center py-5 position-relative" id="about" style={{ backgroundColor: '#FAF8F5' }}>
      
      {/* Top Banner Stats Counter */}
      <div className="container position-relative z-index-1">
        
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* Left Column: Text & Features */}
          <div className="col-lg-6">
            
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3 border shadow-sm" style={{ backgroundColor: '#FFFFFF', borderColor: '#CFA34C' }}>
              <Award size={16} style={{ color: '#CFA34C' }} />
              <span className="text-uppercase font-weight-bold" style={{ fontSize: '0.75rem', color: '#25854C', letterSpacing: '1px' }}>
                Complexe Hôtelier d'Exception à Parakou
              </span>
            </div>

            <h2 className="mb-3 font-weight-bold display-6 text-dark">
              Bienvenue à <span style={{ color: '#25854C' }}>La Chrysalide</span> <span style={{ color: '#CFA34C' }}>Suite</span>
            </h2>

            <p className="mb-3 text-secondary leading-relaxed fs-6">
              Idéalement situé au <strong>Quartier Nima à Parakou</strong>, <strong>La Chrysalide Suite</strong> associe élégance, tranquillité et confort moderne pour offrir un séjour inoubliable à chaque visiteur.
            </p>

            <p className="mb-4 text-secondary leading-relaxed fs-6">
              Profitez de nos <strong>chambres ventilées et climatisées</strong>, de notre <strong>Bar Lounge VIP</strong>, de notre <strong>Cave à Vin d'exception</strong>, de notre service de <strong>Restauration gourmande</strong> et de nos espaces de détente conçus pour votre bien-être.
            </p>

            {/* 3 Metric Cards */}
            <div className="row g-3 pb-4">
              <div className="col-4">
                <div className="bg-white rounded-3 p-3 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #25854C' }}>
                  <div className="d-inline-flex p-2 rounded-circle mb-2" style={{ backgroundColor: 'rgba(37, 133, 76, 0.1)' }}>
                    <BedDouble size={20} style={{ color: '#25854C' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-4">2 Types</h4>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.68rem' }}>Ventilée & Climatisée</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-3 p-3 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #CFA34C' }}>
                  <div className="d-inline-flex p-2 rounded-circle mb-2" style={{ backgroundColor: 'rgba(207, 163, 76, 0.12)' }}>
                    <Wine size={20} style={{ color: '#CFA34C' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-4">VIP</h4>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.68rem' }}>Lounge & Resto</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-3 p-3 text-center border h-100 shadow-sm transition-all hover-lift" style={{ borderTop: '4px solid #7A288A' }}>
                  <div className="d-inline-flex p-2 rounded-circle mb-2" style={{ backgroundColor: 'rgba(122, 40, 138, 0.1)' }}>
                    <ShieldCheck size={20} style={{ color: '#7A288A' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-4">24h/24</h4>
                  <p className="mb-0 text-muted text-uppercase font-weight-medium" style={{ fontSize: '0.68rem' }}>Sécurité Garantie</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button 
                onClick={onOpenBooking} 
                className="btn py-3 px-4 text-uppercase font-weight-bold shadow rounded-3 d-inline-flex align-items-center justify-content-center text-white border-0"
                style={{ backgroundColor: '#25854C' }}
              >
                <CalendarCheck size={18} className="me-2" />
                Réserver votre séjour
              </button>

              <a 
                href="#rooms" 
                className="btn btn-outline-dark py-3 px-4 text-uppercase font-weight-bold rounded-3 text-center d-inline-flex align-items-center justify-content-center"
              >
                Découvrir nos offres
                <ChevronRight size={18} className="ms-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Hover 2x2 Image Grid */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            
            <div className="p-2 p-md-3 bg-white rounded-4 shadow-sm border">
              
              <div className="d-flex align-items-center justify-content-between mb-3 px-2">
                <small className="text-uppercase font-weight-bold text-muted" style={{ letterSpacing: '1px', fontSize: '0.72rem' }}>
                  Aperçu de notre cadre en images
                </small>
                <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1" style={{ fontSize: '0.7rem' }}>
                  Survolez une photo ✨
                </span>
              </div>

              <div className="row g-2 g-md-3">
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
                        
                        {/* Hover Overlay with Zoom Icon and Details */}
                        <div className="about-card-overlay">
                          <div className="about-card-caption">
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <div className="rounded-circle p-1.5 bg-white text-dark d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                                <IconComp size={15} style={{ color: '#25854C' }} />
                              </div>
                              <span className="badge bg-warning text-dark font-weight-bold" style={{ fontSize: '0.65rem' }}>
                                {item.tag}
                              </span>
                            </div>
                            <h6 className="m-0 font-weight-bold text-white fs-6">{item.title}</h6>
                            <small className="text-white-50 d-block" style={{ fontSize: '0.72rem' }}>
                              {item.sub}
                            </small>
                          </div>
                        </div>

                        {/* Top-Right Quick Zoom Badge */}
                        <div className="position-absolute top-0 end-0 m-2 p-1.5 rounded-circle bg-dark bg-opacity-50 text-white d-flex align-items-center justify-content-center" style={{ backdropFilter: 'blur(4px)', width: '28px', height: '28px' }}>
                          <ZoomIn size={14} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

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
            style={{ maxWidth: '650px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="position-absolute top-0 end-0 m-3 btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: '36px', height: '36px', zIndex: 10 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </button>

            <img 
              src={selectedImg.img} 
              alt={selectedImg.title}
              className="w-100" 
              style={{ maxHeight: '420px', objectFit: 'cover' }} 
            />

            <div className="p-4" style={{ backgroundColor: '#0E2E1D', color: '#FFFFFF' }}>
              <span className="badge bg-warning text-dark mb-2 font-weight-bold">{selectedImg.tag}</span>
              <h4 className="m-0 font-weight-bold text-white mb-1">{selectedImg.title}</h4>
              <p className="text-white-50 m-0 small">{selectedImg.sub}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
