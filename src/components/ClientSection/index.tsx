import React from 'react'
//import Testimonals from '../Testimonials'

import dynamic from 'next/dynamic'

import { RedSpan, BlackH1, MainP } from '../Utilities/TextElements'
import { RedLine } from '../Utilities/Redline'
import {
  ClientsSectionContainer,
  TextWrapper,
  TestimonialsContainer,
} from './clientSection.elements'

interface ClientSectionProps {}

const Testimonals = dynamic(() => import('../Testimonials'), { ssr: false })

const ClientSection: React.FC<ClientSectionProps> = () => {
  return (
    <ClientsSectionContainer>
      <TextWrapper>
        <BlackH1>
          Mane<RedSpan> Rekomenduoja!</RedSpan>
        </BlackH1>
        <MainP>Mano klientai visada žino geriausiai, štai ką jie kalba apie mane:</MainP>
      </TextWrapper>
      {/* <RedLine data-aos="fade-up" /> */}
      <TestimonialsContainer>
        <Testimonals />
      </TestimonialsContainer>
      {/* <RedLine data-aos="fade-up" /> */}

      {/* <Gallery /> */}

      {/* <CardContainer data-aos="fade-up">{listImages}</CardContainer> */}
      {/* <RedLine /> */}
    </ClientsSectionContainer>
  )
}

export default ClientSection
