import React, { useState } from 'react';
import { 
  Menu, X, Home, Info, BedDouble, Calendar, Sparkles, 
  HelpCircle, MapPin, Phone, MessageCircle, CalendarCheck, ChevronDown, ChevronUp, ShieldCheck, Users, PlayCircle
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('hero');

  const adminDashboardUrl = import.meta.env.VITE_ADMIN_DASHBOARD_URL || 'https://admin-chrysalide.vercel.app';

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (targetId) => {
    setActiveItem(targetId);
    setIsOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Bar with Light Luxury Palette */}
      <header className="container-fluid px-3 px-lg-4 sticky-top shadow-sm border-bottom border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#CFA34C', zIndex: 1050 }}>
        <div className="d-flex align-items-center justify-content-between py-2 py-md-3">
          
          {/* Left: Mobile Toggle + Brand Logo */}
          <div className="d-flex align-items-center">
            <button 
              type="button" 
              className="btn me-3 d-flex d-lg-none align-items-center justify-content-center shadow-sm rounded-3 border-0"
              onClick={toggleDrawer}
              aria-label="Menu de navigation mobile"
              style={{ width: '42px', height: '42px', backgroundColor: '#25854C', color: '#FFFFFF' }}
            >
              <Menu size={22} />
            </button>

            {/* Brand Logo */}
            <a href="#hero" className="navbar-brand d-flex align-items-center m-0 text-decoration-none">
              <img 
                src="/newfav.png" 
                alt="Logo La Chrysalide Suite" 
                style={{ height: '42px', width: 'auto', marginRight: '10px', objectFit: 'contain' }} 
              />
              <div>
                <h5 className="m-0 text-uppercase font-weight-bold" style={{ fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                  <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
                </h5>
                <small className="text-chrysalide-purple text-uppercase font-weight-bold d-none d-sm-block" style={{ fontSize: '0.62rem', letterSpacing: '1.5px' }}>
                  Parakou • Hôtel & Résidences
                </small>
              </div>
            </a>
          </div>

          {/* Center (Desktop Inline Links with Lucide Icons) */}
          <nav className="d-none d-lg-flex align-items-center gap-3 gap-xl-4 font-weight-bold" style={{ fontSize: '0.88rem' }}>
            <a href="#hero" className="text-dark text-decoration-none hover-gold transition-all d-flex align-items-center">
              <Home size={15} className="me-1 text-chrysalide-gold" />Accueil
            </a>
            <a href="#about" className="text-secondary text-decoration-none hover-gold transition-all d-flex align-items-center">
              <Info size={15} className="me-1 text-chrysalide-green" />À propos
            </a>
            <a href="#rooms" className="text-secondary text-decoration-none hover-gold transition-all d-flex align-items-center">
              <BedDouble size={15} className="me-1 text-chrysalide-gold" />Chambres
            </a>
            <a href="#events" className="text-chrysalide-gold text-decoration-none hover-gold transition-all d-flex align-items-center">
              <span className="badge bg-warning text-dark me-1" style={{ fontSize: '0.65rem' }}>NEW</span>
              <Calendar size={15} className="me-1" />Événements
            </a>
            <a href="#services" className="text-secondary text-decoration-none hover-gold transition-all d-flex align-items-center">
              <Sparkles size={15} className="me-1 text-chrysalide-green" />Services
            </a>
            <a href="#process" className="text-secondary text-decoration-none hover-gold transition-all d-flex align-items-center">
              <CalendarCheck size={15} className="me-1 text-chrysalide-gold" />Réservation
            </a>
            <a href="#contact-location" className="text-secondary text-decoration-none hover-gold transition-all d-flex align-items-center">
              <MapPin size={15} className="me-1 text-chrysalide-green" />Contact
            </a>
            
            <a 
              href={adminDashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none px-2 py-1 rounded border d-flex align-items-center font-weight-bold"
              style={{ color: '#CFA34C', borderColor: 'rgba(207, 163, 76, 0.4)', fontSize: '0.8rem', backgroundColor: 'rgba(207, 163, 76, 0.08)' }}
            >
              <ShieldCheck size={14} className="me-1" />
              Admin
            </a>
          </nav>

          {/* Right: Phone & Booking */}
          <div className="d-flex align-items-center">
            <a href="tel:+2290159188023" className="btn btn-sm btn-outline-dark me-2 me-md-3 d-none d-md-inline-flex align-items-center font-weight-bold rounded-3">
              <Phone size={14} className="me-2 text-chrysalide-gold" />+229 0159188023
            </a>
            <button 
              className="btn py-2 px-3 px-md-4 text-uppercase font-weight-bold shadow-sm rounded-3 d-inline-flex align-items-center text-white border-0"
              onClick={onOpenBooking}
              style={{ backgroundColor: '#25854C', fontSize: '0.85rem' }}
            >
              <CalendarCheck size={16} className="me-2" />Réserver
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1060, backdropFilter: 'blur(3px)' }}
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Mobile Side-Drawer Menu matching BUSOLA style screenshot */}
      <aside 
        className="position-fixed top-0 start-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{ 
          width: '320px', 
          maxWidth: '85vw', 
          zIndex: 1070, 
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
          transition: 'transform 0.35s ease-in-out'
        }}
      >
        {/* Drawer Header (Green Header Bar with Close Button) */}
        <div className="p-3 px-4 d-flex align-items-center justify-content-between text-white" style={{ backgroundColor: '#25854C' }}>
          <div className="d-flex align-items-center">
            <img src="/newfav.png" alt="Logo" style={{ height: '36px', marginRight: '10px', filter: 'brightness(0) invert(1)' }} />
            <h6 className="m-0 text-uppercase font-weight-bold text-white" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
              LA CHRYSALIDE SUITE
            </h6>
          </div>

          <button 
            type="button" 
            className="btn text-white rounded-3 d-flex align-items-center justify-content-center p-1 border-0"
            onClick={toggleDrawer}
            style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Navigation List matching BUSOLA layout */}
        <div className="flex-grow-1 overflow-y-auto p-0">
          <ul className="list-group list-group-flush w-100 m-0 p-0 border-0">
            
            {/* Accueil */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('hero')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'hero' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'hero' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Accueil</span>
              </button>
            </li>

            {/* À propos Accordion Dropdown */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold text-dark d-flex align-items-center justify-content-between"
                style={{ fontSize: '0.98rem' }}
              >
                <span>À propos</span>
                {aboutOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {aboutOpen && (
                <div className="bg-light border-top border-bottom">
                  <button 
                    onClick={() => handleNavClick('about')}
                    className="w-100 text-start py-2.5 ps-5 pe-4 btn rounded-0 border-0 text-secondary small d-block border-bottom"
                    style={{ fontSize: '0.9rem' }}
                  >
                    À propos de nous
                  </button>
                  <button 
                    onClick={() => handleNavClick('team')}
                    className="w-100 text-start py-2.5 ps-5 pe-4 btn rounded-0 border-0 text-secondary small d-block border-bottom"
                    style={{ fontSize: '0.9rem' }}
                  >
                    La Team
                  </button>
                  <button 
                    onClick={() => handleNavClick('video-presentation')}
                    className="w-100 text-start py-2.5 ps-5 pe-4 btn rounded-0 border-0 text-secondary small d-block border-bottom"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Immersion Vidéo
                  </button>
                  <button 
                    onClick={() => handleNavClick('faq')}
                    className="w-100 text-start py-2.5 ps-5 pe-4 btn rounded-0 border-0 text-secondary small d-block"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Centre de ressources (FAQ)
                  </button>
                </div>
              )}
            </li>

            {/* Chambres */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('rooms')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'rooms' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'rooms' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Chambres Ventilées & Climatisées</span>
              </button>
            </li>

            {/* Événements & Privatisation */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('events')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'events' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'events' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Événements & Privatisation</span>
                <span className="badge bg-warning text-dark small" style={{ fontSize: '0.65rem' }}>NEW</span>
              </button>
            </li>

            {/* Nos services */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('services')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'services' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'services' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Nos services & prestations</span>
              </button>
            </li>

            {/* Comment réserver ? */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('process')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'process' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'process' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Comment réserver ?</span>
              </button>
            </li>

            {/* Contact & Accès */}
            <li className="list-group-item p-0 border-bottom">
              <button 
                onClick={() => handleNavClick('contact-location')}
                className={`w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold d-flex align-items-center justify-content-between ${activeItem === 'contact-location' ? 'bg-light text-chrysalide-green border-start border-4' : 'text-dark'}`}
                style={{ borderColor: activeItem === 'contact-location' ? '#25854C' : 'transparent', fontSize: '0.98rem' }}
              >
                <span>Contact & Localisation</span>
              </button>
            </li>

            {/* Dashboard Admin */}
            <li className="list-group-item p-0 border-bottom">
              <a 
                href={adminDashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="w-100 text-start py-3 px-4 btn rounded-0 border-0 font-weight-bold text-chrysalide-gold d-flex align-items-center justify-content-between text-decoration-none"
                style={{ fontSize: '0.98rem' }}
              >
                <span>Dashboard Admin</span>
                <ShieldCheck size={18} />
              </a>
            </li>

          </ul>
        </div>

        {/* Drawer Bottom CTA Button matching BUSOLA bottom button */}
        <div className="p-4 bg-white border-top">
          <button 
            className="btn text-white font-weight-bold text-uppercase w-100 py-3 px-4 shadow-sm rounded-pill d-flex align-items-center justify-content-center position-relative"
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C', fontSize: '0.95rem', letterSpacing: '0.5px' }}
          >
            Réserver un séjour
            <div 
              className="position-absolute end-0 me-1 rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ width: '38px', height: '38px', backgroundColor: '#25854C' }}
            >
              <CalendarCheck size={18} />
            </div>
          </button>
        </div>

      </aside>
    </>
  );
}
