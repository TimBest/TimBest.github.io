import React from 'react'
import SEO from '../components/seo'
import Dots from '../components/dots'
import '../images/dots.css'


interface Props {

}

interface State {
  colorPallete: string[],
}

class DotsPage extends React.Component<Props, State> {
  colorPalletesOptions = [
    ['#6f238b', '#d6ae37', '#556f3f'],
    ['#203593', '#d6ae37', '#363636'],
    ['#c25247', '#d3841f', '#556f3f'],
    ['#6b502c' ,'#d3841f', '#b0437c'],
  ]

  constructor(props: Props) {
    super(props)
    this.state = {
      colorPallete: this.colorPalletesOptions[0]
    }
  }

  updatePallet(index: number) {
    this.setState({
      colorPallete: this.colorPalletesOptions[index]
    });
  }

  renderColorPatch(color: string) {
    return (
      <div key={color} style={{backgroundColor: color, width: "50px", height: "50px"}}/>
    );
  }

  renderColorSelect() {
    return (
      <div style={{display: "flex"}}>
        {this.colorPalletesOptions.map((pallet, index) => {
          return(
            <button
              key={pallet.join()}
              style={{display: "flex", marginRight: "20px"}}
              onClick={() => this.updatePallet(index)}
            >
              {pallet.map(this.renderColorPatch)}
            </button>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="dots">
        <SEO title="dots"/>
        <div style={{padding: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          {this.renderColorSelect()}
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          <Dots colors={this.state.colorPallete}/>
        </div>
      </div>
    );
  }
}

export default DotsPage
