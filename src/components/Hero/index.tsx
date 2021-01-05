import React from 'react'
import {
  HeroBg,
  HeroGrid,
  Img,
  ImageCol,
  TextCol,
  HeroHeader,
  HeroTextWrapper,
  HeroSubHeader,
  HeroBtn,
} from './hero.elements'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroBg>
      <HeroGrid>
        <TextCol>
          <HeroTextWrapper>
            <HeroSubHeader>Gėlės į namus!</HeroSubHeader>
            <HeroHeader>Didžiausia gėlių išparduotuvė internete!</HeroHeader>
            <HeroBtn>Pasiūlymai!</HeroBtn>
          </HeroTextWrapper>
        </TextCol>
        <ImageCol>
          <Img src="./plant_hero.jpg" alt="plant" />
        </ImageCol>
      </HeroGrid>
    </HeroBg>
  )
}

export default Hero
