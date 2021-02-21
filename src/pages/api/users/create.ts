import { NextApiRequest, NextApiResponse } from 'next'

// Initialize middleware

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run cors

  // Rest of the API logic
  res.status(200).json({ message: 'hello' })
}
