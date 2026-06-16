import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../../components/seo'
import Tiler from './components/Tiler'
import Range from './components/Range'
import ColorPicker from './components/ColorPicker'
import Toggle from './components/Toggle'
import DSEG7Classic from './components/DSEG7Classic-Regular.ttf'
import GeistMono from './components/GeistMono-VariableFont_wght.ttf'
import { HUES } from './components/Constants'

export const backgroundColor = '#1a1a2e';
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
  const [hue, setHue] = React.useState(() => HUES[0])
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
          value={hue}
          label="Color"
          onChange={setHue}
        />
        <Toggle
          hue={hue}
          label="center"
          checked={center}
          onChange={setCenter}
        />
        <Range
          hue={hue}
          label="rotation"
          value={rotationGranularity}
          onChange={setRotationGranularity}
        />
      </Form>
      <Tiler
        rotationCenter={rotationCenter}
        rotationGranularity={rotationGranularity}
        hue={hue}
      />
    </Wrapper>
  )
}

export default LinesPage
