import type { ReactNode } from 'react'
import { colors, type ColorToken } from '../../tokens/colors'
import { frameShapeMap, type FrameShape } from '../../tokens/asset'

export type AssetFrameProps = {
  children: ReactNode
  frameShape?: FrameShape
  backgroundColor?: ColorToken
  acc?: ReactNode
  className?: string
}

export default function AssetFrame({
  children,
  frameShape = 'CircleSmall',
  backgroundColor,
  acc,
  className = '',
}: AssetFrameProps) {
  const shape = frameShapeMap[frameShape]

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: shape.size,
        height: shape.size,
        borderRadius: shape.borderRadius,
        backgroundColor: backgroundColor ? colors[backgroundColor] : undefined,
      }}
    >
      {children}
      {acc && (
        <div className="absolute -top-0.5 -right-0.5">{acc}</div>
      )}
    </div>
  )
}
