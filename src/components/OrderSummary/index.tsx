import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { OrderSummaryContainer } from './OrderSummaryElements'

const OrderSummaryContent = () => {
  const [cart] = useContext(CartContext)
  return (
    <OrderSummaryContainer>
      <ul>
        {cart.items.map((item: any) => (
          <li>
            {item.product_name} x {item.quantity} {item.line_total}
          </li>
        ))}
      </ul>
    </OrderSummaryContainer>
  )
}

export default OrderSummaryContent
