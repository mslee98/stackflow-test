import { useCallback, useState } from 'react'
import { usePress } from './usePress'

type UseTouchEffectOptions = {
  disabled?: boolean
  onPressStart?: () => void
  onPressEnd?: () => void
  onPressCancel?: () => void
}

export function useTouchEffect({
  disabled = false,
  onPressStart,
  onPressEnd,
  onPressCancel,
}: UseTouchEffectOptions = {}) {
  const [pressed, setPressed] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handlePressStart = useCallback(() => {
    if (disabled) return
    setPressed(true)
    onPressStart?.()
  }, [disabled, onPressStart])

  const handlePressEnd = useCallback(() => {
    if (disabled) return
    setPressed(false)
    onPressEnd?.()
  }, [disabled, onPressEnd])

  const handlePressCancel = useCallback(() => {
    if (disabled) return
    setPressed(false)
    onPressCancel?.()
  }, [disabled, onPressCancel])

  const pressProps = usePress({
    disabled,
    onPressStart: handlePressStart,
    onPressEnd: handlePressEnd,
    onPressCancel: handlePressCancel,
  })

  return {
    pressed,
    hovered,
    touchEffectProps: {
      ...pressProps,
      onMouseEnter: () => {
        if (!disabled) setHovered(true)
      },
      onMouseLeave: () => {
        setHovered(false)
        if (pressed) handlePressEnd()
      },
    },
  }
}
