import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const FEED_PRODUCTS = [
  ['Pre-Starter Feed', 'For day-old chicks in the brooding stage — the first feed your birds eat.'],
  ['Starter Feed', 'Feed for young growing chicks after the pre-starter stage.'],
  ['Grower Feed', 'Feed for birds in the growing stage, before laying or finishing.'],
  ['Layer Feed', 'Feed for laying hens — supporting consistent desi egg production.'],
  ['Finisher Feed', 'Feed for meat birds approaching market weight.'],
  ['Grains, Grit & Supplements', 'Additional feed inputs for deep-litter and pasture-raised desi poultry farms.'],
]

const FEED_BUYERS = [
  'Poultry farmers', 'Desi poultry farms', 'Contract farming partners',
  'New farms set up by Energy Eggs', 'Layer farms', 'Broiler & desi meat bird farms',
]

export default function Feed() {
  return (
    <>
      <PageHero eyebrow="Poultry Feed Supply" title={<>Feed for your <span>birds.</span></>}>
        <p>
          Energy Eggs sells poultry feed to farmers and poultry farms — feed for Sonali, Kadaknath
          and Aseel birds at every growth stage, supplied in bulk alongside our equipment and farm
          development services.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What We Sell</span>
            <h2>Feed for every stage of the bird</h2>
            <p>
              From a chick's first feed to layer and finisher rations — matched to the breed and the
              farming model your birds are raised under.
            </p>
          </Reveal>
          <div className="features features-5">
            {FEED_PRODUCTS.map(([name, text]) => (
              <Reveal key={name} className="feature">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="chip-row">
            <h4>Who Buys From Us</h4>
            <div className="chips">
              {FEED_BUYERS.map((b) => <span key={b} className="pill">{b}</span>)}
            </div>
          </Reveal>
          <MiniCta
            title="Order feed for your farm"
            text="Tell us your breed, bird count and farming model — and we can supply the right feed on a regular schedule, by the bag or in bulk."
            cta="Enquire for Feed"
          />
        </div>
      </section>
    </>
  )
}
