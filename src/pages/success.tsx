import { NextPage } from 'next'
import React from 'react'
import CustomHead from '../components/CustomHead'

import { BasicContainer, SectionTitle } from '../styles/Global/utils'

const SuccessPage: NextPage = () => {
  return (
    <>
      <CustomHead
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
