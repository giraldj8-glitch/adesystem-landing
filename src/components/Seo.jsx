import { useContext, useEffect } from 'react'
import { SITE, LOCAL_BUSINESS_SCHEMA } from '../data/site'
import { SeoContext } from '../seo-context'

/*
 * Gestión de <head> por página: título, meta description, canonical,
 * Open Graph / Twitter y schema.org (JSON-LD).
 * Cada página del sitio declara su propio <Seo …/>, nunca se hereda el default.
 */

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/', schemas = [], type = 'website', noindex = false }) {
  const collector = useContext(SeoContext)
  const url = `${SITE.url}${path}`
  const image = `${SITE.url}/images/hero-infraestructura-adesystem.jpg`
  const allSchemas = path === '/' ? [LOCAL_BUSINESS_SCHEMA, ...schemas] : schemas

  if (collector) collector.current = { title, description, path, type, noindex, schemas: allSchemas }

  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertCanonical(url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('property', 'og:locale', 'es_CO')
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', 'Infraestructura crítica empresarial y equipo técnico de ADE System')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    const tags = allSchemas.map(schema => {
      const tag = document.createElement('script')
      tag.type = 'application/ld+json'
      tag.dataset.seo = 'true'
      tag.textContent = JSON.stringify(schema)
      document.head.appendChild(tag)
      return tag
    })

    return () => tags.forEach(t => t.remove())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, type, noindex, schemas])

  return null
}

export function howToSchema({ name, description, path, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: `${SITE.url}${path}`,
    step: steps.map((text, position) => ({ '@type': 'HowToStep', position: position + 1, text })),
  }
}

/* Schema de migas de pan, ayuda a Google a entender la jerarquía */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

/* Schema FAQPage, habilita rich results de preguntas frecuentes */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/* Schema Service, para páginas de captura y de servicio */
export function serviceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'City', name: 'Bogotá' },
  }
}

/* Schema Article, para el blog */
export function articleSchema({ title, description, path, date, updated, category }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE.url}${path}`,
    datePublished: date,
    dateModified: updated || date,
    articleSection: category,
    inLanguage: 'es-CO',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@id': `${SITE.url}/#organization` },
    image: `${SITE.url}/images/hero-infraestructura-adesystem.jpg`,
    mainEntityOfPage: `${SITE.url}${path}`,
  }
}
