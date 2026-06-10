import type { CSSProperties, ReactNode } from 'react'
import type { ColorToken } from '../tokens/colors'
import type { FontWeightToken, TypographyToken } from '../tokens/typography'

/**
 * TDS ParagraphTextProps — Tier 1·2 텍스트 UI의 공통 기반.
 * Text, TextButton, Top.*Paragraph, ListHeader.*Paragraph, ListRow.Texts 행이 공유합니다.
 */
export type ParagraphTextProps = {
  typography: TypographyToken
  fontWeight?: FontWeightToken
  color?: ColorToken
  className?: string
  /** 레이아웃용만 허용. fontSize/lineHeight 직접 지정 금지 */
  style?: CSSProperties
}

export type ParagraphTextRendererProps = ParagraphTextProps & {
  children: ReactNode
  as?: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'div' | 'label'
}
