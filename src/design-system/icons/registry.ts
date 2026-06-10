/**
 * @fileoverview SVG 아이콘 레지스트리 (manifest + 런타임 fetch).
 *
 * SVG 추가 후 `npm run icons:generate` 실행 (dev/build 시 자동).
 */
import {
  fillIconManifest,
  monoIconManifest,
} from './registry.generated'
import { getIconPublicUrl, prepareFillSvg, prepareMonoSvg } from './utils'

export { monoIconManifest, fillIconManifest }

export type MonoIconName = keyof typeof monoIconManifest
export type FillIconName = keyof typeof fillIconManifest
export type IconName = MonoIconName | FillIconName

export type IconSource = 'mono' | 'fill' | 'auto'

const svgCache = new Map<string, string>()

export function resolveIconSource(name: string, source: IconSource = 'auto'): 'mono' | 'fill' | null {
  if (source === 'mono') {
    return name in monoIconManifest ? 'mono' : null
  }
  if (source === 'fill') {
    return name in fillIconManifest ? 'fill' : null
  }

  if (name in monoIconManifest) return 'mono'
  if (name in fillIconManifest) return 'fill'
  return null
}

export function hasIcon(name: string, source: IconSource = 'auto'): boolean {
  return resolveIconSource(name, source) !== null
}

function cacheKey(name: string, source: 'mono' | 'fill'): string {
  return `${source}:${name}`
}

/** SVG 문자열 fetch (메모리 캐시) */
export async function fetchIconSvg(
  name: string,
  source: IconSource = 'auto',
): Promise<string | null> {
  const resolved = resolveIconSource(name, source)
  if (!resolved) return null

  const key = cacheKey(name, resolved)
  const cached = svgCache.get(key)
  if (cached) return cached

  const manifest = resolved === 'mono' ? monoIconManifest : fillIconManifest
  const filename = manifest[name as keyof typeof manifest]
  if (!filename) return null

  const url = getIconPublicUrl(resolved, filename)
  const response = await fetch(url)
  if (!response.ok) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] fetch 실패: ${url}`)
    }
    return null
  }

  const raw = await response.text()
  const prepared = resolved === 'mono' ? prepareMonoSvg(raw) : prepareFillSvg(raw)
  svgCache.set(key, prepared)
  return prepared
}

/** 동기 접근 — 캐시된 경우만 */
export function getIconSvg(name: string, source: IconSource = 'auto'): string | null {
  const resolved = resolveIconSource(name, source)
  if (!resolved) return null
  return svgCache.get(cacheKey(name, resolved)) ?? null
}

/** 자주 쓰는 아이콘 name 상수 */
export const ICON = {
  ARROW_RIGHT: 'icon-arrow-right-mono',
  ARROW_RIGHT_SOLID: 'icon-arrow-solid-right-mono',
  HOURGLASS: 'icon-u231B-mono',
  NAVIGATION_X: 'icon-navigation-x-mono',
  USER: 'icon-user-mono',
} as const satisfies Record<string, IconName>
