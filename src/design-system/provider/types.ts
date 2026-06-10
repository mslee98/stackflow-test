/**
 * @fileoverview DSProvider 설정 타입.
 *
 * 이 패키지는 호스트 앱(Stackflow, Next.js, Vite 등)에 종속되지 않습니다.
 * Provider에 넘기는 옵션만으로 전역 동작을 제어합니다.
 */

/**
 * DSProvider에 전달하는 전역 설정.
 *
 * @example
 * ```tsx
 * <DSProvider config={{ hapticEnabled: false }}>
 *   <App />
 * </DSProvider>
 * ```
 */
export type DSProviderConfig = {
  /**
   * 햅틱(진동) 피드백 전역 on/off.
   * - `true`(기본): `IconButton` 등에서 `navigator.vibrate` 호출
   * - `false`: 시각 피드백(scale + dim)만 유지
   *
   * iOS Safari 등 vibrate 미지원 환경에서는 어차피 무시됩니다.
   */
  hapticEnabled?: boolean
}

/** useDS()가 반환하는 컨텍스트 값. */
export type DSContextValue = {
  /** `prefers-reduced-motion: reduce` 감지 결과 */
  reducedMotion: boolean
  /** 햅틱 발생. `hapticEnabled: false`이면 no-op */
  generateHaptic: (type: import('../hooks/useHaptic').HapticType) => void
  /** Provider에 전달된 설정 (병합된 최종값) */
  config: Required<DSProviderConfig>
}
