/**
 * @fileoverview TDS Text — 최하위 Typography Primitive.
 *
 * 읽기 전용 텍스트. Tier 1·2 어디에서나 사용합니다.
 */
import type { ReactNode } from 'react'
import ParagraphTextRenderer from './ParagraphTextRenderer'
import type { ParagraphTextProps } from '../types/paragraphText'

type TextProps = ParagraphTextProps & {
  children: ReactNode
  as?: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'div' | 'label'
}

export default function Text({
  children,
  as = 'div',
  ...paragraphProps
}: TextProps) {
  return (
    <ParagraphTextRenderer as={as} {...paragraphProps}>
      {children}
    </ParagraphTextRenderer>
  )
}
