import { saturate } from 'polished'
import styled from 'styled-components'

const Name = styled.span<{color: string}>`
  color: ${({ color }) => saturate(1, color)};
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 5px;
`

export default Name