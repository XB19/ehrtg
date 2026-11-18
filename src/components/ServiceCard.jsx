import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  const { slug, title, short, Icon } = service
  return (
    <Link to={`/${slug}`} className="service-card">
      <span className="service-card__icon"><Icon size={28} strokeWidth={1.6} /></span>
      <h3>{title}</h3>
      <p>{short}</p>
      <span className="service-card__more">En savoir plus <ArrowRight size={16} /></span>
    </Link>
  )
}
