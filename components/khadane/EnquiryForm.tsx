'use client'

import { useState, FormEvent } from 'react'
import { VARIETIES } from '@/lib/varieties'
import { FORMATS } from '@/lib/formats'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function EnquiryForm() {
  const [state, setState] = useState<SubmitState>('idle')
  const [reference, setReference] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setErrorMsg(json.error || 'Could not submit. Please try again or email exports@khadane.com directly.')
        setState('error')
        return
      }

      setReference(json.reference)
      setState('success')
      form.reset()
    } catch (err) {
      setErrorMsg('Connection failed. Please email exports@khadane.com directly.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-warm-white border border-quarry-gold/30 p-10 lg:p-12">
        <p className="eyebrow-gold mb-6 no-justify">ENQUIRY RECEIVED</p>
        <h3 className="font-display text-3xl text-obsidian no-justify mb-6">
          Thank you. We've received your enquiry.
        </h3>
        <p className="font-mono text-xs text-tobacco/60 mb-2 no-justify">Reference</p>
        <p className="font-mono text-lg text-quarry-gold no-justify mb-8">{reference}</p>
        <p className="editorial-body">
          We'll respond within one business day during Monday–Saturday, 10:00–18:00 IST. If urgent, WhatsApp us directly using the link in the sidebar.
        </p>
        <button
          onClick={() => {
            setState('idle')
            setReference('')
          }}
          className="mt-8 cta-text"
        >
          Submit another enquiry →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name & Organization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Your name" name="name" required disabled={state === 'submitting'} />
        <FormField label="Company / Organization" name="company" disabled={state === 'submitting'} />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Email" name="email" type="email" required disabled={state === 'submitting'} />
        <FormField label="Phone (with country code)" name="phone" type="tel" disabled={state === 'submitting'} />
      </div>

      {/* Country */}
      <FormField label="Country / Destination port" name="country" required disabled={state === 'submitting'} />

      {/* Variety + Format */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Variety (primary interest)"
          name="variety"
          disabled={state === 'submitting'}
          options={[
            { value: '', label: 'Select a variety…' },
            ...VARIETIES.map((v) => ({ value: v.slug, label: `${v.code} · ${v.catalogueName}` })),
            { value: 'multiple', label: 'Multiple / not sure yet' },
          ]}
        />
        <FormSelect
          label="Format"
          name="format"
          disabled={state === 'submitting'}
          options={[
            { value: '', label: 'Select a format…' },
            ...FORMATS.map((f) => ({ value: f.slug, label: f.name })),
            { value: 'multiple', label: 'Multiple / not sure yet' },
          ]}
        />
      </div>

      {/* Volume + Lead time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Approx. volume (sq.m or containers)" name="volume" disabled={state === 'submitting'} />
        <FormField label="Lead time / target arrival" name="leadtime" disabled={state === 'submitting'} />
      </div>

      {/* Project notes */}
      <div>
        <label className="block font-mono text-xs uppercase tracking-eyebrow text-tobacco mb-3 no-justify">
          Project notes — finish, size, surface, anything specific
        </label>
        <textarea
          name="notes"
          rows={5}
          disabled={state === 'submitting'}
          className="w-full px-4 py-3 bg-warm-white border border-obsidian/15 text-obsidian font-sans text-sm leading-relaxed focus:outline-none focus:border-quarry-gold transition-colors disabled:opacity-50"
        />
      </div>

      {/* Error message */}
      {state === 'error' && errorMsg && (
        <div className="border border-rust-earth/30 bg-rust-earth/5 p-4">
          <p className="font-mono text-xs text-rust-earth no-justify">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="cta-primary no-justify w-full md:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? 'Submitting…' : 'Submit enquiry →'}
        </button>
        <p className="mt-4 font-mono text-xs text-tobacco/50 no-justify">
          We don't share your enquiry data outside KHADANE™ / Dhakar Stone Impex.
        </p>
      </div>
    </form>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  required = false,
  disabled = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-eyebrow text-tobacco mb-3 no-justify">
        {label} {required && <span className="text-quarry-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 bg-warm-white border border-obsidian/15 text-obsidian font-sans text-sm focus:outline-none focus:border-quarry-gold transition-colors disabled:opacity-50"
      />
    </div>
  )
}

function FormSelect({
  label,
  name,
  options,
  required = false,
  disabled = false,
}: {
  label: string
  name: string
  options: { value: string; label: string }[]
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-eyebrow text-tobacco mb-3 no-justify">
        {label} {required && <span className="text-quarry-gold">*</span>}
      </label>
      <select
        name={name}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 bg-warm-white border border-obsidian/15 text-obsidian font-sans text-sm focus:outline-none focus:border-quarry-gold transition-colors disabled:opacity-50"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
