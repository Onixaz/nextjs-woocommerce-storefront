import React from 'react'
import Testimonals from '../Testimonials'
import LazyLoad from 'react-lazyload'

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

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://masazuotojasromanas.000webhostapp.com/wp-content/uploads/2020/12/'

const imgUrls = [
  'gal_1.jpg',
  'gal_2.jpg',
  'gal_3.jpg',
  'gal_4.jpg',
  'gal_5.jpg',
  'gal_6.jpg',
  'gal_7.jpg',
  'gal_8.jpg',
]

const GallerySection = () => {
  const listImages = imgUrls.map((img) => {
    return (
      <PhotoCard key={img.toString()}>
        <LazyLoad>
          <Photo src={baseUrl + img} />
        </LazyLoad>
      </PhotoCard>
    )
  })
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
        {listImages}
        {/* 
        <PhotoCard>
          <LazyLoad>
            <Photo src={baseUrl + 'gal_1.jpg'} />
          </LazyLoad>
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_2.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_3.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_4.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_5.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_6.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_7.jpg'} />
        </PhotoCard>
        <PhotoCard>
          <Photo src={baseUrl + 'gal_8.jpg'} />
        </PhotoCard> */}
      </CardContainer>
      {/* <RedLine /> */}
    </GalleryContainer>
  )
}

export default GallerySection
