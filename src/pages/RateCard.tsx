import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { MItem, MReveal, MStagger } from '../components/Motion'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'
import GetQuoteModal, { type QuoteKind } from '../components/GetQuoteModal'
import { useLiveRates } from '../lib/ratesApi'
import sonaliImg from '../assets/sonali.png'
import aseelImg from '../assets/aseel.png'
import kadaknathImg from '../assets/kadaknath.png'

const BREED_IMAGES: Record<string, string> = {
  Sonali: sonaliImg,
  Aseel: aseelImg,
  Kadaknath: kadaknathImg,
}


export default function RateCard() {
  const { birdCards, birdNotes, eggRates, processing } = useLiveRates()
  const [active, setActive] = useState(0)
  const [modal, setModal] = useState<QuoteKind | null>(null)
  const card = birdCards[Math.min(active, birdCards.length - 1)]

  return (
    <MotionConfig reducedMotion="user">
      <PageHero eyebrow="Published Rate Card" title={<>Every rate. <span>One page.</span></>}>
        <p>
          All our B2B prices, published and transparent — live bird rates by breed and age,
          and ex-farm egg prices tiered by monthly commitment. No guesswork, no negotiation maze.
        </p>
        <div className="chips" style={{ justifyContent: 'center', marginTop: 22 }}>
          <span className="pill">Bird rates by age</span>
          <span className="pill">Egg tiers by commitment</span>
          <span className="pill">Processing add-ons</span>
        </div>
      </PageHero>

      {/* BIRD RATES */}
      <section id="bird-rates">
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Live Bird Rate Card</span>
            <h2>Bird rates by age</h2>
            <p>Per-bird rates from day-old chicks to fully grown birds, for male and female.</p>
          </MReveal>

          <MReveal className="rate-tabs">
            {birdCards.map((c, i) => (
              <button
                key={c.name}
                type="button"
                className={`rate-tab rate-tab-img${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
              >
                {BREED_IMAGES[c.name] && <img src={BREED_IMAGES[c.name]} alt="" />}
                {c.name}
              </button>
            ))}
          </MReveal>

          <MReveal className="card-cta" style={{ maxWidth: 860 }}>
            <button type="button" className="btn" onClick={() => setModal('birds')}>
              Get the Birds
            </button>
          </MReveal>

          <MReveal className="rate-card model">
            <div className="model-top model-top-flex">
              <div>
                <h3>{card.name}</h3>
                <p>Rate (₹) per bird · For orders less than 10 birds: {card.perKg}</p>
              </div>
              {BREED_IMAGES[card.name] && (
                <div className="model-top-bird">
                  <img src={BREED_IMAGES[card.name]} alt={`${card.name} bird`} />
                </div>
              )}
            </div>
            <div className="rate-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Age (Days)</th>
                    <th>Male (₹)</th>
                    <th>Female (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {card.rows.map(([week, age, male, female]) => (
                    <tr key={week}>
                      <td>{week}</td>
                      <td>{age}</td>
                      <td>{male}</td>
                      <td>{female}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MReveal>

          <MReveal className="chip-row">
            <div className="chips">
              {birdNotes.map((n) => <span key={n} className="pill">{n}</span>)}
            </div>
          </MReveal>
        </div>
      </section>

      {/* EGG RATES */}
      <section className="alt" id="egg-rates">
        <div className="wrap">
          <MReveal className="sec-head">
            <span className="eyebrow">Egg Rate Card</span>
            <h2>Ex-farm prices, per egg</h2>
            <p>
              Rates tiered by your monthly commitment — the more you commit, the better the rate.
            </p>
          </MReveal>

          <MReveal className="card-cta" style={{ maxWidth: 920 }}>
            <button type="button" className="btn" onClick={() => setModal('eggs')}>
              Get the Eggs
            </button>
          </MReveal>

          <MStagger className="tier-list" gap={0.08} amount={0.1}>
            {eggRates.map(([commitment, a, ab, b]) => {
              const custom = commitment.includes('+')
              return (
                <MItem key={commitment} className={`tier${custom ? ' custom' : ''}`}>
                  <div className="tier-range">
                    <small>Monthly commitment</small>
                    <strong>{commitment}</strong>
                    <span>eggs / month</span>
                  </div>
                  <div className="tier-prices">
                    <div className="tp"><small>A-Grade</small><b>{a}</b></div>
                    <div className="tp"><small>A + B Grade</small><b>{ab}</b></div>
                    <div className="tp"><small>B Grade</small><b>{b}</b></div>
                  </div>
                </MItem>
              )
            })}
          </MStagger>

          <MReveal className="sub-head">
            <span className="eyebrow">Processing &amp; Add-On Charges</span>
            <h3>Choose how your eggs arrive</h3>
          </MReveal>
          <MStagger className="addon-grid" gap={0.12}>
            {processing.map(([service, charge, note], i) => (
              <MItem key={service} className="addon">
                <span className="addon-step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{service}</h3>
                <div className="addon-price">{charge}<small>/egg</small></div>
                <p>{note}</p>
              </MItem>
            ))}
          </MStagger>

          <MReveal className="chip-row">
            <div className="chips">
              <span className="pill">Custom packing for bulk orders</span>
              <span className="pill">Branding options</span>
              <span className="pill">Private label available</span>
            </div>
          </MReveal>
        </div>
      </section>

      {/* MORE DETAIL + CTA */}
      <section>
        <div className="wrap">
          <MiniCta
            title="Ready to order at these rates?"
            text="Tell us your product, volumes and delivery requirement — our B2B team responds with a structured commercial proposal."
            cta="Talk to Our B2B Team"
            source="B2B Supply"
          />
        </div>
      </section>

      <GetQuoteModal kind={modal} onClose={() => setModal(null)} />
    </MotionConfig>
  )
}
