import { Cart, CartItem, Customer } from '../types'

import jwt from 'jsonwebtoken'

export const generateToken = () => {
  const payload = {
    iss: `${process.env.NEXT_PUBLIC_WP_API_URL}`,
    data: {
      user: {
        id: '1',
      },
    },
  }

  return jwt.sign(payload, `${process.env.WP_JWT_AUTH_SECRET_KEY!}`)
}

export const initCart = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/get-cart`)

  const cartKey = res.headers.get('x-cocart-api')

  const newCart = {
    items: [],
    key: cartKey,
    timestamp: new Date().getTime(),
    total: 0,
  }

  return newCart
}

export const clearCart = async (key: string) => {
  fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/clear?cart_key=${key}`, {
    method: 'POST',
  })
}

export const cartUpdater = (cart: Cart, data: Response) => {
  const newCart = { ...cart }
  newCart.items = Object.values(data)
  if (newCart.items.length > 0) {
    newCart.total = newCart.items.reduce(
      (acc: number, curr: CartItem) => (curr.line_total ? acc + curr.line_total : 0),
      0,
    )
  } else {
    newCart.total = 0
  }
  return newCart
}

export const fetcher = async (url: string) => {
  const token = generateToken()
  console.log(token)
  return fetch(process.env.NEXT_PUBLIC_WP_API_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    mode: 'cors',
  })
}

export const poster = async (url: string, data: object, method: string) => {
  const token = generateToken()

  return fetch(process.env.NEXT_PUBLIC_WP_API_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json; charset=utf-8',
    },
    method: method,
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors',
  })
}

export const createOrder = async (
  items: CartItem[],
  customer: Customer,
  total: number,
  payment: string,
) => {
  const res = await fetch(`/api/orders/create`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items, customer, total, payment }),
  })
  const json = await res.json()
  return json
}
