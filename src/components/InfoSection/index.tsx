import React, { useEffect, useState } from 'react'
import MainButton from '../MainButton'
import { RedSpan } from '../Utilities/TextElements'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
} from './InfoElements'

interface InfoProps {}

const InfoSection: React.FC<InfoProps> = () => {
  const imgStart = false
  const [isMobile, setIsMobile] = useState(false)

  const changeAnims = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    changeAnims()
  }, [])

  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1 data-aos={isMobile ? 'fade-up' : 'fade-right'}>
            <TextWrapper>
              {/* <TopLine>{topLine}</TopLine> */}
              <Heading>
                Masažuotojas <RedSpan>Romanas</RedSpan>
              </Heading>
              <Subtitle>
                Sveiki 😊 Mano vardas Romanas ir esu visada pasirengęs padėti žmonėms, kurie
                kasdieniame gyvenime patiria daug streso, įtampos, jaučia fizinį skausmą ir nežino,
                kaip su tuo kovoti ar tiesiog nori atitrūkti nuo darbų ir skirti laiko sau.
              </Subtitle>
              <BtnWrap>
                <MainButton label="Plačiau" href="/about" />
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2 data-aos={isMobile ? 'fade-up' : 'fade-left'}>
            <ImgWrap>
              <Img src="./romanas_2.jpg" />
            </ImgWrap>
          </Column2>
        </InfoRow>
        {/* <RedLine /> */}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
