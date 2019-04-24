import React from 'react'
import styled from 'styled-components'


const Selector = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`

const Color = styled.button`
  background-color: ${props => props.color};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
`

interface Props {
  options: string[];
  selected: string[];
  onSelect: (color: string) => void;
  onUnselect: (unselected: string) => void;
}

// PRESETS???
// ['#6f238b', '#d6ae37', '#556f3f'],
// ['#203593', '#d6ae37', '#363636'],
// ['#c25247', '#d3841f', '#556f3f'],
// ['#6b502c' ,'#d3841f', '#b0437c'],

class ColorPicker extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  onClick(
    selected: boolean,
    color: string,
    _event: React.MouseEvent<HTMLButtonElement>
  ): void {
    if (selected) {
      this.props.onUnselect(color)
    } else {
      this.props.onSelect(color)
    }
  }

  renderColor(color: string) {
    const isSelected = this.props.selected.includes(color)
    return (
      <Color
        key={color}
        color={color}
        selected={isSelected}
        onClick={this.onClick.bind(this, isSelected, color)}
      />
    )
  }

  render() {
    return (
      <Selector>
        {this.props.options.map(this.renderColor.bind(this))}
      </Selector>
    );
  }
}

export default ColorPicker
