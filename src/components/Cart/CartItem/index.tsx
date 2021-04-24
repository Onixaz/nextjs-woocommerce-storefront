import * as CartItemStyles from './styled'
import React, { useContext, useRef, useState } from 'react'
import { initCart, updateCart } from '../../../utils/functions'
import { CartContext } from '../../../context/cart'
import { CartItem } from '../../../types'
import Link from 'next/link'
import { Loader } from '../../../styles/utils'

interface CartItemProps {
  item: CartItem
  price: number
}

const SingleCartItem: React.FC<CartItemProps> = ({ item, price }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [isRemoving, setIsRemoving] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const quantityRef = useRef<HTMLInputElement | null>(null)

  const removeItem = async (cartItem: CartItem) => {
    setIsRemoving(true)
    setIsUpdating(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`,
        {
          method: 'DELETE',
          body: JSON.stringify({
            cart_item_key: cartItem.key,
            return_cart: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (res.status !== 200) throw Error('Problem with remote cart')
      const data = await res.json()

      setIsUpdating(false)
      setIsRemoving(false)
      setCart(() => updateCart(cart, data))
    } catch (error) {
      const newCart = await initCart()
      setCart(newCart)
      setIsUpdating(false)
      setIsRemoving(false)
    }
  }

  const updateItem = async (e: React.SyntheticEvent, cartItem: CartItem, quantity: number) => {
    e.preventDefault()
    setIsUpdating(true)
    setIsAnimating(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`,
        {
          method: 'POST',
          body: JSON.stringify({
            cart_item_key: cartItem.key,
            quantity,
            return_cart: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (res.status !== 200) throw Error('Problem with remote cart')
      const data = await res.json()

      setIsUpdating(false)
      setIsAnimating(false)
      setCart(() => updateCart(cart, data))
    } catch (error) {
      console.log(error)
      const newCart = await initCart()
      setCart(newCart)
      setIsAnimating(false)
      setIsUpdating(false)
    }
  }

  const itemTotal = price * item.quantity

  return (
    <>
      <CartItemStyles.CartRow>
        <CartItemStyles.CartEl>
          <CartItemStyles.RemoveFromCartBtn disabled={isUpdating} onClick={() => removeItem(item)}>
            {isRemoving ? <CartItemStyles.RemovingLoader /> : <CartItemStyles.RemoveIcon />}{' '}
          </CartItemStyles.RemoveFromCartBtn>
        </CartItemStyles.CartEl>
        <CartItemStyles.CartEl>
          <CartItemStyles.Thumbnail src={item.image} alt={item.slug} />
        </CartItemStyles.CartEl>
        <CartItemStyles.CartEl>
          <Link href={`/products/${item.slug}`}>
            <CartItemStyles.ProductLink>{item.product_name}</CartItemStyles.ProductLink>
          </Link>
        </CartItemStyles.CartEl>
        <CartItemStyles.CartEl>${price.toFixed(2)}</CartItemStyles.CartEl>
        <CartItemStyles.CartEl>
          <CartItemStyles.QuantityForm>
            <CartItemStyles.InputField
              type="number"
              defaultValue={item.quantity}
              key={item.quantity}
              min="1"
              ref={quantityRef}
            ></CartItemStyles.InputField>
            <CartItemStyles.UpdateCartItemBtn
              disabled={isUpdating}
              onClick={(e) => {
                updateItem(e, item, parseInt(quantityRef.current!.value))
              }}
            >
              {isAnimating ? (
                <Loader />
              ) : (
                <CartItemStyles.UpdateText>Update</CartItemStyles.UpdateText>
              )}
            </CartItemStyles.UpdateCartItemBtn>
          </CartItemStyles.QuantityForm>
        </CartItemStyles.CartEl>
        <CartItemStyles.CartEl>
          <CartItemStyles.ProductSubtotal>${itemTotal.toFixed(2)}</CartItemStyles.ProductSubtotal>
        </CartItemStyles.CartEl>
      </CartItemStyles.CartRow>
    </>
  )
}

export default SingleCartItem
