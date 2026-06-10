import type { FontWeightToken, TypographyToken } from './typography'
import { typographyScale } from './typography'

export type TextButtonSize =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export type TextButtonVariant = 'clear' | 'arrow' | 'underline'
export type TextButtonArrowPlacement = 'inline' | 'block'

/** TDS OFe — size → Paragraph.Text typography */
export const textButtonTypographyMap: Record<TextButtonSize, TypographyToken> = {
  xsmall: 't7',
  small: 't6',
  medium: 't5',
  large: 't4',
  xlarge: 't3',
  xxlarge: 'st2',
}

/** @deprecated `textButtonTypographyMap` 사용 */
export const textButtonSizeMap = textButtonTypographyMap

/** TDS BFe — size → default fontWeight (prop으로 덮어쓸 수 있음) */
export const textButtonFontWeightMap: Record<TextButtonSize, FontWeightToken> = {
  xsmall: 'medium',
  small: 'medium',
  medium: 'medium',
  large: 'semibold',
  xlarge: 'bold',
  xxlarge: 'bold',
}

/** TDS PQ — arrow variant AssetIcon frame size */
export const textButtonArrowIconSizeMap: Record<TextButtonSize, number> = {
  xsmall: 16,
  small: 18,
  medium: 20,
  large: 24,
  xlarge: 28,
  xxlarge: 35,
}

export const TEXT_BUTTON_DISABLED_OPACITY = 0.38

/** TextButton press dimmer — rgba(2, 32, 71, 0.051) */
export const TEXT_BUTTON_PRESS_DIMMER_COLOR = '#0220470D'

export const TEXT_BUTTON_ARROW_INLINE_PADDING_BOTTOM = 3

export type ParagraphLinkMetrics = {
  verticalPadding: number
  horizontalPadding: number
  borderRadius: number
  lightThickness: number
  boldThickness: number
}

/** TDS assignLinkVariables 대응 — typography별 link 터치·밑줄 메트릭 */
export function getParagraphLinkMetrics(
  typography: TypographyToken,
): ParagraphLinkMetrics {
  const { fontSize, lineHeight } = typographyScale[typography]
  const verticalPadding = Math.round((lineHeight - fontSize) / 2)
  const horizontalPadding = Math.max(4, Math.round(fontSize * 0.28))

  return {
    verticalPadding,
    horizontalPadding,
    borderRadius: Math.max(4, Math.round(fontSize * 0.28)),
    lightThickness: 1,
    boldThickness: 2,
  }
}

type DimmerLevel = 'level1' | 'level2' | 'level3' | 'level4'

const textButtonDimmerLevelMap: Record<TextButtonSize, DimmerLevel> = {
  xsmall: 'level1',
  small: 'level1',
  medium: 'level2',
  large: 'level3',
  xlarge: 'level3',
  xxlarge: 'level4',
}

const dimmerLevelScale: Record<DimmerLevel, number> = {
  level1: 0.85,
  level2: 1,
  level3: 1.1,
  level4: 1.2,
}

export type TextButtonDimmerInsets = {
  top: number
  right: number
  bottom: number
  left: number
}

/** TDS IFe — variant·size별 dimmer inset (텍스트+화살표 전체 영역) */
export function getTextButtonDimmerInsets(
  size: TextButtonSize,
  _variant: TextButtonVariant,
  metrics: ParagraphLinkMetrics,
): TextButtonDimmerInsets {
  const scale = dimmerLevelScale[textButtonDimmerLevelMap[size]]
  const vertical = metrics.verticalPadding * scale
  const horizontal = metrics.horizontalPadding * scale

  return {
    top: vertical,
    bottom: vertical,
    left: horizontal,
    right: horizontal,
  }
}

export function getTextButtonWrapperStyle(metrics: ParagraphLinkMetrics): {
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  marginTop: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  borderRadius: number
} {
  const { verticalPadding, horizontalPadding, borderRadius } = metrics

  return {
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    marginTop: -verticalPadding,
    marginBottom: -verticalPadding,
    marginLeft: -horizontalPadding,
    marginRight: -horizontalPadding,
    borderRadius,
  }
}
