import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Column2,
  ImgWrap,
  Img,
} from './InfoElements'

interface InfoProps {
  imgStart: boolean
  img: string
  imgSize: number
  noPadding: boolean
  resizeAtFull: boolean
}

const InfoSection: React.FC<InfoProps> = ({
  children,
  imgStart,
  img,
  imgSize,
  noPadding,
  resizeAtFull,
}) => {
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
    <InfoContainer noPadding={noPadding} id="intro">
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper data-aos={isIndex ? 'fade-up' : ''}>{children}</TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap
              imgSize={imgSize}
              resizeAtFull={resizeAtFull}
              data-aos={isIndex ? 'fade-up' : ''}
            >
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
