/* ── Datos globales del sitio, una sola fuente de verdad ── */

export const SITE = {
  name: 'ADE System',
  legalName: 'Adesystem Ingeniería S.A.S.',
  url: 'https://www.adesystem.com.co',
  logo: 'https://www.adesystem.com.co/adesystem-logo.png',
  phone: '+57 304 602 3227',
  phoneRaw: '573046023227',
  email: 'servicioalcliente@adesystem.com.co',
  address: {
    street: 'Carrera 13 #93-35, Oficina 607',
    city: 'Bogotá',
    region: 'Cundinamarca',
    country: 'CO',
  },
  geo: { lat: 4.6766, lng: -74.0479 },
  social: [
    'https://www.instagram.com/adesystem/',
    'https://facebook.com/profile.php?id=100063971468258',
    'https://www.linkedin.com/company/adesystem/',
    'https://www.tiktok.com/@adesystem',
  ],
}

export const whatsapp = (text = 'Hola, quiero información sobre sus servicios.') =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`

/* Schema.org LocalBusiness, se inyecta en todas las páginas */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: SITE.logo,
  email: SITE.email,
  telephone: SITE.phone,
  description:
    'Más de 25 años diseñando, instalando y sosteniendo infraestructura eléctrica, redes, seguridad e interiorismo para empresas en Colombia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  sameAs: SITE.social,
  knowsAbout: [
    'UPS', 'Infraestructura eléctrica', 'Cableado estructurado', 'Datacenter',
    'Sistemas contra incendio', 'Control de acceso', 'Subestaciones eléctricas',
    'Adecuación de oficinas', 'Interiorismo corporativo',
  ],
}
