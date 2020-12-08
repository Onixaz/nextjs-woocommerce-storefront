import React from 'react'
import LazyLoad from 'react-lazyload'

import { PhotoCard, Photo, PhotoContainer, PhotoAnimHolder, PhotoText } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://masazuotojasromanas.000webhostapp.com/wp-content/uploads/2020/12/'

interface PhotosProps {
  imgUrls: string[]
  imgDesc: string[]
  rows: number
}

const Photos: React.FC<PhotosProps> = ({ imgUrls, imgDesc, rows }) => {
  const listImages = imgUrls.map((img, index) => {
    return (
      <PhotoCard key={index}>
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
