import React from 'react'
import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'
import { Container } from '../styles/Containers'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Container>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
          iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente,
          beatae non facere veniam magni placeat autem!
        </p>
      </Container>
    </>
  )
}

export default withLayout(<Layout pageTitle="Index" />)(About)
