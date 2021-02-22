import { NextPage } from 'next'
import AuthForm from '../components/AuthForm'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface ContactPageProps {}

const RegisterPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Register| Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Register!</SectionTitle>
        <AuthForm />
      </BasicContainer>
    </>
  )
}

export default RegisterPage
