import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'
import VolumeCommitment from '../components/VolumeCommitment'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Energy Eggs" title={<>Building the next generation of desi poultry <span>supply.</span></>} />

      <section>
        <div className="wrap">
          <Reveal className="about-copy">
            <p>
              Energy Eggs was created around a simple opportunity: build a more organized connection
              between poultry farmers and the businesses that depend on reliable poultry supply.
            </p>
            <p>
              We are developing a B2B ecosystem around desi birds, specialty eggs, farm
              infrastructure, farm development and contract farming.
            </p>
            <p>
              Our long-term objective is to build greater control, visibility and consistency across
              the poultry value chain while creating scalable opportunities for both farmers and B2B
              customers.
            </p>
          </Reveal>
          <MiniCta
            title="Let's build your poultry supply."
            text="Whether you need birds, eggs, equipment, a complete farm or a contract farming partnership — tell us what you are looking for."
            cta="Get in Touch"
          />
        </div>
      </section>

      <VolumeCommitment alt />
    </>
  )
}
