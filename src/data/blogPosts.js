/* Guías técnicas orientadas a intención comercial. Mantenga frases cortas y fuentes primarias. */

export const BLOG_CATEGORIAS = [
  { slug: 'ups', nombre: 'UPS', color: '#32D894' },
  { slug: 'aire-acondicionado', nombre: 'Aire acondicionado', color: '#345FEA' },
  { slug: 'infraestructura-electrica', nombre: 'Infraestructura Eléctrica', color: '#32D894' },
  { slug: 'redes-y-conectividad', nombre: 'Redes y Conectividad', color: '#611AD8' },
  { slug: 'seguridad', nombre: 'Seguridad', color: '#345FEA' },
  { slug: 'diseno-de-espacios', nombre: 'Diseño de Espacios', color: '#1BC5FF' },
]

const SOURCES = {
  eatonSizing: { label: 'Eaton · UPS sizing guide', url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-sizing-guide.html' },
  cyberpowerBuying: { label: 'CyberPower · Guía de compra UPS', url: 'https://www.cyberpower.com/mx/es/knowledge/buying-guide/ups' },
  eatonBypass: { label: 'Eaton · Maintenance bypass', url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/maintenance-bypass-for-ups-redundancy.html' },
  schneiderMaintenance: { label: 'Schneider Electric · UPS maintenance', url: 'https://blog.se.com/infrastructure-and-grid/power-management-metering-monitoring-power-quality/2015/11/19/top-5-issues-to-check-for-in-your-annual-ups-maintenance/' },
  schneiderBattery: { label: 'Schneider Electric · Battery replacement', url: 'https://www.se.com/us/en/faqs/FAQ000242964/' },
  carrierMaintenance: { label: 'Carrier · HVAC maintenance', url: 'https://www.carrier.com/us/en/residential/hvac-resources/hvac-maintenance/' },
  daikinMaintenance: { label: 'Daikin · Maintenance tips', url: 'https://www.daikin.com/products/ac/services/maintenance_tips' },
  minambienteLeaks: { label: 'MinAmbiente · Control de fugas', url: 'https://www.minambiente.gov.co/documento-entidad/guia-para-el-control-de-fugas-de-refrigerante/' },
  vertivPrecision: { label: 'Vertiv · Precision cooling', url: 'https://www.vertiv.com/globalassets/shared/comfort-vs.-precision-cooling-white-paper-service-aspect.pdf' },
  ethernetAlliance: { label: 'Ethernet Alliance · PoE Certification', url: 'https://ethernetalliance.org/poecert/' },
  schneiderElectrical: { label: 'Schneider Electric · Electrical Installation Guide', url: 'https://www.se.com/sa/en/work/products/product-launch/electrical-installation-guide/' },
}

const post = data => ({ status: 'draft', date: '2026-09-18', updatedAt: '2026-09-18', ...data })

export const BLOG_POSTS = [
  post({
    slug: 'como-elegir-ups-para-empresa', categoria: 'ups', status: 'published',
    title: 'Guía de compra de UPS para empresas en Colombia',
    metaTitle: 'Guía de compra de UPS para empresas | ADE System',
    metaDescription: 'Compare carga, kVA, autonomía, topología, tensión, bypass y baterías. Elija una UPS empresarial con criterios técnicos y solicite validación.',
    excerpt: 'Compare potencia, autonomía, topología, tensión y mantenimiento antes de comprar una UPS.',
    answer: 'Elija una UPS después de medir carga, autonomía, tensión y criticidad.',
    sections: [
      { h2: 'Mida la carga crítica', ps: ['Liste solamente los equipos que necesitan respaldo.', 'Registre vatios reales y corriente máxima.'], bullets: ['Excluya impresoras láser y cargas con arranques no validados.', 'Mida la carga cuando el proceso opere normalmente.', 'Reserve capacidad para crecimiento documentado.'] },
      { h2: 'Calcule VA y kVA', ps: ['Divida los vatios entre el factor de potencia.', 'Agregue un margen entre 15 % y 30 %.'], bullets: ['Compruebe simultáneamente límites en W y VA.', 'Use nuestra calculadora para obtener una primera capacidad.', 'Solicite medición para cargas variables o trifásicas.'] },
      { h2: 'Defina la topología', ps: ['Use line-interactive para ofimática con red estable.', 'Use online para servidores, laboratorios y procesos críticos.'], bullets: ['Compare tiempo de transferencia.', 'Exija onda senoidal cuando la carga lo requiera.', 'Revise eficiencia, ruido y disipación térmica.'] },
      { h2: 'Defina la autonomía', ps: ['Defina primero la acción durante el corte.', 'Use minutos para apagar, transferir o continuar.'], bullets: ['Consulte curvas oficiales del modelo.', 'Evite calcular autonomía usando solamente Ah.', 'Agregue bancos externos cuando el fabricante los soporte.'] },
      { h2: 'Revise la instalación', ps: ['Confirme tensión, fases, tomacorriente y protección.', 'Incluya bypass cuando la operación requiera mantenimiento continuo.'], bullets: ['Revise puesta a tierra y capacidad del circuito.', 'Planifique ventilación y acceso técnico.', 'Defina mantenimiento, repuestos y disposición de baterías.'] },
    ],
    utility: { to: '/utilidades/calculadora-ups-kva/', label: 'Calcular UPS y kVA' },
    faqs: [
      { q: '¿Cuánto margen debe tener una UPS?', a: 'Reserve mínimo 15 %. Aumente el margen cuando exista crecimiento confirmado.' },
      { q: '¿Una UPS más grande entrega más autonomía?', a: 'No necesariamente. Consulte la batería y la curva de autonomía del modelo.' },
      { q: '¿Qué datos necesita una cotización?', a: 'Entregue carga, tensión, fases, autonomía, instalación, criticidad y crecimiento.' },
    ],
    sources: [SOURCES.eatonSizing, SOURCES.cyberpowerBuying],
    related: ['ups-empresas', 'ups-bogota', 'ups-online'],
  }),

  post({
    slug: 'como-calcular-kva-ups', categoria: 'ups', status: 'published',
    title: 'Cómo calcular los kVA de una UPS paso a paso',
    metaTitle: 'Cómo calcular kVA de una UPS: fórmula y ejemplo',
    metaDescription: 'Calcule kVA desde vatios y factor de potencia. Agregue margen, compare capacidades estándar y valide autonomía con curvas oficiales.',
    excerpt: 'Calcule W, VA y kVA. Aplique margen y seleccione la siguiente capacidad estándar.',
    answer: 'Divida W entre el factor de potencia. Divida VA entre 1.000.',
    sections: [
      { h2: 'Reúna los datos', ps: ['Sume la potencia máxima de cada carga crítica.', 'Use medición cuando la carga cambie durante la operación.'], bullets: ['Registre cantidad y vatios por equipo.', 'Separe cargas no críticas.', 'Confirme tensión y número de fases.'] },
      { h2: 'Aplique la fórmula', ps: ['Calcule VA mediante W ÷ factor de potencia.', 'Calcule kVA mediante VA ÷ 1.000.'], bullets: ['Use el factor real cuando esté disponible.', 'Evite convertir W directamente a kVA.', 'Compare también la salida máxima en W.'] },
      { h2: 'Agregue margen', ps: ['Multiplique los VA por el margen elegido.', 'Seleccione la siguiente capacidad comercial.'], bullets: ['Use 15 % como referencia mínima.', 'Aumente margen para crecimiento confirmado.', 'Evite sobredimensionar sin justificar expansión.'] },
      { h2: 'Separe capacidad y autonomía', ps: ['Use kVA para definir capacidad eléctrica.', 'Use curvas para definir tiempo de batería.'], bullets: ['Consulte carga porcentual del modelo.', 'Consulte cantidad y estado de baterías.', 'Confirme temperatura y envejecimiento esperado.'] },
    ],
    utility: { to: '/utilidades/calculadora-ups-kva/', label: 'Usar calculadora UPS' },
    faqs: [
      { q: '¿kVA y kW significan lo mismo?', a: 'No. Compare potencia aparente y potencia activa mediante el factor de potencia.' },
      { q: '¿Puedo calcular autonomía con kVA?', a: 'No. Use curvas oficiales, carga real, baterías y eficiencia del modelo.' },
    ],
    sources: [SOURCES.eatonSizing],
    related: ['ups-empresas', 'ups-online', 'diagnostico-ups-banco-baterias'],
  }),

  post({
    slug: 'ups-online-vs-line-interactive', categoria: 'ups',
    title: 'UPS online y line-interactive: compare cada modo',
    metaTitle: 'UPS online vs line-interactive: diferencias técnicas',
    metaDescription: 'Compare doble conversión, AVR, transferencia, eficiencia y aplicaciones. Elija UPS online o line-interactive según criticidad y red eléctrica.',
    excerpt: 'Compare transferencia, acondicionamiento, eficiencia y criticidad antes de elegir una topología.',
    answer: 'Use online para cargas críticas. Use line-interactive para cargas tolerantes.',
    sections: [
      { h2: 'Comprenda el modo line-interactive', ps: ['Alimente la carga desde la red regulada.', 'Conmute hacia batería cuando falle la entrada.'], bullets: ['Use AVR para corregir variaciones moderadas.', 'Considere el tiempo de transferencia.', 'Aplique esta topología en puestos y redes pequeñas.'] },
      { h2: 'Comprenda el modo online', ps: ['Convierta CA hacia CC permanentemente.', 'Reconstruya CA mediante el inversor.'], bullets: ['Obtenga transferencia nula hacia batería.', 'Aísle variaciones de frecuencia y tensión.', 'Considere calor, ventilación y eficiencia.'] },
      { h2: 'Elija según el riesgo', ps: ['Cuantifique el costo de una transferencia.', 'Revise la calidad eléctrica existente.'], bullets: ['Use online para servidores y laboratorios.', 'Use online para cargas industriales sensibles.', 'Use line-interactive para ofimática tolerante.'] },
      { h2: 'Compare la ficha completa', ps: ['Compare W, VA, eficiencia y forma de onda.', 'Revise SNMP, baterías, bypass y garantía.'], bullets: ['Evite decidir solamente por el precio.', 'Confirme repuestos disponibles en Colombia.', 'Solicite puesta en marcha documentada.'] },
    ],
    faqs: [
      { q: '¿Una UPS online siempre conviene?', a: 'No. Compare criticidad, calidad de red, eficiencia y presupuesto.' },
      { q: '¿Una UPS line-interactive protege servidores?', a: 'Puede hacerlo. Valide tolerancia, transferencia, forma de onda y fuente del servidor.' },
    ],
    sources: [SOURCES.cyberpowerBuying],
    related: ['ups-online', 'ups-empresas', 'ups-bogota'],
  }),

  post({
    slug: 'bypass-ups-estatico-mantenimiento', categoria: 'ups',
    title: 'Bypass de UPS: estático y de mantenimiento',
    metaTitle: 'Bypass de UPS: estático vs mantenimiento | Guía',
    metaDescription: 'Diferencie bypass estático y bypass de mantenimiento. Revise riesgos, aislamiento, transferencia y continuidad antes de intervenir una UPS.',
    excerpt: 'Diferencie dos caminos eléctricos. Evite intervenir una UPS sin aislamiento confirmado.',
    answer: 'Use bypass estático para transferencia automática. Use bypass mecánico para aislar la UPS.',
    sections: [
      { h2: 'Identifique el bypass estático', ps: ['Transfiera electrónicamente la carga hacia la fuente de bypass.', 'Active esta ruta durante sobrecargas o fallas internas.'], bullets: ['Revise sincronismo y calidad de la fuente.', 'Consulte alarmas antes de continuar.', 'Recuerde la pérdida del acondicionamiento normal.'] },
      { h2: 'Identifique el bypass de mantenimiento', ps: ['Cree una ruta externa alrededor de la UPS.', 'Aísle el equipo antes del servicio autorizado.'], bullets: ['Confirme el esquema unifilar.', 'Use enclavamientos definidos por ingeniería.', 'Verifique qué partes conservan tensión.'] },
      { h2: 'Controle el riesgo', ps: ['Mantenga la carga energizada desde una fuente aceptable.', 'Reconozca la pérdida temporal de protección UPS.'], bullets: ['Prohíba maniobras sin procedimiento aprobado.', 'Aplique bloqueo y señalización.', 'Asigne personal calificado.'] },
      { h2: 'Exija entregables', ps: ['Solicite diagrama, secuencia y rotulado.', 'Registre cada transferencia y resultado.'], bullets: ['Pruebe el bypass durante la puesta en marcha.', 'Incluya el bypass en el mantenimiento.', 'Actualice el procedimiento después de modificaciones.'] },
    ],
    faqs: [
      { q: '¿La carga queda protegida durante bypass?', a: 'No completamente. La fuente alimenta directamente la carga durante bypass de mantenimiento.' },
      { q: '¿Puedo operar el bypass sin técnico?', a: 'No. Siga el manual y use personal autorizado.' },
    ],
    sources: [SOURCES.eatonBypass],
    related: ['mantenimiento-ups', 'ups-online', 'diagnostico-ups-banco-baterias'],
  }),

  post({
    slug: 'mantenimiento-ups-que-incluye', categoria: 'ups', status: 'published',
    title: 'Qué incluye un mantenimiento preventivo de UPS',
    metaTitle: 'Mantenimiento preventivo UPS: pruebas y entregables',
    metaDescription: 'Revise baterías, alarmas, ventilación, capacitores, bypass y transferencia. Exija mediciones, hallazgos y recomendaciones en cada mantenimiento UPS.',
    excerpt: 'Exija inspección, mediciones, pruebas controladas y un reporte comparable.',
    answer: 'Revise energía, baterías, componentes, ambiente, alarmas y transferencia.',
    sections: [
      { h2: 'Prepare la intervención', ps: ['Defina criticidad, ventana y ruta de bypass.', 'Revise alarmas y mantenimientos anteriores.'], bullets: ['Registre modelo, serie y carga.', 'Confirme procedimiento de aislamiento.', 'Proteja la continuidad del proceso.'] },
      { h2: 'Inspeccione la UPS', ps: ['Limpie ventilación y componentes permitidos.', 'Revise conexiones, ventiladores y capacitores.'], bullets: ['Busque calor, ruido, polvo y corrosión.', 'Compruebe tensiones de entrada y salida.', 'Registre carga y factor de potencia.'] },
      { h2: 'Evalúe las baterías', ps: ['Revise fechas, temperatura, tensión y condición física.', 'Ejecute pruebas según fabricante y alcance.'], bullets: ['Compare bloques dentro del mismo banco.', 'Evite mezclar edades y capacidades.', 'Documente autonomía solamente mediante prueba controlada.'] },
      { h2: 'Pruebe funciones', ps: ['Compruebe alarmas, comunicaciones y apagado controlado.', 'Pruebe transferencia cuando la operación lo permita.'], bullets: ['Revise bypass estático.', 'Revise bypass de mantenimiento.', 'Confirme SNMP y contactos secos.'] },
      { h2: 'Exija el reporte', ps: ['Solicite valores medidos y evidencia.', 'Asigne prioridades y fechas.'], bullets: ['Diferencie observación, riesgo y corrección.', 'Adjunte repuestos recomendados.', 'Conserve tendencia entre mantenimientos.'] },
    ],
    faqs: [
      { q: '¿Cada cuánto programe mantenimiento UPS?', a: 'Defina frecuencia según fabricante, ambiente, criticidad, edad y contrato.' },
      { q: '¿El mantenimiento prueba autonomía?', a: 'Inclúyala solamente cuando exista una prueba controlada y autorizada.' },
    ],
    sources: [SOURCES.schneiderMaintenance],
    related: ['mantenimiento-ups', 'diagnostico-ups-banco-baterias', 'baterias-ups'],
  }),

  post({
    slug: 'laboratorio-ups-colombia-pruebas', categoria: 'ups',
    title: 'Laboratorio de UPS en Colombia: pruebas y entregables',
    metaTitle: 'Laboratorio de UPS en Colombia: qué debe probar',
    metaDescription: 'Revise qué debe probar un laboratorio de UPS: carga, transferencia, baterías, bypass, alarmas, comunicaciones, reparación y reporte técnico.',
    excerpt: 'Defina pruebas, carga simulada, seguridad y evidencia antes de enviar una UPS.',
    answer: 'Exija diagnóstico reproducible, carga controlada, trazabilidad y reporte técnico.',
    sections: [
      { h2: 'Defina el motivo de ingreso', ps: ['Reporte síntomas, alarmas y condiciones de falla.', 'Entregue historial, modelo y configuración.'], bullets: ['Registre eventos antes de apagar.', 'Incluya módulos y baterías relacionados.', 'Proteja configuraciones y tarjetas de red.'] },
      { h2: 'Exija pruebas funcionales', ps: ['Compruebe rectificador, inversor, cargador y bypass.', 'Simule transferencia mediante carga controlada.'], bullets: ['Mida entrada y salida.', 'Revise forma de onda cuando aplique.', 'Pruebe alarmas y comunicaciones.'] },
      { h2: 'Exija pruebas de baterías', ps: ['Mida cada bloque y cadena.', 'Compare impedancia, tensión y temperatura.'], bullets: ['Use carga segura y documentada.', 'Evite declarar autonomía sin prueba.', 'Separe fallas del cargador y batería.'] },
      { h2: 'Controle reparación y salida', ps: ['Autorice repuestos y cambios antes de intervenir.', 'Solicite prueba final con carga.'], bullets: ['Registre componentes reemplazados.', 'Solicite garantía escrita del servicio.', 'Confirme embalaje, transporte e instalación.'] },
      { h2: 'Valide el alcance de Adesystem', ps: ['Consulte disponibilidad antes de trasladar el equipo.', 'Defina diagnóstico en sitio o ingreso técnico.'], bullets: ['Evite asumir capacidades no cotizadas.', 'Solicite alcance y tiempos por escrito.', 'Coordine respaldo temporal cuando resulte necesario.'] },
    ],
    faqs: [
      { q: '¿Todas las UPS deben ingresar al laboratorio?', a: 'No. Diagnostique primero tamaño, falla, transporte, bypass y continuidad requerida.' },
      { q: '¿Un autodiagnóstico reemplaza pruebas técnicas?', a: 'No. Úselo como señal inicial y confirme la causa mediante medición.' },
    ],
    sources: [SOURCES.schneiderMaintenance, SOURCES.schneiderBattery],
    related: ['mantenimiento-ups', 'diagnostico-ups-banco-baterias', 'ups-bogota'],
  }),

  post({
    slug: 'guia-compra-baterias-ups', categoria: 'ups', status: 'published',
    title: 'Guía de compra de baterías para UPS',
    metaTitle: 'Guía de compra de baterías para UPS | Colombia',
    metaDescription: 'Compare química, voltaje, capacidad, fecha, compatibilidad y garantía. Compre baterías UPS completas y valide cargador, banco y disposición final.',
    excerpt: 'Compare compatibilidad, fecha, capacidad, cadena completa y soporte antes de comprar baterías.',
    answer: 'Compre baterías compatibles, recientes y uniformes. Reemplace la cadena completa.',
    sections: [
      { h2: 'Identifique la batería correcta', ps: ['Consulte el manual y la referencia aprobada.', 'Confirme química, voltaje, capacidad y terminal.'], bullets: ['Compare dimensiones y orientación.', 'Revise cantidad por cadena.', 'Confirme corriente del cargador.'] },
      { h2: 'Revise fabricación y almacenamiento', ps: ['Solicite fecha de fabricación verificable.', 'Evite inventario antiguo o sin trazabilidad.'], bullets: ['Revise tensión de recepción.', 'Busque hinchamiento, golpes o fugas.', 'Conserve condiciones recomendadas.'] },
      { h2: 'Reemplace el banco correctamente', ps: ['Cambie simultáneamente baterías equivalentes.', 'Evite mezclar edades, marcas o capacidades.'], bullets: ['Apriete conexiones según fabricante.', 'Registre fecha de instalación.', 'Ejecute autoprueba después de cargar.'] },
      { h2: 'Compare garantía y disposición', ps: ['Exija garantía, factura y soporte local.', 'Solicite gestión del residuo retirado.'], bullets: ['Documente seriales cuando existan.', 'Conserve reporte de instalación.', 'Programe la siguiente revisión.'] },
    ],
    faqs: [
      { q: '¿Puedo cambiar solamente una batería?', a: 'Evítelo dentro de una cadena. Reemplace unidades equivalentes y envejecidas conjuntamente.' },
      { q: '¿Qué reduce la vida de una batería UPS?', a: 'Controle temperatura, descargas, carga incorrecta, almacenamiento y calidad eléctrica.' },
    ],
    sources: [SOURCES.schneiderBattery],
    related: ['baterias-ups', 'mantenimiento-ups', 'diagnostico-ups-banco-baterias'],
  }),

  post({
    slug: 'cuando-cambiar-baterias-ups', categoria: 'ups',
    title: 'Cuándo cambiar las baterías de una UPS',
    metaTitle: 'Cuándo cambiar baterías UPS: señales y pruebas',
    metaDescription: 'Revise edad, alarmas, temperatura, deformación y autonomía. Cambie baterías UPS mediante diagnóstico, cadena uniforme y disposición certificada.',
    excerpt: 'Revise edad, alarmas, condición física y pruebas antes de perder autonomía.',
    answer: 'Cambie baterías ante falla, deformación, fuga, alarma o fin de vida.',
    sections: [
      { h2: 'Revise señales inmediatas', ps: ['Atienda alarmas de reemplazo sin aplazarlas.', 'Retire baterías hinchadas o con fuga mediante personal calificado.'], bullets: ['Detecte olor, calor y corrosión.', 'Revise autonomía reducida.', 'Registre reinicios o transferencias fallidas.'] },
      { h2: 'Revise edad y ambiente', ps: ['Consulte fecha real de instalación.', 'Compare temperatura contra la recomendación del fabricante.'], bullets: ['Considere profundidad de descarga.', 'Considere frecuencia de eventos.', 'Considere calidad de carga.'] },
      { h2: 'Ejecute pruebas', ps: ['Ejecute autoprueba según el modelo.', 'Confirme hallazgos mediante medición del banco.'], bullets: ['Compare tensión por bloque.', 'Compare impedancia cuando exista instrumento.', 'Realice descarga controlada cuando esté autorizada.'] },
      { h2: 'Planifique el reemplazo', ps: ['Cambie conjuntos equivalentes.', 'Actualice fecha y configuración del UPS.'], bullets: ['Recargue completamente antes de calibrar.', 'Pruebe transferencia después del trabajo.', 'Gestione residuos mediante canal autorizado.'] },
    ],
    faqs: [
      { q: '¿Cuántos años duran las baterías UPS?', a: 'Consulte el fabricante. Controle temperatura, descargas, carga y ambiente.' },
      { q: '¿Una UPS encendida confirma baterías sanas?', a: 'No. Ejecute autoprueba, mediciones y descarga controlada cuando corresponda.' },
    ],
    sources: [SOURCES.schneiderBattery],
    related: ['baterias-ups', 'mantenimiento-ups', 'diagnostico-ups-banco-baterias'],
  }),

  post({
    slug: 'autonomia-ups-banco-baterias', categoria: 'ups',
    title: 'Autonomía UPS y banco de baterías: cómo definirla',
    metaTitle: 'Autonomía UPS y banco de baterías: guía técnica',
    metaDescription: 'Defina minutos de respaldo según carga y operación. Use curvas oficiales, banco compatible, temperatura y prueba controlada para validar autonomía.',
    excerpt: 'Defina la acción del negocio. Luego seleccione minutos, batería y prueba.',
    answer: 'Defina autonomía mediante carga real, curva oficial y acción operativa.',
    sections: [
      { h2: 'Defina el objetivo', ps: ['Elija continuar, transferir o apagar.', 'Asigne minutos a cada acción.'], bullets: ['Incluya arranque de planta.', 'Incluya apagado de servidores.', 'Incluya respuesta del personal.'] },
      { h2: 'Use curvas oficiales', ps: ['Consulte la curva del modelo exacto.', 'Aplique la carga porcentual calculada.'], bullets: ['Evite usar solamente Ah.', 'Incluya módulos externos aprobados.', 'Considere eficiencia del sistema.'] },
      { h2: 'Ajuste condiciones reales', ps: ['Considere edad, temperatura y descargas anteriores.', 'Revise capacidad del cargador.'], bullets: ['Evite bancos sobredimensionados sin recarga suficiente.', 'Controle ventilación.', 'Separe cadenas con diferencias críticas.'] },
      { h2: 'Valide mediante prueba', ps: ['Programe una descarga controlada.', 'Proteja la operación mediante bypass o respaldo.'], bullets: ['Registre carga inicial.', 'Registre tiempo y tensión final.', 'Compare el resultado con el objetivo.'] },
    ],
    faqs: [
      { q: '¿Más kVA entregan más minutos?', a: 'No necesariamente. Compare batería, carga y curva oficial.' },
      { q: '¿Puedo agregar cualquier banco externo?', a: 'No. Confirme tensión, cargador, protección, gabinete y compatibilidad del fabricante.' },
    ],
    sources: [SOURCES.eatonSizing],
    related: ['baterias-ups', 'ups-empresas', 'diagnostico-ups-banco-baterias'],
  }),

  post({
    slug: 'guia-compra-aire-acondicionado-empresarial', categoria: 'aire-acondicionado', status: 'published',
    title: 'Guía de compra de aire acondicionado empresarial',
    metaTitle: 'Guía de compra de aire acondicionado empresarial',
    metaDescription: 'Compare carga térmica, uso, tecnología, eficiencia, ventilación y mantenimiento. Elija aire acondicionado empresarial mediante diseño y visita.',
    excerpt: 'Calcule carga térmica. Compare uso, eficiencia, control, instalación y mantenimiento.',
    answer: 'Elija el sistema después de calcular carga, uso, ambiente y continuidad.',
    sections: [
      { h2: 'Calcule la carga térmica', ps: ['Cuente personas, equipos, iluminación y envolvente.', 'Mida horarios y simultaneidad.'], bullets: ['Evite comprar solamente por metros cuadrados.', 'Incluya servidores y equipos de proceso.', 'Revise orientación y ganancias solares.'] },
      { h2: 'Defina el uso', ps: ['Separe confort humano y enfriamiento crítico.', 'Defina horario diario y anual.'], bullets: ['Use confort para oficinas.', 'Use precisión para cuartos técnicos críticos.', 'Evalúe redundancia cuando no permita detenciones.'] },
      { h2: 'Compare tecnología', ps: ['Compare expansión directa, VRF y sistemas centrales.', 'Revise control, eficiencia y mantenimiento.'], bullets: ['Confirme refrigerante disponible.', 'Revise tensión y alimentación.', 'Planifique drenajes y ventilación.'] },
      { h2: 'Exija un alcance completo', ps: ['Solicite diseño, suministro, instalación y puesta en marcha.', 'Exija pruebas y manual de operación.'], bullets: ['Incluya soportes y tuberías.', 'Incluya circuitos y protecciones.', 'Incluya mantenimiento y control de fugas.'] },
    ],
    faqs: [
      { q: '¿Cuántos BTU necesita una oficina?', a: 'Calcule carga térmica. Evite definir capacidad solamente mediante área.' },
      { q: '¿Una sala de servidores usa aire convencional?', a: 'Evalúe carga permanente, control, redundancia y humedad antes de decidir.' },
    ],
    sources: [SOURCES.carrierMaintenance, SOURCES.vertivPrecision],
    related: ['aire-acondicionado-bogota', 'mantenimiento-aire-acondicionado', 'aire-acondicionado-precision'],
  }),

  post({
    slug: 'mantenimiento-aire-acondicionado-empresarial', categoria: 'aire-acondicionado',
    title: 'Mantenimiento de aire acondicionado empresarial',
    metaTitle: 'Mantenimiento aire acondicionado empresarial | Guía',
    metaDescription: 'Revise filtros, serpentines, drenajes, refrigerante, conexiones y operación. Exija mediciones y reporte en cada mantenimiento empresarial.',
    excerpt: 'Exija limpieza, mediciones, revisión eléctrica, control de fugas y reporte.',
    answer: 'Revise flujo, intercambio térmico, drenaje, refrigerante y sistema eléctrico.',
    sections: [
      { h2: 'Prepare el inventario', ps: ['Registre equipos, capacidades, ubicaciones y horarios.', 'Revise fallas y mantenimientos anteriores.'], bullets: ['Asigne criticidad.', 'Defina ventanas.', 'Identifique equipos sin respaldo.'] },
      { h2: 'Limpie y revise', ps: ['Limpie filtros, serpentines y bandejas.', 'Despeje drenajes y entradas de aire.'], bullets: ['Revise ventiladores.', 'Revise soportes.', 'Revise aislamiento y tubería.'] },
      { h2: 'Mida el funcionamiento', ps: ['Mida temperaturas y corriente.', 'Revise presiones según fabricante y condiciones.'], bullets: ['Detecte fugas antes de recargar.', 'Revise conexiones eléctricas.', 'Compruebe termostatos y controles.'] },
      { h2: 'Exija el reporte', ps: ['Registre mediciones antes y después.', 'Liste repuestos y riesgos.'], bullets: ['Separe mantenimiento y reparación.', 'Asigne prioridades.', 'Programe la siguiente visita.'] },
    ],
    faqs: [
      { q: '¿Cada cuánto realice mantenimiento?', a: 'Defina frecuencia según ambiente, horas, fabricante, criticidad y condición.' },
      { q: '¿Debe recargar refrigerante en cada visita?', a: 'No. Detecte y corrija fugas antes de recargar.' },
    ],
    sources: [SOURCES.carrierMaintenance, SOURCES.daikinMaintenance, SOURCES.minambienteLeaks],
    related: ['mantenimiento-aire-acondicionado', 'aire-acondicionado-bogota', 'aire-acondicionado-precision'],
  }),

  post({
    slug: 'aire-acondicionado-precision-vs-confort', categoria: 'aire-acondicionado',
    title: 'Aire acondicionado de precisión versus confort',
    metaTitle: 'Aire de precisión vs confort: diferencias técnicas',
    metaDescription: 'Compare operación, carga sensible, control, humedad, flujo y redundancia. Elija climatización para oficinas o cuartos técnicos críticos.',
    excerpt: 'Compare carga sensible, control, horas, humedad y redundancia antes de seleccionar.',
    answer: 'Use precisión para electrónica crítica. Use confort para ocupantes y horarios definidos.',
    sections: [
      { h2: 'Compare la carga', ps: ['Identifique calor sensible de equipos.', 'Identifique humedad y ocupación.'], bullets: ['Use confort para personas.', 'Use precisión para electrónica concentrada.', 'Calcule cambios durante el día.'] },
      { h2: 'Compare el control', ps: ['Exija control estrecho para ambientes críticos.', 'Revise humedad cuando afecte electrónica.'], bullets: ['Controle temperatura continua.', 'Controle alarmas remotas.', 'Integre monitoreo cuando aplique.'] },
      { h2: 'Compare la operación', ps: ['Defina horas reales de servicio.', 'Planifique mantenimiento sin detener la carga.'], bullets: ['Evalúe redundancia N+1.', 'Revise reinicio automático.', 'Revise operación después de cortes.'] },
      { h2: 'Decida mediante diseño', ps: ['Mida la carga térmica y distribución del aire.', 'Evite sustituir precisión mediante equipos domésticos.'], bullets: ['Revise contención y retornos.', 'Revise capacidad eléctrica.', 'Documente puntos de alarma.'] },
    ],
    faqs: [
      { q: '¿Todo cuarto técnico necesita aire de precisión?', a: 'No. Evalúe carga, criticidad, operación, control y redundancia.' },
      { q: '¿Puede usar dos minisplit como redundancia?', a: 'Evalúe control, arranque, reparto, alarmas, humedad y operación continua.' },
    ],
    sources: [SOURCES.vertivPrecision],
    related: ['aire-acondicionado-precision', 'datacenter-bogota', 'mantenimiento-aire-acondicionado'],
  }),

  post({
    slug: 'calcular-presupuesto-poe', categoria: 'redes-y-conectividad',
    title: 'Cómo calcular el presupuesto PoE de un switch',
    metaTitle: 'Cómo calcular presupuesto PoE para un switch',
    metaDescription: 'Sume cámaras, teléfonos y access points. Aplique margen y compare potencia total, potencia por puerto, estándar IEEE y respaldo UPS.',
    excerpt: 'Sume consumo máximo. Compare potencia total, puerto, estándar y margen.',
    answer: 'Sume vatios máximos. Agregue margen. Compare el resultado con el switch.',
    sections: [
      { h2: 'Liste los dispositivos', ps: ['Registre cada dispositivo alimentado por Ethernet.', 'Use consumo máximo de la ficha.'], bullets: ['Incluya cámaras PTZ.', 'Incluya radios e infrarrojos.', 'Incluya puertos auxiliares.'] },
      { h2: 'Calcule el presupuesto', ps: ['Multiplique vatios por cantidad.', 'Sume todos los dispositivos.'], bullets: ['Agregue margen.', 'Compare potencia total del switch.', 'Reserve puertos para crecimiento.'] },
      { h2: 'Valide cada puerto', ps: ['Compare el estándar requerido por dispositivo.', 'Confirme potencia entregada al dispositivo.'], bullets: ['Diferencie PSE y PD.', 'Revise 802.3af, 802.3at y 802.3bt.', 'Evite modos propietarios sin validación.'] },
      { h2: 'Integre la infraestructura', ps: ['Revise cableado, temperatura y longitud.', 'Respalde switch y dispositivos mediante UPS.'], bullets: ['Calcule la carga completa.', 'Revise ventilación del rack.', 'Documente VLAN y uplinks.'] },
    ],
    utility: { to: '/utilidades/calculadora-poe/', label: 'Calcular presupuesto PoE' },
    faqs: [
      { q: '¿Número de puertos y presupuesto significan lo mismo?', a: 'No. Confirme cantidad y potencia total disponible.' },
      { q: '¿Use consumo típico?', a: 'No. Use consumo máximo y agregue margen documentado.' },
    ],
    sources: [SOURCES.ethernetAlliance],
    related: ['redes-wifi-empresas', 'cableado-estructurado-bogota', 'ups-empresas'],
  }),

  post({
    slug: 'calcular-seccion-cable-caida-tension', categoria: 'infraestructura-electrica',
    title: 'Cómo calcular sección de cable por caída de tensión',
    metaTitle: 'Calcular sección de cable y caída de tensión',
    metaDescription: 'Estime sección de cobre o aluminio por caída de tensión. Valide ampacidad, aislamiento, agrupamiento, protecciones y RETIE antes de instalar.',
    excerpt: 'Calcule una sección inicial. Valide después ampacidad, instalación y protección.',
    answer: 'Calcule sección con corriente, distancia, tensión, material y caída permitida.',
    sections: [
      { h2: 'Reúna los datos', ps: ['Registre tensión, corriente y longitud unidireccional.', 'Defina material y temperatura.'], bullets: ['Use corriente máxima.', 'Defina sistema monofásico o trifásico.', 'Establezca caída permitida.'] },
      { h2: 'Calcule la sección', ps: ['Use 2ρLI/ΔV para sistemas monofásicos.', 'Use √3ρLI/ΔV para sistemas trifásicos.'], bullets: ['Ajuste resistividad por temperatura.', 'Seleccione la siguiente sección comercial.', 'Calcule nuevamente la caída obtenida.'] },
      { h2: 'Valide otros criterios', ps: ['Compruebe ampacidad mediante norma aplicable.', 'Compruebe protección y corriente de cortocircuito.'], bullets: ['Aplique factores de agrupamiento.', 'Revise canalización y aislamiento.', 'Revise temperatura ambiente.'] },
      { h2: 'Solicite validación', ps: ['Entregue carga, recorrido y condiciones de instalación.', 'Exija memoria y selección documentada.'], bullets: ['Aplique RETIE vigente.', 'Revise coordinación de protecciones.', 'Actualice planos de entrega.'] },
    ],
    utility: { to: '/utilidades/calculadora-seccion-cable/', label: 'Calcular sección de cable' },
    faqs: [
      { q: '¿La caída de tensión define la sección final?', a: 'No. Valide también ampacidad, protección, instalación, temperatura y cortocircuito.' },
      { q: '¿Ingrese distancia de ida y vuelta?', a: 'No. Ingrese longitud unidireccional. La fórmula incorpora el factor del sistema.' },
    ],
    sources: [SOURCES.schneiderElectrical],
    related: ['cableado-electrico-bogota', 'tableros-electricos-bogota', 'infraestructura-electrica-bogota'],
  }),

  post({
    slug: 'certificacion-cobre-fibra-otdr-olts', categoria: 'redes-y-conectividad', status: 'published',
    title: 'Certificación de cobre y fibra: OTDR y OLTS',
    metaTitle: 'Certificación cobre y fibra: OTDR, OLTS y reportes',
    metaDescription: 'Diferencie certificación de cobre, OLTS y OTDR. Exija identificación, límites, trazabilidad y reporte por enlace antes de recibir una red.',
    excerpt: 'Diferencie pruebas. Exija límites, identificación y reporte por cada enlace.',
    answer: 'Certifique cobre con límites aplicables. Pruebe fibra mediante OLTS y OTDR.',
    sections: [
      { h2: 'Defina el alcance', ps: ['Liste cada enlace y categoría.', 'Defina norma, conectores y longitudes.'], bullets: ['Identifique origen y destino.', 'Defina configuración de prueba.', 'Acorde criterios de aceptación.'] },
      { h2: 'Certifique cobre', ps: ['Mida parámetros del enlace completo.', 'Compare resultados contra el límite seleccionado.'], bullets: ['Revise mapa de cableado.', 'Revise pérdida y diafonía.', 'Entregue resultado por punto.'] },
      { h2: 'Pruebe fibra mediante OLTS', ps: ['Mida pérdida total del enlace.', 'Defina referencias y longitudes de onda.'], bullets: ['Limpie conectores antes de medir.', 'Use cordones de referencia adecuados.', 'Documente polaridad y resultado.'] },
      { h2: 'Caracterice fibra mediante OTDR', ps: ['Ubique eventos, empalmes y pérdidas.', 'Interprete trazas mediante personal competente.'], bullets: ['Use bobinas de lanzamiento y recepción.', 'Evite confundir OTDR con certificación completa.', 'Conserve archivos nativos.'] },
    ],
    faqs: [
      { q: '¿OTDR reemplaza OLTS?', a: 'No. Use cada prueba según alcance, norma y criterio de aceptación.' },
      { q: '¿Qué debe incluir el reporte?', a: 'Incluya identificación, configuración, límites, resultado, fecha, equipo y archivo nativo.' },
    ],
    sources: [],
    related: ['certificacion-cableado-cobre-fibra', 'fibra-optica-bogota', 'cableado-estructurado-bogota'],
  }),

  post({
    slug: 'por-que-falla-una-puesta-a-tierra', categoria: 'infraestructura-electrica',
    title: 'Cómo revisar una puesta a tierra empresarial',
    metaTitle: 'Puesta a tierra empresarial: medición y diagnóstico',
    metaDescription: 'Revise continuidad, conexiones, electrodos, corrosión y mediciones. Solicite diagnóstico de puesta a tierra y aplique RETIE vigente.',
    excerpt: 'Revise continuidad, conexiones y mediciones. Evite diagnosticar mediante síntomas aislados.',
    answer: 'Mida la puesta a tierra. Evite confiar solamente en planos antiguos.',
    sections: [
      { h2: 'Revise síntomas', ps: ['Registre alarmas, daños y tensiones de contacto.', 'Evite atribuir todas las fallas a tierra.'], bullets: ['Revise carcasas energizadas.', 'Revise alarmas de cableado.', 'Revise daños repetitivos.'] },
      { h2: 'Inspeccione el sistema', ps: ['Revise conductores, uniones y barras.', 'Busque corrosión, cortes y conexiones indebidas.'], bullets: ['Actualice el plano.', 'Identifique electrodos.', 'Revise equipotencialidad.'] },
      { h2: 'Ejecute mediciones', ps: ['Use el método adecuado para la instalación.', 'Registre condiciones ambientales y configuración.'], bullets: ['Mida resistencia cuando aplique.', 'Mida continuidad.', 'Revise tensiones y corrientes asociadas.'] },
      { h2: 'Corrija y documente', ps: ['Priorice riesgos para personas y equipos.', 'Verifique nuevamente después de corregir.'], bullets: ['Actualice planos.', 'Conserve resultados.', 'Programe seguimiento.'] },
    ],
    faqs: [
      { q: '¿Un valor único confirma una buena tierra?', a: 'No. Revise diseño, continuidad, equipotencialidad, medición y aplicación.' },
      { q: '¿Cada cuánto mida la puesta a tierra?', a: 'Defina frecuencia según norma, ambiente, cambios, riesgo y mantenimiento.' },
    ],
    sources: [SOURCES.schneiderElectrical],
    related: ['infraestructura-electrica-bogota', 'cableado-electrico-bogota', 'tableros-electricos-bogota'],
  }),

  post({
    slug: 'como-evaluar-proveedor-infraestructura', categoria: 'infraestructura-electrica',
    title: 'Cómo evaluar un proveedor de infraestructura',
    metaTitle: 'Cómo evaluar proveedores de infraestructura técnica',
    metaDescription: 'Compare alcance, responsables, pruebas, documentación, garantía y soporte. Evalúe proveedores eléctricos, redes, UPS y climatización antes de contratar.',
    excerpt: 'Compare alcance, pruebas, documentación, garantía y soporte antes de firmar.',
    answer: 'Contrate mediante alcance verificable, responsables claros y entregables medibles.',
    sections: [
      { h2: 'Revise el alcance', ps: ['Exija actividades, exclusiones y cantidades.', 'Evite descripciones abiertas.'], bullets: ['Defina marcas o desempeño.', 'Defina normas.', 'Defina condiciones de obra.'] },
      { h2: 'Revise las pruebas', ps: ['Solicite protocolos antes de ejecutar.', 'Acorde criterios de aceptación.'], bullets: ['Defina instrumentos.', 'Defina evidencia.', 'Defina responsables.'] },
      { h2: 'Revise la entrega', ps: ['Exija planos, memorias y reportes.', 'Reciba capacitación y garantías.'], bullets: ['Solicite archivos editables.', 'Registre seriales.', 'Cierre pendientes.'] },
      { h2: 'Revise el soporte', ps: ['Acorde canales y tiempos contractuales.', 'Defina repuestos y escalamiento.'], bullets: ['Evite promesas verbales.', 'Revise cobertura.', 'Conserve contactos.'] },
    ],
    faqs: [], sources: [],
    related: ['infraestructura-electrica-bogota', 'cableado-estructurado-bogota', 'mantenimiento-ups'],
  }),

  post({
    slug: 'adecuacion-oficinas-sin-sobrecostos', categoria: 'diseno-de-espacios',
    title: 'Cómo coordinar una adecuación de oficinas',
    metaTitle: 'Adecuación de oficinas: diseño e infraestructura',
    metaDescription: 'Coordine arquitectura, energía, redes, seguridad y climatización. Reduzca cambios mediante planos, cantidades, interferencias y entregables definidos.',
    excerpt: 'Coordine todas las disciplinas antes de construir. Evite resolver interferencias durante obra.',
    answer: 'Integre arquitectura e ingeniería antes de comprar o construir.',
    sections: [
      { h2: 'Defina la operación', ps: ['Liste personas, equipos, horarios y crecimiento.', 'Defina qué actividades no pueden detenerse.'], bullets: ['Ubique puestos.', 'Ubique salas técnicas.', 'Ubique recorridos.'] },
      { h2: 'Coordine disciplinas', ps: ['Cruce arquitectura, eléctrica, red, seguridad y climatización.', 'Resuelva interferencias antes de obra.'], bullets: ['Revise cielos.', 'Revise canalizaciones.', 'Revise accesos de mantenimiento.'] },
      { h2: 'Controle cantidades', ps: ['Extraiga cantidades desde planos coordinados.', 'Defina unidades y alcances.'], bullets: ['Evite partidas globales.', 'Controle cambios.', 'Actualice presupuesto.'] },
      { h2: 'Cierre la entrega', ps: ['Pruebe sistemas y capacite usuarios.', 'Entregue planos y garantías.'], bullets: ['Registre pendientes.', 'Entregue manuales.', 'Defina mantenimiento.'] },
    ],
    faqs: [], sources: [],
    related: ['adecuacion-oficinas-bogota', 'cableado-estructurado-bogota', 'aire-acondicionado-bogota'],
  }),
]

export const PUBLISHED_POSTS = BLOG_POSTS.filter(item => item.status === 'published')
export const getPost = slug => PUBLISHED_POSTS.find(item => item.slug === slug)
export const getCategoria = slug => BLOG_CATEGORIAS.find(item => item.slug === slug)
export const postsPorCategoria = slug => PUBLISHED_POSTS.filter(item => item.categoria === slug)
