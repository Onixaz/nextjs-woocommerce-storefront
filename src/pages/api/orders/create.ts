import { NextApiRequest, NextApiResponse } from 'next'
import { poster } from '../../../utils/functions'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY!}`, { apiVersion: '2020-08-27' })

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        items,
        customer: {
          first_name,
          last_name,
          address_1,
          address_2,
          city,
          state,
          postcode,
          country,
          email,
          phone,
          customer_note,
        },
        payment: { total, payment_method },
      } = req.body

      //const requestBody = {}

      const wooBody = {
        payment_method: `Credit Card`,
        payment_method_title: 'Credit Card',
        set_paid: false,
        billing: {
          first_name,
          last_name,
          address_1,
          address_2,
          city,
          state,
          postcode,
          country,
          email,
          phone,
        },
        shipping: {
          first_name,
          last_name,
          address_1,
          address_2,
          city,
          state,
          postcode,
          country,
        },
        line_items: items,
        customer_note,
      }

      const wooResponse = await poster(
        `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/wc/v3/orders`,
        process.env.WOO_CONSUMER_KEY!,
        process.env.WOO_CONSUMER_SECRET!,
        wooBody,
        'POST',
      )

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
            `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/wc/v3/orders/${order.id}`,
            process.env.WOO_CONSUMER_KEY!,
            process.env.WOO_CONSUMER_SECRET!,
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
