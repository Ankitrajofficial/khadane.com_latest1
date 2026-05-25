// ============================================================
// KHADANE™ — Edge Detail Template · v3.1
// Single-edge page: process, formats available, related edges.
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { EDGES, getEdgeBySlug, type Edge } from '@/lib/edges'
import { FORMATS } from '@/lib/formats'

export function generateStaticParams() {
  return EDGES.map((e) => ({ edge: e.slug }))
}

interface PageProps {
  params: Promise<{ edge: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { edge } = await params
  const e = getEdgeBySlug(edge)
  if (!e) return { title: 'Edge not found' }
  return {
    title: `${e.name} edge`,
    description: `${e.name} \u2014 ${e.caption} Process, formats, applications.`,
    alternates: {
      canonical: `https://khadane.com/formats/edges/${e.slug}`,
    },
  }
}

export default async function EdgeDetailPage({ params }: PageProps) {
  const { edge: slug } = await params
  const e = getEdgeBySlug(slug)
  if (!e) notFound()
  const edge: Edge = e as Edge

  // Formats that offer this edge profile.
  const formatsAvailable = FORMATS.filter((f) =>
    f.edgesAvailable.includes(edge.slug)
  )

  // The other three edge profiles.
  const relatedEdges = EDGES.filter((x) => x.slug !== edge.slug)

  return (
    <article className="khadane-edge-page" data-edge={edge.slug}>
      {/* HERO */}
      <section
        className="khadane-variety-hero"
        aria-labelledby="edge-heading"
      >
        <div className="khadane-variety-hero__image-wrap">
          <PlaceholderImage
            variant="stone"
            label="EDGE PROFILE"
            title={edge.name}
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-variety-hero__content">
          <p className="khadane-eyebrow">EDGE PROFILE</p>
          <h1 id="edge-heading" className="khadane-variety-hero__headline">
            {edge.name}
          </h1>
          <p className="khadane-variety-hero__subline">{edge.caption}</p>
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
              {edge.description}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* PROCESS */}
      <section
        className="khadane-section khadane-section--process"
        aria-labelledby="edge-process-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="edge-process-heading" className="khadane-section-title">
              The process at the yard
            </h2>
            <p className="khadane-body-prose">{edge.process}</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* COMMON USES */}
      <section
        className="khadane-section khadane-section--typical-use"
        aria-labelledby="edge-common-uses-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2
              id="edge-common-uses-heading"
              className="khadane-section-title"
            >
              Commonly specified for
            </h2>
            <ul className="khadane-typical-use-list">
              {edge.commonUses.map((use, i) => (
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
          aria-labelledby="edge-formats-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2 id="edge-formats-heading" className="khadane-section-title">
                Formats that take this edge
              </h2>
              <p className="khadane-caption-italic-gold">
                {edge.name} is cut for the following formats in the catalogue.
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

      {/* RELATED EDGES */}
      {relatedEdges.length > 0 && (
        <section
          className="khadane-section khadane-section--related"
          aria-labelledby="edge-related-heading"
        >
          <RevealOnScroll>
            <div className="khadane-prose-container">
              <h2 id="edge-related-heading" className="khadane-section-title">
                Other edges
              </h2>
            </div>
            <div className="khadane-tile-grid khadane-tile-grid--edges">
              {relatedEdges.map((r) => (
                <Link
                  key={r.slug}
                  href={`/khadane/formats/edges/${r.slug}`}
                  className="khadane-tile khadane-tile--edge"
                >
                  <div className="khadane-tile__image">
                    <PlaceholderImage
                      variant="stone"
                      label="EDGE"
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
                href="/khadane/formats/edges"
                className="khadane-button khadane-button--ghost"
              >
                All edges
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </article>
  )
}
