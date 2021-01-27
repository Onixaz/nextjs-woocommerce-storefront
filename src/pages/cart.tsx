import React, { useContext, useState, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'

import { Container, SectionTitle } from '../styles/Global/utils'
import {
  CartFormContainer,
  CartGrid,
  Item,
  Thumbnail,
  ProductLink,
  ItemDesc,
  RemoveFromCartBtn,
  QuantityForm,
  InputField,
  QuantityBlock,
  UpdateCartItem,
  EmptyCart,
  CartTotals,
  CheckoutBtn,
} from '../styles/Individual/CartPageElements'

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
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [itemQty, setItemQty] = useState<any>({})

  useEffect(() => {
    console.log(itemQty)
  }, [itemQty])

  const test = (e: any, item: any) => {
    e.preventDefault()
    console.log(itemQty[item])
  }

  const handleQty = (item: { [key: string]: string }, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setItemQty((prev: any) => ({
      ...prev,
      [item.product_id]: parseInt(value),
    }))
  }

  const removeItem = (item: any) => {
    console.log(`Removing ${item.product_name}`)
  }

  const updateItem = (
    e: React.SyntheticEvent,
    item: { [key: string]: string },
    quantity: number,
  ) => {
    e.preventDefault()
    setIsUpdating((prev: boolean) => !prev)
    fetch(`https://elementor.local/wp-json/cocart/v1/item?cart_key=${cart.key}`, {
      method: 'POST',
      body: JSON.stringify({
        cart_item_key: item.key,
        quantity: quantity,
        return_cart: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newCart = { ...cart }
        const remoteCartItems = Object.values(data)
        console.log('Got response')
        console.log(remoteCartItems)
        newCart.items = remoteCartItems
        setCart(newCart)
        setIsUpdating((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsUpdating((prev: boolean) => !prev)
      })
  }

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
    <Container>
      <CartFormContainer>
        {cart.items.length ? (
          <>
            <SectionTitle>Cart</SectionTitle>
            <CartGrid>
              <ItemDesc></ItemDesc>
              <ItemDesc></ItemDesc>
              <ItemDesc>Product</ItemDesc>
              <ItemDesc>Price</ItemDesc>
              <ItemDesc>
                <QuantityBlock>Quantity</QuantityBlock>
              </ItemDesc>
              <ItemDesc>Subtotal</ItemDesc>
              {cart.items.map((item: any) => {
                return (
                  <React.Fragment key={item.product_id}>
                    <Item>
                      <RemoveFromCartBtn onClick={() => removeItem(item)} />
                    </Item>
                    <Item>
                      <Thumbnail src={item.image} />
                    </Item>
                    <Item>
                      <Link href={`/products/${item.slug}`}>
                        <ProductLink>{item.product_name}</ProductLink>
                      </Link>
                    </Item>
                    <Item>{item.product_price}</Item>
                    <Item>
                      <QuantityForm>
                        <InputField
                          type="number"
                          onChange={(e) => handleQty(item, e)}
                          defaultValue={item.quantity}
                          min="1"
                        ></InputField>
                        <UpdateCartItem
                          disabled={isUpdating}
                          onClick={() => console.log(`Updating`)}
                        >
                          Update
                        </UpdateCartItem>
                      </QuantityForm>
                    </Item>
                    <Item>{item.line_subtotal} $</Item>
                  </React.Fragment>
                )
              })}
            </CartGrid>
            <CartTotals>
              <CheckoutBtn>Proceed to checkout</CheckoutBtn>
            </CartTotals>
          </>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
        <button onClick={() => createOrder(dummyData)}>Create order</button>
      </CartFormContainer>
    </Container>
  )
}

export default CartPage
