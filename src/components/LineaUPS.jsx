import { assetUrl } from '../lib/assets.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { whatsapp } from '../data/site'
import DetailImage from './DetailImage'

const STEPS = [
  { label: '01 · Se va la luz', title: '¿Qué se detiene cuando se va la luz?', text: 'Sin respaldo, los equipos que dependen de la red se apagan. Piense en sus ventas, archivos y atención al cliente: ¿qué necesita seguir funcionando?', image: 'datacenter', alt: 'Render de los servidores y equipos que necesitan respaldo', flow: ['Red interrumpida', 'Sin respaldo', 'Equipos detenidos'] },
  { label: '02 · Responde la UPS', title: 'La UPS le da tiempo para actuar.', text: 'Sus baterías alimentan los equipos conectados durante el corte. La autonomía depende del consumo, del modelo y del estado de las baterías; se valida para su operación.', image: 'ups', alt: 'Render de una UPS y su banco de baterías', flow: ['Red interrumpida', 'Baterías de la UPS', 'Cargas respaldadas'] },
  { label: '03 · Entra la planta', title: 'Si el corte continúa, la planta toma el relevo.', text: 'En una instalación diseñada para ello, la planta arranca y la transferencia conecta el respaldo. La UPS cubre la transición de las cargas críticas. Ambos equipos necesitan pruebas y mantenimiento.', image: 'planta', alt: 'Render de una planta eléctrica con tablero de transferencia', flow: ['Planta estable', 'Transferencia + UPS', 'Cargas respaldadas'] },
]

export default function LineaUPS() {
  const [index, setIndex] = useState(0)
  const step = STEPS[index]
  return (
    <section id="ups" className="blackout-section" aria-labelledby="blackout-title">
      <div className="portfolio-map-wrap">
        <p className="section-label">Continuidad, sin palabras complicadas</p>
        <h2 id="blackout-title">¿Cuánto vale una hora<br />sin luz en su negocio?</h2>
        <p className="blackout-intro">Entienda cómo trabajan la UPS y la planta antes de elegir su respaldo.</p>
        <div className="blackout-steps" aria-label="Etapas de un apagón">
          {STEPS.map((item, i) => <button key={item.label} type="button" aria-pressed={index === i} onClick={() => setIndex(i)}>{item.label}</button>)}
        </div>
        <div className="blackout-content">
          <div className="blackout-copy" aria-live="polite" aria-atomic="true">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <ol className="blackout-flow">{step.flow.map(label => <li key={label}>{label}</li>)}</ol>
            <a className="btn blackout-cta" href={whatsapp('Hola, quiero saber qué equipos debo respaldar y qué UPS necesita mi empresa.')} target="_blank" rel="noopener noreferrer">Quiero revisar mi respaldo →</a>
            <Link className="blackout-secondary" to="/utilidades/calculadora-ups-kva/">Ya conozco mis equipos: calcular UPS →</Link>
          </div>
          <div><DetailImage key={step.image} src={assetUrl(`/images/detalle-${step.image}-adesystem.webp`)} alt={step.alt} /><p className="blackout-caption">Visualización conceptual · La solución se dimensiona para cada empresa.</p></div>
        </div>
      </div>
    </section>
  )
}
