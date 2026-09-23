import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import EnquiryForm from '../components/EnquiryForm'
import { Link } from 'react-router-dom'

const CHANNELS = [
  {
    href: 'tel:+9178 78 78 7226',
    label: 'Call us',
    value: '+91 78 78 78 7226',
    badge: 'Fastest Response',
    icon: <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  },
  {
    href: 'https://wa.me/917878787226',
    label: 'WhatsApp',
    value: '+91 78 78 78 7226',
    icon: (
      <>
        <path d="M12 3a9 9 0 0 0-7.6 13.8L3 21l4.4-1.3A9 9 0 1 0 12 3z" />
        <path d="M9 8.5c0 4 2.5 6.5 6.5 6.5l.5-2-2-1-1 1c-1.2-.6-2-1.4-2.5-2.5l1-1-1-2z" />
      </>
    ),
  },
  {
    href: 'mailto:hello@energyeggs.in',
    label: 'Email',
    value: 'hello@energyeggs.in',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
]

const ENQUIRY_TIPS = [
  'Product and breed — birds, eggs, feed or equipment',
  'Volumes and frequency — daily, weekly, monthly or contract',
  'Grade, processing and packing requirements',
  'Delivery location and your business type',
]

const NEXT_STEPS = [
  ['01', 'You Enquire', 'Send your requirement through the form, a call or WhatsApp — whatever is easiest.'],
  ['02', 'We Propose', 'Our B2B team reviews your specification and responds with a structured commercial proposal.'],
  ['03', 'Supply Begins', 'Once terms are agreed, procurement and delivery run on the schedule we set together.'],
]

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact / B2B Enquiry" title={<>Let's build your poultry <span>supply.</span></>}>
        <p>
          Whether you need birds, eggs, equipment, a complete farm or a contract farming
          partnership, tell us what you are looking for.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <div className="contact-channels">
            {CHANNELS.map((c) => (
              <Reveal key={c.label} className="in">
                <a
                  className={`channel${'badge' in c ? ' featured' : ''}`}
                  href={c.href}
                  {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {'badge' in c && <span className="channel-badge">{c.badge as string}</span>}
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <small>{c.label}</small>
                    <b>{c.value}</b>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="contact-grid">
            <Reveal className="panel contact-side">
              <h3>Talk to our B2B team</h3>
              <p className="contact-note">
                We work with restaurants, hotels, retailers, distributors, institutions and farmer
                partners. The more detail you share, the faster we can put real numbers on the table.
              </p>
              <h4 className="contact-sub">A good enquiry includes</h4>
              <ul className="story-list">
                {ENQUIRY_TIPS.map((t) => (
                  <li key={t}><span className="chk">✓</span> {t}</li>
                ))}
              </ul>
              <h4 className="contact-sub">Before you write</h4>
              <div className="chips contact-chips">
                <Link to="/birds" className="pill">Bird Rate Card</Link>
                <Link to="/eggs" className="pill">Egg Rate Card</Link>
                <Link to="/contract-farming" className="pill">Contract Farming Models</Link>
              </div>
            </Reveal>

            <Reveal>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What Happens Next</span>
            <h2>From enquiry to supply</h2>
          </Reveal>
          <div className="steps">
            {NEXT_STEPS.map(([num, title, text]) => (
              <Reveal key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
