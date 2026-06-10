import * as React from 'react'
import styled from 'styled-components'

const Display = styled.span`
  font-family: "DSEG7Classic", "Courier New", Courier, Monaco, monospace;
  font-size: x-small;
`
const SevenSegmentDisplay: React.FC<{
  length: number
  value: number
}> = ({ length, value }) => {
  return (
    <Display>{String(value).padStart(length, '0')}</Display>
  )
}

export default SevenSegmentDisplay
