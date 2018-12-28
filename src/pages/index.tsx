import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../images/index.css'
import houndstooth from '../images/Houndstooth.svg'

const Card = (props: {href: string, title: string, image: string}) => (
  <Link className="card" to={props.href}>
    <div className="card-image">
      <img src={props.image}/>
    </div>
    <div className="card-content">
      {props.title}
    </div>
  </Link>
);

const IndexPage = () => (
  <div id="index">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="houndstooth-index">
      <h1 className="title">TIMOTHY BEST</h1>
    </div>
    <div className="content">
      <div className="wrapper">
        <div className="patterns">
          <Card href="/houndstooth/" title="Houndstooth" image={houndstooth}/>
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
