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
    const cartKey = res.meta_data.find((x: { [key: string]: string }) => x.key === 'cart')
    let newCart: Cart
    if (cartKey) {
      newCart = await getCart(cartKey.value)
    } else {
      newCart = await initCart()
    }
    setCart(newCart)
    setIsUpdating(false)
  }

  const createGuestCart = async () => {
    setIsUpdating(true)
    const newCart = await initCart()
    setCart(newCart)
    setIsUpdating(false)
  }

  const checkForLocalCart = (expirity: number) => {
    const cartFromLocalStorage = localStorage.getItem('local_cart')
    if (
      !cartFromLocalStorage ||
      new Date().getTime() - JSON.parse(cartFromLocalStorage).timestamp > expirity ||
      !JSON.parse(cartFromLocalStorage).key ||
      JSON.parse(cartFromLocalStorage).items.length === 0
    ) {
      return null
    } else {
      return JSON.parse(cartFromLocalStorage)
    }
  }

  useEffect(() => {
    if (isUpdating) return
    if (session) {
      createUserCart()
    } else {
      const localCart = checkForLocalCart(expireIn)
      if (localCart) {
        setCart(localCart)
      } else {
        createGuestCart()
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
