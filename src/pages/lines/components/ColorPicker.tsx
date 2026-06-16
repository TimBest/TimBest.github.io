import * as React from 'react'
import styled from 'styled-components'
import Name from './Name';
import { defaultColor, disabledColor, HUES } from './Constants';

type Props = {
  value: string
  label: string
  onChange: (hue: string) => void
}

const Wrapper = styled.div`
  display: inline-grid;
`
const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
const Label = styled.label`
  display: flex;
  align-items: center;
`
const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  margin: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`
const ColorCircle = styled.span<{ selected: boolean; hue: string }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${({ selected, hue }) => (selected ? defaultColor(hue) : disabledColor(hue))};
  border: 1px solid ${({ selected, hue }) => (selected ? defaultColor(hue) : '#333')};
  box-shadow: ${({ selected, hue }) => (selected ? `0 0 1px ${defaultColor(hue)}` : 'none')};
  position: relative;
  cursor: pointer;
`
const OverlayRadio = styled.input.attrs({ type: 'radio', readOnly: true })`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`

const ColorPicker: React.FC<Props> = ({
  value,
  label,
  onChange,
}) => (
  <Wrapper>
    <Name hue={value}>{label}</Name>
    <RadioGroup>
      {HUES.map((h) => (
        <Label key={h}>
          <HiddenRadio
            name="color-radio"
            value={h}
            checked={value === h}
            onChange={() => onChange(h)}
          />
          <ColorCircle
            hue={h}
            selected={value === h}
            onClick={() => onChange(h)}
          >
            <OverlayRadio
              name="color-radio"
              value={h}
              checked={value === h}
            />
          </ColorCircle>
        </Label>
      ))}
    </RadioGroup>

  </Wrapper>
)
export default ColorPicker