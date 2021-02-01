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
import AddressFormContent from '../components/AddressForm/AddressFormContent'
import PaymentFormContent from '../components/PaymentForm'
import { BasicContainer, Loader, SectionTitle, Subtitle } from '../styles/Global/utils'
import OrderSummaryContent from '../components/OrderSummary'
import { CartContext } from '../context/cart'
import { NextPage } from 'next'
import { createOrder } from '../utils/functions'

interface CheckoutPageProps {}

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  const [cart] = useContext(CartContext)
  const { register, handleSubmit, errors, trigger } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [serverMsg, setServerMsg] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  //Submit order function
  const onSubmit = async (customerObj: { [key: string]: string }) => {
    if (!stripe || !elements || !cart.items.length || cart.total === 0) return

    const cardElement = elements.getElement('card')
    if (!cardElement) return

    if (!isReady) {
      cardElement.focus()
      return
    }

    const itemsObj: any = []
    cart.items.map((item: { [key: string]: string }) => {
      itemsObj.push({ product_id: item.product_id, quantity: item.quantity })
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
        payment_method: paymentMethodResult.paymentMethod?.id,
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
          <AddressFormContent register={register} errors={errors} />
        </AddressFormContentArea>
        <OrderSummaryContentArea>
          <Subtitle>Order Summary</Subtitle>
          <OrderSummaryContent />
        </OrderSummaryContentArea>
        <PaymentFormContentArea>
          <Subtitle>Payment Form</Subtitle>
          <PaymentFormContent setIsReady={setIsReady} />
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
