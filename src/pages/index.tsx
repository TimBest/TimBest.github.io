import * as React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import ContentSection from '../components/container'

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
      <ContentSection>
        <h2>Projects</h2>
        <ol>
          <li>
            <a href="https://github.com/TimBest/tessellation-sketchplugin" target="_blank">tessellation-sketchplugin</a> <span>[WIP]</span> <span>A sketch plugin to aid in the development of svg tessellations</span>
          </li>
          <li>
            <a href="http://generalset.io/" target="_blank">GeneralSet.io</a> <span>[WIP]</span> <span>An adaption of the game SET to work with any arbitratry features (shape, color, shadding, etc.)</span>
          </li>
          <li>
            <a href="http://startupslikeme.gitlab.io/" target="_blank">startupslike.me</a> <span>[DEAD]</span> <span>An email service that uses a recomendation engine to send you 3 startups that you might like every week</span>
          </li>
          <li>
            <a href="http://timbest.net/projects/composers_couch/" target="_blank">composerscouch.com</a> <span>[DEAD]</span> <span>A Web service to improve how Fans, Musicians and Venues connect</span>
          </li>
        </ol>
      </ContentSection>
      <ContentSection>
        <h2>One Day Builds</h2>
        <p>Experiments with svgs and css that sometimes take more then a day</p>
        <div className="wrapper">
          <div className="patterns">
            <Card href="/houndstooth/" title="Houndstooth" image={houndstooth}/>
            <Card href="/lines/" title="Lines" image={lines}/>
            <Card href="/isometric/" title="Isometric" image={isometric}/>
            <Card href="/dots/" title="Carnival Dots" image={dots}/>
          </div>
        </div>
      </ContentSection>
    </div>
    <footer className="footer">
      <div>
        <span>hello@timothy.best</span> | <a href="https://github.com/timbest/" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/tim-best-88a69758/" target="_blank">LinkedIn</a>
      </div>
    </footer>
  </div>
)

export default IndexPage
