import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <h1
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Contact Page
      </h1>
    </>
  )
}

export default ContactPage
