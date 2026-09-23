import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { submitEnquiry } from '../lib/enquiryApi'

export type QuoteKind = 'birds' | 'eggs' | 'equipment'

const OPTIONS: Record<QuoteKind, string[]> = {
  birds: ['Sonali Birds', 'Aseel Birds', 'Kadaknath Birds', 'Fiyoumi Birds', 'Quail'],
  eggs: ['Sonali Eggs', 'Kadaknath Eggs', 'Aseel Eggs'],
  equipment: ['Feeders', 'Drinkers & Watering', 'Brooding Systems', 'Handling & Transport', 'Tools & Accessories', 'Husk & Litter', 'Complete Farm Setup'],
}

const COPY: Record<QuoteKind, [eyebrow: string, title: string]> = {
  birds: ['Live Bird Order', 'Get the Birds'],
  eggs: ['Egg Supply Order', 'Get the Eggs'],
  equipment: ['Equipment Order', 'Get the Equipment'],
}

const QTY_PLACEHOLDER: Record<QuoteKind, string> = {
  birds: 'e.g. 100 birds, weekly',
  eggs: 'e.g. 10,000 eggs / month',
  equipment: 'e.g. setup for a 5,000-bird shed',
}

function QuoteForm({ kind, initialInterest, options, onClose }: { kind: QuoteKind; initialInterest?: string; options?: string[]; onClose: () => void }) {
  const optionList = options && options.length ? options : OPTIONS[kind]
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState(
    initialInterest && optionList.includes(initialInterest) ? initialInterest : optionList[0],
  )
  const [quantity, setQuantity] = useState('')

  const handleSubmit = () => {
    submitEnquiry({
      source: COPY[kind][0],
      name,
      phone,
      email,
      details: { 'Interested in': interest, Quantity: quantity },
    })
    const body = [
      `Name: ${name || '—'}`,
      `Phone: ${phone || '—'}`,
      `Business email: ${email || '—'}`,
      `Interested in: ${interest}`,
      `Quantity: ${quantity || '—'}`,
    ].join('\n')
    const subject = kind === 'equipment' ? `Equipment Enquiry — ${interest}` : `Rate Card Enquiry — ${interest}`
    window.location.href = `mailto:hello@energyeggs.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="field-grid modal-form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
      <label>
        Your Name
        <input type="text" value={name} placeholder="Full name" required onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Phone
        <input type="tel" value={phone} placeholder="+91 …" required onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Business Email
        <input type="email" value={email} placeholder="you@business.com" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Interested In
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          {optionList.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="full">
        Quantity
        <input
          type="text"
          value={quantity}
          placeholder={QTY_PLACEHOLDER[kind]}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <div className="full modal-actions">
        <button type="submit" className="btn">Send Enquiry</button>
        <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
      </div>
    </form>
  )
}

export default function GetQuoteModal({ kind, interest, options, onClose }: { kind: QuoteKind | null; interest?: string; options?: string[]; onClose: () => void }) {
  useEffect(() => {
    if (!kind) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [kind, onClose])

  return (
    <AnimatePresence>
      {kind && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            key={kind}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${COPY[kind][1]} enquiry`}
            initial={{ opacity: 0, y: 34, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
            <span className="eyebrow">{COPY[kind][0]}</span>
            <h3>{COPY[kind][1]}</h3>
            <p className="modal-sub">
              Share your details — our B2B team will get back with availability and a structured quote.
            </p>
            <QuoteForm kind={kind} initialInterest={interest} options={options} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
