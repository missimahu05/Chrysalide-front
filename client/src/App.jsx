import { useState, useEffect } from 'react'

function App() {
  const [serverHealth, setServerHealth] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => {
        setServerHealth(data)
        setLoading(false)
      })
      .catch(err => {
        console.log('Serveur backend non connecté encore:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-brand">
          <div className="logo-icon">C</div>
          <span className="logo-title">Chrysalide</span>
        </div>
        <div className="status-badge">
          <span className="status-dot" style={{ backgroundColor: serverHealth ? '#10b981' : '#f59e0b' }}></span>
          <span>{loading ? 'Connexion API...' : serverHealth ? 'API Server Connectée (5000)' : 'API Server en attente'}</span>
        </div>
      </header>

      <main className="hero">
        <span className="hero-tag">Espace Client React</span>
        <h1 className="hero-title">
          Bienvenue sur le projet <span>Chrysalide</span>
        </h1>
        <p className="hero-description">
          Structure initiale du client React configurée avec succès. Connectée au serveur Express backend.
        </p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Frontend React & Vite</h3>
            <p className="card-text">Configuration moderne avec rechargement rapide (HMR) et styles sur-mesure.</p>
          </div>

          <div className="card">
            <div className="card-icon">⚙️</div>
            <h3 className="card-title">Backend Express API</h3>
            <p className="card-text">API REST modulaire fonctionnant sur le port 5000 avec gestion CORS et dotenv.</p>
          </div>

          <div className="card">
            <div className="card-icon">🛡️</div>
            <h3 className="card-title">Services Admin & SuperAdmin</h3>
            <p className="card-text">Espaces dédiés prêts pour la gestion et l'administration du projet.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Projet Chrysalide — Application Client</p>
      </footer>
    </div>
  )
}

export default App
