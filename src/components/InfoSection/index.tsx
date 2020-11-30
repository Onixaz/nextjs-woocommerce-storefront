import React, { useEffect, useState } from 'react'
import MainButton from '../MainButton'
import { RedSpan } from '../Utilities/TextElements'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from './InfoElements'

interface InfoProps {
  imgStart: boolean
  headingPresent: boolean
  buttonPresent: boolean
  infoText: string
  img: string
  noPadding: boolean
  headingScale?: number
  headingRegular?: string
  headingEmp?: string | null
}

const InfoSection: React.FC<InfoProps> = ({
  imgStart,
  headingPresent,
  buttonPresent,
  infoText,
  img,
  noPadding,
  headingScale,
  headingRegular,
  headingEmp,
}) => {
  //const imgStart = false
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
    <InfoContainer noPadding={noPadding} id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper data-aos={isMobile ? 'fade-up' : 'fade-right'}>
              {/* <TopLine>{topLine}</TopLine> */}
              {headingPresent ? (
                <Heading headingScale={headingScale}>
                  {headingRegular} <RedSpan>{headingEmp}</RedSpan>
                </Heading>
              ) : null}
              <Subtitle>{infoText}</Subtitle>
              {buttonPresent ? (
                <BtnWrap>
                  <MainButton label="Plačiau" href="/about" />
                </BtnWrap>
              ) : null}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap data-aos={isMobile ? 'fade-up' : 'fade-left'}>
              {/*Disabled for Netlfy for now */}
              {/* <NextCustomImage src={img} alt="Masažuotojas Romanas" width={555} height={555} /> */}
              <Img src={img} alt="Masažuotojas Romanas" />
            </ImgWrap>
          </Column2>
        </InfoRow>
        {/* <RedLine /> */}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
