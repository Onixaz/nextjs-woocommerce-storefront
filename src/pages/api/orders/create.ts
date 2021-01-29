import { NextApiRequest, NextApiResponse } from 'next'
import { poster } from '../../../utils/functions'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY!}`, { apiVersion: '2020-08-27' })

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      //1. Client in the browser clicks the "Place Order" button and sends a request  to create an order

      //2. We destructure the req.body to get the customer details and the ammount user is supposed to pay.

      const { payment_details, customer_details } = req.body
      //3. Server then makes a request to a Woo api passing the req.body props with set_paid: false

      const woo_response = await poster(
        'https://elementor.local/wp-json/wc/v3/orders',
        process.env.WOO_CONSUMER_KEY!,
        process.env.WOO_CONSUMER_SECRET!,
        customer_details,
        'POST',
      )

      const order = await woo_response.json()

      //4.Server then gets a reponse with a the ammount that needs to be paid (order.total)
      //and then we check if the ammount that is provided by the client side matches the reponse from Woo. A mismatch here most likely means that there is an attempt to manually modify a POST request
      //or prices were modified just before an order was placed.
      const { amount } = payment_details
      //5. Then we create a new payment intent and send the client secret back to the client side.
      if (amount === parseFloat(order.total) * 100) {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'usd',
        })

        res.status(200).send({ clientSecret: paymentIntent.client_secret })
        //6. We also hash the order id that is sent to the client. This hashed order id will be used to update the order status to "paid"
      } else {
        res.status(400).end()
      }

      //
    } catch (error) {
      console.log(error.raw)
      res.status(400).json({ message: error })
    }
  } else {
    res.status(401).json({ message: 'Method not allowed' })
  }
}
