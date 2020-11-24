import styled from 'styled-components'

export const FooterContainer = styled.footer`
  min-height: 40vh;

  background: ${({ theme }) => theme.primaryBlack};
  border: 1px solid #000;
`

export const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`

export const ContentWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'ls cs ss ss';

  @media screen and (max-width: 992px) {
    grid-template-areas:
      'ls cs'
      'ss ss';
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const LogoSection = styled.div`
  grid-area: ls;
  margin: 1rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
`

export const ContactInfoSection = styled.div`
  grid-area: cs;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactWrapperExtra = styled.div`
  display: block;
  max-width: 240px;
  margin: 0 auto;
  padding: 1rem;
  border-right: 1px solid #fff;
  @media screen and (max-width: 992px) {
    border: none;
  }
`
export const SocialSection = styled.div`
  grid-area: ss;
  margin: 0 8rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 992px) {
    margin: 0 2rem;
    max-width: 100%;
  }
`
export const LogoFooter = styled.img`
  width: 75%;
  height: 75%;
`

export const ContactFooterH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 1rem;
  color: ${({ theme }) => theme.primaryRed};
  font-size: calc(1rem + 0.3vw);
`

export const ContactFooterP = styled.p`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const SocialLinkstWrapper = styled.div`
  display: inline-flex;
  padding: 1.5rem;
`

export const SocialFooterH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 3rem 1rem 1rem 1rem;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: calc(1rem + 0.2vw);
`

export const CopyrightElement = styled.div`
  text-align: center;
  color: #fff;
  border-top: 1px solid #fff;
  font-size: 0.8rem;
  padding: 2rem 0;
`
