import React from 'react'
import Layout from '../components/Layout'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloremque rerum ducimus
        asperiores ratione, hic laudantium! Molestiae nulla illo expedita.
      </p>
    </Layout>
  )
}

export default contact
