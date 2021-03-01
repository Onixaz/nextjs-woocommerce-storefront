import React from 'react'
import { BasicContainer } from '../styles/Global/utils'
import { NextPage } from 'next'
import PageTitle from '../components/Layout/Head/PageTitle'
import CheckoutPageContent from '../components/Order/CheckoutPageContent'

interface CheckoutPageProps {}

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Checkout | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <CheckoutPageContent />
      </BasicContainer>
    </>
  )
}

export default CheckoutPage
