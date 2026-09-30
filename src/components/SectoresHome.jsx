import { Link } from 'react-router-dom'
import { SECTORES } from '../data/sectores'

const selected = ['sector-financiero', 'salud-y-farmaceutico', 'manufactura', 'oficinas-corporativas', 'datacenter']

export default function SectoresHome() {
  const sectors = selected.map(slug => SECTORES.find(item => item.slug === slug)).filter(Boolean)
  return (
    <section id="sectores" className="sectors-compact" aria-labelledby="sectors-title">
      <div className="content-shell">
        <div className="sectors-compact-heading">
          <h2 id="sectors-title">La criticidad cambia según la operación.</h2>
          <Link to="/sectores/">Ver todos los sectores →</Link>
        </div>
        <div>{sectors.map(sector => <Link key={sector.slug} to={`/sectores/${sector.slug}/`}><strong>{sector.nombre}</strong><span>Ver soluciones →</span></Link>)}</div>
      </div>
    </section>
  )
}
