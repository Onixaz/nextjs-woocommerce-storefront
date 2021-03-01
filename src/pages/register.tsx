import { BasicContainer } from '../styles/Global/utils'
import AuthForm from '../components/Auth/AuthForm'
import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../components/Layout/Head/PageTitle'

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
