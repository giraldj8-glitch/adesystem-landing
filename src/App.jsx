import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { scrollToTarget } from './lib/scroll'
import { track } from './lib/siteEvents'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ConsentBanner from './components/ConsentBanner'

import Home from './pages/Home'
import Captura from './pages/Captura'
import Servicio from './pages/Servicio'
import Sector from './pages/Sector'
import { ServiciosIndex, SectoresIndex } from './pages/Indices'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import Utilities from './pages/Utilities'
import UpsCalculator from './pages/UpsCalculator'
import ChecklistUps from './pages/ChecklistUps'
import Projects from './pages/Projects'
import PoeCalculator from './pages/PoeCalculator'
import CableCalculator from './pages/CableCalculator'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'

import { CAPTURAS } from './data/capturas'
import { SERVICIOS_PAGES } from './data/serviciosPages'
import { SECTORES } from './data/sectores'

/* Al cambiar de ruta: subir al inicio (salvo navegación por hash dentro de Home) */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) scrollToTarget(0, { immediate: true })
  }, [pathname, hash])
  return null
}

function InteractionTracking() {
  useEffect(() => {
    const onClick = event => {
      const link = event.target.closest('a')
      if (!link) return
      if (link.href.startsWith('https://wa.me/')) track('whatsapp_click', { source_path: window.location.pathname })
      if (link.href.startsWith('mailto:')) track('email_click', { source_path: window.location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <InteractionTracking />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Nivel 1, páginas de captura por intent */}
          {CAPTURAS.map(c => (
            <Route key={c.slug} path={`/${c.slug}`} element={<Captura data={c} />} />
          ))}

          {/* Nivel 2, servicios por pilar */}
          <Route path="/servicios" element={<ServiciosIndex />} />
          {SERVICIOS_PAGES.map(s => (
            <Route key={s.slug} path={`/servicios/${s.slug}`} element={<Servicio data={s} />} />
          ))}

          {/* Nivel 3, sectores */}
          <Route path="/sectores" element={<SectoresIndex />} />
          {SECTORES.map(s => (
            <Route key={s.slug} path={`/sectores/${s.slug}`} element={<Sector data={s} />} />
          ))}

          {/* Nivel 4, blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/categoria/:categoria" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/utilidades/" element={<Utilities />} />
          <Route path="/utilidades/calculadora-ups-kva/" element={<UpsCalculator />} />
          <Route path="/utilidades/calculadora-poe/" element={<PoeCalculator />} />
          <Route path="/utilidades/calculadora-seccion-cable/" element={<CableCalculator />} />
          <Route path="/utilidades/checklist-continuidad-ups/" element={<ChecklistUps />} />
          <Route path="/proyectos/" element={<Projects />} />
          <Route path="/nosotros/" element={<About />} />
          <Route path="/politica-tratamiento-datos/" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ConsentBanner />
      </div>
    </>
  )
}
