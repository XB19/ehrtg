import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function FloatingButtons() {
  const [progress, setProgress] = useState(0)
  const visible = progress > 0.08

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const C = 2 * Math.PI * 25

  return (
    <div className="floating">
      <button
        className={`to-top ${visible ? 'to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter en haut de la page"
        tabIndex={visible ? 0 : -1}
      >
        <svg className="to-top__ring" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r="25" />
          <circle cx="28" cy="28" r="25" className="to-top__progress"
            style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }} />
        </svg>
        <ArrowUp size={20} />
      </button>

      <WhatsAppButton />
    </div>
  )
}
