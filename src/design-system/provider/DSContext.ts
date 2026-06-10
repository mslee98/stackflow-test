/**
 * @fileoverview DS 전역 Context.
 *
 * 컴포넌트 파일과 분리해 두어 Fast Refresh 호환성을 유지합니다.
 * 앱 코드에서는 `useDS()`만 import하세요. Context 객체는 직접 사용하지 않습니다.
 */

import { createContext, useContext } from 'react'
import type { DSContextValue } from './types'

export const DSContext = createContext<DSContextValue | null>(null)

/**
 * DSProvider 하위에서 전역 DS 설정·햅틱·접근성 값을 읽습니다.
 *
 * @throws Provider 밖에서 호출 시 에러 (의도적 — 설정 누락을 조기 발견)
 *
 * @example
 * ```tsx
 * function MyTab() {
 *   const { generateHaptic, config } = useDS()
 *   return (
 *     <button onPointerDown={() => generateHaptic('tickWeak')}>
 *       탭
 *     </button>
 *   )
 * }
 * ```
 */
export function useDS(): DSContextValue {
  const context = useContext(DSContext)
  if (!context) {
    throw new Error(
      'useDS must be used within DSProvider. ' +
        '앱 루트를 <DSProvider>로 감싸 주세요. ' +
        '자세한 사용법: src/design-system/README.md',
    )
  }
  return context
}
