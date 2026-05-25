// ============================================================
// KHADANE™ — Collection Landing · v3.1
// Unified grid of all 23 varieties with Owned/Allied badges.
// Filter UI to switch between All / Owned / Allied.
// Voice register: Salvatori spine, justified body.
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import {
  VARIETIES,
  OWNED_VARIETIES,
  ALLIED_VARIETIES,
  type Variety,
} from '@/lib/varieties'
import { getEnglishDictionary } from '@/lib/i18n/dictionaries'
import { CollectionFilter } from './CollectionFilter'

export const metadata: Metadata = {
  title: 'The Collection',
  description:
    'KHADANE\u2019s 23-variety sandstone catalogue. Owned quarries in the ' +
    'Bijolia belt of Rajasthan, plus a network of allied quarries across ' +
    'Madhya Pradesh, Uttar Pradesh, and the broader Vindhyan formation.',
}

export default function CollectionLandingPage() {
  const dict = getEnglishDictionary()
  const ownedCount = OWNED_VARIETIES.length
  const alliedCount = ALLIED_VARIETIES.length

  return (
    <>
      {/* ───────────────────────────────────────────────
          HEADER
          ─────────────────────────────────────────────── */}
      <section className="khadane-page-header" aria-labelledby="collection-heading">
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE CATALOGUE</p>
          <h1 id="collection-heading" className="khadane-page-headline">
            {dict.collection.headline}
          </h1>
          <p className="khadane-page-subline">{dict.collection.subline}</p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          EDITORIAL BODY — single Salvatori-register paragraph
          explaining the Owned / Allied distinction
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Editorial introduction"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              {dict.collection.editorialBody}
            </p>
            <p className="khadane-collection-counts">
              <span>{ownedCount} owned</span>
              <span className="khadane-divider" aria-hidden="true">
                {' \u00b7 '}
              </span>
              <span>{alliedCount} allied</span>
              <span className="khadane-divider" aria-hidden="true">
                {' \u00b7 '}
              </span>
              <span>{VARIETIES.length} sandstones in total</span>
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          FILTER + GRID — client island for filter interactivity
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--grid"
        aria-label="Variety grid"
      >
        <CollectionFilter
          allLabel={dict.collection.filterAll}
          ownedLabel={dict.collection.filterOwned}
          alliedLabel={dict.collection.filterAllied}
          ownedTierLabel={dict.collection.tierLabelOwned}
          alliedTierLabel={dict.collection.tierLabelAllied}
          foundingBadgeLabel={dict.collection.badgeFoundingStone}
        >
          <div className="khadane-variety-grid" role="list">
            {VARIETIES.map((v) => (
              <VarietyCard
                key={v.code}
                variety={v}
                ownedLabel={dict.collection.tierLabelOwned}
                alliedLabel={dict.collection.tierLabelAllied}
                foundingLabel={dict.collection.badgeFoundingStone}
              />
            ))}
          </div>
        </CollectionFilter>
      </section>

      {/* ───────────────────────────────────────────────
          CLOSING — formats / surfaces / edges cross-link
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Cross-link to formats"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE FORMS</p>
            <h2 className="khadane-section-title">
              Every variety, every format.
            </h2>
            <p className="khadane-body-prose">
              Each stone in the catalogue is available across the format range
              the yard works. Nineteen formats, eleven surface treatments, four
              edge profiles. The format reference describes what each form can
              hold; the variety pages describe what each stone is.
            </p>
            <div className="khadane-cross-links">
              <Link
                href="/khadane/formats"
                className="khadane-button khadane-button--ghost"
              >
                Browse Formats
              </Link>
              <Link
                href="/khadane/desk"
                className="khadane-button khadane-button--primary"
              >
                {dict.actions.enquire}
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}

// ============================================================
// VarietyCard \u2014 single grid card
// ============================================================

interface VarietyCardProps {
  variety: Variety
  ownedLabel: string
  alliedLabel: string
  foundingLabel: string
}

function VarietyCard({
  variety,
  ownedLabel,
  alliedLabel,
  foundingLabel,
}: VarietyCardProps) {
  return (
    <article
      className={
        'khadane-variety-card khadane-variety-card--grid' +
        ` khadane-variety-card--tier-${variety.tier}`
      }
      data-tier={variety.tier}
      data-founding={variety.foundingStone ? 'true' : 'false'}
      role="listitem"
    >
      <Link
        href={`/khadane/collection/${variety.slug}`}
        className="khadane-variety-card__link"
      >
        <div className="khadane-variety-card__image-wrap">
          <PlaceholderImage
            variant={
              (variety.placeholderClass.replace(
                'placeholder-',
                ''
              ) as 'stone-grey') || 'stone'
            }
            label={variety.tier === 'owned' ? 'OWNED' : 'ALLIED'}
            title={variety.catalogueName}
            spec={variety.primaryLocation.village || variety.primaryLocation.district}
            aspectRatio="4/3"
            useSvg={false}
            className="khadane-variety-card__image"
          />
        </div>
        <div className="khadane-variety-card__content">
          <div className="khadane-variety-card__badges">
            <span
              className={
                'khadane-badge khadane-badge--' + variety.tier
              }
            >
              {variety.tier === 'owned' ? ownedLabel : alliedLabel}
            </span>
            {variety.foundingStone && (
              <span className="khadane-badge khadane-badge--founding">
                {foundingLabel}
              </span>
            )}
          </div>
          <h3 className="khadane-variety-card__name">
            {variety.catalogueName}
          </h3>
          {variety.nameHindi && (
            <p className="khadane-variety-card__name-hindi">
              {variety.nameHindi}
            </p>
          )}
          <p className="khadane-variety-card__subline">{variety.heroSubline}</p>
          <p className="khadane-variety-card__location">
            {variety.primaryLocation.village
              ? `${variety.primaryLocation.village}, ${variety.primaryLocation.district} District`
              : `${variety.primaryLocation.district} District`}
            {variety.primaryLocation.state &&
              variety.primaryLocation.state !== 'Rajasthan' &&
              ` \u00b7 ${variety.primaryLocation.state}`}
          </p>
        </div>
      </Link>
    </article>
  )
}
