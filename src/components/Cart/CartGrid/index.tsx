import React from 'react'
import * as CartGridStyles from './styled'
import SingleCartItem from '../../../components/Cart/CartItem'
import { Cart, CartItem } from '../../../types'
import { getSingleProduct } from '../../../utils/functions'

interface CartGridProps {
  cart: Cart
  data: any
}

const CartGrid: React.FC<CartGridProps> = ({ cart, data }) => {
  return (
    <>
      <CartGridStyles.Wrapper>
        <CartGridStyles.FirstCol>
          {cart.items.map((item: CartItem) => {
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
          {cart.items.map((item: CartItem) => {
            const product = getSingleProduct(item.product_id, data)
            return (
              <SingleCartItem key={item.product_id} item={item} price={parseFloat(product.price)} />
            )
          })}
        </CartGridStyles.SecondCol>
      </CartGridStyles.Wrapper>
    </>
  )
}

export default CartGrid
