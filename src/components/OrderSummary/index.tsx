import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import {
  OrderSummaryContainer,
  SummaryGrid,
  SumItemDesc,
  SumItemDescWhite,
  SumItemName,
  SumItemTotal,
} from './OrderSummaryElements'

interface OrderSummaryProps {}

const OrderSummary: React.FC<OrderSummaryProps> = () => {
  const [cart] = useContext(CartContext)
  return (
    <OrderSummaryContainer>
      <SummaryGrid>
        <SumItemDesc>Product</SumItemDesc>
        <SumItemDesc>Subtotal</SumItemDesc>
        {cart.items.map((item: any) => (
          <React.Fragment key={item.product_id}>
            <SumItemName>
              {item.product_name} x {item.quantity}
            </SumItemName>
            <SumItemTotal>{item.line_total} $</SumItemTotal>
          </React.Fragment>
        ))}
        <SumItemDesc>Subtotal</SumItemDesc>
        {/*for design purposes duplicate this */}
        <SumItemDescWhite>{cart.total} $</SumItemDescWhite>
        <SumItemDesc>Total</SumItemDesc>
        <SumItemDescWhite>{cart.total} $</SumItemDescWhite>
      </SummaryGrid>
    </OrderSummaryContainer>
  )
}

export default OrderSummary
