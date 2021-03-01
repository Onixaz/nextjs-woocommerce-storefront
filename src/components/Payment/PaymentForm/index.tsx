import React, { useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import {
  PaymentFormContainer,
  CardElementContainer,
  Info,
  StripePaymentsWrapper,
  CreditImg,
  ImgHolder,
} from './PaymentFormElements'

interface PaymentFormContentProps {
  setIsReady: React.ComponentState
  isReady: React.ComponentState
}

const PaymentForm: React.FC<PaymentFormContentProps> = ({ setIsReady, isReady }) => {
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
      {!isReady && <Info>Fill in the card details. Use 4242 4242 4242 4242 for testing.</Info>}
    </PaymentFormContainer>
  )
}
export default PaymentForm
