import { NextPage } from 'next'
import Link from 'next/link'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Login Page!</SectionTitle>
        <Link href="/register">
          <button>Create new account</button>
        </Link>
      </BasicContainer>
    </>
  )
}

export default LoginPage
