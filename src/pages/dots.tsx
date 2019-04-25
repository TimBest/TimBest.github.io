import React from 'react'
import SEO from '../components/seo'
import Dots from '../components/dots'
import ColorPicker from '../components/forms/colorPicker'
import PaddingSliders from '../components/forms/paddingSliders'
import OffsetSlider from '../components/forms/offsetSlider'
import '../images/dots.css'


interface Props {

}

interface State {
  colorPallete: string[];
  paddingX: number;
  paddingY: number;
  maxOffset: number
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
      ],
      paddingX: 35,
      paddingY: 3,
      maxOffset: 6,
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

  onChangePaddingX(paddingX: number) {
    this.setState({paddingX});
  }

  onChangePaddingY(paddingY: number) {
    this.setState({paddingY});
  }

  onMaxOffsetChange(maxOffset: number) {
    this.setState({maxOffset});
  }

  render() {
    return (
      <div className="dots">
        <SEO title="dots"/>
        <div style={{padding: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          <OffsetSlider
            maxOffset={this.state.maxOffset}
            onMaxOffsetChange={this.onMaxOffsetChange.bind(this)}
          />
          <ColorPicker
            options={this.colorPalletesOptions}
            selected={this.state.colorPallete}
            onSelect={this.onColorSelect.bind(this)}
            onUnselect={this.onColorUnselect.bind(this)}
          />
          <PaddingSliders
            paddingX={this.state.paddingX}
            paddingY={this.state.paddingY}
            onXChange={this.onChangePaddingX.bind(this)}
            onYChange={this.onChangePaddingY.bind(this)}
          />
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          <Dots
            paddingX={this.state.paddingX}
            paddingY={this.state.paddingY}
            colors={this.state.colorPallete}
            maxOffset={this.state.maxOffset}
          />
        </div>
      </div>
    );
  }
}

export default DotsPage
