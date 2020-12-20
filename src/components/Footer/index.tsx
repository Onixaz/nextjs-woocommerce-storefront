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
              <ContactFooterP>Email: oleskevic.roman@gmail.com</ContactFooterP>
            </ContactWrapperExtra>
          </ContactInfoSection>
          <SocialSection>
            <SocialFooterH1>Ieškok manęs socialiniuose tinkluose!</SocialFooterH1>
            <SocialLinkstWrapper>
              <StyledFaFacebook />
              <StyledFaInstagram />
              <StyledFaYoutube />
            </SocialLinkstWrapper>
          </SocialSection>
        </ContentWrapper>

        <CopyrightElement>
          &#169; Roman Oleskevic {new Date().getFullYear()}. Visos teisės saugomos. Dizainas ir
          programavimas - <a href="http://www.pajustudio.net">Paju Studio</a>.
        </CopyrightElement>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
