import React from 'react'

import { Container } from '../Section/section.elements'

interface SectionProps {
  id: string
  width: number
}

const Section: React.FC<SectionProps> = ({ children, id, width }) => {
  return (
    <Container customWidth={width} id={id}>
      {children}
    </Container>
  )
}

export default Section
