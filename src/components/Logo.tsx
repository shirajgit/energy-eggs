import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

type LogoProps = { light?: boolean }

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Energy Eggs — The B2B Desi Poultry Ecosystem">
      <img src={logo} alt="Energy Eggs" />
    </Link>
  )
}
