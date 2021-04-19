import { BasicContainer, SectionTitle } from '../../styles/utils'
import * as CartPageStyles from './styled'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { NextPage } from 'next'
import CartGrid from '../../components/Cart/CartGrid'
import Link from 'next/link'
interface CartPageProps {}

const CartPageContainer: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <BasicContainer>
      <CartPageStyles.Wrapper>
        {cart.items.length > 0 ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid />
            <Link href="/checkout" passHref>
              <CartPageStyles.CheckoutBtn>Proceed to Checkout</CartPageStyles.CheckoutBtn>
            </Link>
          </>
        ) : (
          <CartPageStyles.EmptyCart>Your cart is empty</CartPageStyles.EmptyCart>
        )}
      </CartPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default CartPageContainer
