import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const AREAS = [
  ['Arquitectura eléctrica', '#32D894'],
  ['Arquitectura de red', '#611AD8'],
  ['Confort y seguridad', '#345FEA'],
  ['Arquitectura e interiorismo', '#1BC5FF'],
]

const WORDS = [
  ['detenerse.', '#32D894'],
  ['desconectarse.', '#1BC5FF'],
  ['parar.', '#b59aff'],
]

function RotatingWord({ paused }) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || paused) return undefined
    const timer = window.setInterval(() => setIndex(current => (current + 1) % WORDS.length), 2800)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  const [word, color] = WORDS[index]
  return (
    <span className="hero-rotating-word" style={{ color }} aria-hidden="true">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={word}
          initial={reduceMotion ? false : { y: '70%', opacity: 0, filter: 'blur(3px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
          exit={reduceMotion ? undefined : { y: '-70%', opacity: 0, filter: 'blur(3px)' }}
          transition={{ duration: .38, ease: [0.23, 1, 0.32, 1] }}
        >{word}</motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const [paused, setPaused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <section
      id="inicio"
      className="home-hero"
    >
      <div className="home-hero-grid">
        <div className="home-hero-copy">
          <p className="hero-context">Infraestructura crítica · Bogotá · Cobertura nacional</p>
          <h1>
            <span className="sr-only">Su operación no puede detenerse. Nosotros tampoco.</span>
            <span aria-hidden="true">Su operación no puede</span>
            <RotatingWord paused={paused || hidden} />
            <span aria-hidden="true">Nosotros tampoco.</span>
          </h1>
          {!reduceMotion && <button type="button" className="motion-control" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Reanudar animación' : 'Pausar animación'}</button>}
          <p className="hero-summary">Diseñamos, instalamos y sostenemos energía, conectividad, seguridad y espacios para empresas que necesitan continuidad operativa.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
            <Link className="btn btn-ghost" to="/utilidades/calculadora-ups-kva/">Calcular UPS y kVA</Link>
          </div>
          <dl className="hero-facts" aria-label="Datos de ADE System">
            <div><dt>25+ años</dt><dd>de experiencia</dd></div>
            <div><dt>4 áreas</dt><dd>técnicas integradas</dd></div>
            <div><dt>Bogotá</dt><dd>con cobertura nacional</dd></div>
          </dl>
        </div>
        <aside className="hero-areas" aria-label="Áreas de servicio">
          <p>Áreas de servicio</p>
          {AREAS.map(([label, color]) => (
            <div key={label} style={{ borderLeftColor: color }}><span style={{ background: color }} />{label}</div>
          ))}
        </aside>
      </div>
    </section>
  )
}
