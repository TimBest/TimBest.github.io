import React from 'react'
import SEO from '../components/seo'
import '../images/dots.css'

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFloat(min: number, max: number): number {
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
  minColumns = 1
  xPadding = 35
  yPadding = 3
  offset = 6
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

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  getWidth(): number {
    return window.innerWidth || document.body.clientWidth
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    const previousColumns = this.numberOfColumns(this.state.width);
    const width = this.getWidth();
    const columns = this.numberOfColumns(this.getWidth());
    console.log(previousColumns, columns)
    console.log(width, this.getWidth())

    if (previousColumns === columns || columns <= this.minColumns) {
      this.setState({width});
      return;
    }

    const dots = (previousColumns < columns) ?
                 this.appendColumn(Array.from(this.state.dots)) :
                 this.removeColumn(Array.from(this.state.dots));

    this.setState({width, dots})
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

  getRandomColor(): string {
    return this.props.colors[getRandomInt(this.props.colors.length)];
  }

  getColor(dots?: DotColorParams): string {
    let color = this.getRandomColor();
    while (!this.isVaildColor(color, dots)) {
      color = this.getRandomColor();
    }
    return color;
  }

  getOffset() {
    return getRandomFloat(0, this.offset)
  }

  getY(row: number): number {
    const y = this.dotRadius + (this.dotDiameter * row);
    const padding = this.yPadding * row;
    return y + padding + this.getOffset();
  }

  getX(row: number, column: number): number {
    const x = this.dotRadius + (this.dotDiameter * column);
    const padding = this.xPadding * column;
    const indent = row % 2 ? this.dotRadius + (this.xPadding/2) : 0;
    return x + padding + indent + this.getOffset();
  }

  removeColumn(dots: Dot[][]): Dot[][] {
    dots.forEach(row => row.pop());
    return dots
  }

  appendColumn(dots: Dot[][]): Dot[][] {
    dots.forEach((row, index) => {
      const length = row.length
      const y = this.getY(index);
      const x = this.getX(index, length);
      let dotColorParams: DotColorParams | undefined;
      if (index > 0) {
        dotColorParams = {
          left: row[index-1].color,
          top: dots[index-1][length-1].color,
          topLeft: dots[index-1][length-2].color,
        };
      }
      const color = this.getColor(dotColorParams);
      row.push({x, y, color});
    });
    return dots
  }

  numberOfColumns(width: number): number {
    return Math.floor(width / (this.offset + this.dotDiameter + this.xPadding))
  }

  generateDots() {
    const dots: Dot[][] = [];
    const columns = this.numberOfColumns(this.getWidth());

    for(var i = 0; i < this.rows; i++) {
      const y = this.getY(i);

      const row: Dot[] = [];
      for(var j = 0; j < columns; j++) {
        const x = this.getX(i, j);

        let dotColorParams: DotColorParams | undefined;
        if (i > 0 && j > 0) {
          dotColorParams = {
            left: row[j-1].color,
            top: dots[i-1][j].color,
            topLeft: dots[i-1][j-1].color,
            topRight: (j < columns - 2) ? dots[i-1][j+1].color : undefined,
          };
        }
        const color = this.getColor(dotColorParams);
        row.push({x, y, color});
      }
      dots.push(row);
    }
    return dots
  }

  render() {
    const height = ((this.dotDiameter + this.yPadding) * this.rows) + this.offset;
    const columns = this.state.dots[0].length;
    const width = ((this.dotDiameter + this.xPadding) * columns) + this.offset + this.dotRadius;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${width} ${height}`}
        height={height}
        width={width}
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
        {this.state.dots.map((row, index) => (
            row.map(dot => (
              <g key={`${dot.x},${dot.y},${index}`}>
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={this.dotRadius}
                  fill={dot.color}
                  filter="url(#filter)"
                />
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={this.dotRadius}
                  fill={dot.color}
                  filter="url(#filter)"
                />
              </g>
            ))
        ))}
       </svg>
    );
  }
}

const DotsPage = () =>  (
  <div className="dots">
    <SEO title="dots"/>
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      <Dots colors={['#203593', '#b0437c', '#d6ae37']}/>
      <Dots colors={['#556f3f', '#c25247', '#d3841f']}/>
      <Dots colors={['#d6ae37', '#556f3f', '#6f238b']}/>
      <Dots colors={['#b0437c' , '#6b502c' , '#d3841f']}/>
    </div>
  </div>
)

export default DotsPage
