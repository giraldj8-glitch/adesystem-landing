import { Link } from 'react-router-dom'
import { CASES } from '../data/cases'
import { whatsapp } from '../data/site'

export default function CasosHome({ projectPage = false }) {
  return (
    <section id="casos" className="cases-home" aria-labelledby="cases-title">
      <div className="content-shell">
        <div className="cases-heading"><h2 id="cases-title">Clientes que confían en ADE System.</h2>{!projectPage && <Link to="/proyectos/">Ver proyectos y casos →</Link>}</div>
        <div className="cases-grid">
          {CASES.map(item => <article key={item.id}>
            <img src={`/images/casos/${item.image}.webp`} alt={`Fotografía publicada por ADE System para el caso ${item.name}`} loading="lazy" decoding="async" width="1200" height="800" />
            <div>
              <img className="case-client-logo" src={`/images/casos/${item.logo}.webp`} alt={item.logoAlt} loading="lazy" decoding="async" width="180" height="72" />
              <p className="case-sector">{item.sector}</p>
              <h3>{item.name}</h3><p>{item.text}</p>
              <p className="case-disciplines">{item.disciplines}</p>
              <a className="case-cta" href={whatsapp(`Hola, vi el caso de ${item.name} y quiero consultar un proyecto similar para mi empresa.`)} target="_blank" rel="noopener noreferrer">Consultar un proyecto similar →</a>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
