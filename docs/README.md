# Documentación de Adesystem

Este directorio es la fuente de verdad para operar, editar y continuar el sitio con Codex, Claude Code, Antigravity u otra herramienta.

## Orden de lectura

1. [`../README.md`](../README.md) — instalación, comandos y reglas básicas.
2. [`registro-implementacion.md`](registro-implementacion.md) — estado real del trabajo y pendientes.
3. [`arquitectura-y-edicion.md`](arquitectura-y-edicion.md) — mapa técnico y guía para editar.
4. [`auditoria-seo-aeo.md`](auditoria-seo-aeo.md) — investigación, estrategia SEO/AEO/GEO y plan de medición.

## Responsabilidad de cada documento

| Documento | Mantiene | No debe duplicar |
| --- | --- | --- |
| `README.md` raíz | Entrada al proyecto, comandos y reglas | Auditoría completa o detalle de cada ruta |
| `registro-implementacion.md` | Cambios terminados, decisiones y pendientes externos | Instrucciones extensas de edición |
| `arquitectura-y-edicion.md` | Cómo funciona y cómo se modifica | Historia detallada de la auditoría |
| `auditoria-seo-aeo.md` | Hallazgos, mapa de intención, migración y medición | Manual de desarrollo diario |

## Cómo mantener la documentación

- Si cambia un comando, una variable o la estructura general, actualizar el `README.md` raíz.
- Si se termina o descarta una iniciativa, actualizar `registro-implementacion.md`.
- Si cambia una ruta, modelo de datos, fórmula o proceso de despliegue, actualizar `arquitectura-y-edicion.md`.
- Si cambia la estrategia de búsqueda, redirecciones o medición, actualizar `auditoria-seo-aeo.md`.
- Registrar hechos aprobados; no documentar como terminado algo que dependa de una credencial, publicación o aprobación externa.

No crear otro “LEEME”, “guía final” o “documentación nueva”. Actualizar el documento responsable para evitar versiones contradictorias.
