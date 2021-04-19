import { Cart, CartItem, Customer, Product } from '../types'
import jwt from 'jsonwebtoken'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/client'

export const authorizeAdmin = () => {
  const payload = {
    iss: `${process.env.NEXT_PUBLIC_WP_API_URL}`,

    data: {
      user: {
        id: '1',
      },
    },
  }

  return jwt.sign(payload, `${process.env.WP_JWT_AUTH_SECRET_KEY!}`, { expiresIn: 60 })
}

export const authorizeUser = async (req: NextApiRequest) => {
  try {
    const session: any = await getSession({ req })
    if (!session) return null

    const key: any = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY!, {
      algorithms: ['HS256'],
      ignoreNotBefore: true,
    })

    return key
  } catch (error) {
    return null
  }
}

export const fetcher = async (url: string) => {
  const token = authorizeAdmin()

  return fetch(process.env.NEXT_PUBLIC_WP_API_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  })
}

export const poster = async (url: string, data: object, method: string) => {
  const token = authorizeAdmin()

  return fetch(process.env.NEXT_PUBLIC_WP_API_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json',
    },
    method: method,
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors',
  })
}

export const initCart = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/get-cart`)
  const cartKey = res.headers.get('x-cocart-api')

  return {
    items: [],
    key: cartKey,
    timestamp: new Date().getTime(),
  }
}

export const getCart = async (cartKey: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/get-cart?cart_key=${cartKey}`,
  )
  const cart: CartItem[] = await res.json()

  return {
    items: Object.values(cart),
    key: cartKey,
    timestamp: new Date().getTime(),
  }
}

export const getSingleProduct = (productId: number, data: any) => {
  const product = data.find((item: Product) => {
    return item.id === productId
  })

  return product
}

export const updateCart = (cart: Cart, data: Response) => {
  const newCart = { ...cart }
  newCart.items = Object.values(data)

  return newCart
}

export const createOrder = async (customer: Customer, payment: string, cart: Cart) => {
  const res = await fetch(`/api/orders/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customer, payment, cart }),
  })

  return res.json()
}
