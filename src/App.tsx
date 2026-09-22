import { useEffect, useRef, useState } from 'react'
import type { ReactNode, RefObject } from 'react'
import logo from './assets/logo.png'

/* ----------------------------- Logo ----------------------------- */
type LogoProps = { light?: boolean }

function Logo({ light = false }: LogoProps) {
  return (
    <a href="#top" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Energy Eggs — Nourishing Lives. Naturally.">
      <img src={logo} alt="Energy Eggs" />
    </a>
  )
}

/* ----------------------- Sprinting Hen Avatar ----------------------- */
function SprintingHen() {
  return (
    <div className="hen-scene" aria-hidden="true">
      <svg className="hen-svg" viewBox="0 0 280 240" fill="none">
        {/* speed lines */}
        <g stroke="#A3755F" strokeWidth={8} strokeLinecap="round">
          <line className="sl sl1" x1={10} y1={90} x2={64} y2={90} />
          <line className="sl sl2" x1={0} y1={122} x2={58} y2={122} />
          <line className="sl sl3" x1={16} y1={152} x2={68} y2={152} />
        </g>

        {/* energy bolts — big & bold */}
        <g stroke="#414042" strokeWidth={5} strokeLinejoin="round">
          <path className="bolt bolt1" d="M232 22l-21 30h14l-10 28 26-36h-14l12-22z" fill="#EE6620" />
          <path className="bolt bolt2" d="M58 30l-17 25h11l-8 23 21-29h-11l10-19z" fill="#F7A32B" />
          <path className="bolt bolt3" d="M254 112l-15 22h10l-7 20 19-25h-10l9-17z" fill="#F7A32B" />
          <path className="bolt bolt4" d="M42 162l-13 19h9l-6 18 16-22h-9l8-15z" fill="#EE6620" />
        </g>

        {/* ground shadow */}
        <ellipse className="hen-shadow" cx={145} cy={218} rx={62} ry={9} fill="rgba(65,64,66,.18)" />

        {/* dust puffs */}
        <g fill="#A3755F">
          <circle className="dust dust1" cx={88} cy={206} r={7} />
          <circle className="dust dust2" cx={102} cy={214} r={5} />
        </g>

        {/* legs (behind body) */}
        <g className="leg leg-back" stroke="#414042" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M140 168l-14 22-7 20" />
          <path d="M119 210l-12 4M119 210l1 10" />
        </g>
        <g className="leg leg-front" stroke="#414042" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M158 166l11 25 8 18" />
          <path d="M177 209l12 2M177 209l-2 10" />
        </g>

        {/* hen — leaning hard into the sprint */}
        <g className="hen">
          {/* tail feathers — chunky, swept back */}
          <path
            d="M100 102C74 88 46 88 30 100c18 9 52 8 70 6z"
            fill="#EE6620" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          <path
            d="M98 128C68 118 42 122 28 136c18 5 46 0 62-2z"
            fill="#F7A32B" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* body — orange egg like the logo, tilted into the run */}
          <ellipse
            cx={140} cy={130} rx={60} ry={46}
            transform="rotate(-16 140 130)"
            fill="#EE6620" stroke="#414042" strokeWidth={8}
          />
          {/* wing — swept back for speed */}
          <path
            className="wing"
            d="M112 126c10-16 36-20 58-8-4 16-24 26-42 22-8-2-13-8-16-14z"
            fill="#F7A32B" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* neck — stretched forward */}
          <path
            d="M182 102c8-14 16-24 26-32l18 18c-11 7-20 16-27 27z"
            fill="#fff" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* head — thrust forward */}
          <circle cx={216} cy={72} r={22} fill="#fff" stroke="#414042" strokeWidth={8} />
          {/* comb — sitting on the crown */}
          <path
            d="M202 58c-6-12 3-18 10-12 2-11 14-11 16-2 10-6 18 4 9 14-10 6-24 6-35 0z"
            fill="#fff" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* beak — sharp, overlapping the head */}
          <path d="M232 63l26 9-22 11z" fill="#EE6620" stroke="#414042" strokeWidth={5} strokeLinejoin="round" />
          {/* wattle */}
          <path d="M228 90q7 10-1 15-8-5-5-15z" fill="#EE6620" stroke="#414042" strokeWidth={4} />
          {/* determined brow */}
          <path d="M211 59l14 5" stroke="#414042" strokeWidth={5} strokeLinecap="round" />
          {/* eye */}
          <circle cx={220} cy={70} r={4} fill="#414042" />
        </g>
      </svg>
    </div>
  )
}

/* ----------------------------- Reveal ----------------------------- */
function Reveal({ children, className = '', tag = 'div', ...rest }: {
  children: ReactNode
  className?: string
  tag?: 'div' | 'li'
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const Tag = tag as 'div'
  return (
    <Tag ref={ref as RefObject<HTMLDivElement>} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

/* ----------------------------- Data ----------------------------- */
const FEATURES = [
  {
    title: 'Natural Nutrition',
    text: 'Wholesome eggs for healthier lives — nutritious, clean and naturally raised.',
    icon: <path d="M12 2C7 7 6 11 6 14a6 6 0 0012 0c0-3-1-7-6-12z" />,
  },
  {
    title: 'Quality Assured',
    text: 'Graded for consistency and freshness, so every carton meets the same standard.',
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Reliable Supply',
    text: 'Consistent volumes for your business — dependable delivery you can plan around.',
    icon: (
      <>
        <path d="M3 12l4-4 5 3 5-5 4 3" />
        <path d="M3 18h18" />
      </>
    ),
  },
  {
    title: 'B2B Focus',
    text: 'Partnering with farms, retailers, food service and institutions at scale.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
        <path d="M15 20c0-2 2-3.5 4-3.5s3 1.5 3 3.5" />
      </>
    ),
  },
]

const RATE_ROWS = [
  ['5,000 – 9,999', '₹12.00', '₹11.75', '₹11.00'],
  ['10,000 – 19,999', '₹11.75', '₹11.50', '₹11.25'],
  ['20,000 – 49,999', '₹11.50', '₹11.25', '₹11.00'],
  ['50,000 – 99,999', '₹11.25', '₹11.00', '₹10.75'],
  ['100,000+', 'Custom', 'Custom', 'Custom'],
]

const ADDONS = [
  ['Unwashed', '₹0.00'],
  ['Washed + Graded', '₹0.50'],
  ['Washed + Graded + Packed', '₹1.00'],
]

const VALUES = [
  ['01', 'Ethical', 'Animal welfare and fair farming come first, always.'],
  ['02', 'Traceable', 'Know exactly where every egg comes from.'],
  ['03', 'Nutritious', 'Wholesome nutrition for healthier lives.'],
  ['04', 'Sustainable', "Farming that protects tomorrow's food system."],
]

const STORY_POINTS = [
  'Ethically raised, free from unnecessary additives',
  'Fully traceable from farm to carton',
  'Sustainable practices that respect land and livestock',
  'Graded and quality-checked before every dispatch',
]

/* ----------------------------- App ----------------------------- */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <header id="top">
        <div className="wrap">
          <nav>
            <Logo />
            <div className={`navlinks ${menuOpen ? 'open' : ''}`}>
              <a href="#why" onClick={closeMenu}>Why Us</a>
              <a href="#pricing" onClick={closeMenu}>Rate Card</a>
              <a href="#story" onClick={closeMenu}>Our Farms</a>
              <a href="#values" onClick={closeMenu}>Values</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
            <a href="#contact" className="btn nav-cta">Get a Quote</a>
            <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
              ☰
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal className="in">
              <div className="badges">
                <span className="pill">Farm Raised</span>
                <span className="pill">Ethical &amp; Traceable</span>
                <span className="pill">Honest Food</span>
              </div>
              <span className="script" style={{ fontSize: '1.3rem' }}>
                Farm Fresh For a Healthier Tomorrow
              </span>
              <h1>
                Good Eggs.
                <br />
                <span>Brighter</span> Tomorrows.
              </h1>
              <p className="tag">
                Premium quality eggs from real farms — nourishing lives, naturally. Reliable B2B
                supply for retailers, food service &amp; institutions.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn">View Rate Card</a>
                <a href="#story" className="btn ghost">Our Story</a>
              </div>
              <div className="hero-stats">
                <div><span className="n">100%</span><small>Traceable</small></div>
                <div><span className="n">4 Grades</span><small>A · A+B · B</small></div>
                <div><span className="n">Bulk</span><small>5k–100k+ Eggs</small></div>
              </div>
            </Reveal>
            <Reveal className="in hero-art">
              <SprintingHen />
              <div className="float-badge fb-1"><span className="dot">⚡</span> Full of Energy</div>
              <div className="float-badge fb-2"><span className="dot">♥</span> Natural Nutrition</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span>Real Farms</span>
              <span>Real Nutrition</span>
              <span>Real Partnerships</span>
              <span>Nourishing Lives Naturally</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHY / FEATURES */}
      <section id="why">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Why Energy Eggs</span>
            <h2>Wholesome eggs, honest partnerships</h2>
            <p>Everything we do is built around one promise — premium quality eggs for a healthier tomorrow.</p>
          </Reveal>
          <div className="features">
            {FEATURES.map((f) => (
              <Reveal key={f.title} className="feature">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    {f.icon}
                  </svg>
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Ex-Farm Prices · ₹ per egg</span>
            <h2>Egg Rate Card</h2>
            <p>Transparent, tiered pricing that rewards volume. Premium quality eggs for a healthier tomorrow.</p>
          </Reveal>
          <div className="price-grid">
            <Reveal className="rate-card">
              <div className="rate-top"><h3>Ex-Farm Prices</h3><p>₹ per egg</p></div>
              <table>
                <thead>
                  <tr>
                    <th>Monthly Commitment<small>(eggs)</small></th>
                    <th>A-Grade<small>₹ / egg</small></th>
                    <th>A + B Grade<small>₹ / egg</small></th>
                    <th>B Grade<small>₹ / egg</small></th>
                  </tr>
                </thead>
                <tbody>
                  {RATE_ROWS.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className="price">{row[1]}</td>
                      <td className="price">{row[2]}</td>
                      <td className="price">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <div className="addons">
              <Reveal className="addon-card">
                <div className="rate-top"><h3>Processing &amp; Add-on Charges</h3><p>₹ per egg</p></div>
                <table>
                  <thead>
                    <tr><th>Service</th><th>Charge<small>₹ / egg</small></th></tr>
                  </thead>
                  <tbody>
                    {ADDONS.map((a) => (
                      <tr key={a[0]}><td>{a[0]}</td><td className="price">{a[1]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
              <Reveal className="addon-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M3 8l9-5 9 5v8l-9 5-9-5z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
                <p>
                  <b>Custom packing, branding &amp; private label</b> options available for bulk
                  orders. Let's build a supply line that carries your name.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story">
        <div className="wrap">
          <div className="split">
            <Reveal className="story-art">
              <svg className="barn" viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M20 70L100 30l80 40v70H20z" />
                <path d="M75 140v-45h50v45" />
                <path d="M20 70h160M100 30v-14" />
                <path d="M30 150h140" strokeWidth={4} />
              </svg>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Real Farms · Real Nutrition · Real Partnerships</span>
              <h2>From honest farms to your business</h2>
              <p style={{ color: 'var(--brown-soft)', marginTop: 14 }}>
                Energy Eggs works hand-in-hand with dedicated farmers who share our belief that good
                food starts with good practice. Every egg is ethical, traceable and raised with
                care — so what reaches your shelf is nutrition you can stand behind.
              </p>
              <ul className="story-list">
                {STORY_POINTS.map((p) => (
                  <li key={p}><span className="chk">✓</span> {p}</li>
                ))}
              </ul>
              <a href="#contact" className="btn" style={{ marginTop: 30 }}>Partner With Us</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="values">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow" style={{ color: 'var(--orange-light)' }}>What we stand for</span>
            <h2>Good Eggs, Greater Possibilities</h2>
            <p>Four principles guide every carton we send out the door.</p>
          </Reveal>
          <div className="vgrid">
            {VALUES.map(([num, title, text]) => (
              <Reveal key={num} className="value">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="wrap">
          <Reveal className="cta-band">
            <span className="script" style={{ color: '#fff', fontSize: '1.3rem' }}>
              Good Eggs, Greater Possibilities
            </span>
            <h2>Let's build a healthier food system together</h2>
            <p>Ready to secure a reliable, premium egg supply? Get a custom quote for your monthly volume today.</p>
            <a href="mailto:hello@energyeggs.in" className="btn">Request a Quote</a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo light />
              <p>
                Nourishing lives, naturally. Premium quality eggs for a healthier tomorrow — from
                real farms to real partnerships.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <a href="#why">Why Us</a>
              <a href="#pricing">Rate Card</a>
              <a href="#story">Our Farms</a>
              <a href="#values">Values</a>
            </div>
            <div>
              <h4>Services</h4>
              <a href="#pricing">Unwashed</a>
              <a href="#pricing">Washed &amp; Graded</a>
              <a href="#pricing">Packed &amp; Labelled</a>
              <a href="#contact">Private Label</a>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <a href="mailto:hello@energyeggs.in">hello@energyeggs.in</a>
              <a href="https://www.energyeggs.in">www.energyeggs.in</a>
              <a href="#contact">Request a bulk quote</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Energy Eggs®. Nourishing Lives. Naturally.</span>
            <span>Ethical · Traceable · Nutritious · Sustainable</span>
          </div>
        </div>
      </footer>
    </>
  )
}
