import * as React from 'react'
import SEO from '../components/seo'
import Project from '../components/project'
import ContentSection from '../components/ui/container'
import styled from 'styled-components'

import '../images/index.css'

import dots from '../images/dot.svg'
import houndstooth from '../images/Houndstooth.svg'
import isometric from '../images/with_lines_pattern.svg'
import lines from '../images/triangles.svg'
import { Card } from '../components/card'

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
`

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
          href="http://generalset.io/"
          title="GeneralSet.io"
          description={`
            An adaption of the game SET to work with any arbitrary features
            (shape, color, shading, etc.)
          `}
        />
        <Project
          href="https://simplereport.gov/"
          title="SimpleReport"
          description={`
          A better way to report COVID-19 tests 
          `}
        />
        <Project
          href="https://modelmaker.titanic.design/"
          title="Site Model Maker"
          description={`
            Tool for architects to quickly make 3d printable sites models.
          `}
        />
        <Project
          href="/composerscouch/"
          title="ComposersCouch"
          description={`
            A Web service to improve how Fans, Musicians and Venues connect
          `}
        />
      </ContentSection>
      <ContentSection>
        <SectionTitle>One Day Builds</SectionTitle>
        <div className="patterns">
          <Card href="/houndstooth/" title="Houndstooth" image={<img src={houndstooth}/>}/>
          <Card href="/lines/" title="Lines" image={<img src={lines}/>}/>
          <Card href="/isometric/" title="Isometric" image={<img src={isometric}/>}/>
          <Card href="/dots/" title="Carnival Dots" image={<img src={dots}/>}/>
        </div>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Blog</SectionTitle>
        <div style={{paddingBottom: 15}}>
          <Linka href="https://blog.timothy.best/" target="_blank">
            The great migration
          </Linka>
        </div>
        <div style={{paddingBottom: 15}}>
          <Linka href="https://medium.com/the-u-s-digital-service/why-we-serve-tim-best-a66ece730d46" target="_blank">
            Why We Serve: Tim Best
          </Linka>
        </div>
        <div style={{paddingBottom: 15}}>
          <Linka href="https://onesignal.com/blog/modernizing-our-frontend-part-1-coffeescript-typescript/" target="_blank">
            Modernizing OneSignal's Frontend
          </Linka>
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
