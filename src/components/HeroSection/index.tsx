import React, { useState } from 'react'
import MainButton from '../MainButton'
import { RedSpan } from '../Utilities/TextElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements'

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src="/video2.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1 hero>
          Jūsų sveikata mano <RedSpan>rankose</RedSpan> !
        </HeroH1>

        <HeroP>Masažai pagal invidualius Jūsų poreikius.</HeroP>
        <HeroBtnWrapper>
          <MainButton hero label="Registruotis vizitui" href="/about" />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
