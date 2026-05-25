// ============================================================
// KHADANE™ — Surface Detail Template · v3.1
// Single-surface page: process description, varieties that take it,
// formats it applies to.
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { SURFACES, getSurfaceBySlug, type Surface } from '@/lib/surfaces'
import { FORMATS } from '@/lib/formats'
import { VARIETIES } from '@/lib/varieties'

export function generateStaticParams() {
  return SURFACES.map((s) => ({ surface: s.slug }))
}

interface PageProps {
  params: Promise<{ surface: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { surface } = await params
  const s = getSurfaceBySlug(surface)
  if (!s) return { title: 'Surface not found' }
  return {
    title: `${s.name} surface`,
    description: `${s.name} \u2014 ${s.caption} Process, varieties, and formats.`,
    alternates: {
      canonical: `https://khadane.com/formats/surfaces/${s.slug}`,
    },
  }
}

export default async function SurfaceDetailPage({ params }: PageProps) {
  const { surface: slug } = await params
  const s = getSurfaceBySlug(slug)
  if (!s) notFound()
  const surface: Surface = s as Surface

  // Formats that offer this surface treatment.
  const formatsAvailable = FORMATS.filter((f) =>
    f.surfacesAvailable.includes(surface.slug)
  )

  // Related surfaces (the other ten).
  const relatedSurfaces = SURFACES.filter((x) => x.slug !== surface.slug).slice(
    0,
    4
  )

  return (
    <article className="khadane-surface-page" data-surface={surface.slug}>
      {/* HERO */}
      <section
        className="khadane-variety-hero"
        aria-labelledby="surface-heading"
      >
        <div className="khadane-variety-hero__image-wrap">
          <PlaceholderImage
            variant="stone"
            label="SURFACE TREATMENT"
            title={surface.name}
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-variety-hero__content">
          <p className="khadane-eyebrow">SURFACE TREATMENT</p>
          <h1 id="surface-heading" className="khadane-variety-hero__headline">
            {surface.name}
          </h1>
          <p className="khadane-variety-hero__subline">{surface.caption}</p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Description"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              {surface.description}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCESS */}
      <section
        className="khadane-section khadane-section--process"
        aria-labelledby="process-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="process-heading" className="khadane-section-title">
              The process at the yard
            </h2>
            <p className="khadane-body-prose">{surface.process}</p>
            {surface.thicknessLoss && (
              <p className="khadane-spec-footnote">
                <em>Typical thickness loss during this treatment: {surface.thicknessLoss}</em>
              </p>
            )}
          </div>
        </RevealOnScroll>
      </section>

      {/* COMMON USES */}
      <section
        className="khadane-section khadane-section--typical-use"
        aria-labelledby="common-uses-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="common-uses-heading" className="khadane-section-title">
              Commonly specified for
            </h2>
            <ul className="khadane-typical-use-list">
              {surface.commonUses.map((use, i) => (
                <li key={i} className="khadane-typical-use-list__item">
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </section>

      {/* FORMATS AVAILABLE */}
      {formatsAvailable.length > 0 && (
        <section
          className="khadane-section khadane-section--formats"
          aria-labelledby="surface-formats-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2
                id="surface-formats-heading"
                className="khadane-section-title"
              >
                Formats that take this surface
              </h2>
              <p className="khadane-caption-italic-gold">
                {surface.name} is applied to the following formats in the
                catalogue.
              </p>
            </div>
            <div className="khadane-format-grid">
              {formatsAvailable.map((f) => (
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
      )}

      {/* VARIETIES — all 23 take all surfaces, but we show a sample row */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Varieties"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 className="khadane-section-title">Across the catalogue</h2>
            <p className="khadane-body-prose">
              The {surface.name} treatment is applied across the full KHADANE
              catalogue \u2014 all twenty-three varieties hold the finish, with
              the per-variety appearance varying by the stone\u2019s natural
              colour and grain character.
            </p>
            <Link
              href="/khadane/collection"
              className="khadane-link-gold"
            >
              Browse the Collection \u2192
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* RELATED SURFACES */}
      {relatedSurfaces.length > 0 && (
        <section
          className="khadane-section khadane-section--related"
          aria-labelledby="surface-related-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2
                id="surface-related-heading"
                className="khadane-section-title"
              >
                Other surfaces
              </h2>
            </div>
            <div className="khadane-tile-grid khadane-tile-grid--surfaces">
              {relatedSurfaces.map((r) => (
                <Link
                  key={r.slug}
                  href={`/khadane/formats/surfaces/${r.slug}`}
                  className="khadane-tile khadane-tile--surface"
                >
                  <div className="khadane-tile__image">
                    <PlaceholderImage
                      variant="stone"
                      label="SURFACE"
                      title={r.name}
                      aspectRatio="1/1"
                      useSvg={false}
                    />
                  </div>
                  <h3 className="khadane-tile__name">{r.name}</h3>
                  <p className="khadane-tile__caption">{r.caption}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* DESK CTA */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer\u2019s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk"
                className="khadane-button khadane-button--primary"
              >
                Enquire
              </Link>
              <Link
                href="/khadane/formats/surfaces"
                className="khadane-button khadane-button--ghost"
              >
                All surfaces
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </article>
  )
}
