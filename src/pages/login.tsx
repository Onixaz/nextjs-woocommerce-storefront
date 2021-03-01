import React from 'react'

import { BasicContainer, SectionTitle } from '../styles/Global/utils'
import CustomHead from '../components/CustomHead'
import { NextPage } from 'next'
import AuthForm from '../components/AuthForm'

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Log in to your account !</SectionTitle>
        <AuthForm isRegister={false} />
      </BasicContainer>
    </>
  )
}

export default LoginPage
