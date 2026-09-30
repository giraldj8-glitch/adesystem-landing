import Seo, { breadcrumbSchema } from '../components/Seo'
import { Breadcrumbs } from '../components/PageBlocks'
import { SITE } from '../data/site'

export default function PrivacyPolicy() {
  const path = '/politica-tratamiento-datos/'
  const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Política de datos', path }]
  return (
    <>
      <Seo
        title="Política de tratamiento de datos | ADE System"
        description="Información sobre el tratamiento de datos personales y los canales de atención de Adesystem Ingeniería S.A.S."
        path={path}
        noindex
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <main className="legal-page">
        <div className="content-shell">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Política de tratamiento de datos personales</h1>
          <p>Adesystem Ingeniería S.A.S. utiliza los datos enviados voluntariamente para responder solicitudes, preparar reportes solicitados y realizar seguimiento comercial relacionado.</p>
          <h2>Datos recopilados</h2>
          <p>Los formularios pueden solicitar nombre, correo corporativo, empresa, cargo, procedencia de la visita y resultados de una herramienta técnica.</p>
          <h2>Derechos y contacto</h2>
          <p>Puedes solicitar consulta, actualización, rectificación o supresión mediante <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Documento vigente</h2>
          <p>Consulta la <a href="https://drive.google.com/file/d/13Ac6-AfuOE6kjys7-ilFQ0ZTfQ51SrLZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">política institucional completa</a>. Esta página resume su aplicación a los formularios del sitio y debe revisarse cuando cambie el documento institucional.</p>
        </div>
      </main>
    </>
  )
}
