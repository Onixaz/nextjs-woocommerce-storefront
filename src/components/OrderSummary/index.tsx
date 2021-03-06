import * as OrderSummaryStyles from './styled'
import React, { useContext } from 'react'

import { CartContext } from '../../context/cart'

interface OrderSummaryProps {}

const OrderSummary: React.FC<OrderSummaryProps> = () => {
  const [cart] = useContext(CartContext)
  return (
    <OrderSummaryStyles.Wrapper>
      <OrderSummaryStyles.SummaryGrid>
        <OrderSummaryStyles.SumItemDesc>Product</OrderSummaryStyles.SumItemDesc>
        <OrderSummaryStyles.SumItemDesc>Subtotal</OrderSummaryStyles.SumItemDesc>
        {cart && cart.items > 0
          ? cart.items.map((item: any) => (
              <React.Fragment key={item.product_id}>
                <OrderSummaryStyles.SumItemName>
                  {item.product_name} x {item.quantity}
                </OrderSummaryStyles.SumItemName>
                <OrderSummaryStyles.SumItemTotal>
                  ${item.line_total.toFixed(2)}
                </OrderSummaryStyles.SumItemTotal>
              </React.Fragment>
            ))
          : null}
        <OrderSummaryStyles.SumItemDesc>Subtotal</OrderSummaryStyles.SumItemDesc>
        {/*for design purposes duplicate this */}
        <OrderSummaryStyles.SumItemDescWhite>
          ${cart && cart.total ? cart.total.toFixed(2) : 0}
        </OrderSummaryStyles.SumItemDescWhite>
        <OrderSummaryStyles.SumItemDesc>Total</OrderSummaryStyles.SumItemDesc>
        <OrderSummaryStyles.SumItemDescWhite>
          ${cart && cart.total ? cart.total.toFixed(2) : 0}
        </OrderSummaryStyles.SumItemDescWhite>
      </OrderSummaryStyles.SummaryGrid>
    </OrderSummaryStyles.Wrapper>
  )
}

export default OrderSummary
