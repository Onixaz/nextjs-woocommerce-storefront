import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../components/PageTitle'
import LoginPageContainer from '../containers/Login'

interface ContactPageProps {}

const LoginPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Register| Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <LoginPageContainer />
    </>
  )
}

export default LoginPage
