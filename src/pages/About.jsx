import { Award, Lightbulb, HeartHandshake, Target } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { CONTACT } from '../data.js'

const VALUES = [
  { Icon: Award, title: 'Expertise', text: 'Une connaissance approfondie des métiers de l’hôtellerie et de la restauration.' },
  { Icon: Lightbulb, title: 'Innovation', text: 'Des solutions modernes adaptées aux nouveaux enjeux du secteur.' },
  { Icon: HeartHandshake, title: 'Engagement', text: 'Un accompagnement de proximité, du premier contact au suivi.' },
]

export default function About() {
  return (
    <>
      <PageHero title="À propos" subtitle="Hôtellerie et restauration : une carrière qui a du goût." />
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src="/images/equipe.jpg" alt="L'équipe EHR" />
          </div>
          <div>
            <span className="eyebrow">Qui sommes-nous ?</span>
            <h2 className="title">EHR – Emploi Hôtel Restaurant</h2>
            <p className="lead">
              EHR est une entreprise dédiée à fournir des solutions sur mesure pour le
              secteur de l’hôtellerie et de la restauration.
            </p>
            <p>
              Nous combinons expertise, innovation et engagement pour répondre à vos
              besoins en recrutement, consulting, formation, et équipement professionnel.
            </p>
            <div className="mission">
              <Target size={26} />
              <p>
                <strong>Notre mission :</strong> accompagner les professionnels et
                entreprises à atteindre l’excellence, en connectant les meilleurs talents
                avec les meilleures opportunités.
              </p>
            </div>
            <p className="muted">{CONTACT.agrement}</p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="title">Ce qui nous anime</h2>
          </div>
          <div className="grid grid--3">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="service-card service-card--static">
                <span className="service-card__icon"><Icon size={28} strokeWidth={1.6} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
