// ============================================================
// KHADANE™ — Gallery Category · v3.1
// Per-category browse: hero + photo grid + cross-links to other
// categories. Uses GALLERY_CATEGORIES from lib/photography.ts.
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import MasonryGrid from '@/components/khadane/MasonryGrid'
import {
  GALLERY_CATEGORIES,
  getGalleryCategory,
  type GalleryCategory,
} from '@/lib/photography'

export function generateStaticParams() {
  return GALLERY_CATEGORIES.map((c) => ({ category: c.slug }))
}

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params
  const cat = getGalleryCategory(category)
  if (!cat) return { title: 'Gallery category not found' }
  return {
    title: cat.name,
    description: `${cat.name} \u2014 ${cat.caption} ${cat.photos.length} photographs in this gallery.`,
    alternates: {
      canonical: `https://khadane.com/gallery/${cat.slug}`,
    },
  }
}

export default async function GalleryCategoryPage({ params }: PageProps) {
  const { category: slug } = await params
  const c = getGalleryCategory(slug)
  if (!c) notFound()
  const category: GalleryCategory = c as GalleryCategory

  // Related categories (the other seven).
  const related = GALLERY_CATEGORIES.filter((x) => x.slug !== category.slug)

  return (
    <article
      className="khadane-gallery-category-page"
      data-category={category.slug}
    >
      {/* ───────────────────────────────────────────────
          HERO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-quarry-hero"
        aria-labelledby="gallery-cat-heading"
      >
        <div className="khadane-quarry-hero__image-wrap">
          <PlaceholderImage
            variant="stone"
            label={category.hero.caption}
            title={`GALLERY \u00b7 ${category.name.toUpperCase()}`}
            aspectRatio={category.hero.aspect ?? '16/9'}
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-quarry-hero__content">
          <p className="khadane-eyebrow">GALLERY</p>
          <h1
            id="gallery-cat-heading"
            className="khadane-quarry-hero__headline"
          >
            {category.name}.
          </h1>
          <p className="khadane-quarry-hero__subline">{category.caption}</p>
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
              {category.description}
            </p>
            <p className="khadane-collection-counts">
              <span>{category.photos.length} photographs</span>
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          PHOTO GRID
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--gallery-grid"
        aria-label={`${category.name} photographs`}
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <MasonryGrid
              photos={category.photos}
              categoryName={category.name}
              placeholderVariant="stone"
            />
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          OTHER CATEGORIES
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--related"
        aria-labelledby="other-categories-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2
              id="other-categories-heading"
              className="khadane-section-title"
            >
              Other categories
            </h2>
          </div>
          <div className="khadane-gallery-category-grid">
            {related.map((cat) => (
              <Link
                key={cat.slug}
                href={`/khadane/gallery/${cat.slug}`}
                className="khadane-gallery-category-card khadane-variety-card"
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
                  <h3 className="khadane-gallery-category-card__name">
                    {cat.name}
                  </h3>
                  <p className="khadane-gallery-category-card__caption">
                    {cat.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          DESK
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer\u2019s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/gallery"
                className="khadane-button khadane-button--ghost"
              >
                All gallery categories
              </Link>
              <Link
                href="/khadane/desk?intent=press"
                className="khadane-button khadane-button--primary"
              >
                Request imagery
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </article>
  )
}
