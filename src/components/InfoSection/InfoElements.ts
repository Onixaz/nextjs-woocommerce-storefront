import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'

export const InfoContainer = styled.div<{ noPadding: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ noPadding }) => (noPadding ? 0 : `12rem 2rem 5rem 2rem`)};

  @media screen and (max-width: 992px) {
    padding: ${({ noPadding }) => (noPadding ? 0 : ` 7rem 2rem 1rem 2rem`)};
  }
`

export const InfoWrapper = styled.div`
  margin-top: rem;
  display: grid;
  position: relative;
  align-items: center;
  //z-index: 1;
  width: 100%;
  min-height: 50vh;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  //border: 1px solid #000;

  //border-radius: 15px;

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
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 992px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }

  /* @media screen and (max-width: 992px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  } */
`

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-bottom: 15px;
  padding: 0.5rem 3rem;
  grid-area: col1;

  @media screen and (max-width: 992px) {
    padding: 1rem 0.5rem;
  }
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-top: 2rem;
  padding: 3rem;
  grid-area: col2;
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

export const Heading = styled.h1<{ headingScale: number }>`
  margin-bottom: 24px;
  font-size: ${({ headingScale }) => `calc(${headingScale}rem + 0.5vw)`};
  letter-spacing: 1px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryBlack};

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`

export const InfoPlainText = styled.p`
  //max-width: 440px;
  margin: 0;

  letter-spacing: 0.5px;
  margin-bottom: 15px;
  font-size: calc(1rem + 0.1vw);
  //line-height: calc(1rem + 0.5vw);
  color: ${({ theme }) => theme.primaryBlack};
  @media screen and (max-width: 992px) {
    margin: 0 auto;
    //text-align: center;
  }
`

export const BtnWrap = styled.div`
  padding-top: 3rem;
  margin-left: -22px;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }
`

export const ImgWrap = styled.div<{ imgSize: number; resizeAtFull: boolean }>`
  position: relative;
  max-width: ${({ imgSize }) => `${imgSize}px`};
  height: 100%;
  margin-bottom: 3rem;

  @media screen and (max-width: 992px) {
    max-width: ${({ imgSize, resizeAtFull }) =>
      resizeAtFull ? `${imgSize + 155}px` : `${imgSize + 155}px`};
  }

  &::before {
    opacity: 1;
    position: absolute;
    left: -31px;
    top: -30px;
    width: 90%;
    height: 92%;
    //border-radius: 15px;
    box-shadow: 0 0 5px #000;
    z-index: -1;
    content: '';
    background-color: ${({ theme }) => theme.primaryRed};
    transition: 0.5s;
  }

  &::after {
    opacity: 1;
    position: absolute;
    right: -31px;
    bottom: -30px;
    width: 90%;
    height: 92%;
    //border-radius: 15px;
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
  border: 3px solid #fff;
  //border-radius: 15px;
  max-height: 600px;
  padding-right: 0;
`

export const ServicesInfoWrapper = styled.div`
  padding-top: 2rem;
`

export const ServiceList = styled.ul`
  padding: 0.25rem;
  margin-bottom: 1rem;
`

export const ListItem = styled.li`
  //margin: 0 5px 0 5px;
  padding: 0.25rem 0;
  font-size: calc(1.2rem + 0.1vw);
  //margin-left: 1.5em;

  &:before {
    content: '\\27A4';
    color: ${({ theme }) => theme.primaryRed};

    font-weight: 900;
    display: inline-block;

    width: 1.5em;
  }
`

export const ConsultCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-direction: column;
`

export const ConsultCard = styled.div`
  box-shadow: 0 0 3px #000;
  min-height: 140px;
  margin: 2rem 0;
  padding: 0.25rem;
  border: 1px solid ${({ theme }) => theme.primaryBlack};
`

export const ConsultCardHeader = styled.p`
  font-size: calc(1.2rem + 0.1vw);
  padding: 0.35rem 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.primaryRed};

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`

export const ConsultCardText = styled.p`
  font-size: calc(0.9rem + 0.1vw);
  text-align: center;
  padding: 1rem;
  opacity: 0.95;
  letter-spacing: 0.5px;
`
