import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, BadgeCheck } from 'lucide-react'
import { CONTACT, SERVICES } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/logo.png" alt="EHR – Emploi Hôtel Restaurant" />
          <p>
            Entreprise spécialisée dans le recrutement, la formation et le conseil
            juridique pour les métiers de l’hôtellerie et de la restauration.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Nos services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={`/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><Phone size={16} /><span>{CONTACT.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}</span></li>
            <li><Mail size={16} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><MapPin size={16} /><span>{CONTACT.address}</span></li>
            <li><BadgeCheck size={16} /><span>{CONTACT.agrement}</span></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} EHR – Emploi Hôtel Restaurant. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
