# Registro de implementación

**Última actualización:** 25 de septiembre de 2026  
**Estado:** implementación local terminada; publicación e integraciones externas pendientes de validación.

## Resultado entregado

La antigua landing se convirtió en un sitio institucional y comercial prerenderizado. El contenido prioriza las líneas que aparecen con mayor frecuencia en la información comercial entregada: UPS, baterías, mantenimiento, aire acondicionado, infraestructura eléctrica y certificación de cobre/fibra.

### Experiencia y marca

- Inicio reordenado para mostrar propuesta de valor, experiencia sectorial, mapa integral, necesidades prioritarias, servicios, sectores, casos, método, empresa y contacto.
- Hero sin fotografía de fondo, con azul noche y textura CSS.
- Frase animada recuperada con palabras visibles en colores de marca y alternativa estática para movimiento reducido.
- Navegación convertida a enlaces reales; menú móvil con estado accesible, Escape y control de foco.
- Calculadoras con superficies blancas y jerarquía visual coherente.
- Montserrat y paleta del manual corporativo aplicadas de forma consistente.
- Logo oficial conservado sin filtros, deformaciones ni recoloración.
- Crédito del footer: “Diseño web por Adesystem®”.
- Footer reducido a enlaces prioritarios en vez de replicar todo el sitemap.

### Visualización del portafolio

- Mapa conceptual de un proyecto integral con ocho sistemas: subestación/tableros, UPS/baterías, data center, cobre/fibra, seguridad, climatización, oficinas/interiorismo y entrega.
- Marcadores táctiles y operables con teclado, ficha activa y enlaces a servicios.
- Selección manual de sistemas: el detalle permanece visible hasta que el visitante elige otro. En móvil, la selección desplaza al detalle.
- Versión móvil compacta y soporte para `prefers-reduced-motion`.
- Imagen final optimizada en `public/images/mapa-proyecto-integral-adesystem.webp`.
- Aclaración visible de que la visualización es conceptual y no un proyecto ejecutado.

### SEO técnico

- Dominio canónico unificado en `https://www.adesystem.com.co`.
- Documento configurado como `es-CO`.
- Títulos, descripciones, canonical, Open Graph y JSON-LD por ruta.
- HTML prerenderizado para que el contenido no dependa de ejecutar JavaScript.
- Sitemap generado desde las fuentes de datos y sin fechas falsas ni `priority`.
- Categorías vacías y borradores excluidos de rutas indexables.
- Schema de organización, servicio, breadcrumbs, artículos, FAQ, aplicaciones y HowTo solo cuando corresponde al contenido visible.
- Auditoría automática de H1, metadata, canonical, schema, duplicados, enlaces y estados de indexación.
- Redirecciones Wix, normalización de `www` y respuestas 404/410 reales preparadas en Nginx.

### Arquitectura comercial y contenido

- Páginas por pilares, sectores e intenciones comerciales sin duplicarlas por cada sinónimo o ciudad.
- Nueva oportunidad comercial de alquiler de UPS en Bogotá.
- Páginas prioritarias de UPS, bancos de baterías, mantenimiento, aire empresarial y certificación de cobre/fibra reestructuradas con respuesta directa, alcance, proceso, entregables, límites, FAQ y CTA.
- Casos públicos de Pharmetique Labs, Amadeus, Davivienda y Vitalis incorporados desde la web oficial por solicitud del usuario. Clientes no publicados siguen protegidos.
- Blog con estados `published` y `draft`; solo seis guías aparecen inicialmente en rutas y sitemap.
- Guías de compra de UPS, baterías y aire acondicionado incluidas.
- Bloques visibles llamados “Fuentes técnicas” eliminados; los enlaces necesarios se integran naturalmente en el texto.
- Lenguaje absoluto, alarmista o no demostrable suavizado o retirado.

### Utilidades técnicas

- Calculadora UPS y conversor kVA/amperios para sistemas monofásicos y trifásicos.
- Presets editables de equipos, potencia total, factor de potencia, margen y siguiente capacidad estándar.
- Sin estimación inventada de autonomía: exige modelo, baterías y curvas oficiales.
- Calculadora de presupuesto PoE con potencia por puerto y margen.
- Calculadora orientativa de sección de conductor por caída de tensión.
- Checklist de continuidad UPS.
- Pruebas de entradas vacías, valores inválidos, fórmulas, margen y redondeo.

### Conversión y medición

- WhatsApp disponible desde la navegación, CTAs y resultados técnicos.
- Diagnóstico guiado de UPS que prepara un mensaje según síntoma, modelo, kVA y ciudad.
- Formulario opcional con nombre, correo corporativo, empresa, cargo, consentimiento y honeypot.
- Payload preparado para n8n y Notion con fuente, resultados, UTM, referrer y versión de consentimiento.
- Fallback a WhatsApp cuando el webhook no está configurado o falla.
- Banner de consentimiento que evita cargar GTM antes de aceptar analítica.
- Eventos preparados: `whatsapp_click`, `diagnostic_start`, `calculator_completed`, `lead_submit_success`, `portfolio_system_open` y `email_click`.

### Rendimiento y mantenimiento

- Loader y cursor personalizado retirados.
- Animaciones reducidas y concentradas en el hero y el mapa.
- GSAP, Lenis y clsx retirados de las dependencias declaradas.
- Framer Motion se conserva porque sostiene interacciones existentes.
- Activos centralizados en `src/data/media.js` y fotografías inferiores con carga diferida donde aplica.
- Build, sitemap, prerender y auditorías reunidos en comandos npm reproducibles.

### Documentación y limpieza

- `README.md` raíz creado como entrada única para instalación, comandos, estructura y reglas.
- `docs/README.md` creado como índice y criterio para evitar documentos duplicados.
- Arquitectura, auditoría y este registro separados por responsabilidad.
- `.env.example` añadido sin secretos y `.gitignore` configurado para dependencias, builds, variables locales y residuos del sistema.
- Referencia obsoleta a `src/lib/analytics.js` corregida por el archivo real `src/lib/siteEvents.js`.
- Paquetes extraneous de instalaciones antiguas retirados de `node_modules`.
- Cuatro imágenes heredadas de data center eliminadas después de verificar que ninguna ruta las usaba.
- Guías antiguas de `public/img/` y `public/logos/` retiradas porque describían un sistema de archivos que ya no existe y sugerían publicar clientes sin aprobación.
- `.ssr/` ahora se elimina automáticamente después del prerender; `dist/` permanece como resultado publicable e ignorado por Git.
- Se conservaron completos `Contexto adesystem/`, `logos ades/`, el manual corporativo y los activos usados por el sitio.

## Mejora visual y comercial — 25 de septiembre de 2026

- Comparada la carpeta `adesystem-landing version anterior/`. Se recuperó el bloque azul “¿Cuánto vale una hora sin luz?” como recorrido de tres etapas: corte, UPS y planta.
- Corregida la causa de la frase detenida: el encabezado ya no pausa por hover o foco. Control explícito para pausar/reanudar, pausa por pestaña oculta y respeto de movimiento reducido. Frases breves para evitar saltos de altura.
- Nueve renders nuevos: energía, UPS, data center, red, seguridad, climatización, interiorismo, fachada y planta. Generados con la herramienta integrada `image_gen`, optimizados a WebP (aproximadamente 1,6 MB en conjunto). Archivos `public/images/detalle-*-adesystem.webp`; prompts completos en `docs/render-prompts.json`.
- Mapa general conservado. Render independiente junto al edificio, selección por marcadores o botones, beneficio en lenguaje cotidiano y CTA contextual a WhatsApp.
- Ampliación con `<dialog>` nativo, zoom, desplazamiento, cierre con Escape y devolución del foco. Imágenes identificadas como conceptuales.
- Explorador adaptado a todas las páginas de captura, pilares y sectores. Se mantiene también en Proyectos. Cada página prioriza su sistema; plantas muestra primero el generador y data center muestra primero sus racks.
- CTA inicial añadido a las páginas comerciales; se conserva el contenido técnico, las preguntas frecuentes, los enlaces internos y el cierre de cada página. Ajustadas promesas absolutas de la página de plantas y el texto interno del bloque de prioridades.
- Prueba `tests/visual-content.test.mjs` integrada en `npm test`: verifica activos, destinos de conversión y selección de sistemas por página.
- Validación: pruebas y build con prerender y auditoría SEO; navegador de escritorio y móvil para selección, ampliación, Escape, pausa/reanudación y etapas del apagón. No se ha publicado ni enviado ningún mensaje comercial.

- Sección de cuatro disciplinas: render por pilar, acercamiento CSS en hover/foco, carga diferida, textos alternativos y enlaces semánticos conservados. Movimiento reducido respetado.

- Casos de Inicio y Proyectos unificados en `src/data/cases.js`. Fotografías y logos originales optimizados en `public/images/casos/`; correspondencia y procedencia en `docs/casos-fuentes.json`. Se retiraron ejemplos genéricos y entregables no documentados.

## Archivos que son fuente de verdad

| Tema | Archivo o carpeta |
| --- | --- |
| Datos de marca y contacto | `src/data/site.js` |
| Soluciones comerciales | `src/data/capturas.js` |
| Pilares de servicio | `src/data/serviciosPages.js` |
| Sectores | `src/data/sectores.js` |
| Blog y estado de publicación | `src/data/blogPosts.js` |
| Medios y textos alternativos | `src/data/media.js` |
| Rutas | `src/App.jsx` |
| SEO y schema | `src/components/Seo.jsx` |
| Fórmulas | `src/lib/ups.js`, `src/lib/technicalCalculators.js` |
| Analítica y consentimiento | `src/lib/siteEvents.js`, `src/components/ConsentBanner.jsx` |
| Despliegue | `Dockerfile`, `nginx.conf` |
| Marca original | `logos ades/MANUAL CORPORATIVO ADESYSTEM FINAL.pdf` |
| Contexto comercial interno | `Contexto adesystem/` |

## Pendientes reales antes de publicar

1. Aprobar la ficha de hechos: razón social, dirección, antigüedad, cobertura, horarios, certificaciones, marcas, clientes, garantías y tiempos de atención.
2. Revisar jurídicamente la política local de tratamiento de datos.
3. Configurar y probar `VITE_N8N_LEAD_WEBHOOK` desde Coolify hasta Notion.
4. Configurar `VITE_GTM_ID`, GA4 y eventos después del consentimiento.
5. Verificar Search Console y Bing Webmaster Tools; enviar el sitemap.
6. Rastrear el Wix público justo antes de migrar y completar cualquier URL que no esté en la matriz 301.
7. Probar HTTPS, `www`, redirecciones, 404 y 410 antes del cambio de DNS.
8. Validar schema y páginas prioritarias en producción.
9. Sustituir imágenes conceptuales por fotografías reales aprobadas cuando exista el banco visual.
10. Publicar los artículos en borrador gradualmente con fecha real y revisión editorial.

## Decisiones deliberadas

- No se prometen rankings, “cero downtime”, soporte 24/7 ni resultados sin evidencia.
- No se crean páginas masivas por ciudad o sinónimo.
- No se añade `llms.txt` ni schema inventado para IA.
- No se publica una calculadora de autonomía sin curvas de fabricante.
- No se abren nuevas calculadoras de tableros o climatización sin alcance técnico y revisor responsable.
- No se publican nombres o logos de clientes solo porque aparezcan en archivos internos.

## Criterio de cierre

Una modificación queda terminada cuando:

```bash
npm test
npm run build
```

finalizan sin errores y la ruta modificada se revisa en móvil y escritorio. Una integración externa solo se marca como terminada después de probar el recorrido completo en producción.
