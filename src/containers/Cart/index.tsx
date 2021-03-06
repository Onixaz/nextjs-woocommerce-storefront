import { BasicContainer, SectionTitle } from '../../styles/utils'
import * as CartPageStyles from './styled'

import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { NextPage } from 'next'

import CartGrid from '../../components/Cart/CartGrid'

interface CartPageProps {}

const CartPageContainer: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <BasicContainer>
      <CartPageStyles.Wrapper>
        {cart.items && cart.items.length > 0 ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid items={cart.items} />
          </>
        ) : (
          <CartPageStyles.EmptyCart>Your cart is empty</CartPageStyles.EmptyCart>
        )}
      </CartPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default CartPageContainer
