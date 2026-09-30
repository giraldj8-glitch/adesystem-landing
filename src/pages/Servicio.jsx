import PortfolioMap from '../components/PortfolioMap'
import { systemsForPage } from '../data/systems'
import Seo, { breadcrumbSchema, serviceSchema } from '../components/Seo'
import { PageHero, BenefitsGrid, RelatedLinks, CtaBanner } from '../components/PageBlocks'
import { getCaptura } from '../data/capturas'
import { mediaForServicio } from '../data/media'
import { PUBLISHED_POSTS } from '../data/blogPosts'

/* Template de página de servicio por pilar, Nivel 2 SEO */
export default function Servicio({ data }) {
  const path = `/servicios/${data.slug}/`
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios/' },
    { name: data.nombre, path },
  ]

  const links = data.capturas.map(slug => {
    const c = getCaptura(slug)
    return c && { to: `/${c.slug}/`, label: c.nav, color: c.color }
  }).filter(Boolean)
  if (PUBLISHED_POSTS.some(post => post.categoria === data.blogCat)) {
    links.push({ to: `/blog/categoria/${data.blogCat}/`, label: 'Artículos relacionados', color: '#8A95A3' })
  }

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={path}
        schemas={[
          serviceSchema({ name: data.nombre, description: data.metaDescription, path }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow={`Pilar ${data.num} · ${data.tagline}`}
        h1={data.h1}
        intro={data.intro}
        color={data.color}
        breadcrumbs={breadcrumbs}
        action={`Hola, quiero orientación sobre ${data.nav || data.nombre}.`}
        media={mediaForServicio(data.slug)}
      />
      <PortfolioMap key={data.slug} compact currentPath={path} systemIds={systemsForPage(data.slug, mediaForServicio(data.slug).key)} />
      <BenefitsGrid items={data.items} color={data.color} title="Lo que hacemos" />
      <RelatedLinks title="Soluciones específicas" links={links} />
      <CtaBanner
        title="Hablemos de tu proyecto."
        text="Cuéntanos el alcance y recibe una orientación inicial antes de cotizar."
        whatsappMsg={`Hola, quiero información sobre ${data.nombre}.`}
        color={data.color}
      />
    </>
  )
}
