import React, { useState, useEffect } from 'react'
import { Cart } from '../types'
import { getCart, initCart } from '../utils/functions'
import { useSession } from 'next-auth/client'

export const CartContext = React.createContext<any | null>(null)

interface CartProviderProps {}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [], key: '', timestamp: 0 })
  const [isUpdating, setIsUpdating] = useState(false)
  const [session]: any = useSession()

  //to change cart expiration date on server
  //https://github.com/co-cart/co-cart/search?q=cocart_cart_expiring+in%3Afile&type=Code
  //however you still need to expire your local cart so the carts don't get out of sync

  const expireIn = 259200000 //3 days example

  const createUserCart = async () => {
    setIsUpdating(true)
    const req = await fetch('/api/customers/retrieve')
    const res = await req.json()
    const newCart = await getCart(res.meta_data.find((x: any) => x.key === 'cart').value)
    setCart(newCart!)
    localStorage.setItem('local_cart', JSON.stringify(newCart))
    setIsUpdating(false)
  }

  const createGuestCart = async () => {
    setIsUpdating(true)
    const newCart = await initCart()
    setCart(newCart!)
    localStorage.setItem('local_cart', JSON.stringify(newCart))
    setIsUpdating(false)
  }

  const checkForLocalCart = (expirity: number) => {
    const cartFromLocalStoragge = localStorage.getItem('local_cart')
    if (
      !cartFromLocalStoragge ||
      new Date().getTime() - JSON.parse(cartFromLocalStoragge).timestamp > expirity ||
      !JSON.parse(cartFromLocalStoragge).key
    ) {
      return null
    } else {
      return JSON.parse(cartFromLocalStoragge)
    }
  }

  useEffect(() => {
    const cartFromLocalStorage = checkForLocalCart(expireIn)

    if (isUpdating) return
    if (session) {
      createUserCart()
    } else {
      if (!cartFromLocalStorage) {
        createGuestCart()
      } else {
        setCart(cartFromLocalStorage)
      }
    }
  }, [session])

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
