import React from 'react'
import {
  HeroBg,
  HeroContainer,
  HeroGrid,
  Img,
  ImageCol,
  TextCol,
  HeroHeader,
  HeroTextWrapper,
  HeroSubHeader,
  HeroBtn,
} from './hero.elements'

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <HeroContainer>
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
    </HeroContainer>
  )
}

export default HeroSection
