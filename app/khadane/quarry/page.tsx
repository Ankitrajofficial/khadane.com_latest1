// ============================================================
// KHADANE™ — The Quarry · v3.1
// 2 hero photos + 8 working photographs.
// Editorial register: Salvatori spine, justified body.
// All photo slots driven from lib/photography.ts QUARRY_PHOTOS.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { QUARRY_PHOTOS } from '@/lib/photography'
import { getAllQuarryVillages, FOUNDING_STONES } from '@/lib/varieties'

export const metadata: Metadata = {
  title: 'The Quarry',
  description:
    'The Bijolia sandstone belt of Rajasthan. KHADANE\u2019s owned quarries ' +
    'and the broader working belt, photographed from the cut. Sixteen ' +
    'quarry villages contribute to the catalogue.',
  alternates: {
    canonical: 'https://khadane.com/quarry',
  },
}

export default function TheQuarryPage() {
  const heroPhotos = QUARRY_PHOTOS.filter((p) => p.isHero)
  const workingPhotos = QUARRY_PHOTOS.filter((p) => !p.isHero)
  const villages = getAllQuarryVillages()

  return (
    <>
      {/* ───────────────────────────────────────────────
          HERO — first of the two hero photos
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-quarry-hero"
        aria-labelledby="quarry-heading"
      >
        <div className="khadane-quarry-hero__image-wrap">
          <PlaceholderImage
            variant="quarry"
            label={heroPhotos[0]?.caption ?? 'The Bijolia belt'}
            title="THE QUARRY \u00b7 HERO 01"
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-quarry-hero__content">
          <p className="khadane-eyebrow">THE SOURCE</p>
          <h1 id="quarry-heading" className="khadane-quarry-hero__headline">
            The Quarry.
          </h1>
          <p className="khadane-quarry-hero__subline">
            A working belt of the Bijolia District. Sixteen quarry villages.
            The two founding stones still in continuous extraction since 1972.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          OPENING PROSE — three paragraphs, Salvatori spine
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Opening prose"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              KHADANE works the Bijolia sandstone belt of Rajasthan \u2014 a
              geological formation that runs across both the Bhilwara and
              Bundi sides of the broader Vindhyan deposit. The family\u2019s
              quarry holdings sit within this belt, joined by allied partner
              quarries across the wider Vindhyan extension into Madhya Pradesh
              and Uttar Pradesh.
            </p>
            <p className="khadane-body-prose">
              Sixteen distinct quarry villages contribute stone to the
              catalogue today. The two founding stones \u2014 Kandla Grey and
              Slate Grey \u2014 have been continuously quarried since 1972, the
              year the family\u2019s operation began. Newer varieties came into
              the catalogue across the 1980s, 1990s, and 2000s as additional
              beds were opened and allied partnerships were formed.
            </p>
            <p className="khadane-body-prose">
              The quarrying operation is documented openly. The photographs on
              this page show the working faces, the extraction crews, the
              bedding planes at the cut. Nothing here is staged; the working
              quarry is what the photographs show.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          HERO 02 — second hero photograph
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--hero-photo"
        aria-label="A working face"
      >
        <RevealOnScroll>
          <figure className="khadane-figure khadane-figure--full">
            <PlaceholderImage
              variant="quarry"
              label={heroPhotos[1]?.caption ?? 'A working face at distance'}
              title="THE QUARRY \u00b7 HERO 02"
              aspectRatio="16/9"
              useSvg={false}
              className="khadane-hero-image"
            />
            <figcaption className="khadane-figure__caption">
              <em>{heroPhotos[1]?.caption}</em>
            </figcaption>
          </figure>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          THE VILLAGES — list with editorial context
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="villages-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="villages-heading" className="khadane-section-title">
              The villages.
            </h2>
            <p className="khadane-body-prose">
              Each variety in the catalogue carries the name of its origin
              village in its provenance line. The villages here are the ones
              KHADANE works directly \u2014 owned blocks, owned crews, owned
              equipment \u2014 plus those of the allied partner quarries.
            </p>
            <ul className="khadane-villages-list">
              {villages.map((village) => (
                <li key={village} className="khadane-villages-list__item">
                  {village}
                </li>
              ))}
            </ul>
            <p className="khadane-body-prose">
              Bijolia, Bundi, Bharatpur, Dholpur, and Lalitpur. Plus partner
              quarries in Sagar, Gwalior, and Jaisalmer districts. The
              specific village for each variety appears on its variety page.
            </p>
            <Link href="/khadane/collection" className="khadane-link-gold">
              Browse the Collection \u2192
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          WORKING PHOTOGRAPHS — 8-photo gallery
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--quarry-photos"
        aria-labelledby="quarry-photos-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="quarry-photos-heading" className="khadane-section-title">
              At the cut.
            </h2>
            <p className="khadane-caption-italic-gold">
              Documentary photographs of the working operation.
            </p>
          </div>
          <div className="khadane-photo-grid khadane-photo-grid--quarry">
            {workingPhotos.map((photo) => (
              <figure key={photo.key} className="khadane-figure">
                <div className="khadane-figure__image">
                  <PlaceholderImage
                    variant="quarry"
                    label={photo.caption}
                    title={photo.key.toUpperCase()}
                    aspectRatio={photo.aspect ?? '3/2'}
                    useSvg={false}
                  />
                </div>
                <figcaption className="khadane-figure__caption">
                  <em>{photo.caption}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          THE FOUNDING STONES — closing editorial
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="founding-stones-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">SINCE 1972</p>
            <h2 id="founding-stones-heading" className="khadane-section-title">
              The continuous beds.
            </h2>
            <p className="khadane-body-prose">
              Two stones in the catalogue have been worked without interruption
              since the founding year. Both are quarried from the family\u2019s
              own blocks; both are foundational to how the operation grew. Each
              is described in detail on its own page.
            </p>
            <ul className="khadane-founding-list">
              {FOUNDING_STONES.map((v) => (
                <li key={v.code}>
                  <Link
                    href={`/khadane/collection/${v.slug}`}
                    className="khadane-founding-list__link"
                  >
                    <span className="khadane-founding-list__name">
                      {v.catalogueName}
                    </span>
                    <span className="khadane-founding-list__caption">
                      {v.heroSubline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          CROSS-LINK TO THE YARD
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The Yard cross-link"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE PROCESS</p>
            <h2 className="khadane-section-title">
              From the quarry, to the yard.
            </h2>
            <p className="khadane-body-prose">
              Raw blocks extracted from the quarries travel by truck to the
              Bijolia processing yard, where the cutting, surfacing, and edging
              happens. The full sequence from block arrival to container
              loading is documented on the Yard page.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/yard"
                className="khadane-button khadane-button--primary"
              >
                The Yard
              </Link>
              <Link
                href="/khadane/gallery"
                className="khadane-button khadane-button--ghost"
              >
                Full gallery
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
