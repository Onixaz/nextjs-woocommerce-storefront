import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import * as StripePaymentStyles from './styled'

interface PaymentFormContentProps {}

const StripePayment: React.FC<PaymentFormContentProps> = () => {
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
    <StripePaymentStyles.Container>
      <StripePaymentStyles.Wrapper>
        <StripePaymentStyles.ImgHolder>
          <StripePaymentStyles.CreditImg src="./amex.svg" />
          <StripePaymentStyles.CreditImg src="./discover.svg" />
          <StripePaymentStyles.CreditImg src="./mastercard.svg" />
          <StripePaymentStyles.CreditImg src="./visa.svg" />
        </StripePaymentStyles.ImgHolder>

        <StripePaymentStyles.CardElementWrapper>
          <CardElement options={cardElementOpts} />
        </StripePaymentStyles.CardElementWrapper>
      </StripePaymentStyles.Wrapper>
      <StripePaymentStyles.Info>
        Fill in the card details. Use 4242 4242 4242 4242 for testing.
      </StripePaymentStyles.Info>
    </StripePaymentStyles.Container>
  )
}
export default StripePayment
