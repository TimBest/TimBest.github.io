import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../../components/seo'
import Tiler from './components/Tiler'
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
`

const CyberpunkRange: React.FC<{
  label: string
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (v: number) => void
}> = ({ label, value, min, max, step, onChange }) => (
  <label
    style={{
      display: 'flex',
      flexDirection: 'column',
      color: '#00fff7',
      marginRight: '1rem',
      textShadow: '0 0 4px #00fff7, 0 0 8px #ff00ea',
    }}
  >
    <span style={{ marginBottom: 4 }}>
      {label}: <span style={{ color: '#fff' }}>{value}</span>
    </span>
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={e => onChange(Number(e.target.value))}
      style={{
        accentColor: '#00fff7',
        background: '#22223b',
        borderRadius: 6,
        height: '4px',
        marginBottom: '0.5rem',
      }}
    />
  </label>
)

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
        <CyberpunkRange
          label="Rotation Granularity"
          value={rotationGranularity}
          min={1}
          max={360}
          onChange={setRotationGranularity}
        />
      </div>
      <Tiler rotationCenter={rotationCenter} rotationGranularity={rotationGranularity} color={color} />
      <Tiler rotationCenter={CENTER_ON} rotationGranularity={4} color={color} />
      <Tiler rotationCenter={CENTER_OFF} rotationGranularity={4} color={color} />
      <Tiler rotationCenter={CENTER_OFF} rotationGranularity={360} color={color} />
    </Wrapper>
  )
}

export default LinesPage
