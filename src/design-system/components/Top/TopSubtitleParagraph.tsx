import type { ReactNode } from 'react'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import type { ParagraphTextProps } from '../../types/paragraphText'

type TopSubtitleParagraphProps = Omit<ParagraphTextProps, 'typography'> & {
  children: ReactNode
  typography?: ParagraphTextProps['typography']
}

export default function TopSubtitleParagraph({
  children,
  typography = 't6',
  color = 'grey500',
  ...rest
}: TopSubtitleParagraphProps) {
  return (
    <ParagraphTextRenderer typography={typography} color={color} as="p" {...rest}>
      {children}
    </ParagraphTextRenderer>
  )
}
