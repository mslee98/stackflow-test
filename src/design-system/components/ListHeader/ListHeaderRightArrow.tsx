import type { ReactNode } from 'react'
import TextButton from '../TextButton/TextButton'
import type { ColorToken } from '../../tokens/colors'
import type { TextButtonSize } from '../../tokens/textButton'

type Props = {
  children: ReactNode
  size?: TextButtonSize
  color?: ColorToken
  onClick?: () => void
  className?: string
}

export default function ListHeaderRightArrow({
  children,
  size = 'medium',
  color = 'grey600',
  onClick,
  className = '',
}: Props) {
  return (
    <TextButton
      size={size}
      variant="arrow"
      color={color}
      onClick={onClick}
      className={className}
    >
      {children}
    </TextButton>
  )
}
