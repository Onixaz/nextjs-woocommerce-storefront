import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
  imgSize: number
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
  imgSize,
  noPadding,
  headingScale,
  headingRegular,
  headingEmp,
}) => {
  //const imgStart = false
  const [isIndex, setIsIndex] = useState(false)
  const router = useRouter()

  const changeAnims = () => {
    if (router.pathname != '/') {
      setIsIndex(false)
    } else {
      setIsIndex(true)
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
            <TextWrapper data-aos={isIndex ? 'fade-up' : ''}>
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
            <ImgWrap imgSize={imgSize} data-aos={isIndex ? 'fade-up' : ''}>
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
