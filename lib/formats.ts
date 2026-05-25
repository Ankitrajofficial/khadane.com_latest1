// ============================================================
// KHADANE™ — Format Catalogue · v3.1
// 19 formats with export-grade trade dimensions researched against
// UK and EU exporter catalogues (Marshalls, Stonemarket, London Stone,
// Pavestone, Vardman, Regatta, Stone Art By SKL, Aravali Marbles).
//
// Each format carries: standard dimensions, thickness bands, tolerances,
// pack data, and the surfaces/edges available within it. This data
// surfaces both on the dedicated format page (/khadane/formats/{slug}/)
// and inline within Block 04 of every variety page.
// ============================================================

/** A standard size offered in a given format. */
export interface FormatSize {
  /** Dimensions as displayed (e.g. "600 \u00d7 600 mm", "1000 \u00d7 350 \u00d7 50 mm"). */
  dimensions: string
  /** Optional descriptor (e.g. "Standard residential", "60 series patio pack"). */
  note?: string
  /** Optional coverage value where buyers commonly request it. */
  coverage?: string
}

/** A standard thickness band offered in a given format. */
export interface FormatThickness {
  /** Thickness in mm or range (e.g. "22 mm", "22\u201335 mm"). */
  value: string
  /** Use-case descriptor (e.g. "Standard residential", "Light vehicular"). */
  useCase: string
}

/** A standard tolerance specification. */
export interface FormatTolerance {
  /** What's being toleranced (e.g. "Thickness (calibrated)", "Length / width"). */
  attribute: string
  /** Tolerance value (e.g. "\u00b12 mm", "\u00b15 mm"). */
  tolerance: string
}

/** Pack and crate data. */
export interface FormatPackData {
  /** Standard crate dimensions (e.g. "1200 \u00d7 1000 \u00d7 1000 mm"). */
  crateDimensions?: string
  /** Crate weight when loaded. */
  crateWeight?: string
  /** Coverage per crate at standard thickness. */
  coveragePerCrate?: string
  /** Container loading rate. */
  containerLoading?: string
}

export interface Format {
  // ─── Identification ───
  slug: string                    // URL slug, e.g. "pavings"
  name: string                    // Display name, e.g. "Pavings"
  category: FormatCategory        // For grouping in the Formats grid

  // ─── Editorial ───
  /** One-sentence Antolini-brevity caption (used as the format page sub-line). */
  caption: string
  /** Short Salvatori paragraph for the format page body. */
  description: string
  /** Typical use cases (used as bullet labels on format page). */
  typicalUse: string[]

  // ─── Trade dimensions ───
  /** All standard sizes (calibrated + natural where relevant). */
  sizes: FormatSize[]
  /** Standard thicknesses. */
  thicknesses: FormatThickness[]
  /** Tolerance specifications. */
  tolerances: FormatTolerance[]
  /** Pack and dispatch data. */
  packData?: FormatPackData

  // ─── Available surfaces and edges per format ───
  /** Surface slugs available in this format. */
  surfacesAvailable: string[]
  /** Edge slugs available in this format. */
  edgesAvailable: string[]

  // ─── Display ───
  placeholderClass: string
}

export type FormatCategory =
  | 'Paving & Patio'
  | 'Architectural Detail'
  | 'Landscape & Garden'
  | 'Wall & Vertical'
  | 'Raw & Custom'

// ============================================================
// THE 19 FORMATS — LOCKED v3.1
// ============================================================

export const FORMATS: Format[] = [
  // ─────────────────────────────────────────────────────────
  // 01. PAVINGS — the volume export format
  // ─────────────────────────────────────────────────────────
  {
    slug: 'pavings',
    name: 'Pavings',
    category: 'Paving & Patio',
    caption: 'The volume export. Calibrated and natural, every size the trade asks for.',
    description:
      "Pavings are the highest-volume format KHADANE ships. The catalogue covers " +
      "every calibrated single size the UK and EU trade specifies, plus the standard " +
      "mixed-size patio packs that landscapers order by the crate. Natural hand-cut " +
      "options sit alongside the calibrated range for buyers who want the unworked " +
      "edge character.",
    typicalUse: [
      'Garden patios and courtyards',
      'Residential driveways (with thickness specification)',
      'Public realm pedestrian areas',
      'Pool surrounds and terraces',
    ],
    sizes: [
      { dimensions: '200 \u00d7 200 mm', coverage: '4.0 sq.ft per piece' },
      { dimensions: '290 \u00d7 290 mm' },
      { dimensions: '300 \u00d7 200 mm' },
      { dimensions: '300 \u00d7 300 mm' },
      { dimensions: '400 \u00d7 400 mm' },
      { dimensions: '560 \u00d7 280 mm', note: 'Standard patio-pack module' },
      { dimensions: '560 \u00d7 560 mm' },
      { dimensions: '600 \u00d7 290 mm' },
      { dimensions: '600 \u00d7 300 mm' },
      { dimensions: '600 \u00d7 600 mm' },
      { dimensions: '600 \u00d7 900 mm' },
      { dimensions: '900 \u00d7 600 mm' },
      {
        dimensions: '60 series patio pack',
        note: 'Mixed sizes: 845\u00d7560, 560\u00d7560, 560\u00d7280, 280\u00d7280 mm',
        coverage: '19.0 sqm at 16-16-16-12 ratio; 15.25 sqm at 13-13-13-9 ratio',
      },
      {
        dimensions: '56 series patio pack',
        note: 'Mixed sizes: 600\u00d7600, 600\u00d7290, 290\u00d7290 mm',
        coverage: '12.0 sqm at 16-16-16-12 ratio',
      },
    ],
    thicknesses: [
      { value: '22 mm', useCase: 'Standard residential (calibrated)' },
      { value: '25\u201330 mm', useCase: 'Heavy domestic / light vehicular' },
      { value: '40 mm', useCase: 'Vehicular' },
      { value: '22\u201335 mm', useCase: 'Natural / hand-cut range' },
    ],
    tolerances: [
      { attribute: 'Thickness (calibrated)', tolerance: '\u00b12 mm' },
      { attribute: 'Length / width (calibrated)', tolerance: '\u00b12 mm' },
      { attribute: 'Surface flatness', tolerance: '\u22642 mm per metre' },
      { attribute: 'Thickness (natural)', tolerance: '\u00b15 mm' },
      { attribute: 'Length / width (natural)', tolerance: '\u00b13 mm' },
    ],
    packData: {
      crateDimensions: '1200 \u00d7 1000 \u00d7 1000 mm',
      crateWeight: '1100\u20131300 kg',
      coveragePerCrate: 'Varies by size and thickness',
      containerLoading: '~22 crates per 20-ft container',
    },
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'flamed', 'rockfaced', 'sawn', 'tumbled', 'brushed', 'cotton-brush', 'leather', 'shotblast'],
    edgesAvailable: ['hand-cut', 'hand-cut-straight', 'machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-paving',
  },

  // ─────────────────────────────────────────────────────────
  // 02. FLAGSTONES / CRAZY PAVING
  // ─────────────────────────────────────────────────────────
  {
    slug: 'flagstones-crazy-paving',
    name: 'Flagstones / Crazy Paving',
    category: 'Paving & Patio',
    caption: 'Random-form irregular paving. For garden paths and organic-layout patios.',
    description:
      "Flagstones are random-form fragments sorted from the bed before calibration. " +
      "The irregular outlines are the character of the format; landscapers fit pieces " +
      "together on site to produce the dry-stone look of traditional English garden " +
      "paths. Sold by the crate at a standard coverage rate.",
    typicalUse: [
      'Garden paths and stepping-stone routes',
      'Organic-layout patios',
      'Cottage-garden and naturalistic landscapes',
      'Dry-stone-style paving in heritage contexts',
    ],
    sizes: [
      { dimensions: 'Random fragments, 200\u2013600 mm across', note: 'Irregular outline' },
      { dimensions: 'Large-fragment pack', note: 'Bias toward 400\u2013600 mm fragments' },
      { dimensions: 'Small-fragment pack', note: 'Bias toward 200\u2013350 mm fragments' },
    ],
    thicknesses: [
      { value: '22\u201335 mm', useCase: 'Natural range (most common)' },
      { value: '25 mm', useCase: 'Calibrated option' },
    ],
    tolerances: [
      { attribute: 'Thickness (natural)', tolerance: '\u00b15 mm' },
      { attribute: 'Outline', tolerance: 'Random; no edge tolerance' },
    ],
    packData: {
      crateDimensions: '1200 \u00d7 1000 \u00d7 1000 mm',
      crateWeight: '1100 kg',
      coveragePerCrate: '~15 sqm at 25 mm',
      containerLoading: '~22 crates / 330 sqm per 20-ft',
    },
    surfacesAvailable: ['natural-riven', 'tumbled', 'sandblast'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-flagstone',
  },

  // ─────────────────────────────────────────────────────────
  // 03. COBBLE SETTS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'cobble-setts',
    name: 'Cobble Setts',
    category: 'Paving & Patio',
    caption: 'Hand-cut and machine-cut cobbles. Driveways, courtyards, kerbed edges.',
    description:
      "Cobble setts are the trade workhorse for driveways and courtyards. Hand-cut " +
      "options carry six natural faces; machine-cut options run to tight tolerances " +
      "for tight-pattern installations. Standard thickness 50 mm for most uses; 70 mm " +
      "for vehicular and 100 mm for heavy industrial.",
    typicalUse: [
      'Residential and commercial driveways',
      'Courtyards and forecourts',
      'Kerbed driveway edges',
      'Fountain and water-feature surrounds',
    ],
    sizes: [
      { dimensions: '100 \u00d7 100 \u00d7 50 mm', note: 'Standard pedestrian / light vehicular' },
      { dimensions: '100 \u00d7 200 \u00d7 50 mm', note: 'Driveway pavers' },
      { dimensions: '200 \u00d7 200 \u00d7 50 mm', note: 'Heavy pedestrian, courtyard' },
      { dimensions: '150 \u00d7 150 \u00d7 50 mm', note: 'European-spec courtyard' },
      { dimensions: '100 \u00d7 100 \u00d7 100 mm', note: 'Cube cobbles, fountain edges' },
    ],
    thicknesses: [
      { value: '40 mm', useCase: 'Light pedestrian' },
      { value: '50 mm', useCase: 'Standard (most common export)' },
      { value: '70 mm', useCase: 'Vehicular' },
      { value: '100 mm', useCase: 'Heavy industrial' },
    ],
    tolerances: [
      { attribute: 'Hand cut (all dimensions)', tolerance: '\u00b15 mm' },
      { attribute: 'Machine cut (all dimensions)', tolerance: '\u00b12 mm' },
    ],
    packData: {
      crateDimensions: '1200 \u00d7 1000 \u00d7 1000 mm',
      crateWeight: '1200 kg',
      coveragePerCrate: '~10 sqm at 50 mm thickness',
      containerLoading: '~22 crates per 20-ft / ~220 sqm',
    },
    surfacesAvailable: ['natural-riven', 'sawn', 'tumbled', 'flamed'],
    edgesAvailable: ['hand-cut', 'machine-cut'],
    placeholderClass: 'placeholder-format-cobble',
  },

  // ─────────────────────────────────────────────────────────
  // 04. STEPPING STONES
  // ─────────────────────────────────────────────────────────
  {
    slug: 'stepping-stones',
    name: 'Stepping Stones',
    category: 'Paving & Patio',
    caption: 'Single-piece path elements. Garden routes and lawn paths.',
    description:
      "Stepping stones are individual large-format pieces set into lawns and gardens " +
      "to mark a walking route. Random-form variants carry the natural outline; cut " +
      "circles and squares offer the geometric option.",
    typicalUse: [
      'Garden walking paths',
      'Lawn routes between features',
      'Pool-side walking surfaces',
      'Japanese-style stepping-stone gardens',
    ],
    sizes: [
      { dimensions: '300\u2013600 mm random', note: 'Natural form' },
      { dimensions: '400 \u00d7 400 mm', note: 'Cut square' },
      { dimensions: '500 \u00d7 500 mm', note: 'Cut square, larger' },
      { dimensions: '\u00f8 400 mm circle' },
      { dimensions: '\u00f8 500 mm circle' },
    ],
    thicknesses: [
      { value: '40\u201350 mm', useCase: 'Standard garden use' },
      { value: '60 mm', useCase: 'Heavy lawn installations' },
    ],
    tolerances: [
      { attribute: 'Thickness', tolerance: '\u00b15 mm' },
      { attribute: 'Outline (natural)', tolerance: 'Random' },
      { attribute: 'Outline (cut)', tolerance: '\u00b13 mm' },
    ],
    surfacesAvailable: ['natural-riven', 'sandblast', 'tumbled'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-stepping',
  },

  // ─────────────────────────────────────────────────────────
  // 05. KERBSTONES
  // ─────────────────────────────────────────────────────────
  {
    slug: 'kerbstones',
    name: 'Kerbstones',
    category: 'Architectural Detail',
    caption: 'Path and driveway edging. Linear lengths in standard cross-sections.',
    description:
      "Kerbstones edge paths, driveways, and lawn beds. Standard cross-sections in " +
      "1-metre lengths; longer pieces and custom sections on request. The bullnose " +
      "top is the most common UK specification.",
    typicalUse: [
      'Driveway edging',
      'Path-and-lawn separation',
      'Garden-bed boundaries',
      'Public realm pathway edging',
    ],
    sizes: [
      { dimensions: '1000 \u00d7 200 \u00d7 100 mm', note: 'Standard kerb' },
      { dimensions: '1000 \u00d7 150 \u00d7 100 mm', note: 'Slim kerb' },
      { dimensions: '1500 \u00d7 200 \u00d7 100 mm', note: 'Long-format kerb (custom)' },
    ],
    thicknesses: [
      { value: '100 mm', useCase: 'Standard kerb thickness' },
      { value: '150 mm', useCase: 'Heavy-use vehicular edge' },
    ],
    tolerances: [
      { attribute: 'Length', tolerance: '\u00b13 mm' },
      { attribute: 'Cross-section', tolerance: '\u00b12 mm' },
    ],
    surfacesAvailable: ['natural-riven', 'sawn', 'sandblast', 'flamed'],
    edgesAvailable: ['hand-cut-straight', 'machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-kerb',
  },

  // ─────────────────────────────────────────────────────────
  // 06. PALISADES & EDGING
  // ─────────────────────────────────────────────────────────
  {
    slug: 'palisades-edging',
    name: 'Palisades & Edging',
    category: 'Landscape & Garden',
    caption: 'Vertical edging stones. Garden borders, retaining edges, terraced beds.',
    description:
      "Palisades are vertical edging stones set into the ground to retain garden " +
      "beds, mark boundaries, or form terraced steps. Square cross-section, varying " +
      "heights for different border depths.",
    typicalUse: [
      'Garden bed retaining edges',
      'Terraced-bed boundaries',
      'Driveway shoulder edging',
      'Low-rise garden walls',
    ],
    sizes: [
      { dimensions: '150 \u00d7 150 \u00d7 300 mm', note: 'Short palisade' },
      { dimensions: '150 \u00d7 150 \u00d7 600 mm', note: 'Standard palisade' },
      { dimensions: '150 \u00d7 150 \u00d7 900 mm', note: 'Tall palisade' },
      { dimensions: '150 \u00d7 150 \u00d7 1200 mm', note: 'Retaining-height palisade' },
    ],
    thicknesses: [
      { value: '150 \u00d7 150 mm cross-section', useCase: 'Standard' },
      { value: '200 \u00d7 200 mm cross-section', useCase: 'Heavy retaining' },
    ],
    tolerances: [
      { attribute: 'Height', tolerance: '\u00b15 mm' },
      { attribute: 'Cross-section', tolerance: '\u00b13 mm' },
    ],
    surfacesAvailable: ['natural-riven', 'sandblast', 'tumbled', 'flamed'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-palisade',
  },

  // ─────────────────────────────────────────────────────────
  // 07. WALL CLADDING
  // ─────────────────────────────────────────────────────────
  {
    slug: 'wall-cladding',
    name: 'Wall Cladding',
    category: 'Wall & Vertical',
    caption: 'Exterior and interior wall cladding. Flat-back, corner, and stacked formats.',
    description:
      "Wall cladding sits flush against backing walls (flat-back format) or builds " +
      "dimensional surface (stacked / Z-strip format). Interior thicknesses run lighter; " +
      "exterior thicknesses run heavier for weight-bearing on backing structure.",
    typicalUse: [
      'Exterior building facades',
      'Feature interior walls',
      'Garden retaining walls (decorative face)',
      'Architectural accent walls',
    ],
    sizes: [
      { dimensions: '200 \u00d7 200 mm', note: 'Square format' },
      { dimensions: '300 \u00d7 300 mm', note: 'Square format' },
      { dimensions: '200 \u00d7 400 mm', note: 'Rectangular format' },
      { dimensions: '300 \u00d7 600 mm', note: 'Rectangular format' },
      { dimensions: '50 \u00d7 200 mm', note: 'Z-strip / stacked' },
      { dimensions: '75 \u00d7 300 mm', note: 'Z-strip / stacked' },
      { dimensions: 'Mosaic-format mesh-backed sheet', note: 'Mixed small fragments' },
    ],
    thicknesses: [
      { value: '20\u201330 mm', useCase: 'Interior cladding' },
      { value: '30\u201350 mm', useCase: 'Exterior cladding' },
      { value: '15\u201325 mm', useCase: 'Z-strip / stacked formats' },
    ],
    tolerances: [
      { attribute: 'Thickness (calibrated)', tolerance: '\u00b12 mm' },
      { attribute: 'Length / width', tolerance: '\u00b12 mm' },
      { attribute: 'Mounting flatness (back surface)', tolerance: '\u22641 mm' },
    ],
    packData: {
      crateDimensions: '1200 \u00d7 1000 \u00d7 800 mm',
      crateWeight: '~1100 kg',
      coveragePerCrate: '~25 sqm at 25 mm thickness',
    },
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'flamed', 'rockfaced', 'sawn', 'brushed', 'cotton-brush', 'leather', 'shotblast'],
    edgesAvailable: ['hand-cut', 'machine-cut'],
    placeholderClass: 'placeholder-format-cladding',
  },

  // ─────────────────────────────────────────────────────────
  // 08. COPINGS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'copings',
    name: 'Copings',
    category: 'Architectural Detail',
    caption: 'Pool, wall, and parapet finishing. Single-bullnose, full-bullnose, mitred corners.',
    description:
      "Copings finish the top edge of walls, pool surrounds, and parapets. The bullnose " +
      "profile rounds the visible edge for a softer architectural finish; corner pieces " +
      "are pre-mitred to the standard 90\u00b0. Pool-coping variants carry the deeper " +
      "bullnose for safer wet-area edges.",
    typicalUse: [
      'Pool coping and surrounds',
      'Garden wall capping',
      'Parapet finishing on roof terraces',
      'Architectural step-edge finishing',
    ],
    sizes: [
      { dimensions: '300 \u00d7 600 \u00d7 40 mm', note: 'Standard wall coping' },
      { dimensions: '350 \u00d7 600 \u00d7 40 mm', note: 'Wall coping with overhang' },
      { dimensions: '300 \u00d7 600 \u00d7 40 mm + bullnose', note: 'Pool coping, single bullnose' },
      { dimensions: '350 \u00d7 600 \u00d7 40 mm + bullnose', note: 'Pool coping with overhang and bullnose' },
    ],
    thicknesses: [
      { value: '40 mm', useCase: 'Standard' },
      { value: '50 mm', useCase: 'Heavy / exposed-edge' },
    ],
    tolerances: [
      { attribute: 'Length / width', tolerance: '\u00b12 mm' },
      { attribute: 'Thickness', tolerance: '\u00b12 mm' },
      { attribute: 'Bullnose profile radius', tolerance: '\u00b11 mm' },
    ],
    packData: {
      crateDimensions: '1200 \u00d7 1000 \u00d7 800 mm',
      crateWeight: '~1100 kg',
      coveragePerCrate: '~30 linear metres at standard size',
    },
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'sawn', 'flamed'],
    edgesAvailable: ['bullnose', 'machine-cut'],
    placeholderClass: 'placeholder-format-coping',
  },

  // ─────────────────────────────────────────────────────────
  // 09. WINDOW SILLS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'window-sills',
    name: 'Window Sills',
    category: 'Architectural Detail',
    caption: 'Exterior architectural lengths. Drip-edge profile, mitred or square ends.',
    description:
      "Window sills are exterior architectural lengths sat below window openings. The " +
      "underside drip groove channels water away from the building face; the top " +
      "surface holds a fine sawn finish. Standard 1200 mm length; custom on request.",
    typicalUse: [
      'Exterior window architecture',
      'Door-frame headers and reveals',
      'Architectural string-course bands',
      'Decorative wall course interruptions',
    ],
    sizes: [
      { dimensions: '1200 \u00d7 200 \u00d7 50 mm', note: 'Standard sill' },
      { dimensions: '1500 \u00d7 200 \u00d7 50 mm', note: 'Long sill' },
      { dimensions: '1800 \u00d7 200 \u00d7 50 mm', note: 'Extra-long sill' },
      { dimensions: 'Custom on order', note: 'Length and width per drawing' },
    ],
    thicknesses: [
      { value: '50 mm', useCase: 'Standard' },
      { value: '75 mm', useCase: 'Heavy / deep-set window' },
      { value: '100 mm', useCase: 'Architectural feature' },
    ],
    tolerances: [
      { attribute: 'Length', tolerance: '\u00b12 mm' },
      { attribute: 'Width / thickness', tolerance: '\u00b12 mm' },
      { attribute: 'Surface flatness', tolerance: '\u22641 mm per metre' },
    ],
    surfacesAvailable: ['honed', 'sawn', 'sandblast', 'flamed'],
    edgesAvailable: ['machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-sill',
  },

  // ─────────────────────────────────────────────────────────
  // 10. DOOR FRAMES
  // ─────────────────────────────────────────────────────────
  {
    slug: 'door-frames',
    name: 'Door Frames',
    category: 'Architectural Detail',
    caption: 'Architectural door surrounds. Custom per drawing.',
    description:
      "Door frames are architectural surrounds for entrances \u2014 jambs, headers, and " +
      "thresholds cut to per-drawing specification. KHADANE works to architect drawings " +
      "with stone dressed and finished at the Bijolia yard before dispatch.",
    typicalUse: [
      'Heritage building restoration',
      'Architectural entrance surrounds',
      'Temple and institutional doorways',
      'Custom residential entrances',
    ],
    sizes: [
      { dimensions: 'Custom per drawing', note: 'Jamb, header, threshold individually specified' },
    ],
    thicknesses: [
      { value: '100\u2013150 mm', useCase: 'Standard jamb thickness' },
      { value: '50\u2013100 mm', useCase: 'Header / threshold' },
    ],
    tolerances: [
      { attribute: 'All dimensions (machine-cut)', tolerance: '\u00b12 mm' },
    ],
    surfacesAvailable: ['honed', 'sandblast', 'sawn'],
    edgesAvailable: ['machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-door',
  },

  // ─────────────────────────────────────────────────────────
  // 11. BLOCK STEPS & TREADS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'block-steps-treads',
    name: 'Block Steps & Treads',
    category: 'Architectural Detail',
    caption: 'Garden steps and terrace treads. Bullnose front edge standard.',
    description:
      "Block steps are single-piece tread elements with the bullnose front edge cut in " +
      "during the finishing stage. Standard length 1000 mm; wider 1200 mm and 1500 mm " +
      "available for commercial and public-realm installations.",
    typicalUse: [
      'Garden step risers',
      'Terraced-garden treads',
      'Public-realm staircase treads',
      'Pool-deck step risers',
    ],
    sizes: [
      {
        dimensions: '1000 \u00d7 350 \u00d7 50 mm + 20 mm bullnose',
        note: 'Standard residential garden step',
      },
      {
        dimensions: '1200 \u00d7 400 \u00d7 50 mm + 30 mm bullnose',
        note: 'Wider terrace, public realm',
      },
      {
        dimensions: '1500 \u00d7 400 \u00d7 60 mm + 30 mm bullnose',
        note: 'Heavy use, commercial',
      },
      {
        dimensions: '600 \u00d7 350 \u00d7 50 mm + 20 mm bullnose',
        note: 'Narrow garden steps',
      },
    ],
    thicknesses: [
      { value: '50 mm + 20 mm bullnose', useCase: 'Standard' },
      { value: '60 mm + 30 mm bullnose', useCase: 'Heavy use' },
    ],
    tolerances: [
      { attribute: 'All dimensions (calibrated)', tolerance: '\u00b12 mm' },
      { attribute: 'Tread surface flatness', tolerance: '\u22641 mm per metre' },
    ],
    packData: {
      crateDimensions: '1500 \u00d7 800 \u00d7 800 mm',
      crateWeight: '~1000 kg',
      coveragePerCrate: '12\u201318 pieces per crate depending on size',
      containerLoading: '~14 crates per 20-ft',
    },
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'sawn', 'flamed'],
    edgesAvailable: ['bullnose', 'machine-cut'],
    placeholderClass: 'placeholder-format-step',
  },

  // ─────────────────────────────────────────────────────────
  // 12. BOULDERS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'boulders',
    name: 'Boulders',
    category: 'Landscape & Garden',
    caption: 'Natural-form landscape features. Quoted on enquiry by size and weight.',
    description:
      "Boulders are natural-form, undressed stones for landscape features \u2014 garden " +
      "focal points, water feature anchors, and natural-look retaining elements. Sold " +
      "by weight; sizes from 300 mm garden boulders up to 1500 mm landscape features.",
    typicalUse: [
      'Garden focal points',
      'Water feature anchors',
      'Natural-look retaining elements',
      'Sculpture-park installations',
    ],
    sizes: [
      { dimensions: '300\u2013500 mm garden boulders', note: 'Small landscape pieces' },
      { dimensions: '500\u20131000 mm feature boulders', note: 'Mid-size landscape features' },
      { dimensions: '1000\u20131500 mm landscape boulders', note: 'Large architectural features' },
    ],
    thicknesses: [
      { value: 'Natural form', useCase: 'All sizes' },
    ],
    tolerances: [
      { attribute: 'All dimensions', tolerance: 'Random; quoted by size range' },
    ],
    surfacesAvailable: ['natural-riven'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-boulder',
  },

  // ─────────────────────────────────────────────────────────
  // 13. CIRCLES
  // ─────────────────────────────────────────────────────────
  {
    slug: 'circles',
    name: 'Circles',
    category: 'Paving & Patio',
    caption: 'Patio centrepiece sets. Multi-piece radial cuts forming complete discs.',
    description:
      "Circle sets are multi-piece radial cuts that assemble into complete patio " +
      "centrepieces. Standard diameters from 1500 mm domestic up to 3000 mm public " +
      "realm. The centre disc and surrounding rings are cut from the same bed for " +
      "tonal continuity.",
    typicalUse: [
      'Patio centrepiece features',
      'Garden focal areas',
      'Public-realm gathering points',
      'Memorial and commemorative paving',
    ],
    sizes: [
      { dimensions: '\u00f8 1500 mm circle set', note: 'Domestic patio' },
      { dimensions: '\u00f8 1800 mm circle set', note: 'Larger garden feature' },
      { dimensions: '\u00f8 2400 mm circle set', note: 'Commercial scale' },
      { dimensions: '\u00f8 3000 mm circle set', note: 'Public-realm scale' },
    ],
    thicknesses: [
      { value: '22\u201325 mm', useCase: 'Standard calibrated' },
      { value: '30\u201340 mm', useCase: 'Heavy use' },
    ],
    tolerances: [
      { attribute: 'Thickness', tolerance: '\u00b12 mm' },
      { attribute: 'Outline radius', tolerance: '\u00b13 mm' },
    ],
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'sawn'],
    edgesAvailable: ['hand-cut', 'machine-cut'],
    placeholderClass: 'placeholder-format-circle',
  },

  // ─────────────────────────────────────────────────────────
  // 14. FIRE PITS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'fire-pits',
    name: 'Fire Pits',
    category: 'Landscape & Garden',
    caption: 'Multi-piece garden fire pit assemblies. Ring and bowl formats.',
    description:
      "Fire pits assemble from multi-piece sets \u2014 a base ring plus radial wall " +
      "pieces. Standard diameters from 800 mm to 1200 mm. The stone is fire-tested " +
      "at the yard before dispatch.",
    typicalUse: [
      'Garden fire features',
      'Outdoor entertaining areas',
      'Pool-side fire pits',
      'Public-realm gathering points',
    ],
    sizes: [
      { dimensions: '\u00f8 800 mm fire pit set', note: 'Domestic garden' },
      { dimensions: '\u00f8 1000 mm fire pit set', note: 'Mid-size' },
      { dimensions: '\u00f8 1200 mm fire pit set', note: 'Larger feature' },
    ],
    thicknesses: [
      { value: '50\u201375 mm wall thickness', useCase: 'Standard' },
    ],
    tolerances: [
      { attribute: 'Wall thickness', tolerance: '\u00b13 mm' },
      { attribute: 'Outline radius', tolerance: '\u00b15 mm' },
    ],
    surfacesAvailable: ['natural-riven', 'sandblast', 'tumbled'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-firepit',
  },

  // ─────────────────────────────────────────────────────────
  // 15. GARDEN FURNITURE
  // ─────────────────────────────────────────────────────────
  {
    slug: 'garden-furniture',
    name: 'Garden Furniture',
    category: 'Landscape & Garden',
    caption: 'Benches, tables, planters. Custom per drawing.',
    description:
      "Garden furniture pieces are cut per architect or designer drawing \u2014 benches, " +
      "tables, planters, and custom landscape elements. Standard pieces ship in three " +
      "to six weeks; custom designs longer.",
    typicalUse: [
      'Garden benches and seating',
      'Outdoor dining tables',
      'Stone planters and urns',
      'Custom landscape features',
    ],
    sizes: [
      { dimensions: 'Standard bench: 1500 \u00d7 400 \u00d7 450 mm' },
      { dimensions: 'Standard table: 1200 \u00d7 700 \u00d7 750 mm' },
      { dimensions: 'Planter: \u00f8 600 \u00d7 500 mm height' },
      { dimensions: 'Custom per drawing' },
    ],
    thicknesses: [
      { value: 'Varies by piece', useCase: 'Per drawing specification' },
    ],
    tolerances: [
      { attribute: 'Per drawing', tolerance: '\u00b13 mm typical' },
    ],
    surfacesAvailable: ['natural-riven', 'honed', 'sandblast', 'sawn', 'flamed', 'tumbled'],
    edgesAvailable: ['hand-cut', 'machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-furniture',
  },

  // ─────────────────────────────────────────────────────────
  // 16. ROOFING
  // ─────────────────────────────────────────────────────────
  {
    slug: 'roofing',
    name: 'Roofing',
    category: 'Architectural Detail',
    caption: 'Slate-bedded roofing tiles. Heritage and rural-architecture roofing.',
    description:
      "Roofing tiles are thin-cut slate-bedded sandstone for heritage and rural " +
      "architectural roofing. Available only from varieties with the right bedding " +
      "character; not all KHADANE stones split thin enough for roofing use.",
    typicalUse: [
      'Heritage building roofing',
      'Rural architectural roofing',
      'Garden buildings and outbuildings',
      'Decorative roof feature courses',
    ],
    sizes: [
      { dimensions: '300 \u00d7 200 mm', note: 'Small roof tile' },
      { dimensions: '400 \u00d7 300 mm', note: 'Standard roof tile' },
      { dimensions: '500 \u00d7 350 mm', note: 'Large roof tile' },
      { dimensions: '600 \u00d7 400 mm', note: 'Extra-large roof tile' },
    ],
    thicknesses: [
      { value: '10\u201315 mm', useCase: 'Thin-bedded varieties only' },
    ],
    tolerances: [
      { attribute: 'Thickness', tolerance: '\u00b13 mm' },
      { attribute: 'Length / width', tolerance: '\u00b15 mm' },
    ],
    surfacesAvailable: ['natural-riven'],
    edgesAvailable: ['hand-cut'],
    placeholderClass: 'placeholder-format-roofing',
  },

  // ─────────────────────────────────────────────────────────
  // 17. GANGSAW SLABS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'gangsaw-slabs',
    name: 'Gangsaw Slabs',
    category: 'Raw & Custom',
    caption: 'Large-format slabs cut from raw blocks. For custom cladding and bespoke work.',
    description:
      "Gangsaw slabs are large-format cuts taken directly from raw quarry blocks via " +
      "the yard's gangsaw line. Buyers specify thickness, and the slab gets cut to " +
      "size at the destination yard. Used for custom cladding installations, sculpture " +
      "bases, and bespoke architectural work.",
    typicalUse: [
      'Large-format cladding installations',
      'Sculpture and monument bases',
      'Bespoke architectural work',
      'Stockyard inventory for buyers cutting on-site',
    ],
    sizes: [
      { dimensions: '2400 \u00d7 1200 \u00d7 20 mm', note: 'Standard thin slab' },
      { dimensions: '2400 \u00d7 1200 \u00d7 25 mm', note: 'Standard mid-thickness' },
      { dimensions: '2400 \u00d7 1200 \u00d7 30 mm', note: 'Heavier slab' },
    ],
    thicknesses: [
      { value: '20 mm', useCase: 'Standard cladding' },
      { value: '25 mm', useCase: 'Heavy cladding' },
      { value: '30 mm', useCase: 'Maximum gangsaw thickness' },
    ],
    tolerances: [
      { attribute: 'Thickness', tolerance: '\u00b12 mm' },
      { attribute: 'Length / width', tolerance: '\u00b110 mm' },
    ],
    packData: {
      crateDimensions: '2500 \u00d7 1300 \u00d7 600 mm',
      crateWeight: '~2200 kg per crate',
      containerLoading: '~10 crates per 20-ft',
    },
    surfacesAvailable: ['sawn', 'honed', 'sandblast', 'flamed'],
    edgesAvailable: ['machine-cut'],
    placeholderClass: 'placeholder-format-slab',
  },

  // ─────────────────────────────────────────────────────────
  // 18. QUARRY BLOCKS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'quarry-blocks',
    name: 'Quarry Blocks',
    category: 'Raw & Custom',
    caption: 'Raw blocks direct from the quarry. For sculptors, mason yards, and dressed-stone buyers.',
    description:
      "Quarry blocks are sold raw, direct from KHADANE's quarries, to sculptors, mason " +
      "yards, and dressed-stone buyers cutting in-house. The blocks ship as extracted, " +
      "with chalk-marked grading by variety. Standard sizes by approximate dimension; " +
      "weight given per block.",
    typicalUse: [
      'Sculptor and mason yard supply',
      'Architectural restoration projects',
      'In-house dressed-stone production',
      'Custom monumental work',
    ],
    sizes: [
      {
        dimensions: '1500\u20132500 mm length \u00d7 1000\u20131500 mm width \u00d7 800\u20131200 mm height',
        note: 'Approximate dimensions, weight quoted per block',
      },
    ],
    thicknesses: [
      { value: 'Raw block form', useCase: 'Native quarry dimensions' },
    ],
    tolerances: [
      { attribute: 'All dimensions', tolerance: 'Random; quoted per block' },
    ],
    packData: {
      crateWeight: '~4.5\u20138.5 tonnes per block',
      containerLoading: '2\u20133 blocks per 20-ft container',
    },
    surfacesAvailable: ['natural-riven'],
    edgesAvailable: [],
    placeholderClass: 'placeholder-format-block',
  },

  // ─────────────────────────────────────────────────────────
  // 19. ACCESSORIES
  // ─────────────────────────────────────────────────────────
  {
    slug: 'accessories',
    name: 'Accessories',
    category: 'Architectural Detail',
    caption: 'Coping returns, drainage edges, custom small parts. Per specification.',
    description:
      "Accessories are the small custom parts that complete a stone installation \u2014 " +
      "coping returns, drainage channel edges, threshold strips, and matched small " +
      "elements that the larger formats don't cover. Quoted per specification.",
    typicalUse: [
      'Coping return pieces',
      'Drainage channel edges',
      'Threshold strips',
      'Custom small architectural parts',
    ],
    sizes: [
      { dimensions: 'Per specification', note: 'All accessory pieces custom per drawing or sample' },
    ],
    thicknesses: [
      { value: 'Per specification', useCase: 'Matched to primary installation' },
    ],
    tolerances: [
      { attribute: 'Per specification', tolerance: '\u00b12 mm typical' },
    ],
    surfacesAvailable: ['honed', 'sandblast', 'sawn', 'flamed'],
    edgesAvailable: ['hand-cut', 'machine-cut', 'bullnose'],
    placeholderClass: 'placeholder-format-accessory',
  },
]

// ============================================================
// Helper functions
// ============================================================

/** Get a format by its slug. */
export function getFormatBySlug(slug: string): Format | undefined {
  return FORMATS.find((f) => f.slug === slug)
}

/** Get all formats in a given category. */
export function getFormatsByCategory(category: FormatCategory): Format[] {
  return FORMATS.filter((f) => f.category === category)
}

/** All format categories present in the catalogue. */
export const FORMAT_CATEGORIES: FormatCategory[] = [
  'Paving & Patio',
  'Architectural Detail',
  'Landscape & Garden',
  'Wall & Vertical',
  'Raw & Custom',
]

/** Format count for SEO/structured-data only \u2014 not for editorial display. */
export const FORMAT_COUNT = FORMATS.length
