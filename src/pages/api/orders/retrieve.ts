import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'
import jwt from 'jsonwebtoken'
import { getSession } from 'next-auth/client'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })
  if (!session) return res.status(401).json({ message: 'Access denied', status: 401 })

  try {
    const key: any = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY!, {
      algorithms: ['HS256'],
      ignoreNotBefore: true,
    })

    const response = await fetcher(`/wp-json/wc/v3/orders?customer=${key.data.user.id}`)

    return res.status(200).send(await response.json())
  } catch (error) {
    return res.status(500).send(error)
  }
}
