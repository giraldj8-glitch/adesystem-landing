import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MEDIA } from '../data/media'
import { SYSTEMS } from '../data/systems'
import { whatsapp } from '../data/site'
import { track } from '../lib/siteEvents'
import DetailImage from './DetailImage'

export function SystemDetail({ system, showLink = true }) {
  return (
    <article className="system-detail" style={{ '--spot-color': system.color }}>
      <DetailImage src={system.src} alt={system.alt} />
      <div className="system-detail-copy">
        <p className="system-eyebrow">{system.title}</p>
        <h3>{system.benefit}</h3>
        <p>{system.explanation}</p>
        <p className="system-next">{system.next}</p>
        <div className="system-actions">
          <a className="btn btn-primary" href={whatsapp(`Hola, quiero evaluar ${system.title.toLowerCase()} para mi empresa. ¿Qué información necesitan para orientarme?`)} target="_blank" rel="noopener noreferrer">Evaluar mi proyecto →</a>
          {showLink && <Link to={system.to}>Conocer la solución →</Link>}
        </div>
      </div>
    </article>
  )
}

export default function PortfolioMap({ compact = false, systemIds, currentPath }) {
  const systems = systemIds ? systemIds.map(id => SYSTEMS.find(system => system.id === id)).filter(Boolean) : SYSTEMS
  const detailRef = useRef(null)
  const [selected, setSelected] = useState(systems[0].id)
  const active = systems.find(system => system.id === selected) || systems[0]
  const select = (id, source) => {
    setSelected(id)
    track('portfolio_system_open', { system: id, interaction: source })
    if (window.matchMedia('(max-width: 900px)').matches) {
      detailRef.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }
  }
  return (
    <section className={`portfolio-map-section${compact ? ' is-compact' : ''}${systemIds ? ' is-focused' : ''}`} aria-label="Explore las soluciones de infraestructura">
      <div className="portfolio-map-wrap">
        <div className="portfolio-map-heading">
          <div>
            <p className="section-label">{systemIds ? 'Su proyecto, en imágenes' : 'Un proyecto. Todos los sistemas.'}</p>
            <h2>{systemIds ? 'Entienda qué está contratando.' : 'Todo lo que hace funcionar su empresa.'}</h2>
          </div>
          <p>Elija un sistema, vea su interior y descubra qué resuelve para su negocio.</p>
        </div>
        <div className="portfolio-map-tabs" aria-label="Seleccionar sistema">
          {systems.map(system => (
            <button key={system.id} type="button" aria-pressed={active.id === system.id} className={active.id === system.id ? 'is-active' : ''} style={{ '--spot-color': system.color }} onClick={() => select(system.id, 'tab')}>
              <span>{system.number}</span>{system.title}
            </button>
          ))}
        </div>
        <div className="portfolio-map-shell">
          {!systemIds && <div className="portfolio-map-overview">
            <div className="portfolio-map-visual">
              <img src={MEDIA.portfolio.src} alt={MEDIA.portfolio.alt} width="1672" height="941" loading="lazy" />
              {systems.filter(system => system.x !== undefined).map(system => (
                <button key={system.id} type="button" className={`portfolio-hotspot${system.id === active.id ? ' is-active' : ''}`} style={{ '--spot-color': system.color, left: `${system.x}%`, top: `${system.y}%` }} aria-label={`Ver ${system.title}`} aria-pressed={system.id === active.id} onClick={() => select(system.id, 'hotspot')}>{system.number}</button>
              ))}
            </div>
            <p className="portfolio-overview-caption">Vista general del edificio <span>Seleccione un punto ↗</span></p>
            <p className="portfolio-overview-help">De la entrada de energía al último puesto de trabajo. Un solo equipo para coordinarlo.</p>
            <button className="generator-link" type="button" aria-pressed={active.id === 'planta'} onClick={() => select('planta', 'generator')}>09 · Ver la planta eléctrica de respaldo →</button>
          </div>}
          <div ref={detailRef} className="portfolio-detail-region" aria-live="polite" aria-atomic="true"><SystemDetail key={active.id} system={active} showLink={active.to !== currentPath} /></div>
        </div>
        <p className="portfolio-map-disclaimer">Renders conceptuales, no fotografías de obras ejecutadas. El equipo y la configuración se definen mediante diseño y evaluación del proyecto.</p>
      </div>
    </section>
  )
}
