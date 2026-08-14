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
    <section className="container-xxl min-vh-100 d-flex align-items-center py-5 bg-white" id="video-presentation">
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
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center p-2"
                style={{ background: 'rgba(0, 0, 0, 0.45)', cursor: 'pointer', zIndex: 5 }}
                onClick={togglePlay}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                  style={{ width: 'clamp(55px, 12vw, 85px)', height: 'clamp(55px, 12vw, 85px)', backgroundColor: '#CFA34C', color: '#FFF', transition: 'transform 0.3s ease' }}
                >
                  <i className="fa fa-play fa-lg fa-md-2x ms-1"></i>
                </div>
                <h5 className="text-white mt-2 mt-md-3 font-weight-bold text-uppercase text-center fs-6 fs-md-5" style={{ letterSpacing: '1px', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                  Lancer la Présentation Vidéo
                </h5>
              </div>
            )}
          </div>
        </div>

        {/* Features banner below video */}
        <div className="row g-2 g-md-4 mt-3 mt-md-4 text-center">
          <div className="col-md-3 col-6">
            <div className="p-2 p-sm-3 bg-light rounded shadow-sm border border-light h-100">
              <i className="fa fa-cocktail text-chrysalide-gold fa-lg fa-md-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark fs-6" style={{ fontSize: '0.88rem' }}>Bar Lounge</h6>
              <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Ambiance chic & raffinée</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-2 p-sm-3 bg-light rounded shadow-sm border border-light h-100">
              <i className="fa fa-wine-bottle text-chrysalide-purple fa-lg fa-md-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark fs-6" style={{ fontSize: '0.88rem' }}>Cave à Vin</h6>
              <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Grands crus & dégustations</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-2 p-sm-3 bg-light rounded shadow-sm border border-light h-100">
              <i className="fa fa-utensils text-chrysalide-green fa-lg fa-md-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark fs-6" style={{ fontSize: '0.88rem' }}>Restauration</h6>
              <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Plats gourmands sur place</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="p-2 p-sm-3 bg-light rounded shadow-sm border border-light h-100">
              <i className="fa fa-hotel text-chrysalide-gold fa-lg fa-md-2x mb-2"></i>
              <h6 className="fw-bold mb-1 text-dark fs-6" style={{ fontSize: '0.88rem' }}>Chambres & Suites</h6>
              <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Sécurité & Confort 24h/24</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
