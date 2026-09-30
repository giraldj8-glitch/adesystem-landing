import { useState } from 'react'
import Seo, { breadcrumbSchema, howToSchema } from '../components/Seo'
import { PageHero } from '../components/PageBlocks'
import LeadForm from '../components/LeadForm'
import { MEDIA } from '../data/media'

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Utilidades', path: '/utilidades/' },
  { name: 'Checklist de continuidad UPS', path: '/utilidades/checklist-continuidad-ups/' },
]

const CHECKS = [
  ['Carga crítica', 'Existe un inventario actualizado de qué equipos deben permanecer encendidos y sus W nominales.'],
  ['Capacidad', 'El UPS tiene margen para crecimiento y su potencia de salida en W cubre la carga real.'],
  ['Baterías', 'Se conoce fecha de instalación, estado, pruebas y reemplazos; no se mezclan baterías de edades diferentes.'],
  ['Alarmas', 'Las alarmas locales y remotas se prueban y llegan a un responsable definido.'],
  ['Bypass y mantenimiento', 'El procedimiento de bypass y la ventana de mantenimiento están documentados y probados.'],
  ['Alimentación', 'Circuito, tierra, protecciones, tensión y capacidad del tablero se revisaron para el UPS instalado.'],
  ['Ambiente', 'Temperatura, ventilación, limpieza y acceso al equipo no reducen la vida útil de baterías o electrónica.'],
  ['Evidencia', 'Hay bitácora, reporte de prueba, ficha del equipo y contacto de soporte disponibles para auditoría.'],
]

export default function ChecklistUps() {
  const [unlocked, setUnlocked] = useState(false)
  return (
    <>
      <Seo title="Checklist de continuidad para UPS empresarial | ADE System" description="Checklist consultable para revisar capacidad, baterías, bypass, alarmas y evidencia de un UPS empresarial antes de una visita técnica." path="/utilidades/checklist-continuidad-ups/" schemas={[
        breadcrumbSchema(breadcrumbs),
        howToSchema({ name: 'Cómo revisar la continuidad de un UPS empresarial', description: 'Ocho comprobaciones iniciales antes de solicitar una validación técnica.', path: '/utilidades/checklist-continuidad-ups/', steps: CHECKS.map(([name, description]) => `${name}: ${description}`) }),
      ]} />
      <PageHero eyebrow="Recurso de continuidad" h1="Checklist para revisar un UPS antes de que haya un corte." color="#32D894" breadcrumbs={breadcrumbs} intro={[
        'Úsalo como revisión interna. No reemplaza una prueba de banco de baterías, una visita técnica ni las indicaciones de fabricante.',
      ]} media={MEDIA.ups} />
      <main className="checklist-page">
        {!unlocked ? <section className="checklist-gate">
          <p className="section-label">Vista previa</p>
          <h2>Ocho verificaciones que cambian una compra o un mantenimiento.</h2>
          <ul>{CHECKS.slice(0, 3).map(([name]) => <li key={name}>{name}</li>)}</ul>
          <LeadForm source="checklist-continuidad-ups" results={{ asset: 'checklist-continuidad-ups' }} submitLabel="Ver checklist completo" onSuccess={() => setUnlocked(true)} />
        </section> : <section className="checklist-content">
          <div className="checklist-print-bar"><h2>Checklist de continuidad UPS</h2><button className="btn btn-ghost" onClick={() => window.print()}>Imprimir / guardar PDF</button></div>
          <ol>{CHECKS.map(([name, description]) => <li key={name}><h3>{name}</h3><p>{description}</p><label><input type="checkbox" /> Revisado</label></li>)}</ol>
          <p className="checklist-disclaimer">Si una condición no se cumple, no asumas que el UPS protegerá la operación durante el tiempo esperado. Solicita una validación de capacidad y autonomía.</p>
        </section>}
      </main>
    </>
  )
}
