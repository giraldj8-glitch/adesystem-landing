import { Link } from 'react-router-dom'
import Seo, { breadcrumbSchema } from '../components/Seo'
import { PageHero } from '../components/PageBlocks'
import { MEDIA } from '../data/media'

const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Utilidades', path: '/utilidades/' }]

export default function Utilities() {
  return (
    <>
      <Seo
        title="Utilidades técnicas para infraestructura crítica | ADE System"
        description="Herramientas técnicas de ADE System para orientar la selección de UPS y revisar continuidad operativa. Resultados claros, con validación de ingeniería cuando aplica."
        path="/utilidades/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <PageHero eyebrow="Herramientas técnicas" h1="Utilidades para tomar una mejor primera decisión." color="#32D894" breadcrumbs={breadcrumbs} intro={[
        'Estas herramientas orientan una conversación técnica. No sustituyen una visita, las fichas del fabricante ni la revisión de la instalación.',
      ]} media={MEDIA.ups} />
      <section className="utilities-grid-section">
        <div className="utilities-grid">
          <article className="utility-card featured">
            <p>Disponible</p>
            <h2>Calculadora de UPS y conversor kVA/amperios</h2>
            <p>Suma cargas críticas, aplica factor de potencia y margen de crecimiento. Convierte kVA y amperios en sistemas monofásicos o trifásicos.</p>
            <Link className="btn btn-primary" to="/utilidades/calculadora-ups-kva/">Abrir calculadora</Link>
          </article>
          <article className="utility-card">
            <p>Disponible</p>
            <h2>Checklist de continuidad UPS</h2>
            <p>Revisa alimentación, baterías, alarmas, bypass, ambiente y evidencia mínima antes de una visita técnica.</p>
            <Link className="btn btn-ghost" to="/utilidades/checklist-continuidad-ups/">Ver checklist</Link>
          </article>
          <article className="utility-card">
            <p>Disponible</p>
            <h2>Calculadora de presupuesto PoE</h2>
            <p>Sume cámaras, teléfonos y access points. Compare consumo, margen y potencia disponible del switch.</p>
            <Link className="btn btn-ghost" to="/utilidades/calculadora-poe/">Calcular PoE</Link>
          </article>
          <article className="utility-card">
            <p>Disponible</p>
            <h2>Calculadora de sección de cable</h2>
            <p>Estime la sección por caída de tensión. Solicite validación RETIE antes de instalar.</p>
            <Link className="btn btn-ghost" to="/utilidades/calculadora-seccion-cable/">Calcular sección</Link>
          </article>
          <article className="utility-card muted">
            <p>Requiere ingeniería</p>
            <h2>Tableros y aire acondicionado</h2>
            <p>Solicite medición y visita. Evite recomendaciones automáticas sin condiciones de campo.</p>
          </article>
        </div>
      </section>
    </>
  )
}
