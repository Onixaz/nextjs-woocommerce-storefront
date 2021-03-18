import * as OrderSummaryStyles from './styled'
import React, { useContext, useState } from 'react'
import { CartItem } from '../../types'
import useSWR from 'swr'
import { CartContext } from '../../context/cart'

interface OrderSummaryProps {
  register: any
  errors: any
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ register, errors }) => {
  const { data } = useSWR('/api/shipping/retrieve')
  const [shippingCost, setShippingCost] = useState(0)
  const [cart] = useContext(CartContext)

  return (
    <OrderSummaryStyles.Wrapper>
      <OrderSummaryStyles.Grid>
        <OrderSummaryStyles.DescriptionTall>Product</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionTall>Subtotal</OrderSummaryStyles.DescriptionTall>
        {cart.items.length > 0 &&
          cart.items.map((item: CartItem) => (
            <React.Fragment key={item.product_id}>
              <OrderSummaryStyles.ItemName>
                {item.product_name} x {item.quantity}
              </OrderSummaryStyles.ItemName>
              <OrderSummaryStyles.ItemTotal>
                ${item.line_total!.toFixed(2)}
              </OrderSummaryStyles.ItemTotal>
            </React.Fragment>
          ))}
        <OrderSummaryStyles.DescriptionTall>Subtotal</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionWhite shipping={false}>
          ${cart.total.toFixed(2)}
        </OrderSummaryStyles.DescriptionWhite>

        <OrderSummaryStyles.DescriptionLow>Shipping</OrderSummaryStyles.DescriptionLow>
        <OrderSummaryStyles.DescriptionWhite shipping={true}>
          <OrderSummaryStyles.Values>
            {data?.map((item: any) => {
              return (
                <OrderSummaryStyles.Method key={item.id}>
                  <input
                    ref={register({ required: true })}
                    onChange={() => {
                      setShippingCost(item.cost)
                    }}
                    type="radio"
                    name="shipping"
                    value={item.method}
                  />
                  <label htmlFor="shipping">
                    {item.title} {item.cost > 0 ? ' - $' + item.cost : ''}
                  </label>
                </OrderSummaryStyles.Method>
              )
            })}
          </OrderSummaryStyles.Values>
          {/* {errors.shipping ?? <OrderSummaryStyles.Error> Please select a shipping method </OrderSummaryStyles.Error>} */}
        </OrderSummaryStyles.DescriptionWhite>

        <OrderSummaryStyles.DescriptionTall>Total</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionWhite shipping={false}>
          ${(shippingCost + cart.total).toFixed(2)}
        </OrderSummaryStyles.DescriptionWhite>
      </OrderSummaryStyles.Grid>
      {errors.shipping ? (
        <OrderSummaryStyles.Error>Please select shipping method</OrderSummaryStyles.Error>
      ) : (
        ''
      )}
    </OrderSummaryStyles.Wrapper>
  )
}

export default OrderSummary
