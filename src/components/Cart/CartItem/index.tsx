import * as CartItemStyles from './styled'
import React, { useContext, useRef, useState } from 'react'
import { cartUpdater, initCart } from '../../../utils/functions'
import { CartContext } from '../../../context/cart'
import { CartItem } from '../../../types'
import Link from 'next/link'
import { Loader } from '../../../styles/utils'

interface CartItemProps {
  item: CartItem
}

const SingleCartItem: React.FC<CartItemProps> = ({ item }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [isRemoving, setIsRemoving] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const quantityRef = useRef<HTMLInputElement | null>(null)

  const removeItem = async (item: CartItem) => {
    setIsRemoving(true)
    setIsUpdating(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`,
        {
          method: 'DELETE',
          body: JSON.stringify({
            cart_item_key: item.key,
            return_cart: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await res.json()

      setIsUpdating(false)
      setIsRemoving(false)
      setCart(() => cartUpdater(cart, data))
    } catch (error) {
      const newCart = await initCart()
      setCart(newCart)
      setIsUpdating(false)
      setIsRemoving(false)
    }
  }

  const updateItem = async (e: React.SyntheticEvent, item: CartItem, quantity: any) => {
    e.preventDefault()
    setIsUpdating(true)
    setIsAnimating(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`,
        {
          method: 'POST',
          body: JSON.stringify({
            cart_item_key: item.key,
            quantity: quantity,
            return_cart: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await res.json()

      setIsUpdating(false)
      setIsAnimating(false)
      setCart(() => cartUpdater(cart, data))
    } catch (error) {
      console.log(error)
      const newCart = await initCart()
      setCart(newCart)
      setIsAnimating(false)
      setIsUpdating(false)
    }
  }

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
        <CartItemStyles.CartEl>{item.product_price}</CartItemStyles.CartEl>
        <CartItemStyles.CartEl>
          <CartItemStyles.QuantityForm>
            <CartItemStyles.InputField
              type="number"
              defaultValue={item.quantity}
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
          <CartItemStyles.ProductSubtotal>
            ${item.line_total?.toFixed(2)}
          </CartItemStyles.ProductSubtotal>
        </CartItemStyles.CartEl>
      </CartItemStyles.CartRow>
    </>
  )
}

export default React.memo(SingleCartItem)
