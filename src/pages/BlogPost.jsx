import { Link, useParams, Navigate } from 'react-router-dom'
import Seo, { breadcrumbSchema, articleSchema, faqSchema } from '../components/Seo'
import { Breadcrumbs, RelatedLinks, CtaBanner, FaqBlock } from '../components/PageBlocks'
import { getPost, getCategoria } from '../data/blogPosts'
import { getCaptura } from '../data/capturas'
import { mediaForCategory } from '../data/media'

const fmtFecha = iso =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/blog/" replace />

  const cat = getCategoria(post.categoria)
  const path = `/blog/${post.slug}/`
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: cat.nombre, path: `/blog/categoria/${cat.slug}/` },
    { name: post.title, path },
  ]

  const links = post.related.map(s => {
    const c = getCaptura(s)
    return c && { to: `/${c.slug}/`, label: c.nav, color: c.color }
  }).filter(Boolean)

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={path}
        type="article"
        schemas={[
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path,
            date: post.date,
            updated: post.updatedAt,
            category: cat.nombre,
          }),
          breadcrumbSchema(breadcrumbs),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />

      {/* Cabecera editorial */}
      <header style={{
        background: 'var(--navy)', padding: '160px 4vw 72px',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        position: 'relative', overflow: 'hidden',
      }}>
        <img className="page-hero-media" src={mediaForCategory(post.categoria).src} alt="" aria-hidden="true" width="1536" height="1024" />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `linear-gradient(90deg, rgba(0,8,57,.98) 0%, rgba(0,8,57,.88) 55%, rgba(0,8,57,.45) 100%), radial-gradient(ellipse 55% 45% at 80% 0%, ${cat.color}22 0%, transparent 60%)`,
        }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <Breadcrumbs items={breadcrumbs.slice(0, 3)} />
          <div style={{
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: '.68rem', letterSpacing: '.16em', textTransform: 'uppercase',
            color: cat.color, marginBottom: '1.2rem',
          }}>{cat.nombre} · {fmtFecha(post.date)}</div>
          <h1 style={{
            fontFamily: 'var(--font-head)', fontWeight: 900,
            fontSize: 'clamp(1.9rem, 4vw, 3rem)',
            lineHeight: 1.12, letterSpacing: '-.02em', color: '#fff',
          }}>{post.title}</h1>
        </div>
      </header>

      {/* Cuerpo del artículo */}
      <article style={{ background: 'var(--navy)', padding: '64px 4vw 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="article-answer" style={{ borderColor: cat.color }}>{post.answer}</p>

          {post.sections.map((sec, i) => (
            <section key={i}>
              {sec.h2 && (
                <h2 style={{
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: '1.45rem', letterSpacing: '-.01em',
                  color: '#fff', margin: '2.6rem 0 1.2rem',
                  paddingLeft: '1rem', borderLeft: `3px solid ${cat.color}`,
                }}>{sec.h2}</h2>
              )}
              {sec.ps.map((p, j) => (
                <p key={j} style={{
                  fontFamily: 'var(--font-body)', fontSize: '1.02rem',
                  color: 'rgba(255,255,255,.62)', lineHeight: 1.95,
                  marginBottom: '1.3rem',
                }}>{p}</p>
              ))}
              {sec.bullets?.length > 0 && (
                <ul className="article-list">
                  {sec.bullets.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}

          {post.utility && (
            <div className="article-utility" style={{ borderColor: `${cat.color}66` }}>
              <p>Compruebe este cálculo con datos reales.</p>
              <Link to={post.utility.to} style={{ color: cat.color }}>{post.utility.label} →</Link>
            </div>
          )}

          <div className="article-sources">
            <p>Publicado: {fmtFecha(post.date)} · Actualizado: {fmtFecha(post.updatedAt)}</p>
            <p>Revisión editorial: ADE System.</p>
          </div>

          <div style={{
            marginTop: '3rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,.08)',
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            <Link to={`/blog/categoria/${cat.slug}/`} style={{
              fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.78rem',
              letterSpacing: '.08em', textTransform: 'uppercase', color: cat.color,
            }}>← Más artículos de {cat.nombre}</Link>
            <Link to="/blog/" style={{
              fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.78rem',
              letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)',
            }}>Todos los artículos</Link>
          </div>
        </div>
      </article>

      {post.faqs?.length > 0 && <FaqBlock faqs={post.faqs} color={cat.color} />}
      <RelatedLinks title="Soluciones relacionadas" links={links} />
      <CtaBanner
        title="¿Este artículo te dejó preguntas sobre tu caso?"
        text="Escríbenos y recibe una respuesta técnica sobre tu situación específica, sin compromiso."
        whatsappMsg={`Hola, leí el artículo "${post.title}" y tengo una consulta.`}
        color={cat.color}
      />
    </>
  )
}
