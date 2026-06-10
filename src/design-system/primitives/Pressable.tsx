import { motion, useAnimationControls, type HTMLMotionProps } from 'framer-motion'
import { useCallback, type ReactNode } from 'react'
import { useTouchEffect } from '../hooks/useTouchEffect'
import { spring } from '../tokens/motion'
import { touchScale } from '../tokens/touch'
import TouchDimmer, { type DimmerVariant } from './TouchDimmer'

type PressableProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  scale?: number
  dimmerVariant?: DimmerVariant
  withTouchEffect?: boolean
  onPressStart?: () => void
  onPressEnd?: () => void
} & Omit<HTMLMotionProps<'div'>, 'children'>

export default function Pressable({
  children,
  className = '',
  disabled = false,
  scale = touchScale.default,
  dimmerVariant = 'grey',
  withTouchEffect = true,
  onPressStart,
  onPressEnd,
  onClick,
  style,
  ...rest
}: PressableProps) {
  const controls = useAnimationControls()

  const animatePressed = useCallback(() => {
    controls.start({
      scale,
      transition: spring.rapid,
    })
  }, [controls, scale])

  const animateReleased = useCallback(() => {
    controls.start({
      scale: 1,
      transition: spring.quick,
    })
  }, [controls])

  const { pressed, touchEffectProps } = useTouchEffect({
    disabled: disabled || !withTouchEffect,
    onPressStart: () => {
      if (withTouchEffect) animatePressed()
      onPressStart?.()
    },
    onPressEnd: () => {
      if (withTouchEffect) animateReleased()
      onPressEnd?.()
    },
    onPressCancel: () => {
      if (withTouchEffect) animateReleased()
    },
  })

  return (
    <motion.div
      animate={controls}
      className={`relative ${className}`}
      style={{
        willChange: 'transform',
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
        ...style,
      }}
      onClick={disabled ? undefined : onClick}
      {...(withTouchEffect ? touchEffectProps : {})}
      {...rest}
    >
      {children}
      {withTouchEffect && (
        <TouchDimmer pressed={pressed} variant={dimmerVariant} />
      )}
    </motion.div>
  )
}
