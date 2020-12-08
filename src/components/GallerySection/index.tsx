import React from 'react'
import dynamic from 'next/dynamic'

const Photos = dynamic(() => import('../Photos'), { ssr: false })

import { GalleryPhotosWrapper, GallerySectionContainer } from './gallerySection.elements'
import { RedLine } from '../Utilities/Redline'
import { RedSpan, BlackH1 } from '../Utilities/TextElements'

interface GallerySectionProps {
  imgUrls: string[]
  imgDesc: string[]
  rows: number
}

const GallerySection: React.FC<GallerySectionProps> = ({ imgUrls, imgDesc, rows }) => {
  return (
    <GallerySectionContainer id="gallery">
      <BlackH1>
        Akimirkos iš mano <RedSpan>darbo!</RedSpan>
      </BlackH1>
      <GalleryPhotosWrapper>
        <RedLine data-aos="zoom-in" />
        <Photos rows={rows} imgUrls={imgUrls} imgDesc={imgDesc} />
        <RedLine data-aos="zoom-in" />
      </GalleryPhotosWrapper>
    </GallerySectionContainer>
  )
}

export default GallerySection
