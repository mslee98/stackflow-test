/**
 * @fileoverview TDS TextButton — ParagraphText + 클릭 (박스 없는 액션).
 */
import type { ReactNode } from 'react'
import Icon from '../../icons/Icon'
import { ICON } from '../../icons/registry'
import Pressable from '../../primitives/Pressable'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import {
  textButtonSizeMap,
  type TextButtonSize,
  type TextButtonVariant,
} from '../../tokens/textButton'
import type { ParagraphTextProps } from '../../types/paragraphText'
import type { ColorToken } from '../../tokens/colors'

export type TextButtonProps = {
  children: ReactNode
  size: TextButtonSize
  variant?: TextButtonVariant
  color?: ColorToken
  disabled?: boolean
  className?: string
  onClick?: () => void
} & Omit<ParagraphTextProps, 'typography'>

export default function TextButton({
  children,
  size,
  variant = 'clear',
  color = 'blue500',
  fontWeight = 'medium',
  disabled = false,
  className = '',
  onClick,
  ...rest
}: TextButtonProps) {
  const typography = textButtonSizeMap[size]

  return (
    <Pressable
      role="button"
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      dimmerVariant="grey"
      className={`inline-flex items-center gap-0.5 ${disabled ? 'opacity-50' : 'cursor-pointer'} ${variant === 'underline' ? 'underline' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(event) => {
        if (disabled) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      <ParagraphTextRenderer
        typography={typography}
        fontWeight={fontWeight}
        color={color}
        as="span"
        {...rest}
      >
        {children}
      </ParagraphTextRenderer>
      {variant === 'arrow' && (
        <Icon name={ICON.ARROW_RIGHT} size={16} color={color} />
      )}
    </Pressable>
  )
}
