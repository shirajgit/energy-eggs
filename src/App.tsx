import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Birds from './pages/Birds'
import Eggs from './pages/Eggs'
import Equipment from './pages/Equipment'
import Feed from './pages/Feed'
import FarmDevelopment from './pages/FarmDevelopment'
import ContractFarming from './pages/ContractFarming'
import B2BSupply from './pages/B2BSupply'
import RateCard from './pages/RateCard'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/eggs" element={<Eggs />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/farm-development" element={<FarmDevelopment />} />
          <Route path="/contract-farming" element={<ContractFarming />} />
          <Route path="/farmer-partners" element={<Navigate to="/contract-farming" replace />} />
          <Route path="/b2b-supply" element={<B2BSupply />} />
          <Route path="/rate-card" element={<RateCard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
