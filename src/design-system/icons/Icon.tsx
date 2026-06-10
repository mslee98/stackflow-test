/**
 * @fileoverview SVG 아이콘 컴포넌트.
 *
 * @example
 * ```tsx
 * <Icon name="icon-arrow-right-mono" size={24} color="grey600" />
 * <Icon name="icon-u231B-mono" size={18} />
 * ```
 */
import { useEffect, useState, type CSSProperties } from 'react'
import { colors, type ColorToken } from '../tokens/colors'
import {
  fetchIconSvg,
  getIconSvg,
  type IconName,
  type IconSource,
} from './registry'

export type IconProps = {
  name: IconName | (string & {})
  source?: IconSource
  size?: number | string
  color?: ColorToken
  className?: string
  style?: CSSProperties
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export default function Icon({
  name,
  source = 'auto',
  size = 24,
  color,
  className = '',
  style,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = !ariaLabel,
}: IconProps) {
  const [svg, setSvg] = useState(() => getIconSvg(name, source))

  useEffect(() => {
    const cached = getIconSvg(name, source)
    if (cached) {
      setSvg(cached)
      return
    }

    let cancelled = false
    fetchIconSvg(name, source).then((loaded) => {
      if (!cancelled) setSvg(loaded)
    })

    return () => {
      cancelled = true
    }
  }, [name, source])

  if (!svg) {
    const dimension = typeof size === 'number' ? `${size}px` : size
    return (
      <span
        className={`inline-block shrink-0 ${className}`}
        style={{ width: dimension, height: dimension, ...style }}
        aria-hidden
      />
    )
  }

  const dimension = typeof size === 'number' ? `${size}px` : size

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: dimension,
        height: dimension,
        color: color ? colors[color] : undefined,
        ...style,
      }}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
