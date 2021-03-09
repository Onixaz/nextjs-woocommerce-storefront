import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'
import jwt from 'jsonwebtoken'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { id } = req.body

  const response = await fetcher(`/wp-json/wc/v3/customers/${id}`)

  return res.status(200).json({ message: await response.json() })
}
