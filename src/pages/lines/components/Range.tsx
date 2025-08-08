import * as React from 'react'
import styled from 'styled-components'
import Name from './Name'
import { lighten } from 'polished'

const SEGMENT_VALUES = [1, 2, 4, 8, 16, 45, 90, 180, 360]
const SEGMENT_WIDTH = 11;
const SEGMENT_GAP = 3;
const WIDTH = `${SEGMENT_VALUES.length * SEGMENT_WIDTH + (SEGMENT_VALUES.length - 1) * SEGMENT_GAP}px`;

const SegmentBar = styled.div`
    display: flex;
    align-items: center;
    gap: ${SEGMENT_GAP}px;
`
const Segment = styled.span<{ color: string; active: boolean }>`
  display: inline-block;
  height: 20px;
  min-width: ${SEGMENT_WIDTH}px;
  background: ${({ color, active }) => (active ? `${lighten(0.2, color)}` : '#444')};
`
const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
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
    <label>
      <div>
              <Name color={color}>
        {label}:{value}
      </Name>
      </div>
      <div>
      <Wrapper>
        <SegmentBar>
          {SEGMENT_VALUES.map(v => (
            <Segment key={v} color={color} active={v <= value}/>
          ))}
        </SegmentBar>
        <Input
          type="range"
          value={SEGMENT_VALUES.indexOf(value)}
          min={0}
          max={SEGMENT_VALUES.length - 1}
          onChange={setValue}
          step={1}
        />
      </Wrapper>
      </div>

    </label>
  )
}

export default Range
