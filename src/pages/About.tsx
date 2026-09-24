import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'
import VolumeCommitment from '../components/VolumeCommitment'
import aboutHeroImg from '../assets/about-hero.jpg'

const PILLARS = [
  ['/birds', 'Whole Birds', 'Sonali, Aseel, Kadaknath and Fiyoumi birds supplied to B2B customers at scale.'],
  ['/eggs', 'Desi Eggs', 'Specialty egg supply for food, retail and hospitality businesses.'],
  ['/equipment', 'Farm Equipments', 'Nipple systems, brooding, feeders, drinkers and husk for desi poultry farms.'],
  ['/feed', 'Poultry Feed', 'Feed for every growth stage — from pre-starter to layer and finisher.'],
  ['/farm-development', 'Farm Development', 'Farm design, construction and pasture planning, from land to farm-ready.'],
  ['/contract-farming', 'Contract Farming', 'Structured deep-litter and pasture-raised schemes with market linkage.'],
]

const VALUES = [
  ['01', 'Farmer First', 'Our ecosystem only works when farming works — so farmer viability sits at the centre of every programme we design.'],
  ['02', 'Quality as a System', 'Quality comes from defined production models, SOPs and monitoring — not from slogans.'],
  ['03', 'Desi Specialization', 'We focus on what we know: Sonali, Aseel, Kadaknath and Fiyoumi, and the farming systems built around them.'],
  ['04', 'Reliability', 'B2B customers depend on supply. We build programmes around commitments, schedules and specifications.'],
  ['05', 'Transparency', 'Clear terms for farmers and clear specifications for buyers — agreed upfront, in writing.'],
  ['06', 'Long-Term Partnerships', 'We grow through renewable contracts and recurring supply relationships, not one-off transactions.'],
]

const WHY_DESI = [
  ['Heritage Breeds', 'Sonali, Aseel, Kadaknath and Fiyoumi carry generations of adaptation to Indian conditions — birds with real identity, not commodity genetics.'],
  ['Naturally Stronger', 'Desi birds are hardy by nature. Raised under deep-litter and pasture systems, they grow slower — and healthier.'],
  ['Taste & Nutrition', 'Slower growth and natural feed produce the distinct taste, texture and nutrition that desi poultry is prized for.'],
  ['Premium Markets', 'Specialty restaurants, retailers and health-conscious consumers pay for authenticity — desi poultry is a growing premium category.'],
]

const FOR_FARMERS = [
  'Farm design, SOPs, training and veterinary supervision',
  'Birds, feed and equipment through one ecosystem',
  'Fixed-price egg procurement with 15-day payment cycles',
  'Flock buyback and renewable one-year contracts',
]

const FOR_BUYERS = [
  'Published rate cards for birds and eggs — transparent, tiered pricing',
  'Spot orders, scheduled supply or volume commitment programmes',
  'Grading, processing, custom packing and private label options',
  'Supply built around your specification, volume and delivery schedule',
]

const TAGLINES = ['Farm Fresh for a Healthier Tomorrow', 'Stronger Farms, Healthier Tomorrows', 'Good Eggs, Greater Possibilities', 'Farm Raised · Honest Food']

const STATS = [
  ['4 Breeds', 'Sonali · Aseel · Kadaknath · Fiyoumi'],
  ['2 Models', 'Deep Litter · Pasture-Raised'],
  ['End-to-End', 'Farm Development to B2B Supply'],
  ['B2B First', 'Built for Commercial Customers'],
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Energy Eggs" title={<>Building the next generation of desi poultry <span>supply.</span></>} bg={aboutHeroImg} bgPosition="center 38%" />

      {/* OUR STORY */}
      <section>
        <div className="wrap">
          <div className="split">
            <Reveal className="story-art">
              <svg className="barn" viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M20 70L100 30l80 40v70H20z" />
                <path d="M75 140v-45h50v45" />
                <path d="M20 70h160M100 30v-14" />
                <path d="M30 150h140" strokeWidth={4} />
              </svg>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Our Story</span>
              <h2>A simple opportunity</h2>
              <p style={{ color: 'var(--brown-soft)', marginTop: 14 }}>
                Energy Eggs was created around a simple opportunity: build a more organized
                connection between poultry farmers and the businesses that depend on reliable
                poultry supply.
              </p>
              <p style={{ color: 'var(--brown-soft)', marginTop: 14 }}>
                Desi poultry in India is full of demand — restaurants, hotels, retailers and food
                businesses all want dependable access to Sonali, Aseel, Kadaknath and Fiyoumi birds
                and eggs. But supply is fragmented across thousands of independent farms, each working
                alone. We exist to close that gap.
              </p>
              <p style={{ color: 'var(--brown-soft)', marginTop: 14 }}>
                We are developing a B2B ecosystem around desi birds, specialty eggs, farm
                infrastructure, feed, farm development and contract farming — so that production
                and demand can finally grow together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="alt">
        <div className="wrap">
          <div className="cards-2">
            <Reveal className="breed-card">
              <span className="eyebrow">Our Mission</span>
              <h3>Organize the desi poultry supply chain</h3>
              <p>
                Connect farmers and food businesses through structured production models, defined
                quality systems and dependable procurement — creating scalable opportunities on
                both sides of the supply chain.
              </p>
            </Reveal>
            <Reveal className="breed-card">
              <span className="eyebrow">Our Vision</span>
              <h3>Greater control, visibility and consistency</h3>
              <p>
                Build greater control, visibility and consistency across the poultry value chain —
                so a farmer in Krishnagiri and a restaurant kitchen in the city are part of one
                reliable system.
              </p>
            </Reveal>
          </div>
          <Reveal className="hero-stats about-stats">
            {STATS.map(([n, label]) => (
              <div key={n}><span className="n">{n}</span><small>{label}</small></div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY DESI */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Why Desi Poultry</span>
            <h2>Why we bet on <span className="script">desi.</span></h2>
            <p>
              India's poultry market is dominated by commodity broilers — but the fastest-growing
              demand is for something older and better.
            </p>
          </Reveal>
          <div className="features features-4">
            {WHY_DESI.map(([title, text]) => (
              <Reveal key={title} className="feature">
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What We Do</span>
            <h2>One ecosystem. Six pillars.</h2>
            <p>
              Everything we build serves the same goal — a stronger connection between desi poultry
              farms and the businesses they supply.
            </p>
          </Reveal>
          <div className="features features-3">
            {PILLARS.map(([to, title, text]) => (
              <Reveal key={to} className="feature feature-link">
                <Link to={to}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How We Work</span>
            <h2>One ecosystem, two promises</h2>
            <p>Everything we offer farmers strengthens what we can promise buyers — and vice versa.</p>
          </Reveal>
          <div className="cards-2">
            <Reveal className="panel">
              <h3>For Farmer Partners</h3>
              <ul className="story-list">
                {FOR_FARMERS.map((f) => (
                  <li key={f}><span className="chk">✓</span> {f}</li>
                ))}
              </ul>
              <Link to="/contract-farming" className="panel-link">Explore contract farming →</Link>
            </Reveal>
            <Reveal className="panel">
              <h3>For B2B Buyers</h3>
              <ul className="story-list">
                {FOR_BUYERS.map((f) => (
                  <li key={f}><span className="chk">✓</span> {f}</li>
                ))}
              </ul>
              <Link to="/b2b-supply" className="panel-link">Explore B2B supply →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow" style={{ color: 'var(--orange-light)' }}>What We Stand For</span>
            <h2>The principles behind the ecosystem</h2>
          </Reveal>
          <div className="vgrid vgrid-3">
            {VALUES.map(([num, title, text]) => (
              <Reveal key={num} className="value">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="about-copy">
            <span className="script" style={{ fontSize: '1.5rem' }}>Nourishing lives. Naturally.</span>
            <p>
              Behind the name is a simple promise — healthy birds, natural feed, ethical farming,
              and better taste and nutrition, from our farms and our partners' farms to your business.
            </p>
            <div className="chips" style={{ justifyContent: 'center' }}>
              {TAGLINES.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <MiniCta
            title="Let's build your poultry supply."
            text="Whether you need birds, eggs, equipment, a complete farm or a contract farming partnership — tell us what you are looking for."
            cta="Get in Touch"
          />
        </div>
      </section>

      <VolumeCommitment alt />
    </>
  )
}
