import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
      <Container>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloremque rerum ducimus
          asperiores ratione, hic laudantium! Molestiae nulla illo expedita.
        </p>
      </Container>
    </Layout>
  )
}

export default contact
