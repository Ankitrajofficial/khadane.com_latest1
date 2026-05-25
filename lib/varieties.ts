// ============================================================
// KHADANE™ — Variety Catalogue Data · v3.1
// 23 varieties: 14 owned + 9 allied
// Fully verified against operational truth via direct confirmation
// from the family. Geographic, geological, trade-alias, and operational
// data locked per the v3.1 proposal addendum.
//
// v3.1 changes from v2.0:
// • 23 varieties (was 21) — Multi Brown and Multi Colours added; Raveena
//   White retired (was not a distinct catalogue variety in operational reality)
// • Garda Green added (renamed from earlier "Sage Green" placeholder)
// • Owned/Allied flagged per variety (was 12/9 in v2; corrected to 14/9 in v3.1)
// • Two-sentence universal provenance pattern locked
// • Specific quarry villages identified across 16 KHADANE locations
// • Trade aliases catalogued per renamed variety
// • Splittable/non-splittable flag per variety
// • Decade KHADANE began working each variety
// • Founding-stone flag for Kandla Grey and Slate Grey (since 1972)
// • Multi-source quarry-network field for varieties spanning multiple villages
// ============================================================

export type Tier = 'owned' | 'allied'

/** A single quarry location KHADANE works (owned) or sources from (allied). */
export interface QuarryLocation {
  /** Village or settlement name (e.g. "Khadipur", "Bhooti", "Garda") */
  village: string
  /** Tehsil / sub-district (e.g. "Bijolia"). Optional — used where known. */
  tehsil?: string
  /** District (e.g. "Bhilwara", "Bundi"). Always specified. */
  district: string
  /** State (e.g. "Rajasthan"). Always specified. */
  state: string
  /** Operational note for this specific location, if any. */
  note?: string
}

/** A trade-name alias (e.g. "Two Tone Sandstone") that the KHADANE name
 *  acknowledges in the variety page's provenance line and in SEO. */
export interface TradeAlias {
  /** The trade name itself. */
  name: string
  /** Market where this name is used (e.g. "Indian export trade", "UK paving market"). */
  market?: string
  /** Optional note (e.g. "village-name designation"). */
  note?: string
}

export interface Variety {
  // ─── Identification ───
  code: string                    // e.g. "KHD-O-01"
  slug: string                    // URL slug, e.g. "khadipur-grey"
  catalogueName: string           // KHADANE catalogue name, e.g. "Khadipur Grey"
  nameHindi?: string              // Devanagari rendering, where used

  // ─── Status ───
  tier: Tier                      // 'owned' or 'allied'
  tierLabel: string               // Human-readable label for badges

  // ─── Geography ───
  /** Primary quarry location anchor (the village that anchors the variety editorially). */
  primaryLocation: QuarryLocation
  /** Additional quarry locations for multi-source varieties. */
  additionalLocations?: QuarryLocation[]
  /** Free-form network description for varieties that span many blocks
   *  (e.g. Kandla Grey, Camel Dust, Multi Colours). */
  quarryNetworkNote?: string

  // ─── Geology ───
  /** Geological formation or belt (e.g. "Bijolia belt, Lower Vindhyan"). */
  formation: string
  /** Whether the bed is naturally splittable (most Bijolia sandstones are).
   *  When false, the variety is block-only / machine-cut downstream. */
  splittable: boolean
  /** Operational notes about splittability (e.g. fossil-fragility, breakage). */
  splittabilityNote?: string

  // ─── History ───
  /** Decade KHADANE began working this stone (for Owned) or working with
   *  the partner (for Allied). Used in body copy and SEO. */
  workedSinceDecade: '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | 'tbc'
  /** True for the two founding-era stones (Kandla Grey, Slate Grey) since 1972. */
  foundingStone?: boolean

  // ─── Naming and aliases ───
  /** Trade names this variety is also known by. Surfaces in provenance
   *  line, SEO meta, and structured data. */
  tradeAliases: TradeAlias[]
  /** True if KHADANE has renamed this variety from its established trade name. */
  isRenamed: boolean

  // ─── Editorial copy ───
  /** The locked two-sentence (occasionally three) provenance line that
   *  appears in Block 08 ("A note on sourcing") of every variety page. */
  provenanceLine: string
  /** The two-paragraph Salvatori-spine body copy that appears in
   *  Block 03 ("The Stone") of every variety page.
   *  Written for the four placeholder varieties (Multi Brown, Multi Colours,
   *  Dual Tone, Red Choco) in Part A of the v3.1 proposal. Other varieties
   *  carry placeholder text until written. */
  blockThreeBody?: string
  /** Hero sub-line — italic descriptor below the variety name on the page. */
  heroSubline: string

  // ─── Display ───
  /** CSS class hint for placeholder swatch when no photograph is in place. */
  placeholderClass: string
}

// ============================================================
// THE 23 VARIETIES — LOCKED v3.1
// ============================================================

export const VARIETIES: Variety[] = [
  // ─────────────────────────────────────────────────────────
  // OWNED (14)
  // ─────────────────────────────────────────────────────────

  // 01. Khadipur Grey
  {
    code: 'KHD-O-01',
    slug: 'khadipur-grey',
    catalogueName: 'Khadipur Grey',
    nameHindi: 'खादीपुर ग्रे',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Khadipur',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
    },
    formation: 'Bijolia belt, Lower Vindhyan sandstone formation',
    splittable: true,
    workedSinceDecade: '1980s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned block at Khadipur village, " +
      "Bhilwara District. Catalogued under its trade name.",
    heroSubline: 'A cool, restrained grey from the Khadipur block of the Bijolia belt.',
    placeholderClass: 'placeholder-stone-grey',
  },

  // 02. Kandla Grey (founding stone)
  {
    code: 'KHD-O-02',
    slug: 'kandla-grey',
    catalogueName: 'Kandla Grey',
    nameHindi: 'कंदला ग्रे',
    tier: 'owned',
    tierLabel: 'Owned · Founding Stone',
    primaryLocation: {
      village: 'Parana',
      district: 'Bundi',
      state: 'Rajasthan',
      note: 'Founding bed, first quarried by the family in the early 1970s',
    },
    quarryNetworkNote:
      'Today worked across multiple owned beds in the Bijolia sandstone belt, ' +
      'spanning both the Bhilwara and Bundi sides of the region.',
    formation: 'Bijolia sandstone belt (Lower Vindhyan) — broader belt spanning Bhilwara and Bundi districts',
    splittable: true,
    workedSinceDecade: '1970s',
    foundingStone: true,
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Kandla Grey is KHADANE's founding stone, first quarried from the " +
      "family's block at Parana village, Bundi District, in the early years " +
      "of the operation. Today the stone is worked across multiple owned " +
      "beds in the Bijolia sandstone belt, spanning the Bhilwara and Bundi " +
      "sides of the region.",
    heroSubline: 'The founding stone. Worked since 1972 across the Bijolia belt.',
    placeholderClass: 'placeholder-stone-grey',
  },

  // 03. Autumn Brown
  {
    code: 'KHD-O-03',
    slug: 'autumn-brown',
    catalogueName: 'Autumn Brown',
    nameHindi: 'ऑटम ब्राउन',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Nayanagar',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
    },
    formation: 'Bijolia belt, Lower Vindhyan sandstone formation',
    splittable: true,
    workedSinceDecade: '1980s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned block at Nayanagar village, " +
      "within the Bijolia tehsil of Bhilwara District. Worked since the 1980s.",
    heroSubline: 'The warm-brown anchor of the Bijolia belt — Nayanagar quarry, since the 1980s.',
    placeholderClass: 'placeholder-stone-warm',
  },

  // 04. Raj Blend
  {
    code: 'KHD-O-04',
    slug: 'raj-blend',
    catalogueName: 'Raj Blend',
    nameHindi: 'राज ब्लेंड',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Choti Bijolia',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      note: 'Named anchor village within the multi-block variegated bed',
    },
    quarryNetworkNote: 'Multiple owned blocks across the Bijolia tehsil, including the Choti Bijolia block.',
    formation: 'Bijolia belt, Lower Vindhyan — naturally variegated bed',
    splittable: true,
    workedSinceDecade: '1980s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned variegated beds across the Bijolia " +
      "tehsil of Bhilwara District, including the Choti Bijolia block. " +
      "Worked since the 1980s.",
    heroSubline: 'A naturally variegated warm bed from the Bijolia tehsil.',
    placeholderClass: 'placeholder-stone-warm',
  },

  // 05. Garda Green (renamed)
  {
    code: 'KHD-O-05',
    slug: 'garda-green',
    catalogueName: 'Garda Green',
    nameHindi: 'गरडा ग्रीन',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Garda',
      district: 'Bundi',
      state: 'Rajasthan',
    },
    formation: 'Bundi sandstone formation (same broader belt as Kandla Grey)',
    splittable: true,
    workedSinceDecade: '1990s',
    tradeAliases: [
      { name: 'Raj Green', market: 'international trade' },
      { name: 'Rajpura Green', note: 'for stones from the neighbouring quarries' },
    ],
    isRenamed: true,
    provenanceLine:
      "Garda Green is quarried from the family's owned block at Garda " +
      "village, Bundi District. Also known in the trade as Raj Green, " +
      "or Rajpura Green for stones from the neighbouring quarries.",
    heroSubline: 'A sage-to-khaki green from the family\u2019s owned Garda block, Bundi District.',
    placeholderClass: 'placeholder-stone-green',
  },

  // 06. Slate Grey (founding stone)
  {
    code: 'KHD-O-06',
    slug: 'slate-grey',
    catalogueName: 'Slate Grey',
    nameHindi: 'स्लेट ग्रे',
    tier: 'owned',
    tierLabel: 'Owned · Founding Stone',
    primaryLocation: {
      village: 'Dabi-Budhpura area',
      district: 'Bundi',
      state: 'Rajasthan',
      note: 'Multiple owned blocks across the area',
    },
    formation: 'Bundi sandstone formation (broader belt spans Bundi and Bhilwara)',
    splittable: true,
    workedSinceDecade: '1970s',
    foundingStone: true,
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Slate Grey is quarried from the family's owned blocks in the " +
      "Dabi-Budhpura area of Bundi District, within the broader sandstone " +
      "belt that runs across Bundi and Bhilwara. Worked since the founding " +
      "years of the operation, 1972.",
    heroSubline: 'A dark, uniform grey from the founding-era Bundi blocks. Since 1972.',
    placeholderClass: 'placeholder-stone-dark',
  },

  // 07. Mint
  {
    code: 'KHD-O-07',
    slug: 'mint',
    catalogueName: 'Mint',
    nameHindi: 'मिंट',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Khoki',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      note: 'Near Sukhpura',
    },
    formation: 'Bijolia belt, Lower Vindhyan',
    splittable: true,
    workedSinceDecade: '1990s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Mint is quarried from the family's owned block at Khoki village, " +
      "near Sukhpura, within the Bijolia tehsil of Bhilwara District. " +
      "Worked since the 1990s.",
    heroSubline: 'A pale celadon-mint from the Khoki block. Worked since the 1990s.',
    placeholderClass: 'placeholder-stone-mint',
  },

  // 08. Fossil Mint
  {
    code: 'KHD-O-08',
    slug: 'fossil-mint',
    catalogueName: 'Fossil Mint',
    nameHindi: 'फॉसिल मिंट',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      village: '',
      note: 'Specific village held at tehsil level — fossil-bearing strata',
    },
    formation: 'Bijolia belt, Lower Vindhyan — fossil-bearing sedimentary strata',
    splittable: true,
    splittabilityNote:
      'Fossil layer fragile; primarily sold as calibrated paving and slabs, ' +
      'less commonly as hand-cut crazy paving',
    workedSinceDecade: '2000s',
    tradeAliases: [
      { name: 'Mint Fossil', market: 'alternative trade variant' },
    ],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned fossil-bearing mint bed in the " +
      "Bijolia tehsil of Bhilwara District. Worked since the 2000s.",
    blockThreeBody:
      "Fossil Mint shares the celadon-to-mint colour of ordinary Mint, but carries something " +
      "the rest of the bed does not: marine fossils preserved in the sedimentary layer. " +
      "Small bivalves, shell fragments, and occasional larger impressions surface across " +
      "the face of slabs cut from the fossil-bearing strata.\n\n" +
      "The fossils come rarely. Not every slab will carry visible patterns; the strata " +
      "that hold them are thinner than the surrounding bed, and a single quarry session " +
      "yields more ordinary Mint than Fossil Mint. The yard sorts the cut slabs before " +
      "dispatch \u2014 pieces with visible fossil impressions are flagged and packed together, " +
      "and customers who specifically need fossil-bearing material should request this at " +
      "the order stage. Honed surface treatment reads the fossils most clearly against " +
      "the polished ground.",
    heroSubline: 'The fossil-bearing mint bed. Marine impressions across selected slabs.',
    placeholderClass: 'placeholder-stone-mint',
  },

  // 09. Buff
  {
    code: 'KHD-O-09',
    slug: 'buff',
    catalogueName: 'Buff',
    nameHindi: 'बफ़',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Bhooti',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      note: 'Primary source village (Bhooti also supplies Camel Dust and Dual Tone)',
    },
    quarryNetworkNote:
      'Multiple owned blocks across the Bijolia tehsil, with Bhooti as the primary source.',
    formation: 'Bijolia belt, Lower Vindhyan',
    splittable: true,
    workedSinceDecade: '1980s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned blocks across the Bijolia tehsil " +
      "of Bhilwara District, with Bhooti village as the primary source. " +
      "Worked since the 1980s.",
    heroSubline: 'A pale yellow-beige from the family\u2019s Bhooti block and the wider Bijolia tehsil.',
    placeholderClass: 'placeholder-stone-buff',
  },

  // 10. Camel Dust
  {
    code: 'KHD-O-10',
    slug: 'camel-dust',
    catalogueName: 'Camel Dust',
    nameHindi: 'कैमल डस्ट',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Bhooti',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      note: 'One of the primary sources within a multi-block network (also supplies Buff)',
    },
    quarryNetworkNote: 'Multiple owned blocks across the Bijolia tehsil.',
    formation: 'Bijolia belt, Lower Vindhyan',
    splittable: true,
    workedSinceDecade: '1990s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Quarried from the family's owned blocks across the Bijolia tehsil " +
      "of Bhilwara District, with Bhooti village as one of the primary sources. " +
      "Worked since the 1990s.",
    heroSubline: 'A tan-to-camel mid-tone from the Bijolia tehsil. Bhooti and beyond.',
    placeholderClass: 'placeholder-stone-warm',
  },

  // 11. Red Choco (renamed)
  {
    code: 'KHD-O-11',
    slug: 'red-choco',
    catalogueName: 'Red Choco',
    nameHindi: 'रेड चॉको',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Kaansiya',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
    },
    formation: 'Bijolia belt, Lower Vindhyan — red-iron-oxide-rich bed',
    splittable: true,
    splittabilityNote: 'The bed splits cleanly along its natural bedding plane.',
    workedSinceDecade: '1990s',
    tradeAliases: [
      { name: 'Kaansiya Red', note: 'older village-name designation used historically by Indian buyers' },
    ],
    isRenamed: true,
    provenanceLine:
      "Red Choco is quarried from the family's owned block at Kaansiya " +
      "village, within the Bijolia tehsil of Bhilwara District. Also known " +
      "in the trade as Kaansiya Red \u2014 the older village-name designation.",
    blockThreeBody:
      "Red Choco carries a deep, settled cocoa-red tone \u2014 neither the brick-red of " +
      "Agra sandstone nor the orange-pink of Dholpur. The colour is darker, richer, more " +
      "uniform across a single face, with occasional darker mineral patches where the iron " +
      "content concentrated.\n\n" +
      "The surface holds shape well under the hand-cut tools the yard uses; the bed splits " +
      "cleanly along its natural plane, which makes Red Choco one of the more economical " +
      "varieties to dress at finer thicknesses. Specified for cladding, paving, and " +
      "architectural detail where the deep red tone needs to read confident rather than " +
      "industrial \u2014 the cocoa register is what differentiates it from the harder reds " +
      "of the Agra and Dholpur quarries.",
    heroSubline: 'A deep cocoa-red from the Kaansiya block. Renamed from the trade\u2019s Kaansiya Red.',
    placeholderClass: 'placeholder-stone-red',
  },

  // 12. Dual Tone (renamed)
  {
    code: 'KHD-O-12',
    slug: 'dual-tone',
    catalogueName: 'Dual Tone',
    nameHindi: 'ड्यूल टोन',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Sadaram Ji ka Khera',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
    },
    additionalLocations: [
      {
        village: 'Bhooti',
        tehsil: 'Bijolia',
        district: 'Bhilwara',
        state: 'Rajasthan',
      },
      {
        village: 'Udpuriya',
        tehsil: 'Bijolia',
        district: 'Bhilwara',
        state: 'Rajasthan',
      },
    ],
    formation: 'Bijolia belt, Lower Vindhyan — two-tone bedding plane',
    splittable: true,
    workedSinceDecade: '1990s',
    tradeAliases: [
      { name: 'Two Tone Sandstone', market: 'Indian export trade' },
      { name: 'Indian York Sandstone', market: 'UK paving market' },
    ],
    isRenamed: true,
    provenanceLine:
      "Dual Tone is quarried from the family's owned blocks at Sadaram Ji " +
      "ka Khera, Bhooti, and Udpuriya villages, within the Bijolia tehsil " +
      "of Bhilwara District. Also known in the trade as Two Tone Sandstone, " +
      "or Indian York Sandstone in the UK paving market.",
    blockThreeBody:
      "Dual Tone is the family\u2019s owned two-tone bed \u2014 buff yellow and dove grey " +
      "holding the same sedimentary plane, with the boundary between the two often running " +
      "diagonally or in soft swirls across a single slab. The contrast is the character " +
      "of the stone; each piece carries both tones in different proportions.\n\n" +
      "In the UK paving trade, this stone is the closest natural equivalent to traditional " +
      "York paving \u2014 a comparison that has held since the first Indian sandstone " +
      "exports reached the UK in the 1990s. KHADANE\u2019s Dual Tone is cut to UK calibration " +
      "standards and specified frequently for heritage-context paving, garden patios with " +
      "period properties, and any installation that wants the visual age of York stone " +
      "without the cost.",
    heroSubline: 'Buff and dove-grey in a single slab. The UK trade\u2019s Indian York.',
    placeholderClass: 'placeholder-stone-dual',
  },

  // 13. Multi Brown
  {
    code: 'KHD-O-13',
    slug: 'multi-brown',
    catalogueName: 'Multi Brown',
    nameHindi: 'मल्टी ब्राउन',
    tier: 'owned',
    tierLabel: 'Owned',
    primaryLocation: {
      village: 'Bhawanipura',
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
    },
    additionalLocations: [
      {
        village: 'Aroli',
        tehsil: 'Bijolia',
        district: 'Bhilwara',
        state: 'Rajasthan',
      },
      {
        village: 'Nayanagar',
        tehsil: 'Bijolia',
        district: 'Bhilwara',
        state: 'Rajasthan',
        note: 'Also supplies Autumn Brown',
      },
    ],
    formation: 'Bijolia belt, Lower Vindhyan — naturally variegated brown bed',
    splittable: true,
    workedSinceDecade: '2000s',
    tradeAliases: [
      { name: 'Mix Brown Sandstone', market: 'some Indian catalogues' },
    ],
    isRenamed: false,
    provenanceLine:
      "Multi Brown is quarried from the family's owned blocks at Bhawanipura, " +
      "Aroli, and Nayanagar villages, within the Bijolia tehsil of Bhilwara " +
      "District. Also known in some Indian catalogues as Mix Brown Sandstone.",
    blockThreeBody:
      "Multi Brown carries the full register of brown tones across a single quarry face " +
      "\u2014 honey, walnut, cinnamon, and cocoa drifting through the same bed as the " +
      "iron-oxide and organic sediment vary from layer to layer. No two slabs are " +
      "identical; the variegation is the character of the stone, not a deviation from it.\n\n" +
      "The surface holds a soft matte finish under most treatments. Grain runs in faint " +
      "horizontal striations, occasionally interrupted by darker mineral patches where the " +
      "bed was richer in iron. Specified often for installations that want warmth without " +
      "uniformity \u2014 courtyard paving, garden retaining walls, large-format cladding " +
      "where a single slab can carry several tonal shifts.",
    heroSubline: 'Honey, walnut, cinnamon, cocoa \u2014 the variegated brown bed of three KHADANE blocks.',
    placeholderClass: 'placeholder-stone-multibrown',
  },

  // 14. Multi Colours (newest stone, tehsil-wide)
  {
    code: 'KHD-O-14',
    slug: 'multi-colours',
    catalogueName: 'Multi Colours',
    nameHindi: 'मल्टी कलर्स',
    tier: 'owned',
    tierLabel: 'Owned · Newest',
    primaryLocation: {
      tehsil: 'Bijolia',
      district: 'Bhilwara',
      state: 'Rajasthan',
      village: '',
      note: 'Multiple owned blocks tehsil-wide; the variegated bed surfaces in several KHADANE quarries',
    },
    quarryNetworkNote:
      'The variegated bed surfaces in multiple KHADANE quarries across the Bijolia tehsil.',
    formation: 'Bijolia belt, Lower Vindhyan — mineralogically complex variegated bed',
    splittable: true,
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'Rainbow Sandstone', market: 'international trade' },
    ],
    isRenamed: true,
    provenanceLine:
      "Multi Colours is quarried from several of the family's owned blocks " +
      "across the Bijolia tehsil of Bhilwara District \u2014 the variegated " +
      "bed surfaces in multiple KHADANE quarries within the tehsil. Also " +
      "known in the trade as Rainbow Sandstone.",
    blockThreeBody:
      "Multi Colours is the full-spectrum variegated bed of KHADANE\u2019s owned Bijolia " +
      "quarries \u2014 browns, soft greens, dove greys, and pale yellows surfacing in " +
      "patches across a single face. The colour distribution is geological, not deliberate; " +
      "the bed laid down with mixed mineralogy across the layers and the stone reflects " +
      "that history wherever it is cut.\n\n" +
      "Honed surfaces hold the colour distinctly. Natural-riven faces soften the boundaries " +
      "between tones. Sandblasted and tumbled treatments lift the lighter patches and " +
      "recess the darker ones. The stone is specified for installations that want visual " +
      "movement \u2014 driveway cobbles where the variegation reads as patina from a distance, " +
      "wall cladding where the colour shifts give a slab the character of geological time.",
    heroSubline: 'The full-spectrum variegated bed. The newest stone in the catalogue.',
    placeholderClass: 'placeholder-stone-multi',
  },

  // ─────────────────────────────────────────────────────────
  // ALLIED (9)
  // ─────────────────────────────────────────────────────────

  // 15. Agra Red
  {
    code: 'KHD-A-01',
    slug: 'agra-red',
    catalogueName: 'Agra Red',
    nameHindi: 'आगरा रेड',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      village: 'Bansi Paharpur',
      tehsil: 'Bayana',
      district: 'Bharatpur',
      state: 'Rajasthan',
      note: 'Historical Mughal-era building stone; named for use in Agra monuments though quarried in Bharatpur District',
    },
    formation: 'Upper Vindhyan, Bhander Group sandstone formation',
    splittable: true,
    workedSinceDecade: '2000s',
    tradeAliases: [
      { name: 'Bansi Paharpur Red', note: 'village-name designation' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry at Bansi Paharpur village in " +
      "Bayana tehsil of Bharatpur District, Rajasthan. Also known in the " +
      "trade as Bansi Paharpur Red \u2014 the village-name designation used " +
      "by Indian buyers.",
    heroSubline: 'The historic Mughal-era red. Quarried at Bansi Paharpur, Bharatpur District.',
    placeholderClass: 'placeholder-stone-red',
  },

  // 16. Basalt Black (non-splittable, igneous outlier)
  {
    code: 'KHD-A-02',
    slug: 'basalt-black',
    catalogueName: 'Basalt Black',
    nameHindi: 'बेसाल्ट ब्लैक',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      district: 'Kota',
      state: 'Rajasthan',
      village: 'Kota basalt cluster',
      note: 'Specific quarry village TBC',
    },
    formation: 'Deccan Trap basalt (igneous volcanic formation \u2014 the catalogue\u2019s only non-sandstone)',
    splittable: false,
    splittabilityNote: 'Basalt is dense igneous rock; block-only, machine-cut downstream.',
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'Rajasthan Black Basalt', market: 'most common international name' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry in Kota District, Rajasthan. " +
      "The stone is volcanic basalt from the Deccan Trap formation, distinct " +
      "from the sandstone catalogue. Also known in the trade as Rajasthan " +
      "Black Basalt.",
    heroSubline: 'The catalogue\u2019s only igneous stone. Deccan Trap basalt from Kota.',
    placeholderClass: 'placeholder-stone-dark',
  },

  // 17. Dholpur Beige
  {
    code: 'KHD-A-03',
    slug: 'dholpur-beige',
    catalogueName: 'Dholpur Beige',
    nameHindi: 'धौलपुर बेज',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      village: 'Sarmathura',
      district: 'Dholpur',
      state: 'Rajasthan',
    },
    additionalLocations: [
      { village: 'Bari', district: 'Dholpur', state: 'Rajasthan' },
      { village: 'Baseri', district: 'Dholpur', state: 'Rajasthan' },
    ],
    formation: 'Vindhyan sandstone, Bhander Group (same formation that built the Red Fort and Humayun\u2019s Tomb)',
    splittable: true,
    workedSinceDecade: '2000s',
    tradeAliases: [
      { name: 'Dholpur Creme', market: 'alternative international name' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry at Sarmathura, within Dholpur " +
      "District of Rajasthan. The bed sits in the same Vindhyan sandstone " +
      "formation that built the Red Fort and Humayun\u2019s Tomb. Also known " +
      "in some catalogues as Dholpur Creme.",
    heroSubline: 'The Vindhyan beige of Mughal-era monuments. Sarmathura quarry, Dholpur.',
    placeholderClass: 'placeholder-stone-buff',
  },

  // 18. Dholpur Pink
  {
    code: 'KHD-A-04',
    slug: 'dholpur-pink',
    catalogueName: 'Dholpur Pink',
    nameHindi: 'धौलपुर पिंक',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      village: 'Sarmathura',
      district: 'Dholpur',
      state: 'Rajasthan',
    },
    additionalLocations: [
      { village: 'Bari', district: 'Dholpur', state: 'Rajasthan' },
    ],
    formation: 'Vindhyan sandstone, Bhander Group \u2014 hematite-rich pink bed',
    splittable: true,
    workedSinceDecade: '2000s',
    tradeAliases: [],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry at Sarmathura, within Dholpur " +
      "District of Rajasthan. The pink colour comes from natural hematite " +
      "content in the Vindhyan sandstone bed.",
    heroSubline: 'The hematite-rich pink of Sarmathura. From the same belt as Dholpur Beige.',
    placeholderClass: 'placeholder-stone-pink',
  },

  // 19. Gwalior Mint
  {
    code: 'KHD-A-05',
    slug: 'gwalior-mint',
    catalogueName: 'Gwalior Mint',
    nameHindi: 'ग्वालियर मिंट',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      district: 'Gwalior',
      state: 'Madhya Pradesh',
      village: 'Behat-Pichhore area',
      note: 'Multiple quarries in the Gwalior District sandstone outcrops',
    },
    formation: 'Vindhyan sandstone, central Indian extension',
    splittable: true,
    workedSinceDecade: '2000s',
    tradeAliases: [
      { name: 'Mint Natural Stone', market: 'alternative international name' },
      { name: 'Gwalior Greenish White', market: 'some operators' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry in the sandstone outcrops of " +
      "Gwalior District, Madhya Pradesh. The stone is from the central " +
      "Indian extension of the Vindhyan formation.",
    heroSubline: 'Cream-and-mint from the central Indian Vindhyan extension. Gwalior District, MP.',
    placeholderClass: 'placeholder-stone-mint',
  },

  // 20. Jaisalmer Yellow (limestone outlier)
  {
    code: 'KHD-A-06',
    slug: 'jaisalmer-yellow',
    catalogueName: 'Jaisalmer Yellow',
    nameHindi: 'जैसलमेर यलो',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      village: 'Jethwai',
      district: 'Jaisalmer',
      state: 'Rajasthan',
    },
    additionalLocations: [
      { village: 'Moolsagar', district: 'Jaisalmer', state: 'Rajasthan' },
    ],
    formation:
      'Jaisalmer Formation, Middle-to-Late Jurassic marine deposits \u2014 ' +
      'technically yellow limestone, classified by IUGS as Jaisalmer Golden Limestone',
    splittable: true,
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'Jaisalmer Golden Limestone', market: 'IUGS classification' },
      { name: 'Jaisalmer Yellow Limestone', market: 'trade variant' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry in the Jethwai and Moolsagar " +
      "quarry network of Jaisalmer District, Rajasthan. The stone is " +
      "technically Jurassic yellow limestone \u2014 the same formation that " +
      "built the Jaisalmer Fort, classified by IUGS as Jaisalmer Golden " +
      "Limestone.",
    heroSubline: 'The stone of Jaisalmer Fort. Jurassic yellow limestone, geologically distinct from the sandstone catalogue.',
    placeholderClass: 'placeholder-stone-yellow',
  },

  // 21. Lalitpur Yellow
  {
    code: 'KHD-A-07',
    slug: 'lalitpur-yellow',
    catalogueName: 'Lalitpur Yellow',
    nameHindi: 'ललितपुर यलो',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      district: 'Lalitpur',
      state: 'Uttar Pradesh',
      village: '',
      note: 'Lalitpur District quarry network',
    },
    formation: 'Vindhyan sandstone, Bhander Group \u2014 yellow-iron-oxide-rich bed',
    splittable: true,
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'L Yellow Sandstone', market: 'trade abbreviation' },
      { name: 'Sun Yellow Sandstone', market: 'alternative name' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry in Lalitpur District, Uttar " +
      "Pradesh. The bed is Vindhyan sandstone, yellow-iron-oxide-rich, " +
      "frost and salt-air resistant \u2014 specified often for sea-shore " +
      "cladding for these reasons.",
    heroSubline: 'A warm yellow Vindhyan from Lalitpur, UP. Frost-resistant and salt-air-tolerant.',
    placeholderClass: 'placeholder-stone-yellow',
  },

  // 22. Sagar Black
  {
    code: 'KHD-A-08',
    slug: 'sagar-black',
    catalogueName: 'Sagar Black',
    nameHindi: 'सागर ब्लैक',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      district: 'Sagar',
      state: 'Madhya Pradesh',
      village: '',
      note: 'Sagar District quarry cluster; processing routed via Kota',
    },
    formation:
      'Sandstone bed with high iron-rich mineral content (quartz and feldspar matrix ' +
      'with dark mineral concentration producing the near-uniform black character)',
    splittable: true,
    splittabilityNote: 'Higher breakage rates during calibration; pricing reflects this.',
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'Black Saga Sandstone', market: 'international variant' },
      { name: 'Kalabari Black Sandstone', market: 'alternate Indian name' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry in Sagar District, Madhya " +
      "Pradesh. The bed yields the deepest black character in the catalogue " +
      "\u2014 quartz and feldspar matrix with high iron-oxide mineral " +
      "concentration.",
    heroSubline: 'The deepest black character in the catalogue. Sagar District, MP.',
    placeholderClass: 'placeholder-stone-dark',
  },

  // 23. Teakwood (non-splittable)
  {
    code: 'KHD-A-09',
    slug: 'teakwood',
    catalogueName: 'Teakwood',
    nameHindi: 'टीकवुड',
    tier: 'allied',
    tierLabel: 'Allied',
    primaryLocation: {
      village: 'Garda',
      district: 'Bundi',
      state: 'Rajasthan',
      note: 'Same village as Garda Green; different quarry, allied partnership',
    },
    formation:
      'Bundi sandstone formation \u2014 banded brown-iron-oxide bed with ' +
      'natural wood-grain striations',
    splittable: false,
    splittabilityNote:
      'Block-only, machine-cut downstream. Available in machine-cut formats only ' +
      '\u2014 gangsaw slabs, calibrated paving, architectural cladding, cobbles, ' +
      'sills, copings, steps and treads.',
    workedSinceDecade: '2010s',
    tradeAliases: [
      { name: 'Bundi Teakwood', note: 'geographic-anchor SEO alias' },
    ],
    isRenamed: false,
    provenanceLine:
      "Sourced from a family-allied quarry at Garda village in Bundi " +
      "District, Rajasthan. The bed yields the catalogue\u2019s most figured " +
      "stone \u2014 natural wood-grain striations across each face. Also " +
      "known in the trade as Bundi Teakwood.",
    heroSubline: 'The catalogue\u2019s most figured stone \u2014 wood-grain striations across each slab.',
    placeholderClass: 'placeholder-stone-teakwood',
  },
]

// ============================================================
// Helper functions
// ============================================================

/** Get a variety by its slug. */
export function getVarietyBySlug(slug: string): Variety | undefined {
  return VARIETIES.find((v) => v.slug === slug)
}

/** Get a variety by its code (e.g. "KHD-O-01"). */
export function getVarietyByCode(code: string): Variety | undefined {
  return VARIETIES.find((v) => v.code === code)
}

/** Get all varieties of a given tier. */
export function getVarietiesByTier(tier: Tier): Variety[] {
  return VARIETIES.filter((v) => v.tier === tier)
}

/** Get all owned varieties. */
export const OWNED_VARIETIES = VARIETIES.filter((v) => v.tier === 'owned')

/** Get all allied varieties. */
export const ALLIED_VARIETIES = VARIETIES.filter((v) => v.tier === 'allied')

/** All founding-era stones (Kandla Grey, Slate Grey). */
export const FOUNDING_STONES = VARIETIES.filter((v) => v.foundingStone)

/** Non-splittable varieties (Basalt Black, Teakwood). */
export const NON_SPLITTABLE_VARIETIES = VARIETIES.filter((v) => !v.splittable)

/** Renamed varieties (KHADANE catalogue name differs from primary trade name). */
export const RENAMED_VARIETIES = VARIETIES.filter((v) => v.isRenamed)

/** Get all distinct quarry villages KHADANE works (owned + allied combined). */
export function getAllQuarryVillages(): string[] {
  const villages = new Set<string>()
  for (const v of VARIETIES) {
    if (v.primaryLocation.village) villages.add(v.primaryLocation.village)
    if (v.additionalLocations) {
      for (const loc of v.additionalLocations) {
        if (loc.village) villages.add(loc.village)
      }
    }
  }
  return Array.from(villages).sort()
}

/** Get count of varieties by tier (for SEO and structured data only \u2014
 *  not for editorial display per the v3.1 voice rules). */
export const VARIETY_COUNTS = {
  total: VARIETIES.length,
  owned: OWNED_VARIETIES.length,
  allied: ALLIED_VARIETIES.length,
} as const
