'use client'

// ============================================================
// KHADANE™ Wordmark — v3.1 (Batch 08)
//
// Composites the locked SVG variants from /public/brand/khadane/.
// NEVER recreates the wordmark from fonts.
// ============================================================

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface WordmarkProps {
  surface?: 'auto' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  priority?: boolean
  className?: string
  alt?: string
}

const SIZE_MAP = {
  sm: 140,
  md: 220,
  lg: 320,
  xl: 480,
} as const

const ASPECT_RATIO = 0.28

export default function Wordmark({
  surface = 'auto',
  size = 'md',
  priority = false,
  className = '',
  alt = 'KHADANE™',
}: WordmarkProps) {
  const [resolvedSurface, setResolvedSurface] = useState<'light' | 'dark'>(
    surface === 'auto' ? 'dark' : surface,
  )

  useEffect(() => {
    if (surface !== 'auto') {
      setResolvedSurface(surface)
      return
    }

    const el = document.querySelector('[data-surface]')
    const attr = el?.getAttribute('data-surface')
    if (attr === 'light' || attr === 'dark') {
      setResolvedSurface(attr)
    }
  }, [surface])

  const width = typeof size === 'number' ? size : SIZE_MAP[size]
  const height = Math.round(width * ASPECT_RATIO)
  const src =
    resolvedSurface === 'light'
      ? '/brand/khadane/KHADANE_04_transparent_gold_black.svg'
      : '/brand/khadane/KHADANE_05_transparent_gold_white.svg'

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      unoptimized
    />
  )
}
