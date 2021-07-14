/* eslint-disable @next/next/no-img-element */
import { Nft } from '../types'

export const NFTCard = ({ nft }: { nft: Nft }) => {
  return (
    <article className='flex flex-col w-full overflow-hidden'>
      <div>
        <h3 className='text-sm text-center mt-2 p-1'>{nft.name ?? '...'}</h3>
      </div>
      <div className='flex justify-center w-full overflow-hidden align-middle rounded'>
        <a href={nft.permalink ?? '#'} target='_blank' rel='noreferrer'>
          <img
            src={nft.image_preview_url ?? '#'}
            alt={nft.description ? nft.description : 'undefined'}
            className='w-full h-auto rounded hover:brightness-75 shadow'
          />
        </a>
      </div>
    </article>
  )
}
