import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadAnalytics } from '../lib/siteEvents'

const KEY = 'adesystem_analytics_consent'

export default function ConsentBanner() {
  const [choice, setChoice] = useState(() => typeof window === 'undefined' ? 'pending' : localStorage.getItem(KEY) || 'pending')

  useEffect(() => {
    if (choice === 'accepted') loadAnalytics()
  }, [choice])

  const decide = value => {
    localStorage.setItem(KEY, value)
    setChoice(value)
  }

  if (choice !== 'pending') return null
  return (
    <aside className="consent-banner" aria-label="Preferencias de analítica">
      <p>Usamos analítica opcional para entender qué contenidos generan consultas. No se activa sin tu permiso. <Link to="/politica-tratamiento-datos/">Conoce la política de datos</Link>.</p>
      <div>
        <button type="button" className="btn btn-ghost" onClick={() => decide('declined')}>Solo necesarias</button>
        <button type="button" className="btn btn-primary" onClick={() => decide('accepted')}>Aceptar analítica</button>
      </div>
    </aside>
  )
}
