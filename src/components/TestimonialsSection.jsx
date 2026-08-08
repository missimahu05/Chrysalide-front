import React, { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Un séjour exceptionnel à La Chrysalide Suite ! Le cadre est calme, la chambre très propre et climatisée. L'accueil par l'équipe a été irréprochable.",
      name: "Jean-Philippe M.",
      title: "Voyageur d'affaires",
      avatar: "/img/testimonial-1.jpg"
    },
    {
      id: 2,
      quote: "Rapport qualité-prix imbattable à Parakou. Les appartements meublés sont spacieux, sécurisés et super confortables pour la famille.",
      name: "Aminata S.",
      title: "Cliente Résidente",
      avatar: "/img/testimonial-2.jpg"
    },
    {
      id: 3,
      quote: "Service réactif par WhatsApp et petit-déjeuner au top. C'est désormais notre point de chute privilégié à chaque déplacement.",
      name: "Christian D.",
      title: "Directeur de Projet",
      avatar: "/img/testimonial-3.jpg"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="container-fluid testimonial my-5 py-5 min-vh-100 d-flex align-items-center bg-dark" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 43, .88), rgba(15, 23, 43, .88)), url("/img/hero/2.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">Témoignages</h6>
          <h2 className="text-white font-weight-bold">Ce que nos clients disent de <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-item position-relative bg-white rounded p-4 p-md-5 shadow-lg border-top border-3" style={{ borderColor: '#25854C' }}>
              <i className="fa fa-quote-right fa-3x text-chrysalide-gold position-absolute end-0 bottom-0 me-4 mb-3 opacity-25"></i>
              <p className="fs-5 italic text-dark mb-4 leading-relaxed">
                "{testimonials[activeIdx].quote}"
              </p>
              <div className="d-flex align-items-center">
                <img 
                  className="img-fluid flex-shrink-0 rounded-circle border border-2 border-chrysalide-green p-1 me-3" 
                  src={testimonials[activeIdx].avatar} 
                  alt={testimonials[activeIdx].name}
                  style={{ width: '55px', height: '55px', objectFit: 'cover', borderColor: '#25854C' }}
                />
                <div>
                  <h6 className="fw-bold mb-0 text-dark">{testimonials[activeIdx].name}</h6>
                  <small className="text-chrysalide-gold font-weight-bold text-uppercase">{testimonials[activeIdx].title}</small>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-2 mt-4">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`btn btn-sm ${idx === activeIdx ? 'btn-primary' : 'btn-outline-light'} rounded-circle`}
                  style={{ width: '14px', height: '14px', padding: 0 }}
                  aria-label={`Avis ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
