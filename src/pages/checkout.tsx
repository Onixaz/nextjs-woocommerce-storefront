import React from 'react'

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

const CheckoutPage = () => {
  const createOrder = async (data: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/orders/create`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const order = await res.json().catch((error) => console.log(error))
    if (order) {
      console.log(order)
    }
  }

  return (
    <div>
      <h1>Yo</h1>
    </div>
  )
}

export default CheckoutPage
