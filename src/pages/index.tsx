import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [wallet, setWallet] = useState<string | null>(null)
  return (
    <main className='container flex flex-col justify-center mx-auto my-5'>
      <h1 className='text-3xl'>Galerie</h1>
      <p>view a wallets NFTs in a easily digestible grid</p>
      <div className='flex mt-2'>
        <input
          type='text'
          placeholder='wallet address'
          className='w-full p-2 mr-2 border rounded'
          onChange={e => setWallet(e.target.value)}
        />
        <a
          href={`/showcase?address=${wallet}`}
          className='flex justify-center p-3 text-white align-middle bg-indigo-500 rounded shadow hover:bg-indigo-600'
        >
          go
        </a>
      </div>
    </main>
  )
}
