import React from 'react'
import Testimonals from '../Testimonials'

import { RedSpan, BlackH1, MainP } from '../Utilities/TextElements'
import {
  GalleryContainer,
  PhotoCard,
  Photo,
  CardContainer,
  TextWrapper,
  TestimonialsContainer,
  RedLine,
} from './GalleryElements'

const GallerySection = () => {
  return (
    <GalleryContainer>
      <TextWrapper>
        <BlackH1>
          Mane<RedSpan> Rekomenduoja!</RedSpan>
        </BlackH1>
        <MainP>Mano klientai visada žino geriausiai, o štai ką jie sako apie mane:</MainP>
      </TextWrapper>
      <TestimonialsContainer data-aos="fade-up">
        <Testimonals />
      </TestimonialsContainer>
      <RedLine data-aos="fade-up" />

      <CardContainer data-aos="fade-up">
        <PhotoCard>
          <Photo src="/gal_3.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_5.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_1.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_4.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="/gal_2.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_8.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_6.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_7.jpg" />
        </PhotoCard>
      </CardContainer>
      <RedLine data-aos="fade-up" />
    </GalleryContainer>
  )
}

export default GallerySection
