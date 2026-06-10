/**
 * @packageDocumentation
 * @module @stackflow-test/mobile-ds
 */

// --- Provider ---
export { DSProvider, type DSProviderProps } from './provider/DSProvider'
export { useDS } from './provider/DSContext'
export type { DSProviderConfig, DSContextValue } from './provider/types'
export { TouchFeedbackProvider, useTouchFeedback } from './context/TouchFeedbackContext'

// --- Tier 1: Typography & Action ---
export { default as Text } from './primitives/Text'
export { default as Button } from './components/Button/Button'
export type { ButtonProps } from './components/Button/Button'
export { default as TextButton } from './components/TextButton/TextButton'
export type { TextButtonProps } from './components/TextButton/TextButton'
export { default as Badge } from './components/Badge/Badge'
export type { BadgeProps } from './components/Badge/Badge'
export { default as Top } from './components/Top/Top'
export type { TopProps } from './components/Top/Top'

// --- Tier 2: Layout Compound ---
export { default as ListHeader } from './components/ListHeader/ListHeader'
export type { ListHeaderProps } from './components/ListHeader/ListHeader'
export { default as ListRow } from './components/ListRow/ListRow'
export type { ListRowProps } from './components/ListRow/ListRow'
export { default as ListRowTexts } from './components/ListRow/ListRowTexts'
export type { ListRowTextsProps } from './components/ListRow/ListRowTexts'
export { default as Asset } from './components/Asset/Asset'

// --- Tab bar IconButton (3단계에서 TDS API로 확장 예정) ---
export { default as IconButton } from './components/IconButton'
export { default as Pressable } from './primitives/Pressable'

// --- Types ---
export type { ParagraphTextProps } from './types/paragraphText'

// --- Tokens ---
export { spring, transition } from './tokens/motion'
export { touchScale, PRESS_DIMMER_OPACITY, PRESS_HOLD_MS } from './tokens/touch'
export { colors, type ColorToken } from './tokens/colors'
export {
  typographyScale,
  fontWeights,
  getTypographyStyle,
  type TypographyToken,
  type FontWeightToken,
} from './tokens/typography'
export {
  type ButtonColor,
  type ButtonVariant,
  type ButtonSize,
  type ButtonDisplay,
} from './tokens/button'
export {
  type BadgeSize,
  type BadgeVariant,
  type BadgeColor,
} from './tokens/badge'
export {
  type TextButtonSize,
  type TextButtonVariant,
  type TextButtonArrowPlacement,
  textButtonTypographyMap,
  textButtonFontWeightMap,
  getParagraphLinkMetrics,
} from './tokens/textButton'
export { type FrameShape } from './tokens/asset'
export {
  type ListRowVerticalPadding,
  type ListRowArrowType,
  type ListRowVariant,
  type ListRowTextsType,
} from './tokens/listRow'

// --- Icons ---
export {
  Icon,
  ICON,
  getIcon,
  fetchIconSvg,
  getIconSvg,
  hasIcon,
  monoIconManifest,
  fillIconManifest,
  type IconName,
  type MonoIconName,
  type FillIconName,
  type IconSource,
} from './icons'
