/**
 * @fileoverview Design System 최상위 Provider.
 *
 * TDS의 `TDSMobileProvider` / Toss 앱의 Provider 패턴과 동일한 역할입니다.
 * 앱 루트에서 **한 번만** 감싸면 DS 컴포넌트가 전역 설정(햅틱, reducedMotion 등)을 공유합니다.
 *
 * ## 호스트 앱 통합 (현재 monorepo / 추후 npm)
 *
 * ```tsx
 * // 1) 패키지 설치 (추후 npm 배포 시)
 * // npm install @your-org/mobile-ds framer-motion pretendard
 *
 * // 2) 스타일 로드 (호스트 앱의 진입 CSS)
 * // @import 'pretendard/dist/web/variable/pretendardvariable.css';
 * // @import '@your-org/mobile-ds/styles.css';
 *
 * // 3) 앱 루트
 * import { DSProvider, Button, Text } from '@your-org/mobile-ds'
 *
 * export function App() {
 *   return (
 *     <DSProvider>
 *       <Button variant="primary">확인</Button>
 *     </DSProvider>
 *   )
 * }
 * ```
 *
 * ## 독립성
 * - Stackflow, 라우터, 상태관리 라이브러리에 **의존하지 않음**
 * - peerDependencies: `react`, `react-dom`, `framer-motion`
 * - 선택: `pretendard` (호스트에서 폰트 로드)
 */

import { useCallback, useMemo, type ReactNode } from 'react'
import { useHaptic, type HapticType } from '../hooks/useHaptic'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { DSContext } from './DSContext'
import type { DSProviderConfig } from './types'

const DEFAULT_CONFIG: Required<DSProviderConfig> = {
  hapticEnabled: true,
}

export type DSProviderProps = {
  children: ReactNode
  /**
   * 전역 DS 동작 설정.
   * @see DSProviderConfig
   */
  config?: DSProviderConfig
}

/**
 * Design System Provider.
 *
 * `Button`, `ListRow`, `IconButton` 등 DS 컴포넌트를 사용하기 전에
 * 앱 최상단(또는 라우터/레이아웃 루트)에서 감싸 주세요.
 */
export function DSProvider({ children, config }: DSProviderProps) {
  const reducedMotion = useReducedMotion()
  const { generate } = useHaptic()

  const mergedConfig = useMemo(
    () => ({
      ...DEFAULT_CONFIG,
      ...config,
    }),
    [config],
  )

  const generateHaptic = useCallback(
    (type: HapticType) => {
      if (!mergedConfig.hapticEnabled) return
      generate(type)
    },
    [generate, mergedConfig.hapticEnabled],
  )

  const value = useMemo(
    () => ({
      reducedMotion,
      generateHaptic,
      config: mergedConfig,
    }),
    [reducedMotion, generateHaptic, mergedConfig],
  )

  return <DSContext.Provider value={value}>{children}</DSContext.Provider>
}
