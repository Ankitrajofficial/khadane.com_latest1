'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Wordmark from './Wordmark'
import LanguageSwitcher from './LanguageSwitcher'
import Search from './Search'
import { KHADANE_NAV } from '@/lib/site-khadane'

function hrefFor(path: string) {
  return `/khadane${path === '/' ? '' : path}`
}

function normalise(pathname: string) {
  return pathname.startsWith('/khadane')
    ? pathname.replace(/^\/khadane/, '') || '/'
    : pathname
}

export default function Navigation() {
  const pathname = usePathname() ?? '/'
  const isHome = pathname === '/khadane' || pathname === '/khadane/' || pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }

    const handler = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [isHome])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const currentPath = normalise(pathname)

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#3D2B1A]/95 backdrop-blur-md border-b border-[#B8962E]/20'
            : 'bg-transparent',
        ].join(' ')}
        data-surface="dark"
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 lg:px-6 lg:py-4 flex items-center justify-between gap-4 lg:gap-5">
          <Link href="/khadane" aria-label="KHADANE home" className="shrink-0">
            <span className="block lg:hidden">
              <Wordmark surface="dark" size={88} priority />
            </span>
            <span className="hidden lg:block">
              <Wordmark surface="dark" size={scrolled ? 118 : 132} priority />
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {KHADANE_NAV.map((item) => {
              const active =
                currentPath === item.href || currentPath.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={hrefFor(item.href)}
                    className={[
                      'relative px-3 py-2 font-sans text-xs tracking-wider uppercase transition-colors',
                      active
                        ? 'text-quarry-gold'
                        : 'text-warm-white hover:text-quarry-gold',
                    ].join(' ')}
                  >
                    {item.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-px bg-quarry-gold"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Search />
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Search />
            <button
              type="button"
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-px bg-warm-white" />
              <span className="block w-5 h-px bg-warm-white" />
              <span className="block w-3.5 h-px bg-warm-white ml-1.5" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={[
          'fixed inset-0 z-[60] lg:hidden transition-all duration-500',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-[#3D2B1A]" />
        <div className="relative h-full min-h-0 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between gap-4 px-5 py-5 border-b border-[#B8962E]/20">
            <Wordmark surface="dark" size={150} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center text-warm-white text-2xl"
            >
              ×
            </button>
          </div>
          <ul className="flex-1 flex flex-col justify-center px-6 py-8 gap-1">
            {KHADANE_NAV.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={hrefFor(item.href)}
                  className="block py-3 font-display text-2xl sm:text-3xl text-warm-white hover:text-quarry-gold transition-colors"
                  style={{
                    transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms',
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                    transitionProperty: 'opacity, transform, color',
                    transitionDuration: '600ms',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <Link
                href="/khadane/desk"
                className="inline-flex min-h-12 items-center gap-3 px-7 py-3 bg-quarry-gold text-obsidian font-sans text-sm tracking-wider uppercase"
              >
                Enquire <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 border-t border-[#B8962E]/20 text-warm-white/70 text-xs font-mono tracking-wider">
            <span>exports@khadane.com · +91 98285 71143</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  )
}
