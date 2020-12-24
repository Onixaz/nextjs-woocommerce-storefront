import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {
  ContactContainer,
  ContactRow,
  ContactWrapper,
  ContactColumn1,
  ContactColumn2,
  FormH1,
  CustomForm,
  FormLabel,
  FormInput,
  FormTextArea,
  MessagePlaceholderDiv,
  ContactListItem,
  ContactList,
  SubmitButton,
  SubmitBtnWrap,
} from './contact.elements'
import { RedSpan } from '../Utilities/TextElements'

interface ContactFormProps {
  type?: any
  onChange?: () => void
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const WEBSITE_URL = 'https://epizootic-ingredien.000webhostapp.com'
  const FORM_ID = '5' //Form id that provides Contact Form 7
  const [responseMsg, setResponseMsg] = useState('') //set the response message from the server
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state

  // use useFormik hook using object destructuring assignment to extract helpful methods
  const { handleChange, isSubmitting, values, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      subject: '',
      email: '',
      message: '',
    },
    onSubmit: ({ fullname, subject, email, message }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      // here we created a FormData field for each form field
      const bodyFormData = new FormData()
      bodyFormData.set('fullname', fullname)
      bodyFormData.set('subject', subject)
      bodyFormData.set('email', email)
      bodyFormData.set('message', message)

      // here we sent
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          // actions taken when submission goes OK
          console.log(response)
          setResponseMsg(response.data.message)
          console.log(response.data)
          if (response.data.status === 'mail_sent') {
            resetForm()
          }
          //console.log(response.data.invalid_fields.length)

          setSubmitting(false)
          setMessageSent(true)
          setIsSuccessMessage(true)
        })
        .catch((error) => {
          // actions taken when submission goes wrong

          setSubmitting(false)
          setMessageSent(true)
          setIsSuccessMessage(false)
        })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    let timer = setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactRow>
          <ContactColumn1>
            <FormH1>
              Parašykite <RedSpan>man!</RedSpan>
            </FormH1>
            <CustomForm onSubmit={handleSubmit}>
              <FormLabel htmlFor="fullname">Vardas</FormLabel>
              <FormInput
                id="fullname"
                name="fullname"
                type="text"
                onChange={handleChange}
                value={values.fullname}
              />

              <FormLabel htmlFor="email">E.paštas</FormLabel>
              <FormInput id="email" name="email" onChange={handleChange} value={values.email} />

              <FormLabel htmlFor="subject">Tema</FormLabel>
              <FormInput
                id="subject"
                name="subject"
                //type="text"
                onChange={handleChange}
                value={values.subject}
              />

              <FormLabel htmlFor="message">Žinutė</FormLabel>
              <FormTextArea
                id="message"
                name="message"
                onChange={handleChange}
                value={values.message}
              />
              <SubmitBtnWrap>
                <SubmitButton type="submit" value="Submit" disabled={isSubmitting}>
                  Siųsti
                </SubmitButton>
              </SubmitBtnWrap>

              <MessagePlaceholderDiv>
                {messageSent && isSuccessMessage && <div>{responseMsg}</div>}
              </MessagePlaceholderDiv>
            </CustomForm>
          </ContactColumn1>
          <ContactColumn2>
            <FormH1>
              Jeigu <RedSpan>Jus:</RedSpan>
            </FormH1>
            <ContactList>
              <ContactListItem>Turite klausimų apie mano paslaugas.</ContactListItem>
              <ContactListItem>Turite klausimų apie mane patį.</ContactListItem>
              <ContactListItem>Norite užsirašyti vizitui.</ContactListItem>
              <ContactListItem>Norite pasikonsultuoti.</ContactListItem>
              <ContactListItem>Turite pageidavimų, pasiūlymų ar pastabų. </ContactListItem>
            </ContactList>
          </ContactColumn2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactForm
