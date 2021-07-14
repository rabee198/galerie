export type Nft = {
  id: number
  token_id: string
  num_sales: number
  background_color: null
  image_url: string
  image_preview_url: string | null
  image_thumbnail_url: string | null
  image_original_url: string | null
  animation_url: null
  animation_original_url: null
  name: string | null
  description: string | null
  external_link: string | null
  asset_contract: any
  permalink: string | null
  collection: any
  decimals: number | null
  token_metadata: string | null
  owner: any
  sell_orders: any
  creator: any
  traits: any
  last_sale: any
  top_bid: string | null
  listing_date: string | null
  is_presale: boolean
  transfer_fee_payment_token: string | null
  transfer_fee: string | null
}
