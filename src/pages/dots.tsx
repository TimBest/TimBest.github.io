import React from 'react'
import SEO from '../components/seo'
import Dots from '../components/dots'
import ColorPicker from '../components/forms/colorPicker'

import '../images/dots.css'


interface Props {

}

interface State {
  colorPallete: string[],
}

class DotsPage extends React.Component<Props, State> {
  colorPalletesOptions = [
    '#6b502c', '#d6ae37', '#d3841f',
    '#556f3f', '#363636', '#c25247',
    '#203593',  '#6f238b','#b0437c',
  ]

  constructor(props: Props) {
    super(props)
    this.state = {
      colorPallete: [
        this.colorPalletesOptions[2],
        this.colorPalletesOptions[3],
        this.colorPalletesOptions[5]
      ]
    }
  }

  onColorSelect(color: string) {
    const colorPallete = Array.from(this.state.colorPallete);
    colorPallete.push(color);
    this.setState({colorPallete});
  }

  onColorUnselect(color: string) {
    const colorPallete = Array.from(this.state.colorPallete);
    const index = colorPallete.indexOf(color);
    if (index > -1) {
      colorPallete.splice(index, 1);
      this.setState({colorPallete});
    }
  }

  render() {
    return (
      <div className="dots">
        <SEO title="dots"/>
        <div style={{padding: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          <ColorPicker
            options={this.colorPalletesOptions}
            selected={this.state.colorPallete}
            onSelect={this.onColorSelect.bind(this)}
            onUnselect={this.onColorUnselect.bind(this)}
          />
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          <Dots colors={this.state.colorPallete}/>
        </div>
      </div>
    );
  }
}

export default DotsPage
