import React, { useState } from 'react'
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  ContactForm,
  ContactH1,
  ContactInput,
  ContactTextArea,
  ContactLabel,
  SubmitBtn,
  ContactBtnWrapper,
} from './contact.elements'

import fire from '../../configs/fire-config'

interface ContactProps {}

const ContactSection: React.FC<ContactProps> = () => {
  const db = fire.firestore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState('')
  const [loader, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    db.collection('contact')
      .add({
        datetime: new Date(),
        name,
        email,
        message,
      })
      .then(() => {
        setNotification('Žinutė išsiųsta!'), setLoading(false)
      })
      .catch((error) => {
        setNotification(error.message)
        setLoading(false)
      })
  }

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <h1>Col1</h1>
          </Column1>
          <Column2>
            <ContactForm onSubmit={handleSubmit}>
              <ContactH1>Parašyk man!</ContactH1>
              <ContactLabel>Name</ContactLabel>
              <ContactInput
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <ContactLabel>Email</ContactLabel>
              <ContactInput
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <ContactLabel>Message</ContactLabel>
              <ContactTextArea
                placeholder="Message me"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></ContactTextArea>

              <ContactBtnWrapper>
                <SubmitBtn type="submit">{loader ? 'Siunčiu...' : 'Siųsti'}</SubmitBtn>
                <p>{notification}</p>
              </ContactBtnWrapper>
            </ContactForm>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection
