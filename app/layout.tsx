import type { Metadata } from 'next'
import './globals.css'

/**
 * Root layout.
 *
 * Provides the <html> + <body> shell and loads shared fonts
 * (Cormorant Garamond + Inter Tight + JetBrains Mono — shared by both sites).
 *
 * Site-specific chrome (Navigation, Footer, per-site metadata) is provided
 * by the route group layouts: app/(mls)/layout.tsx and app/(khadane)/layout.tsx.
 *
 * Host-based routing in middleware.ts decides which route group renders.
 */

export const metadata: Metadata = {
  // Fallback only — per-site metadata in route group layouts.
  title: 'Mohan Lal & Sons',
  description: 'A working group, since 1972.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/CormorantGaramond-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/CormorantGaramond-Italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Favicons + Apple touch icon — generated from the locked SVG marks */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#B8962E" />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  )
}
