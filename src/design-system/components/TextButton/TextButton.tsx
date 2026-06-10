/**
 * @fileoverview TDS TextButton — native button + ParagraphText + press dimmer + scale.
 */
import { motion, useAnimationControls } from 'framer-motion'
import { useCallback, type CSSProperties, type ReactNode } from 'react'
import { useTouchEffect } from '../../hooks/useTouchEffect'
import Icon from '../../icons/Icon'
import { ICON } from '../../icons/registry'
import ParagraphTextRenderer from '../../primitives/ParagraphTextRenderer'
import { transition } from '../../tokens/motion'
import type { ColorToken } from '../../tokens/colors'
import {
  getParagraphLinkMetrics,
  getTextButtonWrapperStyle,
  TEXT_BUTTON_ARROW_INLINE_PADDING_BOTTOM,
  TEXT_BUTTON_DISABLED_OPACITY,
  TEXT_BUTTON_PRESS_DIMMER_COLOR,
  textButtonArrowIconSizeMap,
  textButtonFontWeightMap,
  textButtonTypographyMap,
  type TextButtonArrowPlacement,
  type TextButtonSize,
  type TextButtonVariant,
} from '../../tokens/textButton'
import { touchScale } from '../../tokens/touch'
import type { ParagraphTextProps } from '../../types/paragraphText'
import type { FontWeightToken } from '../../tokens/typography'

export type TextButtonProps = {
  children: ReactNode
  size: TextButtonSize
  variant?: TextButtonVariant
  arrowPlacement?: TextButtonArrowPlacement
  color?: ColorToken
  disabled?: boolean
  className?: string
  onClick?: () => void
} & Omit<ParagraphTextProps, 'typography' | 'fontWeight'> & {
    fontWeight?: FontWeightToken
  }

type TextButtonContentProps = {
  children: ReactNode
  typography: ParagraphTextProps['typography']
  fontWeight: FontWeightToken
  color: ColorToken
  variant: TextButtonVariant
  arrowPlacement: TextButtonArrowPlacement
  size: TextButtonSize
  textStyle: CSSProperties
  rest: Omit<ParagraphTextProps, 'typography' | 'fontWeight' | 'color'>
}

function TextButtonContent({
  children,
  typography,
  fontWeight,
  color,
  variant,
  arrowPlacement,
  size,
  textStyle,
  rest,
}: TextButtonContentProps) {
  const arrowSize = textButtonArrowIconSizeMap[size]

  if (variant !== 'arrow') {
    return (
      <ParagraphTextRenderer
        typography={typography}
        fontWeight={fontWeight}
        color={color}
        as="span"
        style={textStyle}
        {...rest}
      >
        {children}
      </ParagraphTextRenderer>
    )
  }

  if (arrowPlacement === 'block') {
    return (
      <>
        <ParagraphTextRenderer
          typography={typography}
          fontWeight={fontWeight}
          color={color}
          as="span"
          style={textStyle}
          {...rest}
        >
          {children}
        </ParagraphTextRenderer>
        <Icon
          name={ICON.ARROW_RIGHTWARDS}
          size={arrowSize}
          color={color}
          className="shrink-0"
          aria-hidden
        />
      </>
    )
  }

  return (
    <ParagraphTextRenderer
      typography={typography}
      fontWeight={fontWeight}
      color={color}
      as="span"
      className="inline-flex items-center"
      style={textStyle}
      {...rest}
    >
      {children}
      <Icon
        name={ICON.ARROW_RIGHTWARDS}
        size={arrowSize}
        color={color}
        className="shrink-0"
        aria-hidden
        style={{ paddingBottom: TEXT_BUTTON_ARROW_INLINE_PADDING_BOTTOM }}
      />
    </ParagraphTextRenderer>
  )
}

export default function TextButton({
  children,
  size,
  variant = 'clear',
  arrowPlacement = 'block',
  color = 'blue500',
  fontWeight,
  disabled = false,
  className = '',
  onClick,
  style,
  ...rest
}: TextButtonProps) {
  const controls = useAnimationControls()
  const typography = textButtonTypographyMap[size]
  const resolvedFontWeight = fontWeight ?? textButtonFontWeightMap[size]
  const linkMetrics = getParagraphLinkMetrics(typography)
  const wrapperMetrics = getTextButtonWrapperStyle(linkMetrics)

  const animatePressed = useCallback(() => {
    controls.start({
      scale: touchScale.default,
      transition: transition.easeInOut100,
    })
  }, [controls])

  const animateReleased = useCallback(() => {
    controls.start({
      scale: 1,
      transition: transition.easeInOut100,
    })
  }, [controls])

  const { pressed, touchEffectProps } = useTouchEffect({
    disabled,
    onPressStart: animatePressed,
    onPressEnd: animateReleased,
    onPressCancel: animateReleased,
  })

  const decorationThickness = ['semibold', 'bold'].includes(resolvedFontWeight)
    ? linkMetrics.boldThickness
    : linkMetrics.lightThickness

  const textStyle: CSSProperties = {
    textDecoration: variant === 'underline' ? 'underline' : 'none',
    textDecorationThickness: decorationThickness,
    textUnderlineOffset: 2,
  }

  const buttonStyle: CSSProperties = {
    marginTop: wrapperMetrics.marginTop,
    marginBottom: wrapperMetrics.marginBottom,
    marginLeft: wrapperMetrics.marginLeft,
    marginRight: wrapperMetrics.marginRight,
    opacity: disabled ? TEXT_BUTTON_DISABLED_OPACITY : 1,
    ...style,
  }

  const contentWrapperStyle: CSSProperties = {
    paddingTop: wrapperMetrics.paddingTop,
    paddingBottom: wrapperMetrics.paddingBottom,
    paddingLeft: wrapperMetrics.paddingLeft,
    paddingRight: wrapperMetrics.paddingRight,
    borderRadius: wrapperMetrics.borderRadius,
  }

  return (
    <motion.button
      type="button"
      disabled={disabled}
      animate={controls}
      className={`inline-flex appearance-none items-center border-0 bg-transparent p-0 text-left font-[inherit] ${disabled ? '' : 'cursor-pointer'} ${className}`}
      style={{
        willChange: 'scale',
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
        ...buttonStyle,
      }}
      onClick={disabled ? undefined : onClick}
      {...touchEffectProps}
    >
      <span
        className="relative inline-flex items-center gap-0.5"
        style={contentWrapperStyle}
      >
        {!disabled && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              borderRadius: 'inherit',
              backgroundColor: TEXT_BUTTON_PRESS_DIMMER_COLOR,
            }}
            initial={false}
            animate={{
              opacity: pressed ? 1 : 0,
            }}
            transition={transition.easeInOut100}
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-0.5">
          <TextButtonContent
            typography={typography}
            fontWeight={resolvedFontWeight}
            color={color}
            variant={variant}
            arrowPlacement={arrowPlacement}
            size={size}
            textStyle={textStyle}
            rest={rest}
          >
            {children}
          </TextButtonContent>
        </span>
      </span>
    </motion.button>
  )
}
