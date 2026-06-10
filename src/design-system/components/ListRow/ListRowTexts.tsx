import type { ReactNode } from 'react'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import type { ParagraphTextProps } from '../../types/paragraphText'
import type { ListRowTextsType } from '../../tokens/listRow'
import type { TypographyToken } from '../../tokens/typography'

type RowTextProps = Partial<Omit<ParagraphTextProps, 'typography'>> & {
  typography?: TypographyToken
}

export type ListRowTextsProps = {
  type: ListRowTextsType
  top?: ReactNode
  middle?: ReactNode
  bottom?: ReactNode
  topProps?: RowTextProps
  middleProps?: RowTextProps
  bottomProps?: RowTextProps
  className?: string
}

const defaultRowTypography: Record<string, TypographyToken> = {
  top: 'st10',
  middle: 'st10',
  bottom: 't6',
}

function renderRow(
  content: ReactNode | undefined,
  props: RowTextProps | undefined,
  defaultTypo: TypographyToken,
  align: 'left' | 'right' = 'left',
) {
  if (content === undefined || content === null) return null

  if (typeof content === 'string') {
    return (
      <ParagraphTextRenderer
        typography={props?.typography ?? defaultTypo}
        fontWeight={props?.fontWeight ?? 'regular'}
        color={props?.color}
        className={`${align === 'right' ? 'text-right' : ''} ${props?.className ?? ''}`}
        style={props?.style}
        as="p"
      >
        {content}
      </ParagraphTextRenderer>
    )
  }

  return content
}

export default function ListRowTexts({
  type,
  top,
  middle,
  bottom,
  topProps,
  middleProps,
  bottomProps,
  className = '',
}: ListRowTextsProps) {
  const isRight = type === 'Right1RowTypeE' || type === 'Right2RowTypeB'
  const align = isRight ? 'right' : 'left'

  return (
    <div className={`flex min-w-0 flex-col gap-0.5 ${isRight ? 'items-end text-right' : ''} ${className}`}>
      {renderRow(top, topProps, defaultRowTypography.top, align)}
      {type === '3RowTypeA' &&
        renderRow(middle, middleProps, defaultRowTypography.middle, align)}
      {renderRow(bottom, bottomProps, defaultRowTypography.bottom, align)}
    </div>
  )
}
