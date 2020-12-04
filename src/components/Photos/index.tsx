import React from 'react'
import LazyLoad from 'react-lazyload'

import { PhotoCard, Photo, PhotoContainer } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://masazuotojasromanas.000webhostapp.com/wp-content/uploads/2020/12/'

interface PhotosProps {
  imgUrls: string[]
}

const Photos: React.FC<PhotosProps> = ({ imgUrls }) => {
  const listImages = imgUrls.map((img) => {
    return (
      <PhotoCard key={img.toString()}>
        <Photo src={baseUrl + img} />
      </PhotoCard>
    )
  })
  return <PhotoContainer data-aos="fade-up">{listImages}</PhotoContainer>
}

export default Photos
