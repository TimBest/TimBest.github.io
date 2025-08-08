import * as React from 'react'
import styled from 'styled-components'
import Name from './Name'
import { lighten } from 'polished'

const WIDTH = "70px";
const TOP_MARGIN = "5px";

const Label = styled.label`
  width: ${WIDTH};
`
const Segment = styled.span<{ color: string; active: boolean }>`
  margin-top: ${TOP_MARGIN};
  display: inline-block;
  height: 20px;
  width: 11px;
  margin-right: 3px;
  background: ${({ color, active }) => (active ? `${lighten(0.2, color)}` : '#444')};

`
const Input = styled.input`
  position: absolute;
  left: 0;
  top: ${TOP_MARGIN};
  border-radius: 6px;
  height: 20px;
  margin: 0;
  width: ${WIDTH};
  -webkit-appearance: none;
  background: transparent;
  &::-webkit-slider-runnable-track {
    background: transparent;
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    height: 20px;
    width: 11px;
  }
    &::-moz-range-track {
            background: transparent;
            height: 100%;
        }
           &:: -moz-range-thumb {
            background: transparent; /* Changed to fully transparent */
            border: none;
            height: 20px;
            width: 11px;
        }
            &::-ms-track {
            background: transparent;
            border-color: transparent;
            color: transparent;
            height: 100%;
        }
`
const Wrapper = styled.div`
  position: relative;
`

const SEGMENT_VALUES = [1, 2, 4, 8, 360]

const Range: React.FC<{
  color: string
  label: string
  value: number
  onChange: (v: number) => void
}> = ({ color, label, value, onChange }) => {
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    onChange(SEGMENT_VALUES[v])
  }

  return (
    <Label>
      <Name color={color}>
        {label}:{value}
      </Name>
      <Wrapper>
        {SEGMENT_VALUES.map(v => (
          <Segment key={v} color={color} active={v <= value}/>
        ))}
        <Input
          type="range"
          value={SEGMENT_VALUES.indexOf(value)}
          min={0}
          max={SEGMENT_VALUES.length - 1}
          onChange={setValue}
          step={1}
        />
      </Wrapper>
    </Label>
  )
}

export default Range
