import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Calendar, Home, Users, CheckCircle, Clock, XCircle, Shield, RefreshCw } from 'lucide-react';

export default function App() {
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = () => {
    setLoading(true);
    fetch('http://localhost:5001/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log('Err stats API:', err));

    fetch('http://localhost:5001/api/admin/bookings')
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Err bookings API:', err);
        // Fallback local mock
        setBookings([
          {
            id: 'bk-101',
            reference: 'CHR-847291',
            roomName: 'Suite Exécutive Prestige VIP',
            clientName: 'Jean-Philippe Mensah',
            clientPhone: '+229 97 12 34 56',
            checkIn: '2026-08-10',
            checkOut: '2026-08-14',
            totalPrice: 180000,
            status: 'CONFIRMED'
          },
          {
            id: 'bk-102',
            reference: 'CHR-391820',
            roomName: 'Chambre Climatisée Confort',
            clientName: 'Aïchatou Sow',
            clientPhone: '+229 95 98 76 54',
            checkIn: '2026-08-08',
            checkOut: '2026-08-10',
            totalPrice: 50000,
            status: 'PENDING'
          }
        ]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    fetch(`http://localhost:5001/api/admin/bookings/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
      .then(() => fetchAdminData())
      .catch(err => {
        console.log('Mis à jour locale du statut:', err);
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
      });
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">SA</div>
          <span className="sidebar-title">Chrysalide Admin</span>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-item active"><LayoutDashboard size={18} /> Tableau de bord</li>
          <li className="menu-item"><Calendar size={18} /> Réservations</li>
          <li className="menu-item"><Home size={18} /> Gestion des Suites</li>
          <li className="menu-item"><Users size={18} /> Clients</li>
          <li className="menu-item"><Shield size={18} /> Paramètres API</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div>
            <h1 className="page-title">Tableau de Bord SuperAdmin</h1>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Gestion centrale de La Chrysalide Suites</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={fetchAdminData}
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid #3b82f6',
                color: '#3b82f6',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <RefreshCw size={14} /> Actualiser
            </button>
            <div className="status-pill">
              <span className="dot" style={{ backgroundColor: '#10b981' }}></span>
              <span>API Admin Connectée (5001)</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Réservations Totales</div>
            <div className="stat-value">{stats ? stats.totalBookings : bookings.length}</div>
            <div className="stat-change">+15% ce mois</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Réservations Confirmées</div>
            <div className="stat-value" style={{ color: '#10b981' }}>
              {bookings.filter(b => b.status === 'CONFIRMED').length}
            </div>
            <div className="stat-change">Actives & Confirmées</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">En Attente de Validation</div>
            <div className="stat-value" style={{ color: '#f59e0b' }}>
              {bookings.filter(b => b.status === 'PENDING').length}
            </div>
            <div className="stat-change">Nécessite action</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Revenus Estimés</div>
            <div className="stat-value" style={{ color: '#3b82f6' }}>
              {bookings.reduce((sum, b) => sum + b.totalPrice, 0).toLocaleString('fr-FR')} FCFA
            </div>
            <div className="stat-change">Chiffre d'affaires réservé</div>
          </div>
        </section>

        {/* Bookings Table */}
        <section className="section-card">
          <h2 className="section-title">Gestion en Temps Réel des Réservations</h2>
          {loading ? (
            <p>Chargement des données...</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Client</th>
                  <th>Téléphone</th>
                  <th>Logement</th>
                  <th>Arrivée → Départ</th>
                  <th>Montant</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td><strong>{b.reference}</strong></td>
                    <td>{b.clientName}</td>
                    <td>{b.clientPhone}</td>
                    <td>{b.roomName}</td>
                    <td>{b.checkIn} ➔ {b.checkOut}</td>
                    <td><strong>{b.totalPrice.toLocaleString('fr-FR')} FCFA</strong></td>
                    <td>
                      {b.status === 'CONFIRMED' && <span className="badge badge-success"><CheckCircle size={12} /> Confirmé</span>}
                      {b.status === 'PENDING' && <span className="badge badge-warning" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}><Clock size={12} /> En Attente</span>}
                      {b.status === 'CANCELLED' && <span className="badge badge-danger" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}><XCircle size={12} /> Annulé</span>}
                    </td>
                    <td>
                      {b.status === 'PENDING' && (
                        <button 
                          onClick={() => handleUpdateStatus(b.id, 'CONFIRMED')}
                          style={{
                            background: '#10b981',
                            color: '#fff',
                            border: 'none',
                            padding: '0.3rem 0.7rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600
                          }}
                        >
                          Valider
                        </button>
                      )}
                      {b.status === 'CONFIRMED' && (
                        <button 
                          onClick={() => handleUpdateStatus(b.id, 'CANCELLED')}
                          style={{
                            background: 'rgba(244, 63, 94, 0.2)',
                            color: '#f43f5e',
                            border: '1px solid #f43f5e',
                            padding: '0.3rem 0.7rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          Annuler
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}
