import { BasicContainer, SectionTitle } from '../styles/Global/utils'

import CustomHead from '../components/CustomHead'
import { NextPage } from 'next'
import React from 'react'

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
