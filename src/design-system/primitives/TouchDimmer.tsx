import { motion } from 'framer-motion'
import { spring } from '../tokens/motion'

export type DimmerVariant = 'radial' | 'grey'

type TouchDimmerProps = {
  pressed: boolean
  variant?: DimmerVariant
  className?: string
}

export default function TouchDimmer({
  pressed,
  variant = 'grey',
  className = '',
}: TouchDimmerProps) {
  const background =
    variant === 'radial'
      ? 'var(--press-dimmer-radial)'
      : 'var(--press-dimmer-color)'

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}
      initial={false}
      animate={{ opacity: pressed ? 1 : 0 }}
      transition={pressed ? spring.rapid : spring.quick}
      style={{ background }}
    />
  )
}
