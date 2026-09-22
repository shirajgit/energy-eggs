import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, children }: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
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
