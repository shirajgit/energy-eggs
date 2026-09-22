import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function MiniCta({ title, text, cta, to = '/contact', center = false }: {
  title?: ReactNode
  text?: ReactNode
  cta: string
  to?: string
  center?: boolean
}) {
  return (
    <Reveal className={`mini-cta ${center ? 'center' : ''}`}>
      <div>
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
      </div>
      <Link to={to} className="btn">{cta}</Link>
    </Reveal>
  )
}
