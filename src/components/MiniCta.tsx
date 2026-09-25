import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { useEnquiry } from './EnquiryModal'
import CallButton from './CallButton'

export default function MiniCta({ title, text, cta, source, interest, center = false }: {
  title?: ReactNode
  text?: ReactNode
  cta: string
  source?: string
  interest?: string
  center?: boolean
}) {
  const { open } = useEnquiry()
  return (
    <Reveal className={`mini-cta ${center ? 'center' : ''}`}>
      <div>
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
      </div>
      <div className="cta-actions">
        <button
          type="button"
          className="btn"
          onClick={() => open({ source: source || cta, title: cta, interest })}
        >
          {cta}
        </button>
        <CallButton />
      </div>
    </Reveal>
  )
}
