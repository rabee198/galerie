/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'
import useSWR from 'swr'
import { Nft } from '../types'
import React from 'react'
import { NFTCard } from '../components/NFTCard'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Showcase() {
  const { query } = useRouter()

  const { data, error } = useSWR<Nft[]>(
    `http://localhost:3000/api/getNFTs?address=${query.address}`,
    fetcher,
    {
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    }
  )

  console.log(data)

  if (error) return <div>Failed loading: {error.message}</div>
  if (!data)
    return (
      <div className='flex items-center justify-center h-screen'>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <main className='container mx-auto my-5'>
      <h2 className='my-5 text-2xl font-bold'>{query.address}</h2>
      <section className='grid grid-cols-3 gap-4'>
        {data.map(nft => (
          <NFTCard nft={nft} key={nft.id} />
        ))}
      </section>
    </main>
  )
}
