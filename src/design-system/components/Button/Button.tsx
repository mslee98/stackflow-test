/**
 * @fileoverview TDS Button v2 — Action Primitive (박스형).
 *
 * FixedBottomCTA 등 CTA의 엔진 역할을 합니다.
 */
import {
  motion,
  useAnimationControls,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, type ReactNode } from 'react'
import { useTouchEffect } from '../../hooks/useTouchEffect'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import TouchDimmer from '../../primitives/TouchDimmer'
import { spring } from '../../tokens/motion'
import {
  buttonDisplayMap,
  buttonSizeMap,
  getButtonColorClasses,
  type ButtonColor,
  type ButtonDisplay,
  type ButtonSize,
  type ButtonVariant,
} from '../../tokens/button'
import { touchScale } from '../../tokens/touch'

export type ButtonProps = {
  children: ReactNode
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  display?: ButtonDisplay
  loading?: boolean
  disabled?: boolean
} & Omit<HTMLMotionProps<'button'>, 'children'>

export default function Button({
  children,
  color = 'primary',
  variant = 'fill',
  size = 'medium',
  display = 'block',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...rest
}: ButtonProps) {
  const controls = useAnimationControls()
  const isDisabled = disabled || loading
  const sizeConfig = buttonSizeMap[size]

  const animatePressed = useCallback(() => {
    controls.start({ scale: touchScale.default, transition: spring.rapid })
  }, [controls])

  const animateReleased = useCallback(() => {
    controls.start({ scale: 1, transition: spring.quick })
  }, [controls])

  const { pressed, touchEffectProps } = useTouchEffect({
    disabled: isDisabled,
    onPressStart: animatePressed,
    onPressEnd: animateReleased,
    onPressCancel: animateReleased,
  })

  return (
    <motion.button
      type="button"
      animate={controls}
      disabled={isDisabled}
      className={`relative items-center justify-center overflow-hidden rounded-xl font-medium disabled:opacity-50 ${buttonDisplayMap[display]} ${sizeConfig.className} ${getButtonColorClasses(color, variant)} ${className}`}
      style={{
        willChange: 'transform',
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
      }}
      onClick={isDisabled ? undefined : onClick}
      {...touchEffectProps}
      {...rest}
    >
      <span className="relative z-[1] flex items-center justify-center gap-2">
        {loading && (
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
        )}
        {typeof children === 'string' ? (
          <ParagraphTextRenderer
            typography={sizeConfig.typography}
            fontWeight="semibold"
            as="span"
            className="inherit-color"
            style={{ color: 'inherit' }}
          >
            {children}
          </ParagraphTextRenderer>
        ) : (
          children
        )}
      </span>
      <TouchDimmer pressed={pressed} variant="radial" />
    </motion.button>
  )
}
