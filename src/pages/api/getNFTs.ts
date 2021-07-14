import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Nft } from '../../types'

async function GetNFTs(req: NextApiRequest, res: NextApiResponse) {
  const result = await fetch(
    `https://api.opensea.io/api/v1/assets?owner=${req.query.address}`
  )

  const data = await result.json()

  const cleanData: Nft[] = data.assets.filter(
    (o: Nft) => !o.name?.includes('.eth')
  )
  res.status(200).send(cleanData)
}

export default GetNFTs
