import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../../components/seo'
import Tiler from './components/Tiler'
import Range from './components/Range'
import ColorPicker from './components/ColorPicker'
import Toggle from './components/Toggle'
import SevenSegment from './components/Seven-Segment.ttf'

export const backgroundColor = '#1a1a2e';
const colors = ['#55cc94', '#9455cc', '#55c8cc', '#cc558c', '#cc9455']
const CENTER_ON = 200
const CENTER_OFF = 35

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
const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${backgroundColor};
  padding: 1rem;
  @media (max-width: 600px) {
    display: grid;
    gap: 1rem;
  }
`

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
      <Form>
        <ColorPicker colors={colors} value={color} onChange={setColor} />
        <Toggle
          color={color}
          label="Center"
          checked={center}
          onChange={setCenter}
        />
        <Range
          color={color}
          label="Rotation"
          value={rotationGranularity}
          onChange={setRotationGranularity}
        />
      </Form>
      <Tiler
        rotationCenter={rotationCenter}
        rotationGranularity={rotationGranularity}
        color={color}
      />
    </Wrapper>
  )
}

export default LinesPage
