'use client'

// ============================================================
// KHADANE™ — Collection Filter · v3.1
// Small client island wrapping the variety grid.
// Provides All / Owned / Allied filter buttons that toggle a
// data-attribute on the grid, with CSS handling the show/hide.
// FLIP animation via CSS transitions.
// ============================================================

import { useState, type ReactNode } from 'react'

interface CollectionFilterProps {
  children: ReactNode
  allLabel: string
  ownedLabel: string
  alliedLabel: string
  ownedTierLabel: string
  alliedTierLabel: string
  foundingBadgeLabel: string
}

type FilterValue = 'all' | 'owned' | 'allied'

export function CollectionFilter({
  children,
  allLabel,
  ownedLabel,
  alliedLabel,
}: CollectionFilterProps) {
  const [active, setActive] = useState<FilterValue>('all')

  const buttons: Array<{ value: FilterValue; label: string }> = [
    { value: 'all', label: allLabel },
    { value: 'owned', label: ownedLabel },
    { value: 'allied', label: alliedLabel },
  ]

  return (
    <div className="khadane-collection-filter">
      <div className="khadane-prose-container">
        <div
          role="group"
          aria-label="Filter varieties by ownership"
          className="khadane-filter-bar"
        >
          {buttons.map((btn) => (
            <button
              key={btn.value}
              type="button"
              className={
                'khadane-filter-bar__button' +
                (active === btn.value
                  ? ' khadane-filter-bar__button--active'
                  : '')
              }
              aria-pressed={active === btn.value}
              onClick={() => setActive(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className="khadane-variety-grid-wrap"
        data-filter={active}
      >
        {children}
      </div>
    </div>
  )
}
