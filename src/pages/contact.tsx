import { BasicContainer, SectionTitle } from '../styles/Global/utils'

import CustomHead from '../components/CustomHead'
import { NextPage } from 'next'

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Contact me!</SectionTitle>
      </BasicContainer>
    </>
  )
}

export default ContactPage
