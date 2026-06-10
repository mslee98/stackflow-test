/**
 * @fileoverview TDS Top — 페이지 상단 Compound.
 */
import type { ReactNode } from 'react'
import TopSubtitleParagraph from './TopSubtitleParagraph'
import TopTitleParagraph from './TopTitleParagraph'

export type TopProps = {
  title: ReactNode
  subtitleTop?: ReactNode
  subtitleBottom?: ReactNode
  lowerButton?: ReactNode
  rightButton?: ReactNode
  className?: string
}

function TopRoot({
  title,
  subtitleTop,
  subtitleBottom,
  lowerButton,
  rightButton,
  className = '',
}: TopProps) {
  return (
    <header className={`px-4 pt-6 pb-4 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {subtitleTop && <div className="mb-1">{subtitleTop}</div>}
          {title}
          {subtitleBottom && <div className="mt-2">{subtitleBottom}</div>}
        </div>
        {rightButton && <div className="shrink-0">{rightButton}</div>}
      </div>
      {lowerButton && <div className="mt-4">{lowerButton}</div>}
    </header>
  )
}

const Top = Object.assign(TopRoot, {
  TitleParagraph: TopTitleParagraph,
  SubtitleParagraph: TopSubtitleParagraph,
})

export default Top
