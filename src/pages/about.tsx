import React from 'react'
import Layout from '../components/Layout'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
        iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente, beatae
        non facere veniam magni placeat autem!
      </p>
    </Layout>
  )
}

export default about
