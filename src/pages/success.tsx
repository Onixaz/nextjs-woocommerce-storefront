import { BasicContainer, SectionTitle } from '../styles/Global/utils'

import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../components/Layout/Head/PageTitle'

const SuccessPage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="Success | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Thank you for your order!</SectionTitle>
      </BasicContainer>
    </>
  )
}

export default SuccessPage
