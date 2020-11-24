import React from 'react'
import { FaAccessibleIcon, FaAddressBook, FaFacebook } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
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
} from './footer.elements'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContentWrapper>
          <LogoSection>
            <LogoFooter src="./Logotipas.png" />
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
              <IconContext.Provider
                value={{ size: '2em', color: '#ff2458', style: { margin: '0 .7em' } }}
              >
                <FaAccessibleIcon />
                <FaAddressBook />
                <FaFacebook />
              </IconContext.Provider>
            </SocialLinkstWrapper>
          </SocialSection>
        </ContentWrapper>

        <CopyrightElement>Copyright</CopyrightElement>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
