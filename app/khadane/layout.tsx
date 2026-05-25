import type { Metadata } from 'next'
import Navigation from '@/components/khadane/Navigation'
import Footer from '@/components/khadane/Footer'
import StickyCTA from '@/components/khadane/StickyCTA'
import AppMotionConfig from '@/components/shared/MotionConfig'
import { KHADANE_SITE } from '@/lib/site-khadane'
import { FOUNDING } from '@/lib/facts'

// v3.1: locked animation + component CSS
import './khadane-v3.css'

export const metadata: Metadata = {
  metadataBase: new URL(KHADANE_SITE.url),
  title: {
    default: `${KHADANE_SITE.name} — The sandstone catalogue of ${KHADANE_SITE.groupOperation}. Bijolia, Rajasthan. Since ${FOUNDING.groupYear}.`,
    template: `%s · ${KHADANE_SITE.name}`,
  },
  description: `${KHADANE_SITE.name} is the customer-facing trade brand of ${KHADANE_SITE.exportOperation}, the export operation within the Dhakar family enterprise. Sandstone varieties across multiple formats. Quarried in Bijolia, Rajasthan.`,
  keywords: [
    'Indian sandstone',
    'Bijolia sandstone',
    'Rajasthan sandstone',
    'sandstone export',
    'natural stone',
    'paving slabs',
    'Kandla Grey',
    'Autumn Brown',
    'Sage Green',
    'Raj Blend',
    'KHADANE',
    'Mohan Lal & Sons',
    'Dhakar Stones Group',
  ],
  authors: [{ name: `${KHADANE_SITE.name} · ${KHADANE_SITE.groupOperation}` }],
  creator: KHADANE_SITE.groupOperation,
  publisher: KHADANE_SITE.exportOperation,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: KHADANE_SITE.url,
    siteName: KHADANE_SITE.name,
    title: `${KHADANE_SITE.name} — The sandstone catalogue of ${KHADANE_SITE.groupOperation}`,
    description: `Quarried in Bijolia, Rajasthan. Since ${FOUNDING.groupYear}.`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${KHADANE_SITE.name} — Bijolia, Rajasthan`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${KHADANE_SITE.name} — Bijolia sandstone, exported direct.`,
    description: `Quarried in Bijolia, Rajasthan. Since ${FOUNDING.groupYear}.`,
    images: ['/twitter-card.svg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.svg',
  },
}

export default function KhadaneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppMotionConfig>
      <div className="bg-warm-white text-obsidian min-h-screen" data-site="khadane">
        <Navigation />
        <main className="min-h-screen" data-surface="light">{children}</main>
        <Footer />
        <StickyCTA />
      </div>
    </AppMotionConfig>
  )
}
