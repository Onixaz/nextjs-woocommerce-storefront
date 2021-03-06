import React from 'react'
import * as HeroStyles from './styled'

const Hero: React.FC = () => {
  return (
    <HeroStyles.Wrapper>
      <HeroStyles.Bg>
        <HeroStyles.Heading>Welcome</HeroStyles.Heading>
        <HeroStyles.Subheading>
          This is your unofficial WooCommerce Storefront theme made with Next.js
        </HeroStyles.Subheading>
      </HeroStyles.Bg>
    </HeroStyles.Wrapper>
  )
}

export default Hero
