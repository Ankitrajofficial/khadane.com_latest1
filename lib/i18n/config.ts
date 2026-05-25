// ============================================================
// KHADANE™ — i18n locale configuration · v3.1
// 6 languages: English (default), German, French, Italian, Spanish, Mandarin.
// Medium depth: UI + homepage + Collection + Group + Enquire are translated;
// variety and format detail pages remain in English (trade vocabulary).
// Method: machine-translated for launch with a per-page disclaimer caption.
// ============================================================

export const LOCALES = ['en', 'de', 'fr', 'it', 'es', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Locale metadata for the language switcher and SEO tags. */
export interface LocaleInfo {
  code: Locale
  /** Native-language display name (\"Deutsch\", not \"German\"). */
  nativeName: string
  /** English-language display name for fallback contexts. */
  englishName: string
  /** ISO language code used in hreflang and html lang attributes. */
  htmlLang: string
  /** Text direction. Reserved for future Arabic/Hebrew support. */
  dir: 'ltr' | 'rtl'
  /** Whether this locale is the source / default language. */
  isDefault?: boolean
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    htmlLang: 'en',
    dir: 'ltr',
    isDefault: true,
  },
  de: {
    code: 'de',
    nativeName: 'Deutsch',
    englishName: 'German',
    htmlLang: 'de',
    dir: 'ltr',
  },
  fr: {
    code: 'fr',
    nativeName: 'Fran\u00e7ais',
    englishName: 'French',
    htmlLang: 'fr',
    dir: 'ltr',
  },
  it: {
    code: 'it',
    nativeName: 'Italiano',
    englishName: 'Italian',
    htmlLang: 'it',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    nativeName: 'Espa\u00f1ol',
    englishName: 'Spanish',
    htmlLang: 'es',
    dir: 'ltr',
  },
  zh: {
    code: 'zh',
    nativeName: '\u4e2d\u6587',
    englishName: 'Mandarin',
    htmlLang: 'zh',
    dir: 'ltr',
  },
}

/** All non-default locales (for hreflang generation). */
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE)

/** Type guard for runtime checking. */
export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/** Parse a locale from the leading URL segment, defaulting to English.
 *  Returns the locale plus the rest of the path. */
export function parseLocaleFromPath(path: string): {
  locale: Locale
  rest: string
} {
  const segments = path.split('/').filter(Boolean)
  const first = segments[0]
  if (first && isLocale(first)) {
    return {
      locale: first,
      rest: '/' + segments.slice(1).join('/'),
    }
  }
  return {
    locale: DEFAULT_LOCALE,
    rest: path,
  }
}

/** Cookie name used to persist the user's language choice. */
export const LOCALE_COOKIE_NAME = 'khadane-locale'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

/** The machine-translation disclaimer text. Keyed by locale; English version
 *  is what authoritative copy says, others are translated equivalents that
 *  surface on every non-English page. */
export const MT_DISCLAIMER: Record<Locale, string> = {
  en: '', // not shown on the English original
  de:
    'Diese Seite wurde maschinell aus dem englischen Original \u00fcbersetzt. ' +
    'F\u00fcr Kl\u00e4rungen erreichen Sie uns auf Englisch unter exports@khadane.com.',
  fr:
    'Cette page a \u00e9t\u00e9 traduite automatiquement \u00e0 partir de l\u2019original ' +
    'en anglais. Pour toute pr\u00e9cision, contactez le bureau en anglais \u00e0 ' +
    'exports@khadane.com.',
  it:
    'Questa pagina \u00e8 stata tradotta automaticamente dall\u2019originale inglese. ' +
    'Per chiarimenti, contattare l\u2019ufficio in inglese all\u2019indirizzo ' +
    'exports@khadane.com.',
  es:
    'Esta p\u00e1gina ha sido traducida autom\u00e1ticamente del original en ingl\u00e9s. ' +
    'Para cualquier aclaraci\u00f3n, comun\u00edquese con la oficina en ingl\u00e9s en ' +
    'exports@khadane.com.',
  zh:
    '\u672c\u9875\u9762\u7531\u82f1\u6587\u539f\u6587\u673a\u5668\u7ffb\u8bd1\u3002' +
    '\u5982\u9700\u8be6\u60c5\u8bf7\u4ee5\u82f1\u6587\u8054\u7cfb exports@khadane.com\u3002',
}

/** Which URL paths are fully translated (Medium depth coverage).
 *  Paths NOT in this list stay in English regardless of selected locale.
 *  Used by both middleware and the language-switcher UI. */
export const TRANSLATED_PATHS = [
  '/', // homepage
  '/collection', // Collection landing (NOT [variety] children)
  '/the-group',
  '/group', // legacy alias if needed
  '/desk', // Enquire desk
  '/enquire', // legacy alias
] as const

/** Test whether a given path should be translated for non-English locales.
 *  Variety detail pages, format detail pages, and field-notes pages stay
 *  English because trade vocabulary is the same internationally. */
export function isTranslatedPath(path: string): boolean {
  // strip trailing slash for comparison
  const p = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
  return (TRANSLATED_PATHS as readonly string[]).some((tp) => {
    if (tp === '/') return p === '/' || p === ''
    return p === tp || p.startsWith(tp + '/')
  })
}
