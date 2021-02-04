import React, { useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import {
  PaymentFormContainer,
  CardElementContainer,
  CreditCardOption,
  StripePaymentsWrapper,
  CreditImg,
  ImgHolder,
} from './PaymentFormElements'

interface PaymentFormContentProps {
  setIsReady: React.ComponentState
}

const PaymentForm: React.FC<PaymentFormContentProps> = ({ setIsReady }) => {
  const handleCardDetailsChange = (ev: any) => {
    ev.complete ? setIsReady(true) : setIsReady(false)
  }

  const iframeStyles = {
    base: {
      color: '#4c4e4',
      fontSize: '18px',
      iconColor: '#000',
      '::placeholder': {
        color: '#b3beca',
      },
      ':focus': {
        iconColor: '#96588a',
      },
    },
    invalid: {
      iconColor: '#e02333',
      color: '#e02333',
    },
    complete: {
      iconColor: '#000',
    },
  }

  const cardElementOpts = {
    style: iframeStyles,
    hidePostalCode: true,
  }

  return (
    <PaymentFormContainer>
      <StripePaymentsWrapper>
        <ImgHolder>
          <CreditImg src="./amex.svg" />
          <CreditImg src="./discover.svg" />
          <CreditImg src="./mastercard.svg" />
          <CreditImg src="./visa.svg" />
        </ImgHolder>

        <CardElementContainer>
          <CardElement options={cardElementOpts} onChange={handleCardDetailsChange} />
        </CardElementContainer>
      </StripePaymentsWrapper>
      <p style={{ opacity: '0.6', letterSpacing: '1px' }}>Use 4242 4242 4242 4242 for testing</p>
    </PaymentFormContainer>
  )
}
export default PaymentForm
