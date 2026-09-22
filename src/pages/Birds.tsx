import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const BREEDS = [
  ['Sonali', 'A commercially relevant coloured-bird category for broader poultry programmes.'],
  ['Kadaknath', 'An indigenous breed positioned for specialty and premium poultry markets.'],
  ['Aseel', 'A distinctive desi poultry category with strong traditional and culinary positioning.'],
]

const BIRD_CUSTOMERS = [
  'Meat retailers', 'Restaurants', 'Hotels', 'QSRs', 'Caterers', 'Distributors',
  'Poultry businesses', 'Institutional buyers', 'Food businesses',
]

export default function Birds() {
  return (
    <>
      <PageHero eyebrow="Whole Bird Supply" title={<>Desi birds. At <span>B2B scale.</span></>}>
        <p>
          Energy Eggs supplies whole birds to B2B customers looking for reliable access to
          specialty desi poultry.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Breeds</span>
            <h2>Three focused desi categories</h2>
          </Reveal>
          <div className="cards-3">
            {BREEDS.map(([name, text]) => (
              <Reveal key={name} className="breed-card">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="chip-row">
            <h4>B2B Customers</h4>
            <div className="chips">
              {BIRD_CUSTOMERS.map((c) => <span key={c} className="pill">{c}</span>)}
            </div>
          </Reveal>
          <MiniCta
            title="Need regular supply?"
            text="Tell us your requirement and our B2B team can develop a supply programme around your volume and specifications."
            cta="Request B2B Pricing"
          />
        </div>
      </section>
    </>
  )
}
