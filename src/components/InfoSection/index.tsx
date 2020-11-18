import React from 'react'
import MainButton from '../MainButton'

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

interface InfoProps {
  imgStart: boolean
  img: string[]
  legend: string[]
  topLine: string
  description: string
  headLine: string
  visible: boolean
  carousel: boolean
}

const InfoSection: React.FC<InfoProps> = ({
  imgStart,
  img,
  topLine,
  description,
  headLine,
  carousel,
  legend,
  visible,
}) => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              {/* <TopLine>{topLine}</TopLine> */}
              <Heading>Masažuotojas Romanas</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <MainButton label="Plačiau" href="/about" />
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src="./romanas_1.jpg" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
