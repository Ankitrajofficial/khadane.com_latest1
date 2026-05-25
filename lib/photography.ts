// ============================================================
// KHADANE™ — Photography Placeholder Catalogue · v3.1
// Centralised photograph slot registry. Each entry corresponds to a
// specific page placement and a target image file path under /public/img/.
// Until the real photograph drops in at the specified path, the page
// renders a PlaceholderImage component with the slot's expected character.
//
// Per v3.1 locks:
//   The Quarry  : 2 hero + 8 working photos = 10 slots
//   The Yard    : 2 hero + 6 stepped checkpoints = 8 slots
//   The Gallery : 8 categorised browse sections, starting ~60 slots
// ============================================================

/** A single photograph slot. */
export interface PhotoSlot {
  /** Stable key used by the page to reference this slot. */
  key: string
  /** Public path where the real photograph should live. */
  path: string
  /** Caption shown beneath the photograph (Antolini-brevity, italic gold). */
  caption: string
  /** Longer description used as placeholder hint + photographer brief. */
  description: string
  /** Aspect-ratio hint for layout (e.g. "16:9", "4:5", "1:1"). */
  aspect?: string
  /** Whether this slot is a hero / lead image for its page. */
  isHero?: boolean
}

// ============================================================
// THE QUARRY — 10 placeholder slots
// ============================================================

export const QUARRY_PHOTOS: PhotoSlot[] = [
  {
    key: 'hero-aerial',
    path: '/img/quarry/hero-aerial.jpg',
    caption: 'The Bijolia belt, at scale.',
    description: 'Wide aerial of the Bijolia sandstone belt \u2014 quarry country across the horizon. The opening image of the page.',
    aspect: '16:9',
    isHero: true,
  },
  {
    key: 'hero-face',
    path: '/img/quarry/hero-face.jpg',
    caption: 'A working face at distance.',
    description: 'Atmospheric portrait of a working KHADANE quarry face. Documentary register, raking light.',
    aspect: '16:9',
    isHero: true,
  },
  {
    key: 'aerial-01',
    path: '/img/quarry/aerial-01.jpg',
    caption: 'Khadipur block. Bhilwara District. Working face.',
    description: 'Aerial of one specific KHADANE-owned quarry \u2014 Khadipur or Bhooti at altitude.',
    aspect: '3:2',
  },
  {
    key: 'face-01',
    path: '/img/quarry/face-01.jpg',
    caption: 'Cut wall. Bedding plane visible.',
    description: 'Quarry face at working depth. The bedding plane should be visible as horizontal lines across the cut.',
    aspect: '3:2',
  },
  {
    key: 'extraction-01',
    path: '/img/quarry/extraction-01.jpg',
    caption: 'A block separates from the bed.',
    description: 'Block extraction in progress \u2014 drill marks visible, the moment a block separates from the face.',
    aspect: '3:2',
  },
  {
    key: 'workforce-01',
    path: '/img/quarry/workforce-01.jpg',
    caption: 'The workforce. Scale at the cut.',
    description: 'Workers at the quarry face. Shows scale, the human dimension of the operation.',
    aspect: '3:2',
  },
  {
    key: 'blocks-01',
    path: '/img/quarry/blocks-01.jpg',
    caption: 'Raw blocks in the holding area.',
    description: 'Raw blocks accumulated in the quarry holding area, awaiting transport to the yard.',
    aspect: '3:2',
  },
  {
    key: 'loading-01',
    path: '/img/quarry/loading-01.jpg',
    caption: 'Loading for the yard.',
    description: 'Quarry trucks loading raw blocks for transport to the Bijolia yard.',
    aspect: '3:2',
  },
  {
    key: 'aerial-02',
    path: '/img/quarry/aerial-02.jpg',
    caption: 'Garda. Kaansiya. A second view.',
    description: 'A second quarry village \u2014 Garda or Kaansiya \u2014 at aerial distance.',
    aspect: '3:2',
  },
  {
    key: 'bedding-01',
    path: '/img/quarry/bedding-01.jpg',
    caption: 'The bed, read from the cut.',
    description: 'Close-up of a bedding plane visible at a quarry face. The geological character of the bed.',
    aspect: '4:3',
  },
]

// ============================================================
// THE YARD — 8 placeholder slots (2 hero + 6 stepped checkpoints)
// Per v3.1 lock: 2 hero photos before steps, 1 photo per step.
// ============================================================

export const YARD_PHOTOS: PhotoSlot[] = [
  {
    key: 'hero-wide',
    path: '/img/yard/hero-wide.jpg',
    caption: 'The yard at work.',
    description: 'Wide-shot of the Bijolia yard at full operation. The opening image of the page.',
    aspect: '16:9',
    isHero: true,
  },
  {
    key: 'hero-close',
    path: '/img/yard/hero-close.jpg',
    caption: 'Up close. The stone being worked.',
    description: 'Atmospheric close-up at the yard \u2014 a worker, a tool, a slab. Documentary, not posed.',
    aspect: '4:3',
    isHero: true,
  },
  {
    key: 'step-01-arrival',
    path: '/img/yard/step-01-arrival.jpg',
    caption: 'Arrival. \u2014 Raw blocks from KHADANE\u2019s own quarries, received at the Bijolia yard.',
    description: 'Step 01: A truck arriving from the quarry, blocks being unloaded at the yard receiving area.',
    aspect: '3:2',
  },
  {
    key: 'step-02-selection',
    path: '/img/yard/step-02-selection.jpg',
    caption: 'Selection. \u2014 Blocks graded and chalk-marked by variety lot.',
    description: 'Step 02: Block selection and grading. Workers inspecting blocks, chalk markings visible.',
    aspect: '3:2',
  },
  {
    key: 'step-03-gangsaw',
    path: '/img/yard/step-03-gangsaw.jpg',
    caption: 'Gangsaw. \u2014 The block becomes slabs.',
    description: 'Step 03: Gangsaw line working a block into raw slabs. Most photogenic checkpoint.',
    aspect: '16:9',
  },
  {
    key: 'step-04-finishing',
    path: '/img/yard/step-04-finishing.jpg',
    caption: 'Finishing. \u2014 Surface and edge worked to specification.',
    description: 'Step 04: Calibration, surfacing, and edging. The finishing lines running.',
    aspect: '3:2',
  },
  {
    key: 'step-05-crating',
    path: '/img/yard/step-05-crating.jpg',
    caption: 'Crated. \u2014 Quality-checked, packed for the journey.',
    description: 'Step 05: Quality check and crating. Workers measuring and packing finished pieces.',
    aspect: '3:2',
  },
  {
    key: 'step-06-dispatch',
    path: '/img/yard/step-06-dispatch.jpg',
    caption: 'Dispatch. \u2014 Crates leave for Mundra.',
    description: 'Step 06: Dispatch to Mundra Port. Crates being loaded onto trucks, or containers being loaded at the port.',
    aspect: '3:2',
  },
]

// ============================================================
// THE GALLERY — 8 categorised browse sections
// ============================================================

export interface GalleryCategory {
  slug: string
  name: string
  caption: string
  description: string
  /** Hero photograph for the category. */
  hero: PhotoSlot
  /** Browse-grid photographs in the category. Each one a slot. */
  photos: PhotoSlot[]
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    slug: 'aerials',
    name: 'Aerials',
    caption: 'Wide views of the belt and the quarries.',
    description:
      "Aerial photographs of the Bijolia and Bundi sandstone belt \u2014 quarry country " +
      "from altitude. The catalogue mapped from above.",
    hero: {
      key: 'gallery-aerials-hero',
      path: '/img/gallery/aerials/hero.jpg',
      caption: 'The belt, mapped from above.',
      description: 'Lead photograph for the Aerials category. Wide-format quarry-country aerial.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 8 }, (_, i) => ({
      key: `gallery-aerials-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/aerials/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Aerial photograph ${i + 1} of 8. Quarry country at altitude.`,
      aspect: '3:2',
    })),
  },
  {
    slug: 'quarry',
    name: 'Quarry',
    caption: 'Working faces, extraction, the cut.',
    description:
      "Documentary photographs of the KHADANE quarry operations \u2014 working faces, " +
      "extraction sequences, the workforce at scale.",
    hero: {
      key: 'gallery-quarry-hero',
      path: '/img/gallery/quarry/hero.jpg',
      caption: 'The working face.',
      description: 'Lead photograph for the Quarry category. Wide quarry-face documentary shot.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 10 }, (_, i) => ({
      key: `gallery-quarry-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/quarry/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Quarry photograph ${i + 1} of 10. Working operations.`,
      aspect: '3:2',
    })),
  },
  {
    slug: 'yard',
    name: 'Yard',
    caption: 'The processing operation at Bijolia.',
    description:
      "The Bijolia yard at work \u2014 block arrival, gangsaws running, the finishing " +
      "lines, the crating area, the dispatch.",
    hero: {
      key: 'gallery-yard-hero',
      path: '/img/gallery/yard/hero.jpg',
      caption: 'The yard.',
      description: 'Lead photograph for the Yard category. Wide yard-operation shot.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 10 }, (_, i) => ({
      key: `gallery-yard-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/yard/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Yard photograph ${i + 1} of 10. Processing operations.`,
      aspect: '3:2',
    })),
  },
  {
    slug: 'cut-finishing',
    name: 'Cut & Finishing',
    caption: 'The surface treatments at close range.',
    description:
      "Close-range photographs of the cutting and finishing operations \u2014 surfaces " +
      "in production, edges being profiled, the moment of the cut.",
    hero: {
      key: 'gallery-cut-finishing-hero',
      path: '/img/gallery/cut-finishing/hero.jpg',
      caption: 'The cut.',
      description: 'Lead photograph for the Cut & Finishing category. Close-up of a surface or edge being worked.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 8 }, (_, i) => ({
      key: `gallery-cut-finishing-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/cut-finishing/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Cut & Finishing photograph ${i + 1} of 8. Surface and edge work at close range.`,
      aspect: '4:3',
    })),
  },
  {
    slug: 'loading-dispatch',
    name: 'Loading & Dispatch',
    caption: 'Crates, trucks, the port.',
    description:
      "The export end of the chain \u2014 crates being loaded, trucks leaving the yard, " +
      "containers at Mundra Port, vessels waiting.",
    hero: {
      key: 'gallery-loading-dispatch-hero',
      path: '/img/gallery/loading-dispatch/hero.jpg',
      caption: 'Dispatch.',
      description: 'Lead photograph for the Loading & Dispatch category. Crates, trucks, or port operations.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 6 }, (_, i) => ({
      key: `gallery-loading-dispatch-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/loading-dispatch/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Loading & Dispatch photograph ${i + 1} of 6. Logistics and export.`,
      aspect: '3:2',
    })),
  },
  {
    slug: 'installations',
    name: 'Installations',
    caption: 'Completed projects supplied by KHADANE.',
    description:
      "Photographs of completed installations using KHADANE stone \u2014 patios, " +
      "cladding, public-realm work, the catalogue at work in the world.",
    hero: {
      key: 'gallery-installations-hero',
      path: '/img/gallery/installations/hero.jpg',
      caption: 'The catalogue, in place.',
      description: 'Lead photograph for the Installations category. Hero project shot.',
      aspect: '16:9',
      isHero: true,
    },
    photos: Array.from({ length: 12 }, (_, i) => ({
      key: `gallery-installations-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/installations/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Installation photograph ${i + 1} of 12. Completed projects.`,
      aspect: '3:2',
    })),
  },
  {
    slug: 'material-close-ups',
    name: 'Material Close-Ups',
    caption: 'Per-variety material character shots.',
    description:
      "Close-range photographs of the catalogue's 23 stones \u2014 grain, colour, " +
      "natural character at slab-face distance.",
    hero: {
      key: 'gallery-material-hero',
      path: '/img/gallery/material-close-ups/hero.jpg',
      caption: 'The stone, up close.',
      description: 'Lead photograph for the Material Close-Ups category. A single slab face at close range.',
      aspect: '4:3',
      isHero: true,
    },
    photos: Array.from({ length: 12 }, (_, i) => ({
      key: `gallery-material-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/material-close-ups/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Material close-up ${i + 1} of 12. Stone character at close range.`,
      aspect: '4:3',
    })),
  },
  {
    slug: 'editorial',
    name: 'Editorial',
    caption: 'Atmospheric and documentary work.',
    description:
      "Editorial-register photographs of the operation \u2014 atmospheric shots, " +
      "workforce portraits, the working life of the catalogue.",
    hero: {
      key: 'gallery-editorial-hero',
      path: '/img/gallery/editorial/hero.jpg',
      caption: 'A working life.',
      description: 'Lead photograph for the Editorial category. Atmospheric, documentary register.',
      aspect: '3:2',
      isHero: true,
    },
    photos: Array.from({ length: 8 }, (_, i) => ({
      key: `gallery-editorial-${String(i + 1).padStart(2, '0')}`,
      path: `/img/gallery/editorial/${String(i + 1).padStart(2, '0')}.jpg`,
      caption: '',
      description: `Editorial photograph ${i + 1} of 8. Documentary register.`,
      aspect: '3:2',
    })),
  },
]

// ============================================================
// HOMEPAGE PHOTOS — referenced from the homepage layout
// ============================================================

export const HOMEPAGE_PHOTOS = {
  hero: {
    key: 'homepage-hero',
    path: '/img/homepage/hero.jpg',
    caption: 'The Bijolia belt.',
    description: 'Homepage hero photograph. Wide-format quarry-country shot.',
    aspect: '16:9',
    isHero: true,
  } satisfies PhotoSlot,
} as const

// ============================================================
// THE GROUP PAGE PHOTOS — referenced from the Group page layout
// ============================================================

export const GROUP_PHOTOS = {
  hero: {
    key: 'group-hero',
    path: '/img/group/hero.jpg',
    caption: 'A working enterprise. Since 1972.',
    description: 'Group page hero. Wide-format operational photograph (yard at work, quarry face, or office at scale).',
    aspect: '16:9',
    isHero: true,
  } satisfies PhotoSlot,
  // Vertical card photographs
  verticalStone: {
    key: 'vertical-stone',
    path: '/img/group/vertical-stone.jpg',
    caption: 'Stone & Export',
    description: 'Vertical card photograph: yard at work or quarry face.',
    aspect: '4:3',
  } satisfies PhotoSlot,
  verticalAutomotive: {
    key: 'vertical-automotive',
    path: '/img/group/vertical-automotive.jpg',
    caption: 'Automotive & Fuel',
    description: 'Vertical card photograph: dealership or fuel station.',
    aspect: '4:3',
  } satisfies PhotoSlot,
  verticalHospitality: {
    key: 'vertical-hospitality',
    path: '/img/group/vertical-hospitality.jpg',
    caption: 'Hospitality',
    description: 'Vertical card photograph: hotel exterior or interior detail. M3 Hotel, Kota.',
    aspect: '4:3',
  } satisfies PhotoSlot,
  verticalHousing: {
    key: 'vertical-housing',
    path: '/img/group/vertical-housing.jpg',
    caption: 'Student Housing',
    description: 'Vertical card photograph: residency exterior. (Rahul to upload.)',
    aspect: '4:3',
  } satisfies PhotoSlot,
  verticalFood: {
    key: 'vertical-food',
    path: '/img/group/vertical-food.jpg',
    caption: 'Food Services',
    description: 'Vertical card photograph: kitchen, mess, or thali presentation. Vyanjanam.',
    aspect: '4:3',
  } satisfies PhotoSlot,
} as const

// ============================================================
// Helper functions
// ============================================================

/** Get a single Quarry slot by key. */
export function getQuarryPhoto(key: string): PhotoSlot | undefined {
  return QUARRY_PHOTOS.find((p) => p.key === key)
}

/** Get a single Yard slot by key. */
export function getYardPhoto(key: string): PhotoSlot | undefined {
  return YARD_PHOTOS.find((p) => p.key === key)
}

/** Get a Gallery category by slug. */
export function getGalleryCategory(slug: string): GalleryCategory | undefined {
  return GALLERY_CATEGORIES.find((c) => c.slug === slug)
}

/** All photograph paths in the catalogue (for use by the PlaceholderImage
 *  component and for build-time checking whether real files exist). */
export function getAllPhotoPaths(): string[] {
  const paths: string[] = []
  for (const p of QUARRY_PHOTOS) paths.push(p.path)
  for (const p of YARD_PHOTOS) paths.push(p.path)
  for (const c of GALLERY_CATEGORIES) {
    paths.push(c.hero.path)
    for (const p of c.photos) paths.push(p.path)
  }
  paths.push(HOMEPAGE_PHOTOS.hero.path)
  paths.push(GROUP_PHOTOS.hero.path)
  paths.push(GROUP_PHOTOS.verticalStone.path)
  paths.push(GROUP_PHOTOS.verticalAutomotive.path)
  paths.push(GROUP_PHOTOS.verticalHospitality.path)
  paths.push(GROUP_PHOTOS.verticalHousing.path)
  paths.push(GROUP_PHOTOS.verticalFood.path)
  return paths
}

/** Count of placeholder slots across all categories. */
export const PHOTO_SLOT_COUNT = {
  quarry: QUARRY_PHOTOS.length,
  yard: YARD_PHOTOS.length,
  gallery: GALLERY_CATEGORIES.reduce((sum, c) => sum + 1 + c.photos.length, 0),
  group: 6, // 1 hero + 5 vertical cards
  homepage: 1,
  total: 0, // computed below
} as const

// computed at module load
;(PHOTO_SLOT_COUNT as { total: number }).total =
  PHOTO_SLOT_COUNT.quarry +
  PHOTO_SLOT_COUNT.yard +
  PHOTO_SLOT_COUNT.gallery +
  PHOTO_SLOT_COUNT.group +
  PHOTO_SLOT_COUNT.homepage
