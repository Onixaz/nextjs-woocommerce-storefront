import React, { useContext, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'
import {
  CheckoutPageMainWrapper,
  AddressFormContentArea,
  PlaceOrderButton,
  OrderSummaryContentArea,
  PaymentFormContentArea,
} from '../styles/Individual/CheckoutPageElements'
import AddressFormContent from '../components/AddressForm/AddressFormContent'
import PaymentFormContent from '../components/PaymentForm'
import { BasicContainer, SectionTitle, Subtitle } from '../styles/Global/utils'
import OrderSummaryContent from '../components/OrderSummary'
import { CartContext } from '../context/cart'
import { NextPage } from 'next'
import styled from 'styled-components'

interface CheckoutPageProps {}

const CardElementContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  const [cart] = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const handleCardDetailsChange = (e: any) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError('')
  }

  const createOrder = async (data: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/orders/create`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    return json
  }

  //Submit order function
  const onSubmit = async (details: { [key: string]: string }) => {
    //Gather cart items for data

    const cardElement = elements!.getElement('card')
    const line_items: any = []
    cart.items.map((item: { [key: string]: string }) => {
      line_items.push({ product_id: item.product_id, quantity: item.quantity })
    })

    const {
      first_name,
      last_name,
      address_1,
      address_2,
      city,
      state,
      postcode,
      country,
      email,
      phone,
    } = details

    const billingDetails = {
      first_name,
      last_name,
      address_1,
      address_2,
      city,
      state,
      postcode,
      country,
      email,
      phone,
    }

    const orderData = {
      customer_details: {
        payment_method: 'CC',
        payment_method_title: 'Pay with credit card',
        set_paid: false,
        billing: billingDetails,
        shipping: {
          first_name,
          last_name,
          address_1,
          address_2,
          city,
          state,
          postcode,
          country,
        },
        line_items,
      },
      payment_details: {
        amount: 245.0 * 100,
      },
    }

    try {
      setIsProcessing(true)
      const { clientSecret } = await createOrder(orderData)
      const paymentMethodReq = await stripe!.createPaymentMethod({
        type: 'card',
        card: cardElement!,
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message!)
        setIsProcessing(false)
        return
      }

      const { error } = await stripe!.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod!.id,
      })
      //Update order here
      console.log('Success')
      setIsProcessing(false)
      if (error) {
        setCheckoutError(error.message!)
        setIsProcessing(false)
        return
      }
    } catch (error) {
      setCheckoutError(error.message)
    }
  }

  const iframeStyles = {
    base: {
      color: '#000',
      fontSize: '16px',
      iconColor: '#000',
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
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
          <CardElementContainer>
            <CardElement options={cardElementOpts} onChange={handleCardDetailsChange} />
            {checkoutError && <p>{checkoutError}</p>}
          </CardElementContainer>
        </PaymentFormContentArea>
        <PlaceOrderButton disabled={isProcessing} type="submit">
          Place Order
        </PlaceOrderButton>
      </CheckoutPageMainWrapper>
    </BasicContainer>
  )
}

export default CheckoutPage
