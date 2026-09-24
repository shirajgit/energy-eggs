import { useEffect, useState, type ReactNode } from 'react'
import Reveal from './Reveal'

export type HeroSlide = { src: string; pos?: string }

export default function PageHero({ eyebrow, title, children, bg, bgPosition, slides, interval = 4500 }: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  bg?: string
  bgPosition?: string
  slides?: HeroSlide[]
  interval?: number
}) {
  const [active, setActive] = useState(0)
  const hasSlides = !!slides && slides.length > 1
  const hasPhoto = hasSlides || !!bg

  useEffect(() => {
    if (!hasSlides) return
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const t = setInterval(() => setActive((i) => (i + 1) % slides!.length), interval)
    return () => clearInterval(t)
  }, [hasSlides, slides, interval])

  return (
    <section className={`page-hero${hasPhoto ? ' has-bg' : ''}`}>
      {hasSlides ? (
        <>
          <div className="page-hero-slides" aria-hidden="true">
            {slides!.map((s, i) => (
              <div
                key={s.src}
                className={`page-hero-slide${i === active ? ' on' : ''}`}
                style={{ backgroundImage: `url(${s.src})`, ...(s.pos ? { backgroundPosition: s.pos } : {}) }}
              />
            ))}
          </div>
          <div className="page-hero-veil" aria-hidden="true" />
        </>
      ) : bg ? (
        <>
          <div
            className="page-hero-bg"
            style={{ backgroundImage: `url(${bg})`, ...(bgPosition ? { backgroundPosition: bgPosition } : {}) }}
            aria-hidden="true"
          />
          <div className="page-hero-veil" aria-hidden="true" />
        </>
      ) : null}
      <div className="wrap">
        <Reveal className="in page-hero-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
