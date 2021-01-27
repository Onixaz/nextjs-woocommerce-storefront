import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { Container, SectionTitle } from '../styles/Global/utils'

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <>
        <CustomHead
          title="About | Next.Js"
          description="A starter for Next.Js with Styled-components and TS"
        />
        <Container>
          <SectionTitle>Contact me!</SectionTitle>
        </Container>
      </>
    </>
  )
}

export default ContactPage
