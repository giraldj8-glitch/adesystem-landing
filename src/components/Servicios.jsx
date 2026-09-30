import { assetUrl } from '../lib/assets.js'
import { Link } from 'react-router-dom'

const pillars = [
  { image: 'energia', title: 'Arquitectura eléctrica', text: 'Subestaciones, tableros, circuitos, puesta a tierra, UPS y plantas.', to: '/servicios/arquitectura-electrica/', color: '#32D894' },
  { image: 'red', title: 'Arquitectura de red', text: 'Cableado estructurado, fibra óptica, Wi-Fi y centros de comunicaciones.', to: '/servicios/arquitectura-de-red/', color: '#611AD8' },
  { image: 'seguridad', title: 'Confort y seguridad', text: 'Climatización, CCTV, control de acceso y sistemas contra incendio.', to: '/servicios/confort-y-seguridad/', color: '#345FEA' },
  { image: 'interiorismo', title: 'Arquitectura e interiorismo', text: 'Adecuación de espacios coordinada con la infraestructura técnica.', to: '/servicios/arquitectura-e-interiorismo/', color: '#1BC5FF' },
]

export default function Servicios() {
  return (
    <section id="servicios" className="pillars-section" aria-labelledby="pillars-title">
      <div className="content-shell">
        <div className="pillars-heading">
          <h2 id="pillars-title">Cuatro disciplinas. Un alcance coordinado.</h2>
          <p>Integramos los sistemas que comparten espacio, energía, datos y responsabilidades de entrega.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map(item => (
            <Link key={item.to} to={item.to} style={{ '--pillar-color': item.color }}>
              <div className="pillar-image">
                <img src={assetUrl(`/images/detalle-${item.image}-adesystem.webp`)} alt={`Render conceptual de ${item.title.toLowerCase()}`} width="1672" height="941" loading="lazy" decoding="async" />
              </div>
              <h3>{item.title}</h3><p>{item.text}</p><span>Ver alcance →</span>
            </Link>
          ))}
        </div>
        <p className="pillars-caption">Visualizaciones conceptuales. Explore cada disciplina para conocer sus soluciones.</p>
      </div>
    </section>
  )
}
