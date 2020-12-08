import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { RedSpan } from '../Utilities/TextElements'
import { Link as LinkS } from 'react-scroll'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroP,
  ScrollDownIconWrapper,
  IconHolder,
  IconDown,
} from './HeroElements'
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
        {/* <HeroBtnWrapper>
          <MainButton hero label="Registruotis vizitui" href="/about" />
        </HeroBtnWrapper> */}
        <ScrollDownIconWrapper>
          <HeroP>Skaityk toliau!</HeroP>
          <LinkS to="intro" smooth={true} duration={500} exact="true">
            <IconHolder>
              <IconDown />
            </IconHolder>
          </LinkS>
        </ScrollDownIconWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
