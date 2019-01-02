import React, {Component } from 'react'
import SEO from '../components/seo'
import crackSrc from '../images/crack.svg'
import '../images/mfabt.css'

interface Props {}

interface State {
  cracks: JSX.Element[]
}

class MFABT extends Component<Props, State> {
  static width: number = 80;

  constructor(props: Props) {
    super(props)
    this.state = {
      cracks: []
    }
  }

  addCrack = (e: React.MouseEvent<Element>) => {
    const x = e.nativeEvent.x - (MFABT.width / 2);
    const y = e.nativeEvent.y - (MFABT.width / 2);
    const cracks = this.state.cracks
    cracks.push(
      <img
        className="hammer"
        src={crackSrc}
        width={MFABT.width}
        key={cracks.length}
        style={{
          position: "absolute",
          left: x + "px",
          top: y + "px"
        }}
      />
    );
    this.setState({cracks})
  }

  render = () => {
    return (
      <div className="background">
        <SEO title="Move Fast And Break Things"/>
        {this.state.cracks.map((crack) => crack)}
        <svg className="frame" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1050 1300" height="100%">
          <defs>
            <filter id="inset_shadow" x="-50%" y="-50%" width="200%" height="200%">
             <feComponentTransfer in="SourceAlpha">
               <feFuncA type="table" tableValues="1 0" />
             </feComponentTransfer>
             <feGaussianBlur stdDeviation="3"/>
             <feOffset dx="5" dy="5" result="offsetblur"/>
             <feFlood floodColor="rgb(20, 0, 0)" result="color"/>
             <feComposite in2="offsetblur" operator="in"/>
             <feComposite in2="SourceAlpha" operator="in" />
             <feMerge>
               <feMergeNode in="SourceGraphic" />
               <feMergeNode />
             </feMerge>
           </filter>

            <filter id="mdf">
              <feTurbulence type="turbulence" baseFrequency="0.2" numOctaves="1" result="noise"/>
              <feDiffuseLighting in="noise" lightingColor="#555" surfaceScale="0.6" result="diffLight">
                <feDistantLight azimuth="95" elevation="35"/>
              </feDiffuseLighting>
            </filter>
            <pattern id="mdf_frame" x="0" y="0" width="1" height="1">
              <rect width="1050" height="1300" filter="url(#mdf)"/>
            </pattern>
            {/* <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgba(255,255,255, 0.8);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgba(255,255,255, 0.4);stop-opacity:1" />
            </linearGradient> */}
          </defs>

          <polygon fill="url(#mdf_frame)" points="0,0 100,100 950,100 1050,0"></polygon>
          <polygon fill="url(#mdf_frame)" points="0,0 100,100 100,1200 0,1300"></polygon>
          <polygon fill="url(#mdf_frame)" points="0,1300 100,1200 950,1200 1050,1300"></polygon>
          <polygon fill="url(#mdf_frame)" points="1050,1300 950,1200 950,100 1050,0"></polygon>

          <rect onMouseDown={this.addCrack} className="paper hammer" x="100" y="100" width="850" height="1100" filter="url(#inset_shadow)"/>

          <text onMouseDown={this.addCrack}
            className="mfabt hammer"
            x="50%"
            y="50%"
            width="100"
            textAnchor="middle"
          >
            <tspan x="50%" y="450">MOVE</tspan>
            <tspan x="50%" y="550">FAST</tspan>
            <tspan x="50%" y="650">AND</tspan>
            <tspan x="50%" y="750">BREAK</tspan>
            <tspan x="50%" y="850">THINGS</tspan>
          </text>

          {/*<!-- <polygon fill="url(#grad1)" points="100,100 850,100 100,900"></polygon> -->*/}
        </svg>
      </div>
    )
  }
}

export default MFABT
