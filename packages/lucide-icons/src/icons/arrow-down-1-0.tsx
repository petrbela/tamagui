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
      <Path d="m3 16 4 4 4-4" stroke={`${color}`} />
      <Path d="M7 20V4" stroke={`${color}`} />
      <Path d="M17 10V4h-2" stroke={`${color}`} />
      <Path d="M15 10h4" stroke={`${color}`} />
      <Rect x="15" y="14" width="4" height="6" ry="2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ArrowDown10'

export const ArrowDown10 = memo<IconProps>(themed(Icon))
