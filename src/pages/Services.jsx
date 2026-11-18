import { SERVICES } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Services() {
  return (
    <>
      <PageHero
        title="Nos services"
        subtitle="Recrutement, consulting, formation et bien plus, au service de votre excellence."
      />
      <section className="section section--tint">
        <div className="container grid grid--3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
