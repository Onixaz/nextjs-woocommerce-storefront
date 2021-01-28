import React, { useContext } from 'react'
import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'
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
import Link from 'next/link'
interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <BasicContainer>
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
              <Link href="/checkout" passHref>
                <CheckoutBtn>Proceed to checkout</CheckoutBtn>
              </Link>
            </CartTotals>
          </>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartFormContainer>
    </BasicContainer>
  )
}

export default CartPage
