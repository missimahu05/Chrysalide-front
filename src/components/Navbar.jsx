import React, { useState } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container-fluid bg-dark px-0 sticky-top shadow-sm">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-3 bg-dark d-none d-lg-block px-4">
          <a href="#hero" className="navbar-brand d-flex align-items-center m-0 py-2">
            <img 
              src="/logo.png" 
              alt="Logo La Chrysalide Suite" 
              style={{ height: '52px', width: 'auto', marginRight: '12px', objectFit: 'contain' }} 
            />
            <div>
              <h4 className="m-0 text-uppercase font-weight-bold" style={{ fontSize: '1.15rem', letterSpacing: '1px' }}>
                <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
              </h4>
              <small className="text-chrysalide-purple text-uppercase font-weight-bold" style={{ fontSize: '0.68rem', letterSpacing: '2px' }}>
                Hôtel & Résidences
              </small>
            </div>
          </a>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <a href="#hero" className="navbar-brand d-flex align-items-center d-lg-none">
              <img 
                src="/logo.png" 
                alt="Logo La Chrysalide Suite" 
                style={{ height: '42px', width: 'auto', marginRight: '10px' }} 
              />
              <h1 className="m-0 text-uppercase h5 font-weight-bold">
                <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
              </h1>
            </a>

            <button 
              type="button" 
              className="navbar-toggler" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0 ms-lg-4">
                <a href="#hero" className="nav-item nav-link active" onClick={() => setIsOpen(false)}>Accueil</a>
                <a href="#about" className="nav-item nav-link" onClick={() => setIsOpen(false)}>À propos</a>
                <a href="#services" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#rooms" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Chambres</a>
                <a href="#team" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Équipe</a>
                <a href="#contact" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Contact</a>
              </div>

              <div className="d-flex align-items-center pe-lg-4 my-2 my-lg-0">
                <a href="tel:+2290159188023" className="btn btn-sm btn-outline-light me-2 d-none d-xl-inline-block">
                  <i className="fa fa-phone-alt me-2 text-chrysalide-gold"></i>+229 0159188023
                </a>
                <button 
                  className="btn btn-primary rounded-0 py-2 px-md-4 text-uppercase font-weight-bold"
                  onClick={onOpenBooking}
                >
                  Réserver
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
