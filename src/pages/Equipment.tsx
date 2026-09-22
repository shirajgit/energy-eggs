import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const EQUIPMENT: [name: string, text: string, icon: ReactNode][] = [
  ['Nipple Drinking Systems', 'Clean, controlled water delivery with less spillage and drier litter — the backbone of flock hygiene.',
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11z" /><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" /></svg>],
  ['Complete Brooding Systems', 'Heat, space and comfort for the critical first weeks — set up for strong, uniform chick growth.',
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="14" r="6" /><path d="M12 8V4M8 5l1.5 2M16 5l-1.5 2" /></svg>],
  ['Feeders', 'Feeding lines and feeders matched to your shed layout, flock size and farming model.',
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16l-2 9H6l-2-9z" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>],
  ['Drinkers', 'Drinking systems and accessories for every growth stage and farm configuration.',
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h10l-1.5 16a2 2 0 0 1-2 1.8h-3A2 2 0 0 1 8.5 19L7 3z" /><path d="M8 9h8" /></svg>],
  ['Husk & Litter', 'Quality husk supply for deep-litter bedding — dry, absorbent and ready for your flock.',
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M3 14l9 5 9-5" /></svg>],
]

const WHO_WE_EQUIP = [
  ['New Farms', 'Setting up your first desi poultry farm? Get the complete equipment package matched to your farm design from day one.'],
  ['Expanding Farms', 'Adding sheds or scaling capacity — equipment planned around your existing setup and future batches.'],
  ['Contract Farming Partners', 'Partners under Energy Eggs schemes get equipment aligned to the approved farm design and SOPs.'],
  ['Independent Desi Farms', 'Running your own operation? Source reliable equipment and husk through one B2B relationship.'],
]

const SETUPS: [title: string, points: string[]][] = [
  ['Deep Litter Setup', [
    'Husk and litter supply for bedding management',
    'Feeders and nipple drinking lines sized to shed layout',
    'Brooding equipment for chick placement',
    'Configured for approx. 8,000 sq. ft. sheds and 5,000-bird batches',
  ]],
  ['Pasture-Raised Setup', [
    'Shed equipment plus pasture-area planning support',
    'Drinking and feeding systems for indoor-outdoor movement',
    'Brooding infrastructure for early stages',
    'Aligned with the Energy Eggs pasture-raised farm design',
  ]],
]

const STEPS = [
  ['01', 'Share Requirement', 'Bird capacity, farm size, farming model and what you need.'],
  ['02', 'Farm Assessment', 'We align equipment to your farm design or help plan a new one.'],
  ['03', 'Plan & Quote', 'A structured equipment plan with a commercial proposal.'],
  ['04', 'Supply', 'Equipment and husk delivered as per the agreed plan.'],
  ['05', 'Setup Guidance', 'Guidance to get your farm running as designed.'],
]

const REQUIREMENT_FLOW = ['Bird capacity', 'Farm size', 'Farming model', 'Equipment requirement']

const FAQ: [q: string, a: string][] = [
  ['Can I buy equipment without a farming partnership?', 'Yes. Equipment and husk supply are available as standalone B2B purchases — you don’t need to be a contract farming partner to source through Energy Eggs.'],
  ['Is equipment included in contract farming schemes?', 'Under the contract farming models, shed construction and equipment are part of the farmer’s investment — but everything is specified in the approved farm design, and we supply and guide the setup so it matches the programme’s SOPs.'],
  ['What should I share to get a quote?', 'Your bird capacity, farm or shed size, farming model (deep litter or pasture-raised) and the specific equipment you need. Our team responds with a structured plan and quote.'],
  ['Do you help with installation and setup?', 'We provide setup guidance alongside supply, and for farms developed under Energy Eggs programmes, equipment installation follows the approved farm design.'],
]

export default function Equipment() {
  return (
    <>
      <PageHero eyebrow="Poultry Equipment" title={<>Everything your poultry farm <span>needs.</span></>}>
        <p>
          Starting a poultry farm requires more than birds. Energy Eggs provides poultry equipment
          and farm requirements designed around the needs of desi poultry operations.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Equipment &amp; Farm Inputs</span>
            <h2>Built around desi poultry operations</h2>
          </Reveal>
          <div className="features features-5">
            {EQUIPMENT.map(([name, text, icon]) => (
              <Reveal key={name} className="feature">
                <div className="ic">{icon}</div>
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="chain wrap-chain" style={{ marginTop: 56 }}>
            {REQUIREMENT_FLOW.map((s, i) => (
              <span key={s} className="chain-item">
                <span>{s}</span>
                {i < REQUIREMENT_FLOW.length - 1 && <span className="ar">→</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Who We Equip</span>
            <h2>From first shed to full scale</h2>
          </Reveal>
          <div className="features features-4">
            {WHO_WE_EQUIP.map(([name, text]) => (
              <Reveal key={name} className="feature">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Setups By Farming Model</span>
            <h2>Matched to how you farm</h2>
            <p>Equipment isn't one-size-fits-all — deep litter and pasture-raised farms need different setups.</p>
          </Reveal>
          <div className="cards-2">
            {SETUPS.map(([title, points]) => (
              <Reveal key={title} className="panel">
                <h3>{title}</h3>
                <ul className="story-list">
                  {points.map((p) => (
                    <li key={p}><span className="chk">✓</span> {p}</li>
                  ))}
                </ul>
                <Link to="/contract-farming" className="panel-link">See the farming models →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How It Works</span>
            <h2>From requirement to a running farm</h2>
          </Reveal>
          <div className="steps steps-5">
            {STEPS.map(([num, title, text]) => (
              <Reveal key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Equipment, answered</h2>
          </Reveal>
          <Reveal className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
          <MiniCta
            title="From requirement to installation"
            text="Tell us your bird capacity, farm size, farming model and equipment requirement — and our team can help develop the appropriate farm setup."
            cta="Enquire for Equipment"
          />
        </div>
      </section>
    </>
  )
}
