// ============================================================
// KHADANE™ — Edge Profiles · v3.1
// 4 edge treatments worked at the Bijolia yard during the finishing
// stage. Each edge page (/khadane/formats/edges/{slug}/) shows the
// treatment across multiple varieties and explains how the edge is
// achieved.
// ============================================================

export interface Edge {
  // ─── Identification ───
  slug: string                    // URL slug
  name: string                    // Display name

  // ─── Editorial ───
  /** Antolini-brevity caption used as the edge page sub-line. */
  caption: string
  /** Salvatori-spine paragraph explaining the edge character. */
  description: string
  /** Two-sentence operational description of how the edge is produced
   *  at the Bijolia yard. */
  process: string

  // ─── Trade context ───
  /** Where this edge is commonly specified. */
  commonUses: string[]

  // ─── Display ───
  placeholderClass: string
}

// ============================================================
// THE 4 EDGES — LOCKED v3.1
// ============================================================

export const EDGES: Edge[] = [
  {
    slug: 'hand-cut',
    name: 'Hand Cut',
    caption: 'The natural irregular edge. Worked by hand at the yard before dispatch.',
    description:
      "Hand-cut edges carry the natural irregular character of stone shaped by hand " +
      "with chisel and hammer at the Bijolia yard. The line is not perfectly straight; " +
      "the edge varies slightly along its length, giving the stone the character of " +
      "traditional dressed-stone work. Specified often where the irregular edge is " +
      "part of the desired aesthetic.",
    process:
      "Skilled yard workers chisel each edge by hand at the Bijolia yard. The edge " +
      "follows the natural cleaving lines of the stone, with the worker shaping the " +
      "irregular outline to match the desired character.",
    commonUses: [
      'Crazy paving and flagstones',
      'Heritage-context installations',
      'Cobble setts with natural-form character',
      'Garden paving where the irregular edge is desired',
    ],
    placeholderClass: 'placeholder-edge-handcut',
  },

  {
    slug: 'hand-cut-straight',
    name: 'Hand Cut Straight',
    caption: 'Hand-worked but lined to the straight. The traditional craft edge.',
    description:
      "Hand Cut Straight is the hand-worked edge brought to a deliberately straight " +
      "line \u2014 the worker shapes the edge by hand but follows a chalk-marked " +
      "straight line, producing an edge that reads handworked but ordered. The " +
      "middle register between the natural irregularity of hand-cut and the precision " +
      "of machine-cut.",
    process:
      "Yard workers chisel the edge by hand at the Bijolia yard following a " +
      "chalk-marked straight line. The resulting edge is straight overall but " +
      "carries faint variation along its length \u2014 the visible mark of " +
      "handwork.",
    commonUses: [
      'Architectural paving where handwork character is preferred',
      'Heritage-style kerbstones and edging',
      'Block steps and treads with traditional finish',
      'Wall cladding with worked-edge character',
    ],
    placeholderClass: 'placeholder-edge-handcut-straight',
  },

  {
    slug: 'machine-cut',
    name: 'Machine Cut',
    caption: 'A precise tight-tolerance edge. Worked by saw and calibration line.',
    description:
      "Machine-cut edges are produced by the cutting saws and calibration lines at " +
      "the Bijolia yard. The edge is precisely straight, tightly toleranced, and " +
      "perpendicular to the slab face. Specified where tight tolerances or " +
      "geometric precision is required \u2014 contemporary architectural cladding, " +
      "high-spec paving installations, machined-fit cobble setts.",
    process:
      "Slabs run through automated cutting and calibration lines at the Bijolia " +
      "yard. The saw blade or calibration head produces a clean straight edge to " +
      "\u00b12 mm tolerance, perpendicular to the slab face.",
    commonUses: [
      'Contemporary architectural cladding',
      'High-spec calibrated paving',
      'Window sills and copings',
      'Machined-fit cobble setts',
      'Door frames and architectural detail',
    ],
    placeholderClass: 'placeholder-edge-machinecut',
  },

  {
    slug: 'bullnose',
    name: 'Bullnose',
    caption: 'A rounded front edge. For steps, pool surrounds, and architectural detail.',
    description:
      "Bullnose edges are rounded to a soft curve along the visible front face of " +
      "the stone. The standard bullnose carries a small radius; full bullnose runs to " +
      "a complete half-circle profile. Specified on steps, pool copings, parapet caps, " +
      "and any installation where the visible edge needs to read soft rather than " +
      "machined-sharp.",
    process:
      "Pre-cut edges run through dedicated bullnose profilers at the Bijolia yard. " +
      "The profiler grinds the edge to the specified radius \u2014 standard pencil " +
      "bullnose at 5 mm radius, half-round bullnose at 20 mm radius, full bullnose " +
      "to a complete half-circle.",
    commonUses: [
      'Step risers and treads',
      'Pool coping and surrounds',
      'Wall and parapet caps',
      'Window sills (drip-edge variants)',
      'Architectural feature edges',
    ],
    placeholderClass: 'placeholder-edge-bullnose',
  },
]

// ============================================================
// Helper functions
// ============================================================

/** Get an edge by its slug. */
export function getEdgeBySlug(slug: string): Edge | undefined {
  return EDGES.find((e) => e.slug === slug)
}

/** All edge slugs in catalogue order. */
export const EDGE_SLUGS = EDGES.map((e) => e.slug)

/** Edge count for SEO/structured-data only. */
export const EDGE_COUNT = EDGES.length
