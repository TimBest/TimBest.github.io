import * as React from 'react'
import styled from 'styled-components'
import Name from './Name'

type Props = {
  colors: string[]
  value: string
  onChange: (color: string) => void
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  margin: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

const ColorCircle = styled.span<{ selected: boolean; color: string }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${({ color }) => color};
  border-radius: 3px;
  border: ${({ selected }) => (selected ? '2px solid #fff' : '2px solid #444')};
  box-shadow: ${({ selected, color }) => (selected ? `0 0 5px ${color}` : 'none')};
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
  colors,
  value,
  onChange,
}) => (
  <>
    <Name color={value}>Color</Name>
    {colors.map((c) => (
      <Label key={c}>
        <HiddenRadio
          name="color-radio"
          value={c}
          checked={value === c}
          onChange={() => onChange(c)}
        />
        <ColorCircle
          color={c}
          selected={value === c}
          onClick={() => onChange(c)}
        >
          <OverlayRadio
            name="color-radio"
            value={c}
            checked={value === c}
          />
        </ColorCircle>
      </Label>
    ))}
  </>
)
export default ColorPicker