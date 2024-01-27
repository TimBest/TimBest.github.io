import * as React from 'react'
import styled from 'styled-components'

interface Props {
  href: string
  title: string
  description: string
}

const Wrapper = styled.div`
  padding: 0.5rem 0rem;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 5px;

  &:hover,
  &:focus {
    color: #4e66c4;
  }
`

const Description = styled.p`
  margin: 0.7rem 0 1.5rem 0;
`

const Badge = styled.div`
  display: none;
  text-align: center;
  color: #fff;

  padding: 3px 5px;
  border-radius: 4px;
  text-transform: uppercase;
`

const Project = ({title, href, status, description}: Props) => (
  <Wrapper>
    <Heading>
      <h3>
        <Link href={href} target="_blank">{title}</Link>
      </h3>
    </Heading>
    <Description>{description}</Description>
  </Wrapper>
);

export default Project
