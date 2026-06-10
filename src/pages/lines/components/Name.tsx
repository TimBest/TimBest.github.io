import { saturate } from 'polished'
import styled from 'styled-components'

export const MARGIN_BOTTOM = "5px";

const Name = styled.span<{color: string}>`
  color: ${({ color }) => saturate(1, color)};
  text-transform: lowercase;
  margin-bottom: ${MARGIN_BOTTOM};
`

export default Name