import * as React from 'react'
import { Link } from 'gatsby'

interface CardProps {
  href?: string
  title: string
  image: JSX.Element
}

export const Card = ({href, title, image}: CardProps) => (
  <Link className="card" to={href || ""}>
    <div className="card-image">
      {image}
    </div>
    <div className="card-content">
      {title}
    </div>
  </Link>
);
