import React, { useContext, useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'
import * as CheckoutPageStyles from './styled'
import AddressForm from '../../components/AddressForm'
import StripePayment from '../../components/StripePayment'
import OrderSummary from '../../components/OrderSummary'
import { BasicContainer, Loader, Subtitle } from '../../styles/utils'
import { CartContext } from '../../context/cart'
import { NextPage } from 'next'
import { createOrder, initCart } from '../../utils/functions'
import { Customer } from '../../types'

interface CheckoutPageContainerProps {}

const CheckoutPageContainer: NextPage<CheckoutPageContainerProps> = () => {
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState('stripe')
  const [cart, setCart] = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [serverMsg, setServerMsg] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const onSubmit = async (customer: Customer) => {
    try {
      if (!cart || cart.items.length === 0 || !stripe || !elements) return

      setIsProcessing(true)
      let payment: any

      //TODO: Add more payment methods (Paypal e.g)

      if (chosenPaymentMethod === 'stripe') {
        const card = elements.getElement('card')
        if (!card) throw 'Stripe error'

        const stripeRes = await stripe.createPaymentMethod({
          type: 'card',
          card,
        })

        payment = stripeRes.paymentMethod?.id
      }

      // end of stripe block

      if (!payment) throw 'No valid payment method'
      const { message } = await createOrder(customer, payment, cart)
      const newCart = await initCart()
      if (message === 'Success') {
        setCart(newCart)
        setServerMsg('Thank you for your order. Check your email for details!')
      } else {
        setServerMsg('Sorry something went wrong. Please try again later...')
      }
      setIsProcessing(false)
    } catch (error) {
      console.log(error)
      setServerMsg('Sorry something went wrong. Please try again later...')
      setIsProcessing(false)
    }
  }

  return (
    <BasicContainer>
      <CheckoutPageStyles.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <CheckoutPageStyles.Address>
          <Subtitle>Billing details</Subtitle>
          <AddressForm register={register} errors={errors} />
        </CheckoutPageStyles.Address>
        <CheckoutPageStyles.Order>
          <Subtitle>Your order</Subtitle>
          <OrderSummary register={register} cart={cart} errors={errors} />
        </CheckoutPageStyles.Order>
        <CheckoutPageStyles.Payment>
          <Subtitle>Pay with credit card</Subtitle>
          <StripePayment />
        </CheckoutPageStyles.Payment>
        <CheckoutPageStyles.SubmitHolder>
          <CheckoutPageStyles.PrivacyNotice>
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.
          </CheckoutPageStyles.PrivacyNotice>
          <CheckoutPageStyles.PlaceOrderBtn disabled={isProcessing} type="submit">
            {isProcessing ? <Loader /> : 'Place Order'}
          </CheckoutPageStyles.PlaceOrderBtn>
          <CheckoutPageStyles.ServerMessage>{serverMsg}</CheckoutPageStyles.ServerMessage>
        </CheckoutPageStyles.SubmitHolder>
      </CheckoutPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default CheckoutPageContainer
