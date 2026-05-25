// ============================================================
// KHADANE™ — Gallery Landing · v3.1
// 8 categorised sections, each with its own hero + browse page.
// Single editorial signature line: \"The work, as it appears.\"
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { GALLERY_CATEGORIES } from '@/lib/photography'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Documentary photographs of KHADANE\u2019s operation. Aerials, quarry ' +
    'faces, yard processing, cut and finishing, loading and dispatch, ' +
    'completed installations, material close-ups, editorial work.',
  alternates: {
    canonical: 'https://khadane.com/gallery',
  },
}

export default function GalleryLandingPage() {
  return (
    <>
      {/* ───────────────────────────────────────────────
          HEADER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-page-header"
        aria-labelledby="gallery-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE RECORD</p>
          <h1 id="gallery-heading" className="khadane-page-headline">
            Gallery.
          </h1>
          <p className="khadane-page-subline khadane-signature">
            The work, as it appears.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          EDITORIAL INTRO — single short paragraph
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Editorial introduction"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              Documentary photographs of the working operation \u2014 quarry,
              yard, finished material, completed installations. Browse by
              category, or visit{' '}
              <Link href="/khadane/quarry" className="khadane-link-gold">
                The Quarry
              </Link>{' '}
              and{' '}
              <Link href="/khadane/yard" className="khadane-link-gold">
                The Yard
              </Link>{' '}
              for the editorial sequences.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          CATEGORY GRID — 8 categories
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--gallery-categories"
        aria-label="Gallery categories"
      >
        <RevealOnScroll>
          <div className="khadane-gallery-category-grid">
            {GALLERY_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/khadane/gallery/${cat.slug}`}
                className="khadane-gallery-category-card khadane-variety-card"
                aria-label={`Browse ${cat.name} \u2014 ${cat.photos.length} photographs`}
              >
                <div className="khadane-gallery-category-card__image">
                  <PlaceholderImage
                    variant="stone"
                    label={cat.caption}
                    title={cat.name.toUpperCase()}
                    aspectRatio={cat.hero.aspect ?? '16/9'}
                    useSvg={false}
                    className="khadane-variety-card__image"
                  />
                </div>
                <div className="khadane-gallery-category-card__content">
                  <h2 className="khadane-gallery-category-card__name">
                    {cat.name}
                  </h2>
                  <p className="khadane-gallery-category-card__caption">
                    {cat.caption}
                  </p>
                  <p className="khadane-gallery-category-card__meta">
                    {cat.photos.length} photographs
                  </p>
                </div>
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
            <p className="khadane-eyebrow">USE OF IMAGERY</p>
            <h2 className="khadane-section-title">
              Press and trade use.
            </h2>
            <p className="khadane-body-prose">
              KHADANE photography is available for press, specifier, and
              architect use, subject to credit. Request high-resolution files
              from the desk at exports@khadane.com.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk?intent=press"
                className="khadane-button khadane-button--primary"
              >
                Request imagery
              </Link>
              <Link
                href="/khadane/collection"
                className="khadane-button khadane-button--ghost"
              >
                Back to the Collection
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
