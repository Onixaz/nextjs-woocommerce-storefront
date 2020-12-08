import React from 'react'
import Photos from '../Photos'
import { BlackH1, RedSpan } from '../Utilities/TextElements'
import { QualificationsWrapper, QualPhotosWrapper } from './qualifications.elements'

interface QualificationsSectionProps {
  imgUrls: string[]
  imgDesc: string[]
  rows: number
}

const QualificationsSection: React.FC<QualificationsSectionProps> = ({
  imgUrls,
  imgDesc,
  rows,
}) => {
  return (
    <>
      <QualificationsWrapper>
        <BlackH1>
          Mano <RedSpan>kvalifikacijos:</RedSpan>
        </BlackH1>
      </QualificationsWrapper>
      <QualPhotosWrapper>
        <Photos rows={rows} imgUrls={imgUrls} imgDesc={imgDesc} />
      </QualPhotosWrapper>
    </>
  )
}

export default QualificationsSection
