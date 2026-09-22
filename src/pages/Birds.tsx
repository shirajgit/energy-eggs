import { useState } from 'react'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import MiniCta from '../components/MiniCta'
import sonaliImg from '../assets/sonali.png'
import aseelImg from '../assets/aseel.png'
import kadaknathImg from '../assets/kadaknath.png'
import fiyoumiImg from '../assets/fiyoumi.png'

const BREEDS = [
  ['Sonali', '₹500 /kg', 'A commercially relevant coloured-bird category for broader poultry programmes.', sonaliImg],
  ['Aseel', '₹700 /kg', 'A distinctive desi poultry category with strong traditional and culinary positioning.', aseelImg],
  ['Kadaknath', '₹750 /kg', 'An indigenous breed positioned for specialty and premium poultry markets.', kadaknathImg],
  ['Fiyoumi', '₹1,500 /kg', 'A rare specialty breed for premium and niche poultry programmes.', fiyoumiImg],
]

const BIRD_CUSTOMERS = [
  'Meat retailers', 'Restaurants', 'Hotels', 'QSRs', 'Caterers', 'Distributors',
  'Poultry businesses', 'Institutional buyers', 'Food businesses',
]

type RateRow = [week: string, age: string, male: number, female: number]

const RATE_CARDS: { name: string; perKg: string; rows: RateRow[] }[] = [
  {
    name: 'Sonali',
    perKg: '₹500 per kg',
    rows: [
      ['Day old chicks', '–', 43, 33],
      ['1st week', '1–7 days', 72, 59],
      ['2nd week', '8–14 days', 101, 85],
      ['3rd week', '15–21 days', 130, 111],
      ['4th week', '22–28 days', 159, 137],
      ['5th week', '29–35 days', 188, 163],
      ['6th week', '36–42 days', 217, 189],
      ['7th week', '43–49 days', 246, 215],
      ['8th week', '50–56 days', 275, 241],
      ['9th week', '57–63 days', 304, 267],
      ['10th week', '64–70 days', 333, 293],
      ['11th week', '71–77 days', 362, 319],
      ['12th week', '78–84 days', 391, 345],
      ['13th week', '85–91 days', 420, 371],
      ['14th week', '92–98 days', 449, 397],
      ['15th week', '99–105 days', 478, 423],
      ['16th week', '106–112 days', 507, 449],
      ['17th week', '113–119 days', 536, 475],
      ['18th week', '120–126 days', 565, 501],
      ['19th week', '127–133 days', 594, 527],
      ['20th week', '134–140 days', 623, 553],
      ['After 20 weeks', '–', 625, 555],
    ],
  },
  {
    name: 'Aseel',
    perKg: '₹700 per kg',
    rows: [
      ['Day old chicks', '–', 60, 55],
      ['1st week', '1–7 days', 100, 93],
      ['2nd week', '8–14 days', 140, 131],
      ['3rd week', '15–21 days', 180, 169],
      ['4th week', '22–28 days', 220, 207],
      ['5th week', '29–35 days', 260, 245],
      ['6th week', '36–42 days', 300, 283],
      ['7th week', '43–49 days', 340, 321],
      ['8th week', '50–56 days', 380, 359],
      ['9th week', '57–63 days', 420, 397],
      ['10th week', '64–70 days', 460, 435],
      ['11th week', '71–77 days', 500, 473],
      ['12th week', '78–84 days', 540, 511],
      ['13th week', '85–91 days', 580, 549],
      ['14th week', '92–98 days', 620, 587],
      ['15th week', '99–105 days', 660, 625],
      ['16th week', '106–112 days', 700, 663],
      ['17th week', '113–119 days', 740, 701],
      ['18th week', '120–126 days', 780, 739],
      ['19th week', '127–133 days', 820, 777],
      ['20th week', '134–140 days', 860, 815],
      ['After 20 weeks', '–', 900, 850],
    ],
  },
  {
    name: 'Kadaknath',
    perKg: '₹750 per kg',
    rows: [
      ['Day old chicks', '–', 60, 55],
      ['1st week', '1–7 days', 95, 88],
      ['2nd week', '8–14 days', 130, 121],
      ['3rd week', '15–21 days', 165, 154],
      ['4th week', '22–28 days', 200, 187],
      ['5th week', '29–35 days', 235, 220],
      ['6th week', '36–42 days', 270, 253],
      ['7th week', '43–49 days', 305, 286],
      ['8th week', '50–56 days', 340, 319],
      ['9th week', '57–63 days', 375, 352],
      ['10th week', '64–70 days', 445, 418],
      ['12th week', '78–84 days', 480, 451],
      ['13th week', '85–91 days', 515, 484],
      ['14th week', '92–98 days', 550, 517],
      ['15th week', '99–105 days', 585, 550],
      ['16th week', '106–112 days', 620, 583],
      ['17th week', '113–119 days', 655, 616],
      ['18th week', '120–126 days', 690, 649],
      ['19th week', '127–133 days', 725, 682],
      ['20th week', '134–140 days', 760, 715],
      ['After 20 weeks', '–', 775, 725],
    ],
  },
]

export default function Birds() {
  const [active, setActive] = useState(0)
  const card = RATE_CARDS[active]

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
            <h2>Four focused desi categories</h2>
            <p>Traditionally raised. Naturally stronger. Exceptionally nutritious.</p>
          </Reveal>
          <div className="cards-2">
            {BREEDS.map(([name, rate, text, img]) => (
              <Reveal key={name} className="breed-card has-img">
                <div className="breed-img">
                  <img src={img} alt={`${name} bird`} loading="lazy" />
                </div>
                <div>
                  <h3>{name} <span className="breed-rate">{rate}</span></h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="chip-row">
            <h4>B2B Customers</h4>
            <div className="chips">
              {BIRD_CUSTOMERS.map((c) => <span key={c} className="pill">{c}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Country Chicken Rate Card</span>
            <h2>Live bird rates by age</h2>
            <p>Per-bird rates from day-old chicks to fully grown birds, for male and female.</p>
          </Reveal>

          <Reveal className="rate-tabs">
            {RATE_CARDS.map((c, i) => (
              <button
                key={c.name}
                type="button"
                className={`rate-tab${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
              >
                {c.name}
              </button>
            ))}
          </Reveal>

          <Reveal className="rate-card model">
            <div className="model-top">
              <h3>{card.name}</h3>
              <p>Rate (₹) per bird · For orders less than 10 birds: {card.perKg}</p>
            </div>
            <div className="rate-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Age (Days)</th>
                    <th>Male (₹)</th>
                    <th>Female (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {card.rows.map(([week, age, male, female]) => (
                    <tr key={week}>
                      <td>{week}</td>
                      <td>{age}</td>
                      <td>{male}</td>
                      <td>{female}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal className="chip-row">
            <div className="chips">
              <span className="pill">Minimum order: 10 birds</span>
              <span className="pill">Orders under 10 birds billed per kg</span>
              <span className="pill">Fiyoumi: ₹1,500 per kg</span>
              <span className="pill">Quail (male): ₹200 per piece</span>
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
