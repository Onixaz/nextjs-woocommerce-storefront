import React, { useState, useEffect } from 'react'
import { Cookies } from 'react-cookie-consent'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const CartContext = React.createContext([])

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [remoteUpd, setRemoteUpd] = useState(false)

  useEffect(() => {
    let initialCartData = localStorage.getItem('cart')
    if (initialCartData !== null) {
      let cartFromLocalStorage = JSON.parse(initialCartData)
      setCart(cartFromLocalStorage)
    }
    if (Cookies.get('remote_cart_key') === undefined) {
      Cookies.set('remote_cart_key', uuidv4(), { expires: 1 })
    }
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.removeItem('cart')
    }
  }, [cart])

  //TODO: use CoCart plugin to save cart on the server instead of localstorage

  return (
    <CartContext.Provider value={[cart, setCart, remoteUpd, setRemoteUpd]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
