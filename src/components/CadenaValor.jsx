const steps = [
  ['Diagnóstico', 'Levantamos condiciones, carga, riesgos y restricciones.'],
  ['Diseño', 'Definimos solución, responsabilidades y entregables.'],
  ['Ejecución', 'Coordinamos suministro, instalación, pruebas y documentación.'],
  ['Soporte', 'Acordamos mantenimiento y atención según la criticidad.'],
]

export default function CadenaValor() {
  return (
    <section className="method-section" aria-labelledby="method-title">
      <div className="content-shell">
        <h2 id="method-title">Del diagnóstico al soporte, con responsabilidades claras.</h2>
        <ol>{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </section>
  )
}
