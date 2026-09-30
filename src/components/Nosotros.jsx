import { Link } from 'react-router-dom'

export default function Nosotros() {
  return (
    <section id="nosotros" className="about-summary">
      <div className="content-shell">
        <div>
          <h2>Infraestructura explicada con claridad y entregada con evidencia.</h2>
          <p>Adesystem integra energía, conectividad, seguridad, climatización y espacios corporativos. El equipo acompaña decisiones técnicas desde el diagnóstico hasta el soporte acordado.</p>
        </div>
        <div className="about-summary-actions">
          <Link className="btn btn-ghost" to="/nosotros/">Conocer Adesystem</Link>
          <Link to="/proyectos/">Ver proyectos y alcances →</Link>
        </div>
      </div>
    </section>
  )
}
