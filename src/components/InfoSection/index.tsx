import React from 'react'
import { DivBreaker } from '../../styles/utility'
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
  RedLine,
} from './InfoElements'

interface InfoProps {
  imgStart: boolean
  description: string
}

const InfoSection: React.FC<InfoProps> = ({ imgStart, description }) => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              {/* <TopLine>{topLine}</TopLine> */}
              <Heading>
                Masažuotojas <RedSpan>Romanas</RedSpan>
              </Heading>
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
        <RedLine />
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
