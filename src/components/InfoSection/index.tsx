import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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
  NextCustomImage,
} from './InfoElements'

interface InfoProps {}

const InfoSection: React.FC<InfoProps> = () => {
  const imgStart = false
  const [isMobile, setIsMobile] = useState(true)

  const changeAnims = () => {
    if (window.innerWidth > 992) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
  }

  useEffect(() => {
    //window.addEventListener('scroll', changeAnims)
    changeAnims()
  }, [])

  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper data-aos={isMobile ? 'fade-up' : 'fade-right'}>
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
          <Column2>
            <ImgWrap data-aos={isMobile ? 'fade-up' : 'fade-left'}>
              <NextCustomImage
                src="/masazuotojas_romanas.jpg"
                alt="Masažuotojas Romanas"
                width={555}
                height={555}
              />
            </ImgWrap>
          </Column2>
        </InfoRow>
        {/* <RedLine /> */}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
