/**
 * @fileoverview TDS Badge — ParagraphBadge 파생 (상태·라벨 capsule).
 */
import type { ReactNode } from 'react'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import {
  badgeSizeMap,
  getBadgeColorClasses,
  type BadgeColor,
  type BadgeSize,
  type BadgeVariant,
} from '../../tokens/badge'

export type BadgeProps = {
  children: ReactNode
  size?: BadgeSize
  variant?: BadgeVariant
  color?: BadgeColor
  className?: string
}

export default function Badge({
  children,
  size = 'small',
  variant = 'fill',
  color = 'blue',
  className = '',
}: BadgeProps) {
  const sizeConfig = badgeSizeMap[size]

  return (
    <span
      className={`inline-flex items-center rounded-full ${sizeConfig.className} ${getBadgeColorClasses(color, variant)} ${className}`}
    >
      {typeof children === 'string' ? (
        <ParagraphTextRenderer
          typography={sizeConfig.typography}
          fontWeight="medium"
          as="span"
          style={{ color: 'inherit' }}
        >
          {children}
        </ParagraphTextRenderer>
      ) : (
        children
      )}
    </span>
  )
}
