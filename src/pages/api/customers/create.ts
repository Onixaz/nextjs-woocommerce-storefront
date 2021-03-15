import { NextApiRequest, NextApiResponse } from 'next'

import { poster } from '../../../utils/functions'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  try {
    const wooReq = await poster('/wp-json/wc/v3/customers', { ...req.body }, 'POST')
    const wooRes = await wooReq.json()

    if (wooRes.code === 'registration-error-email-exists') {
      return res
        .status(400)
        .json({ message: 'An account is already registered with this email address.' })
    } else if (wooRes.code === 'registration-error-username-exists') {
      return res.status(400).json({
        message: 'An account is already registered with this username. Please choose another.',
      })
    } else {
      return res.status(200).json({ message: `Success` })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}
