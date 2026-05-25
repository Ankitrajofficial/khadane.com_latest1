import Image from 'next/image'

interface PlaceholderImageProps {
  className?: string
  variant?:
    | 'stone'
    | 'quarry'
    | 'yard'
    | 'stone-grey'
    | 'stone-warm'
    | 'stone-red'
    | 'stone-green'
    | 'portrait'
    | 'belt'
  label?: string
  title?: string
  spec?: string
  aspectRatio?: string
  swapPath?: string
  useSvg?: boolean
}

export default function PlaceholderImage({
  className = '',
  variant = 'stone',
  label = 'PLACEHOLDER',
  title,
  spec,
  aspectRatio = 'aspect-[4/3]',
  swapPath,
  useSvg = true,
}: PlaceholderImageProps) {
  // Derive SVG placeholder path from swapPath
  // swapPath: "/img/varieties/kandla-grey-hero.jpg" → "/img/varieties/kandla-grey-hero.svg"
  const svgPath = swapPath
    ? swapPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.svg')
    : null

  // Use the real SVG placeholder if we have one
  if (useSvg && svgPath) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
        <Image
          src={svgPath}
          alt={title || label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          unoptimized
        />
      </div>
    )
  }

  // Fallback — CSS gradient (used when no swapPath provided)
  const variantClass = `placeholder-${variant}`
  return (
    <div className={`placeholder-base ${variantClass} ${aspectRatio} ${className}`}>
      <div className="placeholder-caption">
        <span className="ph-label">{label}</span>
        {title && <span className="ph-title">{title}</span>}
        {spec && <span className="ph-spec">{spec}</span>}
        {swapPath && (
          <span className="ph-spec" style={{ marginTop: '0.5rem', opacity: 0.4 }}>
            swap → {swapPath}
          </span>
        )}
      </div>
    </div>
  )
}
