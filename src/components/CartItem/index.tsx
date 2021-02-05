import React, { useContext, useState } from 'react'

import {
  CartRow,
  CartEl,
  RemoveFromCartBtn,
  Thumbnail,
  QuantityForm,
  InputField,
  UpdateCartItemBtn,
  ProductLink,
  UpdateText,
  RemoveIcon,
  RemovingLoader,
  CartItemProductSubtotal,
} from './CartItemElements'

import { Loader } from '../../styles/Global/utils'
import Link from 'next/link'
import { CartContext } from '../../context/cart'
import { cartUpdater } from '../../utils/functions'
import { CartItem } from '../../types'
interface CartItemProps {
  item: CartItem
}

const SingleCartItem: React.FC<CartItemProps> = ({ item }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [isRemoving, setIsRemoving] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [qty, setQty] = useState(item.quantity)

  const removeItem = (item: CartItem) => {
    setIsRemoving((prev: boolean) => !prev)
    setIsUpdating((prev: boolean) => !prev)
    fetch(`${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`, {
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
        setCart(() => cartUpdater(cart, data))
        setIsUpdating((prev: boolean) => !prev)
        setIsRemoving((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsUpdating((prev: boolean) => !prev)
        setIsRemoving((prev: boolean) => !prev)
      })
  }

  const updateItem = (e: React.SyntheticEvent, item: CartItem, quantity: any) => {
    e.preventDefault()
    setIsUpdating((prev: boolean) => !prev)
    setIsAnimating((prev: boolean) => !prev)
    fetch(`${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/cocart/v1/item?cart_key=${cart.key}`, {
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
        setCart(() => cartUpdater(cart, data))
        setIsUpdating((prev: boolean) => !prev)
        setIsAnimating((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsAnimating((prev: boolean) => !prev)
        setIsUpdating((prev: boolean) => !prev)
      })
  }
  return (
    <>
      <CartRow>
        <CartEl>
          <RemoveFromCartBtn disabled={isUpdating} onClick={() => removeItem(item)}>
            {isRemoving ? <RemovingLoader /> : <RemoveIcon />}{' '}
          </RemoveFromCartBtn>
        </CartEl>
        <CartEl>
          <Thumbnail src={item.image} />
        </CartEl>
        <CartEl>
          <Link href={`/products/${item.slug}`}>
            <ProductLink>{item.product_name}</ProductLink>
          </Link>
        </CartEl>
        <CartEl>{item.product_price}</CartEl>
        <CartEl>
          <QuantityForm>
            <InputField
              type="number"
              onChange={(e) => setQty(parseInt(e.target.value))}
              defaultValue={item.quantity}
              min="1"
            ></InputField>
            <UpdateCartItemBtn
              disabled={isUpdating}
              onClick={(e) => {
                updateItem(e, item, qty)
              }}
            >
              {isAnimating ? <Loader /> : <UpdateText>Update</UpdateText>}
            </UpdateCartItemBtn>
          </QuantityForm>
        </CartEl>
        <CartEl>
          <CartItemProductSubtotal>${item.line_total?.toFixed(2)}</CartItemProductSubtotal>
        </CartEl>
      </CartRow>
    </>
  )
}

export default SingleCartItem
