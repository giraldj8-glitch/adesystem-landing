import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { CAPTURAS } from '../src/data/capturas.js'
import { SERVICIOS_PAGES } from '../src/data/serviciosPages.js'
import { SECTORES } from '../src/data/sectores.js'
import { BLOG_CATEGORIAS, PUBLISHED_POSTS } from '../src/data/blogPosts.js'
import { SITE } from '../src/data/site.js'

const dist = join(process.cwd(), 'dist')
const { render } = await import(pathToFileURL(join(process.cwd(), '.ssr', 'entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const paths = [
  '/',
  ...CAPTURAS.map(item => `/${item.slug}/`),
  '/servicios/', ...SERVICIOS_PAGES.map(item => `/servicios/${item.slug}/`),
  '/sectores/', ...SECTORES.map(item => `/sectores/${item.slug}/`),
  '/blog/', ...BLOG_CATEGORIAS.filter(category => PUBLISHED_POSTS.some(post => post.categoria === category.slug)).map(item => `/blog/categoria/${item.slug}/`), ...PUBLISHED_POSTS.map(item => `/blog/${item.slug}/`),
  '/nosotros/', '/politica-tratamiento-datos/',
  '/proyectos/', '/utilidades/', '/utilidades/calculadora-ups-kva/', '/utilidades/calculadora-poe/',
  '/utilidades/calculadora-seccion-cable/', '/utilidades/checklist-continuidad-ups/',
  '/404/',
]

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
const replaceMeta = (html, attribute, key, content) => html.replace(
  new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`),
  `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
)

for (const path of paths) {
  const { appHtml, head } = render(path)
  if (!head) throw new Error(`No se generó SEO para ${path}`)
  let html = template
  const url = `${SITE.url}${head.path}`
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(head.title)}</title>`)
  html = replaceMeta(html, 'name', 'description', head.description)
  html = replaceMeta(html, 'name', 'robots', head.noindex ? 'noindex, follow' : 'index, follow')
  html = replaceMeta(html, 'property', 'og:title', head.title)
  html = replaceMeta(html, 'property', 'og:description', head.description)
  html = replaceMeta(html, 'property', 'og:url', url)
  html = replaceMeta(html, 'name', 'twitter:title', head.title)
  html = replaceMeta(html, 'name', 'twitter:description', head.description)
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`)
  const schemas = head.schemas.map(schema => `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`).join('')
  html = html.replace('</head>', `${schemas}</head>`)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const output = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
  mkdirSync(dirname(output), { recursive: true })
  writeFileSync(output, html)
  if (path === '/404/') writeFileSync(join(dist, '404.html'), html)
}

rmSync(join(process.cwd(), '.ssr'), { recursive: true, force: true })
console.log(`HTML prerenderizado: ${paths.length} rutas`)
