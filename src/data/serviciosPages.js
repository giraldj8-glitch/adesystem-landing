/*
 * Páginas de servicio por pilar, Nivel 2 de la arquitectura SEO.
 * /servicios/arquitectura-e-interiorismo/ reúne diseño espacial e infraestructura.
 */

export const SERVICIOS_PAGES = [
  {
    slug: 'arquitectura-electrica',
    nombre: 'Arquitectura Eléctrica',
    color: '#32D894',
    num: '01',
    tagline: 'El corazón. Energía limpia, constante, a prueba de fallos.',
    metaTitle: 'Arquitectura eléctrica para empresas | ADE System',
    metaDescription:
      'Diseño, instalación y mantenimiento eléctrico para empresas: tableros, redes reguladas, puestas a tierra, UPS y subestaciones, con alcance RETIE.',
    h1: 'Arquitectura Eléctrica',
    intro: [
      'La energía es el sistema del que dependen todos los demás. Por eso no la tratamos como un servicio de instalación, sino como arquitectura: se diseña pensando en la operación que va a sostener, se construye para durar décadas y se mantiene para que nunca sea noticia.',
      'Diseñamos e instalamos infraestructura eléctrica comercial e industrial: desde la subestación hasta el último circuito regulado, con cumplimiento y evaluación RETIE según el alcance.',
    ],
    items: [
      { title: 'Redes eléctricas normales y reguladas', text: 'Diseño y montaje de circuitos para carga general y para equipos sensibles, con tableros balanceados y protecciones coordinadas.', link: '/cableado-electrico-bogota/' },
      { title: 'Tableros eléctricos y TGBT', text: 'Diseño, ensamble y mantenimiento termográfico de tableros de distribución y generales.', link: '/tableros-electricos-bogota/' },
      { title: 'Subestaciones de media tensión', text: 'Diseño, montaje, certificación y mantenimiento de subestaciones para edificios, comercio e industria.', link: '/subestaciones-electricas-bogota/' },
      { title: 'Sistemas UPS y energía de respaldo', text: 'Dimensionamiento, suministro e instalación de UPS para cargas críticas, con contratos de soporte.', link: '/ups-empresas/' },
      { title: 'Plantas eléctricas y transferencias', text: 'Generadores con tableros de transferencia automática: respaldo de horas, no de minutos.', link: '/plantas-electricas-bogota/' },
      { title: 'Puestas a tierra y apantallamiento', text: 'Sistemas de tierra medidos y certificados, protección contra descargas atmosféricas.' },
      { title: 'Iluminación técnica', text: 'Diseño lumínico para oficinas, comercio e industria: eficiencia, confort visual y normativa.' },
      { title: 'Mantenimiento eléctrico', text: 'Preventivo y correctivo de tableros, transformadores, plantas y UPS, con niveles de atención acordados.', link: '/mantenimiento-ups/' },
    ],
    capturas: ['infraestructura-electrica-bogota', 'plantas-electricas-bogota', 'cableado-electrico-bogota', 'tableros-electricos-bogota', 'subestaciones-electricas-bogota', 'ups-empresas', 'mantenimiento-ups', 'mantenimiento-plantas-electricas'],
    blogCat: 'infraestructura-electrica',
  },
  {
    slug: 'arquitectura-de-red',
    nombre: 'Arquitectura de Red',
    color: '#611AD8',
    num: '02',
    tagline: 'El sistema nervioso. Datos sin fricción, seguros, a velocidad real.',
    metaTitle: 'Arquitectura de red y conectividad | ADE System',
    metaDescription:
      'Cableado estructurado certificado, fibra óptica, redes WiFi empresariales y centros de cableado. La capa física que sostiene los datos de tu empresa.',
    h1: 'Arquitectura de Red',
    intro: [
      'Tus datos viajan por una infraestructura física: cables, racks, fibra y antenas. Cuando esa capa se construye bien, la red funciona de forma predecible. Cuando se construye mal, aparecen fallas intermitentes difíciles de diagnosticar.',
      'Diseñamos e instalamos la capa física de datos con el mismo criterio que la eléctrica: probada por enlace, documentada y dimensionada para el crecimiento. Las garantías de fabricante se ofrecen solo cuando el sistema y la documentación cumplen el programa aplicable.',
    ],
    items: [
      { title: 'Cableado estructurado certificado', text: 'Cobre categoría 6/6A con pruebas por enlace y dossier técnico según el alcance.', link: '/cableado-estructurado-bogota/' },
      { title: 'Fibra óptica', text: 'Backbone entre pisos, edificios y campus: fusiones certificadas y medidas con OTDR.', link: '/fibra-optica-bogota/' },
      { title: 'Redes WiFi empresariales', text: 'Estudios de cobertura en sitio, access points profesionales y redes que funcionan en hora pico.', link: '/redes-wifi-empresas/' },
      { title: 'Centros de cableado y racks', text: 'Diseño, organización y documentación de racks que un técnico entiende cinco años después.' },
      { title: 'Redes para CCTV y telefonía IP', text: 'Infraestructura convergente: video, voz y datos sobre una sola capa física bien diseñada.' },
      { title: 'Diagnóstico y reordenamiento de redes', text: 'Auditoría de redes existentes, certificación de puntos y normalización de marcación.' },
    ],
    capturas: ['cableado-estructurado-bogota', 'fibra-optica-bogota', 'redes-wifi-empresas', 'datacenter-bogota'],
    blogCat: 'redes-y-conectividad',
  },
  {
    slug: 'confort-y-seguridad',
    nombre: 'Confort y Seguridad',
    color: '#345FEA',
    num: '03',
    tagline: 'Los sistemas integrados que funcionan porque la base es sólida.',
    metaTitle: 'Confort y seguridad para empresas | ADE System',
    metaDescription:
      'Seguridad y confort para empresas: control de acceso, CCTV, detección de incendios y aire acondicionado integrados con energía y redes.',
    h1: 'Confort y Seguridad',
    intro: [
      'Los sistemas de seguridad y confort son los que la gente sí ve: la puerta que abre, la cámara que registra y el clima que se siente bien. Pero todos dependen de energía estable, red y cableado bien ejecutados.',
      'Por eso integramos estos sistemas sobre bases que nosotros mismos construimos. Cuando el control de acceso, el CCTV, la detección de incendio y el clima se diseñan junto con la eléctrica y la red, el resultado es un edificio que funciona como un solo sistema.',
    ],
    items: [
      { title: 'Control de acceso', text: 'Biometría, tarjetas y gestión de visitantes con trazabilidad completa por zonas y perfiles.', link: '/control-acceso-empresas/' },
      { title: 'Circuito cerrado de televisión (CCTV)', text: 'Videovigilancia IP diseñada para identificar, con retención dimensionada y calidad de evidencia.' },
      { title: 'Detección y extinción de incendios', text: 'Sistemas normativos NFPA con agentes limpios para áreas técnicas.', link: '/sistemas-contra-incendio-bogota/' },
      { title: 'Aire acondicionado y ventilación', text: 'Climatización comercial con cálculo de carga térmica y mantenimiento.', link: '/aire-acondicionado-bogota/' },
      { title: 'Climatización de precisión', text: 'Control de temperatura y humedad 24/7 para datacenters y áreas técnicas.', link: '/aire-acondicionado-precision/' },
      { title: 'Alarmas e intrusión', text: 'Detección perimetral e interior integrada con el monitoreo y el control de acceso.' },
      { title: 'Integración de sistemas', text: 'Incendio, acceso, CCTV y clima conversando entre sí: un evento, una respuesta coordinada.' },
    ],
    capturas: ['aire-acondicionado-bogota', 'mantenimiento-aire-acondicionado', 'aire-acondicionado-precision', 'control-acceso-empresas', 'sistemas-contra-incendio-bogota', 'datacenter-bogota'],
    blogCat: 'seguridad',
  },
  {
    slug: 'arquitectura-e-interiorismo',
    nombre: 'Arquitectura e Interiorismo',
    color: '#1BC5FF',
    num: '04',
    tagline: 'El espacio donde vive tu operación. Diseñado para durar.',
    metaTitle: 'Arquitectura e interiorismo corporativo | ADE System',
    metaDescription:
      'Diseño de espacios corporativos con infraestructura integrada desde el plano: interiorismo, mobiliario, obra, energía, redes, seguridad y climatización.',
    h1: 'Arquitectura e Interiorismo',
    intro: [
      'ADE System integra interiorismo e infraestructura técnica en el mismo proyecto. Así el diseño del espacio nace con la eléctrica, la red, la seguridad y el clima coordinados desde el primer plano.',
      'Diseñamos y construimos espacios corporativos coordinando acabados, energía, redes, seguridad y climatización para reducir interferencias y reprocesos.',
    ],
    items: [
      { title: 'Adecuación integral de oficinas', text: 'Espacio + infraestructura con un solo contrato y un solo cronograma.', link: '/adecuacion-oficinas-bogota/' },
      { title: 'Diseño de espacios corporativos', text: 'Distribución, flujos de trabajo, acústica e identidad de marca aplicada al espacio.' },
      { title: 'Mobiliario corporativo', text: 'Selección y suministro de mobiliario alineado con el diseño y la ergonomía del equipo.' },
      { title: 'Obra civil liviana', text: 'Muros, cielos rasos, pisos y acabados ejecutados por el mismo equipo del proyecto.' },
      { title: 'Iluminación arquitectónica', text: 'Luz diseñada como parte del espacio: confort visual, eficiencia y atmósfera.' },
      { title: 'Remodelación sin parar la operación', text: 'Ejecución por fases y horarios no hábiles. Lo hemos hecho en bancos en pleno servicio.' },
    ],
    capturas: ['adecuacion-oficinas-bogota', 'cableado-estructurado-bogota', 'control-acceso-empresas'],
    blogCat: 'diseno-de-espacios',
  },
]

export const getServicioPage = slug => SERVICIOS_PAGES.find(s => s.slug === slug)
