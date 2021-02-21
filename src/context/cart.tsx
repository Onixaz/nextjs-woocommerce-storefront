import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Cart } from '../types'

export const CartContext = React.createContext<any | null>(null)

interface CartProviderProps {}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const initialCart = { items: [], key: '', timestamp: 0, total: 0 }
  const [cart, setCart] = useState<Cart>(initialCart)
  const [isUpdating, setIsUpdating] = useState(false)

  //to change cart expiration date on server
  //https://github.com/co-cart/co-cart/search?q=cocart_cart_expiring+in%3Afile&type=Code
  //however you still need to expire your local cart so the carts don't get out of sync
  const expireIn = 259200000 //3 days example

  const createCart = async () => {
    try {
      setIsUpdating((prev: boolean) => !prev)
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/get-cart`)

      const cartKey = res.headers.get('x-cocart-api')
      if (!cartKey) return
      const newCart = {
        ...cart,
        key: cartKey,
        timestamp: new Date().getTime(),
      }
      setCart(newCart)
      localStorage.setItem('local_cart', JSON.stringify(newCart))

      setIsUpdating((prev: boolean) => !prev)
    } catch (error) {
      setIsUpdating((prev: boolean) => !prev)
      console.error(error)
    }
  }

  useEffect(() => {
    const localCart = localStorage.getItem('local_cart')

    if (
      !localCart ||
      (localCart && new Date().getTime() - JSON.parse(localCart).timestamp > expireIn) ||
      !JSON.parse(localCart).key
    ) {
      createCart()
    } else {
      setCart(JSON.parse(localCart))
    }
  }, [])

  useEffect(() => {
    //updating local cart everytime changes are made  to remote cart
    if (cart.key) {
      localStorage.setItem('local_cart', JSON.stringify(cart))
    } else {
      createCart()
    }
  }, [cart])

  return (
    <CartContext.Provider value={[cart, setCart, isUpdating, setIsUpdating, initialCart]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
