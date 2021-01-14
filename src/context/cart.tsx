import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    let initialCartData = localStorage.getItem('cart')
    if (initialCartData !== null) {
      let cartFromLocalStorage = JSON.parse(initialCartData)
      setCart(cartFromLocalStorage)
    }
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.removeItem('cart')
    }
  }, [cart])

  return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>
}

export default CartProvider
