import type { TypographyToken } from './typography'

export type BadgeSize = 'xsmall' | 'small' | 'medium' | 'large'
export type BadgeVariant = 'fill' | 'weak'
export type BadgeColor = 'blue' | 'yellow' | 'green' | 'red' | 'grey'

export const badgeSizeMap: Record<
  BadgeSize,
  { typography: TypographyToken; className: string }
> = {
  xsmall: { typography: 'st13', className: 'px-1.5 py-0.5' },
  small: { typography: 'st12', className: 'px-2 py-0.5' },
  medium: { typography: 't7', className: 'px-2.5 py-1' },
  large: { typography: 't6', className: 'px-3 py-1' },
}

export function getBadgeColorClasses(
  color: BadgeColor,
  variant: BadgeVariant,
): string {
  const palettes: Record<BadgeColor, { fill: string; weak: string }> = {
    blue: {
      fill: 'bg-blue-500 text-white',
      weak: 'bg-blue-50 text-blue-500',
    },
    yellow: {
      fill: 'bg-yellow-500 text-grey-900',
      weak: 'bg-yellow-50 text-yellow-800',
    },
    green: {
      fill: 'bg-green-500 text-white',
      weak: 'bg-green-50 text-green-600',
    },
    red: {
      fill: 'bg-red-500 text-white',
      weak: 'bg-red-50 text-red-500',
    },
    grey: {
      fill: 'bg-grey-500 text-white',
      weak: 'bg-grey-100 text-grey-600',
    },
  }

  return palettes[color][variant]
}
