import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Servicios', to: '/servicios/' },
  { label: 'Sectores', to: '/sectores/' },
  { label: 'Proyectos', to: '/proyectos/' },
  { label: 'Línea UPS', to: '/ups-bogota/' },
  { label: 'Blog', to: '/blog/' },
  { label: 'Nosotros', to: '/nosotros/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const burgerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return undefined
    menuRef.current?.querySelector('a')?.focus()
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`site-header${scrolled || pathname !== '/' ? ' is-solid' : ''}`}>
      <Link to="/" className="brand-link" aria-label="ADE System, Inicio">
        <img src="/adesystem-logo.png" width="170" height="50" alt="Adesystem Ingeniería S.A.S. - Lo hacemos posible" />
      </Link>
      <nav className="nav-desktop" aria-label="Navegación principal">
        {LINKS.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}
        <Link to="/#contacto" className="btn btn-primary btn-sm">Agenda diagnóstico →</Link>
      </nav>
      <button
        ref={burgerRef}
        type="button"
        className="nav-burger"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(value => !value)}
      >
        <span /><span /><span />
      </button>
      {open && (
        <nav ref={menuRef} id="mobile-navigation" className="nav-mobile" aria-label="Navegación móvil">
          {LINKS.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          <Link to="/#contacto" className="btn btn-primary">Agenda diagnóstico →</Link>
        </nav>
      )}
    </header>
  )
}
