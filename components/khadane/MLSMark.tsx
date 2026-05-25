'use client'

// ============================================================
// MLS Four Pillars Mark — v3.1 (Batch 08)
// ============================================================

import Image from 'next/image'

interface MLSMarkProps {
  surface?: 'light' | 'dark' | 'tobacco'
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  className?: string
  alt?: string
}

const SIZE_MAP = {
  sm: 80,
  md: 140,
  lg: 200,
  xl: 280,
} as const

const ASPECT_RATIO = 1.1

export default function MLSMark({
  surface = 'dark',
  size = 'md',
  className = '',
  alt = 'Mohan Lal & Sons — Since 1972, Bijolia',
}: MLSMarkProps) {
  const width = typeof size === 'number' ? size : SIZE_MAP[size]
  const height = Math.round(width * ASPECT_RATIO)

  let src: string
  switch (surface) {
    case 'light':
      src = '/brand/mls/MLS_mark_03_cream.svg'
      break
    case 'tobacco':
      src = '/brand/mls/MLS_mark_02_tobacco.svg'
      break
    case 'dark':
    default:
      src = '/brand/mls/MLS_mark_01_dark.svg'
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized
    />
  )
}
