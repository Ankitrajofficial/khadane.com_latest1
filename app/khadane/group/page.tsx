// ============================================================
// KHADANE™ — The Group · v3.1
//
// 6 sections per the locked v3.1 wireframe:
//   01. Hero
//   02. The Operation (3 paragraphs)
//   03. The Five Verticals (5 cards — category-named, no brand names)
//   04. The Belt (3 paragraphs naming 13+ quarry villages)
//   05. Sourcing & Workforce (2 paragraphs)
//   06. The Buyer Desk
//
// Critical corrections folded in:
//   - Hospitality vertical is in Kota (not Bijolia)
//   - "Dhakar Stones Group" surfaces in hero sub-line, footer, SEO meta,
//     and the JSON-LD alternateName
//   - No certifications claimed
//   - No "third generation" framing
//   - 5 verticals exactly: no QUENCH or manufacturing mention
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import MLSMark from '@/components/khadane/MLSMark'
import { getEnglishDictionary } from '@/lib/i18n/dictionaries'
import { GROUP_PHOTOS } from '@/lib/photography'
import {
  getAllQuarryVillages,
  OWNED_VARIETIES,
  ALLIED_VARIETIES,
} from '@/lib/varieties'

export const metadata: Metadata = {
  title: 'The Group',
  description:
    'Mohan Lal & Sons \u2014 a working enterprise across five verticals ' +
    '(stone & export, automotive & fuel, hospitality, student housing, food ' +
    'services), based in Bijolia, Rajasthan, in continuous operation since ' +
    '1972. Also known to the trade as the Dhakar Stones Group.',
  alternates: {
    canonical: 'https://khadane.com/group',
  },
  // JSON-LD-style structured data is rendered as a Script tag below in the body.
}

export default function TheGroupPage() {
  const dict = getEnglishDictionary()
  const villages = getAllQuarryVillages()
  const ownedCount = OWNED_VARIETIES.length
  const alliedCount = ALLIED_VARIETIES.length

  // JSON-LD for the group operation
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mohan Lal & Sons',
    alternateName: 'Dhakar Stones Group',
    foundingDate: '1972',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bijolia',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
    },
    brand: [
      {
        '@type': 'Brand',
        name: 'KHADANE',
        url: 'https://khadane.com',
      },
    ],
    email: 'exports@khadane.com',
  }

  return (
    <>
      {/* Inline JSON-LD for the operation, per locked v3.1 SEO surface */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────────────────────────────────────────
          SECTION 01 — HERO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-quarry-hero khadane-group-hero"
        aria-labelledby="group-heading"
      >
        <div className="khadane-quarry-hero__image-wrap">
          <PlaceholderImage
            variant="portrait"
            label={GROUP_PHOTOS.hero.caption}
            title="THE GROUP \u00b7 HERO"
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-quarry-hero__content">
          <p className="khadane-eyebrow">{dict.group.eyebrow}</p>
          <h1 id="group-heading" className="khadane-quarry-hero__headline">
            {dict.group.headline}
          </h1>
          <p className="khadane-quarry-hero__subline">{dict.group.subline}</p>
          <p className="khadane-group-hero__caption">
            <em>{dict.group.captionUnderHero}</em>
          </p>
        </div>
      </section>

      <section className="khadane-credentials-band" data-surface="dark">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-quarry-gold/80 uppercase mb-8">
            A KHADANE™ Brand · Of the MLS Group
          </p>

          <div className="flex justify-center mb-8">
            <MLSMark surface="tobacco" size="lg" />
          </div>

          <p className="font-serif italic text-stone-linen/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            KHADANE™ is the stone &amp; export vertical of Mohan Lal &amp; Sons
            — a family enterprise operating five businesses out of Bijolia,
            Bhilwara District, Rajasthan, since 1972.
          </p>

          <div className="w-16 h-px bg-quarry-gold/50 mx-auto mt-12" />
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 02 — THE OPERATION
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="operation-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">02</p>
            <h2 id="operation-heading" className="khadane-section-title">
              {dict.group.operationSectionTitle}
            </h2>
            <p className="khadane-body-prose khadane-body-prose--lead">
              {dict.group.operationPara1}
            </p>
            <p className="khadane-body-prose">{dict.group.operationPara2}</p>
            <p className="khadane-body-prose">{dict.group.operationPara3}</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 03 — THE FIVE VERTICALS
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--verticals"
        aria-labelledby="verticals-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">03</p>
            <h2 id="verticals-heading" className="khadane-section-title">
              {dict.group.verticalsSectionTitle}
            </h2>
          </div>
          <div className="khadane-verticals-grid">
            <VerticalCard
              name={dict.group.verticalStone.name}
              foundedYear={dict.group.verticalStone.foundedYear}
              description={dict.group.verticalStone.description}
              photoKey={GROUP_PHOTOS.verticalStone.path}
              photoCaption={GROUP_PHOTOS.verticalStone.caption}
              cta={{
                href: '/khadane/collection',
                label: 'Browse the Collection',
              }}
            />
            <VerticalCard
              name={dict.group.verticalAutomotive.name}
              foundedYear={dict.group.verticalAutomotive.foundedYear}
              description={dict.group.verticalAutomotive.description}
              photoKey={GROUP_PHOTOS.verticalAutomotive.path}
              photoCaption={GROUP_PHOTOS.verticalAutomotive.caption}
            />
            <VerticalCard
              name={dict.group.verticalHospitality.name}
              foundedYear={dict.group.verticalHospitality.foundedYear}
              description={dict.group.verticalHospitality.description}
              photoKey={GROUP_PHOTOS.verticalHospitality.path}
              photoCaption={GROUP_PHOTOS.verticalHospitality.caption}
            />
            <VerticalCard
              name={dict.group.verticalHousing.name}
              foundedYear={dict.group.verticalHousing.foundedYear}
              description={dict.group.verticalHousing.description}
              photoKey={GROUP_PHOTOS.verticalHousing.path}
              photoCaption={GROUP_PHOTOS.verticalHousing.caption}
            />
            <VerticalCard
              name={dict.group.verticalFood.name}
              foundedYear={dict.group.verticalFood.foundedYear}
              description={dict.group.verticalFood.description}
              photoKey={GROUP_PHOTOS.verticalFood.path}
              photoCaption={GROUP_PHOTOS.verticalFood.caption}
            />
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 04 — THE BELT
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="belt-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">04</p>
            <h2 id="belt-heading" className="khadane-section-title">
              {dict.group.beltSectionTitle}
            </h2>
            <p className="khadane-body-prose khadane-body-prose--lead">
              {dict.group.beltPara1}
            </p>
            <p className="khadane-body-prose">{dict.group.beltPara2}</p>
            <p className="khadane-body-prose">{dict.group.beltPara3}</p>
            <p className="khadane-collection-counts">
              <span>{ownedCount} owned varieties</span>
              <span className="khadane-divider" aria-hidden="true">{' \u00b7 '}</span>
              <span>{alliedCount} allied varieties</span>
              <span className="khadane-divider" aria-hidden="true">{' \u00b7 '}</span>
              <span>{villages.length} quarry villages</span>
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 05 — SOURCING & WORKFORCE
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="sourcing-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">05</p>
            <h2 id="sourcing-heading" className="khadane-section-title">
              {dict.group.sourcingSectionTitle}
            </h2>
            <p className="khadane-body-prose khadane-body-prose--lead">
              {dict.group.sourcingPara1}
            </p>
            <p className="khadane-body-prose">{dict.group.sourcingPara2}</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 06 — THE BUYER DESK
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk khadane-section--buyer-desk"
        aria-labelledby="desk-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">06</p>
            <h2 id="desk-heading" className="khadane-section-title">
              {dict.group.deskSectionTitle}
            </h2>
            <dl className="khadane-desk-rows">
              <DeskRow
                label={dict.group.deskEnquiryLabel}
                value="exports@khadane.com"
                note={dict.group.deskEnquiryNote}
              />
              <DeskRow
                label={dict.group.deskLocationLabel}
                value={dict.group.deskLocationValue}
                note={dict.group.deskLocationNote}
              />
              <DeskRow
                label={dict.group.deskCatalogueLabel}
                value={`${ownedCount + alliedCount} varieties`}
                note={dict.group.deskCatalogueNote}
              />
              <DeskRow
                label={dict.group.deskDatasheetsLabel}
                value="On enquiry"
                note={dict.group.deskDatasheetsNote}
              />
              <DeskRow
                label={dict.group.deskSamplesLabel}
                value="Within 5 business days"
                note={dict.group.deskSamplesNote}
              />
            </dl>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk"
                className="khadane-button khadane-button--primary"
              >
                {dict.actions.enquire}
              </Link>
              <a
                href="mailto:exports@khadane.com"
                className="khadane-button khadane-button--ghost"
              >
                exports@khadane.com
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          GROUP CREDIT FOOTER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--credit"
        aria-label="Group credit"
      >
        <div className="khadane-prose-container">
          <p className="khadane-group-credit">
            <em>
              KHADANE\u2122 is the stone and export vertical of Mohan Lal &
              Sons, Bijolia, Rajasthan. Also known to the trade as the Dhakar
              Stones Group. Working continuously since 1972.
            </em>
          </p>
        </div>
      </section>
    </>
  )
}

// ============================================================
// VerticalCard — single vertical block in Section 03
// ============================================================

interface VerticalCardProps {
  name: string
  foundedYear: string
  description: string
  photoKey: string
  photoCaption: string
  cta?: {
    href: string
    label: string
  }
}

function VerticalCard({
  name,
  foundedYear,
  description,
  photoCaption,
  cta,
}: VerticalCardProps) {
  return (
    <article
      className="khadane-group-vertical"
      aria-label={`${name} vertical`}
    >
      <div className="khadane-group-vertical__image">
        <PlaceholderImage
          variant="stone"
          label={name.toUpperCase()}
          title={photoCaption}
          aspectRatio="4/3"
          useSvg={false}
        />
      </div>
      <div className="khadane-group-vertical__content">
        <h3 className="khadane-group-vertical__name">{name}</h3>
        {foundedYear && (
          <p className="khadane-group-vertical__founded">{foundedYear}</p>
        )}
        <p className="khadane-group-vertical__description">{description}</p>
        {cta && (
          <Link href={cta.href} className="khadane-link-gold">
            {cta.label} \u2192
          </Link>
        )}
      </div>
    </article>
  )
}

// ============================================================
// DeskRow — dt/dd row for Section 06
// ============================================================

interface DeskRowProps {
  label: string
  value: string
  note: string
}

function DeskRow({ label, value, note }: DeskRowProps) {
  return (
    <div className="khadane-desk-rows__row">
      <dt className="khadane-desk-rows__label">{label}</dt>
      <dd className="khadane-desk-rows__value">
        <strong>{value}</strong>
        <span className="khadane-desk-rows__note">{note}</span>
      </dd>
    </div>
  )
}
