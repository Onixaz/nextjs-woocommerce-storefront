import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import CartItems from '../components/Cart'
import axios from 'axios'
import { Cookies } from 'react-cookie-consent'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  useEffect(() => {
    axios
      .get(
        `https://elementor.local/wp-json/cocart/v1/get-cart?cart_key=${Cookies.get(
          'remote_cart_key',
        )}`,
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <CartItems />
      {cart?.map((item) => {
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
