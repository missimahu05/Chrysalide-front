import React, { useState, useEffect } from 'react';

const API = 'http://localhost:5000/api';

export default function BookingModal({ isOpen, onClose, selectedRoom, searchParams }) {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: searchParams?.checkIn || '',
    checkOut: searchParams?.checkOut || '',
    roomId: selectedRoom?.id || '',
    roomType: selectedRoom?.name || '',
    roomPrice: selectedRoom?.price || 25000,
    guests: searchParams?.guests || '2',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    fetch(`${API}/rooms`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setRooms(data); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      setFormData(prev => ({ ...prev, roomId: selectedRoom.id, roomType: selectedRoom.name, roomPrice: selectedRoom.price }));
    }
  }, [selectedRoom]);

  if (!isOpen) return null;

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 1;
    const diff = new Date(formData.checkOut) - new Date(formData.checkIn);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const nights = calculateNights();
  const totalPrice = nights * (formData.roomPrice || 25000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${API}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: formData.roomId,
          roomName: formData.roomType,
          roomPrice: formData.roomPrice,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          nights,
          guests: formData.guests,
          totalPrice,
          clientName: formData.fullName,
          clientEmail: formData.email,
          clientPhone: formData.phone,
          notes: formData.notes
        })
      });

      const data = await res.json();

      if (res.status === 409) {
        setErrorMessage(data.error || 'Ces dates sont déjà réservées pour cette chambre.');
        setIsSubmitting(false);
        return;
      }

      if (!res.ok) {
        setErrorMessage(data.error || 'Erreur lors de l\'enregistrement de votre demande.');
        setIsSubmitting(false);
        return;
      }

      setBookingRef(data.booking?.reference || 'CHR-PENDING');
      setSuccess(true);
    } catch {
      setErrorMessage('Problème de connexion au serveur. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoomChange = (e) => {
    const chosen = rooms.find(r => r.id === e.target.value);
    if (chosen) setFormData(prev => ({ ...prev, roomId: chosen.id, roomType: chosen.name, roomPrice: chosen.price }));
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10000 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
          
          <div className="modal-header text-white p-3 p-md-4 border-bottom border-3" style={{ backgroundColor: '#0E2E1D', borderColor: '#CFA34C' }}>
            <div>
              <h5 className="modal-title font-weight-bold text-uppercase text-white fs-5 m-0">
                <i className="fa fa-calendar-check me-2 text-chrysalide-gold"></i>Demande de Réservation — <span style={{ color: '#34D399' }}>La Chrysalide</span> <span style={{ color: '#FBBF24' }}>Suite</span>
              </h5>
              <small className="text-white-50">Quartier Nima, Parakou • Confirmation par l'administration</small>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-3 p-md-4 bg-white">
            {success ? (
              <div className="text-center py-4">
                <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3 shadow" style={{ width: '70px', height: '70px' }}>
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">Demande Envoyée !</h4>
                <p className="text-muted small mx-auto mb-4" style={{ maxWidth: '450px' }}>
                  Votre demande de réservation pour <strong>{formData.roomType}</strong> a bien été reçue. 
                  L'administration va traiter votre demande et vous recevrez une confirmation directe par <strong>WhatsApp</strong>.
                </p>
                <div className="bg-light p-3 rounded-3 text-start mb-4 border small" style={{ maxWidth: '400px', margin: '0 auto' }}>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Référence :</span>
                    <strong className="text-dark">{bookingRef}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Période :</span>
                    <strong className="text-dark">{formData.checkIn} au {formData.checkOut} ({nights} n)</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Montant estimé :</span>
                    <strong className="text-success">{totalPrice.toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Client :</span>
                    <strong className="text-dark">{formData.fullName} ({formData.phone})</strong>
                  </div>
                </div>
                <button className="btn btn-success px-5 py-2 font-weight-bold text-uppercase rounded-3" onClick={onClose} style={{ backgroundColor: '#25854C' }}>
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <i className="fa fa-exclamation-triangle me-2 fs-5"></i>
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Nom et Prénom *</label>
                    <input type="text" className="form-control" placeholder="Ex: Jean Dupont" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Numéro WhatsApp / Téléphone *</label>
                    <input type="tel" className="form-control" placeholder="+229 01 59 18 80" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Formule Hébergement</label>
                    <select className="form-select bg-light fw-bold" value={formData.roomId} onChange={handleRoomChange}>
                      {rooms.length > 0 ? rooms.filter(r => r.available).map(r => (
                        <option key={r.id} value={r.id}>{r.name} ({r.price.toLocaleString('fr-FR')} FCFA/nuit)</option>
                      )) : (
                        <>
                          <option value="room-ventilee">Chambre Ventilée (15 000 FCFA/nuit)</option>
                          <option value="room-climatisee">Chambre Climatisée (25 000 FCFA/nuit)</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Nombre d'occupants</label>
                    <select className="form-select" value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })}>
                      <option value="1">1 Personne</option>
                      <option value="2">2 Personnes</option>
                      <option value="3">3 Personnes</option>
                      <option value="4+">4+ Personnes</option>
                    </select>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Date d'arrivée *</label>
                    <input type="date" className="form-control" required value={formData.checkIn} onChange={e => setFormData({ ...formData, checkIn: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold text-dark small">Date de départ *</label>
                    <input type="date" className="form-control" required value={formData.checkOut} onChange={e => setFormData({ ...formData, checkOut: e.target.value })} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label font-weight-bold text-dark small">Demandes particulières (optionnel)</label>
                  <textarea className="form-control" rows="2" placeholder="Ex: Arrivée tardive, lit bébé..." value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}></textarea>
                </div>

                <div className="p-3 mb-3 rounded-3 border bg-light d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-muted small fw-bold d-block">Résumé de la demande :</span>
                    <strong className="text-dark small">{formData.roomType} • {nights} nuit{nights > 1 ? 's' : ''} ({formData.guests} pers.)</strong>
                  </div>
                  <div className="text-end">
                    <span className="text-muted small d-block">Total estimé :</span>
                    <span className="fs-4 font-weight-bold text-success">{totalPrice.toLocaleString('fr-FR')} <small className="fs-6 text-dark">FCFA</small></span>
                  </div>
                </div>

                <div className="modal-footer px-0 pb-0 pt-2 d-flex justify-content-between align-items-center border-top">
                  <button type="button" className="btn btn-outline-secondary btn-sm text-uppercase" onClick={onClose}>Annuler</button>
                  <button type="submit" disabled={isSubmitting} className="btn btn-success py-2 px-4 font-weight-bold text-uppercase shadow-sm rounded-3" style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}>
                    {isSubmitting ? <><span className="spinner-border spinner-border-sm me-2"></span>Envoi...</> : <><i className="fa fa-paper-plane me-2"></i>Envoyer la demande</>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
