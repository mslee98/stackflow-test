import type { TypographyToken } from './typography'

export type ButtonColor = 'primary' | 'dark' | 'danger' | 'light'
export type ButtonVariant = 'fill' | 'weak'
export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'
export type ButtonDisplay = 'inline' | 'block' | 'full'

export const buttonSizeMap: Record<
  ButtonSize,
  { className: string; typography: TypographyToken }
> = {
  small: { className: 'px-3 py-2', typography: 't6' },
  medium: { className: 'px-4 py-3', typography: 'st10' },
  large: { className: 'px-4 py-3.5', typography: 't4' },
  xlarge: { className: 'px-5 py-4', typography: 't3' },
}

export const buttonDisplayMap: Record<ButtonDisplay, string> = {
  inline: 'inline-flex',
  block: 'flex w-fit',
  full: 'flex w-full',
}

export function getButtonColorClasses(
  color: ButtonColor,
  variant: ButtonVariant,
): string {
  const map: Record<ButtonColor, Record<ButtonVariant, string>> = {
    primary: {
      fill: 'bg-blue-500 text-white',
      weak: 'bg-blue-50 text-blue-500',
    },
    dark: {
      fill: 'bg-grey-900 text-white',
      weak: 'bg-grey-100 text-grey-900',
    },
    danger: {
      fill: 'bg-red-500 text-white',
      weak: 'bg-red-50 text-red-500',
    },
    light: {
      fill: 'border border-grey-200 bg-white text-grey-900',
      weak: 'bg-grey-50 text-grey-700',
    },
  }

  return map[color][variant]
}
