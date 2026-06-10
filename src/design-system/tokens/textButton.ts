import type { TypographyToken } from './typography'

export type TextButtonSize = 'xsmall' | 'small' | 'medium' | 'large'
export type TextButtonVariant = 'clear' | 'arrow' | 'underline'

export const textButtonSizeMap: Record<TextButtonSize, TypographyToken> = {
  xsmall: 'st13',
  small: 't7',
  medium: 't6',
  large: 'st10',
}
