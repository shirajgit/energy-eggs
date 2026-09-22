import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const SERVE = [
  ['Restaurants', 'Reliable poultry and egg supply for daily kitchen requirements.'],
  ['Hotels & Resorts', 'Scheduled supply with defined specifications.'],
  ['QSR Chains', 'Predictable volumes and standardized procurement.'],
  ['Meat Retailers', 'Whole birds and specialty desi poultry.'],
  ['Distributors', 'Wholesale supply for regional markets.'],
  ['Caterers', 'Bulk requirements for events and institutional catering.'],
  ['Supermarkets', 'Egg and poultry programmes according to retail requirements.'],
  ['Food Businesses', 'Structured procurement for recurring poultry requirements.'],
]

const PROCUREMENT_STEPS = [
  ['01', 'Select', 'Birds / Eggs / Equipment / Farm Development'],
  ['02', 'Define', 'Quantity • Breed • Specifications • Farming model • Location'],
  ['03', 'Plan', 'Daily / Weekly / Monthly / Contract requirement'],
  ['04', 'Quote', 'Our B2B team develops a commercial proposal.'],
  ['05', 'Supply', 'Scheduled procurement and delivery according to the agreed programme.'],
]

const QUALITY = [
  ['Source', 'Understanding where birds and eggs originate.'],
  ['Production', 'Defined farming and production programmes.'],
  ['Quality Control', 'Documented handling and quality processes applicable to the product.'],
  ['Batch Visibility', 'Maintaining source and batch information where supported.'],
  ['Supply', 'Structured procurement and delivery programmes.'],
]

export default function B2BSupply() {
  return (
    <>
      <PageHero eyebrow="B2B Procurement" title={<>Tell us what you need. We build the supply <span>around it.</span></>}>
        <p>
          Every business has a different requirement. That's why Energy Eggs is designed around
          commercial procurement rather than a one-size-fits-all catalogue.
        </p>
      </PageHero>

      {/* WHO WE SERVE */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Who We Serve</span>
            <h2>Built for businesses that depend on supply</h2>
          </Reveal>
          <div className="features features-4">
            {SERVE.map(([name, text]) => (
              <Reveal key={name} className="feature">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How It Works</span>
            <h2>From requirement to scheduled supply</h2>
          </Reveal>
          <div className="steps steps-5">
            {PROCUREMENT_STEPS.map(([num, title, text]) => (
              <Reveal key={num} className="step">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <MiniCta center cta="Request a Commercial Quote" />
        </div>
      </section>

      {/* QUALITY */}
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Quality &amp; Traceability</span>
            <h2>Quality is a system. Not a slogan.</h2>
            <p>Energy Eggs is building systems around every step of the supply chain.</p>
          </Reveal>
          <div className="features features-5">
            {QUALITY.map(([name, text]) => (
              <Reveal key={name} className="feature">
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
