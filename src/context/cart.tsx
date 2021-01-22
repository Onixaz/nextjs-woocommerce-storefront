import React, { useState, useEffect } from 'react'

import axios from 'axios'

export const CartContext = React.createContext<any | null>(null)

interface CartProviderProps {}

interface Cart {
  key: string
  time_stamp: number
  items: Array<{ id: number; name: string; total: number; quantity: number }>
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [], key: '', time_stamp: 0 })
  const [isUpdating, setIsUpdating] = useState(false)
  const expireIn = 25920000 //3 days

  const createCart = () => {
    axios.get(`https://elementor.local/wp-json/cocart/v1/get-cart`).then((response) => {
      const newCart = {
        ...cart,
        key: response.headers['x-cocart-api'],
        time_stamp: new Date().getTime(),
      }

      setCart(newCart)

      localStorage.setItem('local_cart', JSON.stringify(newCart))
    })
  }

  useEffect(() => {
    const localCart = localStorage.getItem('local_cart')

    if (localCart === null) {
      createCart()
    } else if (
      localCart !== null &&
      new Date().getTime() - JSON.parse(localCart).time_stamp > expireIn
    ) {
      createCart()
    } else {
      setCart(JSON.parse(localCart))
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
