import { Link } from 'react-router-dom'

const priorities = [
  {
    title: 'UPS, baterías y respaldo temporal',
    text: 'Dimensionamiento, suministro, diagnóstico, mantenimiento y alquiler según carga, tensión y continuidad requerida.',
    links: [['Calcular UPS', '/utilidades/calculadora-ups-kva/'], ['Diagnóstico', '/diagnostico-ups-banco-baterias/'], ['Alquiler', '/alquiler-ups-bogota/']],
    color: '#32D894',
  },
  {
    title: 'Aire acondicionado empresarial',
    text: 'Selección, instalación, mantenimiento y climatización de precisión para oficinas y cuartos técnicos.',
    links: [['Mantenimiento', '/mantenimiento-aire-acondicionado/'], ['Clima de precisión', '/aire-acondicionado-precision/']],
    color: '#345FEA',
  },
  {
    title: 'Certificación de cobre y fibra',
    text: 'Pruebas por enlace, reportes identificables y alcance OLTS u OTDR definido antes de medir.',
    links: [['Ver certificación', '/certificacion-cableado-cobre-fibra/'], ['Cableado', '/cableado-estructurado-bogota/']],
    color: '#611AD8',
  },
]

export default function CommercialPriorities() {
  return (
    <section className="commercial-priorities" aria-labelledby="priority-title">
      <div className="content-shell">
        <div className="commercial-heading">
          <h2 id="priority-title">Empieza por la necesidad que hoy pone en riesgo la operación.</h2>
          <p>Elija lo que necesita resolver: mantener sus equipos encendidos, controlar la temperatura o verificar sus conexiones.</p>
        </div>
        <div className="commercial-grid">
          {priorities.map(item => (
            <article key={item.title} style={{ '--priority-color': item.color }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div>{item.links.map(([label, to]) => <Link key={to} to={to}>{label} →</Link>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
