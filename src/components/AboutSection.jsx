import React, { useState } from 'react';
import { 
  BedDouble, Wine, ShieldCheck, Users, 
  ChevronRight, CalendarCheck, ZoomIn, X, Utensils
} from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const leftColumnImages = [
    {
      id: 1,
      img: '/photos/2026-08-05-09.49.05-1.jpeg',
      title: 'Chambres Climatisées',
      sub: 'Confort & Calme Absolu',
      tag: 'Hébergement',
      icon: BedDouble,
      height: '360px'
    },
    {
      id: 2,
      img: '/photos/2026-08-05-09.49.04.jpeg',
      title: 'Chambres Ventilées',
      sub: 'Espace & Fraîcheur',
      tag: 'Hébergement',
      icon: BedDouble,
      height: '240px'
    }
  ];

  const rightColumnImages = [
    {
      id: 3,
      img: '/img/gallery/chrysalide-real-3.jpeg',
      title: 'Bar Lounge VIP & Resto',
      sub: 'Ambiance feutrée, boissons & grillades',
      tag: 'Lounge 24/7',
      icon: Wine,
      height: '420px'
    },
    {
      id: 4,
      img: '/img/gallery/chrysalide-real-4.jpeg',
      title: 'Salons & Conciergerie',
      sub: 'Service attentionné & Sécurité 24h/24',
      tag: 'Service',
      icon: ShieldCheck,
      height: '220px'
    }
  ];

  return (
    <section className="w-100 min-vh-100 d-flex align-items-center py-5 position-relative bg-white" id="about">
      
      <div className="container py-2 py-md-4">
        
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* Left Column: Text & Features matching chrysalide-rosy */}
          <div className="col-lg-6">
            
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="text-uppercase font-weight-bold text-chrysalide-green" style={{ letterSpacing: '2.5px', fontSize: '0.85rem' }}>
                À PROPOS DE NOUS
              </span>
              <div style={{ width: '45px', height: '2px', backgroundColor: '#25854C' }}></div>
            </div>

            <h2 className="display-6 font-weight-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
              Bienvenue à <span style={{ color: '#25854C' }}>LA CHRYSALIDE SUITES</span>
            </h2>

            <p className="text-secondary leading-relaxed fs-6 mb-4">
              Bienvenue à <strong>La Chrysalide Suites</strong>, un établissement d'exception alliant confort, élégance et hospitalité au <strong>Quartier Nima à Parakou</strong>. Nous vous offrons un cadre paisible avec des chambres modernes, un service professionnel et une expérience unique pensée pour votre bien-être.
            </p>

            {/* 3 Green Outline Stat Cards matching chrysalide-rosy design */}
            <div className="row g-2 g-sm-3 mb-4">
              <div className="col-4">
                <div className="bg-white rounded-3 p-2 p-sm-3 text-center border shadow-sm h-100" style={{ borderColor: 'rgba(37, 133, 76, 0.3)' }}>
                  <div className="d-inline-flex p-1.5 p-sm-2 rounded-circle mb-1 mb-sm-2" style={{ backgroundColor: 'rgba(37, 133, 76, 0.1)' }}>
                    <BedDouble size={18} style={{ color: '#25854C' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-5 fs-sm-4">15+</h4>
                  <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Chambres</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-3 p-2 p-sm-3 text-center border shadow-sm h-100" style={{ borderColor: 'rgba(37, 133, 76, 0.3)' }}>
                  <div className="d-inline-flex p-1.5 p-sm-2 rounded-circle mb-1 mb-sm-2" style={{ backgroundColor: 'rgba(37, 133, 76, 0.1)' }}>
                    <Users size={18} style={{ color: '#25854C' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-5 fs-sm-4">24/7</h4>
                  <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Personnel</p>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-white rounded-3 p-2 p-sm-3 text-center border shadow-sm h-100" style={{ borderColor: 'rgba(37, 133, 76, 0.3)' }}>
                  <div className="d-inline-flex p-1.5 p-sm-2 rounded-circle mb-1 mb-sm-2" style={{ backgroundColor: 'rgba(37, 133, 76, 0.1)' }}>
                    <ShieldCheck size={18} style={{ color: '#25854C' }} />
                  </div>
                  <h4 className="mb-0 font-weight-bold text-dark fs-5 fs-sm-4">100%</h4>
                  <p className="mb-0 text-muted font-weight-medium text-uppercase" style={{ fontSize: '0.65rem' }}>Confort</p>
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-2">
              <button 
                onClick={onOpenBooking} 
                className="btn py-2.5 py-md-3 px-4 px-md-5 text-uppercase font-weight-bold shadow rounded-3 text-white border-0 w-100 w-sm-auto"
                style={{ backgroundColor: '#25854C', fontSize: '0.85rem' }}
              >
                EN SAVOIR PLUS & RÉSERVER
              </button>
            </div>

          </div>

          {/* Right Column: Asymmetrical Portrait Photo Mosaic Grid matching chrysalide-rosy */}
          <div className="col-lg-6 mt-4 mt-lg-0 ps-lg-4">
            
            <div className="about-mosaic-grid">
              
              {/* Column 1 (Left 2 Portrait Images) */}
              <div className="about-mosaic-col">
                {leftColumnImages.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={item.id} 
                      className="about-mosaic-card"
                      style={{ height: item.height }}
                      onClick={() => setSelectedImg(item)}
                    >
                      <img src={item.img} alt={item.title} />
                      
                      <div className="about-mosaic-overlay">
                        <div className="about-mosaic-caption">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <div className="rounded-circle p-1.5 bg-white text-dark d-flex align-items-center justify-content-center shadow-sm" style={{ width: '28px', height: '28px' }}>
                              <IconComp size={15} style={{ color: '#25854C' }} />
                            </div>
                            <span className="badge bg-warning text-dark font-weight-bold" style={{ fontSize: '0.68rem' }}>
                              {item.tag}
                            </span>
                          </div>
                          <h6 className="m-0 font-weight-bold text-white fs-6">{item.title}</h6>
                          <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>{item.sub}</small>
                        </div>
                      </div>

                      <div className="position-absolute top-0 end-0 m-3 p-2 rounded-circle bg-dark bg-opacity-50 text-white d-flex align-items-center justify-content-center shadow" style={{ backdropFilter: 'blur(4px)', width: '32px', height: '32px' }}>
                        <ZoomIn size={15} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 2 (Right 2 Portrait Images) */}
              <div className="about-mosaic-col">
                {rightColumnImages.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={item.id} 
                      className="about-mosaic-card"
                      style={{ height: item.height }}
                      onClick={() => setSelectedImg(item)}
                    >
                      <img src={item.img} alt={item.title} />
                      
                      <div className="about-mosaic-overlay">
                        <div className="about-mosaic-caption">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <div className="rounded-circle p-1.5 bg-white text-dark d-flex align-items-center justify-content-center shadow-sm" style={{ width: '28px', height: '28px' }}>
                              <IconComp size={15} style={{ color: '#25854C' }} />
                            </div>
                            <span className="badge bg-warning text-dark font-weight-bold" style={{ fontSize: '0.68rem' }}>
                              {item.tag}
                            </span>
                          </div>
                          <h6 className="m-0 font-weight-bold text-white fs-6">{item.title}</h6>
                          <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>{item.sub}</small>
                        </div>
                      </div>

                      <div className="position-absolute top-0 end-0 m-3 p-2 rounded-circle bg-dark bg-opacity-50 text-white d-flex align-items-center justify-content-center shadow" style={{ backdropFilter: 'blur(4px)', width: '32px', height: '32px' }}>
                        <ZoomIn size={15} />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Interactive Lightbox Modal */}
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
