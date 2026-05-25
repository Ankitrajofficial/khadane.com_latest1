// ============================================================
// KHADANE™ — The Desk (Enquire) · v3.1
// The buyer enquiry page. Uses the existing EnquiryForm component.
// Voice: Salvatori spine, justified body. Locked editorial register:
// "Responded to within one business day."
// ============================================================

import type { Metadata } from 'next'
import RevealOnScroll from '@/components/khadane/RevealOnScroll'
import EnquiryForm from '@/components/khadane/EnquiryForm'
import { getEnglishDictionary } from '@/lib/i18n/dictionaries'

export const metadata: Metadata = {
  title: 'Enquire',
  description:
    'Reach the buyer enquiry desk at Bijolia directly. Trade terms, sample ' +
    'requests, project specifications, press enquiries, and visit requests ' +
    'all handled from a single point. Responded to within one business day.',
  alternates: {
    canonical: 'https://khadane.com/desk',
  },
}

export default function DeskPage() {
  const dict = getEnglishDictionary()

  return (
    <>
      {/* ───────────────────────────────────────────────
          HEADER
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-page-header"
        aria-labelledby="desk-heading"
      >
        <div className="khadane-prose-container">
          <p className="khadane-eyebrow">THE BUYER\u2019S DESK</p>
          <h1 id="desk-heading" className="khadane-page-headline">
            {dict.enquire.headline}
          </h1>
          <p className="khadane-page-subline">{dict.enquire.subline}</p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          EDITORIAL INTRO
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-label="What the desk handles"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-body-prose khadane-body-prose--lead">
              The buyer enquiry desk at Bijolia handles every kind of trade
              contact \u2014 from buyer-to-buyer FOR pricing discussions and
              container quantity requests, to architectural specifier sample
              orders, press and trade-publication enquiries, and buyer-visit
              arrangements. The desk is staffed by people who know the
              catalogue, the yard, and the operation.
            </p>
            <p className="khadane-body-prose">
              Enquiries are handled in English. For non-English correspondence,
              please write in your own language and the desk will respond in
              English with any necessary clarification.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          THE FORM
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--enquiry-form"
        aria-labelledby="form-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="form-heading" className="khadane-section-title">
              Reach the desk
            </h2>
            <EnquiryForm />
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          DIRECT CHANNELS
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="direct-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <h2 id="direct-heading" className="khadane-section-title">
              Direct channels
            </h2>
            <dl className="khadane-tech-spec">
              <div className="khadane-tech-spec__row">
                <dt className="khadane-tech-spec__label">Email</dt>
                <dd className="khadane-tech-spec__value">
                  <a
                    href="mailto:exports@khadane.com"
                    className="khadane-link-gold"
                  >
                    exports@khadane.com
                  </a>
                </dd>
              </div>
              <div className="khadane-tech-spec__row">
                <dt className="khadane-tech-spec__label">Response time</dt>
                <dd className="khadane-tech-spec__value">
                  Within one business day
                </dd>
              </div>
              <div className="khadane-tech-spec__row">
                <dt className="khadane-tech-spec__label">Operating hours</dt>
                <dd className="khadane-tech-spec__value">
                  Monday \u2014 Saturday, 09:00 \u2014 18:00 IST
                </dd>
              </div>
              <div className="khadane-tech-spec__row">
                <dt className="khadane-tech-spec__label">Location</dt>
                <dd className="khadane-tech-spec__value">
                  Bijolia, Bhilwara District, Rajasthan 311603, India
                </dd>
              </div>
              <div className="khadane-tech-spec__row">
                <dt className="khadane-tech-spec__label">Buyer visits</dt>
                <dd className="khadane-tech-spec__value">
                  By appointment. Approximately 4 hours from Udaipur, 5 from
                  Jaipur.
                </dd>
              </div>
            </dl>
          </div>
        </RevealOnScroll>
      </section>

      {/* ───────────────────────────────────────────────
          CLOSING — what to expect
          ─────────────────────────────────────────────── */}
      <section
        className="khadane-section khadane-section--prose"
        aria-labelledby="what-to-expect-heading"
      >
        <RevealOnScroll>
          <div className="khadane-prose-container">
            <p className="khadane-eyebrow">WHAT TO EXPECT</p>
            <h2
              id="what-to-expect-heading"
              className="khadane-section-title"
            >
              The response sequence.
            </h2>
            <p className="khadane-body-prose">
              An initial acknowledgement reaches you within one business day,
              confirming the enquiry has been received and naming the contact
              at the desk who will follow up. The substantive response \u2014
              including pricing where requested, sample availability, lead-time
              indication, and any technical clarification \u2014 typically
              follows within two to five business days, depending on the depth
              of the enquiry. Larger project briefs and architectural
              specifications may require additional time and a brief call.
            </p>
            <p className="khadane-body-prose">
              Pricing terms (FOB Mundra, CIF destination port, or FOR site)
              are discussed buyer-to-buyer in private correspondence. Public
              pricing is not published.
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
