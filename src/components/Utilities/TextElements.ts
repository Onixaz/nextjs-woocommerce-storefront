import styled from 'styled-components'

export const RedSpan = styled.span`
  color: ${({ theme }) => theme.primaryRed};
`
export const WhiteH1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
`

export const BlackH1 = styled.h1`
  display: inline-block;
  letter-spacing: 1px;
  margin: 22px 44px 22px 44px;

  color: ${({ theme }) => theme.primaryBlack};
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
`

export const MainP = styled.p`
  margin: 20px 20px 20px 20px;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`
