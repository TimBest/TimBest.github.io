import { saturate } from 'polished'
import styled from 'styled-components'

export const MARGIN_BOTTOM = "5px";

const Name = styled.span<{color: string}>`
  color: ${({ color }) => saturate(1, color)};
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: ${MARGIN_BOTTOM};
`

export default Name