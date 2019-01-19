import React from 'react'
import SEO from '../components/seo'
import '../images/dots.css'

/*
// TODO:
 - make triangles impossible to form
 - add padding around dots
 - only regenerate when needed
 - ensure dots are never cut off

update dots to be data structure
{location, color, paddingX, paddingY}[][]
this would allow for easy checking for triangles and
would allow the generation of rows/ columns on resize
*/

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface DotsProps {
  colors: string[]
  dotDiameter: number
  maxX: number
  minX: number
  maxY: number
  minY: number
}

interface DotsState {
  width: number;
  height: number;
}

class Dots extends React.Component<DotsProps, DotsState> {

  constructor(props: DotsProps) {
    super(props)
    // set default width and height for static rendering since window size is unknown
    this.state = {
      width: 100,
      height: 100
    }
  }

  componentDidMount(): void {
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

  isOddRow(y: number): boolean {
    return Math.ceil(y/ this.props.dotDiameter) % 2 == 0;
  }

  getRandXPadding() {
    return getRandomArbitrary(this.props.minX, this.props.maxX)
  }

  getRandYPadding() {
    return getRandomArbitrary(this.props.minY, this.props.maxY)
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    // TODO: this only needs to update state when width or height changes more then the shape size
    this.setState({ width: this.getWidth(), height: this.getHeight() })
  }

  render() {
    console.log("render");
    const dotRadius = this.props.dotDiameter / 2;
    const dots: JSX.Element[] = []
    // const color: string = this.colors[Math.floor(Math.random()*this.colors.length)]

    var i: number = dotRadius + Math.abs(this.props.minY);
    while (i < this.state.height) {
      var j: number = dotRadius;
      if (this.isOddRow(i)) {
        j = j + dotRadius + (this.getRandXPadding() / 2)
      }

      while (j < this.state.width) {
        const color = this.props.colors[getRandomInt(this.props.colors.length)];
        const offsetY = this.getRandYPadding();
        dots.push(
          <>
            <circle
              cx={j}
              cy={i + offsetY}
              r={dotRadius}
              fill={color}
              filter="url(#filter)"
              key={`${j},${i}`}
            />
            <circle
              cx={j}
              cy={i + offsetY}
              r={dotRadius}
              fill={color}
              filter="url(#filter)"
              key={`${j},${i}A`}
            />
          </>
        )
        j = j + this.props.dotDiameter + this.getRandXPadding()
      }
      i = i + this.props.dotDiameter;
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${this.state.width} ${this.state.height}`}
        height={this.state.height}
        width={this.state.width}
      >
        <filter id="filter">
          <feTurbulence type="turbulence" baseFrequency=".4" numOctaves="1" seed="2"  result="turbulence"/>
          <feGaussianBlur stdDeviation=".2" edgeMode="wrap" result="bluredTurbulance" in="turbulence"></feGaussianBlur>
          <feComposite in="SourceGraphic" in2="bluredTurbulance" operator="out" x="0%" y="0%" width="100%" height="100%" result="composite"/>
        </filter>
        {dots}
       </svg>
    );
  }
}

const DotsPage = () =>  (
  <div className="dots">
    <SEO title="dots"/>
    <Dots
      colors={['#556f3f' , '#c25247' , '#d3841f']}
      dotDiameter={100}
      maxX={40}
      minX={50}
      maxY={8}
      minY={-5}
    />
    <Dots
      colors={['#b0437c' , '#203593' , '#d6ae37']}
      dotDiameter={100}
      maxX={40}
      minX={50}
      maxY={8}
      minY={-5}
    />
    <Dots
      colors={['#b0437c' , '#7a5422' , '#d3841f']}
      dotDiameter={100}
      maxX={40}
      minX={50}
      maxY={8}
      minY={-5}
    />
    <Dots
      colors={['#d6ae37' , '#556f3f' , '#6f238b']}
      dotDiameter={100}
      maxX={40}
      minX={50}
      maxY={8}
      minY={-5}
    />
  </div>
)


export default DotsPage
