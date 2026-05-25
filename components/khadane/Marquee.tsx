'use client'

// ============================================================
// KHADANE™ — Marquee · v3.1 (Batch 08)
//
// Treatment B: Slim dark Tobacco institutional ribbon.
// ============================================================

import { useEffect, useState } from 'react'

interface MarqueeItem {
  code: string
  name: string
}

const DEFAULT_ITEMS: MarqueeItem[] = [
  { code: 'K-001', name: 'Kandla Grey' },
  { code: 'K-002', name: 'Autumn Brown' },
  { code: 'K-003', name: 'Raveena White' },
  { code: 'K-004', name: 'Kaansiya Red' },
  { code: 'K-005', name: 'Camel Dust' },
  { code: 'K-006', name: 'Sage Green' },
  { code: 'K-007', name: 'Teakwood' },
  { code: 'K-008', name: 'Mandana Red' },
  { code: 'K-009', name: 'Rainbow' },
  { code: 'K-010', name: 'Raj Blend' },
]

interface MarqueeProps {
  items?: MarqueeItem[]
}

export default function Marquee({ items = DEFAULT_ITEMS }: MarqueeProps) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const doubled = [...items, ...items]
  const mobileItems = items.slice(0, 3)

  const mobileRibbon = (
    <div
      className="sm:hidden w-full bg-[#3D2B1A] border-y border-[#B8962E]/40 px-4 py-3"
      role="region"
      aria-label="KHADANE™ stone codes"
    >
      <div className="mx-auto grid max-w-sm grid-cols-1 divide-y divide-[#B8962E]/30">
        {mobileItems.map((item) => (
          <div
            key={item.code}
            className="grid min-h-12 grid-cols-[4.75rem_1fr_1.25rem] items-center gap-3 py-2"
          >
            <span className="font-sans text-[0.78rem] tracking-[0.08em] text-[#F0EDE6] font-medium whitespace-nowrap">
              {item.code}
            </span>
            <span className="font-serif italic text-lg leading-none text-[#E8E3D7] text-center whitespace-nowrap">
              {item.name}
            </span>
            <span className="text-[#B8962E] text-sm text-right" aria-hidden>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  if (reducedMotion) {
    return (
      <>
        {mobileRibbon}
        <div
          className="hidden sm:block w-full bg-[#3D2B1A] py-4 border-y border-[#B8962E]/40"
          role="region"
          aria-label="KHADANE™ stone codes"
        >
          <div className="flex items-center justify-center gap-8 px-6">
            {items.slice(0, 3).map((item, idx) => (
              <div key={item.code} className="flex items-center gap-4">
                <span className="font-sans text-xs tracking-[0.2em] text-[#F0EDE6] font-medium whitespace-nowrap">
                  {item.code}
                </span>
                <span className="font-serif italic text-base text-[#E8E3D7] whitespace-nowrap">
                  {item.name}
                </span>
                {idx < 2 && <span className="text-[#B8962E] mx-2">✦</span>}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {mobileRibbon}
      <div
        className="hidden sm:block w-full bg-[#3D2B1A] py-4 border-y border-[#B8962E]/40 overflow-hidden group"
        role="region"
        aria-label="KHADANE™ stone codes"
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {doubled.map((item, idx) => (
            <div key={`${item.code}-${idx}`} className="flex items-center gap-4 mx-8 shrink-0">
              <span className="font-sans text-xs tracking-[0.2em] text-[#F0EDE6] font-medium whitespace-nowrap">
                {item.code}
              </span>
              <span className="font-serif italic text-base text-[#E8E3D7] whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[#B8962E] mx-4">✦</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
