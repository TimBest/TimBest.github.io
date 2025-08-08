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

const Tiler: React.FC<Props> = ({
  rotationCenter,
  rotationGranularity,
  color,
}) => {
  const [dimensions, setDimensions] = React.useState({
    width: 100,
    height: 100,
  })

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

  const lineArray: JSX.Element[] = []
  for (let i = 0; i < dimensions.height; i = i + 70) {
    let row = ''
    for (let j = 0; j < dimensions.width; j = j + 70) {
      const rotation =
        Math.floor(Math.random() * rotationGranularity) *
        (360 / rotationGranularity)
      const shapes = lines(70, '#1c1b26', rotation, rotationCenter)
      row += shapes[Math.floor(Math.random() * shapes.length)]
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
