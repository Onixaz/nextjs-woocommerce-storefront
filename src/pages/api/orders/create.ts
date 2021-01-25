import { NextApiRequest, NextApiResponse } from 'next'
import { poster } from '../../../utils/functions'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return new Promise((resolve: any) => {
      poster(
        'https://elementor.local/wp-json/wc/v3/orders',
        process.env.WOO_CONSUMER_KEY!,
        process.env.WOO_CONSUMER_SECRET!,
        req.body,
      )
        .then((response) => response.json())
        .then((data) => {
          res.setHeader('Content-Type', 'application/json')
          res.status(200).json({ message: data })
          resolve()
        })
        .catch((error) => {
          res.json(error)
          res.status(405).end()
          return resolve()
        })
    })
  } else {
    res.status(401).json({ message: 'Invalid parameters' })
  }
}
