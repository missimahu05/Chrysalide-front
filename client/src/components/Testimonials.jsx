import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marc Lawson',
      role: 'Consultant International',
      text: 'La Chrysalide Suites est mon adresse incontournable lors de mes voyages d\'affaires. Le calme, la propreté des suites climatisées et la réactivité du personnel sont exceptionnels.',
      rating: 5
    },
    {
      name: 'Dr. Sophie Kouassi',
      role: 'Voyageuse régulière',
      text: 'Un accueil chaleureux et des installations irréprochables. J\'ai adoré la suite VIP et la qualité de la restauration. Je recommande vivement !',
      rating: 5
    },
    {
      name: 'Emmanuel Koffi',
      role: 'Entrepreneur',
      text: 'L\'appartement meublé était parfait pour mon séjour en famille d\'une semaine. Tout était équipé, propre et ultra sécurisé. Bravo à l\'équipe.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-subtitle-tag">
            <Sparkles size={14} /> AVIS & TÉMOIGNAGES
          </div>
          <h2 className="section-title-large">
            Ce que nos <span>Clients disent</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <Quote className="quote-icon" size={36} />
              <div className="stars-row">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
