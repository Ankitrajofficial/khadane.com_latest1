import Link from 'next/link'
import Image from 'next/image'
import { MLS_SITE, MLS_ASSETS } from '@/lib/site-mls'
import { ENTITIES, FOUNDING, CONTACT, CROSS_LINKS } from '@/lib/facts'

/**
 * MLS Footer — institutional treatment.
 *
 * Five vertical columns reflecting the locked architecture:
 *   1. The Group (logo + signature)
 *   2. Ventures (5 verticals)
 *   3. Resources
 *   4. The Office (contact)
 *   5. KHADANE™ outbound bridge
 *
 * Tobacco-dark band sits below the columns with copyright + family signature.
 */
export default function MLSFooter() {
  return (
    <footer className="bg-mls-cream border-t border-mls-ink/10 mt-24">
      {/* Top: 5-column grid */}
      <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-[88rem] py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1 — The Group */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={MLS_ASSETS.lockup.onLight}
                alt={MLS_SITE.name}
                width={260}
                height={52}
                className="opacity-90"
              />
            </Link>
            <p className="font-display italic text-lg text-mls-tobacco leading-relaxed mb-6 max-w-sm">
              A working group. Operated by the Dhakar family from Bijolia, Rajasthan. {FOUNDING.yearsEvergreen}.
            </p>
            <div className="h-px w-16 bg-mls-gold mb-6" aria-hidden />
            <p className="font-mono text-[11px] uppercase tracking-marker text-mls-slate">
              {FOUNDING.generations} · {ENTITIES.group.acronym}
            </p>
          </div>

          {/* Column 2 — Ventures */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-marker text-mls-slate mb-5">
              Ventures
            </p>
            <ul className="flex flex-col gap-3 text-sm text-mls-ink/80">
              <li>
                <a
                  href="https://khadane.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mls-gold transition-colors inline-flex items-center gap-1"
                >
                  Stone &amp; Export <span className="text-xs" aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <Link href="/verticals/automotive-fuel" className="hover:text-mls-gold transition-colors">
                  Automotive &amp; Fuel
                </Link>
              </li>
              <li>
                <Link href="/verticals/hospitality" className="hover:text-mls-gold transition-colors">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/verticals/student-housing" className="hover:text-mls-gold transition-colors">
                  Student Housing
                </Link>
              </li>
              <li>
                <Link href="/verticals/food-services" className="hover:text-mls-gold transition-colors">
                  Food Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — The Group / Resources */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-marker text-mls-slate mb-5">
              The Group
            </p>
            <ul className="flex flex-col gap-3 text-sm text-mls-ink/80">
              <li>
                <Link href="/our-legacy" className="hover:text-mls-gold transition-colors">
                  Our Legacy
                </Link>
              </li>
              <li>
                <Link href="/csr" className="hover:text-mls-gold transition-colors">
                  CSR
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-mls-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-mls-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-mls-gold transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — The Office */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-marker text-mls-slate mb-5">
              The Office
            </p>
            <ul className="flex flex-col gap-3 text-sm text-mls-ink/80">
              <li>
                <a
                  href={`mailto:${CONTACT.officeMLS}`}
                  className="hover:text-mls-gold transition-colors break-all"
                >
                  {CONTACT.officeMLS}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.groupMain.replace(/\s/g, '')}`}
                  className="hover:text-mls-gold transition-colors"
                >
                  {CONTACT.groupMain}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mls-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="font-display italic text-mls-gold hover:text-mls-tobacco transition-colors"
                >
                  Write to The Office →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 — KHADANE outbound */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-marker text-mls-slate mb-5">
              Trade Brand
            </p>
            <a
              href="https://khadane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="font-display text-2xl text-mls-ink group-hover:text-mls-gold transition-colors mb-2">
                KHADANE<sup className="text-sm">™</sup>
              </p>
              <p className="text-xs text-mls-tobacco/70 leading-relaxed">
                {CROSS_LINKS.mlsToKhadane}
              </p>
              <p className="mt-3 text-xs text-mls-gold inline-flex items-center gap-1">
                Visit khadane.com <span aria-hidden>↗</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom — tobacco band with copyright + family signature */}
      <div className="bg-mls-tobacco text-mls-cream">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-[88rem] py-8 lg:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-mono tracking-wider text-mls-cream/80">
                © {FOUNDING.groupYear}–{FOUNDING.currentYear} {ENTITIES.group.name}
              </p>
              <p className="font-display italic text-base text-mls-cream/90">
                {ENTITIES.footerSignature}
              </p>
            </div>
            <nav aria-label="Legal" className="flex gap-6 text-xs text-mls-cream/70">
              <Link href="/privacy" className="hover:text-mls-gold transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-mls-gold transition-colors">
                Terms
              </Link>
              <a
                href={`mailto:${CONTACT.officeMLS}`}
                className="hover:text-mls-gold transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
