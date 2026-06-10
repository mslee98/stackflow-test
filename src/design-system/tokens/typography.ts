/**
 * @fileoverview TDS typography 스케일 + fontWeight.
 *
 * 컴포넌트에서는 `Text` 또는 `getTypographyStyle()`을 사용하세요.
 * px를 직접 하드코딩하지 마세요.
 */
import type { CSSProperties } from 'react'

export const typographyScale = {
  t1: { fontSize: 30, lineHeight: 40 },
  st1: { fontSize: 29, lineHeight: 38 },
  st2: { fontSize: 28, lineHeight: 37 },
  st3: { fontSize: 27, lineHeight: 36 },
  t2: { fontSize: 26, lineHeight: 35 },
  st4: { fontSize: 25, lineHeight: 34 },
  st5: { fontSize: 24, lineHeight: 33 },
  st6: { fontSize: 23, lineHeight: 32 },
  t3: { fontSize: 22, lineHeight: 31 },
  st7: { fontSize: 21, lineHeight: 30 },
  t4: { fontSize: 20, lineHeight: 29 },
  st8: { fontSize: 19, lineHeight: 28 },
  st9: { fontSize: 18, lineHeight: 27 },
  t5: { fontSize: 17, lineHeight: 25.5 },
  st10: { fontSize: 16, lineHeight: 24 },
  t6: { fontSize: 15, lineHeight: 22.5 },
  st11: { fontSize: 14, lineHeight: 21 },
  t7: { fontSize: 13, lineHeight: 19.5 },
  st12: { fontSize: 12, lineHeight: 18 },
  st13: { fontSize: 11, lineHeight: 16.5 },
} as const

export type TypographyToken = keyof typeof typographyScale

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export type FontWeightToken = keyof typeof fontWeights

export function getTypographyStyle(
  typography: TypographyToken,
  fontWeight: FontWeightToken = 'regular',
): CSSProperties {
  const scale = typographyScale[typography]

  return {
    fontSize: scale.fontSize,
    lineHeight: `${scale.lineHeight}px`,
    fontWeight: fontWeights[fontWeight],
  }
}
