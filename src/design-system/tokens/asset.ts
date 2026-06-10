export type FrameShape =
  | 'CircleXSmall'
  | 'CircleSmall'
  | 'CircleLarge'
  | 'Circle2XLarge'
  | 'SquircleMedium'

export const frameShapeMap: Record<
  FrameShape,
  { size: number; borderRadius: string; iconSize: number }
> = {
  CircleXSmall: { size: 24, borderRadius: '9999px', iconSize: 14 },
  CircleSmall: { size: 30, borderRadius: '9999px', iconSize: 18 },
  CircleLarge: { size: 40, borderRadius: '9999px', iconSize: 24 },
  Circle2XLarge: { size: 60, borderRadius: '9999px', iconSize: 32 },
  SquircleMedium: { size: 36, borderRadius: '10px', iconSize: 20 },
}
