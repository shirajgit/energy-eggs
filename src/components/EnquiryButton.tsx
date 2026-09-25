import type { ReactNode } from 'react'
import { useEnquiry } from './EnquiryModal'

// A CTA button that opens the shared enquiry popup instead of navigating.
export default function EnquiryButton({ children, className = 'btn', source, interest, title }: {
  children: ReactNode
  className?: string
  source?: string
  interest?: string
  title?: string
}) {
  const { open } = useEnquiry()
  const label = typeof children === 'string' ? children : undefined
  return (
    <button
      type="button"
      className={className}
      onClick={() => open({ source: source || label, title: title || label, interest })}
    >
      {children}
    </button>
  )
}
