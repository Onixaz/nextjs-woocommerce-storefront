import React from 'react'
import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
        iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente, beatae
        non facere veniam magni placeat autem!
      </p>
    </>
  )
}

export default withLayout(<Layout pageTitle="Apie Mane" />)(About)
