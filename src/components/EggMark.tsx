export default function EggMark({ shell }: { shell: string }) {
  return (
    <svg viewBox="0 0 24 30" className="egg-mark" aria-hidden="true">
      <path d="M12 1.5C6.8 1.5 2.5 11 2.5 18a9.5 9.5 0 0 0 19 0c0-7-4.3-16.5-9.5-16.5z" fill={shell} stroke="rgba(65,64,66,.18)" strokeWidth="1" />
      <ellipse cx="8.6" cy="10.5" rx="2.2" ry="3.4" fill="rgba(255,255,255,.45)" transform="rotate(-18 8.6 10.5)" />
    </svg>
  )
}
