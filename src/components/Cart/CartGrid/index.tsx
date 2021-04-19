import React, { useContext } from 'react'
import * as CartGridStyles from './styled'
import SingleCartItem from '../../../components/Cart/CartItem'
import { CartItem } from '../../../types'
import { CartContext } from '../../../context/cart'

interface CartGridProps {}

const CartGrid: React.FC<CartGridProps> = () => {
  const [cart] = useContext(CartContext)
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
            return <SingleCartItem key={item.product_id} item={item} />
          })}
        </CartGridStyles.SecondCol>
      </CartGridStyles.Wrapper>
    </>
  )
}

export default CartGrid
