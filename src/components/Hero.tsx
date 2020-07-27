import React from 'react'
import { HeroContainer } from '../styles/Containers'
import { Title, Paragraph } from '../styles/TextElements'
import ButtonElement from '../styles/ButtonElement'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroContainer>
      <Title hero>Next.js Blog</Title>
      <Paragraph light>Create a blog with Next.js and Typescript</Paragraph>
      <ButtonElement>Subscribe</ButtonElement>
    </HeroContainer>
  )
}

export default Hero
