import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { getSession } from 'next-auth/client'
import Stripe from 'stripe'
import { CartItem, Customer } from '../../../types'
import { poster } from '../../../utils/functions'

interface OrderDetails {
  customer: Customer
  items: CartItem[]
  payment: string
  total: number
}

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY!}`, { apiVersion: '2020-08-27' })

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  let user: any
  const session: any = await getSession({ req })
  if (session) {
    user = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY!)
  }

  const { customer, items, payment, total }: OrderDetails = req.body

  if (!customer || !items || !payment || !total)
    return res.status(400).json({ message: 'Bad request' })

  try {
    const wooBody = {
      payment_method: `Credit Card`,
      payment_method_title: 'Credit Card',
      set_paid: false,
      billing: {
        ...customer,
      },
      shipping: {
        ...customer,
      },
      line_items: items,
      customer_note: customer.customer_note,
      customer_id: user ? user.data.user.id : 0,
    }

    const wooResponse = await poster(`/wp-json/wc/v3/orders`, wooBody, 'POST')

    const order = await wooResponse.json()

    if (req.body.total === parseFloat(order.total)) {
      const amount = Math.round(req.body.total.toFixed(2) * 100)

      const paymentIntent = await stripe.paymentIntents.create({
        payment_method: payment,
        amount,
        currency: 'usd',
        confirm: true,
        confirmation_method: 'manual',
      })

      if (paymentIntent.status === 'succeeded') {
        res.status(200).json({ message: 'Success' })

        poster(
          `/wp-json/wc/v3/orders/${order.id}`,

          { set_paid: true, transaction_id: paymentIntent.id },
          'PUT',
        )
      } else {
        res.status(400).json({ message: 'Failure in processing the payment' })
      }
    } else {
      res.status(400).json({ message: 'Failure in processing the order' })
    }

    //
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}
