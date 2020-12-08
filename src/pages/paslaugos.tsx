import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/Utilities/PageContainer'
import ServicesPage from '../components/ServicesPage'

interface PaslaugosProps {}

const Paslaugos: React.FC<PaslaugosProps> = () => {
  return (
    <Layout pageTitle="Paslaugos">
      <PageContainer>
        <ServicesPage />
      </PageContainer>
    </Layout>
  )
}

export default Paslaugos
