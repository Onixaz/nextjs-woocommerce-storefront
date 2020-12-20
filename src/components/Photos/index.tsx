import React from 'react'
import LazyLoad from 'react-lazyload'

import { PhotoCard, Photo, PhotoContainer, PhotoAnimHolder, PhotoText } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/'

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
          <LazyLoad offset={300}>
            <Photo src={baseUrl + img} />
          </LazyLoad>
          <PhotoText>{imgDesc[index]}</PhotoText>
        </PhotoAnimHolder>
      </PhotoCard>
    )
  })
  return <PhotoContainer rows={rows}>{listImages}</PhotoContainer>
}

export default Photos

//data-aos={isIndex ? 'fade-up' : ''}
