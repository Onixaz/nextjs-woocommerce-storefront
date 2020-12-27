import styled from 'styled-components'

export const RedSpan = styled.span`
  color: ${({ theme }) => theme.primaryRed};
`
export const WhiteH1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: calc(1.8rem + 1vw);
  text-align: center;
  padding: 1rem 0.5rem;

  @media screen and (max-width: 992px) {
    padding-bottom: 0;
  }
`

export const BlackH1 = styled.h1`
  display: inline-block;

  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.primaryBlack};
  text-align: center;
  font-size: calc(1.8rem + 1vw);
  letter-spacing: 0.5px;
`

export const MainP = styled.p`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  letter-spacing: 0.5px;
  //text-align: center;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: calc(1rem + 0.1vw);
  @media screen and (max-width: 992px) {
    text-align: start;
  }
`
