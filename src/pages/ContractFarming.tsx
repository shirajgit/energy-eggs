import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'

const MODELS = [
  {
    id: 'pasture-raised',
    label: 'Pasture-Raised',
    name: 'Sonali Pasture-Raised Contract Farming Model',
    tag: 'Designed for premium Sonali egg production under a pasture-based farming system.',
    specs: [
      ['Land Requirement', 'Approximately 5 acres, including a dedicated pasture area.'],
      ['Shed Requirement', 'Approximately 8,000 sq. ft., with construction to commence after approval of the farm design by Energy Eggs Pvt Ltd.'],
      ['Batch Size', '5,000 birds per batch'],
      ['Rearing Cycle', 'Approximately 11–12 months'],
      ['Bird Cost', '₹550 per bird for 18-week-old ready-to-lay birds.'],
      ['Egg Procurement', '₹9 per A-grade egg under the proposed fixed-price model.'],
      ['Payment', 'Payments will be processed every 15 days from the invoice, subject to the agreed quality and procurement terms.'],
      ['Flock Replacement / Buyback', 'At the completion of each batch, the flock will be taken back at the agreed rate of ₹250/kg, subject to the terms and conditions of the final agreement.'],
      ['Energy Eggs Pvt Ltd Contribution', '₹100 per bird as a contribution/subsidy under the scheme.'],
      ['Contract Period', '1 year, renewable by mutual agreement'],
    ],
    farmer: [
      'Land and pasture development',
      'Shed construction',
      'Feed costs',
      'Electricity',
      'Labour',
      'Other farm operating expenses',
      'Insurance',
      'Statutory approvals/licences, where applicable',
      'Day-to-day farm management as per Energy Eggs Pvt Ltd guidelines',
    ],
    support: [
      'Farm design and technical planning',
      'Farming SOPs',
      'Training',
      'Technology and technical guidance',
      'Veterinary supervision',
      'Flock-management guidance',
      'Egg collection/pickup logistics',
      'Quality standards and monitoring',
    ],
  },
  {
    id: 'deep-litter',
    label: 'Deep Litter',
    name: 'Sonali Deep Litter Contract Farming Model',
    tag: 'Suitable if you prefer to operate the farm without the larger pasture requirement. Birds are reared under a deep-litter system, following Energy Eggs Pvt Ltd approved farming, management and biosecurity protocols.',
    specs: [
      ['Land Requirement', 'Approximately 25,000 sq. ft.'],
      ['Shed Requirement', 'Approximately 8,000 sq. ft., with construction to commence after approval of the farm design by Energy Eggs Pvt Ltd.'],
      ['Batch Size', '5,000 birds per batch'],
      ['Rearing Cycle', 'Approximately 11–12 months'],
      ['Bird Cost', '₹550 per bird for 18-week-old ready-to-lay birds.'],
      ['Egg Procurement', '₹7 per A-grade egg under the proposed fixed-price model.'],
      ['Payment', 'Payments will be processed every 15 days from the invoice, subject to the agreed quality and procurement terms.'],
      ['Flock Replacement / Buyback', 'At the end of the production cycle, the birds can be taken back at the agreed rate of ₹200/kg, subject to the final contract terms.'],
      ['Energy Eggs Pvt Ltd Contribution', '₹100 per bird as a contribution/subsidy under the scheme.'],
      ['Contract Period', '1 year, renewable by mutual agreement'],
    ],
    farmer: [
      'Land',
      'Shed construction',
      'Feed',
      'Labour',
      'Electricity',
      'Water and litter',
      'Farm maintenance',
      'Other miscellaneous operating expenses',
      'Insurance',
      'Required approvals and licences',
      'Day-to-day flock management',
    ],
    support: [
      'Farm and shed design',
      'Technical training',
      'Farming SOPs',
      'Production and flock-management protocols',
      'Veterinary supervision',
      'Technical monitoring',
      'Egg quality standards',
      'Egg pickup/logistics support',
      'Guidance throughout the production cycle',
    ],
  },
]

const PARTNER_FLOW = [
  'Farm Design', 'Construction', 'Equipment', 'Bird Programme', 'Farming Model',
  'Technical Support', 'Procurement / Market Linkage',
]

const TERMS = [
  'All terms, guidelines, rates, and figures mentioned herein are indicative and subject to the execution of a final, legally binding bilateral agreement between Energy Eggs Pvt Ltd and the farmer.',
  'Continued eligibility under this scheme is contingent upon strict adherence to standard operating procedures (SOPs), quality benchmarks, and management guidelines prescribed by Energy Eggs Pvt Ltd from time to time.',
  'Energy Eggs Pvt Ltd reserves the right to amend, update, or modify the scheme terms, technical specifications, and operational parameters with prior notice.',
]

export default function ContractFarming() {
  return (
    <>
      <PageHero eyebrow="Contract Farming" title={<>Grow with <span>Energy Eggs.</span></>}>
        <p>
          We partner with farmers to create a structured desi poultry production network. Instead of
          every farmer working independently, Energy Eggs can provide a defined production framework
          and market linkage.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Two Core Production Models</span>
            <h2>Choose your farming model</h2>
            <p>
              Choose the model that fits your land and how you want to run your farm. Both are
              structured Sonali egg production schemes with defined procurement, payment and buyback
              terms.
            </p>
          </Reveal>

          {MODELS.map((m, i) => (
            <div key={m.id} id={m.id} className="model-block">
              <Reveal className="model-title">
                <h2><span className="mn">{i + 1}.</span> {m.label}</h2>
              </Reveal>
              <Reveal className="model">
              <div className="model-top">
                <h3>{m.name}</h3>
                <p>{m.tag}</p>
              </div>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Specification Details</th>
                  </tr>
                </thead>
                <tbody>
                  {m.specs.map(([param, detail]) => (
                    <tr key={param}>
                      <td>{param}</td>
                      <td>{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="model-grid">
                <div>
                  <h4>Farmer's Responsibilities</h4>
                  <ul className="story-list">
                    {m.farmer.map((p) => (
                      <li key={p}><span className="chk">✓</span> {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Energy Eggs Pvt Ltd Support</h4>
                  <ul className="story-list">
                    {m.support.map((p) => (
                      <li key={p}><span className="chk">✓</span> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </Reveal>
            </div>
          ))}

          <Reveal className="terms">
            <h4>Terms &amp; Conditions</h4>
            <ul>
              {TERMS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="alt" id="farmer-partners">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Farmer Partners</span>
            <h2>Your land. Our ecosystem.</h2>
            <p>Have land and want to enter desi poultry farming? Energy Eggs can help you explore:</p>
          </Reveal>
          <Reveal className="chain wrap-chain">
            {PARTNER_FLOW.map((s, i) => (
              <span key={s} className="chain-item">
                <span>{s}</span>
                {i < PARTNER_FLOW.length - 1 && <span className="ar">→</span>}
              </span>
            ))}
          </Reveal>
          <MiniCta
            title="Who can partner?"
            text="Farmers with suitable land who are willing to operate according to the production, welfare, biosecurity and quality requirements of the applicable Energy Eggs programme."
            cta="Become a Farmer Partner"
          />
        </div>
      </section>
    </>
  )
}
