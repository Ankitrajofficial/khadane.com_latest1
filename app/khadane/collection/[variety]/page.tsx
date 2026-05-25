// ============================================================
// KHADANE™ — Variety Page Template · v3.1
//
// 11 blocks per the locked v3.1 architecture:
//   01. Hero (eyebrow + headline + italic subline + full-bleed photo)
//   02. Sticky Decision Panel (4 actions + at-a-glance row)
//   03. The Stone — 2-paragraph Salvatori editorial body
//   04. Technical Specification — export-grade trade data
//   05. Surfaces — 11 tiles
//   06. Edges — 4 tiles
//   07. Formats — grid of all 19 formats with per-variety availability
//   08. A note on sourcing — locked provenance line
//   09. Optional field note (omitted unless wired)
//   10. Related varieties
//   11. Group credit footer
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { StickyDecisionPanel } from '@/components/khadane/StickyDecisionPanel'
import {
  VARIETIES,
  getVarietyBySlug,
  type Variety,
} from '@/lib/varieties'
import { SURFACES, getSurfaceBySlug } from '@/lib/surfaces'
import { EDGES, getEdgeBySlug } from '@/lib/edges'
import { FORMATS, getFormatBySlug } from '@/lib/formats'
import { getEnglishDictionary } from '@/lib/i18n/dictionaries'

// ============================================================
// Static path generation — pre-render every variety
// ============================================================

export function generateStaticParams() {
  return VARIETIES.map((v) => ({ variety: v.slug }))
}

interface PageProps {
  params: Promise<{ variety: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { variety } = await params
  const v = getVarietyBySlug(variety)
  if (!v) return { title: 'Variety not found' }
  const tradeAliasNames = v.tradeAliases.map((a) => a.name).join(', ')
  const description =
    `${v.catalogueName} \u2014 ${v.heroSubline} ` +
    (tradeAliasNames ? `Also known as ${tradeAliasNames}. ` : '') +
    `Quarried from the family\u2019s ${v.tier === 'owned' ? 'owned' : 'allied'} ` +
    `block at ${v.primaryLocation.village || v.primaryLocation.district}.`
  return {
    title: v.catalogueName,
    description,
    keywords: [
      v.catalogueName,
      ...v.tradeAliases.map((a) => a.name),
      'Indian sandstone',
      v.primaryLocation.district,
      v.primaryLocation.state,
      'KHADANE',
    ],
    alternates: {
      canonical: `https://khadane.com/collection/${v.slug}`,
    },
  }
}

// ============================================================
// THE PAGE
// ============================================================

export default async function VarietyPage({ params }: PageProps) {
  const { variety: slug } = await params
  const v = getVarietyBySlug(slug)
  if (!v) notFound()
  // After notFound() (which throws), TypeScript should narrow but doesn't always
  // without @types/next available. Assert here for the page body.
  const variety: Variety = v as Variety

  const dict = getEnglishDictionary()

  // Per-variety surfaces and edges \u2014 some varieties have constraints
  // (e.g. Teakwood non-splittable, Basalt Black block-only).
  // For v3.1 we show all surfaces and edges across all varieties; per-variety
  // constraints surface in the formatExceptions field of /lib/formats.ts.
  const surfaces = SURFACES
  const edges = EDGES

  // Related varieties: same tier, same district where possible, up to 3.
  const related = pickRelatedVarieties(variety, 3)

  // At-a-glance row for the sticky decision panel.
  const atAGlance = buildAtAGlance(variety)

  return (
    <article className="khadane-variety-page" data-variety={variety.slug}>
      {/* ───────────────────────────────────────────────
          BLOCK 01 — HERO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-variety-hero"
        aria-labelledby="variety-heading"
      >
        <div className="khadane-variety-hero__image-wrap">
          <PlaceholderImage
            variant={
              (variety.placeholderClass.replace(
                'placeholder-',
                ''
              ) as 'stone-grey') || 'stone'
            }
            label={`VARIETY HERO \u00b7 ${variety.code}`}
            title={variety.catalogueName}
            spec={variety.primaryLocation.village || variety.primaryLocation.district}
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-variety-hero__content">
          <p className="khadane-eyebrow">
            {variety.tier === 'owned' ? 'OWNED' : 'ALLIED'}
            {variety.foundingStone && ' \u00b7 FOUNDING STONE'}
          </p>
          <h1
            id="variety-heading"
            className="khadane-variety-hero__headline"
          >
            {variety.catalogueName}
          </h1>
          {variety.nameHindi && (
            <p className="khadane-variety-hero__hindi" lang="hi">
              {variety.nameHindi}
            </p>
          )}
          <p className="khadane-variety-hero__subline">{variety.heroSubline}</p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          BLOCK 02 — STICKY DECISION PANEL
          ─────────────────────────────────────────────── */}
      <StickyDecisionPanel
        varietyName={variety.catalogueName}
        varietySlug={variety.slug}
        datasheetPdfPath={`/datasheets/${variety.slug}.pdf`}
        samplesPath={`/khadane/desk?intent=sample&variety=${variety.slug}`}
        enquirePath={`/khadane/desk?variety=${variety.slug}`}
        atAGlance={atAGlance}
      />

      {/* ───────────────────────────────────────────────
          BLOCK 03 — THE STONE (editorial body)
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="block-stone-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="block-stone-heading" className="khadane-section-title">
              {dict.variety.theStone}
            </h2>
            <div className="khadane-body-prose">
              {variety.blockThreeBody ? (
                variety.blockThreeBody.split('\n\n').map((para, i) => (
                  <p key={i} className="khadane-body-prose">
                    {para}
                  </p>
                ))
              ) : (
                <p className="khadane-body-prose khadane-body-prose--placeholder">
                  Editorial copy for {variety.catalogueName} will appear in this
                  block. Two paragraphs in the Salvatori register, justified
                  body. The first paragraph carries the stone\u2019s sensory
                  character; the second carries operational and specification
                  detail.
                </p>
              )}
            </div>
            {variety.tradeAliases.length > 0 && (
              <p className="khadane-trade-aliases">
                <span className="khadane-eyebrow-inline">
                  {dict.variety.alsoKnownAs}:
                </span>{' '}
                {variety.tradeAliases.map((a, i) => (
                  <span key={i}>
                    <em>{a.name}</em>
                    {a.market && (
                      <span className="khadane-trade-aliases__market">
                        {' '}({a.market})
                      </span>
                    )}
                    {i < variety.tradeAliases.length - 1 && ', '}
                  </span>
                ))}
              </p>
            )}
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          BLOCK 04 — TECHNICAL SPECIFICATION
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--tech-spec"
        aria-labelledby="block-tech-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="block-tech-heading" className="khadane-section-title">
              {dict.variety.technicalSpecification}
            </h2>
            <dl className="khadane-tech-spec">
              <SpecRow label="Catalogue code" value={variety.code} />
              <SpecRow label="Geological formation" value={variety.formation} />
              <SpecRow
                label="Splittable"
                value={
                  variety.splittable
                    ? 'Yes \u2014 splits cleanly along its natural bedding plane'
                    : 'No \u2014 block-only, machine-cut downstream'
                }
              />
              {variety.splittabilityNote && (
                <SpecRow
                  label="Splittability note"
                  value={variety.splittabilityNote}
                />
              )}
              <SpecRow
                label={
                  variety.tier === 'owned'
                    ? 'Worked since'
                    : 'Partnership since'
                }
                value={
                  variety.workedSinceDecade === 'tbc'
                    ? 'To be confirmed'
                    : `the ${variety.workedSinceDecade}`
                }
              />
              <SpecRow
                label="Primary location"
                value={
                  variety.primaryLocation.village
                    ? `${variety.primaryLocation.village}${
                        variety.primaryLocation.tehsil
                          ? `, ${variety.primaryLocation.tehsil} tehsil`
                          : ''
                      }, ${variety.primaryLocation.district} District, ${
                        variety.primaryLocation.state
                      }`
                    : `${variety.primaryLocation.district} District, ${variety.primaryLocation.state}`
                }
              />
              {variety.additionalLocations &&
                variety.additionalLocations.length > 0 && (
                  <SpecRow
                    label="Additional locations"
                    value={variety.additionalLocations
                      .map(
                        (loc) =>
                          `${loc.village}${
                            loc.district !== variety.primaryLocation.district
                              ? `, ${loc.district} District`
                              : ''
                          }`
                      )
                      .join('; ')}
                  />
                )}
              {variety.quarryNetworkNote && (
                <SpecRow
                  label="Quarry network"
                  value={variety.quarryNetworkNote}
                />
              )}
            </dl>
            <p className="khadane-spec-footnote">
              Full technical datasheet (density, water absorption, compressive
              strength, flexural strength, freeze-thaw cycles, slip resistance)
              available on enquiry, or as a downloadable PDF.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          BLOCK 05 — SURFACES
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--surfaces"
        aria-labelledby="block-surfaces-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2
              id="block-surfaces-heading"
              className="khadane-section-title"
            >
              {dict.variety.surfaces}
            </h2>
            <p className="khadane-caption-italic-gold">
              {dict.variety.surfacesCaption}
            </p>
          </div>
          <div className="khadane-tile-grid khadane-tile-grid--surfaces">
            {surfaces.map((s) => (
              <Link
                key={s.slug}
                href={`/khadane/formats/surfaces/${s.slug}`}
                className="khadane-tile khadane-tile--surface"
                aria-label={`${s.name} surface, applied to ${variety.catalogueName}`}
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

      {/* ───────────────────────────────────────────────
          BLOCK 06 — EDGES
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--edges"
        aria-labelledby="block-edges-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="block-edges-heading" className="khadane-section-title">
              {dict.variety.edges}
            </h2>
            <p className="khadane-caption-italic-gold">
              {dict.variety.edgesCaption}
            </p>
          </div>
          <div className="khadane-tile-grid khadane-tile-grid--edges">
            {edges.map((e) => (
              <Link
                key={e.slug}
                href={`/khadane/formats/edges/${e.slug}`}
                className="khadane-tile khadane-tile--edge"
                aria-label={`${e.name} edge, applied to ${variety.catalogueName}`}
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
          BLOCK 07 — FORMATS
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--formats"
        aria-labelledby="block-formats-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="block-formats-heading" className="khadane-section-title">
              {dict.variety.formats}
            </h2>
            <p className="khadane-caption-italic-gold">
              {dict.variety.formatsCaption}
            </p>
            {!variety.splittable && (
              <p className="khadane-format-constraint">
                <em>
                  Note: {variety.catalogueName} is{' '}
                  {variety.splittabilityNote
                    ? variety.splittabilityNote.toLowerCase()
                    : 'block-only and machine-cut downstream'}
                  . Format availability is limited accordingly.
                </em>
              </p>
            )}
          </div>
          <div className="khadane-format-grid">
            {FORMATS.map((f) => (
              <Link
                key={f.slug}
                href={`/khadane/formats/${f.slug}`}
                className="khadane-format-card"
              >
                <div className="khadane-format-card__image">
                  <PlaceholderImage
                    variant="stone"
                    label={f.category}
                    title={f.name}
                    aspectRatio="4/3"
                    useSvg={false}
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

      {/* ───────────────────────────────────────────────
          BLOCK 08 — A NOTE ON SOURCING (locked provenance)
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--sourcing"
        aria-labelledby="block-sourcing-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="block-sourcing-heading" className="khadane-section-title">
              {dict.variety.noteOnSourcing}
            </h2>
            <blockquote className="khadane-provenance">
              <p className="khadane-body-prose khadane-body-prose--provenance">
                {variety.provenanceLine}
              </p>
            </blockquote>
            <Link
              href="/khadane/group"
              className="khadane-link-gold"
            >
              About the family operation \u2192
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          BLOCK 10 — RELATED VARIETIES
          (Block 09 \u2014 field note \u2014 omitted until wired per variety)
          ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="khadane-section khadane-section--related"
          aria-labelledby="block-related-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2
                id="block-related-heading"
                className="khadane-section-title"
              >
                {dict.variety.relatedVarieties}
              </h2>
            </div>
            <div className="khadane-related-grid">
              {related.map((r) => (
                <Link
                  key={r.code}
                  href={`/khadane/collection/${r.slug}`}
                  className="khadane-variety-card khadane-variety-card--related"
                >
                  <div className="khadane-variety-card__image-wrap">
                    <PlaceholderImage
                      variant={
                        (r.placeholderClass.replace(
                          'placeholder-',
                          ''
                        ) as 'stone-grey') || 'stone'
                      }
                      label={r.tier === 'owned' ? 'OWNED' : 'ALLIED'}
                      title={r.catalogueName}
                      aspectRatio="4/3"
                      useSvg={false}
                      className="khadane-variety-card__image"
                    />
                  </div>
                  <div className="khadane-variety-card__content">
                    <h3 className="khadane-variety-card__name">
                      {r.catalogueName}
                    </h3>
                    <p className="khadane-variety-card__subline">
                      {r.heroSubline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          BLOCK 11 — GROUP CREDIT FOOTER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--credit"
        aria-label="Group credit"
      >
        <div className="khadane-prose-container">
          <p className="khadane-group-credit">
            <em>
              {variety.catalogueName} is part of the KHADANE\u2122 catalogue \u2014
              the stone and export vertical of Mohan Lal & Sons, Bijolia,
              Rajasthan. Also known to the trade as the Dhakar Stones Group.
              Working continuously since 1972.
            </em>
          </p>
        </div>
      </section>
    </article>
  )
}

// ============================================================
// Helper: build the at-a-glance row for the decision panel
// ============================================================

function buildAtAGlance(v: Variety): Array<{ label: string; value: string }> {
  const items: Array<{ label: string; value: string }> = []

  items.push({
    label: 'Origin',
    value: v.primaryLocation.village
      ? `${v.primaryLocation.village}, ${v.primaryLocation.district}`
      : v.primaryLocation.district,
  })

  items.push({
    label: 'Status',
    value:
      v.tier === 'owned'
        ? v.foundingStone
          ? 'Owned \u00b7 Founding Stone'
          : 'Owned'
        : 'Allied',
  })

  items.push({
    label: 'Surfaces',
    value: '11 available',
  })

  items.push({
    label: 'Edges',
    value: '4 profiles',
  })

  items.push({
    label: 'Formats',
    value: v.splittable ? 'All 19' : 'Machine-cut only',
  })

  if (v.workedSinceDecade !== 'tbc') {
    items.push({
      label: v.tier === 'owned' ? 'Since' : 'Partnership',
      value: `the ${v.workedSinceDecade}`,
    })
  }

  return items
}

// ============================================================
// Helper: pick related varieties
// ============================================================

function pickRelatedVarieties(v: Variety, count: number): Variety[] {
  // Prefer: same tier, same district, then same tier, then anything else.
  const sameDistrict = VARIETIES.filter(
    (x) =>
      x.slug !== v.slug &&
      x.tier === v.tier &&
      x.primaryLocation.district === v.primaryLocation.district
  )
  const sameTier = VARIETIES.filter(
    (x) =>
      x.slug !== v.slug &&
      x.tier === v.tier &&
      !sameDistrict.some((d) => d.slug === x.slug)
  )
  const others = VARIETIES.filter(
    (x) =>
      x.slug !== v.slug &&
      !sameDistrict.some((d) => d.slug === x.slug) &&
      !sameTier.some((d) => d.slug === x.slug)
  )

  const pool = [...sameDistrict, ...sameTier, ...others]
  return pool.slice(0, count)
}

// ============================================================
// Helper: SpecRow component
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
