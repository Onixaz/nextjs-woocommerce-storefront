import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import PhotoModal from '../Modal/modal'

import { PhotoCard, Photo, PhotoContainer, PhotoAnimHolder } from './photos.elements'

const baseUrl =
  'https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/'

interface PhotosProps {
  imgUrls: string[]
  imgDesc?: string[]
  rows: number
  gaps: number
  showDescription: boolean
}

const Photos: React.FC<PhotosProps> = ({ imgUrls, imgDesc, rows, gaps, showDescription }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState('')
  const [modalText, setModalText] = useState('')

  const openModal = (id: number) => {
    setShowModal(true)
    setModalImg(baseUrl + imgUrls[id])
    setModalText(imgDesc[id])
  }

  const listImages = imgUrls.map((img, index) => {
    return (
      <React.Fragment key={index}>
        <PhotoCard gaps={gaps} onClick={() => openModal(index)}>
          <PhotoAnimHolder>
            <LazyLoad offset={300}>
              <Photo src={baseUrl + img} id={img} />
            </LazyLoad>
          </PhotoAnimHolder>
        </PhotoCard>
      </React.Fragment>
    )
  })

  return (
    <>
      <PhotoContainer rows={rows}>{listImages}</PhotoContainer>
      <PhotoModal
        prev
        showDescription={showDescription}
        showModal={showModal}
        imgSrc={modalImg}
        imgDesc={modalText}
        setShowModal={setShowModal}
      />
    </>
  )
}

export default Photos

//data-aos={isIndex ? 'fade-up' : ''}
