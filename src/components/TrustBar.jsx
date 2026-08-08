import React from 'react';

export default function TrustBar() {
  const stats = [
    { num: '500+', label: 'Clients Complètement Satisfaits', icon: 'fa-smile-beam' },
    { num: '24h/24', label: 'Service d\'Accueil & Sécurité', icon: 'fa-shield-alt' },
    { num: '100%', label: 'Confort, Calme & Discrétion', icon: 'fa-star' },
    { num: '5/5', label: 'Note Moyenne de nos Résidents', icon: 'fa-award' },
  ];

  return (
    <section className="container-fluid py-4 text-white" style={{ backgroundColor: '#143522', borderTop: '2px solid #CFA34C', borderBottom: '2px solid #CFA34C' }}>
      <div className="container">
        <div className="row g-4 text-center align-items-center">
          {stats.map((s, idx) => (
            <div key={idx} className="col-md-3 col-6">
              <div className="p-2">
                <i className={`fa ${s.icon} text-chrysalide-gold fa-2x mb-2`}></i>
                <h3 className="font-weight-bold text-white mb-1" style={{ fontSize: '1.8rem' }}>{s.num}</h3>
                <p className="text-white-50 small mb-0 font-weight-medium" style={{ fontSize: '0.85rem' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
