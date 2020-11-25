import styled from 'styled-components'

export const RedSpan = styled.span`
  color: ${({ theme }) => theme.primaryRed};
`
export const WhiteH1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: clamp(2.5rem, 5vw + 1rem, 3rem);
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

  margin: 0.5rem 3.5rem;
  color: ${({ theme }) => theme.primaryBlack};
  text-align: center;
  font-size: clamp(1.5rem, 5vw + 1rem, 3rem);
  letter-spacing: 1px;
`

export const MainP = styled.p`
  margin: 0.5rem 3.5rem;

  color: ${({ theme }) => theme.primaryBlack};
  font-size: clamp(0.5rem, 5vw + 1rem, 1.2rem);
  text-align: center;
`
