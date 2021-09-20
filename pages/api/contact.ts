import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  title: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).send(JSON.stringify(req.body))
}
