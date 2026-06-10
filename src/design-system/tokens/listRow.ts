export type ListRowVerticalPadding = 'small' | 'medium' | 'large'
export type ListRowArrowType = 'none' | 'right'

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
