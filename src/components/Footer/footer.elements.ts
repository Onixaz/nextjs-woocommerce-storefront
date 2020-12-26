import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export const FooterContainer = styled.footer`
  min-height: 40vh;
  overflow: hidden;

  background: ${({ theme }) => theme.primaryBlack};
`

export const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`

export const ContentWrapper = styled.div`
  display: grid;
  margin-top: 2rem;

  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas: 'ls cs ss ss';

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
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

  height: 340px;
  max-width: 300px;
  //width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactInfoSection = styled.div`
  grid-area: cs;
  //padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #fff;

  @media screen and (max-width: 992px) {
    border: none;
  }
`

export const ContactWrapperExtra = styled.div`
  display: block;

  max-height: 240px;
  //max-width: 340px;

  margin: 0 auto;
  padding: 2rem;

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
  width: clamp(50%, 50% + 5vw, 100%);
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 992px) {
    width: 75%;
    height: auto;
  }
`

export const ContactFooterH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 1rem;
  color: ${({ theme }) => theme.primaryRed};
  font-size: calc(1.2rem + 0.3vw);
`

export const ContactFooterP = styled.p`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: calc(0.7rem + 0.3vw);
  font-weight: 600;
  text-align: center;
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

export const StyledFaFacebook = styled(FaFacebook)`
  font-size: 2.5rem;
  color: #fff;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryRed};
  }
`

export const StyledFaInstagram = styled(FaInstagram)`
  font-size: 2.5rem;
  color: #fff;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryRed};
  }
`

export const StyledFaYoutube = styled(FaYoutube)`
  font-size: 2.5rem;
  color: #fff;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryRed};
  }
`

export const CopyrightText = styled.p`
  color: #fff;

  font-size: calc(0.6rem + 0.2vw);
  padding: 0.25rem;
  margin-left: -60px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 992px) {
    margin-left: 0;
  }
`

export const CopyrightTextElement = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

export const CopyrightWrapper = styled.div`
  border-top: 2px solid #fff;
  display: flex;
  padding: 2rem 0;
  justify-content: space-around;
  align-items: center;
  max-width: 1600px;
  width: 95%;

  margin: 0 auto;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
