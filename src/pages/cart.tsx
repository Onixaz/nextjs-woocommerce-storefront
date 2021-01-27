import React, { useContext } from 'react'
import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import { Container, SectionTitle } from '../styles/Global/utils'
import {
  CartFormContainer,
  CartGrid,
  Desc,
  QuantityBlock,
  EmptyCart,
  CartTotals,
  CheckoutBtn,
} from '../styles/Individual/CartPageElements'

import SingleCartItem from '../components/CartItem'
interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <Container>
      <CartFormContainer>
        {cart.items.length ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid>
              <Desc></Desc>
              <Desc></Desc>
              <Desc>Product</Desc>
              <Desc>Price</Desc>
              <Desc>
                <QuantityBlock>Quantity</QuantityBlock>
              </Desc>
              <Desc>Subtotal</Desc>
              {cart.items.map((item: any) => {
                return <SingleCartItem key={item.product_id} item={item} />
              })}
            </CartGrid>
            <CartTotals>
              <CheckoutBtn>Proceed to checkout</CheckoutBtn>
            </CartTotals>
          </>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartFormContainer>
    </Container>
  )
}

export default CartPage
