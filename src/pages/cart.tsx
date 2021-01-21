import React from 'react'
import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'

interface CartPageProps {}

interface CartItemTypes {
  key: string
  time_stamp: number
  items: Array<{ id: number; name: string; total: number; quantity: number }>
}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      {cart.items.map((item: { [key: string]: string }) => {
        return (
          <React.Fragment key={item.id}>
            <p>
              {item.name}
              {item.quantity}
            </p>
            <img src={item.image} />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CartPage
