'use client'

// ============================================================
// KHADANE™ — Sticky Buyer's Decision Panel · v3.1
// Sits at the top of every variety page. Pins to the top of the viewport
// after 80px of scroll, then collapses to slim mode after 400px.
// Four action buttons + an at-a-glance row with origin, status, surfaces,
// edges, formats, density.
// ============================================================

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface AtAGlanceItem {
  /** Label displayed in caption-italic before the value. */
  label: string
  /** Value displayed. */
  value: string
}

interface StickyDecisionPanelProps {
  /** The KHADANE catalogue name of the variety (for the buttons' aria labels). */
  varietyName: string
  /** URL slug of the variety, used to pre-fill the enquiry form link. */
  varietySlug: string
  /** Public path of the datasheet PDF, or undefined if not yet generated. */
  datasheetPdfPath?: string
  /** Path the "Request a sample" action navigates to. */
  samplesPath: string
  /** Path the "Enquire" action navigates to (with variety pre-selected). */
  enquirePath: string
  /** Six pieces of essential information in the at-a-glance row. */
  atAGlance: AtAGlanceItem[]
}

export function StickyDecisionPanel({
  varietyName,
  varietySlug,
  datasheetPdfPath,
  samplesPath,
  enquirePath,
  atAGlance,
}: StickyDecisionPanelProps) {
  const [isPinned, setIsPinned] = useState(false)
  const [isSlim, setIsSlim] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // Pin after 80px, slim after 400px. Single scroll listener, rAF-throttled.
  useEffect(() => {
    let rafId: number | null = null

    function update() {
      const y = window.scrollY
      setIsPinned(y > 80)
      setIsSlim(y > 400)
      rafId = null
    }

    function onScroll() {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Initial state in case the page loaded already scrolled.
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Save-to-list: stored in localStorage as a comma-separated slug list.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const list = window.localStorage.getItem('khadane-saved-varieties') ?? ''
      setIsSaved(list.split(',').filter(Boolean).includes(varietySlug))
    } catch {
      // localStorage unavailable; no-op
    }
  }, [varietySlug])

  function handleSaveToggle() {
    if (typeof window === 'undefined') return
    try {
      const list = window.localStorage.getItem('khadane-saved-varieties') ?? ''
      const set = new Set(list.split(',').filter(Boolean))
      if (set.has(varietySlug)) {
        set.delete(varietySlug)
        setIsSaved(false)
      } else {
        set.add(varietySlug)
        setIsSaved(true)
      }
      window.localStorage.setItem(
        'khadane-saved-varieties',
        Array.from(set).join(',')
      )
    } catch {
      // localStorage unavailable; no-op
    }
  }

  const className =
    'khadane-decision-panel' +
    (isPinned ? ' khadane-decision-panel--pinned' : '') +
    (isSlim ? ' khadane-decision-panel--slim' : '')

  return (
    <aside className={className} aria-label="Buyer\u2019s decision panel">
      <div className="khadane-decision-panel__actions">
        {datasheetPdfPath ? (
          <a
            href={datasheetPdfPath}
            className="khadane-decision-panel__action khadane-decision-panel__action--primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download datasheet for ${varietyName}`}
          >
            Datasheet (PDF)
          </a>
        ) : (
          <button
            type="button"
            className="khadane-decision-panel__action khadane-decision-panel__action--primary"
            disabled
            aria-label="Datasheet not yet available"
          >
            Datasheet (PDF)
          </button>
        )}
        <Link
          href={samplesPath}
          className="khadane-decision-panel__action"
          aria-label={`Request a sample of ${varietyName}`}
        >
          Request a sample
        </Link>
        <Link
          href={enquirePath}
          className="khadane-decision-panel__action"
          aria-label={`Enquire about ${varietyName}`}
        >
          Enquire about this stone
        </Link>
        <button
          type="button"
          className={
            'khadane-decision-panel__action khadane-decision-panel__action--ghost' +
            (isSaved ? ' khadane-decision-panel__action--saved' : '')
          }
          onClick={handleSaveToggle}
          aria-pressed={isSaved}
          aria-label={
            isSaved
              ? `Remove ${varietyName} from saved list`
              : `Save ${varietyName} to list`
          }
        >
          {isSaved ? 'Saved to list' : 'Save to list'}
        </button>
      </div>
      {!isSlim && (
        <div className="khadane-decision-panel__glance">
          {atAGlance.map((item, idx) => (
            <span key={idx} className="khadane-decision-panel__glance-item">
              <span className="khadane-decision-panel__glance-label">
                {item.label}:
              </span>{' '}
              <span className="khadane-decision-panel__glance-value">
                {item.value}
              </span>
            </span>
          ))}
        </div>
      )}
    </aside>
  )
}
