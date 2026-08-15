import React, { useState } from 'react';

const API = 'http://localhost:5000/api';

export default function EventBookingModal({ isOpen, onClose, event }) {
  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    eventDate: '',
    guests: '50',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !event) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${API}/bookings/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: event.id,
          eventTitle: event.title,
          eventDate: formData.eventDate,
          guests: formData.guests,
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          clientPhone: formData.clientPhone,
          notes: formData.notes
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Erreur lors de la soumission de la demande.');
        setIsSubmitting(false);
        return;
      }

      setBookingRef(data.booking?.reference || 'EVT-OK');
      setSuccess(true);
    } catch {
      setErrorMessage('Une erreur de connexion est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 10001 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">

          <div className="modal-header text-white p-3 p-md-4 border-bottom border-3" style={{ backgroundColor: '#0E2E1D', borderColor: event.color || '#CFA34C' }}>
            <div>
              <h5 className="modal-title font-weight-bold text-uppercase text-white fs-6 m-0">
                <i className={`fa ${event.icon} me-2`} style={{ color: event.color || '#CFA34C' }}></i>
                Demande d'Événement — {event.title}
              </h5>
              <small className="text-white-50">Quartier Nima, Parakou • Traitement sous 24h par l'équipe</small>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-3 p-md-4 bg-white">
            {success ? (
              <div className="text-center py-4">
                <div className="rounded-circle text-white d-inline-flex align-items-center justify-content-center mb-3 shadow" style={{ width: '70px', height: '70px', backgroundColor: event.color || '#25854C' }}>
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Demande Envoyée !</h5>
                <p className="text-muted small mb-4">
                  Votre demande pour <strong>{event.title}</strong> a bien été enregistrée. L'équipe d'administration va vous recontacter par <strong>WhatsApp</strong> pour confirmer les détails.
                </p>
                <div className="bg-light p-3 rounded-3 text-start mb-4 border small">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Référence :</span>
                    <strong>{bookingRef}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Date souhaitée :</span>
                    <strong>{formData.eventDate}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Client :</span>
                    <strong>{formData.clientName} ({formData.clientPhone})</strong>
                  </div>
                </div>
                <button className="btn text-white px-5 py-2 rounded-3 fw-bold text-uppercase" style={{ backgroundColor: event.color || '#25854C' }} onClick={onClose}>
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="alert alert-danger mb-3 small">{errorMessage}</div>
                )}

                <div className="p-3 rounded-3 mb-4 text-white" style={{ backgroundColor: event.color || '#25854C', opacity: 0.9 }}>
                  <div className="fw-bold">{event.badge}</div>
                  <div className="small opacity-75">{event.title}</div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Nom et Prénom *</label>
                    <input type="text" className="form-control" placeholder="Ex: Jean Dupont" required value={formData.clientName} onChange={e => setFormData({ ...formData, clientName: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Numéro WhatsApp *</label>
                    <input type="tel" className="form-control" placeholder="+229 01 59 18 80" required value={formData.clientPhone} onChange={e => setFormData({ ...formData, clientPhone: e.target.value })} />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Date souhaitée *</label>
                    <input type="date" className="form-control" required value={formData.eventDate} onChange={e => setFormData({ ...formData, eventDate: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Nombre de personnes</label>
                    <select className="form-select" value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })}>
                      <option value="10-30">10 – 30 personnes</option>
                      <option value="30-50">30 – 50 personnes</option>
                      <option value="50-100">50 – 100 personnes</option>
                      <option value="100+">100+ personnes</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-dark small">Notes / Demandes spéciales</label>
                  <textarea className="form-control" rows="3" placeholder="Décrivez vos besoins, thème, équipements souhaités..." value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}></textarea>
                </div>

                <div className="modal-footer px-0 pb-0 pt-2 d-flex justify-content-between border-top">
                  <button type="button" className="btn btn-outline-secondary btn-sm text-uppercase" onClick={onClose}>Annuler</button>
                  <button type="submit" disabled={isSubmitting} className="btn text-white py-2 px-4 fw-bold text-uppercase shadow-sm rounded-3" style={{ backgroundColor: event.color || '#25854C' }}>
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
