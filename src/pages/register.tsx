import { BasicContainer } from '../styles/utils'
import AuthForm from '../components/AuthForm'
import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../components/PageTitle'

interface ContactPageProps {}

const RegisterPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Register| Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <AuthForm isRegister={true} />
      </BasicContainer>
    </>
  )
}

export default RegisterPage
