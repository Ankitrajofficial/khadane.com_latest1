// ============================================================
// KHADANE™ — Surface Treatments · v3.1
// 11 surface finishes worked at the Bijolia yard before dispatch.
// Each surface page (/khadane/formats/surfaces/{slug}/) shows the
// treatment across multiple varieties and explains the operational
// process by which the surface is achieved.
// ============================================================

export interface Surface {
  // ─── Identification ───
  slug: string                    // URL slug
  name: string                    // Display name

  // ─── Editorial ───
  /** Antolini-brevity caption used as the surface page sub-line. */
  caption: string
  /** Salvatori-spine paragraph explaining the surface character. */
  description: string
  /** Two-sentence operational description of how the surface is produced
   *  at the Bijolia yard. */
  process: string

  // ─── Trade context ───
  /** Where this surface is commonly specified. */
  commonUses: string[]
  /** Typical thickness loss during the surface treatment, if relevant
   *  (e.g. flamed loses 2\u20133 mm from the original face). */
  thicknessLoss?: string

  // ─── Display ───
  placeholderClass: string
}

// ============================================================
// THE 11 SURFACES — LOCKED v3.1
// ============================================================

export const SURFACES: Surface[] = [
  {
    slug: 'natural-riven',
    name: 'Natural Riven',
    caption: 'The bed split along its natural plane. The character of the stone as it came from the quarry.',
    description:
      "Natural Riven is the bed face split along its natural sedimentary plane. " +
      "The surface carries the soft undulating relief and grain striations of the " +
      "original bed \u2014 the stone as the quarry produced it, before any worked " +
      "treatment.",
    process:
      "Slabs split with hand-driven wedges along the natural bedding plane at the " +
      "Bijolia yard. The resulting face is unworked, untreated, and uncalibrated.",
    commonUses: [
      'Garden paving with rustic character',
      'Heritage-context installations',
      'Crazy paving and flagstones',
      'Natural-look walling',
    ],
    placeholderClass: 'placeholder-surface-natural',
  },

  {
    slug: 'honed',
    name: 'Honed',
    caption: 'A smooth matte finish. The grain reads cleanly without reflection.',
    description:
      "Honed surfaces are smoothed with progressively finer abrasive heads to produce " +
      "a flat matte face that holds the stone's grain cleanly. No reflection, no " +
      "polish; the surface is closed against water absorption while keeping the " +
      "stone's natural colour.",
    process:
      "Slabs run through abrasive-head lines at the Bijolia yard at successive grit " +
      "levels \u2014 80, 120, 220, 400 \u2014 until the face reaches the flat-matte " +
      "honed standard. Final pass with a 600 grit for the finest finish.",
    commonUses: [
      'Interior flooring',
      'Architectural cladding where reflection would distract',
      'Pool surrounds (slip-resistant variants)',
      'Modern minimalist installations',
    ],
    thicknessLoss: '1\u20132 mm',
    placeholderClass: 'placeholder-surface-honed',
  },

  {
    slug: 'sandblast',
    name: 'Sandblast',
    caption: 'A textured matte surface. Worked by abrasive air for grip and character.',
    description:
      "Sandblasted surfaces are textured by high-pressure abrasive media striking " +
      "the stone face. The result is a uniform pebbled matte that lifts the stone's " +
      "natural colour while adding non-slip character. Specified often where the " +
      "design wants visual softness with installation safety.",
    process:
      "Slabs sit under high-pressure abrasive blasting jets at the Bijolia yard. " +
      "Garnet or aluminium-oxide media bombards the surface, producing the uniform " +
      "texture in a single pass.",
    commonUses: [
      'Pool deck and wet-area paving',
      'Public-realm paving where slip-resistance is specified',
      'Architectural cladding with tactile interest',
      'Garden steps and treads',
    ],
    thicknessLoss: '\u22641 mm',
    placeholderClass: 'placeholder-surface-sandblast',
  },

  {
    slug: 'flamed',
    name: 'Flamed',
    caption: 'A rough granular finish. Worked by direct flame, popping the stone\u2019s surface grain.',
    description:
      "Flamed surfaces carry the granular roughened character produced when direct " +
      "high-temperature flame is passed across the stone face. The thermal shock " +
      "pops the surface grain, producing a textured non-slip face that reads " +
      "weathered and natural.",
    process:
      "Oxy-acetylene torches pass across the slab face at the Bijolia yard. The " +
      "thermal shock fractures the surface 2\u20133 mm into the stone, exposing the " +
      "underlying grain in a uniform texture.",
    commonUses: [
      'External paving where high slip-resistance is essential',
      'Steps and treads in heavy public use',
      'Driveway pavings',
      'Architectural cladding with weathered character',
    ],
    thicknessLoss: '2\u20133 mm',
    placeholderClass: 'placeholder-surface-flamed',
  },

  {
    slug: 'rockfaced',
    name: 'Rockfaced',
    caption: 'A bold uneven face. The bush-hammered character of cut quarry stone.',
    description:
      "Rockfaced surfaces (sometimes called bush-hammered) carry the bold pitted " +
      "character produced by pneumatic or hand-held bushing hammers striking the " +
      "stone repeatedly. The result is a deeply textured face that reads as " +
      "freshly-cut quarry stone.",
    process:
      "Slabs are worked by pneumatic bush hammers at the Bijolia yard. The hammer " +
      "head carries multiple pyramidal points that strike the surface at high " +
      "frequency, producing the characteristic pitted face.",
    commonUses: [
      'Feature walling and accent cladding',
      'Heritage-style entrance steps',
      'Garden retaining walls',
      'Architectural elements with strong tactile character',
    ],
    thicknessLoss: '3\u20135 mm',
    placeholderClass: 'placeholder-surface-rockfaced',
  },

  {
    slug: 'sawn',
    name: 'Sawn',
    caption: 'The cut face direct from the saw line. Clean, flat, with the saw\u2019s working pattern.',
    description:
      "Sawn surfaces carry the flat clean face produced directly by the cutting line " +
      "\u2014 either the gangsaw or the calibration saw. The face reads cleanly flat " +
      "and uniform, with faint linear marks from the saw blade visible at close " +
      "inspection.",
    process:
      "Slabs ship as cut from the gangsaw or calibration line at the Bijolia yard, " +
      "with no additional surface treatment. The cleanest, fastest finish in the " +
      "catalogue.",
    commonUses: [
      'Architectural cladding where the cut is the finish',
      'Modern minimalist installations',
      'Window sills, copings, and architectural lengths',
      'Slabs for in-house finishing at the destination',
    ],
    thicknessLoss: '0 mm',
    placeholderClass: 'placeholder-surface-sawn',
  },

  {
    slug: 'tumbled',
    name: 'Tumbled',
    caption: 'A softened, aged-look surface. Edges rounded by mechanical tumbling.',
    description:
      "Tumbled surfaces carry the softened character produced when finished pieces " +
      "are tumbled in a mechanical drum with abrasive media. The corners round, the " +
      "edges soften, and the surface acquires the weathered look of aged paving.",
    process:
      "Pre-cut pieces tumble in a mechanical drum at the Bijolia yard with ceramic " +
      "or stone abrasive media for several hours. Tumbling time varies by desired " +
      "softness; longer cycles produce more rounded character.",
    commonUses: [
      'Heritage-context paving',
      'Reclaimed-stone-look installations',
      'Cottage gardens and traditional landscapes',
      'Cobble setts where aged character is specified',
    ],
    thicknessLoss: '0\u20131 mm',
    placeholderClass: 'placeholder-surface-tumbled',
  },

  {
    slug: 'brushed',
    name: 'Brushed',
    caption: 'A softened matte finish. Worked by wire brushing to lift the natural grain.',
    description:
      "Brushed surfaces carry the soft tactile character produced by wire-brush " +
      "treatment of the stone face. The brushing lifts the softer minerals while " +
      "leaving the harder grain proud, producing a faintly textured matte face that " +
      "reads weathered without being rough.",
    process:
      "Wire-brush heads pass across the slab face at the Bijolia yard at successive " +
      "pressures. The treatment removes soft surface material while highlighting the " +
      "stone's natural grain pattern.",
    commonUses: [
      'Interior flooring with tactile interest',
      'Cladding where reflection would be too modern',
      'Pool decks (variants with deeper brushing)',
      'Architectural detail with grain-led character',
    ],
    thicknessLoss: '\u22641 mm',
    placeholderClass: 'placeholder-surface-brushed',
  },

  {
    slug: 'cotton-brush',
    name: 'Cotton Brush',
    caption: 'A very fine brushed finish. The lightest tactile treatment in the catalogue.',
    description:
      "Cotton Brush is the lightest brushing treatment KHADANE offers \u2014 a softer " +
      "abrasive than the standard wire brush, producing a barely-textured matte face " +
      "that reads almost honed but with faint tactile interest. The transitional " +
      "treatment between honed and brushed.",
    process:
      "Soft synthetic-fibre brushes pass across the slab face at the Bijolia yard. " +
      "The treatment removes only the very topmost mineral surface, leaving the " +
      "stone's grain virtually unmodified but reducing reflection.",
    commonUses: [
      'Interior flooring in premium installations',
      'Cladding for contemporary residential work',
      'Architectural detail where honed would feel too smooth',
    ],
    thicknessLoss: '\u22640.5 mm',
    placeholderClass: 'placeholder-surface-cotton',
  },

  {
    slug: 'leather',
    name: 'Leather',
    caption: 'A satin-textured finish. The closest the catalogue comes to polished.',
    description:
      "Leather surfaces carry a satin-smooth tactile finish produced by intensive " +
      "abrasive treatment with progressively finer pads. The result reads as the " +
      "soft sheen of finished leather \u2014 reflective without being glossy, smooth " +
      "without being polished. Premium finish for high-spec installations.",
    process:
      "Slabs run through successive diamond-resin pads at the Bijolia yard, " +
      "finishing at very fine grit levels. The treatment produces a closed " +
      "satin-smooth face that reflects light softly without the mirror character " +
      "of true polish.",
    commonUses: [
      'Premium interior flooring',
      'Kitchen and bathroom worktops',
      'Architectural feature cladding',
      'High-spec hospitality interiors',
    ],
    thicknessLoss: '1\u20132 mm',
    placeholderClass: 'placeholder-surface-leather',
  },

  {
    slug: 'shotblast',
    name: 'Shotblast',
    caption: 'A coarser-textured matte surface. Worked by steel shot rather than abrasive sand.',
    description:
      "Shotblast surfaces are similar in character to sandblasted but produced by " +
      "steel-shot media rather than abrasive sand. The result is a slightly coarser " +
      "texture with more pronounced visual depth \u2014 reads heavier and more " +
      "industrial than the standard sandblast.",
    process:
      "Steel shot media bombards the slab face at the Bijolia yard under high " +
      "pressure. The larger media produces a coarser texture than abrasive " +
      "sandblast, with greater visual depth and grip.",
    commonUses: [
      'Heavy-use industrial paving',
      'Public-realm steps requiring maximum slip-resistance',
      'Architectural cladding with pronounced texture',
      'Driveway pavings in commercial contexts',
    ],
    thicknessLoss: '1\u20132 mm',
    placeholderClass: 'placeholder-surface-shotblast',
  },
]

// ============================================================
// Helper functions
// ============================================================

/** Get a surface by its slug. */
export function getSurfaceBySlug(slug: string): Surface | undefined {
  return SURFACES.find((s) => s.slug === slug)
}

/** All surface slugs in catalogue order. */
export const SURFACE_SLUGS = SURFACES.map((s) => s.slug)

/** Surface count for SEO/structured-data only \u2014 not for editorial display. */
export const SURFACE_COUNT = SURFACES.length
