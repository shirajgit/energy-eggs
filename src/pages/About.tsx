import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'
import VolumeCommitment from '../components/VolumeCommitment'

const PILLARS = [
  ['/birds', 'Whole Birds', 'Sonali, Kadaknath and Aseel birds supplied to B2B customers at scale.'],
  ['/eggs', 'Desi Eggs', 'Specialty egg supply for food, retail and hospitality businesses.'],
  ['/equipment', 'Farm Equipments', 'Nipple systems, brooding, feeders, drinkers and husk for desi poultry farms.'],
  ['/feed', 'Poultry Feed', 'Feed for every growth stage — from pre-starter to layer and finisher.'],
  ['/farm-development', 'Farm Development', 'Farm design, construction and pasture planning, from land to farm-ready.'],
  ['/contract-farming', 'Contract Farming', 'Structured deep-litter and pasture-raised schemes with market linkage.'],
]

const VALUES = [
  ['01', 'Farmer First', 'Our ecosystem only works when farming works — so farmer viability sits at the centre of every programme we design.'],
  ['02', 'Quality as a System', 'Quality comes from defined production models, SOPs and monitoring — not from slogans.'],
  ['03', 'Desi Specialization', 'We focus on what we know: Sonali, Kadaknath and Aseel, and the farming systems built around them.'],
  ['04', 'Reliability', 'B2B customers depend on supply. We build programmes around commitments, schedules and specifications.'],
  ['05', 'Transparency', 'Clear terms for farmers and clear specifications for buyers — agreed upfront, in writing.'],
  ['06', 'Long-Term Partnerships', 'We grow through renewable contracts and recurring supply relationships, not one-off transactions.'],
]

const STATS = [
  ['3 Breeds', 'Sonali · Kadaknath · Aseel'],
  ['2 Models', 'Deep Litter · Pasture-Raised'],
  ['End-to-End', 'Farm Development to B2B Supply'],
  ['B2B First', 'Built for Commercial Customers'],
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Energy Eggs" title={<>Building the next generation of desi poultry <span>supply.</span></>} />

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
                businesses all want dependable access to Sonali, Kadaknath and Aseel birds and
                eggs. But supply is fragmented across thousands of independent farms, each working
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

      {/* WHAT WE DO */}
      <section>
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
