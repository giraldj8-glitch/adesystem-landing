import { useEffect, useMemo, useRef, useState } from 'react'
import Seo, { breadcrumbSchema, faqSchema } from '../components/Seo'
import { PageHero, FaqBlock, CtaBanner } from '../components/PageBlocks'
import LeadForm from '../components/LeadForm'
import { MEDIA } from '../data/media'
import { SITE } from '../data/site'
import { calculateCableSection } from '../lib/technicalCalculators'
import { formatNumber } from '../lib/ups'
import { track } from '../lib/siteEvents'

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Utilidades', path: '/utilidades/' },
  { name: 'Sección de cable', path: '/utilidades/calculadora-seccion-cable/' },
]

const faqs = [
  { q: '¿Esta sección sirve para instalar el circuito?', a: 'No. Use el resultado para revisar caída de tensión. Valide ampacidad, protección, temperatura, agrupamiento y RETIE.' },
  { q: '¿La longitud corresponde al recorrido completo?', a: 'Ingrese la longitud unidireccional. La fórmula incorpora retorno monofásico o factor trifásico.' },
  { q: '¿Por qué cambia la sección con la temperatura?', a: 'Aumente la resistividad con la temperatura. Espere mayor caída cuando caliente el conductor.' },
]

export default function CableCalculator() {
  const [values, setValues] = useState({ voltage: '120', current: '25', length: '30', dropPercent: '3', material: 'copper', phase: 'mono', temperature: '50' })
  const interacted = useRef(false)
  const tracked = useRef(false)
  const result = useMemo(() => calculateCableSection(values), [values])
  const update = (field, value) => {
    interacted.current = true
    setValues(current => ({ ...current, [field]: value }))
  }

  useEffect(() => {
    if (interacted.current && result.valid && !tracked.current) {
      tracked.current = true
      track('calculator_completed', { calculator: 'seccion-cable' })
    }
  }, [result])

  const schema = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Calculadora de sección de cable por caída de tensión',
    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'es-CO',
    url: `${SITE.url}/utilidades/calculadora-seccion-cable/`,
    description: 'Estima la sección mínima de cobre o aluminio por caída de tensión.',
  }

  return <>
    <Seo title="Calculadora de sección de cable y caída de tensión" description="Estima la sección de un cable de cobre o aluminio. Calcula caída de tensión monofásica y trifásica. Solicita validación RETIE antes de instalar." path="/utilidades/calculadora-seccion-cable/" schemas={[schema, breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
    <PageHero eyebrow="Infraestructura eléctrica" h1="Calculadora de sección de cable" color="#32D894" breadcrumbs={breadcrumbs} media={MEDIA.electrical} intro={[
      'Estime la sección por caída de tensión. Solicite validación eléctrica antes de instalar.',
    ]} />
    <main className="calculator-page">
      <section className="calculator-panel" aria-labelledby="cable-title">
        <div>
          <p className="section-label">1. Datos del circuito</p>
          <h2 id="cable-title">Ingrese corriente, distancia y caída permitida.</h2>
          <div className="converter-controls cable-controls">
            <label>Sistema<select value={values.phase} onChange={event => update('phase', event.target.value)}><option value="mono">CC o CA monofásica</option><option value="trifasico">CA trifásica</option></select></label>
            <label>Tensión (V)<input type="number" min="1" value={values.voltage} onChange={event => update('voltage', event.target.value)} /></label>
            <label>Corriente máxima (A)<input type="number" min="0.1" step="0.1" value={values.current} onChange={event => update('current', event.target.value)} /></label>
            <label>Longitud unidireccional (m)<input type="number" min="0.1" step="0.1" value={values.length} onChange={event => update('length', event.target.value)} /></label>
            <label>Caída permitida (%)<input type="number" min="0.1" max="10" step="0.1" value={values.dropPercent} onChange={event => update('dropPercent', event.target.value)} /></label>
            <label>Material<select value={values.material} onChange={event => update('material', event.target.value)}><option value="copper">Cobre</option><option value="aluminum">Aluminio</option></select></label>
            <label>Temperatura del conductor (°C)<input type="number" min="20" max="120" value={values.temperature} onChange={event => update('temperature', event.target.value)} /></label>
          </div>
        </div>
        <aside className="sizing-controls">
          <p className="section-label">Límite técnico</p>
          <h2>Use este cálculo solo para caída de tensión.</h2>
          <p>Valide ampacidad, aislamiento, canalización, agrupamiento, protecciones y corriente de cortocircuito.</p>
          <p>Aplique RETIE y la norma técnica vigente del proyecto.</p>
        </aside>
      </section>

      <section className="calculation-result" aria-live="polite">
        <p className="section-label">2. Resultado orientativo</p>
        {result.valid ? <>
          <div className="result-numbers">
            <div><span>Sección calculada</span><strong>{formatNumber(result.theoreticalSection, 2)} mm²</strong></div>
            <div><span>Sección comercial siguiente</span><strong>{result.recommendedSection ? `${result.recommendedSection} mm²` : 'Fuera de rango'}</strong></div>
            <div><span>Caída con sección elegida</span><strong>{result.actualDropPercent === null ? '—' : `${formatNumber(result.actualDropPercent, 2)} %`}</strong></div>
          </div>
          <h2>{result.recommendedSection ? `Revise ${result.recommendedSection} mm² como punto de partida.` : 'Solicite un diseño eléctrico específico.'}</h2>
          <p>La sección final puede aumentar por ampacidad o condiciones de instalación.</p>
        </> : <><h2>Ingrese valores válidos.</h2><p>Use una caída entre 0,1 % y 10 %.</p></>}
      </section>

      <section className="converter-section">
        <p className="section-label">Método</p>
        <h2>Calcule la resistividad según material y temperatura.</h2>
        <p>Use 2ρLI/ΔV para circuitos monofásicos. Use √3ρLI/ΔV para circuitos trifásicos.</p>
        <p>Consulte la <a href="https://www.se.com/sa/en/work/products/product-launch/electrical-installation-guide/" target="_blank" rel="noopener noreferrer">Electrical Installation Guide de Schneider Electric</a>.</p>
      </section>

      {result.valid && <LeadForm source="calculadora-seccion-cable" results={{ ...result, ...values }} submitLabel="Solicitar validación eléctrica" />}
    </main>
    <FaqBlock faqs={faqs} color="#32D894" />
    <CtaBanner title="Valide el circuito antes de comprar conductores." text="Revise carga, protecciones, canalización, caída de tensión y RETIE." whatsappMsg="Hola, quiero validar la sección de un circuito eléctrico." color="#32D894" />
  </>
}
