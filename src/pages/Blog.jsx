import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo, { breadcrumbSchema } from '../components/Seo'
import { PageHero, CtaBanner } from '../components/PageBlocks'
import { PUBLISHED_POSTS, BLOG_CATEGORIAS, getCategoria, postsPorCategoria } from '../data/blogPosts'
import { MEDIA, mediaForCategory } from '../data/media'

const reveal = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const fmtFecha = iso =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })

function CategoriaTabs({ activa }) {
  const tabs = [
    { slug: null, nombre: 'Todos', color: '#8A95A3' },
    ...BLOG_CATEGORIAS.filter(category => PUBLISHED_POSTS.some(post => post.categoria === category.slug)),
  ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem', marginBottom: '3rem' }}>
      {tabs.map(c => {
        const to = c.slug ? `/blog/categoria/${c.slug}/` : '/blog/'
        const isActive = activa === c.slug
        return (
          <Link key={to} to={to} style={{
            padding: '.55rem 1.1rem', borderRadius: 100,
            border: `1px solid ${isActive ? c.color : 'rgba(255,255,255,.12)'}`,
            background: isActive ? `${c.color}1a` : 'transparent',
            fontFamily: 'var(--font-head)', fontWeight: 600,
            fontSize: '.74rem', letterSpacing: '.05em', textTransform: 'uppercase',
            color: isActive ? c.color : 'rgba(255,255,255,.5)',
            transition: 'background-color .25s, border-color .25s, color .25s',
          }}>{c.nombre}</Link>
        )
      })}
    </div>
  )
}

function PostCard({ post, i }) {
  const cat = getCategoria(post.categoria)
  return (
    <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}>
      <Link to={`/blog/${post.slug}/`} style={{
        display: 'block', height: '100%',
        background: 'rgba(0,8,57,.55)', border: '1px solid rgba(255,255,255,.07)',
        borderRadius: 12, overflow: 'hidden',
        transition: 'transform .3s var(--ease-out), border-color .3s var(--ease-out)',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.borderColor = `${cat.color}55`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'
        }}>
        <img src={mediaForCategory(post.categoria).src} alt={mediaForCategory(post.categoria).alt} loading="lazy" width="1536" height="1024" style={{ width: '100%', height: 170, objectFit: 'cover' }} />
        <div style={{ padding: '1.5rem 1.7rem 1.8rem' }}><div style={{
          fontFamily: 'var(--font-head)', fontWeight: 700,
          fontSize: '.64rem', letterSpacing: '.14em', textTransform: 'uppercase',
          color: cat.color, marginBottom: '.8rem',
        }}>{cat.nombre} · {fmtFecha(post.date)}</div>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.12rem',
          color: '#fff', lineHeight: 1.35, marginBottom: '.8rem',
        }}>{post.title}</h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '.88rem',
          color: 'rgba(255,255,255,.72)', lineHeight: 1.7, marginBottom: '1rem',
        }}>{post.excerpt}</p>
        <span style={{
          fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.72rem',
          letterSpacing: '.08em', textTransform: 'uppercase', color: cat.color,
        }}>Leer artículo →</span></div>
      </Link>
    </motion.article>
  )
}

export default function Blog() {
  const { categoria } = useParams()
  const cat = categoria ? getCategoria(categoria) : null
  if (categoria && !cat) return <Navigate to="/blog/" replace />

  const posts = cat ? postsPorCategoria(cat.slug) : PUBLISHED_POSTS
  const path = cat ? `/blog/categoria/${cat.slug}/` : '/blog/'
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Blog', path: '/blog/' },
    ...(cat ? [{ name: cat.nombre, path }] : []),
  ]

  return (
    <>
      <Seo
        title={cat
          ? cat.slug === 'ups'
            ? 'Guías técnicas de UPS para empresas | ADE System'
            : `Guías de ${cat.nombre} para empresas | ADE System`
          : 'Blog técnico: UPS, eléctrica y redes | ADE System'}
        description={cat
          ? `Artículos y guías técnicas sobre ${cat.nombre.toLowerCase()} para tomar decisiones de compra, operación y mantenimiento con mejor información empresarial.`
          : 'Guías de compra y mantenimiento sobre UPS, infraestructura eléctrica, redes, seguridad y espacios corporativos, con lenguaje técnico y claro.'}
        path={path}
        noindex={posts.length === 0}
        schemas={[breadcrumbSchema(breadcrumbs)]}
      />
      <PageHero
        eyebrow="Recursos para decidir mejor"
        h1={cat ? cat.nombre : 'Criterio técnico, explicado con claridad.'}
        intro={[
          cat
            ? `Guías y artículos de ${cat.nombre.toLowerCase()} para comparar alcance, límites y entregables.`
            : 'Guías de compra y mantenimiento para tomar decisiones técnicas con criterios, límites y entregables claros.',
        ]}
        color={cat?.color || '#32D894'}
        breadcrumbs={breadcrumbs}
        media={cat ? mediaForCategory(cat.slug) : MEDIA.projects}
      />
      <section style={{ background: 'var(--navy-light)', padding: '72px 4vw 96px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <CategoriaTabs activa={cat?.slug || null} />
          <div style={{
            display: 'grid', gap: '1.4rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          }}>
            {posts.map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
          </div>
          {posts.length === 0 && (
            <p style={{ color: 'rgba(255,255,255,.72)', fontFamily: 'var(--font-body)' }}>
              Pronto publicaremos artículos en esta categoría.
            </p>
          )}
        </div>
      </section>
      <CtaBanner
        title="¿Prefieres preguntarle a un ingeniero?"
        text="Escríbenos por WhatsApp y recibe una respuesta técnica, no un guion de ventas."
        whatsappMsg="Hola, tengo una consulta técnica."
      />
    </>
  )
}
