// Live product catalogue from the EEdashboard backend. Pages keep their
// static data as an instant fallback; once the API responds, dashboard edits
// (rates, notes, active/hidden, new products) take over.
import { useEffect, useState } from 'react'

const API_URL: string = import.meta.env.VITE_EE_API_URL || 'https://ee-dashboard-server.vercel.app'

export type ApiProduct = {
  id: string
  name: string
  category: string
  subcategory: string
  rate: string
  unit: string
  active: boolean
  notes: string
  sortOrder: number
}

let cached: ApiProduct[] | null = null

export function useLiveProducts(): ApiProduct[] | null {
  const [products, setProducts] = useState<ApiProduct[] | null>(cached)

  useEffect(() => {
    if (cached) return
    let alive = true
    fetch(`${API_URL}/api/products`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))))
      .then((data: ApiProduct[]) => {
        cached = data
        if (alive) setProducts(data)
      })
      .catch(() => {}) // keep the static fallback
    return () => {
      alive = false
    }
  }, [])

  return products
}

// "per kg" -> "/kg", "per piece" -> "/piece"
export const shortUnit = (unit: string): string =>
  unit ? `/${unit.replace(/^per\s+/i, '')}` : ''
