// ============================================================
// KHADANE™ — Formats Landing · v3.1
// Grouped grid of all 19 formats by category, with nested links
// out to Surfaces and Edges.
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import {
  FORMATS,
  FORMAT_CATEGORIES,
  type Format,
  type FormatCategory,
} from '@/lib/formats'
import { SURFACES } from '@/lib/surfaces'
import { EDGES } from '@/lib/edges'

export const metadata: Metadata = {
  title: 'Formats',
  description:
    'KHADANE\u2019s 19-format catalogue \u2014 every form Bijolia sandstone can ' +
    'take. Pavings, cobble setts, copings, slabs, blocks, architectural detail. ' +
    'Plus 11 surface treatments and 4 edge profiles.',
  alternates: {
    canonical: 'https://khadane.com/formats',
  },
}

export default function FormatsLandingPage() {
  return (
    <>
      {/* ───────────────────────────────────────────────
          HEADER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-page-header"
        aria-labelledby="formats-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE FORMS</p>
          <h1 id="formats-heading" className="khadane-page-headline">
            Formats.
          </h1>
          <p className="khadane-page-subline">
            Every form the trade asks for. Plus the surface treatments and
            edge profiles that finish the stone before it ships.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          EDITORIAL INTRO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Editorial introduction"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              KHADANE cuts and dresses the stone before it leaves Mundra.
              Nineteen formats run through the yard \u2014 paving slabs, cobble
              setts, copings, kerbstones, palisades, wall cladding, gangsaw
              slabs, raw quarry blocks, architectural detail. Each format is
              cross-listed against the surface treatments and edge profiles
              available for it.
            </p>
            <p className="khadane-body-prose">
              The Formats catalogue describes the form. The Surfaces and Edges
              catalogues describe how the form is finished. Most formats hold
              most surfaces and edges; the few exceptions \u2014 raw quarry
              blocks, naturally split flagstones \u2014 are noted on their
              individual pages.
            </p>
            <p className="khadane-collection-counts">
              <span>19 formats</span>
              <span className="khadane-divider" aria-hidden="true">{' \u00b7 '}</span>
              <span>11 surface treatments</span>
              <span className="khadane-divider" aria-hidden="true">{' \u00b7 '}</span>
              <span>4 edge profiles</span>
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          GROUPED FORMAT GRID — by category
          ─────────────────────────────────────────────── */}
      {FORMAT_CATEGORIES.map((category) => {
        const formatsInCategory = FORMATS.filter((f) => f.category === category)
        if (formatsInCategory.length === 0) return null
        return (
          <CategorySection
            key={category}
            category={category}
            formats={formatsInCategory}
          />
        )
      })}

      {/* ───────────────────────────────────────────────
          SURFACES & EDGES NESTED INDEX
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--surfaces-index"
        aria-labelledby="surfaces-index-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="surfaces-index-heading" className="khadane-section-title">
              Surfaces.
            </h2>
            <p className="khadane-caption-italic-gold">
              Worked at the yard, before the stone ships. Eleven treatments
              across honed, sandblasted, flamed, brushed, leather, and the
              rest.
            </p>
          </div>
          <div className="khadane-tile-grid khadane-tile-grid--surfaces">
            {SURFACES.map((s) => (
              <Link
                key={s.slug}
                href={`/khadane/formats/surfaces/${s.slug}`}
                className="khadane-tile khadane-tile--surface"
              >
                <div className="khadane-tile__image">
                  <PlaceholderImage
                    variant="stone"
                    label="SURFACE"
                    title={s.name}
                    aspectRatio="1/1"
                    useSvg={false}
                  />
                </div>
                <h3 className="khadane-tile__name">{s.name}</h3>
                <p className="khadane-tile__caption">{s.caption}</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--edges-index"
        aria-labelledby="edges-index-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="edges-index-heading" className="khadane-section-title">
              Edges.
            </h2>
            <p className="khadane-caption-italic-gold">
              Hand-cut, machine-cut, bullnose. As the format requires.
            </p>
          </div>
          <div className="khadane-tile-grid khadane-tile-grid--edges">
            {EDGES.map((e) => (
              <Link
                key={e.slug}
                href={`/khadane/formats/edges/${e.slug}`}
                className="khadane-tile khadane-tile--edge"
              >
                <div className="khadane-tile__image">
                  <PlaceholderImage
                    variant="stone"
                    label="EDGE"
                    title={e.name}
                    aspectRatio="1/1"
                    useSvg={false}
                  />
                </div>
                <h3 className="khadane-tile__name">{e.name}</h3>
                <p className="khadane-tile__caption">{e.caption}</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          DESK CTA
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer\u2019s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE BUYER\u2019S DESK</p>
            <h2 className="khadane-section-title">
              Format specifications on enquiry.
            </h2>
            <p className="khadane-body-prose">
              Full per-format technical drawings, packing data, and
              container-loading rates are available on enquiry. The desk at
              Bijolia handles trade specifications directly. Responded to within
              one business day.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk"
                className="khadane-button khadane-button--primary"
              >
                Enquire
              </Link>
              <Link
                href="/khadane/collection"
                className="khadane-button khadane-button--ghost"
              >
                Browse the Collection
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}

// ============================================================
// CategorySection — groups formats under their category heading
// ============================================================

interface CategorySectionProps {
  category: FormatCategory
  formats: Format[]
}

function CategorySection({ category, formats }: CategorySectionProps) {
  return (
    <section
      className="khadane-section khadane-section--format-category"
      aria-label={`${category} formats`}
    >
      <RevealOnScroll>
        <div className="khadane-prose-container">
          <h2 className="khadane-format-category__heading">{category}</h2>
        </div>
        <div className="khadane-format-grid">
          {formats.map((f) => (
            <Link
              key={f.slug}
              href={`/khadane/formats/${f.slug}`}
              className="khadane-format-card khadane-variety-card"
            >
              <div className="khadane-format-card__image">
                <PlaceholderImage
                  variant="stone"
                  label={f.category}
                  title={f.name}
                  aspectRatio="4/3"
                  useSvg={false}
                  className="khadane-variety-card__image"
                />
              </div>
              <div className="khadane-format-card__content">
                <h3 className="khadane-format-card__name">{f.name}</h3>
                <p className="khadane-format-card__caption">{f.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
