import { Link, NavLink, useParams } from 'react-router-dom'
import { ArrowRight, Check, Phone, Mail } from 'lucide-react'
import { SERVICES, CONTACT } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import NotFound from './NotFound.jsx'

export default function ServicePage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return <NotFound />
  const { Icon } = service

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
        crumbs={[{ label: 'Services', to: '/services' }]}
      />
      <section className="section">
        <div className="container service">
          <article>
            <span className="service__icon"><Icon size={34} strokeWidth={1.6} /></span>
            <h2 className="title">{service.title}</h2>
            <p className="lead">{service.intro}</p>
            <h3 className="service__subtitle">Ce que nous proposons</h3>
            <ul className="checklist checklist--boxed">
              {service.points.map((p) => <li key={p}><Check size={18} /> {p}</li>)}
            </ul>
            <Link to="/contact" className="btn btn--gold">Demander un devis <ArrowRight size={16} /></Link>
          </article>

          <aside className="service__aside">
            <div className="aside-box">
              <h4>Tous nos services</h4>
              {SERVICES.map(({ slug: s, title, Icon: I }) => (
                <NavLink key={s} to={`/${s}`}><I size={18} /> {title}</NavLink>
              ))}
            </div>
            <div className="aside-box aside-box--dark">
              <h4>Besoin d’aide ?</h4>
              <p>Notre équipe est à votre écoute.</p>
              <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}><Phone size={16} /> {CONTACT.phones[0]}</a>
              <a href={`mailto:${CONTACT.email}`}><Mail size={16} /> {CONTACT.email}</a>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
