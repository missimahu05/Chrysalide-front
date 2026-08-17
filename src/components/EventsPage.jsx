import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Ticket, CheckCircle, ArrowLeft, 
  Sparkles, Phone, MessageSquare, Plus, Minus, AlertCircle, Share2
} from 'lucide-react';

const API = 'http://localhost:5000/api';

const getImgUrl = (url) => {
  if (!url) return '/photos/2026-08-05-09.49.05.jpeg';
  if (url.startsWith('/uploads/')) return `http://localhost:5000${url}`;
  return url;
};

export default function EventsPage({ onBackToHome }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'UPCOMING', 'PAST'
  
  // Selected event for ticket modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTicketCat, setSelectedTicketCat] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Ticket Pass confirmation state
  const [ticketPass, setTicketPass] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/events`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setEvents(data);
      }
    } catch (err) {
      console.error('Erreur chargement événements:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenTicketModal = (event) => {
    setSelectedEvent(event);
    const initialCat = event.ticketCategories && event.ticketCategories.length > 0
      ? event.ticketCategories[0]
      : { name: 'Pass Standard', price: 2000 };
    setSelectedTicketCat(initialCat);
    setQuantity(1);
    setErrorMessage('');
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setSelectedTicketCat(null);
    setQuantity(1);
    setFormData({ fullName: '', phone: '', email: '', notes: '' });
    setErrorMessage('');
  };

  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMessage('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const unitPrice = selectedTicketCat?.price || 0;
    const totalPrice = unitPrice * quantity;

    try {
      const res = await fetch(`${API}/bookings/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: selectedEvent.id || selectedEvent._id,
          eventTitle: selectedEvent.title,
          eventDate: selectedEvent.date,
          eventTime: selectedEvent.time || '20:00',
          ticketCategory: selectedTicketCat.name,
          ticketPrice: unitPrice,
          quantity,
          totalPrice,
          clientName: formData.fullName,
          clientPhone: formData.phone,
          clientEmail: formData.email,
          notes: formData.notes
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Erreur lors de la réservation de votre ticket.');
        setIsSubmitting(false);
        return;
      }

      setTicketPass(data.booking);
      handleCloseModal();
      fetchEvents(); // Refresh event ticket stock counts
    } catch (err) {
      setErrorMessage('Problème de connexion avec le serveur de billetterie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => (e.status || 'UPCOMING') === filter);

  return (
    <div className="bg-light min-vh-100 font-sans pb-5">
      
      {/* Top Navbar Header for Standalone Events Page */}
      <header className="bg-white sticky-top shadow-sm border-bottom border-3" style={{ borderColor: '#CFA34C', zIndex: 1040 }}>
        <div className="container px-3 px-md-4 py-2.5 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={onBackToHome} 
              className="btn btn-outline-dark btn-sm rounded-pill font-weight-bold d-flex align-items-center gap-1.5 px-3 py-1.5"
            >
              <ArrowLeft size={16} />
              <span>Accueil Site</span>
            </button>
            <div className="h-50 border-end d-none d-sm-block"></div>
            <div className="d-flex align-items-center">
              <img src="/newfav.png" alt="Logo" style={{ height: '34px', marginRight: '8px' }} />
              <div>
                <h6 className="m-0 font-weight-bold text-uppercase" style={{ fontSize: '0.95rem' }}>
                  <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Events</span>
                </h6>
                <small className="text-muted d-none d-sm-block" style={{ fontSize: '0.65rem' }}>Billetterie Officielle & Soirées</small>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <a 
              href="https://wa.me/2290159188023" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-sm btn-success rounded-pill font-weight-bold text-white d-inline-flex align-items-center px-3"
              style={{ backgroundColor: '#25854C' }}
            >
              <MessageSquare size={14} className="me-1.5" />
              <span className="d-none d-sm-inline">Info Billetterie</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="position-relative text-white py-5 px-3 px-md-5 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0E2E1D 0%, #2D0B36 100%)' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20" style={{ backgroundImage: 'radial-gradient(#CFA34C 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-warning text-dark font-weight-bold text-uppercase px-3 py-2 mb-3 rounded-pill shadow-sm" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                <Sparkles size={14} className="me-1.5" /> Espace Billetterie & Spectacles
              </span>
              <h1 className="display-5 font-weight-bold text-white mb-3">
                Événements Exclusifs & <span style={{ color: '#FBBF24' }}>Tickets Officiels</span>
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.05rem' }}>
                Réservez vos tickets en ligne pour les soirées lounge, dîners gastronomiques, concerts acoustic et événements privés organisés à <strong>La Chrysalide Suite</strong> Parakou.
              </p>

              <div className="d-flex flex-wrap gap-3 text-white-50 small">
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="me-1.5 text-success" />
                  <span>Pass Nominatif avec QR / Référence</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="me-1.5 text-success" />
                  <span>Confirmation directe sur WhatsApp</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="me-1.5 text-success" />
                  <span>Accès garanti à l'événement</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 p-4 rounded-4 backdrop-blur border border-white border-opacity-20 d-inline-block text-start" style={{ maxWidth: '320px' }}>
                <h6 className="text-warning text-uppercase font-weight-bold mb-2 small">Contact Billetterie</h6>
                <p className="text-white font-weight-bold m-0 fs-5">+229 0159188023</p>
                <small className="text-white-50 d-block mb-3">Quartier Nima, Parakou, Bénin</small>
                <a href="tel:+2290159188023" className="btn btn-sm btn-warning font-weight-bold w-100 text-uppercase rounded-3">
                  <Phone size={14} className="me-1" />Appeler pour Réserver
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Events Catalog */}
      <main className="container py-5">
        
        {/* Filter Tabs */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4 pb-2 border-bottom">
          <div>
            <h3 className="font-weight-bold text-dark m-0">Programme des Événements</h3>
            <p className="text-muted small m-0">Choisissez un événement et achetez vos tickets directement en ligne</p>
          </div>

          <div className="d-flex gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`btn btn-sm px-3 py-2 rounded-pill font-weight-bold ${filter === 'all' ? 'btn-dark text-white' : 'btn-outline-secondary'}`}
            >
              Tous les Événements
            </button>
            <button 
              onClick={() => setFilter('UPCOMING')}
              className={`btn btn-sm px-3 py-2 rounded-pill font-weight-bold ${filter === 'UPCOMING' ? 'btn-success text-white' : 'btn-outline-secondary'}`}
              style={filter === 'UPCOMING' ? { backgroundColor: '#25854C' } : {}}
            >
              À venir ({events.filter(e => (e.status || 'UPCOMING') === 'UPCOMING').length})
            </button>
            <button 
              onClick={() => setFilter('PAST')}
              className={`btn btn-sm px-3 py-2 rounded-pill font-weight-bold ${filter === 'PAST' ? 'btn-secondary text-white' : 'btn-outline-secondary'}`}
            >
              Passés
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success mb-3" role="status"></div>
            <p className="text-muted">Chargement du programme de billetterie...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="bg-white rounded-4 p-5 text-center shadow-sm border my-4">
            <Calendar size={48} className="text-muted mb-3 opacity-50" />
            <h5 className="text-dark font-weight-bold">Aucun événement dans cette catégorie pour le moment.</h5>
            <p className="text-muted small">Restez connectés ! L'administration ajoute régulièrement de nouvelles soirées et spectacles.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredEvents.map((evt) => {
              const minPrice = evt.ticketCategories && evt.ticketCategories.length > 0
                ? Math.min(...evt.ticketCategories.map(c => c.price))
                : 2000;

              return (
                <div key={evt.id || evt._id} className="col-lg-6 col-12">
                  <div className="card h-100 rounded-4 border-0 shadow-sm overflow-hidden bg-white hover-shadow transition-all position-relative">
                    
                    {/* Event Cover Photo */}
                    <div className="position-relative overflow-hidden" style={{ height: '270px' }}>
                      <img 
                        src={getImgUrl(evt.image)} 
                        alt={evt.title} 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        onError={(e) => { e.target.src = '/photos/2026-08-05-09.49.05.jpeg'; }}
                      />
                      
                      <div className="position-absolute top-0 start-0 m-3 d-flex gap-2" style={{ zIndex: 10 }}>
                        <span className="badge rounded-pill bg-dark text-white px-3 py-2 shadow-sm font-weight-bold text-uppercase" style={{ fontSize: '0.72rem' }}>
                          {evt.category || 'Événement'}
                        </span>
                        <span className="badge rounded-pill bg-warning text-dark px-3 py-2 shadow-sm font-weight-bold" style={{ fontSize: '0.72rem' }}>
                          <Ticket size={12} className="me-1" />Billetterie Ouverte
                        </span>
                      </div>

                      <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
                        <h4 className="fw-bold m-0 text-white fs-5">{evt.title}</h4>
                        {evt.subtitle && <small className="text-warning d-block">{evt.subtitle}</small>}
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                      <div>
                        {/* Event Date & Time & Venue */}
                        <div className="bg-light p-3 rounded-3 mb-3 border small">
                          <div className="d-flex align-items-center text-dark font-weight-bold mb-1">
                            <Calendar size={15} className="me-2 text-chrysalide-green flex-shrink-0" />
                            <span>{evt.date}</span>
                          </div>
                          <div className="d-flex align-items-center text-muted mb-1">
                            <Clock size={15} className="me-2 text-chrysalide-gold flex-shrink-0" />
                            <span>{evt.time || '20:00'}</span>
                          </div>
                          <div className="d-flex align-items-center text-muted">
                            <MapPin size={15} className="me-2 text-primary flex-shrink-0" />
                            <span className="text-truncate">{evt.location || 'La Chrysalide Suite, Parakou'}</span>
                          </div>
                        </div>

                        <p className="text-muted small mb-3 leading-relaxed" style={{ fontSize: '0.88rem' }}>
                          {evt.description}
                        </p>

                        {/* Ticket Categories Badges */}
                        <h6 className="font-weight-bold text-dark fs-6 mb-2">Pass & Tickets Disponibles :</h6>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {evt.ticketCategories && evt.ticketCategories.length > 0 ? (
                            evt.ticketCategories.map((cat, idx) => (
                              <span key={idx} className="badge bg-white text-dark border p-2 shadow-2xs font-weight-bold">
                                <Ticket size={12} className="me-1 text-chrysalide-green" />
                                {cat.name} : <strong className="text-success">{Number(cat.price).toLocaleString('fr-FR')} F</strong>
                              </span>
                            ))
                          ) : (
                            <span className="badge bg-white text-dark border p-2 font-weight-bold">
                              Pass Standard : 2 000 FCFA
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Action Button */}
                      <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-2">
                        <div>
                          <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>À partir de</small>
                          <span className="fs-5 font-weight-bold text-success" style={{ color: '#25854C' }}>
                            {minPrice.toLocaleString('fr-FR')} FCFA
                          </span>
                        </div>

                        <button 
                          onClick={() => handleOpenTicketModal(evt)}
                          className="btn btn-success px-4 py-2.5 font-weight-bold text-uppercase rounded-3 shadow-sm d-flex align-items-center gap-2 text-white"
                          style={{ backgroundColor: '#25854C', borderColor: '#25854C', fontSize: '0.85rem' }}
                        >
                          <Ticket size={16} />
                          <span>Acheter un Ticket</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </main>

      {/* Ticket Purchase Modal */}
      {selectedEvent && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10000 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
              
              {/* Modal Header */}
              <div className="modal-header text-white p-3 p-md-4 border-bottom border-3" style={{ backgroundColor: '#0E2E1D', borderColor: '#CFA34C' }}>
                <div>
                  <h5 className="modal-title font-weight-bold text-uppercase text-white fs-5 m-0 d-flex align-items-center gap-2">
                    <Ticket className="text-warning" size={20} />
                    <span>Achat de Ticket — {selectedEvent.title}</span>
                  </h5>
                  <small className="text-white-50">{selectedEvent.date} • {selectedEvent.time}</small>
                </div>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>

              {/* Modal Body / Form */}
              <div className="modal-body p-3 p-md-4 bg-white">
                
                {errorMessage && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <AlertCircle className="me-2 flex-shrink-0" size={18} />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <form onSubmit={handleTicketSubmit}>
                  
                  {/* Step 1: Choose Ticket Category */}
                  <div className="mb-4">
                    <label className="form-label font-weight-bold text-dark small text-uppercase">1. Choisissez le type de ticket :</label>
                    <div className="row g-2">
                      {selectedEvent.ticketCategories && selectedEvent.ticketCategories.length > 0 ? (
                        selectedEvent.ticketCategories.map((cat, idx) => {
                          const isSelected = selectedTicketCat?.name === cat.name;
                          return (
                            <div key={idx} className="col-md-4 col-12">
                              <div 
                                onClick={() => setSelectedTicketCat(cat)}
                                className={`p-3 rounded-3 border cursor-pointer transition-all ${
                                  isSelected ? 'border-success bg-success bg-opacity-10 shadow-sm' : 'bg-light hover-bg'
                                }`}
                                style={{ borderColor: isSelected ? '#25854C' : '#dee2e6' }}
                              >
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="font-weight-bold text-dark small">{cat.name}</span>
                                  {isSelected && <CheckCircle size={16} className="text-success" />}
                                </div>
                                <div className="fs-5 font-weight-bold text-success" style={{ color: '#25854C' }}>
                                  {Number(cat.price).toLocaleString('fr-FR')} FCFA
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="col-12 p-3 bg-light rounded border text-dark font-weight-bold">
                          Pass Standard — 2 000 FCFA
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step 2: Quantity Selector */}
                  <div className="mb-4 bg-light p-3 rounded-3 border d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="font-weight-bold text-dark m-0">Nombre de tickets :</h6>
                      <small className="text-muted">Sélectionnez la quantité désirée</small>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <button 
                        type="button" 
                        className="btn btn-outline-dark btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center"
                        style={{ width: '36px', height: '36px' }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus size={16} />
                      </button>

                      <span className="fs-4 font-weight-bold text-dark px-2">{quantity}</span>

                      <button 
                        type="button" 
                        className="btn btn-outline-dark btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center"
                        style={{ width: '36px', height: '36px' }}
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Step 3: Customer Details Form */}
                  <div className="mb-4">
                    <label className="form-label font-weight-bold text-dark small text-uppercase">2. Informations de l'acheteur (Titulaire des tickets) :</label>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small text-muted font-weight-bold">Nom & Prénom *</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg rounded-3 fs-6"
                          placeholder="Ex: Jean DOSSOU"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small text-muted font-weight-bold">Téléphone (WhatsApp de préférence) *</label>
                        <input 
                          type="tel" 
                          className="form-control form-control-lg rounded-3 fs-6"
                          placeholder="Ex: +229 97 00 00 00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label small text-muted font-weight-bold">Adresse Email (Facultatif)</label>
                        <input 
                          type="email" 
                          className="form-control form-control-lg rounded-3 fs-6"
                          placeholder="Ex: jean.dossou@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Total Summary & Submit */}
                  <div className="p-3 rounded-3 bg-dark text-white d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <small className="text-white-50 d-block">Montant Total à régler :</small>
                      <span className="fs-4 font-weight-bold text-warning">
                        {((selectedTicketCat?.price || 0) * quantity).toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-success btn-lg px-4 font-weight-bold text-uppercase rounded-3 shadow-sm"
                      style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}
                    >
                      {isSubmitting ? 'Validation...' : 'Confirmer mes Tickets'}
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ticket Pass Confirmation Modal */}
      {ticketPass && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 10500 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden text-center">
              
              {/* Ticket Top Header */}
              <div className="bg-success text-white p-4" style={{ backgroundColor: '#25854C' }}>
                <div className="rounded-circle bg-white text-success d-inline-flex align-items-center justify-content-center mb-2 shadow-sm" style={{ width: '60px', height: '60px' }}>
                  <CheckCircle size={32} />
                </div>
                <h4 className="fw-bold text-white m-0">Réservation de Ticket Reçue !</h4>
                <small className="text-white-50">Référence unique : <strong>{ticketPass.reference}</strong></small>
              </div>

              {/* Digital Ticket Pass Card */}
              <div className="p-4 bg-white">
                <div className="border border-2 border-dashed rounded-4 p-3 bg-light text-start mb-4">
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted small">Événement :</span>
                    <strong className="text-dark small text-end">{ticketPass.eventTitle}</strong>
                  </div>
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted small">Date & Heure :</span>
                    <strong className="text-dark small">{ticketPass.eventDate} à {ticketPass.eventTime}</strong>
                  </div>
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted small">Pass choisi :</span>
                    <strong className="text-success small">{ticketPass.ticketCategory} (x{ticketPass.quantity})</strong>
                  </div>
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted small">Titulaire :</span>
                    <strong className="text-dark small">{ticketPass.clientName} ({ticketPass.clientPhone})</strong>
                  </div>
                  <div className="d-flex justify-content-between pt-1">
                    <span className="text-muted small">Montant à régler :</span>
                    <strong className="text-warning fs-6">{Number(ticketPass.totalPrice).toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                </div>

                <p className="text-muted small mb-4">
                  Pour obtenir la validation instantanée de vos pass et les consignes d'accès, cliquez sur le bouton ci-dessous pour envoyer votre confirmation sur WhatsApp.
                </p>

                {/* WhatsApp Direct Action Button */}
                <a 
                  href={`https://wa.me/2290159188023?text=${encodeURIComponent(
                    `🎟️ *RÉSERVATION TICKET — LA CHRYSALIDE SUITE*\n\nBonjour, je viens de réserver mon/mes ticket(s) en ligne !\n\n🔖 Code Ticket : *${ticketPass.reference}*\n🎉 Événement : ${ticketPass.eventTitle}\n🎫 Type : ${ticketPass.ticketCategory} (x${ticketPass.quantity})\n📅 Date : ${ticketPass.eventDate}\n👤 Nom : ${ticketPass.clientName}\n📞 Téléphone : ${ticketPass.clientPhone}\n💰 Montant Total : ${Number(ticketPass.totalPrice).toLocaleString('fr-FR')} FCFA\n\nMerci de bien vouloir confirmer mon ticket !`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-lg font-weight-bold text-uppercase w-100 py-3 mb-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}
                >
                  <MessageSquare size={20} />
                  <span>Envoyer sur WhatsApp</span>
                </a>

                <button 
                  onClick={() => setTicketPass(null)}
                  className="btn btn-outline-secondary font-weight-bold w-100 py-2 rounded-3 mt-2 small"
                >
                  Fermer
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
