import PortfolioMap from '../components/PortfolioMap'
import { systemsForPage } from '../data/systems'
import Seo, { breadcrumbSchema, faqSchema, serviceSchema } from '../components/Seo'
import { PageHero, BenefitsGrid, TechnicalScope, FaqBlock, RelatedLinks, CtaBanner } from '../components/PageBlocks'
import { getCaptura } from '../data/capturas'
import { getServicioPage } from '../data/serviciosPages'
import { PUBLISHED_POSTS } from '../data/blogPosts'
import { mediaForCaptura } from '../data/media'
import UpsDiagnostic from '../components/UpsDiagnostic'

/* Template de página de captura por intent, Nivel 1 SEO */
export default function Captura({ data }) {
  const path = `/${data.slug}/`
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: data.nav, path },
  ]

  const links = [
    ...data.related.map(slug => {
      const c = getCaptura(slug)
      return c && { to: `/${c.slug}/`, label: c.nav, color: c.color }
    }),
    ...data.servicios.map(slug => {
      const s = getServicioPage(slug)
      return s && { to: `/servicios/${s.slug}/`, label: s.nombre, color: s.color }
    }),
    PUBLISHED_POSTS.some(post => post.categoria === data.blogCat) && { to: `/blog/categoria/${data.blogCat}/`, label: 'Artículos relacionados', color: '#8A95A3' },
  ].filter(Boolean)

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={path}
        schemas={[
          serviceSchema({ name: data.keyword, description: data.metaDescription, path }),
          faqSchema(data.faqs),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow={data.eyebrow}
        h1={data.h1}
        intro={data.intro}
        color={data.color}
        breadcrumbs={breadcrumbs}
        action={`Hola, quiero orientación sobre ${data.nav || data.nombre}.`}
        media={mediaForCaptura(data.slug)}
      />
      <PortfolioMap key={data.slug} compact currentPath={path} systemIds={systemsForPage(data.slug, mediaForCaptura(data.slug).key)} />
      {data.slug === 'mantenimiento-ups' && <UpsDiagnostic />}
      <BenefitsGrid items={data.benefits} color={data.color} title="Por qué con ADE System" />
      <TechnicalScope data={data.scope} color={data.color} />
      <FaqBlock faqs={data.faqs} color={data.color} />
      <RelatedLinks links={links} />
      <CtaBanner
        title={data.cta.title}
        text={data.cta.text}
        whatsappMsg={data.cta.whatsapp}
        color={data.color}
      />
    </>
  )
}
