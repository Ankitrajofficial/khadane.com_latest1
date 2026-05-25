// ============================================================
// KHADANE™ — Format Detail Template · v3.1
//
// Per-format page with full export-grade trade dimensions:
//   - Hero (caption + name + description)
//   - Typical use cases
//   - Standard sizes table
//   - Standard thicknesses table
//   - Tolerances table
//   - Pack & dispatch data
//   - Surfaces available (cross-link to surface pages)
//   - Edges available (cross-link to edge pages)
//   - Related formats in the same category
//   - Desk CTA
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import {
  FORMATS,
  getFormatBySlug,
  type Format,
} from '@/lib/formats'
import { SURFACES, getSurfaceBySlug } from '@/lib/surfaces'
import { EDGES, getEdgeBySlug } from '@/lib/edges'

export function generateStaticParams() {
  return FORMATS.map((f) => ({ format: f.slug }))
}

interface PageProps {
  params: Promise<{ format: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { format } = await params
  const f = getFormatBySlug(format)
  if (!f) return { title: 'Format not found' }
  return {
    title: f.name,
    description: `${f.name} \u2014 ${f.caption} Export-grade trade dimensions, tolerances, and pack data.`,
    alternates: {
      canonical: `https://khadane.com/formats/${f.slug}`,
    },
  }
}

export default async function FormatDetailPage({ params }: PageProps) {
  const { format: slug } = await params
  const f = getFormatBySlug(slug)
  if (!f) notFound()
  const format: Format = f as Format

  // Related formats: same category, up to 3.
  const related = FORMATS.filter(
    (x) => x.slug !== format.slug && x.category === format.category
  ).slice(0, 3)

  // Surfaces and edges actually available for this format (intersected with
  // the master surfaces/edges lists so we can render their captions).
  const availableSurfaces = format.surfacesAvailable
    .map((s) => getSurfaceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
  const availableEdges = format.edgesAvailable
    .map((e) => getEdgeBySlug(e))
    .filter((e): e is NonNullable<typeof e> => e !== undefined)

  return (
    <article className="khadane-format-page" data-format={format.slug}>
      {/* ───────────────────────────────────────────────
          HERO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-variety-hero"
        aria-labelledby="format-heading"
      >
        <div className="khadane-variety-hero__image-wrap">
          <PlaceholderImage
            variant="stone"
            label={`FORMAT \u00b7 ${format.category}`}
            title={format.name}
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-variety-hero__content">
          <p className="khadane-eyebrow">{format.category.toUpperCase()}</p>
          <h1 id="format-heading" className="khadane-variety-hero__headline">
            {format.name}
          </h1>
          <p className="khadane-variety-hero__subline">{format.caption}</p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          DESCRIPTION
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Description"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              {format.description}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          TYPICAL USE
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--typical-use"
        aria-labelledby="typical-use-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="typical-use-heading" className="khadane-section-title">
              Typical use
            </h2>
            <ul className="khadane-typical-use-list">
              {format.typicalUse.map((use, i) => (
                <li key={i} className="khadane-typical-use-list__item">
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          STANDARD SIZES
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--sizes"
        aria-labelledby="sizes-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="sizes-heading" className="khadane-section-title">
              Standard sizes
            </h2>
            <div className="khadane-spec-table-wrap">
              <table className="khadane-spec-table">
                <thead>
                  <tr>
                    <th scope="col">Dimensions</th>
                    <th scope="col">Note</th>
                    <th scope="col">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {format.sizes.map((sz, i) => (
                    <tr key={i}>
                      <td className="khadane-spec-table__primary">
                        {sz.dimensions}
                      </td>
                      <td>{sz.note ?? '\u2014'}</td>
                      <td>{sz.coverage ?? '\u2014'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          THICKNESSES & TOLERANCES (side-by-side)
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--thickness-tolerance"
        aria-label="Thicknesses and tolerances"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container khadane-two-col">
            <div>
              <h2 className="khadane-section-title khadane-section-title--small">
                Standard thicknesses
              </h2>
              <dl className="khadane-tech-spec">
                {format.thicknesses.map((t, i) => (
                  <div key={i} className="khadane-tech-spec__row">
                    <dt className="khadane-tech-spec__label">{t.value}</dt>
                    <dd className="khadane-tech-spec__value">{t.useCase}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="khadane-section-title khadane-section-title--small">
                Tolerances
              </h2>
              <dl className="khadane-tech-spec">
                {format.tolerances.map((t, i) => (
                  <div key={i} className="khadane-tech-spec__row">
                    <dt className="khadane-tech-spec__label">{t.attribute}</dt>
                    <dd className="khadane-tech-spec__value">{t.tolerance}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          PACK & DISPATCH
          ─────────────────────────────────────────────── */}
      {format.packData && (
        <section
          className="khadane-section khadane-section--pack-data"
          aria-labelledby="pack-data-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2 id="pack-data-heading" className="khadane-section-title">
                Pack & dispatch
              </h2>
              <dl className="khadane-tech-spec">
                {format.packData.crateDimensions && (
                  <SpecRow
                    label="Crate dimensions"
                    value={format.packData.crateDimensions}
                  />
                )}
                {format.packData.crateWeight && (
                  <SpecRow
                    label="Crate weight"
                    value={format.packData.crateWeight}
                  />
                )}
                {format.packData.coveragePerCrate && (
                  <SpecRow
                    label="Coverage per crate"
                    value={format.packData.coveragePerCrate}
                  />
                )}
                {format.packData.containerLoading && (
                  <SpecRow
                    label="Container loading"
                    value={format.packData.containerLoading}
                  />
                )}
              </dl>
              <p className="khadane-spec-footnote">
                Full container-loading calculations available on enquiry.
              </p>
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          SURFACES AVAILABLE
          ─────────────────────────────────────────────── */}
      {availableSurfaces.length > 0 && (
        <section
          className="khadane-section khadane-section--surfaces"
          aria-labelledby="format-surfaces-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2
                id="format-surfaces-heading"
                className="khadane-section-title"
              >
                Surfaces available
              </h2>
              <p className="khadane-caption-italic-gold">
                The treatments KHADANE\u2019s yard applies to {format.name}.
              </p>
            </div>
            <div className="khadane-tile-grid khadane-tile-grid--surfaces">
              {availableSurfaces.map((s) => (
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
      )}

      {/* ───────────────────────────────────────────────
          EDGES AVAILABLE
          ─────────────────────────────────────────────── */}
      {availableEdges.length > 0 && (
        <section
          className="khadane-section khadane-section--edges"
          aria-labelledby="format-edges-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2 id="format-edges-heading" className="khadane-section-title">
                Edges available
              </h2>
              <p className="khadane-caption-italic-gold">
                The edge profiles KHADANE\u2019s yard cuts for {format.name}.
              </p>
            </div>
            <div className="khadane-tile-grid khadane-tile-grid--edges">
              {availableEdges.map((e) => (
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
      )}

      {/* ───────────────────────────────────────────────
          RELATED FORMATS
          ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="khadane-section khadane-section--related"
          aria-labelledby="format-related-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2
                id="format-related-heading"
                className="khadane-section-title"
              >
                Related formats in {format.category}
              </h2>
            </div>
            <div className="khadane-format-grid">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/khadane/formats/${r.slug}`}
                  className="khadane-format-card khadane-variety-card"
                >
                  <div className="khadane-format-card__image">
                    <PlaceholderImage
                      variant="stone"
                      label={r.category}
                      title={r.name}
                      aspectRatio="4/3"
                      useSvg={false}
                      className="khadane-variety-card__image"
                    />
                  </div>
                  <div className="khadane-format-card__content">
                    <h3 className="khadane-format-card__name">{r.name}</h3>
                    <p className="khadane-format-card__caption">{r.caption}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

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
              Specifications for {format.name} on enquiry.
            </h2>
            <p className="khadane-body-prose">
              Technical drawings, packing notes, and container-loading rates
              for this format are available on enquiry. Responded to within one
              business day.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href={`/khadane/desk?intent=format&format=${format.slug}`}
                className="khadane-button khadane-button--primary"
              >
                Enquire about this format
              </Link>
              <Link
                href="/khadane/formats"
                className="khadane-button khadane-button--ghost"
              >
                Back to all formats
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </article>
  )
}

// ============================================================
// SpecRow — small dt/dd row component
// ============================================================

interface SpecRowProps {
  label: string
  value: string
}

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="khadane-tech-spec__row">
      <dt className="khadane-tech-spec__label">{label}</dt>
      <dd className="khadane-tech-spec__value">{value}</dd>
    </div>
  )
}
