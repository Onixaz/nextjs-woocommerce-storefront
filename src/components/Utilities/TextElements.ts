import styled from 'styled-components'

export const RedSpan = styled.span`
  color: ${({ theme }) => theme.primaryRed};
`
export const WhiteH1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: calc(2.5rem + 0.3vw);
  text-align: center;

  /* @media screen and (max-width: 768px) {
    font-size: 40px;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  } */
`

export const BlackH1 = styled.h1`
  display: inline-block;

  margin: 0.5rem 3rem;
  color: ${({ theme }) => theme.primaryBlack};
  text-align: center;
  font-size: calc(2.5rem + 0.3vw);
  letter-spacing: 0.5px;
`

export const MainP = styled.p`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: calc(1rem + 0.1vw);
  text-align: center;
`
