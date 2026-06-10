import Icon from '../../icons/Icon'
import type { IconName } from '../../icons/registry'
import type { ColorToken } from '../../tokens/colors'
import { frameShapeMap, type FrameShape } from '../../tokens/asset'
import AssetFrame from './AssetFrame'

export type AssetIconProps = {
  name: IconName | (string & {})
  frameShape?: FrameShape
  backgroundColor?: ColorToken
  color?: ColorToken
  acc?: React.ReactNode
  className?: string
}

export default function AssetIcon({
  name,
  frameShape = 'CircleSmall',
  backgroundColor,
  color = 'grey600',
  acc,
  className = '',
}: AssetIconProps) {
  const iconSize = frameShapeMap[frameShape].iconSize

  return (
    <AssetFrame
      frameShape={frameShape}
      backgroundColor={backgroundColor}
      acc={acc}
      className={className}
    >
      <Icon name={name} size={iconSize} color={color} />
    </AssetFrame>
  )
}
