import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import ht from "../../static/index/Houndstooth.svg"
import htTransition from "../../static/index/Houndstooth_transition.svg"
import Montserrat from './Montserrat-SemiBold.ttf'

const MontserratFont = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${Montserrat}) format('truetype');
  }
`
const Houndstooth = styled.div`
  background-image: url(${ht});
  background-repeat: repeat;
  background-size: 200px;
  background-position: center bottom;
  min-height: 500px;
  height: 70vh;
  display: grid;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  overflow: hidden;
`
const Transition = styled.div`
  background-image: url(${htTransition});
  background-repeat: repeat;
  background-size: 200px;
  background-position: center top;
  height: 100px;
`
const Title = styled.div`
  font-family: 'Montserrat', 'Open Sans', sans-serif;
  font-size: clamp(2rem, 10vw, 90px);
  color: #fff;
  text-align: center;
  text-shadow:
    0px 4px 3px rgba(52, 37, 91, 0.4),
    0px 8px 13px rgba(52, 37, 91, 0.1),
    0px 18px 23px rgba(52, 37, 91, 0.1);
  word-break: break-word;
  padding: 0 1rem;
`
const Content = styled.div`
  background-color: #5603AD;
`

type Props = {
  children?: React.ReactNode;
};

const TitleCard: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MontserratFont />
      <Houndstooth>
        <div>
          <Title>Timothy.Best</Title>
        </div>
      </Houndstooth>
      <Transition/>
      <Content>
        {children}
      </Content>
    </>
  );
};

export default TitleCard
