'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_INFO,
  isLocale,
  parseLocaleFromPath,
  type Locale,
} from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale?: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? '/'
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState<Locale>(
    currentLocale ?? parseLocaleFromPath(pathname).locale,
  )

  useEffect(() => {
    const stored = localStorage.getItem('khadane-locale')
    if (stored && isLocale(stored)) {
      setLocale(stored)
      return
    }
    setLocale(currentLocale ?? parseLocaleFromPath(pathname).locale)
  }, [currentLocale, pathname])

  useEffect(() => {
    if (!isOpen) return

    const onClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const handleSelect = (target: Locale) => {
    localStorage.setItem('khadane-locale', target)
    document.cookie = `khadane-locale=${target}; path=/; max-age=31536000; samesite=lax`
    setLocale(target)
    setIsOpen(false)

    const { rest } = parseLocaleFromPath(pathname)
    const cleanRest = rest === '' ? '/' : rest
    const nextPath =
      target === DEFAULT_LOCALE
        ? cleanRest
        : `/${target}${cleanRest === '/' ? '' : cleanRest}`

    router.push(nextPath)
  }

  const current = LOCALE_INFO[locale]

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.12em] text-warm-white hover:text-quarry-gold transition-colors"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current language: ${current.nativeName}. Click to change.`}
      >
        <span>{current.nativeName}</span>
        <span aria-hidden>{isOpen ? '▴' : '▾'}</span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-3 min-w-40 border border-quarry-gold/40 bg-tobacco py-2 shadow-2xl"
        >
          {LOCALES.map((code) => {
            const info = LOCALE_INFO[code]
            const active = code === locale
            return (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={[
                    'block w-full px-4 py-2 text-left font-sans text-xs tracking-[0.12em] transition-colors',
                    active
                      ? 'text-quarry-gold'
                      : 'text-warm-white/80 hover:text-quarry-gold',
                  ].join(' ')}
                  onClick={() => handleSelect(code)}
                >
                  {info.nativeName}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
