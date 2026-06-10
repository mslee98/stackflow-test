import { motion, useAnimationControls, type HTMLMotionProps } from 'framer-motion'
import { useCallback, type ReactNode } from 'react'
import { useTouchEffect } from '../hooks/useTouchEffect'
import { transition } from '../tokens/motion'
import { touchScale } from '../tokens/touch'
import TouchDimmer from './TouchDimmer'

type PressableProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  scale?: number
  withTouchEffect?: boolean
  onPressStart?: () => void
  onPressEnd?: () => void
} & Omit<HTMLMotionProps<'div'>, 'children'>

export default function Pressable({
  children,
  className = '',
  disabled = false,
  scale = touchScale.default,
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
      transition: transition.easeInOut100,
    })
  }, [controls, scale])

  const animateReleased = useCallback(() => {
    controls.start({
      scale: 1,
      transition: transition.easeInOut100,
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
        willChange: 'scale',
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
        ...style,
      }}
      onClick={disabled ? undefined : onClick}
      {...(withTouchEffect ? touchEffectProps : {})}
      {...rest}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
      {withTouchEffect && <TouchDimmer pressed={pressed} />}
    </motion.div>
  )
}
