import styled from 'styled-components'

export const InfoContainer = styled.div`
  //background: ${({ theme }) => theme.lightMediumBg};
  padding-top: 10rem;

  @media screen and (max-width: 992px) {
    padding-top: 6rem;
  }

  /* background-image: radial-gradient(rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0.3) 100%),
    url('./para_bg_2.jpg'); */
`

export const RedLine = styled.div`
  height: 5px;
  width: 100%;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 36, 88, 0.9) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    display: block;
    margin-top: 5rem;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const InfoWrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  position: relative;
  align-items: center;
  z-index: 1;
  width: 100%;
  min-height: 50vh;
  max-width: 75em;
  margin-right: auto;
  margin-left: auto;

  //border: 1px solid #000;

  border-radius: 15px;

  padding: 0 24px;
  @media screen and (max-width: 992px) {
    display: flex;
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
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.7;
  line-height: 24px;
  color: ${({ theme }) => theme.primaryBlack};
`

export const BtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  max-height: 600px;
  margin: 0 0 10px 0;
  padding-right: 0;
  //border-radius: 15px;
  box-shadow: 0 0 5px #000;

  //border: 0.5px solid ${({ theme }) => theme.primaryRed}
`
