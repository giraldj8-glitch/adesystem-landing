# Auditoría SEO, AEO y GEO de ADE System

**Fecha de revisión:** 19 de septiembre de 2026  
**Dominio canónico:** `https://www.adesystem.com.co/`  
**Alcance:** código del nuevo sitio, sitio público en Wix, manual de marca, portafolio y bases comerciales entregadas.

## 1. Conclusión ejecutiva

La nueva web tiene una base técnica superior al sitio público actual: rutas comerciales específicas, HTML prerenderizado, canonicals, sitemap, enlaces internos, datos estructurados y herramientas útiles. La prioridad no es crear decenas de páginas; es migrar sin perder señales, publicar contenido verificable y concentrar autoridad en las intenciones que sí generan negocio.

El historial comercial confirma este orden:

1. UPS, baterías y mantenimiento de UPS.
2. Aire acondicionado empresarial y mantenimiento.
3. Infraestructura eléctrica, tableros, subestaciones y plantas.
4. Cableado, fibra y certificación de enlaces.
5. Seguridad electrónica e interiorismo.

No se promete una posición concreta. El objetivo medible es que Google pueda rastrear e interpretar cada URL, que el contenido responda preguntas reales y que más visitas cualificadas terminen en WhatsApp o formulario.

## 2. Fuentes analizadas

### Internas

- `Contexto adesystem/BD Propuestas effd630b39254731acf67c414c2f00aa_all.csv`
- `Contexto adesystem/Actividades de servicio f8fcd12a713c4c12a87576d69bf6aebd_all.csv`
- `logos ades/MANUAL CORPORATIVO ADESYSTEM FINAL.pdf`
- Código y contenido de `src/`, sitemap, robots, schema y rutas generadas.

Los conteos comerciales se usaron como señal direccional, no como cifra para publicar. UPS y baterías concentran la mayoría de propuestas revisadas; mantenimiento de UPS y aire acondicionado dominan las actividades operativas.

### Públicas y primarias

- [Google: optimización para funciones generativas](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: cómo funciona la búsqueda](https://developers.google.com/search/docs/fundamentals/how-search-works)
- [Google: contenido generado con IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google: reportes de IA generativa en Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- [Ministerio de Minas y Energía: RETIE vigente](https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-el%C3%A9ctricas-retie/)
- [Eaton: guía de dimensionamiento de UPS](https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-sizing-guide.html)
- [Fluke Networks: guía de OTDR, OLTS y certificación de fibra](https://www.flukenetworks.com/expertise/learn-about/otdr)
- [SIC: tratamiento de datos personales](https://sedeelectronica.sic.gov.co/politica-de-tratamiento-de-datos-personales)

También se revisaron referencias comerciales colombianas para entender lenguaje, intención y oferta. No se copió su contenido ni se asumieron como fuente técnica.

## 3. Inventario después de la implementación

- 56 URLs indexables en sitemap.
- 58 rutas prerenderizadas, incluida la política `noindex` y la página 404.
- 24 páginas comerciales por intención, incluida la nueva página de alquiler de UPS.
- 4 pilares de servicio.
- 8 páginas por sector.
- 18 artículos técnicos: 6 publicados y 12 en borrador.
- Calculadoras UPS/kVA, PoE y sección de cable.
- Checklist de continuidad UPS.
- Solo se generan las tres categorías con artículos publicados; las vacías no tienen ruta pública ni sitemap.

Cada ruta indexable entrega desde el servidor:

- un H1;
- título y descripción únicos;
- canonical con `www`;
- contenido visible sin depender de JavaScript;
- JSON-LD válido y coherente con la página;
- enlaces internos comprobables.

## 4. Cambios técnicos realizados

| Hallazgo | Cambio |
| --- | --- |
| Canonicals y schema usaban dominio sin `www` | `SITE.url`, Open Graph, sitemap, robots y calculadora usan `https://www.adesystem.com.co` |
| Documento marcado solo como español genérico | `lang="es-CO"` |
| Sitemap fingía modificación en cada build | Se eliminó la fecha automática; los artículos usan su fecha real |
| Sitemap incluía `priority` sin utilidad práctica | Eliminado |
| Categorías vacías eran indexables | `noindex` y fuera del sitemap |
| Fallback SPA convertía URLs inexistentes en 200 | Nginx sirve estáticos prerenderizados y devuelve 404/410 reales |
| Wix y nuevo sitio podían crear duplicados | Redirecciones 301 y dominio canónico único |
| No existía comprobación automática | `scripts/audit-seo.mjs` valida metadata, H1, canonical, JSON-LD, duplicados, 404 y enlaces internos |
| El estilo editorial no tenía control automático | `scripts/audit-content.mjs` controla estados, duplicados y longitudes; frases extensas generan advertencia, no un ritmo artificial |
| Fecha de fundación contradictoria | Eliminada de schema y sustituida por “más de 25 años” hasta aprobación |
| Afirmaciones absolutas sin expediente | Se retiraron porcentajes, “cero garantías”, tiempos universales y credenciales no aprobadas |
| Tipografía de cuerpo fuera del manual | Toda la interfaz usa Montserrat; se eliminó Open Sans |
| Menú principal usaba controles no semánticos | Se convirtió a enlaces y el menú móvil expone estado, Escape, foco y objetivos táctiles |
| Home extenso y repetitivo | Se redujo a diez bloques: hero, experiencia, mapa, necesidades, pilares, sectores, casos, método, resumen y CTA |
| Dependencias y componentes sin uso | Se retiraron GSAP, Lenis, clsx, loader, cursor, hooks y secciones heredadas |
| Mapa pesado y movimiento continuo | Se eliminó el PNG de respaldo; el WebP pausa fuera de vista y se detiene tras interacción |

La skill `seo-aeo-best-practices` de Sanity quedó instalada en `~/.codex/skills/seo-aeo-best-practices`. Sus recomendaciones se contrastaron con documentación oficial de Google; la fuente oficial prevalece cuando hay diferencias.

## 5. Migración Wix a VPS

### Redirecciones

| URL anterior | Destino | Estado |
| --- | --- | --- |
| `/home` | `/` | 301 |
| `/arquitecturaeléctrica` | `/servicios/arquitectura-electrica/` | 301 |
| `/arquitecturadered` | `/servicios/arquitectura-de-red/` | 301 |
| `/confortyseguridad` | `/servicios/confort-y-seguridad/` | 301 |
| `/productos` | `/ups-bogota/` | 301 |
| `/post/lorem-ipsum` | página de error | 410 |
| `/post/lorem-ipsum-1` | página de error | 410 |
| `/post/lorem-ipsum-2` | página de error | 410 |
| `/post/articulo-2` | página de error | 410 |

El dominio `adesystem.com.co` redirige en un solo salto a `https://www.adesystem.com.co$request_uri`. Las reglas viven en `nginx.conf`; `public/_redirects` mantiene equivalentes para plataformas compatibles.

### Publicación

1. Desplegar el `Dockerfile` en Coolify.
2. Confirmar que el proxy conserva el host solicitado.
3. Probar cada URL anterior con `curl -I` antes del cambio de DNS.
4. Cambiar DNS cuando el sitio nuevo responda correctamente por HTTPS.
5. Enviar `https://www.adesystem.com.co/sitemap.xml` en Search Console.
6. Mantener las redirecciones al menos 12 meses; idealmente, de forma permanente.

## 6. Mapa de intención comercial

| Prioridad | URL principal | Consulta central | Consultas que debe responder dentro de la misma página |
| --- | --- | --- | --- |
| 1 | `/ups-bogota/` | UPS Bogotá | comprar UPS, instalación, precio, capacidad, kVA |
| 1 | `/ups-empresas/` | UPS para empresas | UPS para servidores, carga crítica, respaldo empresarial |
| 1 | `/mantenimiento-ups/` | mantenimiento de UPS | reparación UPS, preventivo, correctivo, alarmas |
| 1 | `/baterias-ups/` | baterías para UPS | cambio, diagnóstico, banco de baterías, autonomía |
| 1 | `/alquiler-ups-bogota/` | alquiler de UPS Bogotá | contingencia, mantenimiento, proyecto, kVA, tensión, fases, duración |
| 1 | `/utilidades/calculadora-ups-kva/` | calculadora UPS kVA | W a VA, margen, kVA a amperios, mono/trifásico |
| 1 | `/blog/como-elegir-ups-para-empresa/` | guía de compra UPS | topología, carga, autonomía, bypass, mantenimiento |
| 1 | `/blog/guia-compra-baterias-ups/` | guía de baterías UPS | compatibilidad, fecha, cadena, garantía, disposición |
| 2 | `/mantenimiento-aire-acondicionado/` | mantenimiento de aire empresarial | reparación, preventivo, consumo, fuga, contrato |
| 2 | `/aire-acondicionado-precision/` | aire de precisión | cuarto técnico, servidores, temperatura y humedad |
| 2 | `/blog/guia-compra-aire-acondicionado-empresarial/` | guía de compra de aire | carga térmica, tecnología, eficiencia, instalación |
| 3 | `/infraestructura-electrica-bogota/` | infraestructura eléctrica Bogotá | diseño, mantenimiento, redes reguladas, RETIE |
| 3 | `/tableros-electricos-bogota/` | tableros eléctricos Bogotá | TGBT, mantenimiento, termografía, protecciones |
| 3 | `/subestaciones-electricas-bogota/` | subestaciones Bogotá | diseño, mantenimiento, media tensión, RETIE |
| 4 | `/certificacion-cableado-cobre-fibra/` | certificación cobre y fibra | OTDR, OLTS, reporte por enlace, garantía |
| 4 | `/cableado-estructurado-bogota/` | cableado estructurado Bogotá | categoría 6/6A, certificación, rack, puntos |
| 4 | `/fibra-optica-bogota/` | fibra óptica Bogotá | tendido, fusión, OTDR, backbone |
| 4 | `/utilidades/calculadora-poe/` | calculadora PoE | presupuesto total, potencia por puerto, margen, IEEE |
| 4 | `/utilidades/calculadora-seccion-cable/` | calculadora sección cable | caída de tensión, cobre, aluminio, monofásico, trifásico |

No se abren páginas separadas para cada sinónimo o ciudad. “Reparación UPS” vive en mantenimiento UPS; “reparación de aire” vive en mantenimiento de aire. Solo Search Console debe justificar una nueva URL.

## 7. Contenido optimizado

Las páginas prioritarias ahora responden, en HTML visible:

- qué problema resuelve el servicio;
- señales para solicitarlo;
- proceso técnico;
- entregables;
- variables que afectan la cotización;
- límites que exigen visita, medición o ficha de fabricante;
- preguntas frecuentes y CTA específico.

La calculadora conserva resultados abiertos, fórmulas verificables y una advertencia explícita: no calcula minutos de autonomía sin modelo, baterías y curvas oficiales. Esa restricción aumenta confianza y evita convertir una orientación en una promesa técnica.

### Investigación editorial y oportunidades publicadas

La revisión de resultados colombianos mostró páginas comerciales fuertes, pero pocas herramientas abiertas. También mostró contenido fragmentado entre venta, mantenimiento y explicación técnica. No se dispone de Search Console ni de volúmenes propios. Por eso, las prioridades se basan en intención comercial, recurrencia interna y cobertura visible de resultados.

| Clúster | Oportunidad | Implementación |
| --- | --- | --- |
| Compra de UPS | Responder carga, topología, tensión, autonomía, bypass y soporte | Guía de compra UPS + calculadora UPS/kVA |
| Baterías UPS | Explicar compatibilidad, fecha, cadena completa y disposición | Guía de compra + cambio + autonomía |
| Operación UPS | Resolver online, bypass, mantenimiento y pruebas | Cuatro guías técnicas enlazadas con servicios |
| Laboratorio UPS | Explicar pruebas sin afirmar capacidades no aprobadas | Guía de laboratorio con validación previa de alcance |
| Aire acondicionado | Separar compra, mantenimiento y precisión | Tres guías enlazadas con páginas comerciales |
| Redes PoE | Calcular potencia total y por puerto | Guía + calculadora PoE |
| Conductores | Orientar caída de tensión sin sustituir ingeniería | Guía + calculadora de sección |
| Certificación | Diferenciar cobre, OLTS y OTDR | Guía + servicio de certificación |

Las seis guías publicadas usan respuesta directa, pasos, preguntas visibles y CTA. Las referencias se integran dentro del texto cuando respaldan una afirmación; no aparece un bloque “Fuentes técnicas”. Los doce artículos restantes quedan fuera de rutas y sitemap hasta su publicación gradual con fecha real.

Los competidores revisados repiten cinco patrones útiles: respuestas rápidas, tablas, calculadoras, preguntas frecuentes y CTA comercial. ADE System adopta esos patrones con cálculo trazable y límites técnicos explícitos.

Fuentes primarias adicionales:

- [CyberPower: guía de compra UPS](https://www.cyberpower.com/mx/es/knowledge/buying-guide/ups)
- [Eaton: bypass de mantenimiento](https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/maintenance-bypass-for-ups-redundancy.html)
- [Schneider Electric: mantenimiento UPS](https://blog.se.com/infrastructure-and-grid/power-management-metering-monitoring-power-quality/2015/11/19/top-5-issues-to-check-for-in-your-annual-ups-maintenance/)
- [Schneider Electric: reemplazo de baterías](https://www.se.com/us/en/faqs/FAQ000242964/)
- [Ethernet Alliance: certificación PoE](https://ethernetalliance.org/poecert/)
- [Carrier: mantenimiento HVAC](https://www.carrier.com/us/en/residential/hvac-resources/hvac-maintenance/)
- [Daikin: mantenimiento de aire acondicionado](https://www.daikin.com/products/ac/services/maintenance_tips)
- [MinAmbiente: control de fugas de refrigerante](https://www.minambiente.gov.co/documento-entidad/guia-para-el-control-de-fugas-de-refrigerante/)
- [Vertiv: climatización de confort y precisión](https://www.vertiv.com/globalassets/shared/comfort-vs.-precision-cooling-white-paper-service-aspect.pdf)

La siguiente revisión debe usar consultas reales de Search Console. Abra nuevas URLs solo cuando exista demanda diferenciada.

## 8. AEO y GEO sin atajos falsos

Google indica que optimizar para AI Overviews y AI Mode sigue siendo SEO: contenido útil, rastreable, bien enlazado y técnicamente claro. No se necesita `llms.txt`, “schema de IA” ni fragmentar artificialmente el texto.

Se aplicó:

- respuesta breve bajo el H1;
- subtítulos que coinciden con preguntas del comprador;
- proceso, límites y entregables en bloques visibles;
- FAQ visible y schema idéntico al contenido;
- referencias primarias integradas en las afirmaciones que las requieren;
- autor `Organization` hasta aprobar un revisor humano real;
- páginas de servicio enlazadas con herramienta, sector y contacto.

### Preguntas estables para medir AEO/GEO

Registrar mensualmente si ADE System aparece, es citado y con qué URL para:

1. ¿Cómo calcular el kVA de un UPS para una empresa en Colombia?
2. ¿Qué UPS necesito para un servidor y cuánto margen debo dejar?
3. ¿Qué incluye un mantenimiento de UPS empresarial?
4. ¿Cómo saber si debo cambiar el banco de baterías del UPS?
5. ¿Quién hace mantenimiento de UPS en Bogotá?
6. ¿Qué debe entregar una certificación de cableado de cobre?
7. ¿Cuál es la diferencia entre una prueba OTDR y OLTS?
8. ¿Quién certifica fibra óptica en Bogotá?
9. ¿Qué revisar en un contrato de mantenimiento de aire acondicionado?
10. ¿Cuándo usar aire acondicionado de precisión en un cuarto técnico?
11. ¿Qué debe incluir un diagnóstico de un tablero eléctrico?
12. ¿Cuándo se requiere evaluación RETIE en una remodelación?

Desde 2026 Google ofrece reportes específicos de visibilidad en funciones generativas dentro de Search Console. Se deben usar junto con el informe Web general; no sustituirlos por estimaciones de herramientas de terceros.

## 9. Ficha de hechos que debe aprobar gerencia

| Dato | Estado antes de publicar |
| --- | --- |
| Razón social | Confirmar contra Cámara de Comercio/RUT |
| Dirección, teléfono y correo | Confirmar y replicar igual en web, schema, Google Business Profile y redes |
| Año de fundación | Pendiente: fuentes internas decían 1998 y 1999; no publicar hasta resolver |
| Cobertura nacional | Confirmar ciudades, desplazamientos y restricciones |
| Horarios y soporte | Publicar solo lo pactable; 24/7 debe depender de contrato/SLA |
| Certificaciones del equipo | Adjuntar certificado, titular, vigencia y alcance |
| Programa CommScope u otro fabricante | Confirmar empresa acreditada, vigencia y condiciones de garantía |
| Clientes publicables | Autorización escrita de marca y nombre |
| Casos y resultados | Evidencia y aprobación; usar sector/alcance/resultado si hay NDA |
| Garantías y tiempos de respuesta | Definir por contrato, nunca como universal |

Hasta completar esta tabla, la web usa lenguaje conservador y casos despersonalizados.

## 10. Medición durante 90 días

### Configuración inicial

- Verificar propiedad de dominio y prefijo `https://www.adesystem.com.co/` en Search Console.
- Enviar sitemap y revisar indexación, canonicals elegidos y páginas excluidas.
- Configurar GA4 mediante GTM; el código ya bloquea su carga hasta obtener consentimiento.
- Medir `whatsapp_click`, `diagnostic_start`, `calculator_completed`, `lead_submit_success`, `portfolio_system_open` y `email_click`.
- Conectar cada lead con `source`, URL, UTM y resultado de calculadora.

### Tablero semanal

| Métrica | Segmento |
| --- | --- |
| Impresiones y clics no asociados a marca | UPS, baterías, aire, eléctrica, redes |
| Posición y CTR | URL principal por clúster |
| Páginas indexadas/excluidas | Motivo y fecha de resolución |
| Visibilidad generativa | Informe específico de Search Console y conjunto de preguntas estable |
| Conversión | WhatsApp, formulario, checklist, calculadora |
| Calidad comercial | Lead válido, cotización, cierre por fuente |

### Decisiones a 30, 60 y 90 días

- **30 días:** resolver rastreo, canonicals, 404, schema o páginas no indexadas.
- **60 días:** mejorar títulos/fragmentos con muchas impresiones y CTR bajo; reforzar enlaces internos.
- **90 días:** crear una nueva guía o URL solo si consultas reales muestran demanda y la página actual no puede responder sin mezclar intenciones.

## 11. Comandos de aceptación

```bash
npm test
npm run build
npm run audit:seo
```

`npm run build` falla si encuentra metadata ausente o duplicada, canonical incorrecto, H1 inválido, JSON-LD roto, 404 sin `noindex` o enlaces internos inexistentes. Las longitudes de títulos y descripciones se reportan como aviso editorial, no como regla rígida de Google.
