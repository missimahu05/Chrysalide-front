import React, { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Un séjour exceptionnel à La Chrysalide Suite ! Le cadre au quartier Nima est très calme, la suite d'une propreté exemplaire et la climatisation irréprochable. L'accueil du personnel m'a vraiment marquée.",
      name: "Kynette Agasounon",
      title: "Cliente Résidente",
      avatar: "/img/testimonials/client-woman.jpeg"
    },
    {
      id: 2,
      quote: "Le meilleur spot à Parakou pour concilier travail et détente. Les appartements meublés sont spacieux, le Bar Lounge & la Cave à Vin au top. Je recommande vivement !",
      name: "Elmancio Mehinto",
      title: "Voyageur d'affaires",
      avatar: "/img/testimonials/client-man.jpeg"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="container-fluid bg-light my-5 py-5 min-vh-100 d-flex align-items-center border-top border-bottom border-light" id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">Témoignages Clients</h6>
          <h2 className="text-dark font-weight-bold">Ce que nos clients disent de <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span></h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-item position-relative bg-white rounded-4 p-4 p-md-5 shadow-sm border-top border-4" style={{ borderColor: '#CFA34C' }}>
              <i className="fa fa-quote-right fa-3x text-chrysalide-gold position-absolute end-0 bottom-0 me-4 mb-3 opacity-25"></i>
              <p className="fs-5 italic text-dark mb-4 leading-relaxed font-weight-medium">
                "{testimonials[activeIdx].quote}"
              </p>
              <div className="d-flex align-items-center">
                <img 
                  className="img-fluid flex-shrink-0 rounded-circle border border-3 border-chrysalide-green p-1 me-3 shadow-sm" 
                  src={testimonials[activeIdx].avatar} 
                  alt={testimonials[activeIdx].name}
                  style={{ width: '65px', height: '65px', objectFit: 'cover', borderColor: '#25854C' }}
                />
                <div>
                  <h6 className="fw-bold mb-0 text-dark fs-5">{testimonials[activeIdx].name}</h6>
                  <small className="text-chrysalide-gold font-weight-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                    {testimonials[activeIdx].title}
                  </small>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`btn ${idx === activeIdx ? 'btn-primary' : 'btn-outline-secondary'} rounded-circle`}
                  style={{ width: '16px', height: '16px', padding: 0, backgroundColor: idx === activeIdx ? '#CFA34C' : 'transparent', borderColor: '#CFA34C' }}
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
