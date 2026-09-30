/*
 * Genera public/sitemap.xml a partir de los datos del sitio.
 * Se ejecuta automáticamente antes de cada build (npm run build).
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { SITE } from '../src/data/site.js'
import { CAPTURAS } from '../src/data/capturas.js'
import { SERVICIOS_PAGES } from '../src/data/serviciosPages.js'
import { SECTORES } from '../src/data/sectores.js'
import { PUBLISHED_POSTS, BLOG_CATEGORIAS } from '../src/data/blogPosts.js'

const urls = [
  { loc: '/' },
  { loc: '/nosotros/' },
  { loc: '/proyectos/' },
  { loc: '/utilidades/' },
  { loc: '/utilidades/calculadora-ups-kva/' },
  { loc: '/utilidades/calculadora-poe/' },
  { loc: '/utilidades/calculadora-seccion-cable/' },
  { loc: '/utilidades/checklist-continuidad-ups/' },
  ...CAPTURAS.map(c => ({ loc: `/${c.slug}/` })),
  { loc: '/servicios/' },
  ...SERVICIOS_PAGES.map(s => ({ loc: `/servicios/${s.slug}/` })),
  { loc: '/sectores/' },
  ...SECTORES.map(s => ({ loc: `/sectores/${s.slug}/` })),
  { loc: '/blog/' },
  ...BLOG_CATEGORIAS.filter(c => PUBLISHED_POSTS.some(p => p.categoria === c.slug)).map(c => ({ loc: `/blog/categoria/${c.slug}/` })),
  ...PUBLISHED_POSTS.map(p => ({ loc: `/blog/${p.slug}/`, lastmod: p.updatedAt || p.date })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE.url}${u.loc}</loc>
${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}  </url>`).join('\n')}
</urlset>
`

const out = join(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
writeFileSync(out, xml)
console.log(`sitemap.xml generado: ${urls.length} URLs`)
