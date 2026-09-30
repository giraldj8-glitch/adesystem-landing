export const SYSTEMS = [
  {
    id: 'energia', number: '01', title: 'Subestación y tableros', color: '#32D894', x: 14, y: 73,
    to: '/servicios/arquitectura-electrica/',
  },
  {
    id: 'ups', number: '02', title: 'UPS y baterías', color: '#32D894', x: 31, y: 77,
    to: '/ups-empresas/',
  },
  {
    id: 'datacenter', number: '03', title: 'Data center', color: '#611AD8', x: 55, y: 75,
    to: '/datacenter-bogota/',
  },
  {
    id: 'red', number: '04', title: 'Red, cobre y fibra', color: '#611AD8', x: 39, y: 41,
    to: '/servicios/arquitectura-de-red/',
  },
  {
    id: 'seguridad', number: '05', title: 'Seguridad integrada', color: '#345FEA', x: 17, y: 35,
    to: '/servicios/confort-y-seguridad/',
  },
  {
    id: 'clima', number: '06', title: 'Climatización', color: '#345FEA', x: 67, y: 50,
    to: '/aire-acondicionado-bogota/',
  },
  {
    id: 'interiorismo', number: '07', title: 'Oficinas e interiorismo', color: '#1BC5FF', x: 62, y: 27,
    to: '/servicios/arquitectura-e-interiorismo/',
  },
  {
    id: 'fachada', number: '08', title: 'Fachada y entrega', color: '#1BC5FF', x: 87, y: 48,
    to: '/adecuacion-oficinas-bogota/',
  },
  {
    id: 'planta', number: '09', title: 'Planta eléctrica', color: '#32D894',
    to: '/plantas-electricas-bogota/',
  },
]

const explanations = {
  energia: ['La energía llega a donde su empresa la necesita.', 'La subestación adapta la energía y los tableros la distribuyen a cada circuito. Las protecciones ayudan a aislar fallas.', 'Revisamos capacidad, distribución y protecciones antes de conectar nuevas cargas.'],
  ups: ['Un corte no debería llevarse su trabajo.', 'La UPS usa baterías para mantener encendidos los equipos conectados durante una interrupción. Ese tiempo permite continuar o apagar de forma controlada.', 'Dimensionamos la UPS y comprobamos las baterías según los equipos y el tiempo de respaldo requerido.'],
  datacenter: ['Sus aplicaciones necesitan un lugar preparado.', 'Los racks organizan servidores y comunicaciones. Energía, refrigeración y monitoreo trabajan juntos para sostener su funcionamiento.', 'Coordinamos los sistemas para que la sala pueda operar, mantenerse y crecer.'],
  red: ['Conexiones que acompañan el ritmo del equipo.', 'El cableado y la fibra llevan los datos; los switches y el Wi-Fi conectan a las personas y a sus equipos.', 'Diseñamos cobertura y capacidad, y verificamos los enlaces instalados.'],
  seguridad: ['Sepa qué ocurre y quién entra.', 'Las cámaras permiten observar, el control de acceso administra entradas y los sistemas de detección alertan sobre eventos.', 'Integramos los sistemas según el espacio, sus riesgos y la operación.'],
  clima: ['La temperatura también sostiene su operación.', 'El aire acondicionado retira calor. Una oficina y una sala de servidores requieren soluciones distintas según uso y carga térmica.', 'Evaluamos el espacio y los equipos para elegir y mantener la climatización adecuada.'],
  interiorismo: ['Un espacio listo para trabajar, de verdad.', 'Mobiliario, iluminación, acústica, energía y datos se coordinan desde el diseño para facilitar el trabajo diario.', 'Planeamos la adecuación completa para reducir retrabajos entre especialidades.'],
  fachada: ['La entrega va más allá de los acabados.', 'Detrás de una oficina terminada hay instalaciones que necesitan acceso para mantenimiento y documentación para operar.', 'Coordinamos acabados, pruebas y entrega del alcance contratado.'],
  planta: ['Respaldo para cortes que se prolongan.', 'La planta genera energía con combustible. Requiere arrancar y estabilizarse; la UPS puede cubrir esa transición en las cargas críticas.', 'Validamos potencia, transferencia, instalación y mantenimiento para integrar el respaldo.'],
}

for (const system of SYSTEMS) {
  const [benefit, explanation, next] = explanations[system.id]
  Object.assign(system, { benefit, explanation, next, src: `/images/detalle-${system.id}-adesystem.webp`, alt: `Render conceptual de ${system.title.toLowerCase()}` })
}

export function systemsForPage(slug, mediaKey) {
  if (slug === 'confort-y-seguridad') return ['seguridad', 'clima']
  if (slug?.includes('planta')) return ['planta', 'ups', 'energia']
  if (slug?.includes('datacenter') || slug === 'datacenter') return ['datacenter', 'ups', 'clima', 'red']
  return {
    electrical: ['energia', 'planta', 'ups'], ups: ['ups', 'planta'], network: ['red', 'datacenter'],
    certification: ['red'], security: ['seguridad'], air: ['clima'], interiors: ['interiorismo', 'fachada'],
    projects: ['interiorismo', 'red', 'ups'],
  }[mediaKey] || ['energia', 'red', 'interiorismo']
}
