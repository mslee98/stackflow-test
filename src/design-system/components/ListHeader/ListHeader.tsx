/**
 * @fileoverview TDS ListHeader — 섹션 헤더 Compound.
 */
import type { ComponentProps, ReactNode } from 'react'
import ListHeaderDescriptionParagraph from './ListHeaderDescriptionParagraph'
import ListHeaderRightArrow from './ListHeaderRightArrow'
import ListHeaderTitleParagraph from './ListHeaderTitleParagraph'
import TextButton from '../TextButton/TextButton'

export type ListHeaderProps = {
  title: ReactNode
  description?: ReactNode
  right?: ReactNode
  className?: string
}

function ListHeaderRoot({ title, description, right, className = '' }: ListHeaderProps) {
  return (
    <div className={`flex items-center justify-between gap-3 px-4 py-3 ${className}`}>
      <div className="min-w-0 flex-1">
        {title}
        {description && <div className="mt-0.5">{description}</div>}
      </div>
      {right && <div className="flex shrink-0 items-center gap-1">{right}</div>}
    </div>
  )
}

function ListHeaderTitleTextButton(props: ComponentProps<typeof TextButton>) {
  return <TextButton {...props} />
}

const ListHeader = Object.assign(ListHeaderRoot, {
  TitleParagraph: ListHeaderTitleParagraph,
  DescriptionParagraph: ListHeaderDescriptionParagraph,
  RightArrow: ListHeaderRightArrow,
  TitleTextButton: ListHeaderTitleTextButton,
})

export default ListHeader
