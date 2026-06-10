/** TDS tds-mobile-button: 0.1s ease-in-out (opacity, scale, color 등 상태 전환) */
export const transition = {
  easeInOut100: { duration: 0.1, ease: 'easeInOut' as const },
} as const

/** @deprecated 터치 피드백은 transition.easeInOut100 사용 */
export const spring = {
  rapid: { type: 'spring' as const, stiffness: 1000, damping: 55 },
  quick: { type: 'spring' as const, stiffness: 800, damping: 55 },
}
