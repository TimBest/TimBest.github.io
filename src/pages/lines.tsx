import * as React from 'react'
import SEO from '../components/seo'
import '../static/lines.css'

function lines(backgroundSize: number, fill: string, rotation: number, rotationCenter: number): string[] {
  return [
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M12 5 H395 V388 Z" fill="${fill}"/>
      <path d="M5 12 V395 H388 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 188 V5 H388 Z" fill="${fill}"/>
      <path d="M8.5 200 L395 12 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 188 V5 H388 Z" fill="${fill}"/>
      <path d="M12 195 H395 V12 Z" fill="${fill}"/>
      <path d="M12 205 H395 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M12 5 H395 V188 Z" fill="${fill}"/>
      <path d="M5 12 V195 H388 Z" fill="${fill}"/>
      <path d="M12 205 H395 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M105 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M205 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M305 5 V395 h90 V5 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h123.3 V5 Z" fill="${fill}"/>
      <path d="M138.3 5 V395 h123.3 V5 Z" fill="${fill}"/>
      <path d="M271.6 5 V395 h123.3 V5 Z" fill="${fill}"/>
    </g></svg>
    `,
    `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h190 V5 Z" fill="${fill}"/>
      <path d="M205 5 V395 h190 V5 Z" fill="${fill}"/>
    </g></svg>
    `,
  ];
}

interface Props {
  rotationCenter: number
  rotationGranularity: number
}

interface State {
  width: number;
  height: number;
}

class Lines extends React.Component<Props, State> {
  colors: string[] = ['#55cc94', '#9455cc', '#55c8cc', '#cc558c', '#cc9455']
  color: string = this.colors[Math.floor(Math.random()*this.colors.length)]

  constructor(props: Props) {
    super(props)
    this.state = {
      width: 100,
      height: 100
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
    this.setState({
      width: this.getWidth(),
      height: this.getHeight()
    })
  }


  getHeight() {
    return window.innerHeight || document.body.clientHeight
  }

  getWidth() {
    return window.innerWidth || document.body.clientWidth
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    // TODO: this only needs to update state when width or height changes more then the shape size
    this.setState({ width: this.getWidth(), height: this.getHeight() })
  }

  render() {
    const lineArray: JSX.Element[] = []

    for (var i = 0; i < this.state.height; i = i + 70) {
      let row = ""
      for (var j = 0; j < this.state.width; j = j + 70) {
        var rotation = Math.floor(Math.random()*this.props.rotationGranularity) * (360/this.props.rotationGranularity)
        var shapes = lines(70, '#1c1b26', rotation, this.props.rotationCenter)
        row += (shapes[Math.floor(Math.random()*shapes.length)])
      }
      lineArray.push(
        <div
          className="row"
          dangerouslySetInnerHTML={{__html: row}}
          style={{backgroundColor: this.color}}
        />
      )
    }
    return (
      <div className="lines">
       {lineArray}
      </div>
    );
  }
}


const LinesPage = () =>  (
  <div>
    <SEO title="lines"/>
    <Lines
      rotationCenter={200}
      rotationGranularity={4}
    />
    <Lines
      rotationCenter={35}
      rotationGranularity={4}
    />
    <Lines
      rotationCenter={35}
      rotationGranularity={360}
    />
  </div>
)


export default LinesPage
