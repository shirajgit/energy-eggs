import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const FARM_STEPS = [
  ['01', 'Site Planning', 'Understand the land, capacity and intended farming model.'],
  ['02', 'Farm Layout', 'Plan sheds, movement areas, brooding, feeding, drinking and operational zones.'],
  ['03', 'Construction', 'Develop poultry infrastructure according to the farm requirement.'],
  ['04', 'Equipment', 'Install suitable feeding, drinking and brooding systems.'],
  ['05', 'Pasture Planning', 'For applicable pasture-based models, plan outdoor areas, bird movement, shade and pasture zones.'],
  ['06', 'Farm Ready', 'Prepare the farm for the selected production programme.'],
]

const PASTURE_POINTS = [
  'Outdoor access', 'Bird movement', 'Pasture areas', 'Shade and shelter', 'Feeding zones',
  'Drinking systems', 'Farm hygiene', 'Operational movement', 'Breed and production requirements',
]

export default function FarmDevelopment() {
  return (
    <>
      <PageHero eyebrow="Farm Construction" title={<>Build your desi poultry farm with <span>Energy Eggs.</span></>}>
        <p>
          From an empty piece of land to a functioning poultry farm — we help farmers plan their
          desi poultry infrastructure around the intended production model.
        </p>
      </PageHero>

      {/* FARM DEVELOPMENT STEPS */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Farm Development</span>
            <h2>From land to poultry, step by step</h2>
          </Reveal>
          <div className="steps">
            {FARM_STEPS.map(([num, title, text]) => (
              <Reveal key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <MiniCta center title="One partner. From land to poultry." cta="Build My Farm" />
        </div>
      </section>

      {/* PASTURE-BASED */}
      <section className="alt">
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
              <span className="eyebrow">Pasture-Based Desi Poultry</span>
              <h2>Designing farms around the bird</h2>
              <p style={{ color: 'var(--brown-soft)', marginTop: 14 }}>
                Pasture-based poultry requires more than simply providing outdoor space. Energy Eggs
                develops farm layouts around the full picture — our objective is a practical farm
                environment that works for both the farmer and the birds.
              </p>
              <ul className="story-list cols-2">
                {PASTURE_POINTS.map((p) => (
                  <li key={p}><span className="chk">✓</span> {p}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn" style={{ marginTop: 30 }}>Enquire About Pasture Farming</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
