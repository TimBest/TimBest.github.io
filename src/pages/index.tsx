import * as React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Project from '../components/project'
import ContentSection from '../components/ui/container'
import styled from 'styled-components'

import '../images/index.css'

import dots from '../images/dot.svg'
import houndstooth from '../images/Houndstooth.svg'
import isometric from '../images/with_lines_pattern.svg'
import lines from '../images/triangles.svg'

const SectionTitle = styled.h2`
  padding-bottom: 1rem;
  text-transform: uppercase;
`

const Linka = styled.a`
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
`

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
        <SectionTitle>Projects</SectionTitle>
        <Project
          href="https://github.com/TimBest/tessellation-sketchplugin"
          title="Tessellation SketchPlugin"
          status="wip"
          description={`
            A sketch plugin to aid in the development of svg tessellations
          `}
        />
        <Project
          href="http://generalset.io/"
          title="GeneralSet.io"
          status="wip"
          description={`
            An adaption of the game SET to work with any arbitratry features
            (shape, color, shadding, etc.)
          `}
        />
        <Project
          href="http://startupslikeme.gitlab.io/"
          title="StartupsLike.me"
          status="dead"
          description={`
            An email service that uses a recomendation engine to send you 3 startups that you might
            like every week
          `}
        />
        <Project
          href="http://timbest.net/projects/composers_couch/"
          title="ComposersCouch.com"
          status="dead"
          description={`
            A Web service to improve how Fans, Musicians and Venues connect
          `}
        />
        <Project
          href="https://github.com/TimBest/django-multi-form-view"
          title="Django MultiFormView"
          status="maintained"
          description={`
            Django class based views for using more than one form in a single view
          `}
        />
      </ContentSection>
      <ContentSection>
        <SectionTitle>One Day Builds</SectionTitle>
        <div className="patterns">
          <Card href="/houndstooth/" title="Houndstooth" image={houndstooth}/>
          <Card href="/lines/" title="Lines" image={lines}/>
          <Card href="/isometric/" title="Isometric" image={isometric}/>
          <Card href="/dots/" title="Carnival Dots" image={dots}/>
        </div>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Blog</SectionTitle>
        <Linka href="https://onesignal.com/blog/modernizing-our-frontend-part-1-coffeescript-typescript/" target="_blank">
          Modernizing OneSignal's Frontend
        </Linka>
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
