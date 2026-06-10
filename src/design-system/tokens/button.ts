import { colors } from './colors'
import type { TypographyToken } from './typography'

export type ButtonColor = 'primary' | 'dark' | 'danger' | 'light'
export type ButtonVariant = 'fill' | 'weak'
export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'
export type ButtonDisplay = 'inline' | 'block' | 'full'

export type ButtonLayerStyle = {
  background: string
  textClass: string
  border?: string
}

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

/** Button layer tokens — 단색 background */
export const buttonLayerMap: Record<
  ButtonColor,
  Record<ButtonVariant, ButtonLayerStyle>
> = {
  primary: {
    fill: {
      background: colors.blue500,
      textClass: 'text-white',
    },
    weak: {
      background: colors.blue50,
      textClass: 'text-blue-500',
    },
  },
  dark: {
    fill: {
      background: colors.grey900,
      textClass: 'text-white',
    },
    weak: {
      background: colors.grey100,
      textClass: 'text-grey-900',
    },
  },
  danger: {
    fill: {
      background: colors.red500,
      textClass: 'text-white',
    },
    weak: {
      background: colors.red50,
      textClass: 'text-red-500',
    },
  },
  light: {
    fill: {
      background: colors.background,
      border: colors.grey200,
      textClass: 'text-grey-900',
    },
    weak: {
      background: colors.grey50,
      textClass: 'text-grey-700',
    },
  },
}

export function getButtonTextClass(
  color: ButtonColor,
  variant: ButtonVariant,
): string {
  return buttonLayerMap[color][variant].textClass
}

/** @deprecated buttonLayerMap + getButtonTextClass 사용 */
export function getButtonColorClasses(
  color: ButtonColor,
  variant: ButtonVariant,
): string {
  const layer = buttonLayerMap[color][variant]
  const parts = [layer.textClass]
  if (layer.border) {
    parts.unshift('border border-grey-200')
  }
  return parts.join(' ')
}
