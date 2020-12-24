import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrapper,
  ContentWrapper,
  LogoSection,
  ContactInfoSection,
  CopyrightElement,
  LogoFooter,
  ContactFooterH1,
  ContactFooterP,
  SocialLinkstWrapper,
  SocialFooterH1,
  SocialSection,
  ContactWrapperExtra,
  StyledFaFacebook,
  StyledFaInstagram,
  StyledFaYoutube,
  CopyrightWrapper,
} from './footer.elements'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContentWrapper>
          <LogoSection>
            <LogoFooter src="https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/logotipas.png" />
          </LogoSection>

          <ContactInfoSection>
            <ContactWrapperExtra>
              <ContactFooterH1>Kontaktine informacija</ContactFooterH1>
              <ContactFooterP>Tel: +37068241111</ContactFooterP>
              <ContactFooterP>Email: masazuotojasromanas@gmail.com</ContactFooterP>
            </ContactWrapperExtra>
          </ContactInfoSection>
          <SocialSection>
            <SocialFooterH1>Ieškok manęs socialiniuose tinkluose!</SocialFooterH1>
            <SocialLinkstWrapper>
              <a
                href="https://www.facebook.com/masazuotojasromanas/"
                target="_blank"
                rel="noopener"
              >
                <StyledFaFacebook />
              </a>
              <a
                href="https://www.instagram.com/masazuotojas_romanas/"
                target="_blank"
                rel="noopener"
              >
                <StyledFaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCanzhCCKJdkl1MWlJsGkqvQ"
                target="_blank"
                rel="noopener"
              >
                <StyledFaYoutube />
              </a>
            </SocialLinkstWrapper>
          </SocialSection>
        </ContentWrapper>

        <CopyrightWrapper>
          <CopyrightElement>
            <a href="http://www.pajustudio.net">Privatumo Politika</a>
          </CopyrightElement>
          <CopyrightElement>
            &#169; Roman Oleškevič {new Date().getFullYear()}. Visos teisės saugomos.
          </CopyrightElement>

          <CopyrightElement>
            Dizainas ir programavimas - <a href="http://www.pajustudio.net">Paju Studio</a>
          </CopyrightElement>
        </CopyrightWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
