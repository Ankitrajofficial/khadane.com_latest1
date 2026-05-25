import { NextResponse, type NextRequest } from 'next/server'

/**
 * KHADANE-only routing middleware.
 *
 * Public requests are always served from /khadane/*, regardless of host.
 * Legacy /mls/* URLs are redirected away so the MLS site is not exposed
 * after deployment.
 *
 * Locale strip:
 *   /de/collection  →  /khadane/collection (with x-locale: de)
 *   /zh/the-group   →  /khadane/the-group  (with x-locale: zh)
 *   /collection     →  /khadane/collection (with x-locale: en)
 */

const LOCALES = ['en', 'de', 'fr', 'it', 'es', 'zh'] as const
type Locale = (typeof LOCALES)[number]
const DEFAULT_LOCALE: Locale = 'en'

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const path = url.pathname

  // ─── True bypasses (paths that are NEVER per-site) ─────────────
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/brand') ||
    path.startsWith('/fonts') ||
    path.startsWith('/video') ||
    path.startsWith('/img')
  ) {
    return NextResponse.next()
  }

  // Static legacy assets from KHADANE v1.
  if (
    path === '/favicon.ico' ||
    path === '/apple-touch-icon.svg' ||
    path === '/favicon.svg' ||
    path === '/og-image.svg' ||
    path === '/twitter-card.svg'
  ) {
    return NextResponse.next()
  }

  // Hide legacy MLS routes if someone hits them directly.
  if (path === '/mls' || path.startsWith('/mls/')) {
    const redirectUrl = url.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  // Avoid infinite-loop on internal KHADANE paths.
  if (path.startsWith('/khadane')) {
    return NextResponse.next()
  }

  // ─── Locale handling ────────────────────────────────────────────
  //
  // Strip the leading locale segment from the public URL when rewriting
  // to the internal route, and pass it forward as a header so pages can
  // read it via headers() on the server side.
  //
  // Examples:
  //   /de/collection           →  /khadane/collection   (x-locale: de)
  //   /the-group               →  /khadane/the-group    (x-locale: en)
  //   /zh                      →  /khadane              (x-locale: zh)
  //
  let locale: Locale = DEFAULT_LOCALE
  let pathAfterLocaleStrip = path

  const segments = path.split('/').filter(Boolean)
  const first = segments[0]
  if (first && isLocale(first)) {
    locale = first
    pathAfterLocaleStrip = '/' + segments.slice(1).join('/')
    if (pathAfterLocaleStrip === '/') pathAfterLocaleStrip = ''
  }

  // ─── Internal rewrite ───────────────────────────────────────────
  const rewrittenUrl = url.clone()
  rewrittenUrl.pathname = `/khadane${
    pathAfterLocaleStrip === '/' ? '' : pathAfterLocaleStrip
  }`

  const response = NextResponse.rewrite(rewrittenUrl)
  response.headers.set('x-site', 'khadane')
  response.headers.set('x-locale', locale)
  return response
}

export const config = {
  matcher: [
    /*
     * Match every path except:
     * - _next internals (handled inside the function for additional bypasses)
     * - api routes (handled inside the function so they CAN read headers)
     */
    '/((?!_next/static|_next/image).*)',
  ],
}
