import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
    } catch (err) {
      console.log('API contact offline:', err);
    }
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header-center">
          <div className="section-subtitle-tag">
            <Sparkles size={14} /> CONTACT & LOCALISATION
          </div>
          <h2 className="section-title-large">
            Contactez <span>La Chrysalide Suites</span>
          </h2>
          <p className="section-description-center">
            Notre équipe est à votre disposition 24h/24 pour répondre à toutes vos questions ou réserver votre séjour.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-card">
            <h3>Nos Coordonnées</h3>
            <p>N'hésitez pas à nous contacter directement ou à venir nous rendre visite.</p>

            <div className="contact-info-list">
              <div className="info-box">
                <MapPin className="info-icon" size={20} />
                <div>
                  <strong>Adresse & Emplacement</strong>
                  <p>Quartier Résidentiel, Cotonou / Littoral, Bénin</p>
                </div>
              </div>

              <div className="info-box">
                <Phone className="info-icon" size={20} />
                <div>
                  <strong>Téléphone / WhatsApp</strong>
                  <p>+229 01 00 00 00 / +229 01 90 90 90</p>
                </div>
              </div>

              <div className="info-box">
                <Mail className="info-icon" size={20} />
                <div>
                  <strong>Adresse Email</strong>
                  <p>contact@chrysalidesuites.com</p>
                </div>
              </div>
            </div>

            <div className="whatsapp-callout">
              <MessageSquare size={24} className="icon-green" />
              <div>
                <strong>Réservation Express par WhatsApp</strong>
                <p>Besoin d'une réponse instantanée ? Discutez en direct avec la réception.</p>
              </div>
              <a 
                href="https://wa.me/22901000000?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20La%20Chrysalide%20Suites." 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp-sm"
              >
                Discuter
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-message">
                <h3>Message Envoyé avec Succès !</h3>
                <p>Merci <strong>{name}</strong>, notre équipe vous répondra dans les plus brefs délais.</p>
                <button className="btn-outline-gold" onClick={() => setSubmitted(false)}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nom & Prénom</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Adresse Email</label>
                  <input 
                    type="email" 
                    placeholder="votre.email@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Sujet de votre demande</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Réservation de groupe, Demande de tarif..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Écrivez votre message ici..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-gold full-width">
                  <Send size={16} /> Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
