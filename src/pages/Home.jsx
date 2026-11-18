import { Link } from 'react-router-dom'
import { ArrowRight, Check, Search, ClipboardCheck, Handshake, MessageSquare } from 'lucide-react'
import { SERVICES, PARTNERS } from '../data.js'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaBand from '../components/CtaBand.jsx'

const STEPS = [
  { Icon: MessageSquare, title: 'Écoute', text: 'Nous analysons vos besoins et votre culture d’entreprise.' },
  { Icon: Search, title: 'Sélection', text: 'Nous identifions et évaluons les profils les plus adaptés.' },
  { Icon: ClipboardCheck, title: 'Validation', text: 'Vous rencontrez une sélection courte de candidats qualifiés.' },
  { Icon: Handshake, title: 'Suivi', text: 'Nous accompagnons l’intégration et restons à vos côtés.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow eyebrow--light">Emploi Hôtel Restaurant · Lomé, Togo</span>
          <h1>Votre expert en <em>hôtellerie</em> et <em>restauration</em></h1>
          <p>Recrutement, consulting, formation et bien plus, au service de votre excellence.</p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--gold">Nos services <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn--outline-light">Nous contacter</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src="/images/equipe.jpg" alt="L'équipe EHR" />
            <div className="split__badge">
              <strong>5</strong>
              <span>domaines<br />d’expertise</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Qui sommes-nous ?</span>
            <h2 className="title">Une carrière qui a du goût</h2>
            <p className="lead">
              EHR (Emploi Hôtel Restaurant) est une entreprise dédiée à fournir des
              solutions sur mesure pour le secteur de l’hôtellerie et de la restauration.
            </p>
            <p>
              Nous combinons expertise, innovation et engagement pour répondre à vos
              besoins en recrutement, consulting, formation et équipement professionnel.
            </p>
            <ul className="checklist">
              <li><Check size={18} /> Entreprise agréée par le Ministère</li>
              <li><Check size={18} /> Spécialistes des métiers de l’hôtellerie</li>
              <li><Check size={18} /> Accompagnement personnalisé</li>
            </ul>
            <Link to="/a-propos" className="btn btn--dark">En savoir plus <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nos services</span>
            <h2 className="title">Des solutions complètes pour votre établissement</h2>
          </div>
          <div className="grid grid--3">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
            <Link to="/contact" className="service-card service-card--accent">
              <h3>Un besoin spécifique ?</h3>
              <p>Parlons de votre projet. Nous vous répondons rapidement.</p>
              <span className="service-card__more">Nous contacter <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Notre méthode</span>
            <h2 className="title">Un accompagnement en 4 étapes</h2>
          </div>
          <div className="steps">
            {STEPS.map(({ Icon, title, text }, i) => (
              <div key={title} className="step">
                <span className="step__num">0{i + 1}</span>
                <Icon size={30} strokeWidth={1.6} className="step__icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint partners">
        <div className="container section-head">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="title">Nos partenaires</h2>
        </div>
        <div className="marquee">
          <div className="marquee__track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div className="marquee__item" key={i} aria-hidden={i >= PARTNERS.length}>
                <img src={p.src} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
