/**
 * @fileoverview TDS ListRow v2 — 3-slot 목록 행 Compound.
 */
import type { ReactNode } from 'react'
import Icon from '../../icons/Icon'
import { ICON } from '../../icons/registry'
import Pressable from '../../primitives/Pressable'
import {
  listRowPaddingMap,
  listRowVariantMap,
  type ListRowArrowType,
  type ListRowVariant,
  type ListRowVerticalPadding,
} from '../../tokens/listRow'
import ListRowTexts from './ListRowTexts'

export type ListRowProps = {
  left?: ReactNode
  contents?: ReactNode
  right?: ReactNode
  arrowType?: ListRowArrowType
  verticalPadding?: ListRowVerticalPadding
  variant?: ListRowVariant
  withTouchEffect?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

function ListRowContent({
  left,
  contents,
  right,
  arrowType,
}: Pick<ListRowProps, 'left' | 'contents' | 'right' | 'arrowType'>) {
  return (
    <div className="flex w-full items-center gap-3">
      {left && <div className="shrink-0">{left}</div>}
      {contents && <div className="min-w-0 flex-1">{contents}</div>}
      {right && <div className="shrink-0">{right}</div>}
      {arrowType === 'right' && (
        <Icon name={ICON.ARROW_RIGHT} size={20} color="grey400" />
      )}
    </div>
  )
}

function ListRowRoot({
  left,
  contents,
  right,
  arrowType = 'none',
  verticalPadding = 'medium',
  variant = 'plain',
  withTouchEffect = true,
  disabled = false,
  className = '',
  onClick,
}: ListRowProps) {
  const paddingClass = listRowPaddingMap[verticalPadding]
  const variantClass = listRowVariantMap[variant]
  const baseClass = `w-full overflow-hidden bg-white text-left ${paddingClass} ${variantClass} ${className}`

  if (!onClick) {
    return (
      <div className={baseClass}>
        <ListRowContent
          left={left}
          contents={contents}
          right={right}
          arrowType={arrowType}
        />
      </div>
    )
  }

  return (
    <Pressable
      role="button"
      tabIndex={disabled ? -1 : 0}
      withTouchEffect={withTouchEffect && !disabled}
      disabled={disabled}
      className={`${baseClass} ${disabled ? 'opacity-50' : 'cursor-pointer'}`}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(event) => {
        if (disabled) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      <ListRowContent
        left={left}
        contents={contents}
        right={right}
        arrowType={arrowType}
      />
    </Pressable>
  )
}

const ListRow = Object.assign(ListRowRoot, {
  Texts: ListRowTexts,
})

export default ListRow
