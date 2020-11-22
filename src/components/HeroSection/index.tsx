import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import MainButton from '../MainButton'
import { RedSpan } from '../Utilities/TextElements'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import { WhiteH1 } from '../Utilities/TextElements'

const DynamicBgVideo = dynamic(() => import('../Utilities/DynamicVideo'), { ssr: false })
//import DynamicBgVideo from '../Utilities/DynamicVideo'

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <DynamicBgVideo />
      </HeroBg>
      <HeroContent>
        <WhiteH1>
          Jūsų sveikata mano <RedSpan>rankose</RedSpan> !
        </WhiteH1>

        <HeroP>Masažai pagal invidualius Jūsų poreikius.</HeroP>
        <HeroBtnWrapper>
          <MainButton hero label="Registruotis vizitui" href="/about" />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
