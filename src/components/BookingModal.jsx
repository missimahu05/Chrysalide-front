import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose, selectedRoom, searchParams }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: searchParams?.checkIn || '',
    checkOut: searchParams?.checkOut || '',
    roomType: selectedRoom?.name || 'Chambre Climatisée Confort',
    guests: searchParams?.guests || '2',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*RÉSERVATION - LA CHRYSALIDE SUITE*
----------------------------------
👤 *Nom complet*: ${formData.fullName}
📞 *Téléphone*: ${formData.phone}
📧 *Email*: ${formData.email || 'Non renseigné'}
🛏️ *Hébergement*: ${formData.roomType}
📅 *Arrivée*: ${formData.checkIn}
📅 *Départ*: ${formData.checkOut}
👥 *Nombre de personnes*: ${formData.guests}
📝 *Notes*: ${formData.notes || 'Aucune'}
----------------------------------
Merci de confirmer la disponibilité et le tarif !`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2290159188023?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 10000 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-3 border-0 shadow-lg">
          <div className="modal-header bg-dark text-white p-4">
            <div>
              <h5 className="modal-title font-weight-bold text-uppercase">
                <i className="fa fa-calendar-check me-2 text-chrysalide-gold"></i>Réservation Directe — <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
              </h5>
              <small className="text-white-50">Validation instantanée via WhatsApp ou Téléphone (+229 0159188023)</small>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Nom et Prénom *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ex: Jean Dupont" 
                    required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Téléphone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Ex: +229 01XX XX XX" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Choix du logement</label>
                  <input 
                    type="text" 
                    className="form-control bg-light" 
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Nombre de personnes</label>
                  <select 
                    className="form-select"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Personne</option>
                    <option value="2">2 Personnes</option>
                    <option value="3">3 Personnes</option>
                    <option value="4+">4+ Personnes</option>
                  </select>
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Date d'arrivée *</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    required 
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label font-weight-bold text-dark">Date de départ *</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    required 
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label font-weight-bold text-dark">Demandes particulières / Notes</label>
                <textarea 
                  className="form-control" 
                  rows="3" 
                  placeholder="Horaire d'arrivée approximatif, petit déjeuner spécial..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer bg-light p-3 d-flex justify-content-between">
              <button type="button" className="btn btn-outline-secondary text-uppercase" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-success py-2 px-4 font-weight-bold text-uppercase shadow">
                <i className="fab fa-whatsapp me-2"></i>Envoyer via WhatsApp Direct
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
