/**
 * @fileoverview 하위 호환 alias.
 *
 * @deprecated `DSProvider` / `useDS`를 사용하세요.
 * 이 파일은 기존 import 경로를 유지하기 위한 re-export입니다.
 */

export { DSProvider as TouchFeedbackProvider } from '../provider/DSProvider'
export { useDS as useTouchFeedback } from '../provider/DSContext'
