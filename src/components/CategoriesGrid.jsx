import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoriesGrid({ onSelectCategory }) {
  const tiles = [
    {
      id: 'climatisee',
      title: 'CHAMBRES VENTILÉES & CLIMATISÉES',
      image: '/photos/2026-08-05-09.49.05.jpeg'
    },
    {
      id: 'suite',
      title: 'SUITES VIP EXÉCUTIVES',
      image: '/photos/2026-08-05-09.49.06.jpeg'
    },
    {
      id: 'appartement',
      title: 'APPARTEMENTS MEUBLÉS',
      image: '/photos/2026-08-05-09.49.07.jpeg'
    },
    {
      id: 'services',
      title: 'RESTAURATION & BAR-LOUNGE',
      image: '/photos/2026-08-05-09.49.08.jpeg'
    }
  ];

  return (
    <section className="tiles-section">
      <div className="container">
        <div className="tiles-grid-2x2">
          {tiles.map((tile) => (
            <div 
              className="tile-card" 
              key={tile.id}
              onClick={() => onSelectCategory(tile.id)}
            >
              <img src={tile.image} alt={tile.title} />
              <div className="tile-overlay">
                <span className="tile-title">{tile.title}</span>
                <div className="tile-arrow-btn">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
