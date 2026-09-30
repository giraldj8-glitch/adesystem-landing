import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Seo from '../components/Seo'
import Hero from '../components/Hero'
import LineaUPS from '../components/LineaUPS'
import SectoresHome from '../components/SectoresHome'
import Clientes from '../components/Clientes'
import Servicios from '../components/Servicios'
import CadenaValor from '../components/CadenaValor'
import Nosotros from '../components/Nosotros'
import CtaFinal from '../components/CtaFinal'
import CasosHome from '../components/CasosHome'
import PortfolioMap from '../components/PortfolioMap'
import CommercialPriorities from '../components/CommercialPriorities'
import { scrollToTarget } from '../lib/scroll'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToTarget(hash), 0)
      return () => clearTimeout(t)
    }
  }, [hash])

  return (
    <>
      <Seo
        title="Infraestructura crítica para empresas | ADE System"
        description="Infraestructura crítica para empresas en Bogotá y Colombia: energía, UPS, conectividad, seguridad y adecuación de espacios con un solo responsable técnico."
        path="/"
      />
      <Hero />
      <Clientes />
      <PortfolioMap compact />
      <LineaUPS />
      <CommercialPriorities />
      <Servicios />
      <SectoresHome />
      <CasosHome />
      <CadenaValor />
      <Nosotros />
      <CtaFinal />
    </>
  )
}
