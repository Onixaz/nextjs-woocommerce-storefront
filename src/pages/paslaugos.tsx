import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/Utilities/PageContainer'

interface PaslaugosProps {}

const Paslaugos: React.FC<PaslaugosProps> = () => {
  return (
    <Layout pageTitle="Paslaugos">
      <PageContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cjb0XQbfOV4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </PageContainer>
    </Layout>
  )
}

export default Paslaugos
