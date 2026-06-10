import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../../components/seo'
import Tiler from './components/Tiler'
import Range from './components/Range'
import ColorPicker from './components/ColorPicker'
import Toggle from './components/Toggle'
import DSEG7Classic from './components/DSEG7Classic-Regular.ttf'
import GeistMono from './components/GeistMono-VariableFont_wght.ttf'

export const backgroundColor = '#1a1a2e';
const colors = ['#57ccd0', '#5bcc93', '#d59a5d', '#ef79a6', '#c284fc']
const CENTER_ON = 200
const CENTER_OFF = 35

const DSEG7ClassicFont = createGlobalStyle`
  @font-face {
    font-family: 'DSEG7Classic';
    src: local('DSEG7Classic'), url(${DSEG7Classic}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
const GeistMonoFont = createGlobalStyle`
  @font-face {
    font-family: "GeistMono";
    src: local('GeistMono'), url(${GeistMono}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
const Wrapper = styled.div`
  font-family: "GeistMono","SF Mono", Monaco, Inconsolata, "Fira Code", "Noto Sans Mono", "Courier New", monospace;
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
  const [color, setColor] = React.useState(() => colors[0])
  const [center, setCenter] = React.useState(true)
  const [rotationGranularity, setRotationGranularity] = React.useState(4)

  const rotationCenter = center ? CENTER_ON : CENTER_OFF

  return (
    <Wrapper>
      <DSEG7ClassicFont />
      <GeistMonoFont />
      <SEO title="lines" />
      <Form>
        <ColorPicker
          colors={colors}
          value={color}
          label="color"
          onChange={setColor}
        />
        <Toggle
          color={color}
          label="center"
          checked={center}
          onChange={setCenter}
        />
        <Range
          color={color}
          label="rotation"
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
