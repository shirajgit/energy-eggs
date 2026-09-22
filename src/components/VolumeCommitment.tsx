import Reveal from './Reveal'
import MiniCta from './MiniCta'

const COMMITMENT = [
  'Vendor commits to a monthly purchase volume.',
  'The committed volume determines your preferential price slab.',
  'Tolerance is 90%.',
  'A Commitment Advance (25%) is collected against the agreed monthly commitment.',
  'If the actual lifting is lower than the committed volume, pricing will be adjusted to the applicable volume slab for that month. [Deduction is made in the Commitment Advance. Vendor to replenish the advance before placing the next order.]',
  'If Energy Eggs is unable to fulfil the committed volume due to production or supply constraints, the agreed price will remain protected.',
  'Grade, processing, packing and delivery requirements will be agreed upfront.',
]

export default function VolumeCommitment({ alt = false }: { alt?: boolean }) {
  return (
    <section id="volume-commitment" className={alt ? 'alt' : ''}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Energy Eggs Program</span>
          <h2>Priority Supply &amp; Volume Commitment</h2>
          <p>
            The objective is simple: your commitment helps us plan production and supply, while
            we offer you better pricing and greater supply assurance.
          </p>
        </Reveal>
        <Reveal className="panel narrow">
          <h3>Under the program</h3>
          <ul className="story-list">
            {COMMITMENT.map((c) => (
              <li key={c}><span className="chk">✓</span> {c}</li>
            ))}
          </ul>
        </Reveal>
        <MiniCta
          title="Ready to commit a monthly volume?"
          text="Tell us your product, monthly volume and grade, processing, packing and delivery requirements — and we'll structure your preferential price slab."
          cta="Start a Volume Commitment"
        />
      </div>
    </section>
  )
}
