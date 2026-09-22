import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SprintingHen from '../components/SprintingHen'

const WHAT_WE_DO = [
  {
    to: '/birds',
    title: 'Whole Birds',
    text: 'Sonali • Kadaknath • Aseel',
    icon: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="M7 20c1-4 3-6 5-6s4 2 5 6" />
        <path d="M15 7l4-2-2 4" />
      </>
    ),
  },
  {
    to: '/eggs',
    title: 'Eggs',
    text: 'Sonali • Kadaknath • Aseel',
    icon: <path d="M12 2C7 7 6 11 6 14a6 6 0 0012 0c0-3-1-7-6-12z" />,
  },
  {
    to: '/equipment',
    title: 'Poultry Equipment',
    text: 'Nipple Systems • Brooding • Feeders • Drinkers • Husk',
    icon: (
      <>
        <path d="M4 21V10l8-6 8 6v11" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    to: '/farm-development',
    title: 'Farm Development',
    text: 'Construction • Farm Design • Pasture Planning',
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 12h6" />
      </>
    ),
  },
  {
    to: '/contract-farming',
    title: 'Contract Farming',
    text: 'Deep Litter • Pasture-Raised Models • Farmer Partnerships',
    icon: (
      <>
        <path d="M8 12l3 3 5-6" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
]

const ECOSYSTEM = [
  ['FARM', 'We help develop suitable desi poultry production systems.'],
  ['FARMER', 'We partner with farmers through defined production models.'],
  ['PRODUCTION', 'Birds are raised through structured deep-litter or pasture-raised models, according to the applicable farm program.'],
  ['AGGREGATION', 'Energy Eggs builds dependable supply from its own and partner farms.'],
  ['B2B SUPPLY', 'Birds and eggs are supplied to businesses according to their requirements.'],
  ['MARKET', 'Restaurants • Hotels • Retailers • Distributors • QSRs • Caterers • Food Businesses'],
]

const WHY = [
  ['01', 'Desi Specialization', 'Focused categories including Sonali, Kadaknath and Aseel.'],
  ['02', 'B2B First', 'Built around commercial customers and recurring supply.'],
  ['03', 'Farm Development', 'Equipment and farm construction support.'],
  ['04', 'Farmer Network', 'Contract farming and farmer partnerships.'],
  ['05', 'Multiple Production Models', 'Deep litter and pasture-raised programmes.'],
  ['06', 'End-to-End Ecosystem', 'From farm development to B2B market.'],
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal className="in">
              <div className="badges">
                <span className="pill">Birds</span>
                <span className="pill">Eggs</span>
                <span className="pill">Farms</span>
                <span className="pill">Equipment</span>
                <span className="pill">Partnerships</span>
              </div>
              <span className="script" style={{ fontSize: '1.3rem' }}>
                The B2B Desi Poultry Ecosystem
              </span>
              <h1>
                Desi Poultry.
                <br />
                Built for <span>Business.</span>
              </h1>
              <p className="tag">
                Building a stronger desi poultry supply chain — from farm development and farmer
                partnerships to reliable B2B supply.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn">Get B2B Pricing</Link>
                <Link to="/contract-farming" className="btn ghost">Become a Farmer Partner</Link>
              </div>
              <div className="hero-stats">
                <div><span className="n">3 Breeds</span><small>Sonali · Kadaknath · Aseel</small></div>
                <div><span className="n">2 Models</span><small>Deep Litter · Pasture-Raised</small></div>
                <div><span className="n">End-to-End</span><small>Farm to B2B Market</small></div>
              </div>
            </Reveal>
            <Reveal className="in hero-art">
              <SprintingHen />
              <div className="float-badge fb-1"><span className="dot">⚡</span> Desi Poultry Ecosystem</div>
              <div className="float-badge fb-2"><span className="dot">🤝</span> Farmer Partnerships</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span>Birds</span>
              <span>Eggs</span>
              <span>Farms</span>
              <span>Equipment</span>
              <span>Partnerships</span>
              <span>The B2B Desi Poultry Ecosystem</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What We Do</span>
            <h2>Desi poultry. Built for business.</h2>
            <p>
              Energy Eggs is a B2B poultry company connecting farmers, poultry farms and food
              businesses through a complete desi poultry ecosystem. We supply Sonali, Kadaknath and
              Aseel birds and eggs, provide poultry equipment and farm infrastructure, develop desi
              poultry farms with pasture planning, and work with farmers through structured contract
              farming models.
            </p>
          </Reveal>
          <div className="features features-5">
            {WHAT_WE_DO.map((f) => (
              <Reveal key={f.title} className="feature feature-link">
                <Link to={f.to}>
                  <div className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      {f.icon}
                    </svg>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Ecosystem</span>
            <h2>From farm to B2B market</h2>
            <p>Energy Eggs is building an interconnected poultry ecosystem.</p>
          </Reveal>
          <div className="flow">
            {ECOSYSTEM.map(([title, text], i) => (
              <Reveal key={title} className="flow-step">
                <div className="flow-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {i < ECOSYSTEM.length - 1 && <div className="flow-arrow" aria-hidden="true">↓</div>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ENERGY EGGS */}
      <section className="values">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow" style={{ color: 'var(--orange-light)' }}>Why Energy Eggs?</span>
            <h2>More than a poultry supplier</h2>
          </Reveal>
          <div className="vgrid vgrid-3">
            {WHY.map(([num, title, text]) => (
              <Reveal key={num} className="value">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="closing" style={{ paddingTop: 90 }}>
        <div className="wrap">
          <Reveal className="cta-band">
            <span className="script" style={{ color: '#fff', fontSize: '1.3rem' }}>
              From Farm to Business
            </span>
            <h2>Birds. Eggs. Equipment. Farms. Partnerships.</h2>
            <p>Energy Eggs is building a B2B ecosystem for the next generation of desi poultry.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn">Get B2B Pricing</Link>
              <Link to="/contract-farming" className="btn ghost light">Become a Farmer Partner</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
