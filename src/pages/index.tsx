import * as React from 'react'
import styled from 'styled-components'

import '../static/index.css'
import composersCouch from '../static/composers_couch/homescreen.png'
import modelMaker from '../static/index/modelMaker.jpg'
import simpleReport from '../static/index/simpleReport.png'
import generalSet from '../static/index/generalSet.png'
import travel from '../static/index/travel.jpg'
import bird from '../static/index/bird.jpg'
import door from '../static/index/door.jpg'
import dots from '../static/index/dot.svg'
import isometric from '../static/with_lines_pattern.svg'
import lines from '../static/index/triangles.svg'

import SEO from '../components/seo'
import ContentSection from '../components/index/Container'
import Card from '../components/index/Card'
import TitleCard from '../components/index/TitleCard'


const Footer = styled.footer`
  width: 100%;
  background: #f8f8fa;
  padding: 40px;

  @media (max-width: 600px) {
    padding: 24px 8px;
  }
`

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  font-size: 1rem;
  color: #666;
`

const FooterLink = styled.a`
  color: inherit;
  text-decoration: underline;
  margin: 0 6px;

  &:hover,
  &:focus {
    color: #4e66c4;
  }
`
const Header = styled.h2`
  color: #fff;
  font-size: 30px;
`

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <TitleCard>
      <ContentSection>
        <Header>Photography</Header>
      </ContentSection>
      <ContentSection>
        <Card href="https://blog.timothy.best/" title="Travel" image={travel} />
        <Card
          href="https://birding.timothy.best/"
          title="Birding"
          image={bird}
        />
        <Card
          href="https://timothy.best/adoorable"
          title="Doors"
          image={door}
        />
      </ContentSection>
      <ContentSection>
        <Header>Projects</Header>
      </ContentSection>
      <ContentSection>
        <Card
          href="http://generalset.io/"
          title="GeneralSet.io"
          image={generalSet}
          description="An adaption of the card game Set to work with any arbitrary features (shape, color, shading, etc.)"
        />
        <Card
          href="https://simplereport.gov/"
          image={simpleReport}
          title="SimpleReport"
          description="A open source web application to capture COVID-19 testing from non traditional testing sites."
        />
        <Card
          href="https://modelmaker.titanic.design/"
          title="Site Model Maker"
          image={modelMaker}
          description="Tool for architects to quickly make 3d printable sites models."
        />
        <Card
          href="/composerscouch/"
          title="ComposersCouch"
          image={composersCouch}
          description="A web service to improve how Fans, Musicians and Venues connect"
        />
      </ContentSection>
      <ContentSection>
        <Header>One Day Builds</Header>
      </ContentSection>
      <ContentSection>
        <Card href="/lines/" title="Lines" image={lines} />
        <Card href="/isometric/" title="Isometric" image={isometric} />
        <Card href="/dots/" title="Carnival Dots" image={dots} />
        <ContentSection>
          <Header>Links</Header>
        </ContentSection>
        <Card
          href="https://medium.com/the-u-s-digital-service/why-we-serve-tim-best-a66ece730d46"
          title="Why We Serve: Tim Best"
        />
        <Card
          href="https://onesignal.com/blog/modernizing-our-frontend-part-1-coffeescript-typescript/"
          title="Modernizing OneSignal's Frontend"
        />
      </ContentSection>
    </TitleCard>
    <Footer>
      <FooterContent>
        <span>site@timothy.best</span> |{' '}
        <FooterLink
          href="https://github.com/timbest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>{' '}
        |{' '}
        <FooterLink
          href="https://www.linkedin.com/in/tim-best-88a69758/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
      </FooterContent>
    </Footer>
  </div>
)

export default IndexPage
