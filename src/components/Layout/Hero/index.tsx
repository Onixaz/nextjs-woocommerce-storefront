import React from 'react'
import { HeroBg, HeroContainer, HeroHeading, HeroSubheading } from './HeroElements'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroHeading>Welcome</HeroHeading>
        <HeroSubheading>
          This is your unofficial WooCommerce Storefront theme made with Next.js
        </HeroSubheading>
      </HeroBg>
    </HeroContainer>
  )
}

export default Hero
