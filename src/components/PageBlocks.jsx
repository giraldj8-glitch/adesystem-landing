import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { whatsapp } from '../data/site'
import { SERVICIOS_PAGES } from '../data/serviciosPages'

const reveal = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

/* ── Migas de pan visibles (el schema lo genera Seo.jsx) ── */
export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Migas de pan" style={{ marginBottom: '2rem' }}>
      <ol style={{
        display: 'flex', flexWrap: 'wrap', gap: '.5rem', listStyle: 'none',
        fontFamily: 'var(--font-head)', fontWeight: 600,
        fontSize: '.68rem', letterSpacing: '.1em', textTransform: 'uppercase',
      }}>
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              {last ? (
                <span style={{ color: 'rgba(255,255,255,.6)' }}>{item.name}</span>
              ) : (
                <>
                  <Link to={item.path} style={{ color: 'rgba(255,255,255,.7)', transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#32d894'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}>
                    {item.name}
                  </Link>
                  <span style={{ color: 'rgba(255,255,255,.2)' }}>/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* ── Hero interior de página, con fondo gráfico de la marca. ── */
export function PageHero({ eyebrow, h1, intro, color = '#32D894', breadcrumbs, media, action }) {
  return (
    <section className="page-hero" style={{
      background: 'var(--navy)', padding: '160px 4vw 96px',
      borderBottom: `1px solid ${color}30`,
      position: 'relative', overflow: 'hidden',
    }}>
      {media && <img className="page-hero-media" src={media.src} alt="" aria-hidden="true" width="1536" height="1024" />}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          linear-gradient(90deg, rgba(0,8,57,.98) 0%, rgba(0,8,57,.9) 48%, rgba(0,8,57,.5) 100%),
          radial-gradient(ellipse 60% 55% at 80% 0%, ${color}33 0%, transparent 62%),
          radial-gradient(ellipse 45% 50% at 5% 100%, ${color}14 0%, transparent 55%),
          linear-gradient(180deg, ${color}10 0%, transparent 55%)
        `,
      }} />
      <div className="page-hero-content" style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <motion.div {...reveal} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.8rem' }}>
          <div style={{ width: 32, height: 2, background: color, flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-head)', fontWeight: 600,
            fontSize: '.68rem', letterSpacing: '.2em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.68)',
          }}>{eyebrow}</span>
        </motion.div>
        <motion.h1 {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 900,
          fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)',
          lineHeight: 1.06, letterSpacing: '-.025em',
          color: '#fff', marginBottom: '2rem', maxWidth: 820,
        }}>{h1}</motion.h1>
        {intro?.map((p, i) => (
          <motion.p key={i} {...reveal} style={{
            fontFamily: 'var(--font-body)', fontSize: '1.02rem',
            color: 'rgba(255,255,255,.76)', lineHeight: 1.85,
            maxWidth: 760, marginBottom: '1.2rem',
          }}>{p}</motion.p>
        ))}
        {action && <a className="btn btn-primary page-hero-action" href={whatsapp(action)} target="_blank" rel="noopener noreferrer">Consultar mi proyecto →</a>}
      </div>
    </section>
  )
}

/* ── Grid de beneficios / necesidades ── */
export function BenefitsGrid({ items, color = '#32D894', title }) {
  return (
    <section style={{
      background: `linear-gradient(180deg, ${color}0f 0%, rgba(0,16,90,0) 30%), var(--navy-light)`,
      padding: '96px 4vw',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        {title && (
          <motion.h2 {...reveal} style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-.02em',
            color: '#fff', marginBottom: '3rem',
          }}>{title}</motion.h2>
        )}
        <div style={{
          display: 'grid', gap: '1.4rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {items.map((b, i) => (
            <motion.div key={b.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}
              style={{
                background: 'rgba(0,8,57,.55)', border: '1px solid rgba(255,255,255,.07)',
                borderTop: `3px solid ${color}`, borderRadius: 12, padding: '1.9rem 1.7rem',
              }}>
              <h3 style={{
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.02rem',
                color: '#fff', marginBottom: '.7rem', lineHeight: 1.3,
              }}>{b.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '.88rem',
                color: 'rgba(255,255,255,.72)', lineHeight: 1.75,
              }}>{b.text}</p>
              {b.link && (
                <Link to={b.link} style={{
                  display: 'inline-block', marginTop: '.9rem',
                  fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.72rem',
                  letterSpacing: '.08em', textTransform: 'uppercase', color,
                }}>Ver más →</Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Alcance técnico visible para responder intención de compra y preguntas AEO. */
export function TechnicalScope({ data, color = '#32D894' }) {
  if (!data) return null
  return (
    <section style={{ background: 'var(--navy)', padding: '88px 4vw' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '.68rem', letterSpacing: '.16em', textTransform: 'uppercase', color }}>
          Alcance del servicio
        </p>
        <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 850, fontSize: 'clamp(1.7rem, 3vw, 2.35rem)', color: '#fff', margin: '.8rem 0 1rem' }}>
          {data.title}
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.65)', lineHeight: 1.8, maxWidth: 800, marginBottom: '2.2rem' }}>
          {data.answer}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1px', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.1)' }}>
          {data.sections.map(section => (
            <article key={section.title} style={{ background: 'var(--navy)', padding: '1.6rem' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 750, fontSize: '.98rem', color: '#fff', marginBottom: '.65rem' }}>{section.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.88rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.7 }}>{section.text}</p>
            </article>
          ))}
        </div>
        {data.note && <p style={{ fontFamily: 'var(--font-body)', fontSize: '.86rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginTop: '1.5rem' }}>{data.note}</p>}
      </div>
    </section>
  )
}

/* ── Preguntas frecuentes (acordeón; el schema FAQPage lo inyecta Seo.jsx) ── */
export function FaqBlock({ faqs, color = '#32D894' }) {
  const [open, setOpen] = useState(0)
  return (
    <section style={{ background: 'var(--navy)', padding: '96px 4vw' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <motion.h2 {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-.02em',
          color: '#fff', marginBottom: '2.5rem',
        }}>Preguntas frecuentes</motion.h2>
        {faqs.map((f, i) => (
          <motion.div key={f.q} {...reveal} style={{
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              style={{
                width: '100%', background: 'none', border: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: '1rem', padding: '1.3rem 0', textAlign: 'left',
              }}>
              <h3 style={{
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '.98rem', color: open === i ? color : '#fff',
                lineHeight: 1.4, transition: 'color .25s',
              }}>{f.q}</h3>
              <span style={{
                color, fontSize: '1.2rem', flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'none',
                transition: 'transform .25s',
              }}>+</span>
            </button>
            <div style={{
              maxHeight: open === i ? 400 : 0, overflow: 'hidden',
              transition: 'max-height .4s var(--ease-out)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '.92rem',
                color: 'rgba(255,255,255,.72)', lineHeight: 1.8,
                paddingBottom: '1.4rem', maxWidth: 700,
              }}>{f.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── Enlaces internos relacionados, clave de la estrategia SEO ── */
export function RelatedLinks({ title = 'También te puede interesar', links }) {
  return (
    <section style={{ background: 'var(--navy-light)', padding: '72px 4vw' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <motion.p {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 700,
          fontSize: '.7rem', letterSpacing: '.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.65)', marginBottom: '1.6rem',
        }}>{title}</motion.p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.8rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              padding: '.75rem 1.2rem', borderRadius: 8,
              border: `1px solid ${l.color || '#345FEA'}44`,
              background: 'rgba(255,255,255,.02)',
              fontFamily: 'var(--font-head)', fontWeight: 600,
              fontSize: '.8rem', color: 'rgba(255,255,255,.75)',
              transition: 'background-color .25s, border-color .25s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = l.color || '#345FEA'
                e.currentTarget.style.background = `${l.color || '#345FEA'}14`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${l.color || '#345FEA'}44`
                e.currentTarget.style.background = 'rgba(255,255,255,.02)'
              }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: l.color || '#345FEA' }} />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA de cierre con WhatsApp ── */
export function CtaBanner({ title, text, whatsappMsg, color = '#32D894' }) {
  return (
    <section style={{
      background: 'var(--navy)', padding: '110px 4vw',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${color}12 0%, transparent 65%)`,
      }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <motion.h2 {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-.02em',
          color: '#fff', marginBottom: '1rem',
        }}>{title}</motion.h2>
        <motion.p {...reveal} style={{
          fontFamily: 'var(--font-body)', fontSize: '1.02rem',
          color: 'rgba(255,255,255,.72)', lineHeight: 1.75, marginBottom: '2.2rem',
        }}>{text}</motion.p>
        <motion.div {...reveal} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={whatsapp(whatsappMsg)} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            padding: '1rem 2rem', borderRadius: 4,
            background: color, color: 'var(--navy)',
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: '.82rem', letterSpacing: '.06em', textTransform: 'uppercase',
            transition: 'transform .22s, box-shadow .22s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = `0 8px 28px ${color}55`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}>
            Cotiza por WhatsApp →
          </a>
        </motion.div>
        <motion.p {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 300, fontSize: '.78rem',
          color: 'rgba(255,255,255,.65)', marginTop: '1.2rem',
        }}>Atención directa por WhatsApp · Cotización según alcance</motion.p>
      </div>
    </section>
  )
}

/* ── Soluciones destacadas: índice editorial gigante, todo clickeable ──
   Distinto a las tarjetas del resto de la página: filas con titular enorme,
   gancho a la derecha y flecha circular que se enciende al pasar el mouse. */
export function SolucionesDestacadas({ title = 'Soluciones para este sector', items }) {
  return (
    <section style={{ background: 'var(--navy-light)', padding: '88px 4vw 72px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <motion.div {...reveal} style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '.6rem', marginBottom: '2.2rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', letterSpacing: '-.02em',
            color: '#fff',
          }}>{title}</h2>
          <span style={{
            fontFamily: 'var(--font-head)', fontWeight: 600,
            fontSize: '.7rem', letterSpacing: '.16em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.65)',
          }}>Toca una para conocerla</span>
        </motion.div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
          {items.map((it, i) => (
            <motion.div key={it.to} {...reveal} transition={{ ...reveal.transition, delay: i * 0.07 }}>
              <Link
                to={it.to}
                className="sol-fila"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1.4fr 1fr 56px',
                  gap: '1.6rem', alignItems: 'center',
                  padding: '1.7rem 1rem',
                  borderBottom: '1px solid rgba(255,255,255,.12)',
                  transition: 'background .3s, padding-left .3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `linear-gradient(90deg, ${it.color}24, transparent 70%)`
                  e.currentTarget.style.paddingLeft = '1.8rem'
                  const arrow = e.currentTarget.querySelector('.sol-flecha')
                  if (arrow) {
                    arrow.style.background = it.color
                    arrow.style.color = '#000839'
                    arrow.style.transform = 'rotate(-45deg)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = ''
                  e.currentTarget.style.paddingLeft = '1rem'
                  const arrow = e.currentTarget.querySelector('.sol-flecha')
                  if (arrow) {
                    arrow.style.background = 'transparent'
                    arrow.style.color = it.color
                    arrow.style.transform = ''
                  }
                }}
              >
                {/* Número de la solución */}
                <span style={{
                  fontFamily: 'var(--font-head)', fontWeight: 900,
                  fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1,
                  color: it.color, opacity: .85,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Titular gigante */}
                <h3 style={{
                  fontFamily: 'var(--font-head)', fontWeight: 900,
                  fontSize: 'clamp(1.45rem, 2.8vw, 2.1rem)',
                  letterSpacing: '-.02em', lineHeight: 1.05,
                  color: '#fff',
                }}>{it.label}</h3>

                {/* Gancho */}
                {it.desc && (
                  <p className="sol-gancho" style={{
                    fontFamily: 'var(--font-body)', fontSize: '.9rem',
                    color: 'rgba(255,255,255,.72)', lineHeight: 1.55,
                  }}>{it.desc}</p>
                )}

                {/* Flecha circular */}
                <span className="sol-flecha" style={{
                  width: 52, height: 52, borderRadius: '50%',
                  border: `1.5px solid ${it.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: it.color, fontSize: '1.3rem',
                  transition: 'transform .3s var(--ease-out), background-color .3s var(--ease-out), color .3s var(--ease-out)',
                  justifySelf: 'end', flexShrink: 0,
                }}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .sol-fila { grid-template-columns: 44px 1fr 44px !important; }
          .sol-gancho { display: none !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Marquesina con todas las soluciones de los 4 pilares, en movimiento ── */
function MarqueeFila({ items, reverse = false, duration = 42 }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
        style={{ display: 'flex', gap: '.8rem', width: 'max-content', padding: '.4rem 0' }}
      >
        {[...items, ...items].map((it, i) => {
          const chip = (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '.55rem',
              padding: '.65rem 1.2rem', borderRadius: 100,
              border: `1px solid ${it.color}45`,
              background: `${it.color}0d`,
              fontFamily: 'var(--font-head)', fontWeight: 600,
              fontSize: '.82rem', color: 'rgba(255,255,255,.8)',
              whiteSpace: 'nowrap',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: it.color, boxShadow: `0 0 6px ${it.color}99`,
              }}/>
              {it.title}
            </span>
          )
          return it.link
            ? <Link key={`${it.title}-${i}`} to={it.link}>{chip}</Link>
            : <span key={`${it.title}-${i}`}>{chip}</span>
        })}
      </motion.div>
    </div>
  )
}

export function SolucionesMarquee({ title = 'Todo lo que hacemos' }) {
  const all = SERVICIOS_PAGES.flatMap(s =>
    s.items.map(it => ({ title: it.title, color: s.color, link: it.link }))
  )
  const mitad = Math.ceil(all.length / 2)
  const fila1 = all.slice(0, mitad)
  const fila2 = all.slice(mitad)

  return (
    <section style={{ background: 'var(--navy-light)', padding: '0 0 80px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 4vw 1.6rem' }}>
        <motion.p {...reveal} style={{
          fontFamily: 'var(--font-head)', fontWeight: 700,
          fontSize: '.7rem', letterSpacing: '.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.65)',
        }}>{title}</motion.p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', position: 'relative' }}>
        {/* Máscaras de degradado en los bordes */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
          background: 'linear-gradient(90deg, var(--navy-light), transparent)', pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
          background: 'linear-gradient(270deg, var(--navy-light), transparent)', pointerEvents: 'none',
        }}/>
        <MarqueeFila items={fila1} duration={46} />
        <MarqueeFila items={fila2} reverse duration={52} />
      </div>
    </section>
  )
}
