import { NextApiRequest, NextApiResponse } from 'next'
import { authorizeUser, fetcher } from '../../../utils/functions'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).json({ message: 'Method not allowed' })

  const key = await authorizeUser(req)
  if (!key) return res.status(401).json({ message: 'Access denied' })

  const response = await fetcher(`/wp-json/wc/v3/customers/${key.data.user.id}`)

  return res.status(200).send(await response.json())
}
