import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'

const dummyData = {
  payment_method: 'cod',
  payment_method_title: 'Cash on Delivery',
  set_paid: false,
  billing: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '969 Market',
    address_2: '',
    city: 'San Francisco',
    state: 'CA',
    postcode: '94103',
    country: 'US',
    email: 'john.doe@example.com',
    phone: '(555) 555-5555',
  },
  shipping: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '969 Market',
    address_2: '',
    city: 'San Francisco',
    state: 'CA',
    postcode: '94103',
    country: 'US',
  },
  line_items: [
    {
      product_id: 58,
      quantity: 2,
    },
    {
      product_id: 59,
      quantity: 1,
    },
  ],
  shipping_lines: [
    {
      method_id: 'flat_rate',
      method_title: 'Flat Rate',
      total: '10.00',
    },
  ],
}

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)

  const createOrder = (data: any) => {
    return fetch('http://192.168.1.211:3000/api/orders/create', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      {cart.items.map((item: { [key: string]: string }) => {
        return (
          <React.Fragment key={item.product_id}>
            <p>{item.product_name}</p>
            <p>{item.quantity}</p>
            <img src={item.image} />
          </React.Fragment>
        )
      })}
      <button onClick={() => createOrder(dummyData)}>Create Order</button>
    </>
  )
}

export default CartPage
