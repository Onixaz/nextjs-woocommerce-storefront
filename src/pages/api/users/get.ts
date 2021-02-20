import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const response = await fetcher(`/wp-json/wc/v3/customers/2`)

  return res.status(200).json({ message: await response.json() })
}
