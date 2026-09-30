import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo, { breadcrumbSchema } from '../components/Seo'
import { PageHero, CtaBanner, RelatedLinks } from '../components/PageBlocks'
import { SERVICIOS_PAGES } from '../data/serviciosPages'
import { SECTORES } from '../data/sectores'
import { CAPTURAS } from '../data/capturas'
import { MEDIA, mediaForServicio, mediaForSector } from '../data/media'

const reveal = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function CardGrid({ items }) {
  return (
    <section style={{ background: 'var(--navy-light)', padding: '96px 4vw' }}>
      <div style={{
        maxWidth: 980, margin: '0 auto',
        display: 'grid', gap: '1.4rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
      }}>
        {items.map((it, i) => (
          <motion.div key={it.to} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}>
            <Link to={it.to} style={{
              display: 'block', height: '100%',
              background: 'rgba(0,8,57,.55)', border: '1px solid rgba(255,255,255,.07)',
              borderTop: `3px solid ${it.color}`, borderRadius: 12,
              overflow: 'hidden', transition: 'transform .3s var(--ease-out), border-color .3s var(--ease-out)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = `${it.color}55`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'
                e.currentTarget.style.borderTopColor = it.color
              }}>
              {it.media && <img src={it.media.src} alt={it.media.alt} loading="lazy" width="1536" height="1024" style={{ width: '100%', height: 176, objectFit: 'cover' }} />}
              <div style={{ padding: '1.6rem 1.7rem 1.9rem' }}><h2 style={{
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem',
                color: '#fff', marginBottom: '.7rem', lineHeight: 1.3,
              }}>{it.title}</h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '.88rem',
                color: 'rgba(255,255,255,.72)', lineHeight: 1.7, marginBottom: '1rem',
              }}>{it.desc}</p>
              <span style={{
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.72rem',
                letterSpacing: '.08em', textTransform: 'uppercase', color: it.color,
              }}>Conocer más →</span></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function ServiciosIndex() {
  const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Servicios', path: '/servicios/' }]
  return (
    <>
      <Seo
        title="Servicios de infraestructura crítica | ADE System"
        description="Servicios empresariales de energía, UPS, redes, seguridad, climatización e interiorismo. Diseño, ejecución y mantenimiento con un solo responsable."
        path="/servicios/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <PageHero
        eyebrow="De la consultoría al soporte · Sin saltos"
        h1="Cuatro pilares. Una sola cadena de valor."
        intro={[
          'Coordinamos energía, conectividad, seguridad, climatización y espacios dentro de un alcance técnico común. Cada pilar puede contratarse por separado o integrarse en un proyecto con responsabilidades y entregables definidos.',
        ]}
        color="#345FEA"
        breadcrumbs={breadcrumbs}
        media={MEDIA.projects}
      />
      <CardGrid items={SERVICIOS_PAGES.map(s => ({
        to: `/servicios/${s.slug}/`, color: s.color,
        title: s.nombre, desc: s.tagline, media: mediaForServicio(s.slug),
      }))} />
      <RelatedLinks title="Soluciones específicas" links={CAPTURAS.map(c => ({
        to: `/${c.slug}/`, label: c.nav, color: c.color,
      }))} />
      <CtaBanner
        title="Tu infraestructura es la base de todo."
        text="Cuéntanos el alcance y recibe una orientación inicial antes de cotizar."
        whatsappMsg="Hola, quiero agendar un diagnóstico de infraestructura."
      />
    </>
  )
}

export function SectoresIndex() {
  const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Sectores', path: '/sectores/' }]
  return (
    <>
      <Seo
        title="Infraestructura crítica por sectores | ADE System"
        description="Infraestructura crítica para sector financiero, salud y farmacéutico, manufactura, logística, entretenimiento, datacenter, oficinas corporativas y PYMES en Colombia."
        path="/sectores/"
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <PageHero
        eyebrow="Financiero · Salud · Industria · Tecnología · Oficinas"
        h1="Cada sector tiene reglas propias. Las conocemos."
        intro={[
          'La infraestructura de una entidad financiera no se diseña como la de un laboratorio, y la de una bodega no se parece a la de un estudio de música. Estas son las exigencias sectoriales que mejor conocemos.',
        ]}
        color="#1BC5FF"
        breadcrumbs={breadcrumbs}
        media={MEDIA.interiors}
      />
      <CardGrid items={SECTORES.map(s => ({
        to: `/sectores/${s.slug}/`, color: s.color,
        title: s.nombre, desc: s.intro[0].slice(0, 130) + '…', media: mediaForSector(s.slug),
      }))} />
      <CtaBanner
        title="¿Tu industria no está en la lista?"
        text="Cuéntanos qué hace tu empresa y qué no puede detenerse. El criterio de ingeniería aplica a cualquier sector."
        whatsappMsg="Hola, quiero información sobre infraestructura para mi empresa."
        color="#1BC5FF"
      />
    </>
  )
}
