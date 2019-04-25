import React from 'react'

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface DotsProps {
  colors: string[];
  paddingX: number;
  paddingY: number;
  maxOffset: number;
}

interface Dot {
  color: number
  x: number
  y: number
}

interface DotsState {
  width: number
  dots: Dot[][]
}

interface DotColorParams {
  left: number;
  top: number;
  topLeft: number;
  topRight?: number;
}

class Dots extends React.Component<DotsProps, DotsState> {
  rows = 4
  minColumns = 1
  dotDiameter = 100
  dotRadius = this.dotDiameter / 2

  constructor(props: DotsProps) {
    super(props)
    // set default width and height for static rendering since window size is unknown
    this.state = {
      width: this.dotDiameter,
      dots: [[
        {
          color: 0,
          x: this.dotRadius,
          y: this.dotRadius
        }
      ]]
    }
  }

  componentDidUpdate(props: DotsProps, state: DotsState) {
    if (props.colors.length !== this.props.colors.length) {
      this.updateColors();
    }
    if (
      props.paddingX !== this.props.paddingX ||
      props.paddingY !== this.props.paddingY ||
      props.maxOffset !== this.props.maxOffset
    ) {
      this.updatePosition();
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

    if (previousColumns === columns || columns <= this.minColumns) {
      this.setState({width});
      return;
    }

    const dots = (previousColumns < columns) ?
                 this.appendColumn(Array.from(this.state.dots)) :
                 this.removeColumn(Array.from(this.state.dots));

    this.setState({width, dots})
  }

  updateColors() {
    const dots = Array.from(this.state.dots);
    const columns = this.numberOfColumns(this.getWidth());
    dots.forEach((row, i) => {
      row.forEach((dot, j) => {
        let dotColorParams: DotColorParams | undefined;
        if (i > 0 && j > 0) {
          dotColorParams = {
            left: row[j-1].color,
            top: dots[i-1][j].color,
            topLeft: dots[i-1][j-1].color,
            topRight: (j < columns - 2) ? dots[i-1][j+1].color : undefined,
          };
        }
        dot.color = this.getColor(dotColorParams);
      });
    })
    this.setState({dots})
  }

  updatePosition() {
    const dots = Array.from(this.state.dots);
    dots.forEach((row, i) => {
      const y = this.getY(i);
      row.forEach((dot, j) => {
        const x = this.getX(i, j);
        dot.x = x;
        dot.y = y;
      });
    })
    this.setState({dots})
  }

  isEqual(x: number, y: number, z: number): boolean {
    return x === y && y ===z;
  }

  isVaildColor(color: number, dots?: DotColorParams): boolean {
    if(dots === undefined) {
      return true;
    }
    if (this.props.colors.length <= 2) {
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

  getRandomColor(): number {
    return getRandomInt(this.props.colors.length);
  }

  getColor(dots?: DotColorParams): number {
    let color = this.getRandomColor();
    while (!this.isVaildColor(color, dots)) {
      color = this.getRandomColor();
    }
    return color;
  }

  getOffset() {
    return getRandomFloat(0, this.props.maxOffset)
  }

  getY(row: number): number {
    const y = this.dotRadius + (this.dotDiameter * row);
    const padding = this.props.paddingY * row;
    return y + padding + this.getOffset();
  }

  getX(row: number, column: number): number {
    const x = this.dotRadius + (this.dotDiameter * column);
    const padding = this.props.paddingX * column;
    const indent = row % 2 ? this.dotRadius + (this.props.paddingX/2) : 0;
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
    return Math.floor(width / (this.props.maxOffset + this.dotDiameter + this.props.paddingX))
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
    const height = ((this.dotDiameter + this.props.paddingY) * this.rows) + this.props.maxOffset;
    const columns = this.state.dots[0].length;
    const width = ((this.dotDiameter + this.props.paddingX) * columns) + this.props.maxOffset + this.dotRadius;
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
                  fill={this.props.colors[dot.color]}
                  filter="url(#filter)"
                />
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={this.dotRadius}
                  fill={this.props.colors[dot.color]}
                  filter="url(#filter)"
                />
              </g>
            ))
        ))}
       </svg>
    );
  }
}

export default Dots
