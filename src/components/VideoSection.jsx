import React, { useState } from 'react';

export default function VideoSection({ onOpenBooking }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="container-fluid py-5 px-0 my-5 min-vh-100 d-flex align-items-center">
        <div className="row g-0 w-100">
          <div className="col-md-6 bg-dark d-flex align-items-center p-5">
            <div className="p-lg-4">
              <h6 className="section-title text-start text-chrysalide-gold text-uppercase mb-3 font-weight-bold">
                Cadre VIP & Expérience Unique
              </h6>
              <h1 className="text-white mb-4 font-weight-bold">
                Découvrez <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span> en vidéo
              </h1>
              <p className="text-white-50 mb-3 leading-relaxed">
                Situé au quartier Nima à Parakou, <strong><span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></strong> regroupe des chambres ventilées et climatisées, des suites VIP, un Bar Lounge chaleureux, une Cave à Vin sélectionnée et un espace Chicha & Restauration raffiné.
              </p>
              <div className="row g-2 mb-4 text-white-50">
                <div className="col-6"><i className="fa fa-cocktail text-chrysalide-gold me-2"></i>Cocktails & Cave à Vin</div>
                <div className="col-6"><i className="fa fa-utensils text-chrysalide-green me-2"></i>Plats Gourmands</div>
                <div className="col-6"><i className="fa fa-smoking text-chrysalide-purple me-2"></i>Espace Chicha</div>
                <div className="col-6"><i className="fa fa-shield-alt text-chrysalide-gold me-2"></i>Sécurité 24h/24</div>
              </div>
              <div className="d-flex gap-3">
                <a href="#rooms" className="btn btn-primary py-md-3 px-md-5 text-uppercase font-weight-bold shadow">
                  Nos Chambres
                </a>
                <button onClick={onOpenBooking} className="btn btn-light py-md-3 px-md-5 text-uppercase font-weight-bold shadow">
                  Réserver maintenant
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 position-relative">
            <div 
              className="video d-flex align-items-center justify-content-center"
              style={{
                minHeight: '500px',
                backgroundImage: 'linear-gradient(rgba(15, 23, 43, 0.4), rgba(15, 23, 43, 0.4)), url("/img/hero/1.jpeg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <button 
                type="button" 
                className="btn-play" 
                onClick={() => setShowVideoModal(true)}
                title="Regarder la vidéo officielle"
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showVideoModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark border-0 shadow-lg">
              <div className="modal-header border-bottom border-secondary text-white p-4">
                <h5 className="modal-title font-weight-bold">
                  Présentation Vidéo — <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowVideoModal(false)}></button>
              </div>
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9">
                  <video controls autoPlay className="w-100 h-100">
                    <source src="/img/videos/VideoChrysalide.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéo HTML5.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
