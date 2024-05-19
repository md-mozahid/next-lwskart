'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function NotFound() {
  const params = useParams()
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-red-500 text-3xl my-10">404</h3>
      <h1 className="text-5xl mb-10">Product Not Found</h1>
      <p className="text-lg">
        Sorry, we could not find the product with this ID:{' '}
        <span className="text-red-500">{params?.productId}</span> .
      </p>
      <div className="flex gap-5 mt-10">
        <button className="text-blue-500">Go Back</button>
        <button className="bg-sky-500 px-3 py-1 rounded-md text-white">
          <Link href="/">Go to Home</Link>
        </button>
      </div>
    </div>
  )
}
