import PortfolioMap from '../components/PortfolioMap'
import { systemsForPage } from '../data/systems'
import Seo, { breadcrumbSchema, serviceSchema } from '../components/Seo'
import { PageHero, BenefitsGrid, SolucionesDestacadas, SolucionesMarquee, CtaBanner } from '../components/PageBlocks'
import { getCaptura } from '../data/capturas'
import { mediaForSector } from '../data/media'

/* Template de página por sector, Nivel 3 SEO, con casos reales como anclas */
export default function Sector({ data }) {
  const path = `/sectores/${data.slug}/`
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Sectores', path: '/sectores/' },
    { name: data.nombre, path },
  ]

  const soluciones = data.capturas.map(slug => {
    const c = getCaptura(slug)
    return c && { to: `/${c.slug}/`, label: c.nav, desc: c.cta.title, color: c.color }
  }).filter(Boolean)

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={path}
        schemas={[
          serviceSchema({ name: data.h1, description: data.metaDescription, path }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow={`Sectores · ${data.anclas.join(' · ')}`}
        h1={data.h1}
        intro={data.intro}
        color={data.color}
        breadcrumbs={breadcrumbs}
        action={`Hola, quiero orientación sobre ${data.nav || data.nombre}.`}
        media={mediaForSector(data.slug)}
      />
      <PortfolioMap key={data.slug} compact currentPath={path} systemIds={systemsForPage(data.slug, mediaForSector(data.slug).key)} />
      {/* Primero lo accionable: las soluciones clickeables, sin fricción */}
      <SolucionesDestacadas items={soluciones} />
      <BenefitsGrid items={data.necesidades} color={data.color} title="Lo que este sector necesita" />
      <SolucionesMarquee />
      <CtaBanner
        title="Tu sector tiene reglas propias. Las conocemos."
        text="Agenda un diagnóstico con quien ya trabaja en tu industria."
        whatsappMsg={`Hola, somos una empresa del sector ${data.nombre} y necesitamos información.`}
        color={data.color}
      />
    </>
  )
}
