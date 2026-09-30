import { motion } from 'framer-motion'
import { SITE, whatsapp } from '../data/site'

/* Animated grid background */
function GridBg() {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: .06 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#32d894" strokeWidth=".8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>

      {/* Gradient blobs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,95,234,.15), transparent 65%)',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-20%', right: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(50,216,148,.12), transparent 65%)',
      }}/>
    </div>
  )
}

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      style={{
        padding: '8rem 4vw',
        background: 'var(--navy-mid, #050d4a)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GridBg />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            padding: '.35rem 1.1rem',
            borderRadius: '100px',
            background: 'rgba(50,216,148,.1)',
            border: '1px solid rgba(50,216,148,.3)',
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: '.72rem', letterSpacing: '.12em',
            textTransform: 'uppercase', color: '#32d894',
          }}>
            <motion.span
              animate={{ opacity: [1,.3,1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#32d894' }}
            />
            Diagnóstico según alcance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1, duration: .7, ease: [.22,1,.36,1] }}
          style={{
            fontFamily: 'var(--font-head)', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
            lineHeight: .95, letterSpacing: '-.03em',
            textAlign: 'center', color: 'var(--text)',
            marginBottom: '1.5rem',
          }}
        >
          ¿Tu infraestructura está lista{' '}
          <span style={{
            background: 'linear-gradient(135deg, #32d894, #1bc5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            para lo que viene?
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2, duration: .65 }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem',
            color: 'var(--text-muted)', lineHeight: 1.75,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem',
          }}
        >
          Una conversación inicial permite entender el alcance, identificar la información
          que falta y definir si se requiere visita, medición o cotización técnica.{' '}
          <strong style={{ color: 'var(--text)' }}>Sin promesas antes de medir.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .6 }}
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <a
            href={whatsapp('Hola, quiero solicitar un diagnóstico de infraestructura.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-cursor="WhatsApp"
            style={{ textDecoration: 'none' }}
          >
            <span>💬 Agenda por WhatsApp →</span>
          </a>
          <a
            href={`mailto:${SITE.email}?subject=Solicitud de diagnóstico de infraestructura`}
            className="btn btn-ghost"
            data-cursor="Email"
            style={{ textDecoration: 'none' }}
          >
            ✉️ Escríbenos al email
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4, duration: .7 }}
        >
          <div style={{
            width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(50,216,148,.2), transparent)',
            marginBottom: '2.5rem',
          }}/>
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '3rem', flexWrap: 'wrap',
          }}>
            {[
              { color: '#32D894', label: 'Arquitectura Eléctrica' },
              { color: '#611AD8', label: 'Arquitectura de Red' },
              { color: '#345FEA', label: 'Confort y Seguridad' },
              { color: '#1BC5FF', label: 'Interiorismo' },
            ].map(({ color, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '.55rem',
                fontFamily: 'var(--font-head)', fontSize: '.72rem',
                fontWeight: 600, letterSpacing: '.08em',
                textTransform: 'uppercase', color: 'var(--text-dim)',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: color, boxShadow: `0 0 6px ${color}88`,
                }}/>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
