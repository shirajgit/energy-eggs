import { useEffect, useState, type ReactNode } from 'react'
import { useEnquiry } from './EnquiryModal'

const EVT = 'ee-content-unlocked'

// Blurs its children behind a lead-capture overlay until the visitor submits details.
// Instances sharing a storageKey unlock together (one form unlocks all).
export default function LockGate({
  children,
  storageKey = 'ee-content-unlocked',
  source = 'Content Unlock',
  interest = 'Details',
  heading = 'View the full details',
  text = 'Enter a few details to unlock this content.',
}: {
  children: ReactNode
  storageKey?: string
  source?: string
  interest?: string
  heading?: string
  text?: string
}) {
  const { open } = useEnquiry()
  const [unlocked, setUnlocked] = useState(
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem(storageKey) === '1',
  )

  useEffect(() => {
    const onEvt = (e: Event) => {
      if ((e as CustomEvent).detail === storageKey) setUnlocked(true)
    }
    window.addEventListener(EVT, onEvt)
    return () => window.removeEventListener(EVT, onEvt)
  }, [storageKey])

  if (unlocked) return <>{children}</>

  const request = () => open({
    source,
    interest,
    title: 'Unlock the full details',
    subtitle: 'Enter your details to view the complete information.',
    submitLabel: 'View Details',
    sentText: 'Unlocked — you can now view the full details.',
    onSubmitted: () => {
      try { sessionStorage.setItem(storageKey, '1') } catch { /* ignore */ }
      setUnlocked(true)
      window.dispatchEvent(new CustomEvent(EVT, { detail: storageKey }))
    },
  })

  return (
    <div className="rate-lock">
      <div className="rate-lock-content" aria-hidden="true">{children}</div>
      <div className="rate-lock-veil">
        <div className="rate-lock-card">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
          </svg>
          <h4>{heading}</h4>
          <p>{text}</p>
          <button type="button" className="btn" onClick={request}>View Details</button>
        </div>
      </div>
    </div>
  )
}
