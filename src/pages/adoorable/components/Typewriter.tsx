import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const writer = (width: number) => keyframes`
  from { width: 0; }
  to { width: ${width}px; }
`
const blinkTextCursor = keyframes`
  0% { border-right-color: rgba(255,255,255,.75); }
  48% { border-right-color: rgba(255,255,255,.75); }
  52% { border-right-color: transparent }
  100%{border-right-color: transparent;}
`
const Text = styled.div<{ speed: number; width: number; steps: number }>`
  color: #d0836b;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  margin: 0 3px 0 14px;
  width: ${({ width }) => `${width}px`};
  animation: ${({ width }) => writer(width)}
    ${({ speed, steps }) => `${speed}ms steps(${steps}) 1s 1 normal both,`}
    ${blinkTextCursor} 1200ms steps(44) infinite normal;
`

interface Props {
  words: string[]
  speed: number
  width: number
}

const getRandomWord = (words: string[], exclude?: string) => {
  if (words.length < 2) {
    return words[0]
  }
  let descriptor = exclude
  while (descriptor === exclude) {
    descriptor = words[Math.floor(Math.random() * words.length)]
  }
  return descriptor!
}

const Typewriter: React.FC<Props> = ({ words, speed, width }) => {
  const [word, setWord] = React.useState<string>(
    words[Math.floor(Math.random() * words.length)]
  )

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setWord((prev) => getRandomWord(words, prev))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Text
      speed={speed * word.length}
      width={width * word.length}
      steps={word.length}
    >
      {word}
    </Text>
  )
}

export default Typewriter
