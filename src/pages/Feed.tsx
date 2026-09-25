import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const FEED_PRODUCTS = [
  ['Pre-Starter Feed', 'For day-old chicks in the brooding stage — the first feed your birds eat.'],
  ['Starter Feed', 'Feed for young growing chicks after the pre-starter stage.'],
  ['Grower Feed', 'Feed for birds in the growing stage, before laying or finishing.'],
  ['Finisher Feed', 'Feed for meat birds approaching market weight.'],
  ['Grains, Grit & Supplements', 'Additional feed inputs for deep-litter and pasture-raised desi poultry farms.'],
]

const FEED_STAGES = ['Pre-Starter', 'Starter', 'Grower', 'Finisher']

const APPROACH = [
  ['Stage-Matched Nutrition', 'Every growth stage has a ration — from a chick’s first feed through growing and finishing.'],
  ['Model-Aware Feeding', 'Deep-litter and pasture-raised birds feed differently — pasture birds forage, so rations and supplements are planned accordingly.'],
  ['Desi Breed Focus', 'Feed programmes built around Sonali, Aseel, Kadaknath and Fiyoumi — not generic broiler assumptions.'],
  ['Scheduled Supply', 'By the bag or in bulk, delivered on a recurring schedule so your farm never runs dry.'],
]

const SUPPLY_STEPS = [
  ['01', 'Share Flock Details', 'Breed, bird count, age and your farming model.'],
  ['02', 'Feed Plan', 'We map the right rations and quantities to your flock’s stages.'],
  ['03', 'Quote', 'A clear commercial proposal — bag or bulk, one-time or recurring.'],
  ['04', 'Scheduled Delivery', 'Feed arrives on the agreed schedule, aligned to your batch cycle.'],
]

const ECOSYSTEM_LINKS: [tag: string, title: string, text: string, cta: string, to: string][] = [
  ['Birds', 'Chicks + feed together', 'Placing day-old chicks or ready-to-lay birds? Pair them with a stage-matched feed plan from day one.', 'See bird rate card →', '/birds'],
  ['Equipment', 'Feeders & husk too', 'Feeders, drinkers, brooding systems and husk — source the hardware and the feed in one order.', 'Explore equipment →', '/equipment'],
  ['Contract Farming', 'For farmer partners', 'Under our schemes, feed is the farmer’s investment — and partners can source it through Energy Eggs, aligned to programme SOPs.', 'See the models →', '/contract-farming'],
]

const FEED_BUYERS = [
  'Poultry farmers', 'Desi poultry farms', 'Contract farming partners',
  'New farms set up by Energy Eggs', 'Layer farms', 'Broiler & desi meat bird farms',
]

const FAQ: [q: string, a: string][] = [
  ['Which breeds is the feed for?', 'Our feed programmes are built around desi poultry — Sonali, Aseel, Kadaknath and Fiyoumi — across both deep-litter and pasture-raised systems. Tell us your breed and we’ll map the right rations.'],
  ['Can I buy by the bag or only in bulk?', 'Both. We supply feed by the bag and in bulk, as one-time orders or on a recurring schedule matched to your batch cycle.'],
  ['Is feed included in the contract farming schemes?', 'Feed costs are part of the farmer’s responsibilities under the contract farming models — but partners can source feed through Energy Eggs so it stays aligned with the programme’s SOPs and quality standards.'],
  ['What should I share to get a feed quote?', 'Your breed, bird count, flock age, farming model and location. Our team responds with a feed plan and a clear quote.'],
]

export default function Feed() {
  return (
    <>
      <PageHero eyebrow="Poultry Feed Supply" title={<>Feed for your <span>birds.</span></>}>
        <p>
          Energy Eggs sells poultry feed to farmers and poultry farms — feed for Sonali, Aseel,
          Kadaknath and Fiyoumi birds at every growth stage, supplied in bulk alongside our
          equipment and farm development services.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What We Sell</span>
            <h2>Feed for every stage of the bird</h2>
            <p>
              From a chick's first feed to grower and finisher rations — matched to the breed and the
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
          <Reveal className="chain wrap-chain" style={{ marginTop: 56 }}>
            {FEED_STAGES.map((s, i) => (
              <span key={s} className="chain-item">
                <span>{s}</span>
                {i < FEED_STAGES.length - 1 && <span className="ar">→</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Approach</span>
            <h2>Right feed. Right stage. Right system.</h2>
          </Reveal>
          <div className="features features-4">
            {APPROACH.map(([name, text]) => (
              <Reveal key={name} className="feature">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How Supply Works</span>
            <h2>From flock details to scheduled delivery</h2>
          </Reveal>
          <div className="steps steps-5">
            {SUPPLY_STEPS.map(([num, title, text]) => (
              <Reveal key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
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
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">One Ecosystem</span>
            <h2>Feed works better with the rest</h2>
            <p>Birds, feed, equipment and farming programmes — designed to be sourced together.</p>
          </Reveal>
          <div className="cards-3">
            {ECOSYSTEM_LINKS.map(([tag, title, text, cta, to]) => (
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

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Feed supply, answered</h2>
          </Reveal>
          <Reveal className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
          <MiniCta
            title="Order feed for your farm"
            text="Tell us your breed, bird count and farming model — and we can supply the right feed on a regular schedule, by the bag or in bulk."
            cta="Enquire for Feed"
            source="Feed Enquiry"
          />
        </div>
      </section>
    </>
  )
}
