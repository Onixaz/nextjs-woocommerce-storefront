import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import MainButton from '../MainButton'
import { RedSpan } from '../Utilities/TextElements'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'

const DynamicBgVideo = dynamic(() => import('../Utilities/DynamicVideo'), { ssr: false })

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <DynamicBgVideo />

        {/* <VideoBg
          autoPlay
          loop
          muted
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
          src="/video2_Trim.mp4"
        /> */}
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
