import React from 'react'
import {
  El,
  RemoveFromCartBtn,
  Thumbnail,
  QuantityForm,
  InputField,
  UpdateCartItem,
  ProductLink,
  UpdateText,
} from './CartItemElements'

import { Loader } from '../../styles/Global/utils'
import Link from 'next/link'
interface CartItemProps {
  item: any
  itemQty: number
  removeItem: (item: { [key: string]: string }) => void
  handleQty: (e: React.ChangeEvent<HTMLInputElement>, item: { [key: string]: string }) => void
  updateItem: (e: React.SyntheticEvent, item: { [key: string]: string }, itemQty: any) => void
  isAnimating: any
  isUpdating: boolean
}

const SingleCartItem: React.FC<CartItemProps> = ({
  item,
  itemQty,
  removeItem,
  handleQty,
  updateItem,
  isAnimating,
  isUpdating,
}) => {
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
            onChange={(e) => handleQty(e, item)}
            defaultValue={item.quantity}
            min="1"
          ></InputField>
          <UpdateCartItem
            disabled={isUpdating}
            onClick={(e) => {
              updateItem(
                e,
                item,
                Object.values(itemQty)[Object.keys(itemQty).indexOf(item.product_id.toString())],
              )
            }}
          >
            {Object.values(isAnimating)[
              Object.keys(isAnimating).indexOf(item.product_id.toString())
            ] ? (
              <Loader />
            ) : (
              <UpdateText>Update</UpdateText>
            )}
          </UpdateCartItem>
        </QuantityForm>
      </El>
      <El>{item.line_subtotal} $</El>
    </>
  )
}

export default SingleCartItem
