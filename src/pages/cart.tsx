import React, { useContext, useEffect } from 'react'
import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'
import {
  CartFormContainer,
  CartGrid,
  EmptyCart,
  CartTotals,
  CheckoutBtn,
  CartLiFirstCol,
  CartLiSecondCol,
  Descriptor,
  DescriptionRow,
} from '../styles/Individual/CartPageElements'

import SingleCartItem from '../components/CartItem'
import Link from 'next/link'
interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <BasicContainer>
      <CartFormContainer>
        {cart.items.length > 0 ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid>
              <CartLiFirstCol>
                {cart.items.map((item: any) => {
                  return (
                    <DescriptionRow key={item.product_id.toString()}>
                      <Descriptor></Descriptor>
                      <Descriptor></Descriptor>
                      <Descriptor>Product</Descriptor>
                      <Descriptor>Price</Descriptor>
                      <Descriptor>Quantity</Descriptor>
                      <Descriptor>Subtotal</Descriptor>
                    </DescriptionRow>
                  )
                })}
              </CartLiFirstCol>
              <CartLiSecondCol>
                {cart.items.map((item: any) => {
                  return <SingleCartItem key={item.product_id} item={item} />
                })}
              </CartLiSecondCol>
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
