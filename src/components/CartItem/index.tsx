import React, { useContext, useState } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import {
  El,
  RemoveFromCartBtn,
  Thumbnail,
  QuantityForm,
  InputField,
  UpdateCartItemBtn,
  ProductLink,
  UpdateText,
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
      <El>
        <RemoveFromCartBtn disabled={isUpdating} onClick={() => removeItem(item)}>
          {isRemoving ? <Loader /> : <RiCloseCircleFill style={{ fontSize: '1.5rem' }} />}{' '}
        </RemoveFromCartBtn>
      </El>
      <El>
        <Thumbnail src={item.image} />
      </El>
      <El>
        <Link href={`/products/${item.slug}`}>
          <ProductLink>{item.product_name}</ProductLink>
        </Link>
      </El>
      <El>{item.product_price}</El>
      <El>
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
      </El>
      <El>{item.line_total} $</El>
    </>
  )
}

export default SingleCartItem
