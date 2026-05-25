import Link from 'next/link'
import Wordmark from './Wordmark'
import MTDisclaimer from './MTDisclaimer'
import { KHADANE_SITE } from '@/lib/site-khadane'

const footerColumns = [
  {
    title: 'Brand',
    links: [
      { href: '/khadane/group', label: 'The Group' },
      { href: '/khadane/quarry', label: 'The Quarry' },
      { href: '/khadane/yard', label: 'The Yard' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { href: '/khadane/collection', label: 'Collection' },
      { href: '/khadane/formats', label: 'Formats' },
      { href: '/khadane/gallery', label: 'Gallery' },
      { href: '/khadane/field-notes', label: 'Field Notes' },
    ],
  },
  {
    title: 'Group',
    links: [
      { href: '/khadane/group', label: 'Mohan Lal & Sons' },
      { href: KHADANE_SITE.parent.site, label: 'MLS Group' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '/khadane/desk', label: 'Enquire' },
      { href: `mailto:${KHADANE_SITE.contact.publicEmail}`, label: KHADANE_SITE.contact.publicEmail },
      { href: KHADANE_SITE.contact.whatsappUrl, label: 'WhatsApp' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#E8E3D7] text-[#3D2B1A]" data-surface="light">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col gap-10 border-b border-[#B8962E]/40 pb-12">
          <div className="max-w-xl">
            <Wordmark surface="light" size="lg" />
            <p className="mt-7 font-serif italic text-2xl leading-snug text-tobacco">
              The sandstone catalogue of {KHADANE_SITE.groupOperation}.
              <span className="block mt-2 font-sans text-xs not-italic uppercase tracking-[0.18em] text-quarry-gold">
                Bijolia · Rajasthan · Since 1972
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-quarry-gold">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-tobacco/75 hover:text-quarry-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <MTDisclaimer />

        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs text-tobacco/70">
            © Mohan Lal & Sons. Est. 1972. Bijolia, Rajasthan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/khadane/privacy" className="font-sans text-xs text-tobacco/60 hover:text-quarry-gold">
              Privacy
            </Link>
            <Link href="/khadane/terms" className="font-sans text-xs text-tobacco/60 hover:text-quarry-gold">
              Terms
            </Link>
            <span className="font-mono text-xs text-tobacco/50">v3.1</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
