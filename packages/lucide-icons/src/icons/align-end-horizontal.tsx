import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect width="6" height="16" x="4" y="2" rx="2" stroke={`${color}`} />
      <Rect width="6" height="9" x="14" y="9" rx="2" stroke={`${color}`} />
      <Path d="M22 22H2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'AlignEndHorizontal'

export const AlignEndHorizontal = memo<IconProps>(themed(Icon))
