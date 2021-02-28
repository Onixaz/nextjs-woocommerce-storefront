import { BasicContainer, SectionTitle } from '../styles/Global/utils'
import {
  CartFormContainer,
  CartGrid,
  CartLiFirstCol,
  CartLiSecondCol,
  CartTotals,
  CheckoutBtn,
  DescriptionRow,
  Descriptor,
  EmptyCart,
} from '../styles/Individual/CartPageElements'
import React, { useContext } from 'react'

import { CartContext } from '../context/cart'
import CustomHead from '../components/CustomHead'
import Link from 'next/link'
import { NextPage } from 'next'
import SingleCartItem from '../components/CartItem'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <>
      <CustomHead
        title="Cart | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <CartFormContainer>
          {cart.items && cart.items.length > 0 ? (
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
    </>
  )
}

export default CartPage
