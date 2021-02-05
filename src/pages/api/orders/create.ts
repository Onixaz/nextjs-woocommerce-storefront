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
        payment: { amount, payment_method },
      } = req.body

      //const requestBody = {}

      const wooBody = {
        payment_method: `CC`,
        payment_method_title: 'Pay with credit card',
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

      const woo_response = await poster(
        `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/wc/v3/orders`,
        process.env.WOO_CONSUMER_KEY!,
        process.env.WOO_CONSUMER_SECRET!,
        wooBody,
        'POST',
      )

      const order = await woo_response.json()

      if (amount === parseFloat(order.total)) {
        const paymentIntent = await stripe.paymentIntents.create({
          payment_method,
          amount: amount * 100,
          currency: 'usd',
          confirm: true,
          confirmation_method: 'manual',
        })

        if (paymentIntent.status === 'succeeded') {
          res.status(200).json({ message: 'Thank you for your order!' })
          //update order to paid on Woo
        } else {
          res.status(400).json({ message: 'There was a problem confirming your order!' })
        }
      } else {
        res.status(400).json({ message: order.message })
      }

      //
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ooops something went wrong. Please try again later!' })
    }
  } else {
    res.status(401).json({ message: 'Method not allowed' })
  }
}
