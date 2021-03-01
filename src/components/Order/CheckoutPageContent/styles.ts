import styled from 'styled-components'

export const CheckoutPageContentWrapper = styled.form`
  margin-top: 1rem;
  display: grid;
  grid-gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  position: relative;
  grid-template-areas:
    'address order'
    'address payment'
    'address checkout';

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'order'
      'address'
      'payment'
      'checkout';
  }
`

export const CheckoutPageAddress = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  grid-area: address;
`
export const CheckoutPageOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: order;
`
export const CheckoutPagePayment = styled.div`
  display: flex;
  background: #fafafa;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-area: payment;
`

export const CheckoutPagePlaceOrderBtn = styled.button`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.2rem + 0.1vw);
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  width: 90%;
  margin: 1rem auto;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
`
export const CheckoutPageSubmitHolder = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fafafa;
`
export const CheckoutPagePrivacyNotice = styled.p`
  font-size: calc(0.8rem + 0.1vw);
  line-height: 1.7;
  margin: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryText};
`
export const CheckoutPageServerMessage = styled.p`
  font-size: calc(1.2rem + 0.1vw);
  font-weight: 200;
  padding: 1rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primaryText};
`
