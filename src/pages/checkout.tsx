import React, { useContext, useState, useEffect } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'
import {
  CheckoutPageMainWrapper,
  AddressFormContentArea,
  PlaceOrderButton,
  OrderSummaryContentArea,
  PaymentFormContentArea,
  SubmitHolder,
  PrivacyNotice,
  ServerMessage,
} from '../styles/Individual/CheckoutPageElements'
import CheckoutAddressForm from '../components/AddressForm/AddressFormContent'
import PaymentForm from '../components/PaymentForm'
import OrderSummary from '../components/OrderSummary'
import CustomHead from '../components/CustomHead'
import { BasicContainer, Loader, SectionTitle, Subtitle } from '../styles/Global/utils'
import { useRouter } from 'next/router'
import { CartContext } from '../context/cart'
import { NextPage } from 'next'

import { clearCart, createOrder } from '../utils/functions'
import { CartItem } from '../types'

interface CheckoutPageProps {}

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  const [cart, setCart, initialCart] = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [serverMsg, setServerMsg] = useState('')
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    router.prefetch('success')
  }, [])

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
      const stripeRes = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })
      if (!stripeRes || !stripeRes.paymentMethod) return

      const paymentObj = {
        total: cart.total,
        payment_method: stripeRes.paymentMethod.id,
      }
      const { message } = await createOrder(itemsObj, customerObj, paymentObj)

      clearCart(cart.key)
      setIsProcessing(false)
      if (message === 'Success') {
        setCart(initialCart)
        router.push('success')
      } else {
        setCart(initialCart)
        setServerMsg('Sorry something went wrong. Please try again later...')
      }
    } catch (error) {
      setServerMsg('Sorry something went wrong. Please try again later...')
      setCart(initialCart)
      setIsProcessing(false)
      console.log(error)
    }
  }

  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
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
            <ServerMessage>{serverMsg}</ServerMessage>
          </SubmitHolder>
        </CheckoutPageMainWrapper>
      </BasicContainer>
    </>
  )
}

export default CheckoutPage
