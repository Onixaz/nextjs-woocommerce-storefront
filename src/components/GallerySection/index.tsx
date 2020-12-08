import React from 'react'
import dynamic from 'next/dynamic'

const Photos = dynamic(() => import('../Photos'), { ssr: false })

import {
  GalleryPhotosWrapper,
  GallerySectionContainer,
  GallerySlideBg,
} from './gallerySection.elements'
import { RedLine } from '../Utilities/Redline'
import { RedSpan, BlackH1 } from '../Utilities/TextElements'

interface GallerySectionProps {
  imgUrls: string[]
  imgDesc: string[]
  rows: number
  gaps: number
}

const GallerySection: React.FC<GallerySectionProps> = ({ imgUrls, imgDesc, rows, gaps }) => {
  return (
    <GallerySectionContainer id="gallery">
      <BlackH1>
        Akimirkos iš mano <RedSpan>darbo!</RedSpan>
      </BlackH1>

      <GalleryPhotosWrapper>
        <RedLine data-aos="zoom-in" />
        <Photos gaps={gaps} rows={rows} imgUrls={imgUrls} imgDesc={imgDesc} />
        <RedLine data-aos="zoom-in" />
      </GalleryPhotosWrapper>
      {/* <GallerySlideBg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0d0d0d" fill-opacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path>
        </svg>
      </GallerySlideBg> */}
    </GallerySectionContainer>
  )
}

export default GallerySection
