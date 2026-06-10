/**
 * @fileoverview 아이콘 Public API.
 */
import { createElement, type ComponentType, type SVGProps } from 'react'
import Icon from './Icon'
import {
  ICON,
  fetchIconSvg,
  fillIconManifest,
  getIconSvg,
  hasIcon,
  monoIconManifest,
  resolveIconSource,
} from './registry'

export type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>

export type {
  IconName,
  MonoIconName,
  FillIconName,
  IconSource,
} from './registry'

export {
  Icon,
  ICON,
  monoIconManifest,
  fillIconManifest,
  fetchIconSvg,
  getIconSvg,
  hasIcon,
  resolveIconSource,
}

/** @deprecated `Icon` 컴포넌트 사용 권장 */
export function getIcon(name: string): IconComponent {
  return function IconWrapper({
    width = 24,
    height = 24,
    style,
    className,
    ...rest
  }: SVGProps<SVGSVGElement>) {
    const size = typeof width === 'number' ? width : 24
    return createElement(Icon, {
      name,
      size,
      className,
      style: { ...style, height, width },
      'aria-hidden':
        rest['aria-hidden'] === true ||
        rest['aria-hidden'] === 'true' ||
        rest['aria-hidden'] === undefined,
    })
  }
}

/** @deprecated monoIconManifest 사용 */
export const iconRegistry = monoIconManifest
