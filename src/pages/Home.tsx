import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SprintingHen from '../components/SprintingHen'
import sonaliImg from '../assets/sonali.png'
import aseelImg from '../assets/aseel.png'
import kadaknathImg from '../assets/kadaknath.png'
import fiyoumiImg from '../assets/fiyoumi.png'

const BREEDS: [name: string, rate: string, img: string][] = [
  ['Sonali', '₹500 /kg', sonaliImg],
  ['Aseel', '₹700 /kg', aseelImg],
  ['Kadaknath', '₹750 /kg', kadaknathImg],
  ['Fiyoumi', '₹1,500 /kg', fiyoumiImg],
]

const PATHS: [tag: string, title: string, text: string, cta: string, to: string][] = [
  ['For Buyers', 'I want to buy', 'Birds, eggs, feed and equipment for restaurants, retailers, distributors and food businesses — with published rate cards and structured supply programmes.', 'Explore B2B Supply →', '/b2b-supply'],
  ['For Farmers', 'I want to farm', 'Partner with Energy Eggs through structured contract farming — fixed-price egg procurement, 15-day payments, flock buyback and full technical support.', 'See Contract Farming →', '/contract-farming'],
  ['For Landowners', 'I want to build a farm', 'Have land? We help with farm design, shed construction, pasture planning and equipment to develop a productive desi poultry farm.', 'Start Farm Development →', '/farm-development'],
]

const BRAND_VALUES = ['Healthy Birds', 'Natural Feed', 'Ethical Farming', 'Better Taste & Nutrition', 'Farm Raised', 'Honest Food']

const WHAT_WE_DO = [
  {
    to: '/birds',
    title: 'Whole Birds',
    text: 'Sonali • Aseel • Kadaknath • Fiyoumi',
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
                <span className="pill">Feed</span>
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
                <div><span className="n">4 Breeds</span><small>Sonali · Aseel · Kadaknath · Fiyoumi</small></div>
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
              businesses through a complete desi poultry ecosystem. We supply Sonali, Aseel,
              Kadaknath and Fiyoumi birds and eggs, provide poultry equipment and farm infrastructure, develop desi
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

      {/* BREED SHOWCASE */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Breeds</span>
            <h2>Four desi breeds. <span className="script">One supply partner.</span></h2>
            <p>Traditionally raised, naturally stronger — with transparent, published per-kg rates.</p>
          </Reveal>
          <div className="breed-minis">
            {BREEDS.map(([name, rate, img]) => (
              <Reveal key={name} className="in">
                <Link to="/birds" className="breed-mini">
                  <div className="bm-img"><img src={img} alt={`${name} bird`} loading="lazy" /></div>
                  <h3>{name}</h3>
                  <span className="bm-rate">{rate}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="chip-row">
            <div className="chips">
              <span className="pill">Live bird rates by age — day-old to 20+ weeks</span>
              <span className="pill">Minimum order 10 birds</span>
              <span className="pill">Quail also available</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Where Do You Fit?</span>
            <h2>Three ways into the ecosystem</h2>
            <p>Whether you buy poultry, farm it, or want to start — there's a structured path for you.</p>
          </Reveal>
          <div className="cards-3">
            {PATHS.map(([tag, title, text, cta, to]) => (
              <Reveal key={title} className="in">
                <Link to={to} className="breed-card path-card">
                  <span className="eyebrow">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="panel-link">{cta}</span>
                </Link>
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

      {/* PRICING SNAPSHOT */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Transparent Pricing</span>
            <h2>Published rate cards. No guesswork.</h2>
            <p>
              Live bird rates by breed and age, and per-egg ex-farm prices tiered by monthly
              commitment — from ₹10.75 to ₹12.00 per egg, with processing add-ons from ₹0.00 to
              ₹1.00. Commit a monthly volume and unlock preferential slabs with priority supply.
            </p>
          </Reveal>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link to="/birds" className="btn ghost">Bird Rate Card</Link>
            <Link to="/eggs" className="btn ghost">Egg Rate Card</Link>
            <Link to="/b2b-supply#volume-commitment" className="btn">Volume Commitment Program</Link>
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="alt brand-strip">
        <div className="wrap">
          <Reveal className="about-copy">
            <span className="script" style={{ fontSize: '1.5rem' }}>Nourishing lives. Naturally.</span>
            <p>
              Farm raised, honest food — produced through ethical farming, natural feed and
              structured quality systems across our own and partner farms.
            </p>
            <div className="chips" style={{ justifyContent: 'center' }}>
              {BRAND_VALUES.map((v) => <span key={v} className="pill">{v}</span>)}
            </div>
            <p><Link to="/about" className="panel-link">Read our story →</Link></p>
          </Reveal>
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
