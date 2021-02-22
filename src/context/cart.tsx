import React, { useState, useEffect } from 'react'
import { Cart } from '../types'
import { initCart } from '../utils/functions'

export const CartContext = React.createContext<any | null>(null)

interface CartProviderProps {}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [], key: '', timestamp: 0, total: 0 })
  const [isUpdating, setIsUpdating] = useState(false)

  //to change cart expiration date on server
  //https://github.com/co-cart/co-cart/search?q=cocart_cart_expiring+in%3Afile&type=Code
  //however you still need to expire your local cart so the carts don't get out of sync
  const expireIn = 259200000 //3 days example

  const createCart = async () => {
    try {
      setIsUpdating((prev: boolean) => !prev)
      const newCart = await initCart()

      setCart(newCart!)
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
    localStorage.setItem('local_cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={[cart, setCart, isUpdating, setIsUpdating]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
