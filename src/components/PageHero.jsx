import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.label}><ChevronRight size={14} />{c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>
          ))}
          <span><ChevronRight size={14} />{title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
