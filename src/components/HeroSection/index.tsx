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
  VideoThumb,
} from './HeroElements'

interface HeroProps {
  isVideoLoaded: boolean
}

const HeroSection: React.FC<HeroProps> = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadedData = () => {
    setIsVideoLoaded(true)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted onLoadedData={onLoadedData} src="/video2_Trim.mp4" />
        <VideoThumb alt="thumbnail" isVideoLoaded={isVideoLoaded} src="./video2_Trim_Moment.jpg" />
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
