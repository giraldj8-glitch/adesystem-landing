import { Link } from 'react-router-dom'
import Seo, { breadcrumbSchema } from '../components/Seo'
import { Breadcrumbs, CtaBanner } from '../components/PageBlocks'
import { SITE, whatsapp } from '../data/site'

const disciplines = [
  ['Energía y respaldo', 'Infraestructura eléctrica, UPS, baterías, tableros y continuidad.'],
  ['Redes y conectividad', 'Cableado, fibra, Wi-Fi y certificación con entregables definidos.'],
  ['Confort y seguridad', 'Climatización, acceso, videovigilancia y protección de espacios.'],
  ['Espacios corporativos', 'Adecuación e interiorismo coordinados con la infraestructura técnica.'],
]

export default function About() {
  const path = '/nosotros/'
  const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Nosotros', path }]
  return (
    <>
      <Seo
        title="Nosotros: ingeniería e infraestructura | ADE System"
        description="Conoce cómo ADE System integra energía, redes, seguridad, climatización y espacios corporativos para empresas en Bogotá y Colombia."
        path={path}
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <header className="about-hero">
        <div className="content-shell">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Un solo equipo para coordinar infraestructura crítica.</h1>
          <p>ADE System diseña, instala y mantiene sistemas que deben funcionar juntos. El alcance se define mediante información técnica, visita y medición cuando corresponda.</p>
        </div>
      </header>
      <main className="about-page">
        <section className="content-shell about-intro">
          <h2>Ingeniería entendible para quien decide y útil para quien opera.</h2>
          <p>Trabajamos con responsables de infraestructura, operaciones, compras y gerencia. Por eso explicamos cada decisión con su alcance, sus límites y los entregables que recibirá el cliente.</p>
          <div className="about-disciplines">
            {disciplines.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>
        <section className="about-method">
          <div className="content-shell">
            <h2>Cómo trabajamos</h2>
            <ol>
              <li><strong>Diagnóstico.</strong><span>Entendemos carga, riesgo, restricciones y evidencia disponible.</span></li>
              <li><strong>Diseño.</strong><span>Definimos solución, alcance, responsabilidades y entregables.</span></li>
              <li><strong>Ejecución.</strong><span>Coordinamos suministro, instalación, pruebas y documentación.</span></li>
              <li><strong>Soporte.</strong><span>Acordamos mantenimiento y atención según la criticidad contratada.</span></li>
            </ol>
          </div>
        </section>
        <section className="content-shell about-contact">
          <h2>Información de contacto</h2>
          <p>{SITE.legalName} · {SITE.address.street} · {SITE.address.city}, Colombia.</p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a> · <a href={whatsapp()} target="_blank" rel="noopener noreferrer">{SITE.phone}</a></p>
          <Link className="btn btn-ghost" to="/proyectos/">Ver proyectos y alcances</Link>
        </section>
      </main>
      <CtaBanner title="Conversemos sobre el alcance real." text="Cuéntanos qué debe seguir operando, qué información tienes y qué necesitas decidir." whatsappMsg="Hola, quiero revisar un proyecto de infraestructura con ADE System." />
    </>
  )
}
