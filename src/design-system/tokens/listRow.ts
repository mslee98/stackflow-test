export type ListRowVerticalPadding = 'small' | 'medium' | 'large'
export type ListRowArrowType = 'none' | 'right'
export type ListRowVariant = 'plain' | 'card'

export const listRowVariantMap: Record<ListRowVariant, string> = {
  plain: '',
  card: 'rounded-xl border border-grey-200 shadow-sm',
}

export const listRowPaddingMap: Record<ListRowVerticalPadding, string> = {
  small: 'py-2.5 px-4',
  medium: 'py-3.5 px-4',
  large: 'py-4 px-4',
}

export type ListRowTextsType =
  | '2RowTypeA'
  | '3RowTypeA'
  | 'Right1RowTypeE'
  | 'Right2RowTypeB'
