import type { ReactNode } from 'react'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import type { ParagraphTextProps } from '../../types/paragraphText'

type TopTitleParagraphProps = Omit<ParagraphTextProps, 'typography'> & {
  children: ReactNode
  typography?: ParagraphTextProps['typography']
}

export default function TopTitleParagraph({
  children,
  typography = 't3',
  fontWeight = 'bold',
  ...rest
}: TopTitleParagraphProps) {
  return (
    <ParagraphTextRenderer
      typography={typography}
      fontWeight={fontWeight}
      as="h1"
      {...rest}
    >
      {children}
    </ParagraphTextRenderer>
  )
}
