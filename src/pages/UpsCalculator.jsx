import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo, { breadcrumbSchema, faqSchema } from '../components/Seo'
import { PageHero, FaqBlock } from '../components/PageBlocks'
import LeadForm from '../components/LeadForm'
import { UPS_PRESETS, ampsToKva, calculateUps, formatNumber, kvaToAmps } from '../lib/ups'
import { SITE } from '../data/site'
import { MEDIA } from '../data/media'
import { track } from '../lib/siteEvents'

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Utilidades', path: '/utilidades/' },
  { name: 'Calculadora UPS y kVA', path: '/utilidades/calculadora-ups-kva/' },
]

const faqs = [
  { q: '¿Cómo se calcula el tamaño de un UPS?', a: 'Se suman los vatios de las cargas que realmente se respaldarán. Se convierten a VA dividiendo entre el factor de potencia, y se agrega un margen de crecimiento. El modelo final también debe cumplir con su capacidad real en W y con la instalación eléctrica.' },
  { q: '¿Por qué la calculadora no muestra minutos de autonomía?', a: 'La autonomía depende del modelo exacto de UPS, el banco de baterías, la carga y sus curvas de descarga. Sin fichas oficiales aprobadas, mostrar minutos sería una estimación poco fiable.' },
  { q: '¿Sirve para cargas monofásicas y trifásicas?', a: 'Sí. El conversor aplica kVA = V × A / 1000 en monofásico y kVA = √3 × V × A / 1000 en trifásico. La calculadora de UPS dimensiona carga en W, VA y kVA.' },
]

function calculatorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora UPS y kVA de ADE System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'es-CO',
    url: `${SITE.url}/utilidades/calculadora-ups-kva/`,
    description: 'Calculadora orientativa de potencia UPS y conversor kVA/amperios para empresas en Colombia.',
  }
}

export default function UpsCalculator() {
  const [items, setItems] = useState([])
  const [powerFactor, setPowerFactor] = useState('0.9')
  const [margin, setMargin] = useState('25')
  const [autonomy, setAutonomy] = useState('15')
  const [converter, setConverter] = useState({ direction: 'kva-to-amps', value: '3', voltage: '120', phase: 'mono' })
  const tracked = useRef(false)
  const result = useMemo(() => calculateUps(items, powerFactor, margin), [items, powerFactor, margin])
  const conversion = converter.direction === 'kva-to-amps'
    ? kvaToAmps(converter.value, converter.voltage, converter.phase)
    : ampsToKva(converter.value, converter.voltage, converter.phase)

  useEffect(() => {
    if (result.valid && !tracked.current) {
      tracked.current = true
      track('calculator_completed', { calculator: 'ups-kva' })
    }
  }, [result.valid])

  function addPreset(preset) {
    setItems(current => [...current, { id: `${preset.id}-${Date.now()}`, name: preset.label, watts: preset.watts, quantity: 1 }])
  }
  function addCustom() {
    setItems(current => [...current, { id: `custom-${Date.now()}`, name: 'Equipo personalizado', watts: '', quantity: 1 }])
  }
  function updateItem(id, field, value) {
    setItems(current => current.map(item => item.id === id ? { ...item, [field]: value } : item))
  }
  function removeItem(id) { setItems(current => current.filter(item => item.id !== id)) }

  const resultsForLead = result.valid ? {
    watts: result.watts, va: result.va, required_kva: result.requiredKva,
    recommended_kva: result.recommendedKva, power_factor: Number(powerFactor), margin_percent: Number(margin), target_autonomy_minutes: Number(autonomy),
  } : null

  return (
    <>
      <Seo
        title="Calculadora UPS kVA y conversor de amperios | ADE System Colombia"
        description="Calcula la potencia orientativa de un UPS en W, VA y kVA; convierte kVA y amperios para sistemas monofásicos y trifásicos en Colombia."
        path="/utilidades/calculadora-ups-kva/"
        schemas={[calculatorSchema(), breadcrumbSchema(breadcrumbs), faqSchema(faqs)]}
      />
      <PageHero eyebrow="Utilidad técnica" h1="Calculadora de UPS y conversor kVA/amperios" color="#32D894" breadcrumbs={breadcrumbs} intro={[
        'Respuesta directa: suma solo la carga crítica, define el factor de potencia y agrega crecimiento. El resultado es una base de dimensionamiento; la autonomía exacta requiere modelo, baterías y curvas del fabricante.',
      ]} media={MEDIA.ups} />
      <main className="calculator-page">
        <section className="calculator-panel" aria-labelledby="ups-title">
          <div>
            <p className="section-label">1. Carga crítica</p>
            <h2 id="ups-title">Agrega los equipos que sí necesitan respaldo.</h2>
            <div className="preset-list">
              {UPS_PRESETS.map(preset => <button key={preset.id} type="button" onClick={() => addPreset(preset)}>{preset.label} · {preset.watts} W</button>)}
              <button type="button" onClick={addCustom}>Equipo personalizado</button>
            </div>
            {items.length > 0 && <div className="load-table" role="region" aria-label="Cargas agregadas">
              <div className="load-row load-head"><span>Equipo</span><span>W por unidad</span><span>Cantidad</span><span /></div>
              {items.map(item => <div className="load-row" key={item.id}>
                <input aria-label="Nombre del equipo" value={item.name} onChange={event => updateItem(item.id, 'name', event.target.value)} />
                <input aria-label={`Vatios por unidad de ${item.name}`} type="number" min="1" value={item.watts} onChange={event => updateItem(item.id, 'watts', event.target.value)} />
                <input aria-label={`Cantidad de ${item.name}`} type="number" min="1" value={item.quantity} onChange={event => updateItem(item.id, 'quantity', event.target.value)} />
                <button className="remove-item" type="button" onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.name}`}>Eliminar</button>
              </div>)}
            </div>}
          </div>
          <div className="sizing-controls">
            <label>Factor de potencia de diseño<input type="number" min="0.5" max="1" step="0.01" value={powerFactor} onChange={event => setPowerFactor(event.target.value)} /></label>
            <label>Margen de crecimiento (%)<input type="number" min="0" max="100" value={margin} onChange={event => setMargin(event.target.value)} /></label>
            <label>Autonomía objetivo (minutos)<input type="number" min="1" value={autonomy} onChange={event => setAutonomy(event.target.value)} /></label>
            <p>La autonomía objetivo se registra para la cotización. No se muestran minutos estimados sin curvas oficiales del UPS y sus baterías.</p>
          </div>
        </section>
        <section className="calculation-result" aria-live="polite">
          <p className="section-label">2. Resultado orientativo</p>
          {result.valid ? <>
            <div className="result-numbers">
              <div><span>Carga crítica</span><strong>{formatNumber(result.watts)} W</strong></div>
              <div><span>Potencia aparente</span><strong>{formatNumber(result.va)} VA</strong></div>
              <div><span>Con margen</span><strong>{formatNumber(result.requiredKva, 2)} kVA</strong></div>
            </div>
            <h2>{result.recommendedKva ? `Siguiente capacidad estándar: ${result.recommendedKva} kVA` : 'La capacidad supera el rango estándar de esta herramienta.'}</h2>
            <p>Valida también la potencia de salida en W, el tipo de UPS, la tensión, protecciones, bypass y el banco de baterías del modelo seleccionado.</p>
          </> : <>
            <h2>Agrega al menos una carga válida.</h2>
            <p>Usa los presets como punto de partida y reemplaza sus W por la placa o ficha técnica del equipo cuando la tengas.</p>
          </>}
        </section>
        {result.valid && <LeadForm source="calculadora-ups-kva" results={resultsForLead} submitLabel="Recibir reporte y validar autonomía" />}
        <section className="converter-section" aria-labelledby="converter-title">
          <p className="section-label">Conversor eléctrico</p>
          <h2 id="converter-title">kVA y amperios según tensión y sistema</h2>
          <div className="converter-controls">
            <label>Conversión<select value={converter.direction} onChange={event => setConverter(current => ({ ...current, direction: event.target.value }))}><option value="kva-to-amps">kVA a amperios</option><option value="amps-to-kva">Amperios a kVA</option></select></label>
            <label>{converter.direction === 'kva-to-amps' ? 'kVA' : 'Amperios'}<input type="number" min="0" step="0.01" value={converter.value} onChange={event => setConverter(current => ({ ...current, value: event.target.value }))} /></label>
            <label>Tensión (V)<input type="number" min="1" value={converter.voltage} onChange={event => setConverter(current => ({ ...current, voltage: event.target.value }))} /></label>
            <label>Sistema<select value={converter.phase} onChange={event => setConverter(current => ({ ...current, phase: event.target.value }))}><option value="mono">Monofásico</option><option value="trifasico">Trifásico</option></select></label>
          </div>
          <output>{conversion === null ? 'Ingresa valores mayores que cero.' : converter.direction === 'kva-to-amps' ? `${formatNumber(conversion, 2)} A` : `${formatNumber(conversion, 3)} kVA`}</output>
          <p>Fórmula: monofásico kVA = V × A / 1.000. Trifásico kVA = √3 × V × A / 1.000.</p>
          <p><Link to="/blog/como-calcular-kva-ups/">Lea la guía para calcular kVA de una UPS →</Link></p>
        </section>
      </main>
      <FaqBlock faqs={faqs} color="#32D894" />
    </>
  )
}
