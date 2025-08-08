import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`
const Row = styled.div`
  white-space: nowrap;
`
const SvgWrapper = styled.div`
  & svg {
    margin-bottom: -4px;
  }
`

function lines(
  backgroundSize: number,
  fill: string,
  rotation: number,
  rotationCenter: number
): string[] {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M12 5 H395 V388 Z" fill="${fill}"/>
      <path d="M5 12 V395 H388 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 188 V5 H388 Z" fill="${fill}"/>
      <path d="M8.5 200 L395 12 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 188 V5 H388 Z" fill="${fill}"/>
      <path d="M12 195 H395 V12 Z" fill="${fill}"/>
      <path d="M12 205 H395 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M12 5 H395 V188 Z" fill="${fill}"/>
      <path d="M5 12 V195 H388 Z" fill="${fill}"/>
      <path d="M12 205 H395 V388 Z" fill="${fill}"/>
      <path d="M5 212 V395 H388 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M105 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M205 5 V395 h90 V5 Z" fill="${fill}"/>
      <path d="M305 5 V395 h90 V5 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h123.3 V5 Z" fill="${fill}"/>
      <path d="M138.3 5 V395 h123.3 V5 Z" fill="${fill}"/>
      <path d="M271.6 5 V395 h123.3 V5 Z" fill="${fill}"/>
    </g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400" height="${backgroundSize}" width="${backgroundSize}"><g transform="rotate(${rotation}, ${rotationCenter}, ${rotationCenter})">      <path d="M5 5 V395 h190 V5 Z" fill="${fill}"/>
      <path d="M205 5 V395 h190 V5 Z" fill="${fill}"/>
    </g></svg>`,
  ]
}

interface Props {
  rotationCenter: number
  rotationGranularity: number
  color: string
}

const TILE_SIZE = 70

function getGridSize(width: number, height: number) {
  return {
    rows: Math.ceil(height / TILE_SIZE),
    cols: Math.ceil(width / TILE_SIZE),
  }
}

function seededRandom(seed: number) {
  // Mulberry32 PRNG
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const Tiler: React.FC<Props> = ({
  rotationCenter,
  rotationGranularity,
  color,
}) => {
  const [dimensions, setDimensions] = React.useState({
    width: 100,
    height: 100,
  })

  // Store the shape/rotation indices for each tile
  const [tileIndices, setTileIndices] = React.useState<number[][] | null>(null)
  const [rotationIndices, setRotationIndices] = React.useState<number[][] | null>(null)

  React.useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight,
      })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  React.useEffect(() => {
    // Precompute indices for shapes and rotations
    const { rows, cols } = getGridSize(dimensions.width, dimensions.height)
    // Use a seed based on dimensions to keep it stable between renders
    const seed = dimensions.width * 100000 + dimensions.height
    const rand = seededRandom(seed)
    const shapeIndices: number[][] = []
    const rotIndices: number[][] = []
    for (let i = 0; i < rows; i++) {
      shapeIndices[i] = []
      rotIndices[i] = []
      for (let j = 0; j < cols; j++) {
        shapeIndices[i][j] = Math.floor(rand() * lines(0, '', 0, 0).length)
        rotIndices[i][j] = Math.floor(rand() * rotationGranularity)
      }
    }
    setTileIndices(shapeIndices)
    setRotationIndices(rotIndices)
  }, [dimensions.width, dimensions.height, rotationGranularity])

  const { rows, cols } = getGridSize(dimensions.width, dimensions.height)

  // Ensure tileIndices and rotationIndices are initialized and match the current grid size
  if (
    !tileIndices ||
    !rotationIndices ||
    tileIndices.length !== rows ||
    rotationIndices.length !== rows ||
    tileIndices.some(rowArr => rowArr.length !== cols) ||
    rotationIndices.some(rowArr => rowArr.length !== cols)
  ) {
    return null
  }

  const lineArray: JSX.Element[] = []
  for (let i = 0; i < rows; i++) {
    let row = ''
    for (let j = 0; j < cols; j++) {
      const rotation =
        rotationIndices[i][j] * (360 / rotationGranularity)
      const shapes = lines(TILE_SIZE, '#1c1b26', rotation, rotationCenter)
      row += shapes[tileIndices[i][j]]
    }
    lineArray.push(
      <Row
        key={i}
        style={{ backgroundColor: color }}
        dangerouslySetInnerHTML={{ __html: row }}
      />
    )
  }

  return (
    <Container>
      <SvgWrapper>{lineArray}</SvgWrapper>
    </Container>
  )
}

export default Tiler
