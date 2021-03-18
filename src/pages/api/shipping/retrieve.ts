import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/functions'

interface Shipping {
  id: number
  title: string
  method_id: string
  settings: { cost: { value: string } }
  cost: number
  enabled: boolean
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).json({ message: 'Method not allowed' })
  const response = await fetcher(`/wp-json/wc/v3/shipping/zones/0/methods`)
  const shippingJSON = await response.json()

  const shippingOptions = shippingJSON.map((item: Shipping) => {
    return {
      id: item.id,
      title: item.title,
      method: item.method_id,
      cost: item.settings.cost.value ? parseFloat(item.settings.cost.value) : 0,
      enabled: item.enabled,
    }
  })

  return res.status(200).send(shippingOptions)
}
