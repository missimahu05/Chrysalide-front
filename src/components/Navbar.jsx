import React, { useState } from 'react';
import { 
  Menu, X, Home, Info, BedDouble, Calendar, Sparkles, 
  HelpCircle, MapPin, Phone, MessageCircle, CalendarCheck, ChevronRight, UserCheck, ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  const adminDashboardUrl = import.meta.env.VITE_ADMIN_DASHBOARD_URL || 'https://admin-chrysalide.vercel.app';

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
    { label: 'À propos de nous', target: 'about', icon: Info, color: '#34D399', bg: 'rgba(52, 211, 153, 0.12)' },
    { label: 'Chambres (Ventilée & Climatisée)', target: 'rooms', icon: BedDouble, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Événements & Privatisation', target: 'events', icon: Calendar, color: '#E879F9', bg: 'rgba(232, 121, 249, 0.12)' },
    { label: 'Services & Lounge', target: 'services', icon: Sparkles, color: '#34D399', bg: 'rgba(52, 211, 153, 0.12)' },
    { label: 'Comment réserver ?', target: 'process', icon: Sparkles, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Avis Clients', target: 'testimonials', icon: MessageCircle, color: '#E879F9', bg: 'rgba(232, 121, 249, 0.12)' },
    { label: 'Questions Fréquentes', target: 'faq', icon: HelpCircle, color: '#CFA34C', bg: 'rgba(207, 163, 76, 0.12)' },
    { label: 'Localisation & Accès', target: 'contact-location', icon: MapPin, color: '#34D399', bg: 'rgba(52, 211, 153, 0.12)' },
  ];

  return (
    <>
      {/* Top Header Bar with Harmonized Light Luxury Palette */}
      <header className="container-fluid px-3 px-lg-4 sticky-top shadow-sm border-bottom border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#CFA34C', zIndex: 1050 }}>
        <div className="d-flex align-items-center justify-content-between py-2 py-md-3">
          
          {/* Left: Mobile-Only Hamburger Toggle + Brand Logo */}
          <div className="d-flex align-items-center">
            
            {/* Hamburger button: HIDDEN ON DESKTOP (d-lg-none), VISIBLE ON MOBILE */}
            <button 
              type="button" 
              className="btn btn-outline-dark me-3 d-flex d-lg-none align-items-center justify-content-center shadow-sm rounded-3"
              onClick={toggleDrawer}
              aria-label="Menu de navigation mobile"
              style={{ width: '42px', height: '42px', borderColor: '#CFA34C', backgroundColor: '#FAF8F5' }}
            >
              <Menu size={22} className="text-dark" />
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

          {/* Center (Desktop Inline Navigation Links) */}
          <nav className="d-none d-lg-flex align-items-center gap-3 gap-xl-4 font-weight-bold" style={{ fontSize: '0.88rem' }}>
            <a href="#hero" className="text-dark text-decoration-none hover-gold transition-all">Accueil</a>
            <a href="#about" className="text-secondary text-decoration-none hover-gold transition-all">À propos</a>
            <a href="#rooms" className="text-secondary text-decoration-none hover-gold transition-all">Chambres</a>
            <a href="#events" className="text-chrysalide-gold text-decoration-none hover-gold transition-all d-flex align-items-center">
              <span className="badge bg-warning text-dark me-1" style={{ fontSize: '0.65rem' }}>NEW</span>Événements
            </a>
            <a href="#services" className="text-secondary text-decoration-none hover-gold transition-all">Services</a>
            <a href="#process" className="text-secondary text-decoration-none hover-gold transition-all">Réservation</a>
            <a href="#contact-location" className="text-secondary text-decoration-none hover-gold transition-all">Contact</a>
            
            {/* Admin Dashboard Connection */}
            <a 
              href={adminDashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none px-2 py-1 rounded border d-flex align-items-center font-weight-bold"
              style={{ color: '#CFA34C', borderColor: 'rgba(207, 163, 76, 0.4)', fontSize: '0.8rem', backgroundColor: 'rgba(207, 163, 76, 0.08)' }}
            >
              <ShieldCheck size={14} className="me-1" />
              Espace Admin
            </a>
          </nav>

          {/* Right: Call & Booking CTA */}
          <div className="d-flex align-items-center">
            <a href="tel:+2290159188023" className="btn btn-sm btn-outline-dark me-2 me-md-3 d-none d-md-inline-flex align-items-center font-weight-bold rounded-3">
              <Phone size={14} className="me-2 text-chrysalide-gold" />+229 0159188023
            </a>
            <button 
              className="btn btn-warning py-2 px-3 px-md-4 text-uppercase font-weight-bold shadow-sm rounded-3 d-inline-flex align-items-center text-dark"
              onClick={onOpenBooking}
              style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C', fontSize: '0.85rem' }}
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
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1060, backdropFilter: 'blur(5px)' }}
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Mobile Side-Drawer Menu */}
      <aside 
        className="position-fixed top-0 start-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{ 
          width: '320px', 
          maxWidth: '85vw', 
          zIndex: 1070, 
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRight: '4px solid #CFA34C'
        }}
      >
        {/* Drawer Header */}
        <div className="p-4 border-bottom border-2 d-flex align-items-center justify-content-between text-white" style={{ backgroundColor: '#0E2E1D', borderColor: '#CFA34C' }}>
          <div className="d-flex align-items-center">
            <img src="/newfav.png" alt="Logo" style={{ height: '38px', marginRight: '10px' }} />
            <div>
              <h6 className="m-0 text-uppercase font-weight-bold" style={{ fontSize: '0.95rem' }}>
                <span style={{ color: '#34D399' }}>La Chrysalide</span> <span style={{ color: '#FBBF24' }}>Suite</span>
              </h6>
              <small className="text-white-50 text-uppercase font-weight-bold" style={{ fontSize: '0.62rem', letterSpacing: '1px' }}>
                Hôtel • Parakou
              </small>
            </div>
          </div>

          <button 
            type="button" 
            className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
            onClick={toggleDrawer}
            style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="p-3 flex-grow-1 overflow-y-auto">
          <p className="text-uppercase font-weight-bold text-muted px-2 mb-2" style={{ fontSize: '0.7rem', letterSpacing: '1.2px' }}>
            Menu Principal
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
                    <span style={{ fontSize: '0.9rem' }}>{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-muted drawer-arrow opacity-50" />
                </button>
              );
            })}

            {/* Admin Link inside mobile drawer */}
            <a 
              href={adminDashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="btn text-start text-dark font-weight-bold rounded-3 p-2 px-3 hover-drawer-item d-flex align-items-center justify-content-between border-0 mt-2"
              style={{ backgroundColor: 'rgba(207, 163, 76, 0.1)', border: '1px solid rgba(207, 163, 76, 0.3)' }}
            >
              <div className="d-flex align-items-center">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0" 
                  style={{ width: '36px', height: '36px', backgroundColor: '#0E2E1D' }}
                >
                  <ShieldCheck size={18} style={{ color: '#FBBF24' }} />
                </div>
                <span style={{ fontSize: '0.9rem', color: '#0E2E1D' }}>Dashboard Admin</span>
              </div>
              <ChevronRight size={16} className="text-muted drawer-arrow opacity-50" />
            </a>
          </div>

          <hr className="my-3 text-muted opacity-25" />

          {/* Contact Box */}
          <div className="bg-light p-3 rounded-3 border">
            <small className="text-muted text-uppercase font-weight-bold d-block mb-2" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
              Service Réception 24h/24
            </small>
            
            <a href="tel:+2290159188023" className="text-dark font-weight-bold text-decoration-none d-flex align-items-center mb-2 small">
              <Phone size={14} className="me-2 text-chrysalide-gold" />
              +229 0159188023
            </a>
            
            <a href="https://wa.me/2290159188023" target="_blank" rel="noreferrer" className="text-chrysalide-green font-weight-bold text-decoration-none d-flex align-items-center small">
              <MessageCircle size={14} className="me-2" />
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
