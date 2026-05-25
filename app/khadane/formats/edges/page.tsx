// ============================================================
// KHADANE™ — Edges Landing · v3.1
// 4 edge profiles cut at the Bijolia yard.
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { EDGES } from '@/lib/edges'

export const metadata: Metadata = {
  title: 'Edges',
  description:
    'The four edge profiles KHADANE\u2019s Bijolia yard cuts for sandstone ' +
    'paving and architectural pieces \u2014 hand-cut, hand-cut straight, ' +
    'machine-cut, bullnose.',
  alternates: {
    canonical: 'https://khadane.com/formats/edges',
  },
}

export default function EdgesLandingPage() {
  return (
    <>
      <section
        className="khadane-page-header"
        aria-labelledby="edges-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE PROFILES</p>
          <h1 id="edges-heading" className="khadane-page-headline">
            Edges.
          </h1>
          <p className="khadane-page-subline">
            Hand-cut, machine-cut, bullnose. As the format requires.
          </p>
        </div>
      </section>

      <section
        className="khadane-section khadane-section--prose"
        aria-label="Editorial introduction"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              Four edge profiles cover the catalogue \u2014 from the natural
              irregularity of hand-cut, through the worked-but-ordered straight
              hand cut, to the precision of machine-cut and the rounded
              architectural softness of bullnose. The edge choice is part of
              the format specification; some edges only apply to certain
              formats.
            </p>
            <p className="khadane-body-prose">
              Hand-cut and hand-cut straight are dressed at the Bijolia yard
              by chisel-and-hammer crews; the variation along the edge is the
              visible mark of the work. Machine-cut runs through the
              calibration saws and edging machines for precise tolerances.
              Bullnose is cut on dedicated profilers to standard radii.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--grid"
        aria-label="All edges"
      >
        <RevealOnScroll>
          <div className="khadane-tile-grid khadane-tile-grid--edges-large">
            {EDGES.map((e) => (
              <Link
                key={e.slug}
                href={`/khadane/formats/edges/${e.slug}`}
                className="khadane-tile khadane-tile--edge khadane-tile--large"
              >
                <div className="khadane-tile__image">
                  <PlaceholderImage
                    variant="stone"
                    label="EDGE"
                    title={e.name}
                    aspectRatio="4/3"
                    useSvg={false}
                  />
                </div>
                <div className="khadane-tile__content">
                  <h2 className="khadane-tile__name">{e.name}</h2>
                  <p className="khadane-tile__caption">{e.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--desk"
        aria-label="Cross-links"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose">
              For surface treatments, see the{' '}
              <Link
                href="/khadane/formats/surfaces"
                className="khadane-link-gold"
              >
                Surfaces
              </Link>{' '}
              catalogue. For per-format edge availability, see each{' '}
              <Link href="/khadane/formats" className="khadane-link-gold">
                Format
              </Link>{' '}
              page.
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
