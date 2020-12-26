import Link from 'next/link'
import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  ContentWrapper,
  LogoSection,
  ContactInfoSection,
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
  CopyrightText,
  CopyrightTextElement,
} from './footer.elements'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContentWrapper>
          <LogoSection>
            <LogoFooter
              src="https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/logotipas.png"
              alt="Masažuotojas Romanas Logo"
            />
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
                aria-label="Facebook"
              >
                <StyledFaFacebook />
              </a>
              <a
                href="https://www.instagram.com/masazuotojas_romanas/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <StyledFaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCanzhCCKJdkl1MWlJsGkqvQ"
                target="_blank"
                rel="noopener"
                aria-label="Youtube"
              >
                <StyledFaYoutube />
              </a>
            </SocialLinkstWrapper>
          </SocialSection>
        </ContentWrapper>

        <CopyrightWrapper>
          <CopyrightTextElement>
            <CopyrightText>
              &#169; Roman Oleškevič {new Date().getFullYear()}. Visos teisės saugomos.
            </CopyrightText>
          </CopyrightTextElement>
          <CopyrightTextElement>
            <CopyrightText>
              <Link href="/privatumo-politika">
                <a>Privatumo Politika</a>
              </Link>
            </CopyrightText>
          </CopyrightTextElement>

          <CopyrightTextElement>
            <CopyrightText>
              Dizainas ir programavimas - <a href="http://www.pajustudio.net">Paju Studio</a>
            </CopyrightText>
          </CopyrightTextElement>
        </CopyrightWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
