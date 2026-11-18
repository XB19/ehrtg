import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { SERVICES, CONTACT } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}><Phone size={14} /> {CONTACT.phones[0]}</a>
            <a href={`mailto:${CONTACT.email}`}><Mail size={14} /> {CONTACT.email}</a>
          </div>
          <span className="topbar__addr"><MapPin size={14} /> {CONTACT.addressShort}</span>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label="Accueil EHR">
            <img src="/images/logo.png" alt="Emploi Hôtel Restaurant" />
          </Link>

          <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navigation principale">
            <NavLink to="/" end>Accueil</NavLink>
            <div className="nav__dropdown">
              <NavLink to="/services">Services <ChevronDown size={14} /></NavLink>
              <div className="nav__submenu">
                {SERVICES.map(({ slug, title, Icon }) => (
                  <NavLink key={slug} to={`/${slug}`}><Icon size={16} /> {title}</NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/a-propos">À propos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="btn btn--gold nav__cta-mobile">
              Nous contacter <ArrowRight size={16} />
            </Link>
          </nav>

          <Link to="/contact" className="btn btn--gold header__cta">
            Nous contacter <ArrowRight size={16} />
          </Link>

          <button
            className="header__burger"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  )
}
