import * as React from 'react'
import styled from 'styled-components'
import Name from './Name'
import { lighten } from 'polished'

type Props = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  color: string
}

const Label = styled.label`
  display: grid;
  margin-right: 1rem;
  cursor: pointer;
`
const Switch = styled.span<{ color: string; checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  background: ${({ checked, color }) => (checked ? color : '#000000')};
  border: 2px solid ${({ checked, color }) => (checked ? lighten(0.1, color) : '#444')};
  box-shadow: ${({ checked, color }) => (checked ? `0 0 2px ${color}` : 'none')};
  border-radius: 22px;
  transition: background 0.2s;
  vertical-align: middle;
`
const Slider = styled.span<{ color: string; checked: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '20px' : '2px')};
  width: 18px;
  height: 18px;
  background: ${({ checked, color }) => (checked ? lighten(0.4, color) : '#333')};
  border-radius: 50%;
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`

const Toggle: React.FC<Props> = ({ label, checked, onChange, color }) => (
  <Label>
    <Name color={color}>{label}</Name>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <HiddenCheckbox
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        tabIndex={0}
        aria-checked={checked}
        role="switch"
      />
      <Switch color={color} checked={checked}>
        <Slider color={color} checked={checked} />
      </Switch>
    </span>
  </Label>
)

export default Toggle