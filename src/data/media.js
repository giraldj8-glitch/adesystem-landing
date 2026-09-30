export const MEDIA = {
  home: { src: '/images/hero-infraestructura-adesystem.jpg', alt: 'Ingeniero en una sala de infraestructura crítica con UPS y racks de comunicaciones' },
  electrical: { src: '/images/servicio-electrico.jpg', alt: 'Inspección técnica de un tablero eléctrico empresarial con cámara termográfica' },
  network: { src: '/images/servicio-redes.jpg', alt: 'Ingeniero revisando un rack de cableado estructurado y fibra óptica' },
  security: { src: '/images/servicio-seguridad.jpg', alt: 'Ingeniera supervisando sistemas integrados de seguridad y control' },
  interiors: { src: '/images/servicio-interiorismo.jpg', alt: 'Oficina corporativa moderna con infraestructura integrada' },
  ups: { src: '/images/servicio-ups.jpg', alt: 'Técnico realizando mantenimiento a UPS y banco de baterías empresarial' },
  air: { src: '/images/servicio-climatizacion.jpg', alt: 'Técnico realizando mantenimiento de aire acondicionado en una oficina' },
  certification: { src: '/images/servicio-certificacion.jpg', alt: 'Certificación de enlaces de cobre y fibra óptica con instrumentos de medición' },
  projects: { src: '/images/proyectos-equipo.jpg', alt: 'Equipo de ingeniería revisando planos durante una visita técnica' },
  portfolio: {
    src: '/images/mapa-proyecto-integral-adesystem.webp',
    alt: 'Corte arquitectónico de un proyecto integral con energía, UPS, data center, redes, seguridad, climatización e interiorismo',
  },
}

const capturaMedia = {
  'ups-bogota': 'ups', 'ups-empresas': 'ups', 'mantenimiento-ups': 'ups', 'ups-online': 'ups',
  'baterias-ups': 'ups', 'diagnostico-ups-banco-baterias': 'ups', 'alquiler-ups-bogota': 'ups',
  'infraestructura-electrica-bogota': 'electrical', 'subestaciones-electricas-bogota': 'electrical',
  'cableado-electrico-bogota': 'electrical', 'tableros-electricos-bogota': 'electrical',
  'plantas-electricas-bogota': 'electrical', 'mantenimiento-plantas-electricas': 'electrical',
  'cableado-estructurado-bogota': 'network', 'datacenter-bogota': 'network',
  'redes-wifi-empresas': 'network', 'fibra-optica-bogota': 'network',
  'certificacion-cableado-cobre-fibra': 'certification',
  'sistemas-contra-incendio-bogota': 'security', 'control-acceso-empresas': 'security',
  'adecuacion-oficinas-bogota': 'interiors',
  'aire-acondicionado-bogota': 'air', 'mantenimiento-aire-acondicionado': 'air', 'aire-acondicionado-precision': 'air',
}

const servicioMedia = {
  'arquitectura-electrica': 'electrical',
  'arquitectura-de-red': 'network',
  'confort-y-seguridad': 'security',
  'arquitectura-e-interiorismo': 'interiors',
}

const sectorMedia = {
  'sector-financiero': 'ups', 'salud-y-farmaceutico': 'air', manufactura: 'electrical',
  'logistica-y-bodegas': 'security', entretenimiento: 'network', datacenter: 'network',
  'oficinas-corporativas': 'interiors', pymes: 'projects',
}

const categoryMedia = {
  ups: 'ups', 'aire-acondicionado': 'air', 'infraestructura-electrica': 'electrical', 'redes-y-conectividad': 'certification',
  seguridad: 'security', 'diseno-de-espacios': 'interiors',
}

const byKey = key => ({ ...(MEDIA[key] || MEDIA.projects), key: MEDIA[key] ? key : 'projects' })
export const mediaForCaptura = slug => byKey(capturaMedia[slug])
export const mediaForServicio = slug => byKey(servicioMedia[slug])
export const mediaForSector = slug => byKey(sectorMedia[slug])
export const mediaForCategory = slug => byKey(categoryMedia[slug])
