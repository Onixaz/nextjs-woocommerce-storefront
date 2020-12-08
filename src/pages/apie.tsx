import React from 'react'

import Layout from '../components/Layout'
import InfoSection from '../components/InfoSection'
import { aboutObj } from '../components/InfoSection/customizations'
import AboutHeading from '../components/AboutHeading'
import PageContainer from '../components/Utilities/PageContainer'
import QualificationsSection from '../components/Qualifications'
import { aboutGalleryObj } from '../components/Photos/customizations'
import { AboutInfoChild } from '../components/InfoSection/InfoChildren'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout pageTitle="Apie mane">
      <PageContainer>
        <AboutHeading />
        <InfoSection {...aboutObj}>
          <AboutInfoChild />
        </InfoSection>

        <QualificationsSection {...aboutGalleryObj} />
      </PageContainer>
    </Layout>
  )
}

export default About
