import React, { useContext, useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'
import {
  CheckoutPageAddress,
  CheckoutPageOrder,
  CheckoutPagePayment,
  CheckoutPagePrivacyNotice,
  CheckoutPagePlaceOrderBtn,
  CheckoutPageServerMessage,
  CheckoutPageSubmitHolder,
  CheckoutPageContentWrapper,
} from './styles'
import CheckoutAddressForm from '../Address/AddressFormContent'
import PaymentForm from '../../Order/StripePaymentForm'
import OrderSummary from '../../Order/OrderSummary'
import { Loader, Subtitle } from '../../../styles/Global/utils'
import { useRouter } from 'next/router'
import { CartContext } from '../../../context/cart'
import { NextPage } from 'next'

import { createOrder, initCart } from '../../../utils/functions'
import { CartItem, Customer } from '../../../types'
import PageTitle from '../../../components/Layout/Head/PageTitle'

interface CheckoutPageProps {}

const CheckoutPageContent: NextPage<CheckoutPageProps> = () => {
  const [cart, setCart] = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [serverMsg, setServerMsg] = useState('')
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const onSubmit = async (customerObj: Customer) => {
    try {
      if (!cart.items.length || cart.total === 0) return

      const itemsObj = cart.items.map((item: CartItem) => {
        return { product_id: item.product_id, quantity: item.quantity }
      })

      //TODO: Add more payment methods (Paypal e.g)

      if (!stripe || !elements) throw new Error(`Stripe not initialized...`)

      const cardElement = elements.getElement('card')

      if (!cardElement) throw new Error(`No card element`)

      if (!isReady) {
        cardElement.focus()
        return
      }

      setIsProcessing(true)
      const stripeRes = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })
      if (!stripeRes.paymentMethod?.id) throw new Error(`Can't connect to Stripe...`)

      const { message } = await createOrder(
        itemsObj,
        customerObj,
        cart.total,
        stripeRes.paymentMethod.id,
      )

      const newCart = await initCart()
      setCart(newCart)
      setIsProcessing(false)
      if (message === 'Success') {
        router.push('success')
      } else {
        setServerMsg('Sorry something went wrong. Please try again later...')
      }
    } catch (error) {
      console.log(error)
      setServerMsg('Sorry something went wrong. Please try again later...')
      const newCart = await initCart()
      setCart(newCart)
      setIsProcessing(false)
    }
  }

  return (
    <>
      <CheckoutPageContentWrapper onSubmit={handleSubmit(onSubmit)}>
        <CheckoutPageAddress>
          <Subtitle>Billing details</Subtitle>
          <CheckoutAddressForm register={register} errors={errors} />
        </CheckoutPageAddress>
        <CheckoutPageOrder>
          <Subtitle>Order Summary</Subtitle>
          <OrderSummary />
        </CheckoutPageOrder>
        <CheckoutPagePayment>
          <Subtitle>Pay with credit card</Subtitle>
          <PaymentForm isReady={isReady} setIsReady={setIsReady} />
        </CheckoutPagePayment>
        <CheckoutPageSubmitHolder>
          <CheckoutPagePrivacyNotice>
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.
          </CheckoutPagePrivacyNotice>
          <CheckoutPagePlaceOrderBtn disabled={isProcessing} type="submit">
            {isProcessing ? <Loader /> : 'Place Order'}
          </CheckoutPagePlaceOrderBtn>
          <CheckoutPageServerMessage>{serverMsg}</CheckoutPageServerMessage>
        </CheckoutPageSubmitHolder>
      </CheckoutPageContentWrapper>
    </>
  )
}

export default CheckoutPageContent
