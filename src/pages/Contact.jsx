import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { CONTACT } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Pas de backend : le formulaire ouvre le client mail avec le message pré-rempli.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.sujet || `Demande de ${form.nom}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.nom}\n${form.email}${form.tel ? `\n${form.tel}` : ''}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Vous avez des questions ou souhaitez en savoir plus sur nos services ? L’équipe d’EHR est à votre disposition."
      />
      <section className="section section--tint">
        <div className="container contact">
          <div className="contact__cards">
            <div className="info-card">
              <span className="info-card__icon"><Phone size={22} /></span>
              <div>
                <h4>Téléphone</h4>
                {CONTACT.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon"><Mail size={22} /></span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon"><MapPin size={22} /></span>
              <div>
                <h4>Adresse</h4>
                <p>{CONTACT.address}</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon"><Clock size={22} /></span>
              <div>
                <h4>Réponse rapide</h4>
                <p>Contactez-nous via le formulaire ou directement par téléphone.</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <h2 className="title">Envoyez-nous un message</h2>
            <div className="form-row">
              <label>Nom complet *<input name="nom" required value={form.nom} onChange={update} /></label>
              <label>Adresse électronique *<input name="email" type="email" required value={form.email} onChange={update} /></label>
            </div>
            <div className="form-row">
              <label>Téléphone<input name="tel" type="tel" value={form.tel} onChange={update} /></label>
              <label>Sujet<input name="sujet" value={form.sujet} onChange={update} /></label>
            </div>
            <label>Message *<textarea name="message" rows="6" required value={form.message} onChange={update} /></label>
            <button className="btn btn--gold" type="submit">Envoyer <Send size={16} /></button>
          </form>
        </div>
      </section>
      <iframe
        className="map"
        title="Carte Hedzranawoé, Lomé"
        loading="lazy"
        src="https://www.google.com/maps?q=Hedzranawo%C3%A9%2C%20Lom%C3%A9%2C%20Togo&output=embed"
      />
    </>
  )
}
