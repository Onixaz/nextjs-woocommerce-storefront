import styled from 'styled-components'

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

export const Desc = styled.li`
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

export const QuantityBlock = styled.div`
  min-width: 200px;
`

export const CheckoutBtn = styled.button`
  margin-top: 3rem;
  font-size: calc(1.2rem + 0.1vw);
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
