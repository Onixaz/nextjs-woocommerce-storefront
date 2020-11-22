import React from 'react'
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2 } from './contact.elements'

interface ContactProps {}

const ContactSection: React.FC<ContactProps> = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <h1>Col1</h1>
          </Column1>
          <Column2>
            <h1>Col2</h1>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection
