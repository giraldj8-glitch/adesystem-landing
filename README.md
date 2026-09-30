# Sitio web de Adesystem

Sitio institucional y comercial de Adesystem para infraestructura eléctrica, UPS, redes, climatización, seguridad e interiorismo. Está construido con React y Vite, se prerenderiza como HTML estático y se publica con Docker/Nginx.

## Inicio rápido

Requiere Node.js 20 o una versión LTS compatible.

```bash
npm ci
npm run dev
```

La vista local queda en `http://127.0.0.1:5173/`.

Antes de entregar o desplegar:

```bash
npm test
npm run build
npm run preview
```

## Documentación

El índice completo está en [`docs/README.md`](docs/README.md).

- [`docs/registro-implementacion.md`](docs/registro-implementacion.md): qué se implementó, qué se eliminó y qué sigue pendiente.
- [`docs/arquitectura-y-edicion.md`](docs/arquitectura-y-edicion.md): arquitectura, rutas, edición de contenido, calculadoras, formularios y despliegue.
- [`docs/auditoria-seo-aeo.md`](docs/auditoria-seo-aeo.md): auditoría SEO/AEO/GEO, estrategia, migración y medición.

## Estructura principal

```text
src/
  components/       Componentes compartidos y bloques del inicio
  data/             Servicios, soluciones, sectores, artículos y medios
  lib/              Cálculos, eventos y utilidades pequeñas
  pages/            Páginas y herramientas
  styles/           Estilos globales y sistema visual
public/              Activos, robots, sitemap y redirecciones
scripts/             Prerender, sitemap y auditorías automáticas
tests/               Pruebas de las calculadoras
docs/                Documentación mantenida del proyecto
Contexto adesystem/  Fuentes comerciales internas; no publicar
logos ades/          Manual de marca y archivos maestros; no borrar
```

`dist/` es el resultado publicable y `.ssr/` es un resultado temporal que el build elimina al terminar. Ninguno se edita como fuente.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor local con recarga automática |
| `npm test` | Fórmulas, contenido y configuración Nginx |
| `npm run build` | Sitemap, build, SSR, prerender y auditoría SEO |
| `npm run preview` | Vista local del build final |
| `npm run audit:content` | Revisión editorial y estados del blog |
| `npm run audit:seo` | Revisión del HTML generado en `dist/` |
| `npm run sitemap` | Regenera `public/sitemap.xml` |

## Configuración externa

Copie `.env.example` como `.env.local` solo para desarrollo. En Coolify configure los mismos valores como argumentos de build:

```env
VITE_N8N_LEAD_WEBHOOK=
VITE_GTM_ID=
```

Estas variables terminan en JavaScript público: nunca guardar credenciales o secretos en ellas.

## Reglas de trabajo

1. Editar la fuente en `src/` o `public/`, nunca `dist/` ni `.ssr/`.
2. Mantener el manual de marca en `logos ades/MANUAL CORPORATIVO ADESYSTEM FINAL.pdf` como referencia visual.
3. No publicar clientes, certificaciones, garantías, tiempos de respuesta o resultados sin aprobación verificable.
4. No calcular autonomía UPS sin curvas oficiales del modelo y banco de baterías.
5. Después de cambiar rutas o contenido, ejecutar `npm test` y `npm run build`.
6. Conservar como canonical `https://www.adesystem.com.co/`.

## Estado actual

La web funciona localmente y cuenta con rutas prerenderizadas, metadata, schema, sitemap, redirecciones de migración, páginas comerciales, blog publicado/borrador, calculadoras, mapa interactivo y captura de leads preparada.

Antes de producción todavía deben verificarse las integraciones externas: n8n/Notion, GTM/GA4, Search Console, Bing Webmaster Tools, DNS/HTTPS y la ficha de hechos aprobados por gerencia. Consulte el detalle en el registro de implementación.
