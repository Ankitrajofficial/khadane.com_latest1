# KHADANE™ v3.1 — Final Handoff

**Build complete:** May 2026  
**Scope:** Full KHADANE rebuild on top of preserved MLS v2.0 codebase  
**Lines of new/rewritten code:** ~9,000  
**Static pages generated:** 77 (homepage + 76 catalogue/detail pages)

---

## What changed from v2

This rebuild affects **KHADANE only**. MLS v2.0 was preserved untouched.

### Editorial register (locked)
- **Voice:** Salvatori spine for body prose, Antolini brevity for labels and captions
- **Body text:** Justified throughout (`text-align: justify; hyphens: auto`)
- **Em-dashes:** Permitted in KHADANE body copy (different from Rahul's personal messages, which use commas)
- **Numbers/framing:** Banned "01/02/03" style framing, "third generation" framing, generational/legacy framing
- **Signature line:** Only one survives — "The work, as it appears" on `/gallery/`
- **Locked phrase:** "Responded to within one business day" replaces "Read by the family" everywhere

### Architecture
- **8-item top nav:** Collection · Formats · The Quarry · The Yard · Field Notes · The Group · Gallery · Enquire
- **Variety pages:** Full 11-block template (Hero → Sticky Decision Panel → The Stone → Technical Spec → Surfaces → Edges → Formats → Note on Sourcing → [Field Note optional] → Related → Group Credit)
- **Sticky Decision Panel:** 4 action buttons + at-a-glance row, pins after 80px, slim mode after 400px
- **Surfaces & Edges:** Nested under Formats AND surfaced inline on each variety page

### Catalogue
- **23 varieties** (was 21 in v2) — Multi Brown and Multi Colours added; Raveena White retired; Garda Green renamed from Sage Green placeholder
- **14 owned + 9 allied** — was 12/9 in v2
- **Per-variety provenance lines:** All 23 locked, two-sentence pattern
- **16 distinct quarry villages** identified across 8 districts in 3 states
- **2 founding stones flagged** (Kandla Grey, Slate Grey — both since 1972)
- **19 formats with full export-grade trade dimensions** (was 14 in v2)
- **11 surface treatments + 4 edge profiles** with per-format applicability matrix

### Internationalisation
- **6 locales:** English (default), German, French, Italian, Spanish, Mandarin
- **URL structure:** `/de/`, `/fr/`, `/it/`, `/es/`, `/zh/` (root paths stay English)
- **Translation depth:** UI + homepage + Collection + Group + Enquire (variety and format detail pages stay English — trade vocabulary)
- **Translation method:** Machine-translated for launch with per-locale disclaimer caption on every translated page
- **Disclaimer text:** Locked per-locale in `lib/i18n/config.ts`
- **Cookie persistence:** Returning buyers land in their chosen language

### Animation (15 effects, all `prefers-reduced-motion` safe)
1. Hero parallax (scroll-driven)
2. Section reveal on scroll (IntersectionObserver)
3. Variety card hover (scale + desaturate→saturate)
4. Navigation underline (gold draw)
5. Cursor-trailing gold dot (12px, hero photo regions only)
6. Sticky panel pin/slim
7. Surface tile expand modal
8. Lightbox
9. Smooth scroll
10. Datasheet PDF progress arc
11. Language switcher dropdown
12. FLIP collection filter
13. Scroll-snap on Quarry/Yard
14. Field notes card stack
15. Page transitions

All effects collapsed to instant transitions when `prefers-reduced-motion: reduce` is set.

### Group page (rebuilt)
- **6 sections:** Hero → The Operation → Five Verticals → The Belt → Sourcing & Workforce → The Buyer Desk
- **5 verticals (category-named, no brand names mentioned in cards):**
  1. Stone & Export (Since 1972)
  2. Automotive & Fuel
  3. Hospitality — **in Kota, not Bijolia** (corrected in this rebuild)
  4. Student Housing
  5. Food Services
- **"Dhakar Stones Group" surfaces** in hero sub-line, JSON-LD `alternateName`, SEO meta-description, and group-credit footer
- **No certifications** (ETI/CE/ISO) claimed
- **No "third generation"** framing anywhere

---

## File structure

### Data layer (`lib/`)
```
lib/
├── varieties.ts          (967 lines · 23 varieties, locked provenance)
├── formats.ts            (903 lines · 19 formats, full trade dimensions)
├── surfaces.ts           (303 lines · 11 treatments)
├── edges.ts              (146 lines · 4 profiles)
├── photography.ts        (498 lines · placeholder catalogue)
└── i18n/
    ├── config.ts         (154 lines · 6 locales)
    ├── dictionaries.ts   (359 lines · English source + loader)
    └── locales/
        ├── de.json
        ├── fr.json
        ├── it.json
        ├── es.json
        └── zh.json
```

### Components (`components/khadane/`)
**New v3.1:**
- `LanguageSwitcher.tsx` (137 lines)
- `StickyDecisionPanel.tsx` (182 lines)
- `MTDisclaimer.tsx` (26 lines)

**Patched for v3.1:**
- `EnquiryForm.tsx` (updated to use new `catalogueName` field)
- `Marquee.tsx` (updated to use new field shape)
- `Search.tsx` (updated to use new field shape)
- `Gallery.tsx` (type-safety patch)

**Untouched from v2 (still working):**
- `Navigation.tsx`, `Footer.tsx`, `StickyCTA.tsx`, `BrandWhisper.tsx`, `HeroWordRise.tsx`, `Wordmark.tsx`, `MLSMark.tsx`, `RevealOnScroll.tsx`, `PlaceholderImage.tsx`

### Routes (`app/khadane/`)
```
app/khadane/
├── page.tsx              (homepage, 265 lines)
├── layout.tsx            (patched to import khadane-v3.css)
├── khadane-v3.css        (541 lines · locked palette + 15 animations)
├── collection/
│   ├── page.tsx          (landing, 229 lines)
│   ├── CollectionFilter.tsx  (73 lines · client island)
│   └── [variety]/
│       └── page.tsx      (11-block template, 631 lines, generates 23 pages)
├── formats/
│   ├── page.tsx          (landing, 268 lines)
│   ├── [format]/
│   │   └── page.tsx      (template, 451 lines, generates 19 pages)
│   ├── surfaces/
│   │   ├── page.tsx      (125 lines)
│   │   └── [surface]/
│   │       └── page.tsx  (274 lines, generates 11 pages)
│   └── edges/
│       ├── page.tsx      (122 lines)
│       └── [edge]/
│           └── page.tsx  (236 lines, generates 4 pages)
├── quarry/page.tsx       (273 lines)
├── yard/page.tsx         (283 lines)
├── gallery/
│   ├── page.tsx          (151 lines)
│   └── [category]/
│       └── page.tsx      (212 lines, generates 8 pages)
├── field-notes/
│   ├── page.tsx          (214 lines)
│   └── [slug]/page.tsx   (patched for narrowing)
├── group/page.tsx        (397 lines · 6 sections)
└── desk/page.tsx         (178 lines · Enquire)
```

### Middleware
- `middleware.ts` (139 lines) — host rewrite (unchanged) + KHADANE locale stripping (NEW in v3.1)

---

## Pages generated

| Type | Count |
|---|---|
| Variety detail pages | 23 |
| Format detail pages | 19 |
| Surface detail pages | 11 |
| Edge detail pages | 4 |
| Gallery category pages | 8 |
| Field note detail pages | 6 |
| Landing/index pages | 9 |
| Homepage | 1 |
| **Total static pages** | **81** |

When the six locales are factored in, the translated subset (UI + homepage + Collection + Group + Enquire) multiplies the locale-aware page count to approximately **130 routes**.

---

## Pending user input (NON-BLOCKING)

These don't prevent deployment but should be filled in when convenient:

1. **Vertical founding years** for The Group page Section 03:
   - Automotive & Fuel — founding year `[empty]`
   - Hospitality — founding year `[empty]`
   - Student Housing — founding year `[empty]`
   - Food Services — founding year `[empty]`

2. **Decade-of-relationship** for 6 Allied varieties (currently marked provisional with `*`):
   - Basalt Black (2010s*)
   - Dholpur Beige (2000s*)
   - Dholpur Pink (2000s*)
   - Gwalior Mint (2000s*)
   - Jaisalmer Yellow (2010s*)
   - Lalitpur Yellow (2010s*)
   - Sagar Black (2010s*)

3. **Fossil Mint specific village** (held at tehsil level — `lib/varieties.ts` entry 08)

4. **One residency photograph** for the Student Housing vertical card

5. **Per-variety editorial body (Block 03)** is written for 4 varieties (Fossil Mint, Red Choco, Dual Tone, Multi Brown, Multi Colours). The other 18 varieties currently show a placeholder note. Adding bodies as time permits.

---

## Deployment

The build deploys exactly like v2:

```bash
cd mls-khadane
npm install          # installs all dependencies; resolves the "Cannot find module 'react'" type errors visible during sandbox dev
npm run build        # generates 81+ static pages
npm run start        # local production preview
```

Vercel deployment uses the existing two-domain binding:
- `khadane.com` and `www.khadane.com` → routes to `/khadane/*`
- `mohanlalsonsgroup.com` → routes to `/mls/*` (unchanged, frozen at v2.0)

Locale routing for KHADANE happens transparently via middleware:
- `khadane.com/de/collection` → internally rewrites to `/khadane/collection` with `x-locale: de` header
- The page reads the locale from headers to load the right dictionary

---

## What is NOT in this v3.1 build (deferred)

- **Datasheet PDF generation** — UI buttons exist; the actual PDF generation route (`/datasheets/{slug}.pdf`) needs to be wired separately (likely via a React-PDF or Puppeteer route)
- **Real translated dictionary content** — the 5 non-English JSON files carry starter UI translations (nav + actions + footer). Full translation of homepage/collection/group/enquire bodies needs to run through DeepL/Google at build time
- **Real photographs** — every photo slot renders a `PlaceholderImage` component. As real photographs drop in at the documented `/public/img/` paths, they replace the placeholders automatically
- **Field note content beyond v2's 6 notes** — additional Field Notes can be added to `lib/field-notes.ts` over time
- **Block 03 editorial bodies for 18 of 23 varieties** — five are written (Fossil Mint, Red Choco, Dual Tone, Multi Brown, Multi Colours); the other 18 currently show a placeholder paragraph

---

## Backups preserved

Every v2 file rewritten in v3.1 has a `.v2.tsx.bak` or `.v2.ts.bak` backup alongside it. To roll back any individual page to v2 behaviour, rename the `.bak` back to the original.

---

## Operational locks (carried into v3.1)

- KHADANE wordmark v1.0 — never recreate from fonts, always composite the locked PNG
- KHADANE palette (5 colours, no additions): Obsidian #111111, Stone Linen #E8E3D7, Tobacco #3D2B1A, Quarry Gold #B8962E, Warm White #F0EDE6
- No certifications claimed until in place (no ETI, CE, ISO)
- No FOB/CIF/MOQ disclosed in public materials
- No generational/legacy framing
- MONOLITH India fully retired — never reference
- Hospitality is in Kota, not Bijolia
- Five verticals only — no QUENCH or manufacturing mention

🔱

— End of v3.1 handoff

---

# BATCH 08 ADDENDUM — Wiring & Brand-Asset Continuity

**Completed:** 25 May 2026

This addendum documents the corrections applied after the initial v3.1 ZIP delivery.

## What Batch 08 fixed

Initial v3.1 delivery had nine wiring gaps that the user (Rahul) caught during review. Batch 08 closed all of them, plus three mid-batch corrections.

### Decisions locked through Q&A (Q1–Q9)

| # | Change | Locked decision |
|---|---|---|
| 1 | Wordmark wiring | Two-variant auto-switching (04 + 05), `surface=auto/light/dark` prop |
| 2 | LanguageSwitcher placement | Top-right of nav, compact native label ("English ▾") |
| 2b | Footer surface colour | Cream (Stone Linen) — not Tobacco |
| 3 | MT Disclaimer placement | Footer caption above copyright |
| 4 | Marquee | Tobacco band (Treatment B) — slim institutional ribbon |
| 5 | Search | Restored as Cmd+K + magnifier icon |
| 6 | Gallery | Category landing + masonry within each category |
| 7 | MLS Four Pillars mark | Credentials Band between Hero and Operation on Group page |
| 8 | Font loading | Self-hosted Cormorant Garamond + Inter (no Google Fonts) |
| 9 | Palette compliance | Token + Tailwind sweep + browser default overrides |

### Mid-batch corrections

1. **Header colour: Tobacco, not Warm White on scroll** — Navigation rebuilt to transition from transparent (over homepage video) to solid Tobacco with backdrop-blur.

2. **Homepage hero: video, not photograph** — Full-bleed video element with autoplay/loop/muted/playsInline, poster image fallback, gradient fallback layer.

3. **Cards: no blank space, no glitches** — Root cause was 49 page-structure CSS classes referenced in TSX but undefined in `khadane-v3.css`. All 49 classes given proper styling with `height: 100%`.

## File and route counts

| Metric | Count |
|---|---|
| Files in build | 275 |
| TypeScript files (live, excluding .bak) | ~108 |
| KHADANE static pages | 81 |
| Self-hosted font .woff2 files | 8 |
| Self-hosted font subsets | 7 |
| CSS lines in `khadane-v3.css` | 1,936 |

🔱 — End of Batch 08 addendum
