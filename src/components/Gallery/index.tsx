import React from 'react'
import { RedSpan, BlackH1, MainP } from '../Utilities/TextElements'
import {
  GalleryContainer,
  PhotoCard,
  Photo,
  CardContainer,
  TextWrapper,
  GalleryP,
} from './GalleryElements'

const GallerySection = () => {
  return (
    <GalleryContainer>
      <TextWrapper>
        <BlackH1>
          Lauksiu<RedSpan> Jūsų!</RedSpan>
        </BlackH1>
        <MainP>
          Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem
          non mi integer non faucibus.
        </MainP>
      </TextWrapper>

      <CardContainer>
        <PhotoCard>
          <Photo src="./gal_3.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_4.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_1.jpg" />
        </PhotoCard>
        <PhotoCard>
          <Photo src="./gal_5.jpg" />
        </PhotoCard>
      </CardContainer>
    </GalleryContainer>
  )
}

export default GallerySection
