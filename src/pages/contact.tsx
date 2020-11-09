import React from 'react'
import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'
import { Container } from '../styles/Containers'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloremque rerum ducimus
        asperiores ratione, hic laudantium! Molestiae nulla illo expedita.
      </p>
    </Container>
  )
}

export default withLayout(<Layout pageTitle="Contact" />)(Contact)
