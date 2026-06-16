import styled from 'styled-components'
import { defaultColor } from './Constants';

export const MARGIN_BOTTOM = "5px";

const Name = styled.span<{hue: string}>`
  color: ${({ hue }) => defaultColor(hue)};
  text-transform: lowercase;
  margin-bottom: ${MARGIN_BOTTOM};
`

export default Name
