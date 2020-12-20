import React from 'react'
import InfoSection from '../InfoSection'
import { servicesObjOne, servicesObjTwo, servicesObjThree } from '../InfoSection/customizations'
import { RedLine } from '../Utilities/Redline'
import {
  ServicesInfoChildOne,
  ServicesInfoChildThree,
  ServicesInfoChildTwo,
} from '../InfoSection/InfoChildren'
import { BlackH1, RedSpan } from '../Utilities/TextElements'
import { ServicesPageHeadingWrapper } from './servicesPage.elements'

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <ServicesPageHeadingWrapper>
        <BlackH1>
          Mano teikiamos<RedSpan> paslaugos:</RedSpan>
        </BlackH1>
      </ServicesPageHeadingWrapper>
      <RedLine id="masazai" />
      <InfoSection {...servicesObjOne}>
        <ServicesInfoChildOne />
      </InfoSection>
      <RedLine id="konsultacijos" />
      <InfoSection {...servicesObjTwo}>
        <ServicesInfoChildTwo />
      </InfoSection>
      <RedLine id="dovanu-kuponai" />
      <InfoSection {...servicesObjThree}>
        <ServicesInfoChildThree />
      </InfoSection>
    </>
  )
}

export default ServicesPage
