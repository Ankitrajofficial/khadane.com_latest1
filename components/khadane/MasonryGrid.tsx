'use client'

// ============================================================
// KHADANE™ — Masonry Grid · v3.1 (Batch 08)
// ============================================================

import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'
import type { PhotoSlot } from '@/lib/photography'

interface MasonryGridProps {
  photos: PhotoSlot[]
  categoryName: string
  placeholderVariant?:
    | 'stone'
    | 'quarry'
    | 'yard'
    | 'stone-grey'
    | 'stone-warm'
    | 'stone-red'
    | 'stone-green'
    | 'portrait'
    | 'belt'
}

type MasonryPhoto = PhotoSlot & {
  id?: string
  src?: string
}

const FALLBACK_ASPECTS = [
  '4/5',
  '3/2',
  '4/3',
  '3/4',
  '16/9',
  '1/1',
  '5/4',
  '2/3',
] as const

export default function MasonryGrid({
  photos,
  categoryName,
  placeholderVariant = 'stone',
}: MasonryGridProps) {
  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set())

  const handleLoad = (id: string) => {
    setLoadedIds((prev) => new Set(prev).add(id))
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif italic text-stone-linen/60 text-lg">
          Photography for {categoryName} is in progress.
        </p>
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
      {(photos as MasonryPhoto[]).map((photo, idx) => {
        const id = photo.id ?? photo.key
        const aspect = photo.aspect || FALLBACK_ASPECTS[idx % FALLBACK_ASPECTS.length]
        const src = photo.src ?? null
        const isLoaded = loadedIds.has(id)

        return (
          <figure
            key={id}
            className="mb-6 break-inside-avoid"
            style={{ aspectRatio: aspect }}
          >
            <div className="relative w-full h-full overflow-hidden">
              {src ? (
                <img
                  src={src}
                  alt={photo.caption || `${categoryName} — ${id}`}
                  loading="lazy"
                  onLoad={() => handleLoad(id)}
                  className={[
                    'w-full h-full object-cover transition-opacity duration-700',
                    isLoaded ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                />
              ) : (
                <PlaceholderImage
                  variant={placeholderVariant}
                  label={photo.caption || categoryName}
                  className="w-full h-full"
                  useSvg={false}
                />
              )}
            </div>
            {photo.caption && (
              <figcaption className="font-serif italic text-sm text-stone-linen/70 mt-3 leading-relaxed">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        )
      })}
    </div>
  )
}
