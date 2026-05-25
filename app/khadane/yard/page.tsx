// ============================================================
// KHADANE™ — The Yard · v3.1
// 2 hero photos + 6 stepped checkpoints (one photo per step).
// Voice: Salvatori spine, justified body. Sequence locked.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { YARD_PHOTOS } from '@/lib/photography'

export const metadata: Metadata = {
  title: 'The Yard',
  description:
    'The Bijolia processing yard, where the cut decisions happen. Block ' +
    'arrival, gangsaw, finishing lines, quality check, crating, dispatch. ' +
    'The six-checkpoint sequence from quarry block to Mundra container.',
  alternates: {
    canonical: 'https://khadane.com/yard',
  },
}

// The six steps are matched to the YARD_PHOTOS slot keys
// (step-01-arrival through step-06-dispatch).
interface StepData {
  number: string
  title: string
  photoKey: string
  body: string
}

const STEPS: StepData[] = [
  {
    number: '01',
    title: 'Arrival',
    photoKey: 'step-01-arrival',
    body:
      'Raw blocks arrive at the yard from the KHADANE quarries and from the ' +
      'allied partner quarries. Trucks unload at the receiving area, where ' +
      'each block is logged by source village, variety, and approximate ' +
      'weight. The yard\u2019s first job is to know exactly what has come in ' +
      'and from where.',
  },
  {
    number: '02',
    title: 'Selection',
    photoKey: 'step-02-selection',
    body:
      'Blocks are inspected, graded, and chalk-marked by variety lot. The ' +
      'grading decision sets which finished formats the block can produce ' +
      '\u2014 the largest, soundest blocks are reserved for gangsaw slabs ' +
      'and architectural detail; smaller blocks are routed to paving and ' +
      'cobble production.',
  },
  {
    number: '03',
    title: 'Gangsaw',
    photoKey: 'step-03-gangsaw',
    body:
      'Selected blocks travel to the gangsaw line, where multiple parallel ' +
      'blades cut the block into raw slabs of consistent thickness in a ' +
      'single pass. The water-cooled saws run continuously through the day; ' +
      'the rhythmic sound of the gangsaws is the working note of the yard. ' +
      'Output: raw slabs ready for the finishing lines.',
  },
  {
    number: '04',
    title: 'Finishing',
    photoKey: 'step-04-finishing',
    body:
      'Raw slabs move through calibration, surface treatment, and edging in ' +
      'sequence. Calibration brings the thickness to the buyer\u2019s ' +
      'specification within tight tolerances; the surface treatment lines ' +
      'apply the chosen finish (honed, sandblast, flamed, brushed, leather, ' +
      'or any of the eleven catalogue surfaces); the edging machines cut the ' +
      'specified profile. Each finishing station is dedicated to its task.',
  },
  {
    number: '05',
    title: 'Crating',
    photoKey: 'step-05-crating',
    body:
      'Finished pieces are inspected one last time, then packed into crates. ' +
      'Each crate is built to standard dimensions for container loading; ' +
      'every crate is labelled with the variety, format, thickness, surface, ' +
      'edge, quantity, and order reference. The quality check at this stage ' +
      'is the last point before the stone leaves the yard.',
  },
  {
    number: '06',
    title: 'Dispatch',
    photoKey: 'step-06-dispatch',
    body:
      'Crates leave the yard by truck for Mundra Port, the primary loading ' +
      'point for KHADANE\u2019s international exports. Container loading at ' +
      'Mundra follows standard 20-ft and 40-ft container packing rates. ' +
      'Documentation \u2014 bill of lading, commercial invoice, packing list, ' +
      'phytosanitary certificate \u2014 travels with the consignment.',
  },
]

export default function TheYardPage() {
  const heroPhotos = YARD_PHOTOS.filter((p) => p.isHero)

  return (
    <>
      {/* ───────────────────────────────────────────────
          HERO 01 — wide yard shot
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-quarry-hero"
        aria-labelledby="yard-heading"
      >
        <div className="khadane-quarry-hero__image-wrap">
          <PlaceholderImage
            variant="yard"
            label={heroPhotos[0]?.caption ?? 'The yard at work'}
            title="THE YARD \u00b7 HERO 01"
            aspectRatio="16/9"
            useSvg={false}
            className="khadane-hero-image"
          />
        </div>
        <div className="khadane-quarry-hero__content">
          <p className="khadane-eyebrow">THE PROCESS</p>
          <h1 id="yard-heading" className="khadane-quarry-hero__headline">
            The Yard.
          </h1>
          <p className="khadane-quarry-hero__subline">
            From quarry block to crated dispatch, in six checkpoints. The
            sequence at Bijolia.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          OPENING PROSE — three paragraphs
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Opening prose"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              The Bijolia processing yard is where the cut decisions happen.
              Raw blocks arrive from the quarries; finished crates leave for
              the port. Everything in between \u2014 grading, gangsaw, the
              eleven surface treatments, the four edge profiles, calibration,
              quality check, packing \u2014 is the yard\u2019s work.
            </p>
            <p className="khadane-body-prose">
              The sequence runs through six checkpoints. Each checkpoint is a
              decision and a record. Material moves only when the previous
              checkpoint has signed off; this is how the catalogue holds
              consistent specifications across decades of production.
            </p>
            <p className="khadane-body-prose">
              The photographs on this page document the working yard, station
              by station. None of it is reconstructed for the camera; this is
              what the yard looks like on a working day.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          HERO 02 — close-up
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--hero-photo"
        aria-label="Up close"
      >
        <RevealOnScroll>
          <figure className="khadane-figure khadane-figure--full">
            <PlaceholderImage
              variant="yard"
              label={heroPhotos[1]?.caption ?? 'Up close'}
              title="THE YARD \u00b7 HERO 02"
              aspectRatio="4/3"
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
          THE SIX CHECKPOINTS
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--yard-steps"
        aria-labelledby="checkpoints-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="checkpoints-heading" className="khadane-section-title">
              Six checkpoints.
            </h2>
            <p className="khadane-caption-italic-gold">
              Arrival to dispatch. The full sequence at the yard.
            </p>
          </div>
        </RevealOnScroll>
        <div className="khadane-yard-steps">
          {STEPS.map((step) => {
            const photo = YARD_PHOTOS.find((p) => p.key === step.photoKey)
            return (
              <RevealOnScroll key={step.number}>
                <article
                  className="khadane-yard-step"
                  aria-labelledby={`step-${step.number}-heading`}
                >
                  <div className="khadane-yard-step__image">
                    <PlaceholderImage
                      variant="yard"
                      label={photo?.caption ?? step.title}
                      title={`STEP ${step.number}`}
                      aspectRatio={photo?.aspect ?? '3/2'}
                      useSvg={false}
                    />
                  </div>
                  <div className="khadane-yard-step__content">
                    <p className="khadane-yard-step__number">{step.number}</p>
                    <h3
                      id={`step-${step.number}-heading`}
                      className="khadane-yard-step__title"
                    >
                      {step.title}
                    </h3>
                    <p className="khadane-body-prose">{step.body}</p>
                  </div>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          CLOSING — the desk
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer\u2019s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE BUYER\u2019S DESK</p>
            <h2 className="khadane-section-title">
              Buyer visits are welcome.
            </h2>
            <p className="khadane-body-prose">
              Buyers visiting India for trade fairs, factory audits, or
              specification meetings are welcome to visit the Bijolia yard by
              prior appointment. The drive from Udaipur is approximately four
              hours; from Jaipur, five. Local hospitality at the M3 Hotel in
              Kota for stays of any length.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk?intent=visit"
                className="khadane-button khadane-button--primary"
              >
                Arrange a visit
              </Link>
              <Link
                href="/khadane/quarry"
                className="khadane-button khadane-button--ghost"
              >
                The Quarry
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
