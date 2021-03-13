import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'
import jwt from 'jsonwebtoken'
import { getSession } from 'next-auth/client'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })
  if (!session) return res.status(401).json({ message: 'Access denied' })
  console.log(session)

  const token: any = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY!)
  if (!token) return res.status(401).json({ message: 'Access denied' })

  const response = await fetcher(`/wp-json/wc/v3/customers/${token.data.user.id}`)

  return res.status(200).json({ message: await response.json() })
}
