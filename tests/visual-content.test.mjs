import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { SYSTEMS, systemsForPage } from '../src/data/systems.js'
import { CAPTURAS } from '../src/data/capturas.js'
import { SERVICIOS_PAGES } from '../src/data/serviciosPages.js'
import { SECTORES } from '../src/data/sectores.js'
import { mediaForCaptura, mediaForServicio, mediaForSector } from '../src/data/media.js'

const routes = new Set([...CAPTURAS.map(c => `/${c.slug}/`), ...SERVICIOS_PAGES.map(s => `/servicios/${s.slug}/`)])
assert.equal(new Set(SYSTEMS.map(s => s.id)).size, 9)
for (const system of SYSTEMS) {
  assert.ok(existsSync(`public${system.src}`), `Missing render: ${system.id}`)
  assert.ok(routes.has(system.to), `Broken conversion link: ${system.to}`)
  assert.ok(system.benefit && system.explanation && system.next && system.alt)
}
for (const [pages, media] of [[CAPTURAS, mediaForCaptura], [SERVICIOS_PAGES, mediaForServicio], [SECTORES, mediaForSector]]) {
  for (const page of pages) {
    const ids = systemsForPage(page.slug, media(page.slug).key)
    assert.ok(ids.length && ids.every(id => SYSTEMS.some(s => s.id === id)), page.slug)
  }
}
assert.equal(systemsForPage('plantas-electricas-bogota', 'electrical')[0], 'planta')
assert.equal(systemsForPage('datacenter-bogota', 'network')[0], 'datacenter')
assert.deepEqual(systemsForPage('confort-y-seguridad', 'security'), ['seguridad', 'clima'])
console.log('Visual content: renders, page mapping and conversion links passed')
