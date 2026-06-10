export type HapticType = 'tickWeak' | 'softWeak'

const HAPTIC_PATTERNS: Record<HapticType, number | number[]> = {
  tickWeak: 10,
  softWeak: [15, 30, 15],
}

export function useHaptic() {
  const generate = (type: HapticType) => {
    if (typeof navigator === 'undefined' || !navigator.vibrate) return
    navigator.vibrate(HAPTIC_PATTERNS[type])
  }

  return { generate }
}
