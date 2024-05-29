import { getBlurImage } from '@/utils/getBlurImage'
import Image from 'next/image'
import React from 'react'

export default async function ImageSection({product}) {
  // const { base64 } = await getBlurImage(product?.thumbnail);
  return (
    <div>
      <Image
        src={product?.thumbnail}
        alt={product?.title}
        className="w-full"
        width={900}
        height={900}
        // placeholder="blur"
        // blurDataURL={base64}
      />

      <div className="grid grid-cols-5 gap-4 mt-4">
        <Image
          src={product?.images[0]}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
          width={500}
          height={500}
        />

        <Image
          src={product?.images[1]}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
          width={500}
          height={500}
        />

        <Image
          src={product?.images[2]}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
