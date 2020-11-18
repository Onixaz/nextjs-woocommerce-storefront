import styled from 'styled-components'

export const GalleryContainer = styled.div`
  background: ${({ theme }) => theme.lightWhiteBg};
  min-height: 100vh;
  display: flex;
  padding: 150px 5px 30px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;

  @media screen and (max-width: 992px) {
    padding-top: 100px;
  }
`

export const GalleryWrapper = styled.div`
  background: ${({ theme }) => theme.lightMediumBg};
  margin: 20px 20px 20px 20px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`

export const PhotoWrapper = styled.div`
  background: ${({ theme }) => theme.primaryMediumBg};
  padding: 8px;
`

export const GalleryH1 = styled.h1`
  font-size: 48px;
  letter-spacing: 1.4px;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 44px;
  margin-top: 34px;
  text-align: center;
`

export const GalleryH2 = styled.h2`
  color: ${({ theme }) => theme.primaryRed};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
`

export const GalleryP = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.primaryBlack};
`
