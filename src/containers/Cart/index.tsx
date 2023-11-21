import { BasicContainer, Loader, SectionTitle } from '../../styles/utils'
import * as CartPageStyles from './styled'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { NextPage } from 'next'
import CartGrid from '../../components/Cart/CartGrid'
import Link from 'next/link'
import useSWR from 'swr'
interface CartPageProps {}

const CartPageContainer: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)
  const { data } = useSWR('/api/products/retrieve')

  if (!data) {
    return <Loader />
  }

  return (
    <BasicContainer>
      <CartPageStyles.Wrapper>
        {cart.items.length > 0 ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid cart={cart} data={data} />
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
