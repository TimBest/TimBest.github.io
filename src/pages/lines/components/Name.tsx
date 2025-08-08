import styled from 'styled-components'

const Name = styled.span<{color: string}>`
  color: ${({ color }) => color};
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: ${({ color }) => (`0 0 4px ${color}`)};

`

export default Name