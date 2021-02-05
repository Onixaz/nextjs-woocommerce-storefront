import styled from 'styled-components'
import { RiCloseCircleFill } from 'react-icons/ri'

export const Thumbnail = styled.img`
  padding: 1rem 0.5rem;
  width: 100%;
  height: 100%;
  max-width: 100px;

  @media screen and (max-width: 768px) {
    position: absolute;
    height: 160px;
    max-width: 160px;
    left: 50%;
    transform: translate(-50%, -25%);
  }
`

export const ProductLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

export const CartItemProductSubtotal = styled.p`
  font-weight: bolder;
  font-size: calc(1rem + 0.1vw);
`

export const RemoveFromCartBtn = styled.button`
  //font-size: calc(1.5em + 0.1vw);
  border: none;
  background: transparent;
  //border-color: #333333;
  color: #333333;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    transform: translate(50%, -150%);
  }
`

export const RemoveIcon = styled(RiCloseCircleFill)`
  font-size: calc(1.5rem + 0.1vw);

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const QuantityForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
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
export const UpdateCartItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  width: calc(75px + 0.2vw);
  height: 41px;
  //display: inline-block;
  transition: all 0.2s ease-in-out;
`

export const UpdateText = styled.p`
  font-weight: 600;
  font-size: calc(0.75rem + 0.1vw);
`
export const CartEl = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background: #fafafa;

  //border: 1px solid #000;
`

export const CartRow = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 1rem 0;
  }
`
export const RemovingLoader = styled.div`
  border: 2px solid #333333;
  border-radius: 50%;
  border-top: 2px solid #3333;
  width: 1.5em;
  height: 1.5em;
  animation: spin 1s linear infinite;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: -8px;
    top: -68px;
  }
`
