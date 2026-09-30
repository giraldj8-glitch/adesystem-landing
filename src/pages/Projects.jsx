import Seo, { breadcrumbSchema } from '../components/Seo'
import { PageHero, CtaBanner } from '../components/PageBlocks'
import PortfolioMap from '../components/PortfolioMap'
import CasosHome from '../components/CasosHome'

const breadcrumbs = [{ name: 'Inicio', path: '/' }, { name: 'Proyectos y casos', path: '/proyectos/' }]

export default function Projects() {
  return (
    <>
      <Seo title="Proyectos y casos de clientes empresariales | ADE System" description="Conoce los casos de Pharmetique Labs, Amadeus, Davivienda y Vitalis: proyectos de energía, redes e infraestructura publicados por ADE System." path="/proyectos/" schemas={[breadcrumbSchema(breadcrumbs)]} />
      <PageHero eyebrow="Proyectos y casos" h1="Infraestructura al servicio de empresas reales." color="#1BC5FF" breadcrumbs={breadcrumbs} intro={[
        'Conozca los alcances de energía y conectividad que nuestros clientes han confiado a ADE System. Estas historias y sus fotografías forman parte de nuestro portafolio público.',
      ]} />
      <CasosHome projectPage />
      <PortfolioMap />
      <CtaBanner title="¿Qué necesita resolver su empresa?" text="Cuéntenos qué equipos, espacios o conexiones necesita mejorar. Revisamos el alcance y el siguiente paso para su proyecto." whatsappMsg="Hola, vi sus casos de clientes y quiero revisar un proyecto de infraestructura." color="#1BC5FF" />
    </>
  )
}
