import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'
import { getSession } from 'next-auth/client'
import jwt from 'jsonwebtoken'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).json({ message: 'Method not allowed' })

  const session: any = await getSession({ req })
  if (!session) return res.status(401).json({ message: 'Access denied', status: 401 })

  try {
    const key: any = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY!, {
      algorithms: ['HS256'],
      ignoreNotBefore: true,
    })

    const response = await fetcher(`/wp-json/wc/v3/customers/${key.data.user.id}`)

    return res.status(200).send(await response.json())
  } catch (error) {
    return res.status(500).send(error)
  }
}
