import React, { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Le meilleur spot à Parakou pour concilier travail et détente. Les appartements meublés sont spacieux, le Bar Lounge & la Cave à Vin au top. Je recommande vivement !",
      name: "Elmancio Mehinto",
      title: "Voyageur d'affaires",
      avatar: "/img/testimonials/client-man.jpeg"
    },
    {
      id: 2,
      quote: "Un accueil chaleureux et des installations irréprochables au quartier Nima. J'ai adoré la suite VIP et la qualité de la restauration. Un séjour parfait à Parakou !",
      name: "Dr. Sophie Kouassi",
      title: "Voyageuse Régulière",
      avatar: "/img/testimonials/client-woman.jpeg"
    },
    {
      id: 3,
      quote: "La Chrysalide Suite est mon adresse incontournable lors de mes séjours à Parakou. Le calme, la propreté des suites climatisées et la réactivité du personnel sont exceptionnels.",
      name: "Marc Lawson",
      title: "Consultant International",
      avatar: "/img/testimonials/client-man.jpeg"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="container-fluid min-vh-100 bg-light py-5 d-flex align-items-center border-top border-bottom border-light" id="testimonials">
      <div className="container py-3">
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">Témoignages Clients</h6>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2">Ce que nos clients disent de <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-item position-relative bg-white rounded-4 p-4 p-md-5 shadow-sm border-top border-4" style={{ borderColor: '#CFA34C' }}>
              <i className="fa fa-quote-right fa-2x fa-md-3x text-chrysalide-gold position-absolute end-0 bottom-0 me-3 me-md-4 mb-3 opacity-25"></i>
              <p className="fs-6 fs-md-5 italic text-dark mb-4 leading-relaxed font-weight-medium">
                "{testimonials[activeIdx].quote}"
              </p>
              <div className="d-flex align-items-center">
                <img 
                  className="img-fluid flex-shrink-0 rounded-circle border border-3 border-chrysalide-green p-1 me-3 shadow-sm" 
                  src={testimonials[activeIdx].avatar} 
                  alt={testimonials[activeIdx].name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderColor: '#25854C' }}
                />
                <div>
                  <h6 className="fw-bold mb-0 text-dark fs-6 fs-md-5">{testimonials[activeIdx].name}</h6>
                  <small className="text-chrysalide-gold font-weight-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                    {testimonials[activeIdx].title}
                  </small>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-2 gap-md-3 mt-4">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`btn ${idx === activeIdx ? 'btn-primary' : 'btn-outline-secondary'} rounded-circle`}
                  style={{ width: '18px', height: '18px', padding: 0, backgroundColor: idx === activeIdx ? '#CFA34C' : 'transparent', borderColor: '#CFA34C' }}
                  aria-label={`Témoignage ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
