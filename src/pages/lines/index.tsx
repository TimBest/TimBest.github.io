import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../../components/seo'
import Tiler from './components/Tiler'
import Range from './components/Range'
import ColorPicker from './components/ColorPicker'
import Toggle from './components/Toggle'
import SevenSegment from './components/Seven-Segment.ttf'

const colors = ['#55cc94', '#9455cc', '#55c8cc', '#cc558c', '#cc9455']

const SevenSegmentFont = createGlobalStyle`
  @font-face {
    font-family: 'Seven Segment';
    src: local('Seven Segment'), url(${SevenSegment}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
const Wrapper = styled.div`
  font-family: 'Seven Segment', monospace;
  overflow: hidden;
`

const CENTER_ON = 200
const CENTER_OFF = 35

const LinesPage = () => {
  const [color, setColor] = React.useState(
    () => colors[Math.floor(Math.random() * colors.length)]
  )
  const [center, setCenter] = React.useState(true)
  const [rotationGranularity, setRotationGranularity] = React.useState(4)

  const rotationCenter = center ? CENTER_ON : CENTER_OFF

  return (
    <Wrapper>
      <SevenSegmentFont />
      <SEO title="lines" />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: '#1a1a2e',
          padding: '1rem',
        }}
      >
        <ColorPicker colors={colors} value={color} onChange={setColor} />
        <Toggle
          color={color}
          label="Centered"
          checked={center}
          onChange={setCenter}
        />
        <Range
          color={color}
          label="Rotation"
          value={rotationGranularity}
          onChange={setRotationGranularity}
        />
      </div>
      <Tiler rotationCenter={rotationCenter} rotationGranularity={rotationGranularity} color={color} />
    </Wrapper>
  )
}

export default LinesPage
