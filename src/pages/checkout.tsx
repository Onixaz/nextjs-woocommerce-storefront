import React, { useContext, useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'
import {
  CheckoutPageMainWrapper,
  AddressFormContentArea,
  PlaceOrderButton,
  OrderSummaryContentArea,
  PaymentFormContentArea,
  SubmitHolder,
  PrivacyNotice,
} from '../styles/Individual/CheckoutPageElements'
import CheckoutAddressForm from '../components/AddressForm/AddressFormContent'
import PaymentForm from '../components/PaymentForm'
import { BasicContainer, Loader, SectionTitle, Subtitle } from '../styles/Global/utils'
import OrderSummary from '../components/OrderSummary'
import { CartContext } from '../context/cart'
import { NextPage } from 'next'
import { createOrder } from '../utils/functions'
import { CartItem, Cart } from '../types'

interface CheckoutPageProps {}

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  const [cart] = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [serverMsg, setServerMsg] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  const onSubmit = async (customerObj: { [key: string]: string }) => {
    if (!stripe || !elements || !cart.items.length || cart.total === 0) return

    const cardElement = elements.getElement('card')
    if (!cardElement) return

    if (!isReady) {
      cardElement.focus()
      return
    }

    const itemsObj = cart.items.map((item: CartItem) => {
      return { product_id: item.product_id, quantity: item.quantity }
    })

    try {
      setIsProcessing(true)

      const paymentMethodResult = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })
      if (!paymentMethodResult) return

      const paymentObj = {
        amount: cart.total,
        payment_method: paymentMethodResult.paymentMethod!.id,
      }

      const { message } = await createOrder(itemsObj, customerObj, paymentObj)

      setServerMsg(message)
      setIsProcessing(false)
    } catch (error) {
      setIsProcessing(false)
      console.log(error)
    }
  }

  return (
    <BasicContainer>
      <SectionTitle>Checkout</SectionTitle>
      <CheckoutPageMainWrapper onSubmit={handleSubmit(onSubmit)}>
        <AddressFormContentArea>
          <Subtitle>Billing details</Subtitle>
          <CheckoutAddressForm register={register} errors={errors} />
        </AddressFormContentArea>
        <OrderSummaryContentArea>
          <Subtitle>Order Summary</Subtitle>
          <OrderSummary />
        </OrderSummaryContentArea>
        <PaymentFormContentArea>
          <Subtitle>Pay with credit card</Subtitle>
          <PaymentForm isReady={isReady} setIsReady={setIsReady} />
        </PaymentFormContentArea>
        <SubmitHolder>
          <PrivacyNotice>
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.
          </PrivacyNotice>
          <PlaceOrderButton disabled={isProcessing} type="submit">
            {isProcessing ? <Loader /> : 'Place Order'}
          </PlaceOrderButton>
          <h3>{serverMsg}</h3>
        </SubmitHolder>
      </CheckoutPageMainWrapper>
    </BasicContainer>
  )
}

export default CheckoutPage
