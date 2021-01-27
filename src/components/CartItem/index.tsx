import React, { useState } from 'react'
import {
  El,
  RemoveFromCartBtn,
  Thumbnail,
  QuantityForm,
  InputField,
  UpdateCartItemBtn,
  ProductLink,
  UpdateText,
} from './CartItemElements'

import { Loader } from '../../styles/Global/utils'
import Link from 'next/link'
interface CartItemProps {
  item: any
  removeItem: (item: { [key: string]: string }) => void
  updateItem: (e: React.SyntheticEvent, item: { [key: string]: string }, qty: any) => void
  isAnimating: any
  isUpdating: boolean
}

const SingleCartItem: React.FC<CartItemProps> = ({
  item,
  removeItem,
  updateItem,
  isAnimating,
  isUpdating,
}) => {
  const [qty, setQty] = useState(1)
  return (
    <>
      <El>
        <RemoveFromCartBtn onClick={() => removeItem(item)} />
      </El>
      <El>
        <Thumbnail src={item.image} />
      </El>
      <El>
        <Link href={`/products/${item.slug}`}>
          <ProductLink>{item.product_name}</ProductLink>
        </Link>
      </El>
      <El>{item.product_price}</El>
      <El>
        <QuantityForm>
          <InputField
            type="number"
            onChange={(e) => setQty(parseInt(e.target.value))}
            defaultValue={item.quantity}
            min="1"
          ></InputField>
          <UpdateCartItemBtn
            disabled={isUpdating}
            onClick={(e) => {
              updateItem(e, item, qty)
            }}
          >
            {Object.values(isAnimating)[
              Object.keys(isAnimating).indexOf(item.product_id.toString())
            ] ? (
              <Loader />
            ) : (
              <UpdateText>Update</UpdateText>
            )}
          </UpdateCartItemBtn>
        </QuantityForm>
      </El>
      <El>{item.line_subtotal} $</El>
    </>
  )
}

export default SingleCartItem
