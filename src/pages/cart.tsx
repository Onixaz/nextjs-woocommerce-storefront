import React, { useContext, useState, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'

import { Container, Loader, SectionTitle } from '../styles/Global/utils'
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
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [isAnimating, setIsAnimating] = useState({})

  const removeItem = (item: { [key: string]: string }) => {
    setIsUpdating((prev: boolean) => !prev)
    fetch(`https://elementor.local/wp-json/cocart/v1/item?cart_key=${cart.key}`, {
      method: 'DELETE',
      body: JSON.stringify({
        cart_item_key: item.key,
        return_cart: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newCart = { ...cart }
        const remoteCartItems = Object.values(data)
        newCart.items = remoteCartItems
        setCart(newCart)
        setIsUpdating((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsUpdating((prev: boolean) => !prev)
      })
  }

  const updateItem = (e: React.SyntheticEvent, item: { [key: string]: string }, quantity: any) => {
    e.preventDefault()
    setIsUpdating((prev: boolean) => !prev)
    setIsAnimating((prev: any) => ({
      ...prev,
      [item.product_id]: !prev[item.product_id],
    }))
    fetch(`https://elementor.local/wp-json/cocart/v1/item?cart_key=${cart.key}`, {
      method: 'POST',
      body: JSON.stringify({
        cart_item_key: item.key,
        quantity: quantity,
        return_cart: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newCart = { ...cart }
        const remoteCartItems = Object.values(data)
        newCart.items = remoteCartItems
        setCart(newCart)
        setIsUpdating((prev: boolean) => !prev)
        setIsAnimating((prev: any) => ({
          ...prev,
          [item.product_id]: !prev[item.product_id],
        }))
      })
      .catch((error) => {
        console.log(error)
        setIsAnimating((prev: any) => ({
          ...prev,
          [item.product_id]: !prev[item.product_id],
        }))
        setIsUpdating((prev: boolean) => !prev)
      })
  }

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
                return (
                  <SingleCartItem
                    key={item.product_id}
                    item={item}
                    removeItem={removeItem}
                    isAnimating={isAnimating}
                    isUpdating={isUpdating}
                    updateItem={updateItem}
                  />
                )
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
