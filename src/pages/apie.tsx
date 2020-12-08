import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/Utilities/PageContainer'
import AboutPage from '../components/AboutPage'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout pageTitle="Apie mane">
      <PageContainer>
        <AboutPage />
      </PageContainer>
    </Layout>
  )
}

export default About
