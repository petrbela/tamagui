import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
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

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"
        stroke={color}
      />
      <Polyline points="14 2 14 8 20 8" stroke={color} />
      <_Circle cx="10" cy="20" r="2" stroke={color} />
      <Path d="M10 7V6" stroke={color} />
      <Path d="M10 12v-1" stroke={color} />
      <Path d="M10 18v-2" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'FileArchive'

export const FileArchive = memo<IconProps>(themed(Icon))
