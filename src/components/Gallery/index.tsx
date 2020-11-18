import React from 'react'
import Gallery from 'react-photo-gallery'
import {
  GalleryContainer,
  GalleryWrapper,
  PhotoWrapper,
  GalleryH2,
  GalleryH1,
  GalleryP,
} from './GalleryElements'
import { RedSpan, BlackH1, MainP } from '../Utilities/TextElements'

const photos = [
  {
    src: './gal_3.jpg',
    width: 4,
    height: 4,
  },
  {
    src: './gal_2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: './gal_1.jpg',
    width: 4,
    height: 4,
  },
  {
    src: './gal_4.jpg',
    width: 4,
    height: 4,
  },
  {
    src: './gal_5.jpg',
    width: 4,
    height: 4,
  },
  {
    src: './gal_6.jpg',
    width: 3,
    height: 4,
  },
  {
    src: './gal_7.jpg',
    width: 5,
    height: 4,
  },
  {
    src: './gal_8.jpg',
    width: 4,
    height: 6,
  },
]

const GallerySection = () => {
  return (
    <GalleryContainer id="gallery">
      <BlackH1>
        Visuomet patenkinti <RedSpan>klientai</RedSpan> !
      </BlackH1>
      <MainP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima sint asperiores,
        quasi animi facilis amet dolore quam nulla velit nemo mollitia ipsa! Placeat dicta molestias
        iusto minus vero ea?
      </MainP>
      <GalleryWrapper>
        <PhotoWrapper>
          <Gallery photos={photos} />
        </PhotoWrapper>
      </GalleryWrapper>
    </GalleryContainer>
  )
}

export default GallerySection
