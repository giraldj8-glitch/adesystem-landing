import { assetUrl } from '../lib/assets.js'
import { Link } from 'react-router-dom'
import { SITE, whatsapp } from '../data/site'

const groups = [
  ['Servicios', [
    ['Arquitectura eléctrica', '/servicios/arquitectura-electrica/'],
    ['Arquitectura de red', '/servicios/arquitectura-de-red/'],
    ['Confort y seguridad', '/servicios/confort-y-seguridad/'],
    ['Arquitectura e interiorismo', '/servicios/arquitectura-e-interiorismo/'],
    ['Todos los servicios', '/servicios/'],
  ]],
  ['Soluciones', [
    ['UPS para empresas', '/ups-empresas/'],
    ['Mantenimiento de UPS', '/mantenimiento-ups/'],
    ['Baterías para UPS', '/baterias-ups/'],
    ['Alquiler de UPS', '/alquiler-ups-bogota/'],
    ['Mantenimiento de aire', '/mantenimiento-aire-acondicionado/'],
    ['Certificación cobre y fibra', '/certificacion-cableado-cobre-fibra/'],
  ]],
  ['Recursos', [
    ['Blog técnico', '/blog/'],
    ['Guía de compra UPS', '/blog/como-elegir-ups-para-empresa/'],
    ['Proyectos y casos', '/proyectos/'],
  ]],
  ['Utilidades', [
    ['Calculadora UPS y kVA', '/utilidades/calculadora-ups-kva/'],
    ['Calculadora PoE', '/utilidades/calculadora-poe/'],
    ['Sección de cable', '/utilidades/calculadora-seccion-cable/'],
    ['Checklist continuidad UPS', '/utilidades/checklist-continuidad-ups/'],
  ]],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="ADE System, Inicio"><img src={assetUrl('/adesystem-logo.png')} width="170" height="50" alt="Adesystem Ingeniería S.A.S. - Lo hacemos posible" /></Link>
            <p>Infraestructura crítica para empresas en Bogotá y proyectos en Colombia.</p>
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          {groups.map(([title, links]) => (
            <nav key={title} aria-label={title}><h2>{title}</h2>{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</nav>
          ))}
        </div>
        <div className="footer-company">
          <nav aria-label="Empresa">
            <Link to="/nosotros/">Nosotros</Link>
            <Link to="/sectores/">Sectores</Link>
            <Link to="/#contacto">Contacto</Link>
            <Link to="/politica-tratamiento-datos/">Política de datos</Link>
          </nav>
          <p>{SITE.address.street} · Bogotá, Colombia · Soporte según contrato</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Adesystem Ingeniería S.A.S. · Todos los derechos reservados</p>
          <p>Diseño web por <span>Adesystem®</span></p>
        </div>
      </div>
      <a className="whatsapp-float" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Chat en WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </footer>
  )
}
