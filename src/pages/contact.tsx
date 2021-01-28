import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

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
        <BasicContainer>
          <SectionTitle>Contact me!</SectionTitle>
        </BasicContainer>
      </>
    </>
  )
}

export default ContactPage
