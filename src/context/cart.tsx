import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    let initialCartData = localStorage.getItem('cart')
    if (initialCartData !== null) {
      let newCart = JSON.parse(initialCartData)
      setCart(newCart)
    }
  }, [])

  return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>
}

export default CartProvider
