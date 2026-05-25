// ============================================================
// KHADANE™ — Homepage · v3.1
// Hero + opening prose + six-card teaser grid to the major sections.
// Voice: Salvatori spine + Antolini brevity. Justified body throughout.
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import HomeProofGallery, { type HomeImageSlot } from '@/components/khadane/HomeProofGallery'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import Marquee from '@/components/khadane/Marquee'
import { getEnglishDictionary } from '@/lib/i18n/dictionaries'
import { OWNED_VARIETIES, ALLIED_VARIETIES, FOUNDING_STONES } from '@/lib/varieties'

const HOMEPAGE_HERO_VIDEO =
  'https://github.com/Ankitrajofficial/sandstone_mlswebsite/releases/download/v1.0-assets/Mines01.mp4'

const HOME_IMAGE_SLOTS: HomeImageSlot[] = [
  {
    variant: 'quarry',
    label: 'QUARRY FACE',
    title: 'The Bijolia belt from above',
    caption: 'Wide quarry views, benches, working faces, and the road into the pit.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/DJI_20260330110940_0237_D.jpg',
    imageWidth: 8192,
    imageHeight: 4608,
  },
  {
    variant: 'yard',
    label: 'THE YARD',
    title: 'Blocks arriving for dressing',
    caption: 'Raw block receiving, sorting, and movement through the Bijolia yard.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0106.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'stone',
    label: 'CUTTING',
    title: 'Cut and calibration line',
    caption: 'Sawing, edge work, surface finishing, and size verification.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0175.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'stone-grey',
    label: 'SAW DETAIL',
    title: 'Wet cutting close-up',
    caption: 'Close machine detail from the cutting bed, showing stone under active dressing.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/IMG_3755_4.jpg',
    imageWidth: 1600,
    imageHeight: 2400,
  },
  {
    variant: 'stone-warm',
    label: 'BLADE WORK',
    title: 'Blade work in motion',
    caption: 'Gang-saw cutting sequence for repeatable thickness and format preparation.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/DSC08093.jpg',
    imageWidth: 7008,
    imageHeight: 4672,
  },
  {
    variant: 'stone-grey',
    label: 'MATERIAL',
    title: 'Close-up stone character',
    caption: 'Colour, bedding, fossil marks, riven texture, and surface variation.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/IMG_0223_2_preview.jpg',
    imageWidth: 1800,
    imageHeight: 2400,
  },
  {
    variant: 'stone-warm',
    label: 'FORMATS',
    title: 'Paving and format stacks',
    caption: 'Pavings, setts, steps, coping, walling, and project-ready sizes.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0123.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'belt',
    label: 'DISPATCH',
    title: 'Crates ready for export',
    caption: 'Final checks, packing, container loading, and export documentation.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0473.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'belt',
    label: 'PACKED LOTS',
    title: 'Packed stone lots',
    caption: 'Finished crates staged under cover for buyer-ready dispatch.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0283.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'yard',
    label: 'LOADING',
    title: 'Yard loading',
    caption: 'Crated stone lifted from the yard and prepared for truck movement.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/500_0402.JPG',
    imageWidth: 6000,
    imageHeight: 4000,
  },
  {
    variant: 'quarry',
    label: 'YARD VIEW',
    title: 'Yard from above',
    caption: 'Aerial view of finished stock, handling routes, and loading movement.',
    aspectRatio: 'aspect-[4/3]',
    imagePath: '/img/homepage/DJI_20260329170226_0137_D_2.jpg',
    imageWidth: 8192,
    imageHeight: 4608,
  },
]

export const metadata: Metadata = {
  title: 'KHADANE™ — Stone of the Bijolia Belt. Since 1972.',
  description:
    'KHADANE is the trade brand of Mohan Lal & Sons (Dhakar Stones Group), ' +
    'working the Bijolia sandstone belt of Rajasthan since 1972. Twenty-three ' +
    'sandstones, owned and allied. Every format the trade asks for.',
  alternates: {
    canonical: 'https://khadane.com',
  },
}

export default function KhadaneHomepage() {
  const dict = getEnglishDictionary()
  const ownedCount = OWNED_VARIETIES.length
  const alliedCount = ALLIED_VARIETIES.length

  return (
    <>
      <section
        className="khadane-home-video-hero relative min-h-[100svh] w-full overflow-hidden"
        data-surface="dark"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-tobacco to-obsidian" />

        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/img/homepage/DJI_20260330110940_0237_D.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HOMEPAGE_HERO_VIDEO} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian/75" />

        <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-14">
          <h1 className="khadane-home-video-hero__title font-serif text-warm-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight max-w-5xl">
            Stone of the{' '}
            <em className="text-quarry-gold font-normal italic">Bijolia Belt</em>
          </h1>
          <p className="khadane-home-video-hero__subline font-sans text-stone-linen/80 mt-8 text-sm sm:text-base md:text-lg tracking-wider uppercase">
            Direct from the Quarry · Since 1972
          </p>
        </div>
      </section>

      <Marquee />

      <section
        className="khadane-section khadane-section--prose"
        aria-label="Opening"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              {dict.homepage.openingPara}
            </p>
            <p className="khadane-body-prose">{dict.homepage.closingPara}</p>
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--home-images"
        aria-labelledby="home-images-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container khadane-home-images__header">
            <p className="khadane-eyebrow">QUARRY TO DISPATCH</p>
            <h2 id="home-images-heading" className="khadane-section-title">
              Proof you can see.
            </h2>
            <p className="khadane-home-images__subline">
              Source, cutting, yard, material, and packing. Real frames from the
              Bijolia belt.
            </p>
          </div>

          <HomeProofGallery slots={HOME_IMAGE_SLOTS} />
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--founding"
        aria-label="Founding stones"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">SINCE 1972</p>
            <h2 className="khadane-section-title">The founding stones.</h2>
            <p className="khadane-body-prose">
              Two stones anchor the catalogue at its earliest years.{' '}
              <strong>Kandla Grey</strong>, first quarried from the family’s
              block at Parana village in Bundi District, and{' '}
              <strong>Slate Grey</strong>, worked from the family’s blocks in
              the Dabi-Budhpura area. Both have been continuously quarried since
              1972, and both remain in the working catalogue today.
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

      <section
        className="khadane-section khadane-section--teasers"
        aria-label="Sections"
      >
        <RevealOnScroll>
          <div className="khadane-teaser-grid">
            <TeaserCard
              href="/khadane/collection"
              eyebrow="THE CATALOGUE"
              title={dict.homepage.collectionTeaser}
              subline={dict.homepage.collectionTeaserSubline}
              meta={`${ownedCount} owned · ${alliedCount} allied`}
              variant="stone-grey"
            />
            <TeaserCard
              href="/khadane/formats"
              eyebrow="THE FORMS"
              title={dict.homepage.formatsTeaser}
              subline={dict.homepage.formatsTeaserSubline}
              meta="19 formats · 11 surfaces · 4 edges"
              variant="stone"
            />
            <TeaserCard
              href="/khadane/quarry"
              eyebrow="THE SOURCE"
              title={dict.homepage.quarryTeaser}
              subline={dict.homepage.quarryTeaserSubline}
              meta="Bijolia and Bundi districts, Rajasthan"
              variant="quarry"
            />
            <TeaserCard
              href="/khadane/yard"
              eyebrow="THE PROCESS"
              title={dict.homepage.yardTeaser}
              subline={dict.homepage.yardTeaserSubline}
              meta="From block to crate, in six checkpoints"
              variant="yard"
            />
            <TeaserCard
              href="/khadane/field-notes"
              eyebrow="THE VOICE"
              title={dict.homepage.fieldNotesTeaser}
              subline={dict.homepage.fieldNotesTeaserSubline}
              meta="Notes from the belt"
              variant="stone-warm"
            />
            <TeaserCard
              href="/khadane/group"
              eyebrow="THE HOUSE"
              title={dict.homepage.groupTeaser}
              subline={dict.homepage.groupTeaserSubline}
              meta="Five verticals · fifty-three years"
              variant="portrait"
            />
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer’s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE BUYER’S DESK</p>
            <h2 className="khadane-section-title">
              Enquire from the desk at Bijolia.
            </h2>
            <p className="khadane-body-prose">
              Buyer enquiries reach the export desk at Bijolia directly. Trade
              terms, sample requests, and project specifications are all handled
              from a single point. Responded to within one business day.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk"
                className="khadane-button khadane-button--primary"
              >
                Enquire
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
    </>
  )
}

interface TeaserCardProps {
  href: string
  eyebrow: string
  title: string
  subline: string
  meta: string
  variant:
    | 'stone'
    | 'quarry'
    | 'yard'
    | 'stone-grey'
    | 'stone-warm'
    | 'stone-red'
    | 'stone-green'
    | 'portrait'
    | 'belt'
}

function TeaserCard({
  href,
  eyebrow,
  title,
  subline,
  meta,
  variant,
}: TeaserCardProps) {
  return (
    <Link href={href} className="khadane-teaser-card khadane-variety-card">
      <div className="khadane-teaser-card__image-wrap">
        <PlaceholderImage
          variant={variant}
          label={eyebrow}
          title={title}
          aspectRatio="4/3"
          useSvg={false}
          className="khadane-variety-card__image"
        />
      </div>
      <div className="khadane-teaser-card__content">
        <p className="khadane-eyebrow khadane-teaser-card__eyebrow">{eyebrow}</p>
        <h3 className="khadane-teaser-card__title">{title}</h3>
        <p className="khadane-teaser-card__subline">{subline}</p>
        <p className="khadane-teaser-card__meta">{meta}</p>
      </div>
    </Link>
  )
}
