import React from 'react'

import Layout from '../components/Layout'
import InfoSection from '../components/InfoSection'
import { aboutObj } from '../components/InfoSection/customizations'
import AboutHeading from '../components/AboutHeading'
import PageContainer from '../components/Utilities/PageContainer'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout pageTitle="Apie mane">
      <PageContainer>
        <AboutHeading />
        <InfoSection {...aboutObj} />
      </PageContainer>
    </Layout>
  )
}

export default About
