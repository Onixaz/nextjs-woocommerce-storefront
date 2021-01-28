import styled from 'styled-components'

export const CheckoutPageMainWrapper = styled.form`
  margin-top: 1rem;
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  position: relative;
  grid-template-areas:
    'address order'
    'address order'
    'address payment'
    'address payment'
    '.......  checkout';
`

export const AddressFormContentArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-area: address;
`
export const OrderSummaryContentArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-area: order;
`
export const PaymentFormContentArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-area: payment;
`

export const PlaceOrderButton = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  font-size: calc(1.5rem + 0.1vw);
  grid-area: checkout;
`
