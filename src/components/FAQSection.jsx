import React, { useState } from 'react';

export default function FAQSection({ onOpenBooking }) {
  const faqs = [
    {
      q: "Quels sont les tarifs des chambres et des suites ?",
      a: "Nos tarifs s'adaptent à toutes vos exigences : Chambre Ventilée Standard à 15.000 FCFA/nuit, Chambre Climatisée Confort à 25.000 FCFA/nuit, Chambre Climatisée Deluxe à 30.000 FCFA/nuit, Suite VIP Prestige à 45.000 FCFA/nuit et Appartement Meublé 2 chambres à 60.000 FCFA/nuit."
    },
    {
      q: "Où se situe exactement La Chrysalide Suite à Parakou ?",
      a: "Nous sommes idéalement installés au Quartier Nima à Parakou (République du Bénin), dans un secteur calme, sécurisé et très facile d'accès avec parking privé."
    },
    {
      q: "Quels sont les services de restauration et bar proposés ?",
      a: "Notre complexe intègre un Bar Lounge chic, une Cave à Vin sélectionnée, un Espace Chicha agréable et un service de Restauration rapide et gastronomique avec room service disponible."
    },
    {
      q: "Comment effectuer une réservation instantanée ?",
      a: "Il vous suffit de cliquer sur n'importe quel bouton 'Réserver' du site ou de nous contacter directement sur WhatsApp au +229 0159188023. Notre réception vous confirme votre chambre en 1 minute !"
    },
    {
      q: "Proposez-vous des tarifs dégressifs pour les séjours de longue durée ?",
      a: "Oui ! Pour les séjours de longue durée dans nos appartements meublés ou suites VIP, nous proposons des formules préférentielles sur mesure. Contactez directement la gérance."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="container-fluid min-vh-100 d-flex align-items-center py-5 border-top border-bottom border-light" id="faq" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="container py-2 py-md-4">
        
        <div className="text-center mb-4 mb-md-5">
          <h6 className="section-title text-center text-chrysalide-gold text-uppercase mb-2 font-weight-bold">
            Questions Fréquentes
          </h6>
          <h2 className="text-dark font-weight-bold fs-3 fs-md-2 mb-2">
            Tout savoir sur <span className="text-chrysalide-green">La Chrysalide</span> <span className="text-chrysalide-gold">Suite</span>
          </h2>
          <p className="text-muted leading-relaxed small fs-6" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Retrouvez les réponses aux questions les plus posées par nos clients et résidents.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" id="chrysalideFaq">
              {faqs.map((f, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="accordion-item mb-2 mb-md-3 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
                    <h2 className="accordion-header" id={`heading-${idx}`}>
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'} fw-bold text-dark fs-6 py-3 px-3 px-md-4 shadow-none bg-white d-flex justify-content-between align-items-center w-100 text-start`}
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        style={{ borderLeft: isOpen ? '5px solid #CFA34C' : '5px solid transparent', transition: 'all 0.3s ease' }}
                      >
                        <span className="pe-2">
                          <i className="fa fa-question-circle text-chrysalide-gold me-2 me-md-3"></i>
                          {f.q}
                        </span>
                        <i className={`fa ${isOpen ? 'fa-chevron-up text-chrysalide-green' : 'fa-chevron-down text-muted'} ms-2 flex-shrink-0`}></i>
                      </button>
                    </h2>
                    {isOpen && (
                      <div className="accordion-body px-3 px-md-4 pb-3 pt-1 text-muted leading-relaxed small fs-6">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-4 p-3 p-md-4 mt-4 text-center shadow-sm border border-light d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="text-start text-center text-md-start">
                <h6 className="fw-bold mb-1 text-dark fs-6">Vous avez une autre question ?</h6>
                <small className="text-muted">Notre équipe de réception vous répond immédiatement sur WhatsApp.</small>
              </div>
              <a 
                href="https://wa.me/2290159188023" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-success font-weight-bold text-uppercase px-4 py-2 shadow-sm text-nowrap rounded-3 w-100 w-md-auto"
                style={{ backgroundColor: '#25854C', borderColor: '#25854C' }}
              >
                <i className="fab fa-whatsapp me-2"></i>Posez votre question
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
