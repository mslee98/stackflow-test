/**
 * @fileoverview 아이콘 + 라벨 버튼 (하단 탭 등).
 *
 * DSProvider 안에서만 사용하세요. press 시 `tickWeak` 햅틱이 발생합니다.
 *
 * @example
 * ```tsx
 * <IconButton active={isHome} label="홈" onClick={goHome}>
 *   <HomeIcon />
 * </IconButton>
 * ```
 */
import type { ReactNode } from 'react'
import { useDS } from '../provider/DSContext'
import Pressable from '../primitives/Pressable'
import Text from '../primitives/Text'
import { touchScale } from '../tokens/touch'

type IconButtonProps = {
  children: ReactNode
  label?: ReactNode
  active?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
  'aria-current'?: React.AriaAttributes['aria-current']
}

export default function IconButton({
  children,
  label,
  active = false,
  disabled = false,
  className = '',
  onClick,
  'aria-current': ariaCurrent,
}: IconButtonProps) {
  const { generateHaptic } = useDS()

  return (
    <Pressable
      role="button"
      aria-current={ariaCurrent}
      tabIndex={disabled ? -1 : 0}
      scale={touchScale.compact}
      disabled={disabled}
      className={`h-full w-full overflow-hidden ${disabled ? 'opacity-50' : 'cursor-pointer'} ${className}`}
      onPressStart={() => generateHaptic('tickWeak')}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(event) => {
        if (disabled) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-0.5">
        {children}
        {label &&
          (typeof label === 'string' ? (
            <Text
              typography="st13"
              fontWeight="medium"
              color={active ? 'blue500' : 'grey400'}
              as="span"
            >
              {label}
            </Text>
          ) : (
            label
          ))}
      </div>
    </Pressable>
  )
}
