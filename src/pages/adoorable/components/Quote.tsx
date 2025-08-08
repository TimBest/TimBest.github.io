import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 20px;
`
const Body = styled.div`
  display: flex;
`
const OpenQuote = styled.div`
  font-size: 20px;
`
const Text = styled.div``

const Author = styled.div`
  text-align: left;
  font-size: 14px;
  padding-left: 15px;
`

interface Props {
  text: string;
  author: string;
}

const Quote: React.FC<Props> = ({ text, author }) => (
  <Wrapper>
    <Body>
      <OpenQuote>❝</OpenQuote>
      <Text>{text}</Text>
    </Body>
    <Author>- {author}</Author>
  </Wrapper>
)

export default Quote
