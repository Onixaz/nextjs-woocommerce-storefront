import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import axios from 'axios'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  useEffect(() => {
    axios
      .get(`https://elementor.local/wp-json/cocart/v1/get-cart?cart_key=${cart.key}`)
      .then((response: any) => console.log(response.data))
  }, [])

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
