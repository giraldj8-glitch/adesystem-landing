# Adesystem: arquitectura y guía de edición

## Stack y ejecución

- React 18 + Vite 5 + React Router.
- Estilos globales en `src/styles/main.css`; se usa la paleta y Montserrat del manual de marca.
- No hay CMS ni backend dentro de este repositorio. El build genera archivos estáticos en `dist/`.

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`npm run build` genera sitemap, construye cliente y SSR, prerenderiza cada ruta y ejecuta `scripts/audit-seo.mjs`. No eliminar `scripts/prerender.mjs`: hace que contenido, título, descripción, canonical y JSON-LD lleguen en el HTML inicial.

## Marca: reglas no negociables

El origen de verdad es `logos ades/MANUAL CORPORATIVO ADESYSTEM FINAL.pdf`.

- Colores: verde `#32D894`, cian `#1BC5FF`, azul `#345FEA`, morado `#611AD8`, azul noche `#000839`.
- Tipografía: Montserrat para títulos y textos. No introducir otra familia salvo una necesidad de accesibilidad aprobada.
- Logo: `public/adesystem-logo.png` es una versión oficial blanca para fondos oscuros; no redibujar, deformar, aplicar filtros, sombras o degradados. Mantener mínimo de 170 px de ancho digital y área libre alrededor.
- Para fondo claro usar una versión oficial oscura, nunca recolorear el logo por CSS.

## Rutas y contenido

| Tipo | Fuente | Ruta |
| --- | --- | --- |
| Inicio | `src/pages/Home.jsx` | `/` |
| Nosotros | `src/pages/About.jsx` | `/nosotros/` |
| Servicios | `src/data/serviciosPages.js` + `src/pages/Servicio.jsx` | `/servicios/:slug/` |
| Soluciones SEO | `src/data/capturas.js` + `src/pages/Captura.jsx` | `/:slug/` |
| Sectores | `src/data/sectores.js` + `src/pages/Sector.jsx` | `/sectores/:slug/` |
| Blog | `src/data/blogPosts.js` | `/blog/` y `/blog/:slug/` |
| Proyectos | `src/pages/Projects.jsx` | `/proyectos/` |
| Mapa integral | `src/components/PortfolioMap.jsx` | Inicio y `/proyectos/` |
| Utilidades | `src/pages/Utilities.jsx` | `/utilidades/` |
| UPS/kVA | `src/pages/UpsCalculator.jsx`, `src/lib/ups.js` | `/utilidades/calculadora-ups-kva/` |
| PoE | `src/pages/PoeCalculator.jsx`, `src/lib/technicalCalculators.js` | `/utilidades/calculadora-poe/` |
| Sección de cable | `src/pages/CableCalculator.jsx`, `src/lib/technicalCalculators.js` | `/utilidades/calculadora-seccion-cable/` |
| Checklist UPS | `src/pages/ChecklistUps.jsx` | `/utilidades/checklist-continuidad-ups/` |
| Política de datos | `src/pages/PrivacyPolicy.jsx` | `/politica-tratamiento-datos/` (`noindex`) |

`/alquiler-ups-bogota/` es la oportunidad comercial nueva de esta fase. Vive en `CAPTURAS` y no publica inventario, precios ni tiempos sin confirmación.

Para agregar una solución nueva, añadir una entrada a `CAPTURAS` con copy propio, beneficios, FAQ visible, enlaces relacionados y CTA. El sitemap, rutas y footer la toman automáticamente. No duplicar una página cambiando solo ciudad o keyword.

Para servicios, sectores y posts seguir el mismo patrón de sus archivos de datos. Cada contenido debe responder al principio: qué es, cuándo aplica, qué recibe el cliente y qué requiere validación en visita.

Cada artículo usa `answer`, `sections`, `faqs`, `sources`, `related` y `utility` cuando aplica. También declara `status: 'published'` o `status: 'draft'`. Solo los publicados aparecen en rutas, categorías y sitemap. El lanzamiento expone seis guías; los otros doce contenidos siguen en borrador hasta su fecha real de publicación.

El validador avisa sobre frases de más de 28 palabras, pero no mecaniza el estilo ni bloquea el build por longitud. Ejecute `npm run audit:content` después de editar. Las referencias normativas se integran en el texto; no crear un bloque visible llamado “Fuentes técnicas”.

## Calculadora UPS

La lógica está aislada y cubierta por `tests/ups-calculator.test.mjs`.

1. `W totales = suma(cantidad × W por equipo)`.
2. `VA = W / factor de potencia`.
3. `VA de diseño = VA × (1 + margen)`.
4. Se escoge la siguiente capacidad estándar de `STANDARD_UPS_KVA`.
5. Monofásico: `kVA = V × A / 1.000`; trifásico: `kVA = √3 × V × A / 1.000`.

El resultado es orientativo. Antes de cotizar se debe confirmar potencia de salida en W, tensión, protecciones, bypass, tipo de UPS y curva oficial de autonomía. No añadir una estimación de minutos hasta que Adesystem aporte catálogo aprobado, bancos de baterías y curvas de descarga por modelo.

Para incorporar un modelo real, crear una tabla de datos aprobada con: modelo, kVA, W máximos, tensión, topología, baterías compatibles, curva por carga y fecha/revisor técnico. Mostrar solo resultados de esa tabla; nunca interpolar una autonomía comercial sin validación.

## Calculadoras PoE y sección de cable

`src/lib/technicalCalculators.js` contiene ambas fórmulas. `tests/technical-calculators.test.mjs` verifica casos normales, vacíos e inválidos.

La calculadora PoE suma potencia máxima, cantidad y margen. Compare también potencia por puerto, estándar IEEE, cableado, temperatura y respaldo UPS.

La calculadora de sección usa caída de tensión:

- Monofásico o CC: `S = 2ρLI/ΔV`.
- Trifásico: `S = √3ρLI/ΔV`.

El resultado no autoriza una instalación. Valide ampacidad, protección, cortocircuito, agrupamiento, aislamiento, canalización y RETIE.

## Formularios, n8n, Coolify y Notion

Configurar en Coolify estas variables como argumentos de build del Dockerfile:

```bash
VITE_N8N_LEAD_WEBHOOK=https://n8n.tudominio.co/webhook/adesystem-leads
VITE_GTM_ID=GTM-XXXXXXX
```

El navegador envía JSON desde `src/components/LeadForm.jsx` con:

```json
{
  "source": "calculadora-ups-kva",
  "name": "Nombre",
  "email": "correo@empresa.com",
  "company": "Empresa",
  "role": "Cargo",
  "results": {},
  "consent": true,
  "consent_version": "2026-09-v1",
  "consented_at": "ISO-8601",
  "referrer": "",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "utm_term": "",
  "utm_content": ""
}
```

Workflow mínimo de n8n:

1. Webhook `POST` con CORS solo para el dominio de producción y staging.
2. Rechazar si el honeypot llega con valor, `consent !== true`, no hay `name`/`email` o el correo es inválido.
3. Crear registro en una base Notion **Leads autorizados**: fecha, fuente, contacto, empresa, cargo, resultado JSON, UTM, referrer, versión y fecha de consentimiento.
4. Responder `200` JSON solo después de que Notion confirme; usar `400/422` en validación y `500` ante falla interna.
5. Notificar al responsable comercial sin reenviar datos a canales no autorizados.

La finalidad se explica junto a la casilla y el usuario debe marcarla antes del envío. Si el webhook falla, la interfaz ofrece WhatsApp y no afirma que el reporte fue enviado.

`src/components/ConsentBanner.jsx` mantiene GTM inactivo hasta que el visitante acepte analítica. `src/lib/siteEvents.js` registra `whatsapp_click`, `diagnostic_start`, `calculator_completed`, `lead_submit_success`, `portfolio_system_open` y `email_click`. Search Console, Bing Webmaster Tools, GA4, GTM, n8n y Notion requieren credenciales externas y deben verificarse después del despliegue.

La ruta local de política enlaza el documento institucional vigente, pero su texto resumen necesita revisión del responsable de datos antes de publicar.

## SEO, AEO y GEO

`src/components/Seo.jsx` controla title, description, canonical, Open Graph y JSON-LD. La home recibe `ProfessionalService`; las soluciones/servicios usan `Service`, `BreadcrumbList` y FAQ visible; la calculadora usa `WebApplication`; el checklist usa `HowTo` porque sus pasos están visibles.

Lista de publicación:

- Un único H1, respuesta directa en los primeros párrafos y FAQs que existan realmente en pantalla.
- Canonical absoluto, una sola descripción, JSON-LD que coincida con texto visible y URL incluida en sitemap.
- Español colombiano: Bogotá, Colombia, W/VA/kVA, tensiones y criterios reales; sin promesas absolutas, relleno de keywords ni resultados inventados.
- Para AEO: tablas, pasos, límites explícitos y referencias primarias integradas naturalmente cuando sean necesarias.
- Para GEO: NAP idéntico en web y Google Business Profile, logo oficial, perfiles sociales reales, casos por sector, enlaces entre servicio, guía y utilidad.

Prioridad editorial: UPS, baterías, mantenimiento, aire empresarial, certificación, PoE y conductores. No publique calculadoras de climatización o tableros sin criterios aprobados.

## Despliegue y validación

En Coolify desplegar el `Dockerfile`. Nginx sirve directamente los directorios prerenderizados, redirige el dominio sin `www`, aplica las redirecciones de Wix y devuelve 404/410 reales; no usar un fallback SPA con estado 200.

Antes de desplegar:

1. Ejecutar `npm test` y `npm run build`.
2. Abrir `/`, la calculadora, `/alquiler-ups-bogota/`, `/mantenimiento-ups/`, `/proyectos/` y una ruta de servicio en 390, 768 y 1440 px.
3. Verificar que View Source contenga H1, canonical, description y JSON-LD de la ruta abierta.
4. Confirmar `sitemap.xml`, `robots.txt`, un solo canonical y respuesta del webhook n8n hacia Notion.
5. En Search Console medir indexación, impresiones de utilidades, consultas UPS/certificación, clics a WhatsApp y formularios enviados.

## Sistema de imágenes

Los activos temporales viven en `public/images/`; `src/data/media.js` centraliza rutas, textos alternativos y la asignación por servicio, solución, sector y categoría. Reemplazar un archivo conservando su nombre actualiza todas las páginas que lo reutilizan. El JPG del hero se conserva para Open Graph, pero ya no aparece como fondo del inicio.

Estas imágenes no documentan proyectos ni personal real de Adesystem y nunca deben presentarse como caso comprobable. Cuando exista banco de fotos aprobado, reemplazarlas por fotos reales optimizadas en WebP/AVIF:

| Ubicación | Foto sugerida | Reglas |
| --- | --- | --- |
| Hero de inicio | No requiere imagen: usa fondo navy y una trama CSS | Si en el futuro se aprueba una foto real, debe mantener legibilidad y no exponer pantallas, planos o credenciales. |
| Clientes/proyectos | Detalle de rack, UPS o adecuación finalizada | Solo si no identifica el cliente protegido por NDA. |
| Diagnóstico UPS | Técnico con EPP frente a UPS/banco, sin datos de display visibles | Consentimiento de equipo y cliente; mostrar práctica segura. |
| Certificación cobre/fibra | Medición con certificador, OLTS u OTDR | No usar una medición genérica para afirmar una certificación específica. |
| Casos por sector | Resultado físico despersonalizado | Publicar solo tras aprobación escrita del cliente y del resultado. |
| Mapa integral | Corte arquitectónico con ocho marcadores | Mantenerlo como visualización conceptual, nunca como proyecto ejecutado. |

Al añadir una foto, actualizar `src/data/media.js`, incluir dimensiones, peso y `alt` útil, y verificar que no produzca 404. No implementar un fallback que pruebe `.webp`, `.jpg` y `.png` en producción.

### Mapa interactivo del portafolio

`PortfolioMap.jsx` muestra ocho sistemas sobre un proyecto conceptual. Cambie `SYSTEMS` para ajustar posición, nota, color y enlace. Use porcentajes `x` y `y` sobre la imagen.

La rotación automática cambia cada 4,2 segundos. Se pausa fuera del viewport, en hover, con foco o pestaña oculta, y se detiene después de la primera interacción. Con movimiento reducido queda estática. Cada marcador funciona mediante ratón, tacto y teclado; en móvil conserva objetivos de 44 px y una lista compacta.

Archivos finales:

- `public/images/mapa-proyecto-integral-adesystem.webp`: único archivo servido. El PNG de 2,2 MB se eliminó.

La imagen se generó con la herramienta integrada de imágenes. Prompt final:

```text
Cree un corte arquitectónico isométrico de un edificio corporativo colombiano.
Muestre subestación, tableros, planta, UPS, baterías, data center y redes.
Incluya CCTV, acceso, incendio, climatización, oficinas, iluminación y fachada.
Use realismo 3D técnico y la paleta oficial de ADE System.
Separe cada sistema mediante hitos visuales para marcadores HTML.
No incluya texto, logotipos, personas, clientes ni marcas.
Evite geometría imposible, riesgos expuestos y estética futurista.
```

## Renders y explicación visual

`src/data/systems.js` define los nueve sistemas del explorador: render, texto alternativo, beneficio, explicación, siguiente paso y página de destino. `systemsForPage` selecciona los sistemas según la página y la familia de medios.

`PortfolioMap.jsx` sirve tanto al mapa de Inicio/Proyectos como al explorador enfocado de capturas, servicios y sectores. `DetailImage.jsx` gestiona la ampliación accesible. `LineaUPS.jsx` contiene las tres etapas del apagón. Los CTAs preparan mensajes con `whatsapp()` y no envían mensajes automáticamente.

Los renders finales están en `public/images/detalle-*-adesystem.webp`; `docs/render-prompts.json` conserva los prompts de generación. Son ilustraciones conceptuales, no evidencia de proyectos ejecutados. Para cambiar un render se reemplaza el archivo y se actualizan su descripción y el texto alternativo en `systems.js`.

Comprobación manual tras cambiar estos componentes: seleccionar un sistema desde botón y marcador; abrir la imagen, ampliar y cerrar con Escape; comprobar que el foco vuelve al control; probar las tres etapas del apagón; pausar/reanudar el titular; revisar a 390 px y 1440 px de ancho.
