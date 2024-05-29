'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageSection({ product }) {
  const [thumbnail, setThumbnail] = useState(null)
  // const { base64 } = await getBlurImage(product?.thumbnail);

   const handleImage = (img) => {
     setThumbnail(img)
   }
  return (
    <div>
      <Image
        src={`${thumbnail ? thumbnail : product?.thumbnail}`}
        alt={product?.title}
        className="w-full"
        width={900}
        height={900}
        // placeholder="blur"
        // blurDataURL={base64}
      />

      <div className="grid grid-cols-5 gap-4 mt-4">
        {product?.images &&
          product?.images.map((img) => (
            <Image
              key={img}
              src={img}
              width={100}
              height={100}
              className="w-full cursor-pointer border border-primary"
              alt="product image"
              onClick={() => handleImage(img)}
            />
          ))}
      </div>
    </div>
  )
}
