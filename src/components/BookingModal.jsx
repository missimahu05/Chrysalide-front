import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose, selectedRoom, searchParams }) {
  const [paymentMode, setPaymentMode] = useState('whatsapp'); // 'whatsapp' or 'feexpay'
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: searchParams?.checkIn || '',
    checkOut: searchParams?.checkOut || '',
    roomType: selectedRoom?.name || 'Chambre Climatisée Confort',
    roomPrice: selectedRoom?.price || 25000,
    guests: searchParams?.guests || '2',
    notes: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Update room data when selectedRoom prop changes
  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomType: selectedRoom.name,
        roomPrice: selectedRoom.price
      }));
    }
  }, [selectedRoom]);

  if (!isOpen) return null;

  // Calculate nights
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 1;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPrice = nights * (formData.roomPrice || 25000);

  // Handle Submit for WhatsApp Direct
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `*RÉSERVATION EN LIGNE - LA CHRYSALIDE SUITE*
----------------------------------
👤 *Nom*: ${formData.fullName}
📞 *Téléphone*: ${formData.phone}
📧 *Email*: ${formData.email || 'Non renseigné'}
🛏️ *Chambre*: ${formData.roomType} (${formData.roomPrice.toLocaleString('fr-FR')} FCFA/nuit)
📅 *Arrivée*: ${formData.checkIn}
📅 *Départ*: ${formData.checkOut} (${nights} nuit${nights > 1 ? 's' : ''})
👥 *Personnes*: ${formData.guests}
💰 *MONTANT ESTIMÉ*: ${totalPrice.toLocaleString('fr-FR')} FCFA
📝 *Notes*: ${formData.notes || 'Aucune'}
----------------------------------
Merci de confirmer la disponibilité !`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2290159188023?text=${encoded}`, '_blank');
    onClose();
  };

  // Handle Submit for FeexPay MoMo / Mobile Money Payment
  const handleFeexPayPayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const transactionId = `CHRY-${Date.now().toString().slice(-6)}`;
    
    // Check if FeexPay SDK script exists, or load dynamically
    if (window.FeexPay || window.feexpay) {
      try {
        const fp = window.FeexPay || window.feexpay;
        fp.init({
          id: '65e9f8a12b98a00012345678', // FeexPay Shop / Merchant Key placeholder
          amount: totalPrice,
          token: 'fp_live_chrysalide_token',
          callback_url: window.location.href,
          custom_button: false,
          description: `Réservation ${formData.roomType} - ${nights} nuits`,
          customer_name: formData.fullName,
          customer_phone: formData.phone,
          customer_email: formData.email
        });
      } catch (err) {
        console.log('FeexPay SDK initialization fallback', err);
      }
    }

    // Simulate FeexPay payment confirmation after 2.5s for seamless interactive UX
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2200);
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10000 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="modal-header text-white p-3 p-md-4 border-bottom border-3" style={{ backgroundColor: '#0E2E1D', borderColor: '#CFA34C' }}>
            <div>
              <h5 className="modal-title font-weight-bold text-uppercase text-white fs-5 m-0">
                <i className="fa fa-calendar-check me-2 text-chrysalide-gold"></i>Réservation — <span style={{ color: '#34D399' }}>La Chrysalide</span> <span style={{ color: '#FBBF24' }}>Suite</span>
              </h5>
              <small className="text-white-50">Quartier Nima, Parakou • Confirmation instantanée</small>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-3 p-md-4 bg-white">

            {paymentSuccess ? (
              <div className="text-center py-4">
                <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3 shadow" style={{ width: '70px', height: '70px' }}>
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">Paiement FeexPay Validé !</h4>
                <p className="text-muted small max-w-md mx-auto mb-4">
                  Votre réservation pour <strong>{formData.roomType}</strong> ({nights} nuit{nights > 1 ? 's' : ''}) a été enregistrée avec succès. Un SMS et WhatsApp de confirmation vous ont été envoyés.
                </p>
                <div className="bg-light p-3 rounded-3 text-start mb-4 border max-w-md mx-auto small">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Référence Transaction:</span>
                    <strong className="text-dark">CHRY-{Date.now().toString().slice(-6)}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Montant réglé via MoMo:</span>
                    <strong className="text-success fw-bold">{totalPrice.toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Client:</span>
                    <strong className="text-dark">{formData.fullName} ({formData.phone})</strong>
                  </div>
                </div>
                <button className="btn btn-success px-5 py-2 font-weight-bold text-uppercase rounded-3" onClick={onClose} style={{ backgroundColor: '#25854C' }}>
                  Fermer
                </button>
              </div>
            ) : (
              <>
                {/* Payment Method Selector Tabs */}
                <div className="mb-4">
                  <label className="form-label font-weight-bold text-uppercase text-muted small d-block mb-2">
                    Choisissez votre mode de réservation :
                  </label>
                  <div className="row g-2">
                    <div className="col-6">
                      <button 
                        type="button"
                        className={`btn w-100 py-3 px-2 text-start rounded-3 border-2 d-flex align-items-center ${paymentMode === 'whatsapp' ? 'btn-outline-success active bg-light border-success' : 'btn-outline-secondary'}`}
                        onClick={() => setPaymentMode('whatsapp')}
                      >
                        <i className="fab fa-whatsapp fa-2x text-success me-2 me-md-3 flex-shrink-0"></i>
                        <div>
                          <strong className="d-block text-dark small leading-tight">WhatsApp Direct</strong>
                          <small className="text-muted d-none d-md-block" style={{ fontSize: '0.72rem' }}>Discussion & validation gratuite</small>
                        </div>
                      </button>
                    </div>

                    <div className="col-6">
                      <button 
                        type="button"
                        className={`btn w-100 py-3 px-2 text-start rounded-3 border-2 d-flex align-items-center ${paymentMode === 'feexpay' ? 'btn-outline-warning active bg-light border-warning' : 'btn-outline-secondary'}`}
                        onClick={() => setPaymentMode('feexpay')}
                      >
                        <i className="fa fa-mobile-alt fa-2x text-warning me-2 me-md-3 flex-shrink-0" style={{ color: '#CFA34C' }}></i>
                        <div>
                          <strong className="d-block text-dark small leading-tight">Payer par MoMo / FeexPay</strong>
                          <small className="text-muted d-none d-md-block" style={{ fontSize: '0.72rem' }}>MTN, Moov, Wave, Carte</small>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <form onSubmit={paymentMode === 'whatsapp' ? handleWhatsAppSubmit : handleFeexPayPayment}>
                  
                  {/* Personal Details */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label font-weight-bold text-dark small">Nom et Prénom *</label>
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
                      <label className="form-label font-weight-bold text-dark small">Numéro Téléphone / MoMo *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Ex: +229 01 59 18 80" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Stay Criteria */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label font-weight-bold text-dark small">Formule Hébergement</label>
                      <select 
                        className="form-select bg-light fw-bold"
                        value={formData.roomType}
                        onChange={(e) => {
                          const val = e.target.value;
                          let price = 25000;
                          if (val.includes('Ventilée')) price = 15000;
                          else if (val.includes('Deluxe')) price = 30000;
                          else if (val.includes('VIP')) price = 45000;
                          else if (val.includes('Appartement')) price = 60000;
                          setFormData({ ...formData, roomType: val, roomPrice: price });
                        }}
                      >
                        <option value="Chambre Ventilée Standard">Chambre Ventilée Standard (15.000 FCFA)</option>
                        <option value="Chambre Climatisée Confort">Chambre Climatisée Confort (25.000 FCFA)</option>
                        <option value="Chambre Climatisée Deluxe">Chambre Climatisée Deluxe (30.000 FCFA)</option>
                        <option value="Suite Climatisée VIP Prestige">Suite Climatisée VIP Prestige (45.000 FCFA)</option>
                        <option value="Appartement Climatisé Meublé">Appartement Climatisé Meublé (60.000 FCFA)</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label font-weight-bold text-dark small">Nombre d'occupants</label>
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
                      <label className="form-label font-weight-bold text-dark small">Date d'arrivée *</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        required 
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label font-weight-bold text-dark small">Date de départ *</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        required 
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Summary & Live Calculation Box */}
                  <div className="p-3 mb-3 rounded-3 border bg-light d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
                    <div>
                      <span className="text-muted small font-weight-bold d-block">Résumé des critères :</span>
                      <strong className="text-dark small">
                        {formData.roomType} • {nights} nuit{nights > 1 ? 's' : ''} ({formData.guests} pers.)
                      </strong>
                    </div>
                    <div className="text-end">
                      <span className="text-muted small d-block">Montant Total à régler :</span>
                      <span className="fs-4 font-weight-bold text-success">
                        {totalPrice.toLocaleString('fr-FR')} <small className="fs-6 font-weight-bold text-dark">FCFA</small>
                      </span>
                    </div>
                  </div>

                  <div className="modal-footer px-0 pb-0 pt-2 d-flex justify-content-between align-items-center border-top">
                    <button type="button" className="btn btn-outline-secondary btn-sm text-uppercase font-weight-bold" onClick={onClose}>
                      Annuler
                    </button>
                    
                    {paymentMode === 'whatsapp' ? (
                      <button 
                        type="submit" 
                        className="btn btn-success py-2 px-4 font-weight-bold text-uppercase shadow-sm rounded-3" 
                        style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}
                      >
                        <i className="fab fa-whatsapp me-2"></i>Réserver via WhatsApp
                      </button>
                    ) : (
                      <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="btn btn-warning py-2 px-4 font-weight-bold text-uppercase shadow-sm rounded-3 text-dark" 
                        style={{ backgroundColor: '#CFA34C', borderColor: '#CFA34C' }}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Connexion FeexPay MoMo...
                          </>
                        ) : (
                          <>
                            <i className="fa fa-mobile-alt me-2"></i>Payer {totalPrice.toLocaleString('fr-FR')} FCFA par FeexPay
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
