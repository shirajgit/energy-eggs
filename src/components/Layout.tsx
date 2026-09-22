import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from './Logo'

const SERVICES = [
  ['/birds', 'Birds'],
  ['/eggs', 'Eggs'],
  ['/equipment', 'Farm Equipments'],
  ['/feed', 'Feed'],
  ['/farm-development', 'Farm Development'],
]

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const onServicePage = SERVICES.some(([to]) => to === pathname)

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ScrollToTop />

      {/* NAV */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="wrap">
          <nav>
            <Logo />
            <div className={`navlinks ${menuOpen ? 'open' : ''}`}>
              <NavLink to="/" end onClick={closeAll}>Home</NavLink>

              <div className={`has-dropdown ${servicesOpen ? 'open' : ''}`} ref={dropRef}>
                <button
                  type="button"
                  className={`drop-btn ${onServicePage ? 'active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((o) => !o)}
                >
                  Services <span className="caret" aria-hidden="true">▾</span>
                </button>
                <div className="dropdown">
                  {SERVICES.map(([to, label]) => (
                    <NavLink key={to} to={to} onClick={closeAll}>{label}</NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/contract-farming" onClick={closeAll}>Contract Farming</NavLink>
              <NavLink to="/b2b-supply" onClick={closeAll}>B2B</NavLink>
              <NavLink to="/about" onClick={closeAll}>About Us</NavLink>
              <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>
            </div>
            <Link to="/contact" className="btn nav-cta">Get B2B Pricing</Link>
            <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
              ☰
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo light />
              <p>
                The B2B desi poultry ecosystem — birds, eggs, farms, equipment and partnerships,
                from farm development to reliable B2B supply.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <Link to="/birds">Whole Birds</Link>
              <Link to="/eggs">Desi Eggs</Link>
              <Link to="/equipment">Farm Equipments</Link>
              <Link to="/feed">Feed</Link>
              <Link to="/farm-development">Farm Development</Link>
            </div>
            <div>
              <h4>Partnerships</h4>
              <Link to="/contract-farming">Contract Farming</Link>
              <Link to="/b2b-supply">B2B Supply</Link>
              <Link to="/about">About Us</Link>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <a href="mailto:hello@energyeggs.in">hello@energyeggs.in</a>
              <a href="https://www.energyeggs.in">www.energyeggs.in</a>
              <Link to="/contact">B2B Enquiry</Link>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Energy Eggs®. The B2B Desi Poultry Ecosystem.</span>
            <span>Sonali · Kadaknath · Aseel</span>
          </div>
        </div>
      </footer>
    </>
  )
}
