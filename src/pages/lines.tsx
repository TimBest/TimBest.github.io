import React from 'react'
import SEO from '../components/seo'
import '../images/lines.css'

function lines(backgroundSize, fill, rotation, rotationCenter) {
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

function getHeight() {
  return window.innerHeight || document.body.clientHeight;
}

function getWidth() {
  return window.innerWidth || document.body.clientWidth;
}

const rotations = [0,90,180,270];
const initialWidth = getWidth();
const colors = ['#55cc94', '#9455cc', '#55c8cc', '#cc558c', '#cc9455'];
const color = colors[Math.floor(Math.random()*colors.length)];
const color1 = colors[Math.floor(Math.random()*colors.length)];
const color2 = colors[Math.floor(Math.random()*colors.length)];
document.body.style.backgroundColor = color;

const Lines1 = () => {
  const lineArray = []
  const width = getWidth();
  const height = getHeight();

  for (var i = 0; i < height; i = i + 70) {
    const row = ""
    for (var j = 0; j < width; j = j + 70) {
      var rotation = rotations[Math.floor(Math.random()*rotations.length)]
      var shapes = lines(70, '#1c1b26', rotation, 200)
      row += (shapes[Math.floor(Math.random()*shapes.length)]);
    }
    lineArray.push(<div className="row" dangerouslySetInnerHTML={{__html: row}}></div>)
  }
  return lineArray;
}
const Lines2 = () => {
  const lineArray = []
  const width = getWidth();
  const height = getHeight();

  for (var i = 0; i < height; i = i + 70) {
    const row = ""
    for (var j = 0; j < width; j = j + 70) {
      var rotation = Math.floor(Math.random()*360)
      var shapes = lines(70, '#1c1b26', rotation, 35)
      row += (shapes[Math.floor(Math.random()*shapes.length)]);
    }
    lineArray.push(
      <div
        className="row"
        dangerouslySetInnerHTML={{__html: row}}
        style={{backgroundColor:color1}}
      >
      </div>
    )
  }
  return lineArray;
}
const Lines3 = () => {
  const lineArray = []
  const width = getWidth();
  const height = getHeight();

  for (var i = 0; i < height; i = i + 70) {
    const row = ""
    for (var j = 0; j < width; j = j + 70) {
      var rotation = rotations[Math.floor(Math.random()*rotations.length)]
      var shapes = lines(70, '#1c1b26', rotation, 35)
      row += (shapes[Math.floor(Math.random()*shapes.length)]);
    }
    lineArray.push(
      <div
        className="row"
        dangerouslySetInnerHTML={{__html: row}}
        style={{backgroundColor:color2}}
      >
      </div>
    )  }
  return lineArray;
}

class Lines extends React.Component {
  constructor() {
    super();
    this.state = {
      width: getWidth(),
      height: getHeight()
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    // TODO: should only update state if one of these is diffrent
    this.setState({ width: getWidth(), height: getHeight() });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  render() {
    return (
      <div>
        <SEO title="lines"/>
        <div id="lines"><Lines1/></div>
        <div id="lines3"><Lines3/></div>
        <div id="lines2"><Lines2/></div>
      </div>
    )
  }
}

export default Lines
