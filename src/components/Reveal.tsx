import { useEffect, useRef } from 'react'
import type { ReactNode, RefObject } from 'react'

export default function Reveal({ children, className = '', tag = 'div', ...rest }: {
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
