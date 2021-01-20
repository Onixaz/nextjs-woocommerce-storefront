import React, { useState, useEffect } from 'react'

import axios from 'axios'

export const CartContext = React.createContext([])

interface CartProviderProps {}
interface CartItemTypes {
  key: string
  time_stamp: number
  items: string[]
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState({ items: [], key: '', time_stamp: 0 })
  const [isUpdating, setIsUpdating] = useState(false)
  const expireIn = 25920000

  const createCart = () => {
    axios.get(`https://elementor.local/wp-json/cocart/v1/get-cart`).then((response) => {
      const newCart: CartItemTypes = {
        ...cart,
        key: response.headers['x-cocart-api'],
        time_stamp: new Date().getTime(),
      }

      setCart(newCart)

      localStorage.setItem('local_cart', JSON.stringify(newCart))
    })
  }

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('local_cart'))

    if (localCart === null) {
      createCart()
    } else if (localCart !== null && new Date().getTime() - localCart.time_stamp > expireIn) {
      createCart()
    } else {
      setCart(localCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('local_cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={[cart, setCart, isUpdating, setIsUpdating]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
