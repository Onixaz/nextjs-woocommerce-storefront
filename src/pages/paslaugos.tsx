import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/Utilities/PageContainer'
import InfoSection from '../components/InfoSection'
import {
  servicesObjOne,
  servicesObjTwo,
  servicesObjThree,
} from '../components/InfoSection/customizations'
import { RedLine } from '../components/Utilities/Redline'

interface PaslaugosProps {}

const Paslaugos: React.FC<PaslaugosProps> = () => {
  return (
    <Layout pageTitle="Paslaugos">
      <PageContainer>
        <InfoSection {...servicesObjOne} />
        <RedLine />
        <InfoSection {...servicesObjTwo} />
        <RedLine />
        <InfoSection {...servicesObjThree} />
      </PageContainer>
    </Layout>
  )
}

export default Paslaugos
