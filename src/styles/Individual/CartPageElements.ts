import styled from 'styled-components'
import { RiCloseCircleFill } from 'react-icons/ri'

export const CartFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
  width: 100%;

  min-height: 50vh;
`

export const EmptyCart = styled.h2`
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
`
export const CartGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`
export const CartTotals = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Item = styled.li`
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background: #fdfdfd;
  //border: 1px solid #000;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`

export const ProductLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

export const ItemDesc = styled.li`
  background: #f0f0f0;
  padding: 0.5rem;
  font-size: calc(1rem + 0.1vw);
  font-weight: bolder;
  color: ${({ theme }) => theme.primaryText};
  opacity: 0.9;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`

export const RemoveFromCartBtn = styled(RiCloseCircleFill)`
  font-size: calc(1.5rem + 0.1vw);
  cursor: pointer;
`
export const QuantityForm = styled.form`
  margin: 2rem 0;
`

export const QuantityBlock = styled.div`
  min-width: 200px;
`

export const InputField = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  max-width: 60px;
  font-size: 1rem;
  text-align: center;
  background-color: #f2f2f2;
  color: #43454b;
  border: none;
  box-sizing: border-box;
  font-weight: 400;

  &[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }
`
export const UpdateCartItem = styled.button`
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;

  display: inline-block;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
  }
`

export const CheckoutBtn = styled.button`
  margin-top: 3rem;
  font-size: calc(1.5rem + 0.1vw);
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.2s ease-in-out;
`
