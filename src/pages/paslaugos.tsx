import React from 'react'
import Layout from '../components/Layout'

interface PaslaugosProps {}

const Paslaugos: React.FC<PaslaugosProps> = () => {
  return (
    <Layout pageTitle="Paslaugos">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cjb0XQbfOV4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
        iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente, beatae
        non facere veniam magni placeat autem!
      </p>
    </Layout>
  )
}

export default Paslaugos
