import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero title="Page introuvable" subtitle="La page demandée n'existe pas ou a été déplacée." />
      <section className="section center">
        <Link to="/" className="btn btn--gold">Retour à l'accueil</Link>
      </section>
    </>
  )
}
