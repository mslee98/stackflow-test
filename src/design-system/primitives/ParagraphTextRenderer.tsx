import { colors } from '../tokens/colors'
import { getTypographyStyle } from '../tokens/typography'
import type { ParagraphTextRendererProps } from '../types/paragraphText'

export default function ParagraphTextRenderer({
  children,
  typography,
  fontWeight = 'regular',
  color,
  as: Component = 'span',
  className = '',
  style,
}: ParagraphTextRendererProps) {
  const typographyStyle = getTypographyStyle(typography, fontWeight)

  return (
    <Component
      className={className}
      style={{
        ...typographyStyle,
        ...(color ? { color: colors[color] } : {}),
        ...style,
      }}
    >
      {children}
    </Component>
  )
}
