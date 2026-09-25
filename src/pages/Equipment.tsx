import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { CountUp, MItem, MReveal, MStagger, pop } from '../components/Motion'
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

const EQUIP_STATS: [n: string, label: string][] = [
  ['31', 'Products in Range'],
  ['6', 'Equipment Categories'],
  ['2', 'Farming Models Served'],
  ['5', 'Steps to a Running Farm'],
]

const CATALOGUE: { cat: string; desc: string; icon: ReactNode; items: string[] }[] = [
  {
    cat: 'Feeders',
    desc: 'Even feed access for every bird — from chick trays to parent feeders.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16l-2 9H6l-2-9z" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
    items: ['8kg Feeder Set', 'Chick Feeder Set', 'Parent Feeder'],
  },
  {
    cat: 'Drinkers & Watering',
    desc: 'Clean water lines, nipples and tanks for hygienic, spill-free hydration.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11z" /></svg>,
    items: ['Classic Drinker Set', 'Jumbo Drinker Set', '8 Manual Drinker Set', '4 Manual Drinker Set', 'Chick Drinker Set', '360° Nipples', 'Drinker Nozzles', 'Blue Drinker Pipe', 'Water Level Tubes', '20 L Water Tank'],
  },
  {
    cat: 'Brooding',
    desc: 'Gas and electric brooders that hold day-old chicks at the right temperature.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" /></svg>,
    items: ['Gas Brooder (Single)', 'Gas Brooder (Double)', 'Electric Brooder with Fan', 'Electric Brooder without Fan', 'Chick Guard'],
  },
  {
    cat: 'Handling & Transport',
    desc: 'Safe movement of birds, chicks and eggs between farm and market.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>,
    items: ['Bird Transportation Box', 'Chick Transport Boxes', 'Egg Trays'],
  },
  {
    cat: 'Tools & Accessories',
    desc: 'The day-to-day hardware that keeps operations precise and consistent.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7z" /></svg>,
    items: ['S Hooks', 'Adjusting Chains', 'Automatic Vaccination Guns', 'Debeaking Machine', 'Raking Tools', 'Biscuits'],
  },
  {
    cat: 'Litter & Farm Consumables',
    desc: 'Bedding and biosecurity inputs for a dry, sanitised shed.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M3 14l9 5 9-5" /></svg>,
    items: ['Husk', 'Limestone', 'Formaldehyde', 'Potassium Permanganate'],
  },
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
  ['Do you supply husk on a recurring basis?', 'Yes. Husk and litter supply can be structured as a recurring arrangement matched to your batch cycles, so fresh bedding arrives when each new batch is placed.'],
]

export default function Equipment() {
  return (
    <MotionConfig reducedMotion="user">
      <PageHero eyebrow="Poultry Equipment" title={<>Everything your poultry farm <span>needs.</span></>}>
        <p>
          Starting a poultry farm requires more than birds. Energy Eggs provides poultry equipment
          and farm requirements designed around the needs of desi poultry operations.
        </p>
        <div className="chips" style={{ justifyContent: 'center', marginTop: 22 }}>
          <span className="pill">31 Products</span>
          <span className="pill">Deep Litter &amp; Pasture Setups</span>
          <span className="pill">Recurring Husk Supply</span>
          <span className="pill">Setup Guidance</span>
        </div>
      </PageHero>

      {/* CORE SYSTEMS */}
      <section>
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Equipment &amp; Farm Inputs</span>
            <h2>Built around desi poultry operations</h2>
            <p>
              Five core systems decide how well a shed runs — water, heat, feed, drinking access
              and bedding. We supply all of them, matched to your farm design.
            </p>
          </MReveal>
          <MStagger className="features features-5">
            {EQUIPMENT.map(([name, text, icon]) => (
              <MItem key={name} className="feature">
                <div className="ic">{icon}</div>
                <h3>{name}</h3>
                <p>{text}</p>
              </MItem>
            ))}
          </MStagger>
          <MStagger className="stats-band" gap={0.1} amount={0.3}>
            {EQUIP_STATS.map(([n, label]) => (
              <MItem key={label} variants={pop}>
                <CountUp value={n} />
                <small>{label}</small>
              </MItem>
            ))}
          </MStagger>
        </div>
      </section>

      {/* FULL CATALOGUE */}
      <section className="alt">
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Complete Range</span>
            <h2>The full equipment catalogue</h2>
            <p>
              Every item we stock, in one place — request any combination in a single quote,
              from a full farm setup to a one-line top-up order.
            </p>
          </MReveal>
          <MStagger className="cat-grid" gap={0.1}>
            {CATALOGUE.map(({ cat, desc, icon, items }) => (
              <MItem key={cat} className="panel cat-panel">
                <div className="cat-head">
                  <div className="ic-sm">{icon}</div>
                  <h3>{cat}</h3>
                  <span className="cat-count">{items.length} items</span>
                </div>
                <p>{desc}</p>
                <div className="chips">
                  {items.map((p) => <span key={p} className="pill">{p}</span>)}
                </div>
              </MItem>
            ))}
          </MStagger>
          <MReveal className="chain wrap-chain" style={{ marginTop: 56 }}>
            {REQUIREMENT_FLOW.map((s, i) => (
              <span key={s} className="chain-item">
                <span>{s}</span>
                {i < REQUIREMENT_FLOW.length - 1 && <span className="ar">→</span>}
              </span>
            ))}
          </MReveal>
        </div>
      </section>

      {/* WHO WE EQUIP */}
      <section>
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Who We Equip</span>
            <h2>From first shed to full scale</h2>
            <p>One supply relationship, whatever stage your farm is at.</p>
          </MReveal>
          <MStagger className="features features-4">
            {WHO_WE_EQUIP.map(([name, text], i) => (
              <MItem key={name} className="step">
                <div className="num">0{i + 1}</div>
                <h3>{name}</h3>
                <p>{text}</p>
              </MItem>
            ))}
          </MStagger>
        </div>
      </section>

      {/* SETUPS BY MODEL */}
      <section className="alt">
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Setups By Farming Model</span>
            <h2>Matched to how you farm</h2>
            <p>Equipment isn't one-size-fits-all — deep litter and pasture-raised farms need different setups.</p>
          </MReveal>
          <MStagger className="cards-2" gap={0.15}>
            {SETUPS.map(([title, points]) => (
              <MItem key={title} className="panel">
                <h3>{title}</h3>
                <ul className="story-list">
                  {points.map((p) => (
                    <li key={p}><span className="chk">✓</span> {p}</li>
                  ))}
                </ul>
                <Link to="/contract-farming" className="panel-link">See the farming models →</Link>
              </MItem>
            ))}
          </MStagger>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">How It Works</span>
            <h2>From requirement to a running farm</h2>
            <p>A structured five-step path — no guesswork between enquiry and a working shed.</p>
          </MReveal>
          <MStagger className="steps steps-5">
            {STEPS.map(([num, title, text]) => (
              <MItem key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </MItem>
            ))}
          </MStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Equipment, answered</h2>
          </MReveal>
          <MReveal className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </MReveal>
          <MiniCta
            title="From requirement to installation"
            text="Tell us your bird capacity, farm size, farming model and equipment requirement — and our team can help develop the appropriate farm setup."
            cta="Enquire for Equipment"
            source="Equipment Enquiry"
          />
        </div>
      </section>
    </MotionConfig>
  )
}
