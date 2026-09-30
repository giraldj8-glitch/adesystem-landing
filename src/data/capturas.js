/*
 * Páginas de captura por intención de búsqueda, Nivel 1 de la estrategia SEO.
 * Cada entrada es una URL independiente que responde una búsqueda específica
 * (mismo patrón que /ups/, /ups-alquiler/, /ups-mantenimiento/ de UPSistemas,
 * pero apuntando a las keywords donde ADE System tiene ventaja).
 */

export const CAPTURAS = [
  {
    slug: 'ups-bogota',
    keyword: 'UPS Bogotá',
    color: '#32D894',
    nav: 'UPS en Bogotá',
    metaTitle: 'UPS en Bogotá: venta, instalación y soporte | ADE System',
    metaDescription:
      'Compra UPS en Bogotá con dimensionamiento de carga, instalación y soporte técnico. Soluciones para oficinas, servidores y equipos críticos.',
    eyebrow: 'Línea UPS · Entrega en Bogotá',
    h1: 'UPS en Bogotá: el equipo correcto para tu operación. Sin adivinar.',
    intro: [
      'Un UPS debe elegirse por la carga crítica, la potencia real en W, la autonomía requerida y las condiciones de la red. En ADE System dimensionamos la solución antes de recomendar un equipo, para evitar capacidad insuficiente o costos que no aportan a la operación.',
      'Trabajamos desde UPS para un solo computador hasta soluciones para salas de servidores completas. Te asesoramos según lo que necesitas proteger, cuánta autonomía requieres y qué presupuesto tienes, no según lo que haya en bodega.',
    ],
    benefits: [
      {
        title: 'Asesoría de quien sabe de infraestructura',
        text: 'No somos una tienda que vende cajas. Somos una firma de ingeniería que dimensiona tu UPS según tu carga real, tu calidad de energía y tu tolerancia al riesgo.',
      },
      {
        title: 'Atención directa por WhatsApp',
        text: 'Cuéntanos qué equipos necesitas proteger. Confirmamos disponibilidad, alcance de instalación y tiempo de entrega en la cotización.',
      },
      {
        title: 'Puesta en marcha documentada',
        text: 'La instalación puede incluir verificación eléctrica, configuración y pruebas de operación según el alcance contratado.',
      },
      {
        title: 'Soporte y mantenimiento',
        text: 'Mantenimiento preventivo, diagnóstico y cambio de baterías. La disponibilidad de atención se define en cada contrato.',
      },
    ],
    scope: {
      title: 'Qué se define antes de recomendar un UPS',
      answer: 'La capacidad no se decide solo por kVA. Se revisan carga en W, factor de potencia, margen de crecimiento, tensión, tipo de carga y autonomía objetivo.',
      sections: [
        { title: 'Información necesaria', text: 'Listado de equipos, potencia de placa o ficha técnica, tensión disponible y tiempo de respaldo esperado.' },
        { title: 'Proceso', text: 'Levantamiento de carga, conversión a VA/kVA, selección de tecnología y validación de instalación y bypass cuando aplique.' },
        { title: 'Entregable', text: 'Propuesta con capacidad, potencia real en W, modelo, alcance de instalación y condiciones de garantía.' },
        { title: 'Límite del cálculo', text: 'La autonomía exacta requiere el modelo, el banco de baterías y la curva oficial del fabricante.' },
      ],
      note: 'Puedes iniciar con la calculadora UPS del sitio y solicitar validación técnica antes de comprar.',
      sources: [{ label: 'Guía de dimensionamiento Eaton', url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-sizing-guide.html' }],
    },
    faqs: [
      {
        q: '¿Qué UPS necesito para mi oficina en Bogotá?',
        a: 'Depende de la potencia real de los equipos, el factor de potencia, el margen de crecimiento y la autonomía. Usa la calculadora como punto de partida y valida la potencia de salida en W del modelo antes de comprar.',
      },
      {
        q: '¿Venden UPS para personas naturales o solo para empresas?',
        a: 'Ambos. Atendemos desde el profesional independiente que quiere proteger su workstation hasta empresas con salas de servidores. El proceso es el mismo: nos cuentas qué necesitas proteger y te recomendamos el equipo correcto.',
      },
      {
        q: '¿Incluyen instalación del UPS?',
        a: 'Sí. Ofrecemos entrega con instalación y puesta en marcha en Bogotá. Para equipos de mayor capacidad, la instalación incluye verificación del circuito eléctrico que alimenta el UPS, porque un UPS sobre una red defectuosa no protege nada.',
      },
      {
        q: '¿Cuánto demora la entrega de un UPS en Bogotá?',
        a: 'El tiempo depende de la capacidad, marca, inventario y alcance de instalación. Se confirma por escrito en la cotización antes de la compra.',
      },
    ],
    related: ['ups-empresas', 'mantenimiento-ups', 'baterias-ups', 'ups-online'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: {
      title: '¿Cuánto vale una hora sin luz en tu negocio?',
      text: 'Cuéntanos qué necesitas proteger y recibe una cotización según carga, autonomía y alcance de instalación.',
      whatsapp: 'Hola, quiero cotizar un UPS en Bogotá.',
    },
  },

  {
    slug: 'ups-empresas',
    keyword: 'UPS para empresas Colombia',
    color: '#32D894',
    nav: 'UPS para empresas',
    metaTitle: 'UPS para empresas: diseño e instalación | ADE System',
    metaDescription:
      'UPS para empresas con cálculo de carga, instalación, puesta en marcha y mantenimiento. Soluciones para servidores, laboratorios y procesos críticos.',
    eyebrow: 'Línea UPS · Empresas',
    h1: 'UPS para empresas: energía que no se negocia.',
    intro: [
      'Cuando la energía falla, un UPS bien dimensionado permite sostener la carga o hacer un apagado controlado. La solución cambia según el tipo de equipo, el costo de detenerse, la calidad de la red y el tiempo de respaldo requerido.',
      'Nuestro trabajo empieza antes de vender: levantamos la carga, revisamos las condiciones eléctricas y definimos capacidad, tecnología, baterías y alcance de instalación. El mantenimiento y los tiempos de atención se acuerdan según la criticidad y el contrato.',
    ],
    benefits: [
      {
        title: 'Dimensionamiento con criterio de ingeniería',
        text: 'Calculamos la carga real y el crecimiento previsto antes de recomendar capacidad, potencia en W y tecnología.',
      },
      {
        title: 'Instalación que protege la inversión',
        text: 'Un UPS conectado a una red con problemas de puesta a tierra o regulación es dinero perdido. Verificamos toda la cadena eléctrica antes de la puesta en marcha.',
      },
      {
        title: 'Soporte definido por contrato',
        text: 'Mantenimiento preventivo programado, seguimiento de baterías y niveles de atención acordados según la criticidad.',
      },
      {
        title: 'Un solo responsable de toda la cadena',
        text: 'Desde la consultoría hasta el soporte postventa, con alcance, responsables y entregables definidos.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo se calcula el UPS que necesita una empresa?',
        a: 'Se suma la potencia de los equipos críticos, se valida el factor de potencia, se agrega margen de crecimiento y se define la autonomía. El modelo final debe cumplir capacidad en W y VA; la visita se cotiza según el alcance.',
      },
      {
        q: '¿Qué diferencia hay entre un UPS empresarial y uno de hogar?',
        a: 'Los UPS empresariales suelen ser de doble conversión (online): regeneran la energía completamente y entregan una onda limpia sin transferencia. Los de hogar son interactivos o standby, con micro-cortes de transferencia que un servidor o equipo médico no tolera.',
      },
      {
        q: '¿Atienden empresas fuera de Bogotá?',
        a: 'Sí. Tenemos cobertura nacional para proyectos empresariales, con base de operaciones en Bogotá.',
      },
      {
        q: '¿Ofrecen mantenimiento para UPS que no vendieron ustedes?',
        a: 'Sí. Nuestros contratos de mantenimiento preventivo cubren equipos de cualquier marca, previa evaluación técnica del estado del equipo y sus baterías.',
      },
    ],
    related: ['ups-bogota', 'plantas-electricas-bogota', 'mantenimiento-ups', 'ups-online'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: {
      title: 'Tu operación no puede permitirse fallar.',
      text: 'Solicita una evaluación de carga y define la capacidad, autonomía e instalación que requiere tu empresa.',
      whatsapp: 'Hola, necesito una solución UPS para mi empresa.',
    },
  },

  {
    slug: 'mantenimiento-ups',
    keyword: 'Mantenimiento de UPS',
    color: '#32D894',
    nav: 'Mantenimiento de UPS',
    metaTitle: 'Mantenimiento de UPS en Bogotá | ADE System',
    metaDescription:
      'Mantenimiento preventivo, diagnóstico y reparación de UPS en Bogotá. Revisamos baterías, alarmas, ventilación, bypass y parámetros eléctricos.',
    eyebrow: 'Soporte · Preventivo y correctivo',
    h1: 'Mantenimiento de UPS: el respaldo de tu respaldo.',
    intro: [
      'Un UPS sin mantenimiento es una promesa vacía. Las baterías se degradan en silencio, los ventiladores acumulan polvo y los capacitores envejecen. Muchas fallas se pueden detectar antes del corte con inspección, mediciones e historial.',
      'En ADE System ofrecemos mantenimiento preventivo, diagnóstico y reparación de UPS con visitas programadas, revisión de baterías, limpieza interna y verificación de parámetros eléctricos. La atención prioritaria y los horarios se definen en el contrato.',
    ],
    benefits: [
      {
        title: 'Preventivo programado, no reactivo',
        text: 'Visitas periódicas con protocolo técnico: estado de baterías, temperatura, ventilación, parámetros de entrada y salida, registro histórico del equipo.',
      },
      {
        title: 'Múltiples marcas y capacidades',
        text: 'Evaluamos marca, modelo, capacidad y disponibilidad de información o repuestos antes de confirmar el mantenimiento.',
      },
      {
        title: 'Atención según criticidad',
        text: 'Los contratos pueden incluir prioridad, horarios y tiempos de atención definidos por escrito según la operación.',
      },
      {
        title: 'Diagnóstico honesto',
        text: 'Si tu equipo todavía da más vida útil, te lo decimos. Si ya es un riesgo, también. No vendemos cambios de equipo que no se necesitan.',
      },
    ],
    scope: {
      title: 'Qué incluye el mantenimiento y cuándo pedirlo',
      answer: 'El mantenimiento busca detectar degradación antes de una falla. La frecuencia y las pruebas dependen del fabricante, la carga, el ambiente, la edad y la criticidad del sistema.',
      sections: [
        { title: 'Señales de alerta', text: 'Alarmas, autonomía menor, ruido o temperatura inusual, ventiladores detenidos, baterías deformadas o historial de mantenimiento incompleto.' },
        { title: 'Proceso', text: 'Inspección, limpieza segura, revisión de registros, mediciones disponibles, baterías, transferencia y condiciones de alimentación.' },
        { title: 'Entregables', text: 'Reporte de hallazgos, evidencia disponible, acciones realizadas, repuestos sugeridos y prioridades de intervención.' },
        { title: 'Variables de cotización', text: 'Marca, modelo, capacidad, cantidad de equipos, baterías, ubicación, acceso, horario y pruebas autorizadas.' },
      ],
      note: 'Una visita no debe simular un corte ni descargar baterías sin acordar el riesgo, la ventana y el procedimiento con el responsable de la operación.',
      sources: [{ label: 'Mantenimiento de UPS Eaton', url: 'https://www.eaton.com/content/dam/eaton/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/eaton-9355-ups/manuals/eaton-9355-ups-10-15-kva-user-guide-164201594.pdf' }],
    },
    faqs: [
      {
        q: '¿Cada cuánto se debe hacer mantenimiento a un UPS?',
        a: 'La frecuencia debe seguir el manual del fabricante y considerar carga, ambiente, edad y criticidad. En equipos críticos suele programarse más de una revisión al año; el plan definitivo se acuerda después de identificar el sistema y su riesgo.',
      },
      {
        q: '¿Qué incluye un mantenimiento preventivo de UPS?',
        a: 'Inspección física, limpieza interna, medición de voltajes de entrada y salida, prueba de transferencia, medición individual de baterías, verificación de ventilación y temperatura, ajuste de parámetros y reporte técnico con recomendaciones.',
      },
      {
        q: '¿Cuándo deben cambiarse las baterías de un UPS?',
        a: 'La vida depende de la química, temperatura, ciclos y diseño del banco. Edad o alarma son señales para evaluar, pero la decisión debe basarse en mediciones, historial y criterios del fabricante.',
      },
      {
        q: '¿Hacen mantenimiento de UPS fuera de Bogotá?',
        a: 'Sí, con contratos empresariales tenemos cobertura nacional. La frecuencia de visitas y el esquema de respuesta se acuerdan según la criticidad de tu operación.',
      },
    ],
    related: ['baterias-ups', 'ups-bogota', 'ups-empresas', 'infraestructura-electrica-bogota'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: {
      title: '¿Cuándo fue la última revisión de tu UPS?',
      text: 'Agenda un diagnóstico del estado real de tu equipo y sus baterías.',
      whatsapp: 'Hola, quiero cotizar mantenimiento para mi UPS.',
    },
  },

  {
    slug: 'ups-online',
    keyword: 'UPS online doble conversión',
    color: '#32D894',
    nav: 'UPS online',
    metaTitle: 'UPS online de doble conversión | ADE System',
    metaDescription:
      'UPS online de doble conversión para servidores, equipos médicos y cargas críticas en Colombia. Dimensionamiento, instalación y soporte técnico.',
    eyebrow: 'Línea UPS · Doble conversión',
    h1: 'UPS online para cargas que no toleran interrupciones.',
    intro: [
      'No todos los UPS son iguales. Un UPS online de doble conversión alimenta la carga desde el inversor de forma continua y acondiciona la energía de entrada. Esta arquitectura evita el tiempo de transferencia asociado a otras topologías y ayuda a aislar variaciones de la red.',
      'Es el estándar para servidores, equipos médicos, laboratorios y cualquier carga que no tolera ni un parpadeo. En ADE System te ayudamos a decidir si tu operación lo necesita, y si no lo necesita, también te lo decimos.',
    ],
    benefits: [
      {
        title: 'Sin tiempo de transferencia a batería',
        text: 'El inversor alimenta la carga de forma continua. La protección final depende del dimensionamiento, la instalación y el estado del sistema.',
      },
      {
        title: 'Protección contra los 9 problemas de la red',
        text: 'Cortes, caídas de voltaje, picos, subtensión, sobretensión, ruido eléctrico, variación de frecuencia, transitorios y distorsión armónica.',
      },
      {
        title: 'Para las cargas que valen más que el UPS',
        text: 'Servidores, equipos de diagnóstico médico, instrumentación de laboratorio, centrales telefónicas, sistemas de seguridad.',
      },
      {
        title: 'Dimensionamiento honesto',
        text: 'Si tu carga es ofimática y un UPS interactivo te basta, te lo decimos. La doble conversión se recomienda cuando se justifica, no para subir la factura.',
      },
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre UPS online y line-interactive?',
        a: 'El line-interactive deja pasar la energía de la red y solo conmuta a baterías cuando detecta una falla, con un tiempo de transferencia de 2 a 10 milisegundos. El online alimenta la carga siempre desde su inversor, con energía regenerada y transferencia cero. Para ofimática, el interactivo basta; para servidores y equipos críticos, el online es el estándar.',
      },
      {
        q: '¿Cuándo se justifica pagar más por un UPS online?',
        a: 'Cuando el costo de un micro-corte supera la diferencia de precio: bases de datos en escritura, virtualización, equipos médicos en uso, procesos industriales sensibles. También cuando la red eléctrica de la zona es inestable, porque el online filtra todos los defectos de la red, no solo los cortes.',
      },
      {
        q: '¿Un UPS online consume más energía?',
        a: 'Sí, la doble conversión tiene una eficiencia típica de 90-94% frente al 95-98% del interactivo. Es el costo de regenerar la energía permanentemente. Muchos modelos modernos incluyen modo eco para cargas que lo permitan.',
      },
      {
        q: '¿Qué capacidades de UPS online manejan?',
        a: 'Desde 1 kVA monofásicos para racks pequeños hasta sistemas trifásicos para salas de servidores y datacenter. Te asesoramos con cálculo de carga real, no con tablas genéricas.',
      },
    ],
    related: ['ups-empresas', 'ups-bogota', 'datacenter-bogota', 'mantenimiento-ups'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: {
      title: '¿Tu carga crítica merece energía regenerada?',
      text: 'Cuéntanos qué necesitas proteger y te decimos con criterio técnico qué tecnología te conviene.',
      whatsapp: 'Hola, quiero información sobre UPS online de doble conversión.',
    },
  },

  {
    slug: 'baterias-ups',
    keyword: 'Baterías para UPS',
    color: '#32D894',
    nav: 'Baterías para UPS',
    metaTitle: 'Baterías para UPS: diagnóstico y cambio | ADE System',
    metaDescription:
      'Diagnóstico y cambio de baterías para UPS en Bogotá y Colombia. Revisamos banco, compatibilidad, instalación y retiro según el alcance contratado.',
    eyebrow: 'Línea UPS · Baterías',
    h1: 'Baterías para UPS: donde realmente vive tu respaldo.',
    intro: [
      'El UPS es la carcasa; las baterías son el respaldo. Y son también el componente que más falla: una batería sellada pierde capacidad de forma invisible, sin alarmas, hasta el día en que el corte de energía revela que tu autonomía de 30 minutos se había convertido en 4. Cambiar las baterías a tiempo cuesta una fracción de lo que cuesta descubrirlo tarde.',
      'En ADE System revisamos el estado del banco, identificamos la referencia compatible y definimos el cambio completo cuando corresponde. El suministro, instalación, pruebas y retiro de baterías usadas quedan especificados en la propuesta.',
    ],
    benefits: [
      {
        title: 'Medición antes de vender',
        text: 'Medimos batería por batería. Si tu banco todavía tiene vida útil, te lo decimos con datos. Si está en riesgo, te mostramos exactamente por qué.',
      },
      {
        title: 'Referencia y fecha verificables',
        text: 'La propuesta identifica tecnología, referencia, cantidad y condiciones de suministro para validar compatibilidad con el UPS.',
      },
      {
        title: 'Cambio con procedimiento acordado',
        text: 'Evaluamos bypass, redundancia y ventana de intervención. Nunca se asume que el banco puede cambiarse en caliente sin validar el modelo y el riesgo.',
      },
      {
        title: 'Retiro definido en la propuesta',
        text: 'Cuando el alcance incluye retiro, se documenta la gestión aplicable para las baterías usadas y el responsable de cada etapa.',
      },
    ],
    scope: {
      title: 'Cómo se evalúa un banco de baterías UPS',
      answer: 'No basta con mirar la alarma del equipo. Se combinan identificación del banco, edad e historial, condiciones térmicas, inspección, mediciones permitidas y criterios del fabricante.',
      sections: [
        { title: 'Señales de riesgo', text: 'Autonomía menor, alarmas, mezcla de referencias o edades, temperatura alta, corrosión, deformación o ausencia de historial.' },
        { title: 'Proceso', text: 'Inventario, inspección segura, contraste con el modelo del UPS, mediciones definidas y revisión de condiciones del gabinete o rack.' },
        { title: 'Entregables', text: 'Estado observado, limitaciones de la prueba, recomendación de cambio o seguimiento y propuesta del banco compatible.' },
        { title: 'Variables de precio', text: 'Tecnología, voltaje, capacidad, cantidad, acceso, gabinete, horario, instalación, pruebas y retiro.' },
      ],
      note: 'La autonomía solo puede validarse con el sistema específico, una prueba controlada o curvas oficiales del fabricante; no se deduce únicamente por la edad.',
    },
    faqs: [
      {
        q: '¿Cuánto duran las baterías de un UPS?',
        a: 'Las baterías selladas de plomo-ácido (VRLA) tienen una vida útil de diseño de 3 a 5 años, pero el calor la reduce drásticamente: por cada 8°C por encima de 25°C, la vida útil se reduce a la mitad. Un UPS en un cuarto caliente puede agotar sus baterías en 2 años.',
      },
      {
        q: '¿Cómo sé si las baterías de mi UPS ya deben cambiarse?',
        a: 'Señales de alerta: la autonomía es notablemente menor que antes, el UPS pita o marca alarma de batería, las baterías están infladas o con más de 3-4 años de uso. La confirmación definitiva es la medición de capacidad, que hacemos en sitio.',
      },
      {
        q: '¿Se pueden cambiar solo las baterías malas del banco?',
        a: 'No es recomendable. Mezclar baterías nuevas con viejas en un mismo banco desequilibra la carga: las viejas arrastran a las nuevas y el banco completo se degrada acelerado. El estándar técnico es reemplazar el banco completo.',
      },
      {
        q: '¿Venden baterías para cualquier marca de UPS?',
        a: 'Atendemos distintas marcas, previa identificación del modelo, tensión, tecnología, cantidad y configuración del banco. La propuesta especifica la referencia compatible y sus condiciones de garantía.',
      },
    ],
    related: ['mantenimiento-ups', 'ups-bogota', 'ups-empresas', 'ups-online'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: {
      title: '¿Tus baterías tienen más de 3 años?',
      text: 'Agenda una medición del estado real de tu banco de baterías antes de que un corte lo haga por ti.',
      whatsapp: 'Hola, quiero cotizar baterías para mi UPS.',
    },
  },

  {
    slug: 'infraestructura-electrica-bogota',
    keyword: 'Infraestructura eléctrica Bogotá',
    color: '#32D894',
    nav: 'Infraestructura eléctrica',
    metaTitle: 'Infraestructura eléctrica en Bogotá | ADE System',
    metaDescription:
      'Infraestructura eléctrica en Bogotá: diseño, instalación y mantenimiento de redes, tableros, puestas a tierra y energía regulada para empresas.',
    eyebrow: 'Arquitectura Eléctrica · Bogotá',
    h1: 'Infraestructura eléctrica: el corazón de tu operación.',
    intro: [
      'Todo lo demás depende de esto. La red, los servidores, la seguridad, el confort, ninguno funciona si la base eléctrica falla. Por eso los bancos, laboratorios y empresas que no pueden detenerse tratan su infraestructura eléctrica como lo que es: el sistema más crítico del edificio.',
      'En ADE System diseñamos, instalamos y mantenemos infraestructura eléctrica comercial e industrial en Bogotá y Colombia: tableros, circuitos regulados, puestas a tierra, iluminación técnica y redes normales y reguladas. El alcance se documenta desde el diseño hasta las pruebas de entrega.',
    ],
    benefits: [
      {
        title: 'Diseño con criterio, no con catálogo',
        text: 'Cada proyecto empieza con un diagnóstico de tu carga, tu crecimiento y tus puntos de falla. El diseño responde a tu operación, no a una plantilla.',
      },
      {
        title: 'Cumplimiento RETIE de verdad',
        text: 'Instalaciones certificables bajo el Reglamento Técnico de Instalaciones Eléctricas. La normativa no es un trámite: es la diferencia entre una instalación segura y un riesgo latente.',
      },
      {
        title: 'Energía regulada para cargas sensibles',
        text: 'Circuitos independientes con UPS y regulación para los equipos que no toleran la red cruda: servidores, equipos médicos, laboratorio, comunicaciones.',
      },
      {
        title: 'Toda la cadena, un solo responsable',
        text: 'Consultoría, diseño, ejecución, suministro, instalación y mantenimiento con un alcance y responsables definidos.',
      },
    ],
    faqs: [
      {
        q: '¿Qué incluye un proyecto de infraestructura eléctrica?',
        a: 'Depende del alcance, pero típicamente: levantamiento y diagnóstico, diseño y memorias de cálculo, tableros y protecciones, cableado y canalizaciones, puesta a tierra, circuitos regulados, iluminación, certificación RETIE y dossier técnico de entrega.',
      },
      {
        q: '¿Hacen remodelaciones eléctricas en oficinas en funcionamiento?',
        a: 'Sí, es uno de nuestros escenarios más frecuentes. Programamos los trabajos por fases y en horarios que no detengan tu operación. Hemos remodelado infraestructura de bancos sin interrumpir un solo día de servicio.',
      },
      {
        q: '¿Qué es una puesta a tierra y por qué importa?',
        a: 'Es el sistema que canaliza las corrientes de falla y las descargas hacia el suelo, protegiendo personas y equipos. Una puesta a tierra deficiente causa desde daños en equipos electrónicos hasta riesgos de electrocución, y es de los defectos más comunes que encontramos en auditorías.',
      },
      {
        q: '¿Trabajan solo en Bogotá?',
        a: 'Nuestra base es Bogotá, pero ejecutamos proyectos en todo el país. La cobertura nacional aplica especialmente para clientes corporativos con sedes en varias ciudades.',
      },
    ],
    related: ['subestaciones-electricas-bogota', 'ups-empresas', 'datacenter-bogota', 'cableado-estructurado-bogota'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: 'Tu infraestructura es la base de todo.',
      text: 'Cuéntanos la carga, el estado actual y el alcance para definir la visita o estudio necesario.',
      whatsapp: 'Hola, necesito un diagnóstico de infraestructura eléctrica.',
    },
  },

  {
    slug: 'cableado-estructurado-bogota',
    keyword: 'Cableado estructurado Bogotá',
    color: '#611AD8',
    nav: 'Cableado estructurado',
    metaTitle: 'Cableado estructurado en Bogotá | ADE System',
    metaDescription:
      'Cableado estructurado en Bogotá certificado punto a punto: cobre categoría 6/6A, fibra óptica, racks y centros de cableado. Diseño que escala con tu empresa.',
    eyebrow: 'Arquitectura de Red · Bogotá',
    h1: 'Cableado estructurado: el sistema nervioso de tu empresa.',
    intro: [
      'Los datos de tu empresa viajan por una capa física que debe quedar bien instalada y documentada. Un enlace mal terminado o sin pruebas puede producir caídas intermitentes, lentitud y fallas difíciles de aislar.',
      'En ADE System diseñamos e instalamos cableado estructurado en cobre, fibra óptica, racks y centros de cableado. Las pruebas, archivos de certificación y requisitos de garantía se definen por escrito según categoría, fabricante y alcance del proyecto.',
    ],
    benefits: [
      {
        title: 'Certificación punto a punto',
        text: 'Cada punto de red se certifica con equipo de medición calibrado y se entrega con su reporte. Si no se certifica, no se entrega.',
      },
      {
        title: 'Ruta de garantía definida',
        text: 'Cuando se exige garantía de fabricante, validamos componentes, pruebas y documentos requeridos por el programa aplicable.',
      },
      {
        title: 'Diseño que escala',
        text: 'Dimensionamos canalizaciones y centros de cableado para tu crecimiento, no solo para tu presente. Ampliar después no debería significar romper paredes.',
      },
      {
        title: 'Documentación que sobrevive al tiempo',
        text: 'Planos récord, marcación normalizada en ambos extremos y dossier de certificaciones. Tu próximo administrador de red nos lo va a agradecer.',
      },
      {
        title: 'Integración con la base eléctrica',
        text: 'Diseñamos red y eléctrica en conjunto: separación de canalizaciones, puesta a tierra de telecomunicaciones y energía regulada para los equipos activos.',
      },
    ],
    faqs: [
      {
        q: '¿Qué categoría de cableado necesita mi empresa?',
        a: 'Categoría 6 soporta gigabit con holgura y es el mínimo razonable hoy. Categoría 6A soporta 10 gigabit a 100 metros y es la elección correcta para empresas con crecimiento, telefonía IP masiva, cámaras de alta resolución o WiFi de alta densidad. La fibra óptica se usa para backbone entre pisos o edificios.',
      },
      {
        q: '¿Por qué es importante certificar el cableado?',
        a: 'Porque un cable puede dar continuidad y aun así no cumplir parámetros de transmisión como atenuación, diafonía o retardo. La certificación con equipo calibrado aporta evidencia por enlace. La garantía depende además del programa y los requisitos del fabricante.',
      },
      {
        q: '¿Pueden organizar un rack o centro de cableado existente?',
        a: 'Sí. El reordenamiento de racks es un servicio frecuente: documentamos lo existente, normalizamos marcación, reorganizamos patch cords y entregamos el centro de cableado auditable y mantenible.',
      },
      {
        q: '¿Cuánto tiempo toma un proyecto de cableado estructurado?',
        a: 'Una oficina de 50 puntos típicamente toma entre 1 y 2 semanas incluyendo certificación. Proyectos mayores se programan por fases, y podemos trabajar en horario no hábil para no detener tu operación.',
      },
      {
        q: '¿Cómo funciona una garantía extendida de fabricante?',
        a: 'La garantía depende del programa del fabricante, los componentes, el instalador, las pruebas y la documentación. Confirmamos esos requisitos antes de ofrecer una garantía extendida.',
      },
    ],
    related: ['fibra-optica-bogota', 'redes-wifi-empresas', 'datacenter-bogota', 'adecuacion-oficinas-bogota'],
    servicios: ['arquitectura-de-red'],
    blogCat: 'redes-y-conectividad',
    cta: {
      title: '¿Tu red merece algo mejor que un enredo?',
      text: 'Agenda un diagnóstico de tu cableado y conoce el estado real de tu capa física.',
      whatsapp: 'Hola, quiero cotizar cableado estructurado para mi empresa.',
    },
  },

  {
    slug: 'datacenter-bogota',
    keyword: 'Datacenter Bogotá',
    color: '#611AD8',
    nav: 'Datacenter',
    metaTitle: 'Datacenter en Bogotá: Diseño, adecuación y soporte | ADE System',
    metaDescription:
      'Diseño y adecuación de datacenter y cuartos técnicos en Bogotá: UPS, climatización, cableado, control de acceso, monitoreo y mantenimiento.',
    eyebrow: 'Infraestructura crítica · Datacenter',
    h1: 'Datacenter: donde tu empresa no puede fallar ni un segundo.',
    intro: [
      'Un datacenter no es un cuarto con servidores. Es un ecosistema donde la energía, el clima, la red, la seguridad y el espacio físico trabajan como un solo sistema, y donde la falla de cualquiera de ellos detiene a todos los demás. Diseñarlo bien desde el principio cuesta una fracción de lo que cuesta corregirlo en producción.',
      'En ADE System diseñamos y adecuamos datacenters y cuartos de servidores en Bogotá: energía redundante con UPS de doble conversión, climatización de precisión, cableado certificado, control de acceso y detección de incendios. El soporte posterior se define según el alcance contratado.',
    ],
    benefits: [
      {
        title: 'Diseño integral, no por partes',
        text: 'Energía, clima, red, seguridad y obra física diseñados como un solo sistema, por un solo responsable. Los datacenters fallan en las costuras entre proveedores.',
      },
      {
        title: 'Energía que nunca duerme',
        text: 'Circuitos redundantes, UPS online, transferencias automáticas y puestas a tierra dedicadas. La energía del datacenter se diseña para el peor día, no para el promedio.',
      },
      {
        title: 'Del cuarto técnico al datacenter',
        text: 'No todos necesitan un Tier III. Dimensionamos según tu criticidad real: desde el cuarto de servidores de una empresa mediana hasta salas de alta disponibilidad.',
      },
      {
        title: 'Soporte programado por contrato',
        text: 'Mantenimiento programado de UPS, baterías, clima, tableros y monitoreo, con niveles de atención definidos en el contrato.',
      },
    ],
    faqs: [
      {
        q: '¿Qué necesita un cuarto de servidores bien diseñado?',
        a: 'Como mínimo: circuito eléctrico dedicado y regulado, UPS dimensionado con autonomía definida, climatización con redundancia o alarma, control de acceso, detección de incendio, cableado organizado y documentado, y monitoreo de temperatura y energía. El orden de inversión correcto empieza por la energía.',
      },
      {
        q: '¿Pueden adecuar un datacenter sin detener la operación?',
        a: 'Sí, es el escenario más común. Trabajamos por fases con ventanas de mantenimiento acordadas, migraciones programadas y plan de reversa para cada intervención. La continuidad del servicio es parte del diseño del proyecto.',
      },
      {
        q: '¿Qué es la climatización de precisión y por qué no sirve un aire normal?',
        a: 'Los equipos de confort se diseñan principalmente para ocupantes y no siempre controlan humedad ni operación continua. La climatización de precisión trabaja con rangos más estrechos y opciones de monitoreo para cargas técnicas.',
      },
      {
        q: '¿Ofrecen monitoreo del datacenter?',
        a: 'Sí, implementamos monitoreo de temperatura, humedad, energía y estado de UPS con alertas. Los horarios y tiempos de atención se definen en el contrato.',
      },
    ],
    related: ['ups-online', 'aire-acondicionado-precision', 'cableado-estructurado-bogota', 'sistemas-contra-incendio-bogota'],
    servicios: ['arquitectura-electrica', 'arquitectura-de-red'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: 'Tu datacenter merece un solo responsable.',
      text: 'Agenda un diagnóstico de tu infraestructura crítica y conoce sus puntos de falla antes de que fallen.',
      whatsapp: 'Hola, necesito información sobre diseño/adecuación de datacenter.',
    },
  },

  {
    slug: 'sistemas-contra-incendio-bogota',
    keyword: 'Sistemas contra incendio Bogotá',
    color: '#345FEA',
    nav: 'Sistemas contra incendio',
    metaTitle: 'Sistemas contra incendio en Bogotá | ADE System',
    metaDescription:
      'Sistemas de detección y extinción de incendios en Bogotá para oficinas, áreas técnicas e industria: diseño, instalación, pruebas y mantenimiento.',
    eyebrow: 'Confort y Seguridad · Bogotá',
    h1: 'Sistemas contra incendio: la inversión que esperas no usar nunca.',
    intro: [
      'Un incendio en una empresa no avisa, y los primeros tres minutos deciden todo. La detección temprana convierte una emergencia en un incidente; su ausencia convierte un incidente en una pérdida total. Y en espacios como datacenters o archivos, el agua de un rociador convencional puede destruir lo que el fuego no alcanzó.',
      'En ADE System diseñamos e instalamos sistemas de detección y extinción de incendios en Bogotá: detección convencional y direccionable, agentes para áreas técnicas, señalización y notificación. La norma, pruebas y mantenimiento se definen según el sistema y el alcance.',
    ],
    benefits: [
      {
        title: 'Detección que gana minutos',
        text: 'Sensores de humo y temperatura correctamente ubicados y zonificados. En detección de incendios, la ubicación del sensor vale más que la marca.',
      },
      {
        title: 'Agentes limpios para áreas técnicas',
        text: 'Extinción que no destruye lo que protege: agentes limpios para datacenters, archivos y salas eléctricas donde el agua es tan destructiva como el fuego.',
      },
      {
        title: 'Diseño normativo, no decorativo',
        text: 'Cálculo y diseño bajo NFPA y normativa colombiana. Un sistema contra incendio que no cumple norma es un pasivo legal, no una protección.',
      },
      {
        title: 'Integrado con tu seguridad electrónica',
        text: 'La detección de incendio conversa con el control de acceso y el CCTV: puertas que se liberan, cámaras que verifican, notificaciones que llegan a quien decide.',
      },
    ],
    faqs: [
      {
        q: '¿Qué sistema contra incendio necesita una oficina?',
        a: 'Mínimo: detección de humo zonificada, estaciones manuales, sirenas de notificación y extintores correctamente seleccionados y ubicados. Según el tamaño y uso del edificio, la normativa puede exigir sistemas direccionables, rociadores o presurización de escaleras. El punto de partida es un análisis de riesgo del espacio.',
      },
      {
        q: '¿Qué es un agente limpio y cuándo se usa?',
        a: 'Es un gas de extinción que apaga el fuego sin dejar residuos ni conducir electricidad, seguro para equipos electrónicos y para personas en concentraciones de diseño. Es el estándar para datacenters, salas eléctricas, archivos y cualquier espacio donde el agua causaría daños equivalentes al incendio.',
      },
      {
        q: '¿Cada cuánto debe mantenerse un sistema contra incendio?',
        a: 'La frecuencia depende del sistema, fabricante, norma aplicable, ambiente y exigencias de la autoridad o aseguradora. El plan debe quedar documentado; no se debe aplicar una frecuencia universal sin identificar el sistema.',
      },
      {
        q: '¿Instalan en edificios en funcionamiento?',
        a: 'Sí. La instalación se programa por áreas y horarios para no detener tu operación, y la conmutación del sistema antiguo al nuevo se hace sin dejar ventanas sin protección.',
      },
    ],
    related: ['control-acceso-empresas', 'datacenter-bogota', 'adecuacion-oficinas-bogota', 'infraestructura-electrica-bogota'],
    servicios: ['confort-y-seguridad'],
    blogCat: 'seguridad',
    cta: {
      title: 'Los primeros 3 minutos deciden todo.',
      text: 'Solicita una evaluación del alcance y los riesgos que deben revisarse en sitio.',
      whatsapp: 'Hola, quiero información sobre sistemas contra incendio.',
    },
  },

  {
    slug: 'adecuacion-oficinas-bogota',
    keyword: 'Adecuación de oficinas Bogotá',
    color: '#1BC5FF',
    nav: 'Adecuación de oficinas',
    metaTitle: 'Adecuación de oficinas en Bogotá | ADE System',
    metaDescription:
      'Adecuación de oficinas en Bogotá con diseño interior, mobiliario, energía, redes, seguridad y climatización coordinados bajo un solo alcance.',
    eyebrow: 'Arquitectura e Interiorismo · Bogotá',
    h1: 'Adecuación de oficinas: el espacio y su infraestructura, por un solo responsable.',
    intro: [
      'Toda adecuación de oficinas en Bogotá enfrenta el mismo problema: el diseñador hace planos hermosos, el eléctrico no los entiende, el de redes llega cuando ya cerraron los muros, y el cliente termina de árbitro entre cuatro contratistas que se culpan entre sí. El resultado: sobrecostos, retrasos y un espacio bonito con infraestructura improvisada.',
      'ADE System coordina el diseño del espacio y su infraestructura dentro de un mismo alcance: interiorismo, mobiliario, redes eléctricas y de datos, iluminación, seguridad y confort. Un contrato, un cronograma y responsabilidades definidas.',
    ],
    benefits: [
      {
        title: 'Diseño e ingeniería en la misma mesa',
        text: 'El plano de interiorismo nace con la eléctrica, la red y la seguridad integradas. Nada se improvisa en obra, nada se rompe después de terminado.',
      },
      {
        title: 'Un contrato y responsabilidades claras',
        text: 'Sin coordinar cuatro contratistas que se culpan entre sí. Una sola firma responde por el espacio completo: estética, función e infraestructura.',
      },
      {
        title: 'Oficinas que funcionan el día uno',
        text: 'Entregamos con la red certificada, la eléctrica balanceada, la seguridad operando y el mobiliario instalado. Tu equipo se sienta y trabaja.',
      },
      {
        title: 'Remodelación sin detener tu operación',
        text: 'Trabajamos por fases y en horarios no hábiles cuando la oficina debe seguir funcionando. Lo hemos hecho en bancos sin interrumpir un día de servicio.',
      },
    ],
    faqs: [
      {
        q: '¿Qué incluye una adecuación de oficinas completa?',
        a: 'Diseño del espacio y distribución, obra seca (muros, cielos, pisos), iluminación, mobiliario, red eléctrica normal y regulada, cableado estructurado, aire acondicionado, control de acceso y CCTV según necesidad. En ADE System todo se diseña y ejecuta de forma integrada, con un solo cronograma.',
      },
      {
        q: '¿Cuánto cuesta adecuar una oficina en Bogotá?',
        a: 'Depende del nivel de intervención: una adecuación liviana (pintura, mobiliario, ajustes de red) cuesta una fracción de una remodelación completa con obra e infraestructura nueva. Tras una visita técnica entregamos un presupuesto por alcance, desglosado por capítulos, sin sorpresas en obra.',
      },
      {
        q: '¿Por qué integrar la infraestructura en el diseño desde el inicio?',
        a: 'Porque la descoordinación produce retrabajos: canalizaciones que no caben, muros intervenidos dos veces o puntos lejos del puesto final. Diseñar espacio e infraestructura juntos reduce esos choques antes de obra.',
      },
      {
        q: '¿Hacen proyectos pequeños o solo oficinas grandes?',
        a: 'Ambos. Desde el reordenamiento de una oficina de 5 puestos hasta pisos corporativos completos. El criterio de ingeniería es el mismo a cualquier escala.',
      },
    ],
    related: ['cableado-estructurado-bogota', 'infraestructura-electrica-bogota', 'control-acceso-empresas', 'sistemas-contra-incendio-bogota'],
    servicios: ['arquitectura-e-interiorismo'],
    blogCat: 'diseno-de-espacios',
    cta: {
      title: 'Tu oficina puede ser bella y funcionar.',
      text: 'Agenda una visita técnica y recibe una propuesta integral de espacio + infraestructura.',
      whatsapp: 'Hola, quiero cotizar la adecuación de mi oficina en Bogotá.',
    },
  },

  {
    slug: 'control-acceso-empresas',
    keyword: 'Control de acceso para empresas',
    color: '#345FEA',
    nav: 'Control de acceso',
    metaTitle: 'Control de acceso para empresas | ADE System',
    metaDescription:
      'Control de acceso para empresas en Colombia: biometría, tarjetas, visitantes, CCTV e integración con otros sistemas. Diseño e instalación técnica.',
    eyebrow: 'Confort y Seguridad · Empresas',
    h1: 'Control de acceso: que entre quien debe, cuando debe.',
    intro: [
      'La seguridad de una empresa ya no es un vigilante y un libro de visitas. Es saber, y poder demostrar, quién entró a qué área, a qué hora, y quién lo autorizó. El control de acceso electrónico convierte la seguridad en información: trazabilidad de cada puerta, restricción por horarios y perfiles, y registro que vale como evidencia.',
      'En ADE System diseñamos e instalamos sistemas de control de acceso y CCTV para empresas: biometría, tarjetas de proximidad, controles de visitantes, videovigilancia IP e integración con detección de incendios. Y como también construimos la base eléctrica y de red, el sistema completo funciona sobre cimientos sólidos, no sobre un cableado improvisado.',
    ],
    benefits: [
      {
        title: 'Seguridad por zonas y perfiles',
        text: 'Cada colaborador accede a lo que su rol requiere: áreas públicas, restringidas y críticas con niveles de autorización distintos y horarios definidos.',
      },
      {
        title: 'CCTV que sirve como evidencia',
        text: 'Cámaras IP correctamente ubicadas, con retención de grabación dimensionada y calidad suficiente para identificar, no solo para "ver algo".',
      },
      {
        title: 'Integración con incendio y emergencias',
        text: 'En una evacuación, las puertas controladas se liberan automáticamente. La seguridad nunca puede competir con la vida.',
      },
      {
        title: 'Sobre infraestructura bien hecha',
        text: 'Muchas fallas de seguridad electrónica se originan en cableado o energía. Integramos esa base para reducir vacíos entre sistemas y proveedores.',
      },
    ],
    faqs: [
      {
        q: '¿Qué sistema de control de acceso le conviene a mi empresa?',
        a: 'Depende del nivel de seguridad y el flujo de personas. Tarjetas de proximidad para flujos altos y costos contenidos; biometría (huella o rostro) para áreas críticas donde la tarjeta prestada es un riesgo; códigos QR temporales para visitantes. Lo común es combinar tecnologías por zona.',
      },
      {
        q: '¿El control de acceso queda registrado para auditorías?',
        a: 'Sí. Cada evento, acceso concedido, denegado, puerta forzada, puerta abierta demasiado tiempo, queda registrado con fecha, hora y usuario. Estos registros sirven en investigaciones internas, auditorías y como evidencia ante autoridades.',
      },
      {
        q: '¿Cuántas cámaras necesita mi oficina?',
        a: 'Las que cubran los puntos que importan: accesos, recepción, áreas de valor y perímetros. Más cámaras mal ubicadas no es más seguridad. El diseño parte de un análisis del espacio y los riesgos, no de un paquete estándar.',
      },
      {
        q: '¿Qué pasa con el control de acceso si se va la luz?',
        a: 'Un sistema bien diseñado incluye respaldo de energía para controladores y cerraduras, y una política definida de "falla segura" (la puerta se libera) o "falla protegida" (la puerta queda asegurada) según el tipo de área y la normativa de evacuación.',
      },
    ],
    related: ['sistemas-contra-incendio-bogota', 'cableado-estructurado-bogota', 'adecuacion-oficinas-bogota', 'datacenter-bogota'],
    servicios: ['confort-y-seguridad'],
    blogCat: 'seguridad',
    cta: {
      title: '¿Sabes quién entró a tu empresa hoy?',
      text: 'Solicita una evaluación del alcance y los riesgos de seguridad que deben revisarse.',
      whatsapp: 'Hola, quiero información sobre control de acceso para mi empresa.',
    },
  },

  {
    slug: 'subestaciones-electricas-bogota',
    keyword: 'Subestaciones eléctricas Bogotá',
    color: '#32D894',
    nav: 'Subestaciones eléctricas',
    metaTitle: 'Subestaciones eléctricas en Bogotá | ADE System',
    metaDescription:
      'Subestaciones eléctricas en Bogotá: diseño, montaje y mantenimiento para edificios, industria y comercio, con requisitos RETIE según el alcance.',
    eyebrow: 'Arquitectura Eléctrica · Media tensión',
    h1: 'Subestaciones eléctricas: donde empieza la energía de tu edificio.',
    intro: [
      'Antes del tablero, antes del UPS, antes de cualquier circuito, está la subestación: el punto donde la red pública se convierte en la energía de tu edificio. Es la instalación más crítica y más regulada de toda la cadena eléctrica, y también la más descuidada: subestaciones sin mantenimiento durante años, transformadores operando al límite y celdas que nadie ha abierto desde la construcción.',
      'En ADE System diseñamos, montamos y mantenemos subestaciones eléctricas de media tensión en Bogotá: transformadores, celdas de protección y maniobra y tableros generales. La evaluación de conformidad RETIE se coordina cuando aplica.',
    ],
    benefits: [
      {
        title: 'Diseño y memorias certificables',
        text: 'Cálculos, planos y memorias bajo RETIE y norma del operador de red. Una subestación sin certificación es un edificio que no puede conectarse legalmente.',
      },
      {
        title: 'Mantenimiento que previene catástrofes',
        text: 'Termografía, pruebas de aislamiento, mantenimiento de celdas y transformadores. Una falla en subestación no apaga un circuito: apaga el edificio entero.',
      },
      {
        title: 'Modernización de subestaciones antiguas',
        text: 'Repotenciación de subestaciones que se quedaron cortas: más carga, normativa nueva, equipos obsoletos. Evaluamos si se moderniza o se reemplaza.',
      },
      {
        title: 'Coordinación con el operador de red',
        text: 'Gestionamos el proceso técnico ante el operador: factibilidades, revisiones, certificaciones y energización. Tú no persigues trámites.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo necesita un edificio una subestación eléctrica?',
        a: 'Cuando la carga supera lo que la red de baja tensión puede entregar, típicamente desde 75-150 kVA según el operador de red. Edificios de oficinas, industria, comercio grande y datacenters requieren transformación propia de media a baja tensión.',
      },
      {
        q: '¿Cada cuánto se debe mantener una subestación?',
        a: 'El estándar es mantenimiento preventivo anual como mínimo: termografía de conexiones, pruebas de aislamiento y rigidez del aceite del transformador, limpieza de celdas, verificación de protecciones. Muchas pólizas de seguro y auditorías lo exigen documentado.',
      },
      {
        q: '¿Qué es el RETIE y por qué aplica a mi subestación?',
        a: 'El RETIE es el Reglamento Técnico de Instalaciones Eléctricas de Colombia. Los requisitos y la evaluación de conformidad dependen del tipo de instalación e intervención; el alcance debe revisarse con el reglamento vigente y el organismo competente.',
      },
      {
        q: '¿El mantenimiento de subestación requiere cortar la energía?',
        a: 'El mantenimiento mayor sí requiere desenergización programada, normalmente en horario nocturno o fin de semana. La termografía y las inspecciones visuales se hacen con la subestación en operación, y son las que detectan la mayoría de los problemas a tiempo.',
      },
    ],
    related: ['infraestructura-electrica-bogota', 'datacenter-bogota', 'ups-empresas', 'mantenimiento-ups'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: '¿Hace cuántos años nadie abre tu subestación?',
      text: 'Agenda una inspección técnica y conoce el estado real del origen de tu energía.',
      whatsapp: 'Hola, necesito información sobre subestaciones eléctricas.',
    },
  },

  {
    slug: 'cableado-electrico-bogota',
    keyword: 'Cableado eléctrico Bogotá',
    color: '#32D894',
    nav: 'Cableado eléctrico',
    metaTitle: 'Cableado eléctrico en Bogotá para empresas | ADE System',
    metaDescription:
      'Cableado eléctrico en Bogotá para oficinas, comercio e industria: circuitos nuevos, remodelaciones y normalización con requisitos RETIE aplicables.',
    eyebrow: 'Arquitectura Eléctrica · Bogotá',
    h1: 'Cableado eléctrico: lo que está detrás de la pared importa.',
    intro: [
      'La mayoría de los incendios eléctricos, los cortos recurrentes y los equipos quemados tienen el mismo origen: cableado eléctrico improvisado. Empalmes ocultos sin caja, calibres insuficientes para la carga, circuitos sobrecargados con extensiones y conexiones que alguien hizo "mientras tanto" hace diez años. Lo que está detrás de la pared no se ve, pero decide la seguridad de todo lo demás.',
      'En ADE System diseñamos e instalamos cableado eléctrico comercial e industrial en Bogotá: circuitos nuevos, remodelaciones y normalización de instalaciones existentes. El cumplimiento RETIE se determina según el alcance y la evaluación de conformidad aplicable.',
    ],
    benefits: [
      {
        title: 'Cálculo antes que cable',
        text: 'Cada circuito se dimensiona por carga real: calibre del conductor, protección correspondiente y canalización adecuada. El cable barato mal calculado es el más caro de todos.',
      },
      {
        title: 'Normalización de instalaciones antiguas',
        text: 'Auditamos el cableado existente, identificamos los riesgos ocultos y normalizamos por fases, priorizando lo crítico sin detener tu operación.',
      },
      {
        title: 'Cumplimiento según alcance',
        text: 'La propuesta identifica planos, memorias, pruebas y evaluación de conformidad RETIE que resulten aplicables al proyecto.',
      },
      {
        title: 'Separación de circuitos con criterio',
        text: 'Iluminación, tomas generales, tomas reguladas y cargas especiales en circuitos independientes. Así una falla no apaga lo que no debe apagar.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo sé si el cableado eléctrico de mi oficina está mal?',
        a: 'Señales claras: breakers que se disparan con frecuencia, tomas o interruptores calientes, olor a plástico quemado, luces que parpadean al encender equipos, y dependencia de extensiones y multitomas para todo. Cualquiera de estas amerita una inspección técnica antes de que el problema escale.',
      },
      {
        q: '¿Cada cuánto debe renovarse una instalación eléctrica?',
        a: 'Una instalación bien hecha dura décadas, pero debe inspeccionarse cada 5 años y revisarse siempre que cambie el uso del espacio: más equipos, más personas, cargas nuevas. La mayoría de las instalaciones comerciales antiguas en Bogotá operan por encima de la carga para la que fueron diseñadas.',
      },
      {
        q: '¿Pueden corregir el cableado sin tumbar paredes?',
        a: 'En muchos casos sí: usamos canalizaciones externas técnicas, cielos rasos y ductos existentes. Cuando hay que intervenir muros, lo programamos por fases y en horarios que no detengan tu operación.',
      },
      {
        q: '¿Qué incluye la certificación RETIE de una instalación?',
        a: 'Cuando aplica, un organismo de inspección acreditado evalúa la conformidad de la instalación. El requisito depende del tipo y alcance de la obra; se debe revisar contra el RETIE vigente antes de cotizar.',
      },
    ],
    related: ['infraestructura-electrica-bogota', 'tableros-electricos-bogota', 'ups-bogota', 'cableado-estructurado-bogota'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: '¿Sabes qué hay detrás de tus paredes?',
      text: 'Agenda una inspección de tu instalación eléctrica antes de que ella decida por ti.',
      whatsapp: 'Hola, quiero cotizar cableado eléctrico para mi negocio en Bogotá.',
    },
  },

  {
    slug: 'tableros-electricos-bogota',
    keyword: 'Tableros eléctricos Bogotá',
    color: '#32D894',
    nav: 'Tableros eléctricos',
    metaTitle: 'Tableros eléctricos en Bogotá | ADE System',
    metaDescription:
      'Tableros eléctricos en Bogotá: diseño, ensamble, montaje y mantenimiento de tableros de distribución, TGBT y control, con documentación técnica.',
    eyebrow: 'Arquitectura Eléctrica · Tableros',
    h1: 'Tableros eléctricos: el cerebro de tu instalación.',
    intro: [
      'El tablero eléctrico es donde se decide todo: qué circuito se protege, qué carga se balancea, qué falla se aísla y qué parte del edificio sigue funcionando cuando algo sale mal. Un tablero bien diseñado convierte una falla en un breaker disparado; uno mal hecho la convierte en un edificio a oscuras o en un incendio.',
      'En ADE System diseñamos, ensamblamos y mantenemos tableros eléctricos en Bogotá: TGBT, distribución, transferencia y control. La entrega puede incluir planos, rotulación, pruebas y requisitos RETIE según el alcance.',
    ],
    benefits: [
      {
        title: 'Diseño con balanceo de cargas',
        text: 'Distribuimos las cargas entre fases con medición real, no a ojo. Un tablero desbalanceado calienta conductores, dispara protecciones y degrada los equipos.',
      },
      {
        title: 'Protecciones coordinadas',
        text: 'Selectividad entre breakers: la falla dispara la protección más cercana, no la general. Un corto en una oficina no debería apagar el piso completo.',
      },
      {
        title: 'Rotulación y planos que salvan horas',
        text: 'Cada circuito identificado, cada tablero con su plano actualizado. En una emergencia, los minutos que se pierden buscando el breaker correcto cuestan caro.',
      },
      {
        title: 'Mantenimiento termográfico',
        text: 'La termografía detecta conexiones flojas y puntos calientes antes de que fallen. Es la diferencia entre mantenimiento programado y emergencia nocturna.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo debe cambiarse un tablero eléctrico?',
        a: 'Cuando tiene fusibles de cartucho o breakers descontinuados sin repuestos, cuando no tiene espacio para nuevos circuitos, cuando muestra signos de calentamiento (decoloración, olor) o cuando la carga del edificio creció muy por encima del diseño original. Un tablero de más de 25-30 años casi siempre amerita evaluación.',
      },
      {
        q: '¿Qué es un TGBT?',
        a: 'El Tablero General de Baja Tensión: el punto donde la energía de la subestación o acometida se distribuye hacia los tableros de cada área. Es el tablero más crítico del edificio y donde se concentran las protecciones principales, la medición y, cuando existe, la transferencia a planta de emergencia.',
      },
      {
        q: '¿Cada cuánto se debe hacer mantenimiento a un tablero?',
        a: 'Inspección termográfica anual como mínimo, con la instalación en operación y carga normal. Mantenimiento mayor (reapriete de conexiones, limpieza, pruebas de protecciones) cada 1-2 años según criticidad, en parada programada.',
      },
      {
        q: '¿Pueden ampliar un tablero existente?',
        a: 'Sí, si el tablero tiene capacidad física y eléctrica disponible. Lo evaluamos primero: a veces ampliar es seguro, y a veces es sumarle carga a un problema. Si el tablero ya está al límite, te lo decimos con mediciones, no con suposiciones.',
      },
    ],
    related: ['cableado-electrico-bogota', 'infraestructura-electrica-bogota', 'subestaciones-electricas-bogota', 'ups-empresas'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: '¿Tu tablero tiene más preguntas que respuestas?',
      text: 'Agenda una inspección termográfica y conoce el estado real del cerebro de tu instalación.',
      whatsapp: 'Hola, necesito información sobre tableros eléctricos.',
    },
  },

  {
    slug: 'redes-wifi-empresas',
    keyword: 'Redes WiFi para empresas',
    color: '#611AD8',
    nav: 'WiFi empresarial',
    metaTitle: 'Redes WiFi empresariales en Bogotá | ADE System',
    metaDescription:
      'Redes WiFi para empresas en Bogotá: diseño de cobertura, access points, red de invitados, segmentación, instalación y validación en sitio.',
    eyebrow: 'Arquitectura de Red · WiFi empresarial',
    h1: 'WiFi empresarial: cobertura total, sin zonas muertas.',
    intro: [
      'El WiFi de tu empresa no es un router en la recepción. Es infraestructura: access points profesionales ubicados según un estudio real de cobertura, cableados a un switch correcto, con redes separadas para colaboradores, invitados y dispositivos. Cuando se diseña así, funciona en hora pico con todos conectados. Cuando se improvisa, produce la queja más repetida de todas las oficinas: "el WiFi no sirve".',
      'En ADE System diseñamos e instalamos redes WiFi empresariales: estudio de cobertura en sitio (no sobre plano), access points de grado empresarial, segmentación segura y la infraestructura de cableado que los alimenta. Porque cada access point inalámbrico necesita un cable bien puesto detrás.',
    ],
    benefits: [
      {
        title: 'Estudio de cobertura real, en sitio',
        text: 'Medimos la propagación con los muros, los muebles y la interferencia reales de tu espacio. El número y ubicación de access points sale de mediciones, no de un catálogo.',
      },
      {
        title: 'Equipos empresariales, no domésticos',
        text: 'Access points diseñados para decenas de usuarios simultáneos, gestión centralizada y roaming sin cortes al caminar por la oficina.',
      },
      {
        title: 'Redes separadas y seguras',
        text: 'Colaboradores, invitados, cámaras y dispositivos IoT en redes segmentadas. Tu visitante navega; tu información no se expone.',
      },
      {
        title: 'La base cableada incluida',
        text: 'Cada access point requiere un punto de red certificado y PoE bien dimensionado. Nosotros hacemos también esa capa, así que el WiFi completo tiene un solo responsable.',
      },
    ],
    faqs: [
      {
        q: '¿Cuántos access points necesita mi oficina?',
        a: 'Depende del área, los materiales de construcción y la densidad de usuarios, no solo de los metros cuadrados. Como referencia, una oficina típica requiere un access point por cada 80-120 m², pero un estudio de cobertura en sitio es lo único que da el número real. En ADE System ese estudio es parte del diseño.',
      },
      {
        q: '¿Por qué el WiFi se pone lento cuando hay mucha gente?',
        a: 'Porque los equipos domésticos atienden bien a 5-10 dispositivos y colapsan con 30. Los access points empresariales gestionan decenas de usuarios simultáneos por radio y balancean la carga entre equipos. Si tu WiFi funciona a las 7 a.m. y muere a las 10, el problema es de clase de equipo y diseño, no del proveedor de internet.',
      },
      {
        q: '¿Qué es el roaming y por qué importa?',
        a: 'Es la capacidad de moverte por la oficina sin que la conexión se corte al cambiar de access point. En redes mal diseñadas, el dispositivo se "aferra" a un access point lejano y la videollamada se congela al caminar. El roaming fluido se diseña: potencias ajustadas, canales planificados y gestión centralizada.',
      },
      {
        q: '¿Pueden montar WiFi en bodegas o espacios industriales?',
        a: 'Sí. Las bodegas son el escenario más exigente: estanterías metálicas que bloquean señal y terminales que no pueden desconectarse. Hacemos el estudio con las estanterías llenas y usamos equipos con antenas adecuadas para pasillos de gran altura.',
      },
    ],
    related: ['cableado-estructurado-bogota', 'fibra-optica-bogota', 'datacenter-bogota', 'control-acceso-empresas'],
    servicios: ['arquitectura-de-red'],
    blogCat: 'redes-y-conectividad',
    cta: {
      title: '¿Tu WiFi colapsa en hora pico?',
      text: 'Agenda un estudio de cobertura y conoce exactamente qué necesita tu espacio.',
      whatsapp: 'Hola, quiero cotizar una red WiFi empresarial.',
    },
  },

  {
    slug: 'fibra-optica-bogota',
    keyword: 'Fibra óptica Bogotá',
    color: '#611AD8',
    nav: 'Fibra óptica',
    metaTitle: 'Fibra óptica en Bogotá: instalación y pruebas | ADE System',
    metaDescription:
      'Instalación de fibra óptica en Bogotá: tendido, fusiones, medición OTDR u OLTS según alcance y backbone entre pisos y edificios.',
    eyebrow: 'Arquitectura de Red · Fibra óptica',
    h1: 'Fibra óptica: el backbone que no se queda corto.',
    intro: [
      'Cuando los datos tienen que viajar entre pisos, entre edificios o hacia un datacenter, el cobre se queda corto: la distancia lo degrada y el ancho de banda lo limita. La fibra óptica es el estándar del backbone empresarial, pero su instalación no perdona la improvisación: una fusión mal hecha o un radio de curvatura violado se convierten en pérdidas que nadie ve a simple vista.',
      'En ADE System tendemos, fusionamos y probamos fibra óptica en Bogotá: backbone entre pisos y edificios, enlaces a cuartos técnicos y migraciones de cobre a fibra. El método de prueba y el reporte se definen según el tipo de enlace y la evidencia requerida.',
    ],
    benefits: [
      {
        title: 'Fusiones medidas, no empalmes de fe',
        text: 'Cada fusión se hace con empalmadora calibrada y se mide individualmente. La diferencia entre 0.02 y 0.5 dB de pérdida no se ve, pero se paga en rendimiento.',
      },
      {
        title: 'Medición OTDR de cada enlace',
        text: 'El reflectómetro óptico mapea el enlace completo: pérdidas, eventos y distancias. Es el examen objetivo de que la fibra quedó bien, y se entrega como parte del dossier.',
      },
      {
        title: 'Garantía según programa',
        text: 'Si el proyecto requiere garantía de fabricante, la propuesta identifica componentes, pruebas y requisitos documentales aplicables.',
      },
      {
        title: 'Monomodo o multimodo según el caso',
        text: 'Te recomendamos el tipo de fibra según distancias y velocidades reales, no según lo que haya en inventario. Y si el cobre todavía te sirve, también te lo decimos.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo conviene fibra óptica en lugar de cobre?',
        a: 'Para distancias mayores a 90 metros, enlaces entre pisos o edificios, velocidades de 10 Gbps o más, y ambientes con interferencia electromagnética (motores, transformadores). Dentro de un mismo piso para puestos de trabajo, el cobre categoría 6A sigue siendo lo correcto y más económico.',
      },
      {
        q: '¿Qué diferencia hay entre fibra monomodo y multimodo?',
        a: 'La monomodo lleva la señal a distancias de kilómetros y es el estándar para enlaces externos y entre edificios. La multimodo es más económica en equipos y cubre cientos de metros, suficiente para backbone interno de un edificio. La elección depende de las distancias y la proyección de crecimiento.',
      },
      {
        q: '¿Qué es la medición OTDR y por qué exigirla?',
        a: 'Es la prueba con reflectómetro óptico que caracteriza el enlace completo: pérdida total, pérdida por evento (fusiones, conectores) y distancias exactas. Sin OTDR no hay forma objetiva de saber si la instalación quedó dentro del presupuesto óptico que tus equipos necesitan.',
      },
      {
        q: '¿Cómo funciona una garantía de fabricante en fibra?',
        a: 'La garantía de un sistema depende del fabricante, los componentes, el instalador, las pruebas y la documentación. No se presume automáticamente por usar una marca específica.',
      },
    ],
    related: ['cableado-estructurado-bogota', 'datacenter-bogota', 'redes-wifi-empresas', 'infraestructura-electrica-bogota'],
    servicios: ['arquitectura-de-red'],
    blogCat: 'redes-y-conectividad',
    cta: {
      title: 'Tu backbone merece medición, no fe.',
      text: 'Agenda una evaluación de tu red troncal y conoce qué enlace te está frenando.',
      whatsapp: 'Hola, quiero cotizar instalación de fibra óptica.',
    },
  },

  {
    slug: 'aire-acondicionado-bogota',
    keyword: 'Aire acondicionado Bogotá',
    color: '#345FEA',
    nav: 'Aire acondicionado',
    metaTitle: 'Aire acondicionado empresarial en Bogotá | ADE System',
    metaDescription:
      'Aire acondicionado para oficinas, comercio e industria en Bogotá: cálculo de carga térmica, instalación, puesta en marcha y mantenimiento.',
    eyebrow: 'Confort y Seguridad · Climatización',
    h1: 'Aire acondicionado: confort que se calcula, no que se adivina.',
    intro: [
      'Un aire acondicionado mal dimensionado fracasa de dos formas: si queda corto, la oficina hierve a las 2 de la tarde y los reclamos no paran; si queda sobrado, pagaste de más en el equipo y pagas de más cada mes en energía. El error casi nunca está en la marca del equipo, está en que nadie hizo el cálculo de carga térmica del espacio real.',
      'En ADE System diseñamos e instalamos sistemas de aire acondicionado comercial en Bogotá: oficinas, locales, consultorios e industria. Calculamos la carga térmica con las personas, los equipos y el sol que de verdad tiene tu espacio, y como también construimos la infraestructura eléctrica, el circuito que alimenta el equipo queda bien hecho desde el primer día.',
    ],
    benefits: [
      {
        title: 'Cálculo de carga térmica real',
        text: 'Personas, equipos, iluminación, orientación solar y renovación de aire. El BTU correcto sale de ese cálculo, no de una tabla genérica por metro cuadrado.',
      },
      {
        title: 'Instalación con la eléctrica incluida',
        text: 'Circuito dedicado, protección correcta y arranque verificado. El 40% de las fallas de aire acondicionado son en realidad fallas de la instalación eléctrica que lo alimenta.',
      },
      {
        title: 'Equipos eficientes, consumo controlado',
        text: 'Tecnología inverter y selección por eficiencia energética. El equipo más barato de comprar suele ser el más caro de operar.',
      },
      {
        title: 'Mantenimiento que alarga la vida útil',
        text: 'Planes preventivos con limpieza de serpentines, verificación del circuito refrigerante y revisión eléctrica para conservar desempeño y detectar desgaste.',
      },
    ],
    faqs: [
      {
        q: '¿Cuántos BTU necesita mi oficina?',
        a: 'Como referencia gruesa, entre 500 y 600 BTU por metro cuadrado en oficinas con ocupación normal. Pero la cifra real depende de cuántas personas trabajan, cuántos equipos generan calor, qué tanto sol recibe el espacio y la altura del techo. Por eso hacemos el cálculo de carga térmica en sitio antes de cotizar: es la diferencia entre acertar y adivinar.',
      },
      {
        q: '¿Qué es la tecnología inverter y vale la pena?',
        a: 'Un equipo inverter regula la velocidad del compresor en lugar de prenderlo y apagarlo constantemente. Consume entre 30% y 50% menos energía y mantiene la temperatura más estable. En espacios de uso diario, el sobrecosto se recupera en la factura de energía en 1 a 2 años.',
      },
      {
        q: '¿Pueden instalar en un local o oficina en funcionamiento?',
        a: 'Sí. Podemos programar la instalación en horario no hábil o por fases. La ventana, los riesgos y cualquier interrupción necesaria se acuerdan antes de ejecutar.',
      },
      {
        q: '¿Cada cuánto debe hacerse mantenimiento a un aire acondicionado?',
        a: 'En uso comercial, limpieza de filtros mensual (puede hacerla tu personal) y mantenimiento técnico completo cada 3 a 6 meses según el ambiente. Un serpentín sucio puede aumentar el consumo hasta 30% y termina dañando el compresor, que es la pieza más cara del equipo.',
      },
    ],
    related: ['mantenimiento-aire-acondicionado', 'aire-acondicionado-precision', 'adecuacion-oficinas-bogota', 'cableado-electrico-bogota'],
    servicios: ['confort-y-seguridad'],
    blogCat: 'seguridad',
    cta: {
      title: '¿Tu oficina hierve a las 2 de la tarde?',
      text: 'Solicita un cálculo de carga térmica para definir capacidad, tecnología y condiciones de instalación.',
      whatsapp: 'Hola, quiero cotizar aire acondicionado para mi negocio en Bogotá.',
    },
  },

  {
    slug: 'mantenimiento-aire-acondicionado',
    keyword: 'Mantenimiento de aire acondicionado',
    color: '#345FEA',
    nav: 'Mantenimiento de aires',
    metaTitle: 'Mantenimiento de aire acondicionado | ADE System Bogotá',
    metaDescription:
      'Mantenimiento y reparación de aire acondicionado para empresas en Bogotá. Diagnóstico, limpieza, revisión eléctrica y reporte por equipo.',
    eyebrow: 'Soporte · Climatización',
    h1: 'Mantenimiento de aire acondicionado: el frío también se cuida.',
    intro: [
      'Un aire acondicionado sin mantenimiento se degrada en silencio: el serpentín se tapa, el equipo trabaja más duro para enfriar lo mismo, el consumo sube mes a mes y un día, siempre el más caluroso, el compresor se rinde. Reemplazar un compresor cuesta más de la mitad de un equipo nuevo. Mantenerlo cuesta una fracción.',
      'En ADE System mantenemos sistemas de aire acondicionado comercial de cualquier marca en Bogotá: planes preventivos programados, correctivos con diagnóstico honesto y contratos empresariales con respuesta prioritaria. Y porque también somos ingenieros eléctricos, revisamos lo que casi nadie revisa: el circuito, las protecciones y los contactores que alimentan el equipo.',
    ],
    benefits: [
      {
        title: 'Preventivo completo, no solo lavada',
        text: 'Limpieza de serpentines y filtros, verificación de presiones de gas, medición de consumo eléctrico, revisión de drenajes y prueba de controles. Con reporte técnico.',
      },
      {
        title: 'Revisión eléctrica incluida',
        text: 'Revisamos contactores, capacitores, protecciones y voltajes para distinguir una falla eléctrica de un problema del circuito de refrigeración.',
      },
      {
        title: 'Cualquier marca y tipo de equipo',
        text: 'Mini split, cassette, piso techo, paquete, fancoils y sistemas VRF. Si enfría, lo mantenemos.',
      },
      {
        title: 'Contratos con respuesta prioritaria',
        text: 'Visitas programadas, historial por equipo y atención preferente en correctivos. Para empresas donde el clima no es un lujo sino operación.',
      },
    ],
    scope: {
      title: 'Qué revisar antes de reparar o contratar un plan',
      answer: 'Un mantenimiento empresarial debe identificar el equipo, registrar su condición y separar limpieza preventiva, diagnóstico y reparación. Recargar refrigerante sin buscar la causa de la pérdida no resuelve el problema.',
      sections: [
        { title: 'Señales de alerta', text: 'Menor enfriamiento, goteo, hielo, ruido, olor, arranques frecuentes, consumo inusual o disparo de protecciones.' },
        { title: 'Proceso', text: 'Inventario, inspección, limpieza según condición, drenajes, variables eléctricas, controles y revisión del circuito frigorífico.' },
        { title: 'Entregables', text: 'Reporte por equipo con hallazgos, acciones ejecutadas, repuestos o pruebas adicionales y prioridad recomendada.' },
        { title: 'Variables de cotización', text: 'Tipo y capacidad, cantidad, altura y acceso, estado, repuestos, refrigerante, horario y frecuencia del plan.' },
      ],
      note: 'El diagnóstico definitivo puede requerir mediciones en sitio. La disponibilidad de repuestos y tiempos de atención se confirma en la propuesta o contrato.',
    },
    faqs: [
      {
        q: '¿Qué incluye un mantenimiento preventivo de aire acondicionado?',
        a: 'Limpieza profunda de serpentines (evaporador y condensador), lavado o cambio de filtros, verificación de presiones de refrigerante, medición de amperajes y voltajes, limpieza de drenajes, ajuste de conexiones eléctricas y prueba completa de operación. Todo queda en un reporte con el estado del equipo y recomendaciones.',
      },
      {
        q: '¿Por qué mi aire enfría menos que antes?',
        a: 'Las tres causas más comunes: serpentín o filtros sucios (la más frecuente y la más barata), baja de refrigerante por una fuga, o desgaste del compresor. El diagnóstico identifica cuál es. Ojo: recargar gas sin buscar la fuga es pagar dos veces, la recarga se escapa por el mismo hueco.',
      },
      {
        q: '¿El mantenimiento de verdad baja el consumo de energía?',
        a: 'Puede reducir consumo cuando la suciedad, el flujo de aire o un ajuste deficiente obligan al equipo a trabajar más. La mejora real se determina comparando mediciones y condiciones equivalentes, no con un porcentaje universal.',
      },
      {
        q: '¿Atienden emergencias de aire acondicionado?',
        a: 'Sí, para clientes con contrato la atención es prioritaria, también de noche y fines de semana. Para emergencias sin contrato, cotizamos el correctivo en el primer contacto y atendemos según disponibilidad.',
      },
    ],
    related: ['aire-acondicionado-bogota', 'aire-acondicionado-precision', 'mantenimiento-ups', 'tableros-electricos-bogota'],
    servicios: ['confort-y-seguridad'],
    blogCat: 'seguridad',
    cta: {
      title: '¿Cuándo fue el último mantenimiento de tu aire acondicionado?',
      text: 'Agenda un diagnóstico y conoce el estado real de tus equipos antes del día más caluroso.',
      whatsapp: 'Hola, quiero cotizar mantenimiento de aire acondicionado.',
    },
  },

  {
    slug: 'aire-acondicionado-precision',
    keyword: 'Aire acondicionado de precisión',
    color: '#345FEA',
    nav: 'Clima de precisión',
    metaTitle: 'Aire acondicionado de precisión | ADE System',
    metaDescription:
      'Climatización de precisión para datacenters, cuartos de servidores y áreas técnicas en Colombia: control de temperatura y humedad 24/7, redundancia y monitoreo.',
    eyebrow: 'Infraestructura crítica · Climatización de precisión',
    h1: 'Clima de precisión: donde un grado de más cuesta millones.',
    intro: [
      'Los cuartos técnicos concentran carga térmica y requieren condiciones distintas a un espacio de ocupación. La solución debe considerar temperatura, humedad, continuidad, alarmas y el efecto del ambiente sobre servidores y baterías.',
      'En ADE System diseñamos e instalamos climatización de precisión para datacenters, cuartos de servidores, salas eléctricas y áreas técnicas: control estricto de temperatura y humedad, equipos diseñados para operación continua, redundancia donde la criticidad lo exige y monitoreo con alertas para enterarte antes de que sea tarde.',
    ],
    benefits: [
      {
        title: 'Temperatura Y humedad bajo control',
        text: 'Los equipos de precisión controlan ambas variables en rangos estrechos. La humedad alta condensa y corroe; la baja genera estática. Ambas matan electrónica.',
      },
      {
        title: 'Diseñado para no apagarse nunca',
        text: 'Equipos de duty continuo, configuraciones N+1 donde aplica y rotación automática entre unidades. El clima del datacenter no toma vacaciones.',
      },
      {
        title: 'Monitoreo con alertas 24/7',
        text: 'Sensores de temperatura y humedad con notificaciones inmediatas. La diferencia entre un evento y una catástrofe es enterarse a tiempo.',
      },
      {
        title: 'Integrado con la energía y el espacio',
        text: 'Diseñamos el clima junto con la eléctrica, el UPS y la distribución del cuarto: pasillos, flujo de aire y carga térmica real de los racks.',
      },
    ],
    faqs: [
      {
        q: '¿Por qué no sirve un aire normal para un cuarto de servidores?',
        a: 'Por cuatro razones: los equipos de confort no controlan humedad con precisión, no están diseñados para operar 24/7/365, su capacidad se calcula para personas y no para la carga térmica concentrada de los racks, y no tienen redundancia ni monitoreo. Funcionan... hasta el día que no, y ese día no avisan.',
      },
      {
        q: '¿Qué temperatura debe tener un cuarto de servidores?',
        a: 'El estándar ASHRAE recomienda entre 18°C y 27°C en la entrada de aire de los equipos, con humedad relativa controlada. Más importante que el número exacto es la estabilidad: las variaciones bruscas estresan los componentes tanto como el calor sostenido.',
      },
      {
        q: '¿Qué es la redundancia N+1 en climatización?',
        a: 'Significa tener una unidad más de las necesarias para la carga térmica: si la sala necesita 2 equipos, se instalan 3. Cuando uno falla o entra a mantenimiento, los demás asumen la carga sin que la temperatura se mueva. Para salas críticas no es un lujo, es el diseño correcto.',
      },
      {
        q: '¿Pueden climatizar un cuarto técnico pequeño o solo datacenters grandes?',
        a: 'Desde el cuarto de comunicaciones de una empresa mediana hasta salas de alta disponibilidad. La criticidad define el diseño, no el tamaño: un rack que sostiene toda tu operación merece el mismo criterio que cien.',
      },
    ],
    related: ['datacenter-bogota', 'ups-online', 'aire-acondicionado-bogota', 'mantenimiento-aire-acondicionado'],
    servicios: ['confort-y-seguridad'],
    blogCat: 'seguridad',
    cta: {
      title: '¿Qué temperatura tiene tu cuarto de servidores ahora mismo?',
      text: 'Si no lo sabes, esa es la respuesta. Agenda una evaluación térmica de tu área técnica.',
      whatsapp: 'Hola, necesito climatización de precisión para mi área técnica.',
    },
  },

  {
    slug: 'plantas-electricas-bogota',
    keyword: 'Plantas eléctricas Bogotá',
    color: '#32D894',
    nav: 'Plantas eléctricas',
    metaTitle: 'Plantas eléctricas en Bogotá | ADE System',
    metaDescription:
      'Plantas eléctricas en Bogotá: dimensionamiento, suministro, instalación con transferencia automática y obras civiles. Respaldo de energía para horas, no minutos.',
    eyebrow: 'Arquitectura Eléctrica · Respaldo de energía',
    h1: 'Plantas eléctricas: cuando el corte dura horas, no minutos.',
    intro: [
      'Una planta eléctrica genera energía cuando falla la red pública. La UPS puede sostener las cargas críticas mientras la planta arranca y se estabiliza. La combinación adecuada depende de qué equipos necesita respaldar, cuánto consumen y cuánto tiempo debe continuar su operación.',
      'En ADE System dimensionamos, suministramos e instalamos plantas eléctricas en Bogotá y Colombia: desde generadores para comercios y oficinas hasta plantas industriales, con tableros de transferencia automática, obras civiles, insonorización y la integración eléctrica completa. Una sola firma responde por todo el sistema de respaldo.',
    ],
    benefits: [
      {
        title: 'Dimensionamiento por arranque, no solo por carga',
        text: 'Los motores y compresores pueden exigir más corriente al arrancar. Revisamos sus datos y secuencias de encendido para dimensionar la planta según las cargas reales.',
      },
      {
        title: 'Transferencia automática bien hecha',
        text: 'El sistema de transferencia automática detecta la falla de red y coordina el arranque y la conexión de la planta. Verificamos su integración con la UPS y las cargas respaldadas.',
      },
      {
        title: 'Instalación completa: obra, combustible y ruido',
        text: 'Evaluamos base, aislamiento acústico, ventilación, extracción de gases y combustible. El diseño debe responder a las condiciones del lugar y a los requisitos aplicables.',
      },
      {
        title: 'UPS + planta: el respaldo completo',
        text: 'Coordinamos UPS y planta: las baterías cubren la transición de las cargas críticas y el generador permite prolongar el respaldo. La duración se valida según carga, combustible y condiciones del sistema.',
      },
    ],
    faqs: [
      {
        q: '¿Qué planta eléctrica necesita mi negocio?',
        a: 'Depende de qué quieres respaldar. Se suman cargas, se identifican motores y compresores y se consideran sus condiciones de arranque. La visita y las mediciones se definen según el tamaño y riesgo del proyecto.',
      },
      {
        q: '¿Cuál es la diferencia entre una planta y un UPS? ¿Necesito ambos?',
        a: 'La UPS entrega energía almacenada en baterías; la planta la genera con combustible y necesita arrancar. Cuando una carga requiere continuidad durante esa transición, se evalúa una UPS compatible. La autonomía y la necesidad de ambos equipos se definen según el proyecto.',
      },
      {
        q: '¿Qué mantenimiento necesita una planta eléctrica?',
        a: 'El plan incluye pruebas de funcionamiento, revisión de baterías de arranque, combustible, lubricación, filtros y transferencia. La frecuencia se define con las indicaciones del fabricante, las horas de uso y las condiciones de instalación.',
      },
      {
        q: '¿Una planta eléctrica hace mucho ruido? ¿La puedo poner en zona de oficinas?',
        a: 'El ruido depende del equipo, la distancia y la instalación. Antes de ubicar una planta cerca de oficinas se evalúan aislamiento acústico, ventilación, evacuación de gases y requisitos del sitio. Una cabina por sí sola no define la viabilidad.',
      },
    ],
    related: ['mantenimiento-plantas-electricas', 'ups-empresas', 'subestaciones-electricas-bogota', 'tableros-electricos-bogota'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: '¿Cuánto dura tu operación sin energía?',
      text: 'Solicita el dimensionamiento de carga y conoce la capacidad y el alcance que requiere tu operación.',
      whatsapp: 'Hola, quiero cotizar una planta eléctrica para mi negocio.',
    },
  },

  {
    slug: 'mantenimiento-plantas-electricas',
    keyword: 'Mantenimiento de plantas eléctricas',
    color: '#32D894',
    nav: 'Mantenimiento de plantas',
    metaTitle: 'Mantenimiento de plantas eléctricas | ADE System',
    metaDescription:
      'Mantenimiento de plantas eléctricas en Bogotá: rutinas preventivas, pruebas, revisión de transferencia y reporte técnico para empresas.',
    eyebrow: 'Soporte · Plantas eléctricas',
    h1: 'Mantenimiento de plantas: que arranque el día que importa.',
    intro: [
      'La falla clásica de una planta eléctrica no es ruidosa ni dramática: es el silencio del día del apagón, cuando el motor no arranca. Casi siempre la causa es humillantemente simple: baterías de arranque muertas, combustible degradado por meses de reposo o un precalentador dañado que nadie revisó. La planta es el seguro de tu operación, y un seguro vencido es peor que no tener seguro, porque te da confianza falsa.',
      'En ADE System mantenemos plantas eléctricas de cualquier marca en Bogotá: rutinas preventivas programadas, arranques de prueba con carga real, mantenimiento de tableros de transferencia y contratos empresariales con soporte ante fallas. Tu planta arranca todos los meses con nosotros, para que arranque el día que de verdad importa.',
    ],
    benefits: [
      {
        title: 'Pruebas con carga, no solo en vacío',
        text: 'Arrancar la planta sin carga no prueba nada: el motor puede encender y aun así rendirse cuando recibe la operación completa. Probamos con carga real o banco de pruebas.',
      },
      {
        title: 'La transferencia también se mantiene',
        text: 'El tablero de transferencia automática es la otra mitad del sistema. Simulamos cortes y verificamos que detecte, arranque y conmute en los tiempos de diseño.',
      },
      {
        title: 'Rutina completa de motor y generador',
        text: 'Aceite, filtros, refrigerante, correas, baterías de arranque, precalentador, fugas y combustible. Por horas de uso y por calendario, lo que llegue primero.',
      },
      {
        title: 'Historial y reporte por equipo',
        text: 'Cada planta con su hoja de vida: qué se hizo, qué se midió, qué viene. Para auditorías, aseguradoras y para tu propia tranquilidad.',
      },
    ],
    faqs: [
      {
        q: '¿Cada cuánto debe arrancarse una planta eléctrica?',
        a: 'La frecuencia y duración deben seguir el fabricante, el controlador, la carga y el plan del sitio. El ejercicio debe registrarse y coordinarse con transferencia, combustible, baterías y riesgos de la operación.',
      },
      {
        q: '¿Por qué las plantas no arrancan justo cuando se va la luz?',
        a: 'Las tres causas dominantes: baterías de arranque agotadas (la número uno por lejos), combustible viejo o contaminado con agua, y precalentador dañado en plantas diésel. Las tres son baratas de prevenir y carísimas de descubrir durante un apagón.',
      },
      {
        q: '¿El diésel se daña si la planta no se usa?',
        a: 'Sí. El diésel almacenado se oxida, absorbe humedad y desarrolla crecimiento microbiano ("algas del diésel") que tapa filtros e inyectores. Su vida útil típica es de 6 a 12 meses sin tratamiento. En el mantenimiento revisamos el estado del combustible y recomendamos polishing o recambio cuando se requiere.',
      },
      {
        q: '¿Hacen mantenimiento de plantas que no vendieron ustedes?',
        a: 'Sí, de cualquier marca y potencia. La primera visita incluye una evaluación completa del estado del equipo, la transferencia y la instalación, con un reporte honesto de lo que está bien y lo que es un riesgo.',
      },
    ],
    related: ['plantas-electricas-bogota', 'mantenimiento-ups', 'tableros-electricos-bogota', 'subestaciones-electricas-bogota'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'infraestructura-electrica',
    cta: {
      title: '¿Tu planta arrancó este mes?',
      text: 'Si tienes que pensarlo, agenda la prueba. Diagnóstico completo del equipo y su transferencia.',
      whatsapp: 'Hola, quiero cotizar mantenimiento para mi planta eléctrica.',
    },
  },
  {
    slug: 'diagnostico-ups-banco-baterias',
    keyword: 'Diagnóstico de UPS y banco de baterías',
    color: '#32D894',
    nav: 'Diagnóstico UPS y baterías',
    metaTitle: 'Diagnóstico de UPS y banco de baterías en Bogotá | ADE System',
    metaDescription: 'Diagnóstico de UPS y baterías para empresas: capacidad, alarmas, estado del banco, bypass y evidencia para decidir mantenimiento o cambio.',
    eyebrow: 'Continuidad operativa · UPS',
    h1: 'Diagnóstico de UPS y banco de baterías: conoce el riesgo antes del corte.',
    intro: [
      'Un UPS puede encender, no tener alarmas visibles y aun así no sostener la carga cuando falla la red. El diagnóstico revisa lo que importa para tomar decisiones: carga real, capacidad disponible, condiciones de baterías, bypass, alimentación, ambiente y evidencia de mantenimiento.',
      'La autonomía exacta se valida contra el modelo, banco y curvas oficiales del fabricante. Si el estado requiere intervención, el reporte debe dejar claro qué hallazgo se observó, qué riesgo representa y qué acción se recomienda.',
    ],
    benefits: [
      { title: 'Carga y capacidad', text: 'Levantamiento de carga crítica y contraste con la capacidad nominal y en W del UPS instalado.' },
      { title: 'Baterías y autonomía', text: 'Revisión de edad, condición, alarmas y pruebas disponibles. Sin prometer autonomía sin datos de fabricante.' },
      { title: 'Bypass y alimentación', text: 'Verificación del camino de mantenimiento, protecciones, puesta a tierra y condiciones visibles de instalación.' },
      { title: 'Reporte para decidir', text: 'Hallazgos, evidencia disponible, prioridades y recomendaciones para mantenimiento, cambio o estudio adicional.' },
    ],
    faqs: [
      { q: '¿Qué señales indican riesgo en un banco de baterías UPS?', a: 'Alarmas recurrentes, autonomía menor a la esperada, baterías de distintas edades, temperatura elevada, terminales deteriorados o ausencia de pruebas e historial son razones para revisarlo.' },
      { q: '¿Una prueba rápida confirma la autonomía del UPS?', a: 'No por sí sola. La autonomía depende de carga, baterías y curva de descarga del sistema específico. La prueba debe definirse con el fabricante y el riesgo de la operación.' },
      { q: '¿El diagnóstico incluye visita?', a: 'El alcance se define según cantidad de equipos, criticidad, acceso y evidencia existente. La visita permite verificar condiciones que no aparecen en una ficha técnica.' },
    ],
    related: ['mantenimiento-ups', 'baterias-ups', 'ups-empresas'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: { title: '¿Tu UPS está listo para el corte?', text: 'Agenda una revisión de capacidad, baterías y evidencia de mantenimiento.', whatsapp: 'Hola, quiero solicitar un diagnóstico de UPS y banco de baterías.' },
  },
  {
    slug: 'alquiler-ups-bogota',
    keyword: 'Alquiler de UPS en Bogotá',
    color: '#32D894',
    nav: 'Alquiler de UPS',
    metaTitle: 'Alquiler de UPS en Bogotá para empresas | ADE System',
    metaDescription: 'Alquiler temporal de UPS en Bogotá para contingencias, mantenimientos y proyectos. Cotiza según kVA, tensión, fases, autonomía y duración.',
    eyebrow: 'Respaldo temporal · Bogotá',
    h1: 'Alquiler de UPS para sostener una operación durante cambios y contingencias.',
    intro: [
      'El alquiler de UPS permite respaldar una carga durante mantenimientos, reemplazos, migraciones o necesidades temporales. La solución correcta depende de la potencia en W y kVA, tensión, fases, autonomía, condiciones del sitio y duración requerida.',
      'La propuesta puede incluir transporte, instalación, puesta en marcha, retiro y un ATS o bypass cuando el alcance técnico lo requiera. La disponibilidad de equipos se confirma para cada solicitud; no se presume por capacidad o fecha.',
    ],
    benefits: [
      { title: 'Contingencia o mantenimiento', text: 'Respaldo temporal mientras se interviene, reemplaza o traslada el sistema principal.' },
      { title: 'Proyecto o migración', text: 'Capacidad definida para una operación temporal, una puesta en marcha o una transición programada.' },
      { title: 'Instalación coordinada', text: 'Revisión de tensión, fases, protecciones, conexiones, espacio, ventilación y maniobra requerida.' },
      { title: 'Alcance documentado', text: 'Duración, responsabilidades, transporte, pruebas, condiciones de operación y retiro por escrito.' },
    ],
    scope: {
      title: 'Información necesaria para cotizar un alquiler',
      answer: 'Comparta la carga que debe respaldarse, tensión, número de fases, autonomía objetivo, ciudad, duración y fecha. Si faltan datos, una visita o medición permite definirlos antes de comprometer un equipo.',
      sections: [
        { title: 'Datos eléctricos', text: 'Potencia en W y kVA, tensión, fases, corriente, conexión disponible, protecciones y puesta a tierra.' },
        { title: 'Operación', text: 'Equipos críticos, autonomía requerida, posibilidad de interrupción y ruta de transferencia o bypass.' },
        { title: 'Logística', text: 'Dirección, acceso, piso, horarios, fecha inicial, duración, espacio, ventilación y condiciones de retiro.' },
        { title: 'Entregables', text: 'Equipo acordado, accesorios incluidos, instalación, pruebas, acta de entrega y condiciones del servicio.' },
      ],
      note: 'Las capacidades, accesorios, fechas y tiempos se confirman contra inventario y condiciones reales del sitio.',
    },
    faqs: [
      { q: '¿Puedo alquilar una UPS mientras reparan la mía?', a: 'Sí, sujeto a disponibilidad y compatibilidad eléctrica. Primero se valida carga, tensión, fases, conexión, autonomía y maniobra de transferencia.' },
      { q: '¿El alquiler incluye instalación?', a: 'Puede incluir transporte, instalación, puesta en marcha y retiro. La propuesta debe definir cada actividad y responsabilidad.' },
      { q: '¿Qué capacidad de UPS necesito alquilar?', a: 'Se calcula desde la carga real en W y VA, el margen, la topología y la autonomía. La placa del equipo protegido no siempre refleja el consumo real.' },
      { q: '¿Publican precios o inventario disponible?', a: 'No. La capacidad, duración, accesorios, ubicación y condiciones de instalación cambian cada propuesta y deben confirmarse antes de reservar.' },
    ],
    related: ['ups-empresas', 'mantenimiento-ups', 'diagnostico-ups-banco-baterias'],
    servicios: ['arquitectura-electrica'],
    blogCat: 'ups',
    cta: { title: '¿Necesitas respaldo temporal?', text: 'Envía kVA, tensión, fases, autonomía, ciudad, fecha y duración para revisar disponibilidad.', whatsapp: 'Hola, quiero cotizar alquiler de UPS. Capacidad aproximada: __ kVA. Tensión y fases: __. Autonomía: __. Ciudad: __. Fecha y duración: __.' },
  },
  {
    slug: 'certificacion-cableado-cobre-fibra',
    keyword: 'Certificación de cableado de cobre y fibra óptica',
    color: '#611AD8',
    nav: 'Certificación cobre y fibra',
    metaTitle: 'Certificación de cableado cobre y fibra | ADE System',
    metaDescription: 'Certificación de cableado de cobre y fibra en Bogotá: pruebas por enlace, reportes identificables y medición OTDR u OLTS según el alcance.',
    eyebrow: 'Conectividad · Cobre y fibra',
    h1: 'Certificación de cobre y fibra: evidencia por enlace, no solo conectividad.',
    intro: [
      'Certificar cableado no es comprobar que “hay internet”. En cobre se validan parámetros del enlace según la categoría y norma aplicable; en fibra se define el método de medición, como OLTS para pérdida u OTDR para caracterización y eventos, de acuerdo con el alcance.',
      'El entregable debe permitir identificar cada enlace, su resultado y las excepciones. Así una red queda documentada para operación, auditoría y, cuando corresponda, proceso de garantía de fabricante.',
    ],
    benefits: [
      { title: 'Cobre certificado por enlace', text: 'Pruebas y reporte identificable por punto para validar desempeño de acuerdo con la categoría contratada.' },
      { title: 'Fibra con método definido', text: 'OLTS y OTDR responden preguntas distintas. Se seleccionan según tramo, alcance, conectores y evidencia requerida.' },
      { title: 'Entregables técnicos', text: 'Identificación, resultados, excepciones y documentación de cierre útil para soporte futuro.' },
      { title: 'Ruta para garantía', text: 'Revisión del sistema y requisitos de fabricante cuando el proyecto se ejecuta bajo un programa certificado.' },
    ],
    scope: {
      title: 'Qué debe quedar definido en una certificación',
      answer: 'Antes de medir se acuerdan norma o límite, tipo de enlace, identificación, equipo de prueba, configuración y formato del reporte. En fibra, OLTS y OTDR no son reemplazos automáticos entre sí.',
      sections: [
        { title: 'Datos de entrada', text: 'Cantidad de enlaces, categoría o tipo de fibra, conectores, distancias, topología, estado del rotulado y requisito contractual.' },
        { title: 'Proceso', text: 'Inventario, limpieza e inspección cuando aplique, configuración del límite, prueba por enlace y revisión de fallos o excepciones.' },
        { title: 'Entregables', text: 'Resultado identificable por enlace, configuración usada, resumen de aprobados y fallidos, excepciones y archivos de medición acordados.' },
        { title: 'Límites', text: 'La medición documenta desempeño; no concede por sí sola una garantía de fabricante ni corrige diseño, instalación o componentes no conformes.' },
      ],
      note: 'La cotización depende de cantidad de puntos, estándar, acceso, horarios, estado del rotulado y necesidad de OLTS, OTDR o pruebas de cobre.',
      sources: [{ label: 'Guía OTDR de Fluke Networks', url: 'https://www.flukenetworks.com/expertise/learn-about/otdr' }],
    },
    faqs: [
      { q: '¿Cuál es la diferencia entre certificar cobre y fibra?', a: 'En cobre se miden parámetros eléctricos y de transmisión por enlace. En fibra se mide pérdida y, cuando aplica, eventos y trazas. Los equipos y criterios no son los mismos.' },
      { q: '¿OTDR y OLTS son lo mismo?', a: 'No. El OLTS mide pérdida extremo a extremo; el OTDR muestra eventos y distancia a lo largo de la fibra. La necesidad del proyecto define qué evidencia se entrega.' },
      { q: '¿La certificación entrega garantía de fabricante automáticamente?', a: 'No necesariamente. La garantía depende del sistema instalado, la marca, componentes, instalador y requisitos documentales del programa correspondiente.' },
    ],
    related: ['cableado-estructurado-bogota', 'datacenter-bogota', 'diagnostico-ups-banco-baterias'],
    servicios: ['arquitectura-de-red'],
    blogCat: 'redes-y-conectividad',
    cta: { title: '¿Necesitas evidencia de cada enlace?', text: 'Cuéntanos categoría, cantidad de puntos, tipo de fibra y el entregable requerido.', whatsapp: 'Hola, quiero cotizar certificación de cableado de cobre y fibra.' },
  },
]

export const getCaptura = slug => CAPTURAS.find(c => c.slug === slug)
