import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const EGG_CATEGORIES = [
  ['Sonali Eggs', 'For businesses looking for consistent supply of Sonali eggs.'],
  ['Kadaknath Eggs', 'Specialty eggs for premium and desi poultry programmes.'],
  ['Aseel Eggs', 'Specialty Aseel egg supply according to customer requirements.'],
]

const PROGRAMMES = ['Daily requirements', 'Weekly requirements', 'Monthly requirements', 'Contract requirements']

export default function Eggs() {
  return (
    <>
      <PageHero eyebrow="Desi Eggs" title={<>Specialty eggs. <span>Reliable supply.</span></>}>
        <p>Energy Eggs supplies desi eggs to B2B customers across food, retail and hospitality.</p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Available Categories</span>
            <h2>Specialty desi egg supply</h2>
          </Reveal>
          <div className="cards-3">
            {EGG_CATEGORIES.map(([name, text]) => (
              <Reveal key={name} className="breed-card">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="chip-row">
            <h4>Bulk B2B Programmes</h4>
            <div className="chips">
              {PROGRAMMES.map((p) => <span key={p} className="pill">{p}</span>)}
            </div>
          </Reveal>
          <MiniCta
            title="We structure supply around your business"
            text="Specify your quantity, product requirements, delivery frequency and location — we build the programme around it."
            cta="Get Egg Pricing"
          />
        </div>
      </section>
    </>
  )
}
