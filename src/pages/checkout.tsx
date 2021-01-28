import React from 'react'
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
const CheckoutPage = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data: any) => console.log(data)

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
          <PaymentFormContent />
        </PaymentFormContentArea>
        <PlaceOrderButton type="submit">Place Order</PlaceOrderButton>
      </CheckoutPageMainWrapper>
    </BasicContainer>
  )
}

export default CheckoutPage
