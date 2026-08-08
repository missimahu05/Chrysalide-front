import React, { useState } from 'react';
import { 
  Menu, X, Home, Info, BedDouble, Video, Wine, Sparkles, 
  HelpCircle, MapPin, Phone, MessageCircle, CalendarCheck, ChevronRight 
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (targetId) => {
    setIsOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Accueil', target: 'hero', icon: Home, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'À propos de nous', target: 'about', icon: Info, color: '#25854C', bg: 'rgba(37, 133, 76, 0.12)' },
    { label: 'Chambres & Suites', target: 'rooms', icon: BedDouble, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Présentation Vidéo', target: 'video-presentation', icon: Video, color: '#7A288A', bg: 'rgba(122, 40, 138, 0.12)' },
    { label: 'Services & Prestations', target: 'services', icon: Wine, color: '#25854C', bg: 'rgba(37, 133, 76, 0.12)' },
    { label: 'Comment réserver ?', target: 'process', icon: Sparkles, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Avis Clients', target: 'testimonials', icon: MessageCircle, color: '#7A288A', bg: 'rgba(122, 40, 138, 0.12)' },
    { label: 'Questions Fréquentes', target: 'faq', icon: HelpCircle, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Localisation & Carte', target: 'contact-location', icon: MapPin, color: '#25854C', bg: 'rgba(37, 133, 76, 0.12)' },
  ];

  return (
    <>
      {/* Top Navbar Header */}
      <header className="container-fluid px-3 px-lg-4 sticky-top shadow-sm border-bottom border-2" style={{ backgroundColor: '#F5F5F0', borderColor: '#CFA34C', zIndex: 1050 }}>
        <div className="d-flex align-items-center justify-content-between py-2">
          
          {/* Left: Hamburger Toggle Button + Logo */}
          <div className="d-flex align-items-center">
            <button 
              type="button" 
              className="btn btn-light border border-2 me-3 d-flex align-items-center justify-content-center shadow-sm rounded-3"
              onClick={toggleDrawer}
              aria-label="Menu de navigation"
              style={{ width: '44px', height: '44px', borderColor: '#CFA34C', backgroundColor: '#FFFFFF' }}
            >
              <Menu size={22} className="text-dark" />
            </button>

            <a href="#hero" className="navbar-brand d-flex align-items-center m-0 text-decoration-none">
              <img 
                src="/newfav.png" 
                alt="Logo La Chrysalide Suite" 
                style={{ height: '44px', width: 'auto', marginRight: '10px', objectFit: 'contain' }} 
              />
              <div>
                <h5 className="m-0 text-uppercase font-weight-bold" style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                  <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
                </h5>
                <small className="text-chrysalide-purple text-uppercase font-weight-bold d-none d-sm-block" style={{ fontSize: '0.65rem', letterSpacing: '1.5px' }}>
                  Hôtel & Résidences
                </small>
              </div>
            </a>
          </div>

          {/* Center (Desktop Quick Links) */}
          <div className="d-none d-xl-flex align-items-center gap-4 font-weight-bold" style={{ fontSize: '0.9rem' }}>
            <a href="#hero" className="text-dark text-decoration-none hover-gold transition-all">Accueil</a>
            <a href="#about" className="text-dark text-decoration-none hover-gold transition-all">À propos</a>
            <a href="#rooms" className="text-dark text-decoration-none hover-gold transition-all">Chambres</a>
            <a href="#services" className="text-dark text-decoration-none hover-gold transition-all">Services</a>
            <a href="#contact-location" className="text-dark text-decoration-none hover-gold transition-all">Localisation</a>
          </div>

          {/* Right: Phone & Booking CTA */}
          <div className="d-flex align-items-center">
            <a href="tel:+2290159188023" className="btn btn-sm btn-outline-dark me-2 me-md-3 d-none d-md-inline-flex align-items-center font-weight-bold rounded-3">
              <Phone size={15} className="me-2 text-chrysalide-gold" />+229 0159188023
            </a>
            <button 
              className="btn btn-primary py-2 px-3 px-md-4 text-uppercase font-weight-bold shadow-sm rounded-3 d-inline-flex align-items-center"
              onClick={onOpenBooking}
              style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C', fontSize: '0.85rem' }}
            >
              <CalendarCheck size={16} className="me-2" />Réserver
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop Overlay when Drawer is Open */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: 1060, backdropFilter: 'blur(4px)' }}
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Ultra-Modern Left Side-Drawer Navigation */}
      <aside 
        className="position-fixed top-0 start-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{ 
          width: '320px', 
          maxWidth: '85vw', 
          zIndex: 1070, 
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRight: '3px solid #CFA34C'
        }}
      >
        {/* Drawer Header */}
        <div className="p-4 border-bottom border-2 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#2D0B36', borderColor: '#CFA34C' }}>
          <div className="d-flex align-items-center">
            <img src="/newfav.png" alt="Logo" style={{ height: '40px', marginRight: '12px' }} />
            <div>
              <h6 className="m-0 text-uppercase font-weight-bold text-white" style={{ fontSize: '0.98rem' }}>
                <span style={{ color: '#34D399' }}>La Chrysalide</span> <span style={{ color: '#FBBF24' }}>Suite</span>
              </h6>
              <small className="text-white-50 text-uppercase font-weight-bold" style={{ fontSize: '0.62rem', letterSpacing: '1px' }}>
                Hôtel • Parakou (Nima)
              </small>
            </div>
          </div>

          <button 
            type="button" 
            className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
            onClick={toggleDrawer}
            style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body Items */}
        <div className="p-3 flex-grow-1 overflow-y-auto">
          <p className="text-uppercase font-weight-bold text-muted px-2 mb-2" style={{ fontSize: '0.72rem', letterSpacing: '1.2px' }}>
            Navigation Globale
          </p>

          <div className="d-flex flex-column gap-1">
            {menuItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.target)}
                  className="btn text-start text-dark font-weight-bold rounded-3 p-2 px-3 hover-drawer-item d-flex align-items-center justify-content-between border-0"
                  style={{ transition: 'all 0.2s ease', backgroundColor: 'transparent' }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0" 
                      style={{ width: '36px', height: '36px', backgroundColor: item.bg }}
                    >
                      <IconComp size={18} style={{ color: item.color }} />
                    </div>
                    <span style={{ fontSize: '0.92rem' }}>{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-muted drawer-arrow opacity-50" />
                </button>
              );
            })}
          </div>

          <hr className="my-3 text-muted opacity-25" />

          {/* Direct Contact Info Card */}
          <div className="bg-light p-3 rounded-3 border border-light">
            <small className="text-muted text-uppercase font-weight-bold d-block mb-2" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
              Service Réception 24h/24
            </small>
            
            <a href="tel:+2290159188023" className="text-dark font-weight-bold text-decoration-none d-flex align-items-center mb-2 small">
              <Phone size={15} className="me-2 text-chrysalide-gold" />
              +229 0159188023
            </a>
            
            <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="text-chrysalide-green font-weight-bold text-decoration-none d-flex align-items-center small">
              <MessageCircle size={15} className="me-2" />
              WhatsApp Direct 24/7
            </a>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-3 border-top bg-light">
          <button 
            className="btn btn-success text-white font-weight-bold text-uppercase w-100 py-2 px-3 shadow-sm rounded-3 d-flex align-items-center justify-content-center"
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            style={{ backgroundColor: '#25854C', borderColor: '#25854C', fontSize: '0.88rem' }}
          >
            <CalendarCheck size={18} className="me-2" />
            Réserver un séjour
          </button>
        </div>

      </aside>
    </>
  );
}
