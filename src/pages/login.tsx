import React from 'react'

import { BasicContainer } from '../styles/Global/utils'
import { NextPage } from 'next'
import AuthForm from '../components/Auth/AuthForm'
import PageTitle from '../components/Layout/Head/PageTitle'

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <AuthForm isRegister={false} />
      </BasicContainer>
    </>
  )
}

export default LoginPage
