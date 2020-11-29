import Image from 'next/image'
import styled from 'styled-components'

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 2rem 7rem 2rem;

  @media screen and (max-width: 992px) {
    padding: 9rem 2rem;
  }
`

export const InfoWrapper = styled.div`
  margin-top: rem;
  display: grid;
  position: relative;
  align-items: center;
  z-index: 1;
  width: 100%;
  min-height: 50vh;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  //border: 1px solid #000;

  border-radius: 15px;

  padding: 0 24px;
  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const InfoRow = styled.div<{ imgStart: boolean }>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);

  align-items: center;
  grid-gap: 30px;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 992px) {
    grid-gap: 5px;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-bottom: 15px;
  padding-right: 3rem;
  padding-left: 3rem;
  grid-area: col1;

  @media screen and (max-width: 992px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-bottom: 15px;
  padding-right: 2rem;
  padding-left: 2rem;
  grid-area: col2;

  @media screen and (max-width: 992px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
`

export const TopLine = styled.p`
  color: ${({ theme }) => theme.primaryRed};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: clamp(1.5rem, 5vw + 1rem, 3.5rem);
  letter-spacing: 1px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryBlack};

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin: 0 auto;
  letter-spacing: 1px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.7;
  line-height: 24px;
  color: ${({ theme }) => theme.primaryBlack};
  @media screen and (max-width: 992px) {
    text-align: center;
    line-height: 1.8;
  }
`

export const BtnWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`

export const ImgWrap = styled.div`
  position: relative;
  max-width: 555px;
  height: 100%;
  margin-bottom: 3rem;

  &::before {
    opacity: 0.9;
    position: absolute;
    left: -31px;
    top: -30px;
    width: 90%;
    height: 92%;
    border-radius: 15px;
    box-shadow: 0 0 5px #000;
    z-index: -1;
    content: '';
    background-color: ${({ theme }) => theme.primaryRed};
    transition: 0.5s;
  }

  &::after {
    opacity: 0.9;
    position: absolute;
    right: -31px;
    bottom: -30px;
    width: 90%;
    height: 92%;
    border-radius: 15px;
    box-shadow: 0 0 5px #000;
    z-index: -1;
    content: '';
    background-color: ${({ theme }) => theme.primaryRed};
    transition: 0.5s;
  }
`

export const Img = styled.img`
  position: relative;
  width: 100%;
  border-radius: 15px;
  max-height: 600px;
  padding-right: 0;
  border: 5px solid #fff;
  //border-radius: 15px;
  //box-shadow: 0 0 3px ${({ theme }) => theme.primaryBlack};

  //border: 0.5px solid ${({ theme }) => theme.primaryRed}
`

export const NextCustomImage = styled(Image)`
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.primaryBlack} !important;
  box-shadow: 0 0 1px #000 !important;
`
