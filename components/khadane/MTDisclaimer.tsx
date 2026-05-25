'use client'

// ============================================================
// KHADANE™ — Machine Translation Disclaimer
//
// Renders above the footer copyright row on all non-English locales.
// Tobacco italic on cream (Stone Linen) footer surface.
// ============================================================

import { useEffect, useState } from 'react'

export default function MTDisclaimer() {
  const [locale, setLocale] = useState<string>('en')

  useEffect(() => {
    const stored = localStorage.getItem('khadane-locale')
    if (stored) setLocale(stored)
  }, [])

  if (locale === 'en') return null

  return (
    <p
      className="font-sans italic text-sm text-tobacco/70 text-center py-6 px-4 max-w-3xl mx-auto leading-relaxed tracking-wide"
    >
      This page uses machine translation. For binding commercial communication,
      English remains the source of truth.
    </p>
  )
}
