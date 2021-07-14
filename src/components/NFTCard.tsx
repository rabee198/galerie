/* eslint-disable @next/next/no-img-element */
import { Nft } from '../types'

export const NFTCard = ({ nft }: { nft: Nft }) => {
  return (
    <article className='flex flex-col w-full overflow-hidden'>
      <div>
        <h3 className='text-xl'>{nft.name ?? '...'}</h3>
      </div>
      <div className='w-full h-[225px] rounded overflow-hidden shadow'>
        <a href={nft.permalink ?? '#'} target='_blank' rel='noreferrer'>
          <img
            src={nft.image_url}
            alt={nft.description ? nft.description : 'undefined'}
            className='object-contain w-full h-auto rounded hover:brightness-75'
          />
        </a>
      </div>
    </article>
  )
}
