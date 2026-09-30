import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { SITE } from '../src/data/site.js'

const dist = join(process.cwd(), 'dist')
const errors = []
const warnings = []
const seenTitles = new Map()
const seenDescriptions = new Map()

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? walk(path) : [path]
  })
}

function routeFor(file) {
  const rel = relative(dist, file)
  return rel === 'index.html' ? '/' : `/${dirname(rel).split(sep).join('/')}/`
}

function match(html, expression) {
  return html.match(expression)?.[1]?.trim() || ''
}

function targetExists(pathname) {
  const base = process.env.VITE_BASE_PATH || '/'
  const clean = decodeURIComponent(pathname.startsWith(base) ? pathname.slice(base.length) : pathname).replace(/^\/+/, '')
  return existsSync(join(dist, clean)) || existsSync(join(dist, clean, 'index.html')) || existsSync(join(dist, `${clean}.html`))
}

for (const file of walk(dist).filter(file => file.endsWith(`${sep}index.html`))) {
  const route = routeFor(file)
  const html = readFileSync(file, 'utf8')
  const title = match(html, /<title>([^<]+)<\/title>/i)
  const description = match(html, /<meta name="description" content="([^"]*)"/i)
  const canonical = match(html, /<link rel="canonical" href="([^"]+)"/i)
  const robots = match(html, /<meta name="robots" content="([^"]+)"/i)
  const noindex = robots.includes('noindex')
  const h1Count = (html.match(/<h1\b/gi) || []).length

  if (!title) errors.push(`${route}: falta <title>`)
  if (!description) errors.push(`${route}: falta meta description`)
  if (h1Count !== 1) errors.push(`${route}: contiene ${h1Count} H1`)
  if (!canonical.startsWith(SITE.url)) errors.push(`${route}: canonical fuera del dominio principal`)
  if (!noindex && canonical !== `${SITE.url}${route}`) errors.push(`${route}: canonical esperado ${SITE.url}${route}`)
  if (!noindex && (title.length < 40 || title.length > 65)) warnings.push(`${route}: título de ${title.length} caracteres`)
  if (!noindex && (description.length < 120 || description.length > 165)) warnings.push(`${route}: descripción de ${description.length} caracteres`)

  for (const raw of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(raw[1]) } catch { errors.push(`${route}: JSON-LD inválido`) }
  }

  if (!noindex) {
    if (seenTitles.has(title)) errors.push(`${route}: título duplicado con ${seenTitles.get(title)}`)
    else seenTitles.set(title, route)
    if (seenDescriptions.has(description)) errors.push(`${route}: descripción duplicada con ${seenDescriptions.get(description)}`)
    else seenDescriptions.set(description, route)
  }

  for (const [, href] of html.matchAll(/href="([^"]+)"/gi)) {
    if (/^(#|mailto:|tel:|javascript:)/.test(href)) continue
    let url
    try { url = new URL(href, SITE.url) } catch { continue }
    if (url.origin !== SITE.url || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) continue
    if (!targetExists(url.pathname)) errors.push(`${route}: enlace interno roto ${url.pathname}`)
  }
}

const notFound = join(dist, '404.html')
if (!existsSync(notFound) || !readFileSync(notFound, 'utf8').includes('noindex')) errors.push('/404.html: falta página noindex')

if (warnings.length) console.warn(`Avisos SEO (${warnings.length}):\n- ${warnings.join('\n- ')}`)
if (errors.length) {
  console.error(`Errores SEO (${errors.length}):\n- ${[...new Set(errors)].join('\n- ')}`)
  process.exit(1)
}

console.log(`Auditoría SEO superada: ${seenTitles.size} rutas indexables`)
