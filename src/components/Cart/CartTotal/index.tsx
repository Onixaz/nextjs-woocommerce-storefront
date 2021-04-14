import React from 'react'
import useSWR from 'swr'
import { Loader } from '../../../styles/utils'
import { Cart, CartItem } from '../../../types'
import { getSingleProduct } from '../../../utils/functions'
import * as CartTotalStyles from './styled'

interface CartTotalProps {
  cart: Cart
  adds?: number
}

const CartTotal: React.FC<CartTotalProps> = ({ cart, adds }) => {
  const { data } = useSWR('/api/products/retrieve')

  if (!data) {
    return <Loader />
  }

  const cartTotal = cart.items.reduce((acc: number, curr: CartItem) => {
    const { price } = getSingleProduct(curr.product_id, data)

    return acc + curr.quantity * price
  }, 0)

  return (
    <CartTotalStyles.Total>
      ${adds && adds > 0 ? (adds + cartTotal).toFixed(2) : cartTotal.toFixed(2)}
    </CartTotalStyles.Total>
  )
}

export default CartTotal
