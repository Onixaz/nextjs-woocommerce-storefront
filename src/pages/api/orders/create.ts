import { NextApiRequest, NextApiResponse } from 'next'
import { poster } from '../../../utils/functions'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY!}`, { apiVersion: '2020-08-27' })

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        items,
        customer: { customer_note },
        payment: { total, payment_method },
      } = req.body

      //const requestBody = {}

      const wooBody = {
        payment_method: `Credit Card`,
        payment_method_title: 'Credit Card',
        set_paid: false,
        billing: {
          ...req.body.customer,
        },
        shipping: {
          ...req.body.customer,
        },
        line_items: items,
        customer_note,
      }

      const wooResponse = await poster(`/wp-json/wc/v3/orders`, wooBody, 'POST')

      const order = await wooResponse.json()

      if (total === parseFloat(order.total)) {
        const amount = Math.round(total.toFixed(2) * 100)

        const paymentIntent = await stripe.paymentIntents.create({
          payment_method,
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
          res.status(400).json({ message: 'Failure' })
        }
      } else {
        res.status(400).json({ message: 'Failure' })
      }

      //
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Failure' })
    }
  } else {
    res.status(401).json({ message: 'Method not allowed' })
  }
}
