import { motion } from 'framer-motion'
import { transition } from '../tokens/motion'
import { PRESS_DIMMER_OPACITY } from '../tokens/touch'

type TouchDimmerProps = {
  pressed: boolean
  className?: string
}

/** TDS interaction dimmer — black overlay, opacity 0 → 0.15, 100ms ease-in-out */
export default function TouchDimmer({
  pressed,
  className = '',
}: TouchDimmerProps) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] bg-black ${className}`}
      initial={false}
      animate={{ opacity: pressed ? PRESS_DIMMER_OPACITY : 0 }}
      transition={transition.easeInOut100}
    />
  )
}
