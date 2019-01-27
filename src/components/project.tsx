import * as React from 'react'
import styled from 'styled-components'

interface Props {
  href: string
  title: string
  status: 'wip' | 'dead'
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
  &[target="_blank"]::after {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
  margin: 0 3px 0 5px;
}
`

const Description = styled.p`
  margin: 0.7rem 0 1.5rem 0;
`

const Badge = styled.div`
  display: none;
  text-align: center;
  color: #fff;
  background-color: ${props => props.status === 'wip' ? '#2f565f' : '#000'};

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
      <Badge status={status}>{status}</Badge>
    </Heading>
    <Description>{description}</Description>
  </Wrapper>
);

export default Project
