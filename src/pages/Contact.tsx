import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import EnquiryForm from '../components/EnquiryForm'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact / B2B Enquiry" title={<>Let's build your poultry <span>supply.</span></>}>
        <p>
          Whether you need birds, eggs, equipment, a complete farm or a contract farming
          partnership, tell us what you are looking for.
        </p>
      </PageHero>

      <section>
        <div className="wrap">
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
