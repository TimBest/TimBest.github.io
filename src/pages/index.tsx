import * as React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../images/index.css'
import dots from '../images/dot.svg'
import houndstooth from '../images/Houndstooth.svg'
import isometric from '../images/with_lines_pattern.svg'
import lines from '../images/triangles.svg'

interface CardProps {
  href: string
  title: string
  image: string
}

const Card = ({href, title, image}: CardProps) => (
  <Link className="card" to={href}>
    <div className="card-image">
      <img src={image}/>
    </div>
    <div className="card-content">
      {title}
    </div>
  </Link>
);

const IndexPage = () => (
  <div id="index">
    <SEO title="Home"/>
    <div className="houndstooth-index">
      <h1 className="title">TIMOTHY BEST</h1>
    </div>
    <div className="content">
      <div className="wrapper">
        <div className="patterns">
          <Card href="/houndstooth/" title="Houndstooth" image={houndstooth}/>
          <Card href="/lines/" title="Lines" image={lines}/>
          <Card href="/isometric/" title="Isometric" image={isometric}/>
          <Card href="/dots/" title="Dots" image={dots}/>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div>
        hello@timothy.best
        | <a href="https://github.com/timbest/">GitHub</a>
        | <a href="https://www.linkedin.com/in/tim-best-88a69758/">LinkedIn</a>
      </div>
    </footer>
  </div>
)

export default IndexPage
