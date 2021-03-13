import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../components/PageTitle'
import RegisterPageContainer from '../containers/Register'

interface ContactPageProps {}

const RegisterPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Register| Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <RegisterPageContainer />
    </>
  )
}

export default RegisterPage
