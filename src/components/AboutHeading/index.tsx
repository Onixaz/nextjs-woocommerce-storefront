import React from 'react'
import { HeadingWrapper } from './aboutHeading.elements'
import { MainP, BlackH1, RedSpan } from '../Utilities/TextElements'

const AboutHeading = () => {
  return (
    <HeadingWrapper>
      <BlackH1>
        Sveiki, <RedSpan>draugai!</RedSpan>
      </BlackH1>

      <MainP>
        Šiais laikais žmonės, ypatingai tie, kurie gyvena miestuose, susiduria su neabejotinai
        didele doze streso. Kaip masažuotojas, galiu drąsiai teigti, jog ne tik stresas, bet ir
        neteisinga laikysena tiek darbe, tiek sportuojant ar atliekant buitinius reikalus - yra
        neteisinga. Trumpai tariant - mes praradome balansą ir harmoniją, o tai smarkiai alina mūsų
        organizmą, kurio imunitetas pasidaro silpnas ir pradeda pulti ligos bei traumos.
      </MainP>
    </HeadingWrapper>
  )
}

export default AboutHeading
