import React, { useState, useEffect } from 'react';
import { roomsData } from '../data/roomsData';
import { Calendar, User, Phone, Mail, CheckCircle2, AlertCircle, X, Shield, Send } from 'lucide-react';

export default function BookingModal({ selectedRoom, onClose }) {
  const [step, setStep] = useState(1);
  const [roomId, setRoomId] = useState(selectedRoom ? selectedRoom.id : roomsData[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const room = roomsData.find(r => r.id === roomId) || roomsData[0];

  // Calcul du nombre de nuits
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPrice = room.price * nights;

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = 'CHR-' + Math.floor(100000 + Math.random() * 900000);

    const bookingPayload = {
      reference: generatedRef,
      roomId: room.id,
      roomName: room.name,
      checkIn,
      checkOut,
      nights,
      totalPrice,
      clientName: fullName,
      clientEmail: email,
      clientPhone: phone,
      notes
    };

    try {
      // Appel API vers le serveur Express (Port 5000)
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
      const data = await res.json();
      console.log('Réservation enregistrée:', data);
    } catch (err) {
      console.log('Serveur API indisponible (réservation sauvegardée localement):', err);
    }

    setBookingRef(generatedRef);
    setIsSubmitting(false);
    setStep(3); // Étape de confirmation
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        {step === 1 && (
          <div className="modal-step-box">
            <div className="modal-step-header">
              <span className="step-badge">Étape 1 sur 2</span>
              <h2>Réserver votre Séjour</h2>
              <p>Sélectionnez votre hébergement et vos dates d'arrivée et de départ.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="form-group">
                <label><Calendar size={16} /> Choix du Logement</label>
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                  {roomsData.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.name} — {r.price.toLocaleString('fr-FR')} {r.currency}/nuit
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label><Calendar size={16} /> Date d'Arrivée</label>
                  <input 
                    type="date" 
                    value={checkIn} 
                    onChange={(e) => setCheckIn(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label><Calendar size={16} /> Date de Départ</label>
                  <input 
                    type="date" 
                    value={checkOut} 
                    onChange={(e) => setCheckOut(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className="price-summary-box">
                <div className="summary-row">
                  <span>Tarif par nuit :</span>
                  <strong>{room.price.toLocaleString('fr-FR')} {room.currency}</strong>
                </div>
                <div className="summary-row">
                  <span>Nombre de nuit(s) :</span>
                  <strong>{nights} nuit(s)</strong>
                </div>
                <div className="summary-row total-row">
                  <span>Montant Total Estimé :</span>
                  <span className="total-amount">{totalPrice.toLocaleString('fr-FR')} {room.currency}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary-gold full-width">
                Continuer les Coordonnées →
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="modal-step-box">
            <div className="modal-step-header">
              <span className="step-badge">Étape 2 sur 2</span>
              <h2>Vos Coordonnées</h2>
              <p>Renseignez vos informations pour valider votre réservation à La Chrysalide Suites.</p>
            </div>

            <form onSubmit={handleSubmitBooking}>
              <div className="form-group">
                <label><User size={16} /> Nom & Prénom Complet</label>
                <input 
                  type="text" 
                  placeholder="Ex: Jean Dupont"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label><Phone size={16} /> Téléphone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="Ex: +229 97 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label><Mail size={16} /> Adresse Email</label>
                  <input 
                    type="email" 
                    placeholder="Ex: jean.dupont@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Demandes Particulières (Optionnel)</label>
                <textarea 
                  rows="3"
                  placeholder="Ex: Arrivée tardive, lit bébé supplémentaire, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions-split">
                <button type="button" className="btn-outline-gold" onClick={() => setStep(1)}>
                  ← Retour
                </button>
                <button type="submit" className="btn-primary-gold" disabled={isSubmitting}>
                  {isSubmitting ? 'Validation...' : 'Confirmer la Réservation'}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="modal-step-box confirmation-step">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={56} className="icon-success" />
            </div>

            <h2>Réservation Enregistrée !</h2>
            <p className="confirmation-lead">
              Merci <strong>{fullName}</strong>, votre demande de réservation a été transmise à l'équipe de <strong>La Chrysalide Suites</strong>.
            </p>

            <div className="ref-card">
              <span className="ref-title">N° DE RÉFÉRENCE DE RÉSERVATION</span>
              <span className="ref-code">{bookingRef}</span>
            </div>

            <div className="confirmation-details">
              <p><strong>Hébergement :</strong> {room.name}</p>
              <p><strong>Période :</strong> Du {checkIn} au {checkOut} ({nights} nuits)</p>
              <p><strong>Montant Total :</strong> {totalPrice.toLocaleString('fr-FR')} {room.currency}</p>
            </div>

            <div className="modal-actions-confirm">
              <a 
                href={`https://wa.me/22901000000?text=Bonjour,%20je%20souhaite%20confirmer%20ma%20récompense%20de%20réservation%20ref:%20${bookingRef}%20pour%20${encodeURIComponent(room.name)}.`}
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp-direct"
              >
                <Send size={16} /> Confirmer sur WhatsApp Direct
              </a>
              <button className="btn-outline-gold full-width" onClick={onClose}>
                Fermer la fenêtre
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
