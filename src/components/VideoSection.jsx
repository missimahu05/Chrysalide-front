import React, { useRef, useState } from 'react';

export default function VideoSection({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="container-xxl py-5 my-4 bg-white" id="video-presentation">
      <div className="container">
        <div className="text-center mb-4">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Immersion Vidéo
          </h6>
          <h1 className="text-dark font-weight-bold mb-3">
            Découvrez <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span> en Action
          </h1>
          <p className="text-muted leading-relaxed" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Plongez dans l'ambiance chaleureuse de notre complexe à Parakou (Quartier Nima) : Bar Lounge, Cave à Vin, Espace Chicha, Restauration et Chambres VIP.
          </p>
        </div>

        {/* Large Inline Video Player */}
        <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-3" style={{ borderColor: '#CFA34C', backgroundColor: '#000' }}>
          <div className="ratio ratio-16x9 position-relative">
            <video 
              ref={videoRef}
              className="w-100 h-100 object-fit-cover" 
              controls
              playsInline
              poster="/img/hero/1.jpeg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/img/videos/VideoChrysalide.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo HTML5.
            </video>

            {/* Custom Overlay Play Button if not playing */}
            {!isPlaying && (
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                style={{ background: 'rgba(0, 0, 0, 0.45)', cursor: 'pointer', zIndex: 5 }}
                onClick={togglePlay}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                  style={{ width: '85px', height: '85px', backgroundColor: '#CFA34C', color: '#FFF', transition: 'transform 0.3s ease' }}
                >
                  <i className="fa fa-play fa-2x ms-1"></i>
                </div>
                <h5 className="text-white mt-3 font-weight-bold text-uppercase" style={{ letterSpacing: '1px', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                  Lancer la Présentation Vidéo
                </h5>
              </div>
            )}
          </div>
        </div>

        {/* Features banner below video */}
        <div className="row g-4 mt-4 text-center">
          <div className="col-md-3 col-6">
            <div className="p-3 bg-light rounded shadow-sm border border-light">
              <i className="fa fa-cocktail text-chrysalide-gold fa-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark">Bar Lounge & Cocktails</h6>
              <small className="text-muted">Ambiance chic et raffinée</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-3 bg-light rounded shadow-sm border border-light">
              <i className="fa fa-wine-bottle text-chrysalide-purple fa-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark">Cave à Vin</h6>
              <small className="text-muted">Sélection de grand crus</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-3 bg-light rounded shadow-sm border border-light">
              <i className="fa fa-utensils text-chrysalide-green fa-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark">Restauration</h6>
              <small className="text-muted">Plats gourmands sur place</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-3 bg-light rounded shadow-sm border border-light">
              <i className="fa fa-hotel text-chrysalide-gold fa-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark">Chambres & Suites</h6>
              <small className="text-muted">Sécurité & Confort 24h/24</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
