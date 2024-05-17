'use client'

import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

export default function AddToCart({ session, product }) {
  const router = useRouter()
  const { addItemToCart } = useCart()

  const handleClick = () => {
    if (session?.user) {
      addItemToCart({
        id: product?.id,
        title: product?.title,
        price: product?.price,
        thumbnail: product?.thumbnail,
        stock: product?.stock,
        quantity: product?.quantity,
      })
    } else {
      router.push('/login')
    }
  }
  return (
    <button
      onClick={handleClick}
      className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
      Add to cart
    </button>
  )
}
