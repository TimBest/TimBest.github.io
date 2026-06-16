import * as React from 'react'
import styled from 'styled-components'
import Shapes from './Shapes'
import { backgroundColor } from '..'
import { seededRandom } from '../../../utils'
import { defaultColor } from './Constants'

const Container = styled.div<{color: string}>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({ color }) => color};
`
const Row = styled.div`
  white-space: nowrap;
`
const SvgWrapper = styled.div`
  & svg {
    margin-bottom: -6px;
    margin-top: 1px;
  }
`

interface Props {
  rotationCenter: number
  rotationGranularity: number
  hue: string
}

interface Indices {
  shape: number
  rotation: number
}

const TILE_SIZE = 70

const getGridSize = (width: number, height: number) => {
  return {
    rows: Math.ceil(height / TILE_SIZE),
    cols: Math.ceil(width / TILE_SIZE),
  }
}

const getIndices = (rows: number, cols: number, rotationGranularity: number) => {
  const indices: Indices[][] = []
  for (let i = 0; i < rows; i++) {
    indices[i] = []
    const rand = seededRandom(41 * i + 1)
    for (let j = 0; j < cols; j++) {
        indices[i][j] = {
          shape: Math.floor(rand() * Shapes.length),
          rotation:
            Math.floor(rand() * rotationGranularity) *
            (360 / rotationGranularity),
        }
      }
    }
  return indices;
}

const Tiler: React.FC<Props> = ({
  rotationCenter,
  rotationGranularity,
  hue,
}) => {
  const [dimensions, setDimensions] = React.useState({
    width: 1000,
    height: 1000,
  })
  const [tileIndices, setTileIndices] = React.useState<Indices[][] | null>(null)

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
    const { rows, cols } = getGridSize(dimensions.width, dimensions.height)
    setTileIndices(getIndices(rows, cols, rotationGranularity))
  }, [dimensions.width, dimensions.height, rotationGranularity])

  if (!tileIndices) {
    return <Container color={backgroundColor} />
  }

  return (
    <Container color={defaultColor(hue)}>
      <SvgWrapper>
        {tileIndices.map((row, i) => {
          return (
            <Row key={i}>
              {row.map((tile, j) => {
                const Shape = Shapes[tile.shape]
                return (
                  <Shape
                    key={`${i}-${j}`}
                    backgroundSize={TILE_SIZE}
                    fill={backgroundColor}
                    rotation={tile.rotation}
                    rotationCenter={rotationCenter}
                  />
                )
              })}
            </Row>
          )
        })}
      </SvgWrapper>
    </Container>
  )
}

export default Tiler
