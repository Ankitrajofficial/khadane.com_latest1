// ============================================================
// KHADANE™ — i18n dictionary runtime · v3.1
// Loads per-locale JSON dictionaries and provides typed translation helpers.
//
// The English source dictionary is the authoritative copy. Other locales
// are populated by the build-time translation pipeline (DeepL for European
// languages, Google for Mandarin), with the disclaimer surfacing on every
// translated page.
// ============================================================

import type { Locale } from './config'
import { DEFAULT_LOCALE, isLocale } from './config'

// ============================================================
// THE ENGLISH SOURCE DICTIONARY
// All strings the site UI references go here first.
// Non-English locales follow this exact shape; build-time pipeline
// fills the values via machine translation.
// ============================================================

export const enDictionary = {
  // ─── Navigation labels ───
  nav: {
    collection: 'Collection',
    formats: 'Formats',
    quarry: 'The Quarry',
    yard: 'The Yard',
    fieldNotes: 'Field Notes',
    group: 'The Group',
    gallery: 'Gallery',
    enquire: 'Enquire',
    languageSwitcher: 'Language',
  },

  // ─── Common buttons and actions ───
  actions: {
    enquire: 'Enquire',
    enquireAboutThis: 'Enquire about this stone',
    downloadDatasheet: 'Datasheet (PDF)',
    requestSample: 'Request a sample',
    saveToList: 'Save to list',
    viewAll: 'View all',
    learnMore: 'Learn more',
    backToCollection: 'Back to the Collection',
    backToFormats: 'Back to the Formats',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    submit: 'Submit',
    cancel: 'Cancel',
  },

  // ─── Footer labels ───
  footer: {
    copyright:
      '© 2026 KHADANE™ · A vertical of Mohan Lal & Sons ' +
      '(Dhakar Stones Group), Bijolia, Rajasthan · Since 1972',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'exports@khadane.com',
  },

  // ─── Homepage editorial copy ───
  homepage: {
    eyebrow: 'KHADANE™ · BIJOLIA · SINCE 1972',
    headline: 'Stone of the Bijolia Belt.',
    subline:
      'Owned quarries, and a network of allied quarries across northern ' +
      'India. Cut and dressed in every form the trade specifies.',
    openingPara:
      'KHADANE works the Bijolia sandstone belt of Rajasthan. The operation ' +
      'has stayed close to its founding shape since 1972 — owned quarries, ' +
      'processing units running in the yard, and a network of allied quarries ' +
      'across northern India whose operators have been known to the house ' +
      'for decades.',
    closingPara:
      'The catalogue is what the work allows. Twenty-three sandstones, owned ' +
      'and allied. Every format the trade asks for. Every surface and edge, ' +
      'cut and dressed before the stone leaves Mundra.',
    collectionTeaser: 'The Collection',
    collectionTeaserSubline: 'Twenty-three sandstones, owned and allied.',
    formatsTeaser: 'Formats',
    formatsTeaserSubline: 'Every form a sandstone can take.',
    quarryTeaser: 'The Quarry',
    quarryTeaserSubline: 'A working belt of the Bijolia District.',
    yardTeaser: 'The Yard',
    yardTeaserSubline: 'Where the cut decisions happen.',
    fieldNotesTeaser: 'Field Notes',
    fieldNotesTeaserSubline: 'The slow voice of the trade brand.',
    groupTeaser: 'The Group',
    groupTeaserSubline: 'Mohan Lal & Sons. Since 1972.',
  },

  // ─── Collection page ───
  collection: {
    headline: 'The Collection.',
    subline:
      'Twenty-three sandstones, owned and allied. Each one, the surfaces ' +
      'and edges and formats it can take.',
    editorialBody:
      'Some of these stones are quarried by KHADANE. Others come from quarries ' +
      'the house has known for two decades \u2014 operators whose work and word ' +
      'are trusted. The distinction is marked openly. The catalogue carries both.',
    tierLabelOwned: 'Owned',
    tierLabelAllied: 'Allied',
    badgeFoundingStone: 'Founding Stone',
    filterAll: 'All Stones',
    filterOwned: 'Owned',
    filterAllied: 'Allied',
  },

  // ─── The Group page ───
  group: {
    eyebrow: 'MOHAN LAL & SONS \u00b7 BIJOLIA, RAJASTHAN \u00b7 SINCE 1972',
    headline: 'The Group.',
    subline:
      'A working enterprise across five verticals \u2014 stone, automotive, ' +
      'hospitality, student housing, food services. Based in Bijolia, ' +
      'Rajasthan, in continuous operation since 1972. Also known to the ' +
      'trade as the Dhakar Stones Group.',
    captionUnderHero: 'Five verticals. One house. Fifty-three years.',

    // Section 02 — The Operation
    operationSectionTitle: 'The Operation',
    operationPara1:
      'Mohan Lal & Sons is a working group of businesses founded in Bijolia, ' +
      'Rajasthan, in 1972. Today the group operates across five verticals \u2014 ' +
      'stone and export, automotive dealership and fuel retail, hospitality, ' +
      'student residences, and food services. Each vertical was started by ' +
      'the family at a different point across the last five decades, and each ' +
      'continues to operate from the same regional base in Bhilwara District.',
    operationPara2:
      'The group\u2019s centre of gravity is stone. The KHADANE\u2122 catalogue ' +
      'of twenty-three sandstones is quarried, processed, and exported from ' +
      'the same belt that surrounded the founding shop in 1972. The other ' +
      'verticals grew from the same region \u2014 automotive dealership and ' +
      'fuel stations along the Bhilwara\u2013Kota highway, hospitality in ' +
      'Kota, residences in Kota for students from across north India, food ' +
      'services for those students and for the larger Bhilwara workforce.',
    operationPara3:
      'None of the verticals was bought in. Each was built. The pattern of ' +
      'the group \u2014 local roots, regional operations, generational ' +
      'continuity \u2014 has held since the founding year. That continuity ' +
      'is what makes the catalogue, the buyer relationships, and the ' +
      'operational reputation legible to anyone who works with the group today.',

    // Section 03 — The Verticals
    verticalsSectionTitle: 'The Five Verticals',
    verticalStone: {
      name: 'Stone & Export',
      foundedYear: 'Since 1972',
      description:
        'The founding vertical. Twenty-three sandstones quarried and allied ' +
        'across Rajasthan, Madhya Pradesh, and Uttar Pradesh. Cut, dressed, ' +
        'and shipped from the yard at Bijolia to exports worldwide.',
    },
    verticalAutomotive: {
      name: 'Automotive & Fuel',
      foundedYear: '',
      description:
        'Multi-brand automotive dealership and fuel retail stations serving ' +
        'the Bhilwara\u2013Kota corridor. The group\u2019s working presence ' +
        'in the regional mobility economy.',
    },
    verticalHospitality: {
      name: 'Hospitality',
      foundedYear: '',
      description:
        'The group\u2019s hospitality presence in Kota. Built to serve the ' +
        'student-family network that comes to Kota for entrance examinations, ' +
        'the trade visitors passing through the region, and the broader ' +
        'working network the stone business draws to central Rajasthan.',
    },
    verticalHousing: {
      name: 'Student Housing',
      foundedYear: '',
      description:
        'Paying-guest residences in Kota for students preparing for medical ' +
        'and engineering entrance examinations. Multiple campuses, operated ' +
        'to the group\u2019s standard \u2014 clean rooms, supervised mess, ' +
        'the trust parents look for.',
    },
    verticalFood: {
      name: 'Food Services',
      foundedYear: '',
      description:
        'Saatvik food services for the Kota student population and the ' +
        'regional Bhilwara workforce. Daily kitchens, monthly mess plans, ' +
        'catering for events.',
    },

    // Section 04 — The Belt
    beltSectionTitle: 'The Belt',
    beltPara1:
      'KHADANE works the Bijolia sandstone belt of Rajasthan, with quarry ' +
      'holdings across both the Bhilwara and Bundi sides of the broader ' +
      'geological formation. Sixteen distinct quarry villages contribute ' +
      'stone to the catalogue today \u2014 Khadipur, Parana, Nayanagar, Bhooti, ' +
      'Kaansiya, Khoki, Sadaram Ji ka Khera, Udpuriya, Bhawanipura, Aroli, ' +
      'Choti Bijolia, Dabi\u2013Budhpura, Garda, and others across the tehsil. ' +
      'Each is a real working quarry; nothing in the catalogue is bought-in ' +
      'stone repackaged as KHADANE.',
    beltPara2:
      'The processing yard sits at Bijolia, equipped with gangsaws, ' +
      'calibration lines, finishing units for the eleven surface treatments ' +
      'the catalogue carries, and edging machinery for the four edge profiles. ' +
      'Raw blocks from the quarries arrive at the yard; finished crates leave ' +
      'for Mundra port, the primary loading point for the group\u2019s exports. ' +
      'The full sequence from block arrival to container loading runs through ' +
      'six checkpoints, photographed and documented on the Yard page.',
    beltPara3:
      'Beyond the family\u2019s own quarries, KHADANE works with a network ' +
      'of allied partner quarries across Rajasthan, Madhya Pradesh, and ' +
      'Uttar Pradesh \u2014 nine varieties in the current catalogue come ' +
      'through these partnerships. The relationships are long-standing; some ' +
      'partners have worked with the group since the 1990s. The allied stones ' +
      'are clearly marked as such in the catalogue. The buyer sees the ' +
      'distinction openly.',

    // Section 05 — Sourcing & Workforce
    sourcingSectionTitle: 'Sourcing & Workforce',
    sourcingPara1:
      'The group is built on direct quarry-to-buyer logistics. Stone moves ' +
      'from owned and allied quarries to the Bijolia yard for processing, ' +
      'then to Mundra port for international dispatch. No middlemen, no ' +
      'broker layers between the family\u2019s quarries and the international ' +
      'buyer; the buyer enquiry desk at exports@khadane.com is the working ' +
      'point of contact.',
    sourcingPara2:
      'The workforce at KHADANE \u2014 between the quarries, the yard, and ' +
      'the office \u2014 exceeds twelve hundred people. Most have worked with ' +
      'the group for over a decade; some across two generations of their own ' +
      'families. The local employment is part of how the operation has ' +
      'continuity. Wages are paid on time. Quarry safety standards are ' +
      'followed at the operational level the regional industry permits. The ' +
      'group\u2019s relationship with its workforce is the kind of relationship ' +
      'that produces stone consistently across five decades.',

    // Section 06 — The Buyer Desk
    deskSectionTitle: 'The Buyer Desk',
    deskEnquiryLabel: 'Enquiry',
    deskEnquiryNote: 'Responded to within one business day.',
    deskLocationLabel: 'Location',
    deskLocationValue: 'Bijolia, Bhilwara District, Rajasthan, India',
    deskLocationNote: 'Buyer visits welcome by appointment.',
    deskCatalogueLabel: 'Catalogue',
    deskCatalogueNote: 'Twenty-three varieties, all surfaces, all formats.',
    deskDatasheetsLabel: 'Datasheets',
    deskDatasheetsNote: 'Per-variety technical specifications, downloadable PDFs.',
    deskSamplesLabel: 'Samples',
    deskSamplesNote: 'Physical samples dispatched within five business days.',
  },

  // ─── Enquire page ───
  enquire: {
    headline: 'Enquire.',
    subline: 'Reach the desk at Bijolia. Responded to within one business day.',
    formNameLabel: 'Your name',
    formCompanyLabel: 'Company',
    formEmailLabel: 'Email',
    formCountryLabel: 'Country / region',
    formVarietyLabel: 'Stone of interest (optional)',
    formMessageLabel: 'Your enquiry',
    formSubmitButton: 'Send to the desk',
    formSuccessTitle: 'Sent.',
    formSuccessBody:
      'Your enquiry has reached the desk at Bijolia. We will respond within ' +
      'one business day, in English. Reach us directly at exports@khadane.com ' +
      'if you need to follow up.',
    formErrorTitle: 'Something went wrong.',
    formErrorBody:
      'Please try again, or email the desk directly at exports@khadane.com.',
  },

  // ─── Sticky decision panel ───
  decisionPanel: {
    atAGlance: 'At a glance',
    origin: 'Origin',
    status: 'Status',
    surfaces: 'Surfaces',
    edges: 'Edges',
    formats: 'Formats',
    density: 'Density',
  },

  // ─── Variety page common labels ───
  variety: {
    theStone: 'The Stone',
    technicalSpecification: 'Technical Specification',
    surfaces: 'Surfaces',
    surfacesCaption: 'Worked at the yard, before the stone ships.',
    edges: 'Edges',
    edgesCaption: 'Hand-cut, machine-cut, bullnose. As the format requires.',
    formats: 'Formats',
    formatsCaption: 'Cut to the trade\u2019s specifications.',
    noteOnSourcing: 'A note on sourcing',
    fieldNote: 'A field note',
    relatedVarieties: 'Related varieties',
    alsoKnownAs: 'Also known in the trade as',
  },
} as const

export type Dictionary = typeof enDictionary

// ============================================================
// Dictionary loader (server-side)
// ============================================================

/** Available dictionaries are imported lazily per locale. The English
 *  dictionary is always available. Non-English dictionaries fall back
 *  to English when a key is missing. */
async function loadLocaleDictionary(locale: Locale): Promise<Partial<Dictionary>> {
  if (locale === 'en') return enDictionary
  try {
    // Dynamic import path — the JSON files are generated by the build pipeline.
    const mod = await import(`./locales/${locale}.json`).catch(() => null)
    return (mod?.default ?? mod ?? {}) as Partial<Dictionary>
  } catch {
    return {}
  }
}

/** Get the dictionary for a given locale, with English fallback. */
export async function getDictionary(locale: string): Promise<Dictionary> {
  const validLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE
  if (validLocale === DEFAULT_LOCALE) return enDictionary
  const localised = await loadLocaleDictionary(validLocale)
  return deepMerge(enDictionary, localised) as Dictionary
}

/** Synchronous English-only access for components that don't have async access. */
export function getEnglishDictionary(): Dictionary {
  return enDictionary
}

// ============================================================
// Deep merge helper
// ============================================================

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

function deepMerge<T>(base: T, overlay: Partial<T>): T {
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return (overlay ?? base) as T
  }
  const result: Record<string, unknown> = { ...base }
  for (const key of Object.keys(overlay) as Array<keyof typeof overlay>) {
    const o = (overlay as Record<string, unknown>)[key as string]
    const b = (base as Record<string, unknown>)[key as string]
    if (isPlainObject(o) && isPlainObject(b)) {
      result[key as string] = deepMerge(b, o as Partial<typeof b>)
    } else if (o !== undefined && o !== null && o !== '') {
      result[key as string] = o
    }
  }
  return result as T
}
