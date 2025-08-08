import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import IBMPlexMono from './components/IBM-Plex-Mono.woff2'
import SEO from '../../components/seo'
import Quote from './components/Quote'
import Typewriter from './components/Typewriter'


const IBMPlexMonoFont = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    src: local('IBM Plex Mono'), url(${IBMPlexMono}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
const Wrapper = styled.div`
  height: 100vh;
  min-height: 100%;
  padding: 4em;
  color: #d4d4d4;
  font-family: 'IBM Plex Mono', monospace;
  background-color: #1e1e1e;
  line-height: 1.3;
  margin: -8px;
`
const Container = styled.div`
  max-width: 500px;
`
const StyledLink = styled.a`
  color: #388cc8;
`
const H2 = styled.h2`
  color: #9cdcfe;
  font-size: 24px;
`
const H3 = styled.h3`
  color: #9cdcfe;
  padding: 10px 0 20px;
`
const Subtitle = styled.div`
  display: flex;
  font-size: 24px;
`

const Adoorable: React.FC = () => {
  return (
    <Wrapper>
      <IBMPlexMonoFont />
      <SEO title="@an.adoorable.world" />
      <Container>
        <Subtitle>
          <H2 as="h2">A door is </H2>
          <Typewriter
            words={[
              'Janus',
              'a home',
              'an exit',
              'the past',
              'a portal',
              'a passage',
              'a barrier',
              'a mystery',
              'the future',
              'an entrance',
              'an opportunity',
            ]}
            width={14.4}
            speed={80}
          />
        </Subtitle>
        <p>
          <StyledLink
            href="https://www.instagram.com/an.adoorable.world/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @an.adoorable.world
          </StyledLink>{' '}
          is an instagram profile with a curated list of the BEST doors. Follow
          me and part take on a journey as we explore the doors of this world to
          find the truth of what it means to be a door.
        </p>
        <H3 as="h3">What the fans are saying</H3>
        <Quote
          text="Did you follow Tim? OR AN INSTAGRAM ACCOUNT ABOUT DOORS?!?!"
          author="Katherine"
        />
        <Quote
          text="Lol, this is the most Tim thing I have heard!!"
          author="Amit"
        />
        <Quote text="A picture with YOU in it! Yay! " author="Leslie" />
        <Quote text="Hah" author="Jake" />
        <Quote text="All of these are amazing" author="John" />
        <Quote
          text="The colors and textures in this one are really captivating!"
          author="Jayna"
        />
        <Quote text="*" author="Roland" />
        <Quote text="Beautiful" author="Liz" />
        <Quote text="Wow great door. 9/10" author="Alex" />
      </Container>
    </Wrapper>
  )
}

export default Adoorable
