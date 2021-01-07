import React from 'react'

import { Container } from '../Section/section.elements'

interface SectionProps {
  id: string
  width: number
  height: number
}

const Section: React.FC<SectionProps> = ({ children, id, width, height }) => {
  return (
    <Container customHeight={height} customWidth={width} id={id}>
      {children}
    </Container>
  )
}

export default Section
