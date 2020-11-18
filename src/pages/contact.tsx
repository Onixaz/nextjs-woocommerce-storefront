import React from 'react'
import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloremque rerum ducimus
        asperiores ratione, hic laudantium! Molestiae nulla illo expedita.
      </p>
    </div>
  )
}

export default withLayout(<Layout pageTitle="Susisiek" />)(Contact)
