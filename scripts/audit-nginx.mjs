import { readFileSync } from 'node:fs'

const nginx = readFileSync(new URL('../nginx.conf', import.meta.url), 'utf8')
const required = [
  'location = /home { return 301 /; }',
  'location = /arquitecturaeléctrica { return 301 /servicios/arquitectura-electrica/; }',
  'location = /arquitecturadered { return 301 /servicios/arquitectura-de-red/; }',
  'location = /confortyseguridad { return 301 /servicios/confort-y-seguridad/; }',
  'location = /productos { return 301 /ups-bogota/; }',
  'return 301 https://www.adesystem.com.co$request_uri;',
  'location / { try_files $uri $uri/ =404; }',
  'return 410;',
]

const missing = required.filter(rule => !nginx.includes(rule))
if (missing.length) throw new Error(`Faltan reglas Nginx:\n${missing.join('\n')}`)
console.log('Nginx: redirecciones Wix y estados 404/410 verificados')
