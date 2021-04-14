import React, { useContext } from 'react'
import * as CartGridStyles from './styled'
import Link from 'next/link'
import SingleCartItem from '../../../components/Cart/CartItem'
import { CartItem } from '../../../types'
import { useRouter } from 'next/router'
import { cartUpdater, getCart } from '../../../utils/functions'
import { CartContext } from '../../../context/cart'

interface CartGridProps {
  items: CartItem[]
}

const CartGrid: React.FC<CartGridProps> = ({ items }) => {
  return (
    <>
      <CartGridStyles.Wrapper>
        <CartGridStyles.FirstCol>
          {items.map((item: CartItem) => {
            return (
              <CartGridStyles.DescriptionRow key={item.product_id?.toString()}>
                <CartGridStyles.Description></CartGridStyles.Description>
                <CartGridStyles.Description></CartGridStyles.Description>
                <CartGridStyles.Description>Product</CartGridStyles.Description>
                <CartGridStyles.Description>Price</CartGridStyles.Description>
                <CartGridStyles.Description>Quantity</CartGridStyles.Description>
                <CartGridStyles.Description>Subtotal</CartGridStyles.Description>
              </CartGridStyles.DescriptionRow>
            )
          })}
        </CartGridStyles.FirstCol>
        <CartGridStyles.SecondCol>
          {items.map((item: CartItem) => {
            return <SingleCartItem key={item.product_id} item={item} />
          })}
        </CartGridStyles.SecondCol>
      </CartGridStyles.Wrapper>
    </>
  )
}

export default CartGrid
