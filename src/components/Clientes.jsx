const SECTORES = [
  ['Operación financiera', 'Financiero'],
  ['Laboratorios y salud', 'Farmacéutico'],
  ['Servicios de tecnología', 'Tecnología'],
  ['Producción y oficinas', 'Corporativo'],
  ['Medios y estudios', 'Entretenimiento'],
]

export default function Clientes() {
  return (
    <section id="clientes" className="clients-section">
      <div className="section-inner">
        <p className="section-label">Sectores atendidos</p>
        <h2>Experiencia en operaciones con exigencias distintas.</h2>
        <div className="clients-grid">
          {SECTORES.map(([nombre, sector]) => (
            <div key={nombre} className="client-reference">
              <strong>{nombre}</strong>
              <span>{sector}</span>
            </div>
          ))}
        </div>
        <p className="clients-note">Los casos públicos se presentan por sector, alcance y resultado autorizado.</p>
      </div>
    </section>
  )
}
