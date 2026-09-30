import { useEffect, useMemo, useRef, useState } from 'react'
import Seo, { breadcrumbSchema, faqSchema } from '../components/Seo'
import { PageHero, FaqBlock, CtaBanner } from '../components/PageBlocks'
import LeadForm from '../components/LeadForm'
import { MEDIA } from '../data/media'
import { SITE } from '../data/site'
import { POE_PRESETS, calculatePoe } from '../lib/technicalCalculators'
import { formatNumber } from '../lib/ups'
import { track } from '../lib/siteEvents'

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Utilidades', path: '/utilidades/' },
  { name: 'Calculadora PoE', path: '/utilidades/calculadora-poe/' },
]

const faqs = [
  { q: '¿Qué es el presupuesto PoE?', a: 'Sume la potencia máxima de todos los dispositivos PoE. Compare ese total con la potencia disponible del switch.' },
  { q: '¿Debo usar consumo típico o máximo?', a: 'Use el consumo máximo indicado por cada fabricante. Incluya calefactores, infrarrojos, radios y puertos auxiliares.' },
  { q: '¿Por qué debo reservar margen?', a: 'Reserve margen para pérdidas, arranques y crecimiento. Valide además la potencia máxima por puerto.' },
]

const standards = [
  ['IEEE 802.3af · Tipo 1', '15,4 W', '12,95 W'],
  ['IEEE 802.3at · Tipo 2', '30 W', '25,5 W'],
  ['IEEE 802.3bt · Tipo 3', '60 W', '51 W'],
  ['IEEE 802.3bt · Tipo 4', '90 W', '71,3 W'],
]

export default function PoeCalculator() {
  const [items, setItems] = useState([])
  const [budget, setBudget] = useState('370')
  const [margin, setMargin] = useState('20')
  const tracked = useRef(false)
  const result = useMemo(() => calculatePoe(items, budget, margin), [items, budget, margin])

  useEffect(() => {
    if (result.valid && !tracked.current) {
      tracked.current = true
      track('calculator_completed', { calculator: 'poe' })
    }
  }, [result.valid])

  const add = preset => setItems(current => [...current, { id: `${preset.id}-${Date.now()}`, name: preset.label, watts: preset.watts, quantity: 1 }])
  const update = (id, field, value) => setItems(current => current.map(item => item.id === id ? { ...item, [field]: value } : item))
  const remove = id => setItems(current => current.filter(item => item.id !== id))

  const schema = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Calculadora de presupuesto PoE de ADE System',
    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'es-CO',
    url: `${SITE.url}/utilidades/calculadora-poe/`,
    description: 'Calcula puertos, consumo PoE, margen y presupuesto requerido para switches empresariales.',
  }

  return <>
    <Seo title="Calculadora PoE para switches y access points | ADE System" description="Calcula el presupuesto PoE para cámaras, teléfonos y access points. Compara consumo, margen, puertos y potencia disponible del switch." path="/utilidades/calculadora-poe/" schemas={[schema, breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
    <PageHero eyebrow="Redes y conectividad" h1="Calculadora de presupuesto PoE" color="#611AD8" breadcrumbs={breadcrumbs} media={MEDIA.network} intro={[
      'Sume cámaras, teléfonos y access points. Compare la carga con el presupuesto PoE del switch.',
    ]} />
    <main className="calculator-page">
      <section className="calculator-panel" aria-labelledby="poe-title">
        <div>
          <p className="section-label">1. Dispositivos PoE</p>
          <h2 id="poe-title">Agregue cada dispositivo alimentado por el switch.</h2>
          <div className="preset-list">
            {POE_PRESETS.map(preset => <button key={preset.id} type="button" onClick={() => add(preset)}>{preset.label} · {preset.watts} W</button>)}
            <button type="button" onClick={() => add({ id: 'custom', label: 'Dispositivo personalizado', watts: '' })}>Dispositivo personalizado</button>
          </div>
          {items.length > 0 && <div className="load-table" role="region" aria-label="Dispositivos PoE agregados">
            <div className="load-row load-head"><span>Dispositivo</span><span>W máximos</span><span>Cantidad</span><span /></div>
            {items.map(item => <div className="load-row" key={item.id}>
              <input aria-label="Nombre del dispositivo" value={item.name} onChange={event => update(item.id, 'name', event.target.value)} />
              <input aria-label={`Potencia máxima de ${item.name}`} type="number" min="0.1" step="0.1" value={item.watts} onChange={event => update(item.id, 'watts', event.target.value)} />
              <input aria-label={`Cantidad de ${item.name}`} type="number" min="1" value={item.quantity} onChange={event => update(item.id, 'quantity', event.target.value)} />
              <button className="remove-item" type="button" onClick={() => remove(item.id)}>Eliminar</button>
            </div>)}
          </div>}
        </div>
        <div className="sizing-controls">
          <label>Presupuesto PoE del switch (W)<input type="number" min="1" value={budget} onChange={event => setBudget(event.target.value)} /></label>
          <label>Margen de diseño (%)<input type="number" min="0" max="100" value={margin} onChange={event => setMargin(event.target.value)} /></label>
          <p>Consulte la ficha del switch. No confunda potencia total con potencia por puerto.</p>
        </div>
      </section>

      <section className="calculation-result" aria-live="polite">
        <p className="section-label">2. Resultado</p>
        {result.valid ? <>
          <div className="result-numbers">
            <div><span>Puertos requeridos</span><strong>{result.ports}</strong></div>
            <div><span>Consumo conectado</span><strong>{formatNumber(result.watts, 1)} W</strong></div>
            <div><span>Presupuesto requerido</span><strong>{formatNumber(result.designWatts, 1)} W</strong></div>
          </div>
          <h2>{result.fits ? `Reserve ${formatNumber(result.remainingWatts, 1)} W en el switch.` : `Faltan ${formatNumber(Math.abs(result.remainingWatts), 1)} W de presupuesto PoE.`}</h2>
          <p>Valide puertos, estándar IEEE, cableado, temperatura, uplinks y respaldo UPS.</p>
        </> : <><h2>Agregue un dispositivo y confirme el presupuesto del switch.</h2><p>Reemplace cada valor por el consumo máximo de la ficha técnica.</p></>}
      </section>

      <section className="converter-section source-table" aria-labelledby="poe-standards">
        <p className="section-label">Referencia de potencia</p>
        <h2 id="poe-standards">Compare la potencia del puerto y del dispositivo.</h2>
        <div className="technical-table" role="region" aria-label="Potencia por estándar PoE">
          <div><strong>Estándar</strong><strong>Entrega máxima PSE</strong><strong>Disponible mínima PD</strong></div>
          {standards.map(row => <div key={row[0]}>{row.map(value => <span key={value}>{value}</span>)}</div>)}
        </div>
        <p>Consulte la <a href="https://ethernetalliance.org/poecert/" target="_blank" rel="noopener noreferrer">certificación PoE de Ethernet Alliance</a> para ampliar la referencia.</p>
      </section>

      {result.valid && <LeadForm source="calculadora-poe" results={{ ...result, switch_budget_watts: Number(budget), margin_percent: Number(margin) }} submitLabel="Validar switch, cableado y UPS" />}
    </main>
    <FaqBlock faqs={faqs} color="#611AD8" />
    <CtaBanner title="Valide toda la red antes de comprar el switch." text="Revise PoE, uplinks, VLAN, cableado, rack y respaldo UPS." whatsappMsg="Hola, quiero validar el presupuesto PoE de una red empresarial." color="#611AD8" />
  </>
}
