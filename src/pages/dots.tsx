import React from 'react'
import SEO from '../components/seo'
import '../images/dots.css'

/*
// TODO:
 - clean up triangle removeal logic
 - only regenerate when needed
*/

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface DotsProps {
  colors: string[]
}

interface Dot {
  color: string
  x: number
  y: number
}

interface DotsState {
  width: number
  dots: Dot[][]
}

interface DotColorParams {
  left: string;
  top: string;
  topLeft: string;
  topRight?: string;
}

class Dots extends React.Component<DotsProps, DotsState> {
  rows = 4
  xPadding = 35
  yPadding = 3
  minError = -3
  maxError = 3
  dotDiameter = 100
  dotRadius = this.dotDiameter / 2

  constructor(props: DotsProps) {
    super(props)
    // set default width and height for static rendering since window size is unknown
    this.state = {
      width: this.dotDiameter,
      dots: [[
        {
          color: this.props.colors[0],
          x: this.dotRadius,
          y: this.dotRadius
        }
      ]]
    }
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.updateDimensions.bind(this))
    this.setState({
      width: this.getWidth(),
      dots: this.generateDots()
    })
  }

  getWidth() {
    return window.innerWidth || document.body.clientWidth
  }

  getRandPadding() {
    return getRandomArbitrary(this.minError, this.maxError)
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    // TODO: this only needs to update state when width or height changes more then the shape size
    this.setState({
      width: this.getWidth(),
      dots: this.generateDots()
    })
  }

  getRandomColor() {
    return this.props.colors[getRandomInt(this.props.colors.length)]
  }

  isEqual(x: string, y: string, z: string): boolean {
    return x === y && y ===z;
  }

  isVaildColor(color: string, dots?: DotColorParams): boolean {
    if(dots === undefined) {
      return true;
    }
    if (this.props.colors.length <= 1) {
      return true;
    }

    if (
      this.isEqual(dots.left, dots.top, color) ||
      this.isEqual(dots.topLeft, dots.left, color) ||
      this.isEqual(dots.top, dots.topLeft, color)
    ) {
      return false;
    }

    if (dots.topRight && this.isEqual(dots.top, dots.topRight, color)) {
      return false;
    }

    return true;
  }

  generateDots() {
    const dots: Dot[][] = [];
    const columns = (this.getWidth() / (this.maxError + this.dotDiameter + this.xPadding)) - 1
    var height: number = (this.dotRadius) + Math.abs(this.minError);

    for(var i = 0; i < this.rows; i++) {
      var width: number = this.dotRadius;
      if (i % 2 === 0) {
        // indent even numbered rows by half a dot to create stagared rows
        width = width + this.dotRadius + (this.xPadding/2)
      }
      const row: Dot[] = [];
      for(var j = 0; j <= columns; j++) {
        var postionX = width + this.getRandPadding();
        var postionY = height + this.getRandPadding();

        let dotColorParams: DotColorParams | undefined;
        if (i > 0 && j > 0) {

          dotColorParams = {
            left: row[j-1].color,
            top: dots[i-1][j].color,
            topLeft: dots[i-1][j-1].color,
            topRight: (j < columns - 1) ? dots[i-1][j+1].color : undefined,
          };
        }
        let color = this.getRandomColor();
        while (!this.isVaildColor(color, dotColorParams)) {
          color = this.getRandomColor();
        }

        row.push({
          color,
          x: postionX,
          y: postionY
        })
        width += this.dotDiameter + this.xPadding
      }
      dots.push(row);
      height += this.dotDiameter + this.yPadding
    }
    return dots
  }

  render() {
    const height = ((this.dotDiameter + this.yPadding) * this.rows) + this.maxError
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${this.state.width} ${height}`}
        height={height}
        width={this.state.width}
        style={{marginBottom: "100px"}}
      >
        <filter id="filter">
          <feTurbulence
            type="turbulence"
            baseFrequency=".4"
            numOctaves="1"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur
            stdDeviation=".2"
            edgeMode="wrap"
            result="bluredTurbulance"
            in="turbulence"
          />
          <feComposite
            in="SourceGraphic"
            in2="bluredTurbulance"
            operator="out"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite"
          />
        </filter>
        {this.state.dots.map(row => (
            row.map(dot => (
              <>
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={this.dotRadius}
                  fill={dot.color}
                  filter="url(#filter)"
                  key={`${dot.x},${dot.y}`}
                />
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={this.dotRadius}
                  fill={dot.color}
                  filter="url(#filter)"
                  key={`${dot.x},${dot.y}A`}
                />
              </>
            ))
        ))}
       </svg>
    );
  }
}

const DotsPage = () =>  (
  <div className="dots">
    <SEO title="dots"/>
    <Dots colors={['#203593', '#b0437c', '#d6ae37']}/>
    <Dots colors={['#556f3f', '#c25247', '#d3841f']}/>
    <Dots colors={['#d6ae37', '#556f3f', '#6f238b']}/>
    <Dots colors={['#b0437c' , '#6b502c' , '#d3841f']}/>
  </div>
)

export default DotsPage