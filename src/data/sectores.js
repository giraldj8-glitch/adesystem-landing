/*
 * Páginas por sector, Nivel 3 de la arquitectura SEO.
 * Mismo modelo que UPSistemas pero con casos reales colombianos como anclas.
 */

export const SECTORES = [
  {
    slug: 'sector-financiero',
    nombre: 'Sector Financiero',
    color: '#345FEA',
    metaTitle: 'Infraestructura crítica para el sector financiero | ADE System',
    metaDescription:
      'Infraestructura eléctrica, de red y seguridad para bancos y entidades financieras en Colombia, con intervenciones coordinadas por ventanas operativas.',
    h1: 'Infraestructura para el sector financiero',
    anclas: ['Continuidad', 'Trazabilidad'],
    intro: [
      'Un banco no puede explicar a sus clientes que "se cayó el sistema". Cada minuto de indisponibilidad en una entidad financiera tiene costo regulatorio, reputacional y directo. Por eso la infraestructura del sector financiero se diseña con un estándar distinto: redundancia, trazabilidad y mantenimiento que nunca se aplaza.',
      'ADE System ejecuta proyectos de infraestructura eléctrica, redes y adecuación de espacios para operaciones financieras. Los casos se presentan por alcance y resultado autorizado, sin publicar información protegida.',
    ],
    necesidades: [
      { title: 'Energía que no se interrumpe', text: 'Redes reguladas, UPS de doble conversión y transferencias automáticas para oficinas, sedes y áreas de procesamiento.' },
      { title: 'Intervenciones sin cerrar la sucursal', text: 'Obras por fases y en horario no hábil. La operación bancaria no se detiene por una remodelación.' },
      { title: 'Seguridad electrónica con trazabilidad', text: 'Control de acceso por zonas, CCTV con calidad de evidencia y registros auditables.' },
      { title: 'Cumplimiento normativo documentado', text: 'RETIE, certificaciones de red y dossier técnico completo para auditorías internas y de superintendencia.' },
    ],
    capturas: ['infraestructura-electrica-bogota', 'control-acceso-empresas', 'adecuacion-oficinas-bogota', 'ups-empresas'],
  },
  {
    slug: 'salud-y-farmaceutico',
    nombre: 'Salud y Farmacéutico',
    color: '#32D894',
    metaTitle: 'Infraestructura crítica para salud y farmacéutica | ADE System',
    metaDescription:
      'Infraestructura eléctrica, UPS, climatización y respaldo para laboratorios farmacéuticos y organizaciones de salud en Colombia.',
    h1: 'Infraestructura para salud y farmacéutico',
    anclas: ['Procesos críticos', 'Documentación'],
    intro: [
      'En un laboratorio farmacéutico, un corte de energía no es una molestia: es un lote perdido, una cadena de frío rota, una validación que se repite desde cero. Las normas BPM exigen que los sistemas críticos estén respaldados, monitoreados y documentados, y los auditores lo verifican.',
      'Las intervenciones en plantas farmacéuticas requieren protocolos, documentación y coordinación con producción y calidad. El alcance técnico debe respetar esas restricciones desde el diagnóstico.',
    ],
    necesidades: [
      { title: 'Respaldo para procesos que no pueden repetirse', text: 'UPS y energía regulada para equipos de análisis, cadenas de frío y procesos de producción continua.' },
      { title: 'Documentación de grado farmacéutico', text: 'Protocolos de intervención, registros de mantenimiento y dossier técnico que resiste auditorías BPM e INVIMA.' },
      { title: 'Climatización de áreas técnicas', text: 'Control de temperatura y humedad para áreas donde la variable ambiental es parte del producto.' },
      { title: 'Mantenimiento que respeta la producción', text: 'Ventanas de intervención acordadas con producción y calidad. La planta manda, nosotros nos adaptamos.' },
    ],
    capturas: ['ups-empresas', 'infraestructura-electrica-bogota', 'mantenimiento-ups', 'sistemas-contra-incendio-bogota'],
  },
  {
    slug: 'manufactura',
    nombre: 'Manufactura e Industria',
    color: '#32D894',
    metaTitle: 'Infraestructura para manufactura | ADE System',
    metaDescription:
      'Infraestructura eléctrica industrial en Colombia: subestaciones, tableros, redes de fuerza y respaldo para plantas de manufactura que no pueden detenerse.',
    h1: 'Infraestructura para manufactura e industria',
    anclas: ['Manufacturera Mundial'],
    intro: [
      'En una planta industrial, la energía es producción. Una falla eléctrica detiene líneas, daña producto en proceso y genera horas extras para recuperar lo perdido. Y a diferencia de una oficina, la infraestructura industrial soporta cargas pesadas, arranques de motores, armónicos y ambientes exigentes.',
      'ADE System diseña y mantiene infraestructura eléctrica industrial: subestaciones, tableros de distribución y fuerza, redes para maquinaria y sistemas de respaldo para los procesos que no pueden detenerse a mitad de ciclo.',
    ],
    necesidades: [
      { title: 'Subestaciones y media tensión', text: 'Diseño, montaje y mantenimiento de subestaciones industriales con certificación RETIE.' },
      { title: 'Redes de fuerza para maquinaria', text: 'Circuitos dimensionados para cargas inductivas, arranques y la realidad de una planta, no de una oficina.' },
      { title: 'Calidad de energía', text: 'Diagnóstico y corrección de armónicos, desbalances y caídas que degradan equipos y disparan protecciones.' },
      { title: 'Mantenimiento sin parar la línea', text: 'Termografía y mantenimiento predictivo en operación; intervenciones mayores en paradas programadas.' },
    ],
    capturas: ['subestaciones-electricas-bogota', 'plantas-electricas-bogota', 'infraestructura-electrica-bogota', 'ups-empresas', 'sistemas-contra-incendio-bogota'],
  },
  {
    slug: 'logistica-y-bodegas',
    nombre: 'Logística y Bodegas',
    color: '#611AD8',
    metaTitle: 'Infraestructura para logística y bodegas | ADE System',
    metaDescription:
      'Infraestructura eléctrica, redes y seguridad para centros logísticos y bodegas en Colombia: iluminación industrial, CCTV, control de acceso y conectividad.',
    h1: 'Infraestructura para logística y bodegas',
    anclas: ['Móvil Inc.'],
    intro: [
      'Un centro logístico moderno es tecnología sobre ruedas: lectores, básculas, WiFi industrial, cámaras y sistemas de gestión que dependen de energía y conectividad en cada rincón de la bodega. Cuando la red no llega al fondo del pasillo 14, la operación entera se hace más lenta.',
      'ADE System construye la infraestructura de centros logísticos y bodegas: iluminación industrial eficiente, redes eléctricas para equipos de manejo de carga, WiFi de cobertura total, CCTV perimetral e interior y control de acceso para zonas de valor.',
    ],
    necesidades: [
      { title: 'Cobertura WiFi total en bodega', text: 'Estudios de cobertura reales con estanterías llenas, no planos teóricos, para terminales y operación sin zonas muertas.' },
      { title: 'Iluminación industrial eficiente', text: 'Diseño lumínico para naves de gran altura: seguridad operativa con costos de energía controlados.' },
      { title: 'Seguridad perimetral e interior', text: 'CCTV con cobertura de patios, muelles y zonas de valor; control de acceso para áreas restringidas.' },
      { title: 'Energía para equipos de carga', text: 'Circuitos para cargadores de montacargas, muelles niveladores y puertas industriales.' },
    ],
    capturas: ['cableado-estructurado-bogota', 'control-acceso-empresas', 'infraestructura-electrica-bogota', 'sistemas-contra-incendio-bogota'],
  },
  {
    slug: 'entretenimiento',
    nombre: 'Entretenimiento y Medios',
    color: '#1BC5FF',
    metaTitle: 'Infraestructura para entretenimiento y medios | ADE System',
    metaDescription:
      'Infraestructura eléctrica, redes, respaldo y espacios técnicos para empresas de entretenimiento, tecnología y medios en Colombia.',
    h1: 'Infraestructura para entretenimiento y medios',
    anclas: ['Tecnología', 'Operación creativa'],
    intro: [
      'Las empresas de medios y entretenimiento viven de activos digitales: masters, catálogos, producciones y plataformas que no pueden perderse ni quedarse fuera de línea. Su infraestructura debe proteger lo irreemplazable y sostener operaciones creativas donde el espacio de trabajo también importa.',
      'Este sector combina cuartos técnicos, servidores, estudios y espacios creativos. La energía, la red, el clima y la acústica deben coordinarse sin interferir con la operación.',
    ],
    necesidades: [
      { title: 'Protección de activos digitales', text: 'Energía regulada y respaldo para servidores de almacenamiento y plataformas de distribución de contenido.' },
      { title: 'Espacios que inspiran y funcionan', text: 'Interiorismo corporativo con la infraestructura integrada: estudios, salas creativas y oficinas con identidad.' },
      { title: 'Redes para archivos pesados', text: 'Cableado de alto desempeño para mover video y audio sin cuellos de botella internos.' },
      { title: 'Confort acústico y climático', text: 'Climatización silenciosa y tratamiento de espacios donde el ruido del aire es un problema real.' },
    ],
    capturas: ['adecuacion-oficinas-bogota', 'datacenter-bogota', 'cableado-estructurado-bogota', 'ups-empresas'],
  },
  {
    slug: 'datacenter',
    nombre: 'Datacenter',
    color: '#611AD8',
    metaTitle: 'Infraestructura para datacenter: Sector | ADE System',
    metaDescription:
      'Diseño, adecuación y soporte de datacenters en Colombia: energía redundante, climatización de precisión, seguridad y mantenimiento contratado.',
    h1: 'Datacenter: el sector donde todo es crítico',
    anclas: ['Soporte definido por contrato'],
    intro: [
      'El datacenter es el sector donde la palabra "crítico" deja de ser un adjetivo comercial: aquí cada sistema es de misión crítica por definición, y la disponibilidad se mide en nueves. Diseñar, adecuar y sostener estas salas exige dominar todas las disciplinas a la vez, energía, clima, red, seguridad y obra.',
      'ADE System diseña y adecúa datacenters y cuartos de servidores, y puede sostenerlos con contratos de mantenimiento. Un solo responsable ayuda a reducir vacíos entre energía, clima, red y seguridad.',
    ],
    necesidades: [
      { title: 'Energía redundante de extremo a extremo', text: 'Acometidas, transferencias, UPS online y distribución diseñadas para el peor día del año.' },
      { title: 'Climatización de precisión', text: 'Control de temperatura y humedad con redundancia y monitoreo según la criticidad de la sala.' },
      { title: 'Seguridad física multinivel', text: 'Control de acceso biométrico, CCTV y detección/extinción con agentes limpios.' },
      { title: 'Soporte con niveles acordados', text: 'Mantenimiento programado y tiempos de atención definidos por escrito según el contrato.' },
    ],
    capturas: ['datacenter-bogota', 'aire-acondicionado-precision', 'ups-online', 'sistemas-contra-incendio-bogota', 'mantenimiento-ups'],
  },
  {
    slug: 'oficinas-corporativas',
    nombre: 'Oficinas Corporativas',
    color: '#1BC5FF',
    metaTitle: 'Infraestructura y diseño para oficinas corporativas | ADE System',
    metaDescription:
      'Adecuación integral de oficinas corporativas en Colombia: interiorismo e infraestructura eléctrica, de red y seguridad bajo un alcance coordinado.',
    h1: 'Oficinas corporativas: espacio + infraestructura',
    anclas: ['Interiorismo e infraestructura coordinados'],
    intro: [
      'Una oficina corporativa es la intersección de dos mundos que casi nunca se hablan: el diseño del espacio y la ingeniería que lo hace funcionar. Las empresas suelen contratar esos mundos por separado, y pagan el costo en sobrecostos, retrasos y resultados que se ven bien pero funcionan mal.',
      'ADE System puede coordinar interiorismo, mobiliario y obra con la infraestructura eléctrica, de red, seguridad y climatización dentro del mismo proyecto.',
    ],
    necesidades: [
      { title: 'Diseño con la infraestructura integrada', text: 'El plano nace con la eléctrica, la red y la seguridad resueltas. Cero improvisación en obra.' },
      { title: 'Un contrato, un cronograma', text: 'Sin coordinar contratistas que se culpan entre sí. Una sola firma responde por el resultado completo.' },
      { title: 'Puestos de trabajo que funcionan el día uno', text: 'Red certificada, eléctrica balanceada, mobiliario instalado. Tu equipo llega y trabaja.' },
      { title: 'Remodelación con la oficina operando', text: 'Fases y horarios no hábiles para no detener tu operación durante la obra.' },
    ],
    capturas: ['adecuacion-oficinas-bogota', 'aire-acondicionado-bogota', 'cableado-estructurado-bogota', 'control-acceso-empresas', 'infraestructura-electrica-bogota'],
  },
  {
    slug: 'pymes',
    nombre: 'PYMES',
    color: '#32D894',
    metaTitle: 'Infraestructura y UPS para PYMES en Colombia | ADE System',
    metaDescription:
      'UPS, redes y seguridad para PYMES en Colombia con la misma ingeniería de los grandes proyectos: precios claros, respuesta por WhatsApp y soluciones a tu escala.',
    h1: 'PYMES: ingeniería de grandes ligas, a tu escala',
    anclas: ['Atención directa por WhatsApp'],
    intro: [
      'Las PYMES colombianas tienen las mismas necesidades de infraestructura que las grandes empresas, proteger sus equipos, tener una red que funcione, asegurar sus instalaciones, pero el mercado las atiende mal: los grandes proveedores no les contestan y los pequeños no tienen el criterio técnico.',
      'En ADE System atendemos PYMES con la misma ingeniería que aplicamos en bancos y laboratorios, dimensionada a tu escala y a tu presupuesto: un UPS bien elegido para tu oficina de 5 personas, una red que no se cae, una cámara donde de verdad sirve. Sin mínimos de proyecto, sin letra pequeña.',
    ],
    necesidades: [
      { title: 'UPS sin sobredimensionar', text: 'El equipo que tu carga real necesita, no el más caro del catálogo. Cotización el mismo día por WhatsApp.' },
      { title: 'Redes pequeñas bien hechas', text: 'Cableado certificado y WiFi confiable para oficinas de 3 a 50 puestos. El tamaño no justifica la improvisación.' },
      { title: 'Seguridad esencial', text: 'CCTV y control de acceso dimensionados a tu riesgo real, con equipos que puedes administrar tú mismo.' },
      { title: 'Soporte directo, sin intermediarios', text: 'Hablas con el equipo técnico que conoce la instalación y el alcance contratado.' },
    ],
    capturas: ['ups-bogota', 'baterias-ups', 'cableado-estructurado-bogota', 'control-acceso-empresas'],
  },
]

export const getSector = slug => SECTORES.find(s => s.slug === slug)
