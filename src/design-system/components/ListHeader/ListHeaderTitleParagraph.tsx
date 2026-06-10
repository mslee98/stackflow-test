import type { ReactNode } from 'react'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import type { ParagraphTextProps } from '../../types/paragraphText'

type Props = Omit<ParagraphTextProps, 'typography'> & {
  children: ReactNode
  typography?: ParagraphTextProps['typography']
}

export default function ListHeaderTitleParagraph({
  children,
  typography = 't5',
  fontWeight = 'bold',
  ...rest
}: Props) {
  return (
    <ParagraphTextRenderer typography={typography} fontWeight={fontWeight} as="p" {...rest}>
      {children}
    </ParagraphTextRenderer>
  )
}
