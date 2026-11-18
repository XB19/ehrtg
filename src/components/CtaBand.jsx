import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT } from '../data.js'

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <span className="eyebrow eyebrow--light">Rejoignez notre réseau</span>
          <h2>Faites le premier pas vers l’excellence !</h2>
          <p>
            Notre mission est de connecter les meilleurs talents avec les meilleures
            opportunités professionnelles. Découvrez des opportunités sur mesure.
          </p>
        </div>
        <div className="cta__actions">
          <Link to="/contact" className="btn btn--gold">Contactez-nous <ArrowRight size={16} /></Link>
          <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`} className="btn btn--outline-light">
            <Phone size={16} /> {CONTACT.phones[0]}
          </a>
        </div>
      </div>
    </section>
  )
}
