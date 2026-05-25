# PALETTE COMPLIANCE

**Audit complete:** May 2026 (Batch 08)
**Scope:** KHADANE™ codebase at `/app/khadane/` and `/components/khadane/`
**Result:** ✅ Fully compliant with the locked v1.0 KHADANE palette

---

## The locked v1.0 KHADANE palette

Exactly five colours. Nothing else.

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#111111` | Body text, navigation surface, hero scrim, deep accents |
| Stone Linen | `#E8E3D7` | Secondary surface, footer background, accent surfaces |
| Tobacco | `#3D2B1A` | Surface variant for the Credentials Band, marquee band, body text alternate |
| Quarry Gold | `#B8962E` | All accents, taglines, italic captions, links, rule dividers, badges, focus rings |
| Warm White | `#F0EDE6` | Primary body background, light text on dark surfaces |

**Locked rule (from the v1.0 brand spec):**
> *"Zero alterations, zero redesigns, zero variations — ever — unless Rahul personally instructs otherwise."*

---

## Audit methodology

The Batch 08 palette compliance pass ran four checks:

1. **Token namespace check** — `tailwind.config.ts` defines `khadane.*` and `mls.*` colour namespaces. Plus v1 compatibility aliases (`obsidian`, `stone-linen`, `tobacco`, `quarry-gold`, `warm-white`) that resolve to the KHADANE palette specifically.

2. **Hex code grep** — every hex code in TSX, TS, and CSS files under `/app/khadane/` and `/components/khadane/` was extracted and counted. Every hex resolves to one of the five locked KHADANE values.

3. **Browser default override** — every browser-default colour that bypasses the palette token system was explicitly overridden in `khadane-v3.css`.

4. **MLS palette boundary** — MLS palette colours are forbidden in `/app/khadane/` files.

---

## Hex audit results (May 2026)

| Hex | Count | Verified |
|---|---|---|
| `#3D2B1A` (Tobacco) | 37 | ✅ |
| `#111111` (Obsidian) | 36 | ✅ |
| `#B8962E` (Quarry Gold) | 32 | ✅ |
| `#F0EDE6` (Warm White) | 24 | ✅ |
| `#E8E3D7` (Stone Linen) | 20 | ✅ |

**Total raw hex references:** 149
**Non-locked colours found:** 0
**Compliance:** 100%

### Leaks identified and fixed in Batch 08

| File | Original | Fixed to | Reason |
|---|---|---|---|
| `app/khadane/opengraph-image.tsx:53` | `#999690` (MLS Slate Grey) | `#B8962E` (Quarry Gold) | OG card represents KHADANE on social |
| `app/khadane/opengraph-image.tsx:122` | `#1A1410` (MLS Deep Brown) | `#111111` (Obsidian) | KHADANE palette only on KHADANE surfaces |

---

## Future maintenance rules

1. **No new hex codes.** Every colour must resolve to one of the five locked values.
2. **Use Tailwind tokens or CSS custom properties first.**
3. **Alpha variants are fine** if derived from the locked five colours.
4. **MLS palette never crosses to KHADANE surfaces** (except the MLS Four Pillars SVG on Group page).
5. **If a sixth colour is genuinely needed**, this document must be updated AND Rahul's explicit approval recorded.

🔱
