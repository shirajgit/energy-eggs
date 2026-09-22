import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const EQUIPMENT = [
  ['Nipple Drinking Systems', 'Efficient drinking infrastructure for poultry farms.'],
  ['Complete Brooding Systems', 'Equipment and infrastructure for the brooding stage.'],
  ['Feeders', 'Feeding solutions for different farm configurations.'],
  ['Drinkers', 'Drinking systems and accessories.'],
  ['Husk', 'Farm litter requirements for poultry operations.'],
]

const REQUIREMENT_FLOW = ['Bird capacity', 'Farm size', 'Farming model', 'Equipment requirement']

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
            {EQUIPMENT.map(([name, text]) => (
              <Reveal key={name} className="feature">
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
