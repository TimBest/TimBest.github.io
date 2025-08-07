import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface CardProps {
  href?: string
  title: string
  image?: string
  description?: string
}

const StyledCard = styled(Link)`
  display: block;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 0.2s;
  max-width: 400px;
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
`

const CardImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: contain;
  display: block;
  background: #f7f7f7;
  margin-left: auto;
  margin-right: auto;
`

const CardContent = styled.div`
  padding: 16px;
  color: #222;
  font-size: 1.1rem;
  font-weight: 500;
`

const CardDescription = styled.div`
  padding: 0 16px 16px 16px;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
`

const Card = ({href, title, image, description}: CardProps) => (
  <StyledCard to={href || ""}>
    {image && <CardImage src={image} alt={title} />}
    <CardContent>
      {title}
    </CardContent>
    {description && (
      <CardDescription>
        {description}
      </CardDescription>
    )}
  </StyledCard>
)

export default Card
