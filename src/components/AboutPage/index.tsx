import React from 'react'
import { HeadingWrapper } from './aboutPage.elements'
import { MainP, BlackH1, RedSpan } from '../Utilities/TextElements'
import { RedLine } from '../Utilities/Redline'
import InfoSection from '../InfoSection'
import { aboutObj } from '../InfoSection/customizations'
import QualificationsSection from '../Qualifications'
import { aboutGalleryObj } from '../Photos/customizations'
import { AboutInfoChild } from '../InfoSection/InfoChildren'

const AboutPage = () => {
  return (
    <>
      <HeadingWrapper>
        <BlackH1>
          Sveiki, <RedSpan>draugai!</RedSpan>
        </BlackH1>
        <RedLine />

        <MainP>
          Šiais laikais žmonės, ypatingai tie, kurie gyvena miestuose, susiduria su neabejotinai
          didele doze streso. Kaip masažuotojas, galiu drąsiai teigti, jog ne tik stresas, bet ir
          neteisinga laikysena tiek darbe, tiek sportuojant ar atliekant buitinius reikalus - yra
          neteisinga. Trumpai tariant - mes praradome balansą ir harmoniją, o tai smarkiai alina
          mūsų organizmą, kurio imunitetas pasidaro silpnas ir pradeda pulti ligos bei traumos.
        </MainP>
      </HeadingWrapper>
      <InfoSection {...aboutObj}>
        <AboutInfoChild />
      </InfoSection>
      <RedLine />

      <QualificationsSection {...aboutGalleryObj} />
    </>
  )
}

export default AboutPage
