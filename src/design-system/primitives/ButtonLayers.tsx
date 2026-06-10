import type { ButtonColor, ButtonVariant } from '../tokens/button'
import { buttonLayerMap } from '../tokens/button'

type ButtonLayersProps = {
  color: ButtonColor
  variant: ButtonVariant
}

/** Button 배경 레이어 — 단색 fill만 사용 */
export default function ButtonLayers({ color, variant }: ButtonLayersProps) {
  const layer = buttonLayerMap[color][variant]

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        backgroundColor: layer.background,
        border: layer.border ? `1px solid ${layer.border}` : undefined,
      }}
    />
  )
}
