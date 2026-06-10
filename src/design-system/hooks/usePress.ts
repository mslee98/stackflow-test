import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent,
  type TouchEvent,
} from 'react'
import { PRESS_HOLD_MS } from '../tokens/touch'

type PressHandlers = {
  onPressStart?: () => void
  onPressEnd?: () => void
  onPressCancel?: () => void
}

type UsePressOptions = PressHandlers & {
  disabled?: boolean
}

export function usePress({
  onPressStart,
  onPressEnd,
  onPressCancel,
  disabled = false,
}: UsePressOptions) {
  const pressingRef = useRef(false)
  const releaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearReleaseTimer = useCallback(() => {
    if (releaseTimerRef.current !== null) {
      clearTimeout(releaseTimerRef.current)
      releaseTimerRef.current = null
    }
  }, [])

  const schedulePressEnd = useCallback(
    (callback?: () => void) => {
      clearReleaseTimer()
      releaseTimerRef.current = setTimeout(() => {
        pressingRef.current = false
        callback?.()
        releaseTimerRef.current = null
      }, PRESS_HOLD_MS)
    },
    [clearReleaseTimer],
  )

  const handlePressStart = useCallback(() => {
    if (disabled || pressingRef.current) return
    pressingRef.current = true
    clearReleaseTimer()
    onPressStart?.()
  }, [clearReleaseTimer, disabled, onPressStart])

  const handlePressEnd = useCallback(() => {
    if (disabled || !pressingRef.current) return
    schedulePressEnd(onPressEnd)
  }, [disabled, onPressEnd, schedulePressEnd])

  const handlePressCancel = useCallback(() => {
    if (disabled || !pressingRef.current) return
    schedulePressEnd(onPressCancel)
  }, [disabled, onPressCancel, schedulePressEnd])

  useEffect(() => {
    return () => clearReleaseTimer()
  }, [clearReleaseTimer])

  const onTouchStart = useCallback(
    (event: TouchEvent) => {
      event.stopPropagation()
      handlePressStart()
    },
    [handlePressStart],
  )

  const onTouchEnd = useCallback(
    (event: TouchEvent) => {
      event.stopPropagation()
      handlePressEnd()
    },
    [handlePressEnd],
  )

  const onTouchCancel = useCallback(
    (event: TouchEvent) => {
      event.stopPropagation()
      handlePressCancel()
    },
    [handlePressCancel],
  )

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return
      handlePressStart()

      const onMouseUp = () => {
        handlePressEnd()
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mouseup', onMouseUp)
    },
    [handlePressEnd, handlePressStart],
  )

  return {
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
  }
}
