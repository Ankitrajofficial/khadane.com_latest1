'use client'

import { useEffect, useRef, useState, type PointerEvent } from 'react'
import Image from 'next/image'
import PlaceholderImage from './PlaceholderImage'

export type HomeImageSlot = {
  variant:
    | 'stone'
    | 'quarry'
    | 'yard'
    | 'stone-grey'
    | 'stone-warm'
    | 'stone-red'
    | 'stone-green'
    | 'portrait'
    | 'belt'
  label: string
  title: string
  caption: string
  aspectRatio: string
  imagePath: string | null
  imageWidth: number
  imageHeight: number
}

export default function HomeProofGallery({ slots }: { slots: HomeImageSlot[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStartX = useRef<number | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + slots.length) % slots.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % slots.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [slots.length])

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + slots.length) % slots.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slots.length)
  }

  const getOffset = (index: number) => {
    const rawOffset = index - activeIndex
    const half = slots.length / 2
    if (rawOffset > half) return rawOffset - slots.length
    if (rawOffset < -half) return rawOffset + slots.length
    return rawOffset
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const distance = event.clientX - pointerStartX.current
    pointerStartX.current = null

    if (Math.abs(distance) < 42) return
    if (distance > 0) goPrevious()
    else goNext()
  }

  return (
    <div className="khadane-home-proof">
      <div className="khadane-home-proof__carousel">
        <button
          type="button"
          className="khadane-home-proof__shuffle-nav khadane-home-proof__shuffle-nav--prev"
          onClick={goPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div
          className="khadane-home-proof__stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null
          }}
          aria-label="KHADANE image deck"
        >
          {slots.map((slot, index) => {
            const offset = getOffset(index)
            const absoluteOffset = Math.abs(offset)
            const isActive = offset === 0
            const isVisible = absoluteOffset <= 3

            return (
              <button
                key={slot.imagePath ?? slot.label}
                type="button"
                className={`khadane-home-proof__shuffle-card ${
                  isActive ? 'is-active' : ''
                } ${isVisible ? 'is-visible' : 'is-hidden'}`}
                data-offset={isVisible ? offset : 'hidden'}
                onClick={() => {
                  if (!isActive) setActiveIndex(index)
                }}
                aria-label={`Show ${slot.title}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <HomeProofImage slot={slot} priority={isActive} />
                <div className="khadane-home-proof-card__content">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p className="khadane-eyebrow">{slot.label}</p>
                </div>
              </button>
            )
          })}

        </div>

        <button
          type="button"
          className="khadane-home-proof__shuffle-nav khadane-home-proof__shuffle-nav--next"
          onClick={goNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="khadane-home-proof__progress" aria-label="Choose image">
        {slots.map((slot, index) => (
          <button
            key={slot.imagePath ?? slot.label}
            type="button"
            className={index === activeIndex ? 'is-active' : ''}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${slot.title}`}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  )
}

function HomeProofImage({
  slot,
  priority = false,
}: {
  slot: HomeImageSlot
  priority?: boolean
}) {
  if (slot.imagePath) {
    return (
      <Image
        src={slot.imagePath}
        alt={slot.title}
        width={slot.imageWidth}
        height={slot.imageHeight}
        className="khadane-home-proof__photo"
        sizes={
          priority
            ? '(max-width: 820px) 100vw, 58vw'
            : '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw'
        }
        priority={priority}
        loading={priority ? undefined : 'eager'}
      />
    )
  }

  return (
    <PlaceholderImage
      variant={slot.variant}
      label={slot.label}
      title={slot.title}
      aspectRatio={slot.aspectRatio}
      useSvg={false}
    />
  )
}
