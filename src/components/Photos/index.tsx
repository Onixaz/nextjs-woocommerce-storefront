import React from 'react'
import LazyLoad from 'react-lazyload'

import { PhotoCard, Photo, PhotoContainer, PhotoAnimHolder, PhotoText } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://masazuotojasromanas.000webhostapp.com/wp-content/uploads/2020/12/'

interface PhotosProps {
  imgUrls: string[]
}

const Photos: React.FC<PhotosProps> = ({ imgUrls }) => {
  const listImages = imgUrls.map((img) => {
    return (
      <PhotoCard key={img.toString()}>
        <PhotoAnimHolder>
          <Photo src={baseUrl + img} />
          <PhotoText>Lankstau klientą...</PhotoText>
        </PhotoAnimHolder>
      </PhotoCard>
    )
  })
  return <PhotoContainer data-aos="fade-up">{listImages}</PhotoContainer>
}

export default Photos
