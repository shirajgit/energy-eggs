// Sends form submissions to the EEdashboard backend.
// Override with VITE_EE_API_URL in .env (e.g. http://localhost:3000 for local dev).
const API_URL: string = import.meta.env.VITE_EE_API_URL || 'https://ee-dashboard-server.vercel.app'

export type EnquiryInput = {
  source: string
  name: string
  phone: string
  email?: string
  details?: Record<string, string>
}

// Fire-and-forget: the mailto handoff must never be blocked by the API being down.
export function submitEnquiry(input: EnquiryInput): void {
  try {
    void fetch(`${API_URL}/api/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // ignore — enquiry still goes out via email
  }
}
