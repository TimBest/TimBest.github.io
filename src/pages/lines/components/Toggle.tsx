import * as React from 'react'
import styled from 'styled-components'
import Name from './Name'
import { defaultColor, disabledColor, lightColor } from './Constants'

type Props = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  hue: string
}

const Label = styled.label`
  display: grid;
  cursor: pointer;
`
const Switch = styled.span<{ hue: string; checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  background: transparent;
  border: 2px solid ${({ checked, hue }) => (checked ? lightColor(hue) : disabledColor(hue))};
  box-shadow: ${({ checked, hue }) => (checked ? `0 0 1px ${defaultColor(hue)}` : 'none')};
  transition: background 0.2s;
  vertical-align: middle;
`
const Slider = styled.span<{ hue: string; checked: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '20px' : '2px')};
  width: 18px;
  height: 18px;
  background: ${({ checked, hue }) => (checked ? lightColor(hue) : disabledColor(hue))};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`

const Toggle: React.FC<Props> = ({ label, checked, onChange, hue }) => (
  <Label>
    <Name hue={hue}>{label}</Name>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <HiddenCheckbox
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        tabIndex={0}
        aria-checked={checked}
        role="switch"
      />
      <Switch hue={hue} checked={checked}>
        <Slider hue={hue} checked={checked} />
      </Switch>
    </span>
  </Label>
)

export default Toggle