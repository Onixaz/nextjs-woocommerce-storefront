import React, { useContext } from 'react'
import useSWR from 'swr'
import { CartContext } from '../../../context/cart'
import { Loader } from '../../../styles/utils'
import { Cart, CartItem } from '../../../types'
import { getSingleProduct } from '../../../utils/functions'
import * as CartTotalStyles from './styled'

interface CartTotalProps {
  adds?: number
}

const CartTotal: React.FC<CartTotalProps> = ({ adds }) => {
  const { data } = useSWR('/api/products/retrieve')
  const [cart] = useContext(CartContext)

  if (!data) {
    return <Loader />
  }

  const cartTotal = cart.items.reduce((acc: number, curr: CartItem) => {
    const product = getSingleProduct(curr.product_id, data)
    if (!product) return 0

    return acc + curr.quantity * product.price
  }, 0)

  return (
    <CartTotalStyles.Total>
      ${adds && adds > 0 ? (adds + cartTotal).toFixed(2) : cartTotal.toFixed(2)}
    </CartTotalStyles.Total>
  )
}

export default React.memo(CartTotal)
