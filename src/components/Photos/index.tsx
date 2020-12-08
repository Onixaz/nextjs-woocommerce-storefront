import React from 'react'
import LazyLoad from 'react-lazyload'

import { PhotoCard, Photo, PhotoContainer, PhotoAnimHolder, PhotoText } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://masazuotojasromanas.000webhostapp.com/wp-content/uploads/2020/12/'

interface PhotosProps {
  imgUrls: string[]
  imgDesc: string[]
  rows: number
  gaps: number
}

const Photos: React.FC<PhotosProps> = ({ imgUrls, imgDesc, rows, gaps }) => {
  const listImages = imgUrls.map((img, index) => {
    return (
      <PhotoCard gaps={gaps} key={index}>
        <PhotoAnimHolder>
          <Photo src={baseUrl + img} />
          <PhotoText>{imgDesc[index]}</PhotoText>
        </PhotoAnimHolder>
      </PhotoCard>
    )
  })
  return (
    <PhotoContainer rows={rows} data-aos="fade-up">
      {listImages}
    </PhotoContainer>
  )
}

export default Photos
