import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { RelatedLinks } from '../components/PageBlocks'
import { CAPTURAS } from '../data/capturas'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada, ADE System"
        description="La página que buscas no existe. Explora nuestros servicios de infraestructura crítica."
        path="/404/"
        noindex
      />
      <section style={{
        background: 'var(--navy)', padding: '200px 4vw 96px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(4rem, 10vw, 7rem)',
          background: 'linear-gradient(135deg, #32D894, #1BC5FF)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          lineHeight: 1,
        }}>404</div>
        <h1 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.6rem',
          color: '#fff', margin: '1.2rem 0 .8rem',
        }}>Esta página no existe, pero tu operación sigue siendo crítica.</h1>
        <p style={{
          fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.72)',
          marginBottom: '2rem',
        }}>Vuelve al inicio o explora lo que sí construimos bien:</p>
        <Link to="/" className="btn btn-primary"><span>Volver al inicio →</span></Link>
      </section>
      <RelatedLinks title="Quizás buscabas" links={CAPTURAS.slice(0, 6).map(c => ({
        to: `/${c.slug}/`, label: c.nav, color: c.color,
      }))} />
    </>
  )
}
