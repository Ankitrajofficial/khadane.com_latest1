// ============================================================
// KHADANE™ — Field Notes Landing · v3.1
// Editorial briefs on geology, process, trade, network.
// The slow voice of the trade brand.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import PlaceholderImage from '@/components/khadane/PlaceholderImage'
import { FIELD_NOTES, type FieldNote } from '@/lib/field-notes'

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Editorial briefs from the KHADANE catalogue \u2014 the geology of the ' +
    'Bijolia sandstone belt, the process at the yard, the trade routes that ' +
    'shape the export operation, and the network of allied quarries.',
  alternates: {
    canonical: 'https://khadane.com/field-notes',
  },
}

// Categories in display order
const CATEGORY_ORDER: Array<{
  key: 'geology' | 'process' | 'trade' | 'network'
  label: string
  caption: string
}> = [
  {
    key: 'geology',
    label: 'Geology',
    caption: 'The Vindhyan basin, the Bijolia belt, the bedding planes.',
  },
  {
    key: 'process',
    label: 'Process',
    caption: 'Quarry to crate. The work that happens between them.',
  },
  {
    key: 'trade',
    label: 'Trade',
    caption: 'Routes, ports, decisions that shape the export economy.',
  },
  {
    key: 'network',
    label: 'Network',
    caption: 'Allied quarries, partner relationships, the broader belt.',
  },
]

export default function FieldNotesLandingPage() {
  return (
    <>
      {/* ───────────────────────────────────────────────
          HEADER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-page-header"
        aria-labelledby="field-notes-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE VOICE</p>
          <h1 id="field-notes-heading" className="khadane-page-headline">
            Field Notes.
          </h1>
          <p className="khadane-page-subline">
            The slow voice of the trade brand. Editorial briefs from the
            catalogue, the belt, and the export desk.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          EDITORIAL INTRO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="Editorial introduction"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              Field Notes carries the longer-form writing that doesn\u2019t
              sit naturally on a catalogue page \u2014 the geological context
              for the Bijolia belt, the operational decisions at the yard, the
              shifting trade routes that have shaped how Indian sandstone
              reaches international buyers, and the network of allied quarry
              partnerships that extend the catalogue beyond the family\u2019s
              own blocks.
            </p>
            <p className="khadane-body-prose">
              The pace is slow. New notes are added as the writing is ready,
              not on a publishing schedule. The intent is to give buyers,
              specifiers, and the trade press the context that the catalogue
              pages cannot carry without crowding the working specifications.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          NOTES BY CATEGORY
          ─────────────────────────────────────────────── */}
      {CATEGORY_ORDER.map((cat) => {
        const notes = FIELD_NOTES.filter((n) => n.category === cat.key)
        if (notes.length === 0) return null
        return (
          <CategorySection
            key={cat.key}
            label={cat.label}
            caption={cat.caption}
            notes={notes}
          />
        )
      })}

      {/* ───────────────────────────────────────────────
          DESK
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--desk"
        aria-label="The buyer\u2019s desk"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">THE BUYER\u2019S DESK</p>
            <h2 className="khadane-section-title">
              Press and trade enquiries.
            </h2>
            <p className="khadane-body-prose">
              For trade press, architectural specifier publications, or
              speaking engagements at trade fairs, reach the desk at
              exports@khadane.com. Responded to within one business day.
            </p>
            <div className="khadane-desk-actions">
              <Link
                href="/khadane/desk?intent=press"
                className="khadane-button khadane-button--primary"
              >
                Press enquiry
              </Link>
              <Link
                href="/khadane/group"
                className="khadane-button khadane-button--ghost"
              >
                The Group
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}

// ============================================================
// CategorySection — one block of notes per category
// ============================================================

interface CategorySectionProps {
  label: string
  caption: string
  notes: FieldNote[]
}

function CategorySection({ label, caption, notes }: CategorySectionProps) {
  return (
    <section
      className="khadane-section khadane-section--field-notes-category"
      aria-label={`${label} notes`}
    >
      <RevealOnScroll>
        <div className="khadane-prose-container">
          <h2 className="khadane-format-category__heading">{label}</h2>
          <p className="khadane-caption-italic-gold">{caption}</p>
        </div>
        <div className="khadane-field-notes-grid">
          {notes.map((note) => (
            <Link
              key={note.id}
              href={`/khadane/field-notes/${note.slug}`}
              className="khadane-field-note-card khadane-variety-card"
            >
              <div className="khadane-field-note-card__image">
                <PlaceholderImage
                  variant={note.placeholderVariant}
                  label={note.categoryLabel}
                  title={note.title}
                  aspectRatio="4/3"
                  useSvg={false}
                  className="khadane-variety-card__image"
                />
              </div>
              <div className="khadane-field-note-card__content">
                <p className="khadane-field-note-card__meta">
                  <span>{note.date}</span>
                  <span className="khadane-divider" aria-hidden="true">
                    {' \u00b7 '}
                  </span>
                  <span>{note.readMinutes} min read</span>
                </p>
                <h3 className="khadane-field-note-card__title">{note.title}</h3>
                <p className="khadane-field-note-card__excerpt">
                  {note.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
