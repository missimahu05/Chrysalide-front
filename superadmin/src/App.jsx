import { useState, useEffect } from 'react'

function App() {
  const [adminServerHealth, setAdminServerHealth] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5001/api/admin/health')
      .then(res => res.json())
      .then(data => setAdminServerHealth(data))
      .catch(err => console.log('Admin backend non disponible:', err))
  }, [])

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">SA</div>
          <span className="sidebar-title">Chrysalide Admin</span>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-item active">📊 Tableau de bord</li>
          <li className="menu-item">👥 Utilisateurs</li>
          <li className="menu-item">⚙️ Services & APIs</li>
          <li className="menu-item">🛡️ Securité & Clés</li>
          <li className="menu-item">📜 Journal d'audit</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <h1 className="page-title">SuperAdmin Dashboard</h1>
          <div className="status-pill">
            <span className="dot" style={{ backgroundColor: adminServerHealth ? '#10b981' : '#f59e0b' }}></span>
            <span>{adminServerHealth ? 'Admin Service Connecté (5001)' : 'Admin Service non détecté'}</span>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Utilisateurs Totaux</div>
            <div className="stat-value">1,248</div>
            <div className="stat-change">+12% ce mois</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Serveurs Actifs</div>
            <div className="stat-value">2 / 2</div>
            <div className="stat-change">Port 5000 & 5001</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Temps de Réponse API</div>
            <div className="stat-value">24 ms</div>
            <div className="stat-change">Excellente performance</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Statut Système</div>
            <div className="stat-value" style={{ color: '#10b981' }}>OK</div>
            <div className="stat-change">Tous les services opérationnels</div>
          </div>
        </section>

        <section className="section-card">
          <h2 className="section-title">Vue d'ensemble des Services Chrysalide</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Sous-Dossier</th>
                <th>Type</th>
                <th>Technologie</th>
                <th>Port / URL</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>client</strong></td>
                <td>Frontend Client</td>
                <td>React + Vite</td>
                <td>http://localhost:5173</td>
                <td><span className="badge badge-success">Prêt</span></td>
              </tr>
              <tr>
                <td><strong>server</strong></td>
                <td>Backend Principal</td>
                <td>Node.js + Express</td>
                <td>http://localhost:5000</td>
                <td><span className="badge badge-success">Prêt</span></td>
              </tr>
              <tr>
                <td><strong>admin</strong></td>
                <td>Backend Admin</td>
                <td>Node.js + Express</td>
                <td>http://localhost:5001</td>
                <td><span className="badge badge-success">Prêt</span></td>
              </tr>
              <tr>
                <td><strong>superadmin</strong></td>
                <td>Frontend SuperAdmin</td>
                <td>React + Vite</td>
                <td>http://localhost:5174</td>
                <td><span className="badge badge-info">Actif</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default App
