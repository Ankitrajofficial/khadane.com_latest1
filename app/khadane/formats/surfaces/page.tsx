// ============================================================
// KHADANE™ — Surfaces Landing · v3.1
// 11 surface treatments worked at the Bijolia yard.
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { SURFACES } from '@/lib/surfaces'

export const metadata: Metadata = {
  title: 'Surfaces',
  description:
    'The eleven surface treatments KHADANE\u2019s Bijolia yard applies to ' +
    'sandstone before dispatch \u2014 natural riven, honed, sandblast, flamed, ' +
    'rockfaced, sawn, tumbled, brushed, cotton brush, leather, shotblast.',
  alternates: {
    canonical: 'https://khadane.com/formats/surfaces',
  },
}

export default function SurfacesLandingPage() {
  return (
    <>
      <section
        className="khadane-page-header"
        aria-labelledby="surfaces-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE TREATMENTS</p>
          <h1 id="surfaces-heading" className="khadane-page-headline">
            Surfaces.
          </h1>
          <p className="khadane-page-subline">
            Worked at the yard, before the stone ships. Eleven treatments
            across the catalogue.
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
              Every stone in the KHADANE catalogue can take any of eleven
              surface treatments \u2014 from the unworked natural riven face,
              through the smooth matte of honed and brushed, to the deeply
              textured roughness of flamed and rockfaced. The surface choice
              shapes how the stone reads in the eventual installation, how it
              behaves underfoot, and how it weathers across time.
            </p>
            <p className="khadane-body-prose">
              All surface work happens at the Bijolia yard before crates leave
              for Mundra. The yard equipment covers diamond-abrasive lines for
              the honed and leather range, sandblast and shotblast chambers,
              oxy-acetylene flame torches, hand-bushed and pneumatic bushing
              hammers for rockfaced, and a tumbling drum for aged-look paving.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="khadane-section khadane-section--grid"
        aria-label="All surfaces"
      >
        <RevealOnScroll>
          <div className="khadane-tile-grid khadane-tile-grid--surfaces-large">
            {SURFACES.map((s) => (
              <Link
                key={s.slug}
                href={`/khadane/formats/surfaces/${s.slug}`}
                className="khadane-tile khadane-tile--surface khadane-tile--large"
              >
                <div className="khadane-tile__image">
                  <PlaceholderImage
                    variant="stone"
                    label="SURFACE"
                    title={s.name}
                    aspectRatio="4/3"
                    useSvg={false}
                  />
                </div>
                <div className="khadane-tile__content">
                  <h2 className="khadane-tile__name">{s.name}</h2>
                  <p className="khadane-tile__caption">{s.caption}</p>
                  {s.thicknessLoss && (
                    <p className="khadane-tile__meta">
                      <em>Thickness loss: {s.thicknessLoss}</em>
                    </p>
                  )}
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
              For edge profiles, see the{' '}
              <Link href="/khadane/formats/edges" className="khadane-link-gold">
                Edges
              </Link>{' '}
              catalogue. For per-format applicability, see each{' '}
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
