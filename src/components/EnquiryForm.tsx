import { useState } from 'react'

const INTERESTS = [
  'Whole Birds', 'Desi Eggs', 'Poultry Equipment', 'Farm Construction',
  'Pasture Farm Planning', 'Contract Farming', 'Farmer Partnership', 'B2B Distribution',
]

export default function EnquiryForm() {
  const [interests, setInterests] = useState<string[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [breed, setBreed] = useState('Sonali')
  const [quantity, setQuantity] = useState('Weekly')
  const [location, setLocation] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [notes, setNotes] = useState('')

  const toggleInterest = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  const handleSubmit = () => {
    const body = [
      `Name: ${name || '—'}`,
      `Phone: ${phone || '—'}`,
      `Interested in: ${interests.join(', ') || '—'}`,
      `Breed: ${breed}`,
      `Quantity: ${quantity}`,
      `Location: ${location || '—'}`,
      `Business type: ${businessType || '—'}`,
      `Additional requirements: ${notes || '—'}`,
    ].join('\n')
    window.location.href = `mailto:hello@energyeggs.in?subject=${encodeURIComponent('B2B Enquiry — Energy Eggs')}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="enquiry" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
      <fieldset className="enq-block">
        <legend>I am interested in</legend>
        <div className="check-grid">
          {INTERESTS.map((i) => (
            <label key={i} className={`check ${interests.includes(i) ? 'on' : ''}`}>
              <input
                type="checkbox"
                checked={interests.includes(i)}
                onChange={() => toggleInterest(i)}
              />
              {i}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="enq-block">
        <legend>My requirement</legend>
        <div className="field-grid">
          <label>
            Your Name
            <input type="text" value={name} placeholder="Full name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Phone
            <input type="tel" value={phone} placeholder="+91 …" onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            Breed
            <select value={breed} onChange={(e) => setBreed(e.target.value)}>
              <option>Sonali</option>
              <option>Aseel</option>
              <option>Kadaknath</option>
              <option>Fiyoumi</option>
              <option>Quail</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Quantity
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Contract</option>
            </select>
          </label>
          <label>
            Location
            <input type="text" value={location} placeholder="City / District / State" onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label>
            Business Type
            <input type="text" value={businessType} placeholder="Restaurant, retailer, distributor…" onChange={(e) => setBusinessType(e.target.value)} />
          </label>
          <label className="full">
            Additional Requirements
            <textarea rows={4} value={notes} placeholder="Volumes, specifications, delivery frequency, timelines…" onChange={(e) => setNotes(e.target.value)} />
          </label>
        </div>
      </fieldset>

      <button type="submit" className="btn btn-lg">Get a B2B Quote</button>
    </form>
  )
}
